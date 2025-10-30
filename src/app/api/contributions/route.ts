import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { calculateCommission } from "@/lib/utils"
import Stripe from "stripe"

const getStripe = () => {
  if (!process.env.STRIPE_SECRET_KEY) {
    return null
  }
  return new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2025-02-24.acacia",
  })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { amount, guestName, guestEmail, message, birthListId } = body

    if (!amount || amount < 5) {
      return NextResponse.json(
        { error: "Le montant minimum est de 5€" },
        { status: 400 }
      )
    }

    if (!guestName || !guestEmail || !birthListId) {
      return NextResponse.json(
        { error: "Données manquantes" },
        { status: 400 }
      )
    }

    // Verify list exists
    const list = await prisma.birthList.findUnique({
      where: { id: birthListId },
    })

    if (!list) {
      return NextResponse.json(
        { error: "Liste introuvable" },
        { status: 404 }
      )
    }

    // Calculate commission (4% + payment fee)
    const commissionRate = parseFloat(process.env.COMMISSION_RATE || "4.0")
    const paymentFee = parseFloat(process.env.PAYMENT_PROCESSING_FEE || "0.30")
    const { commissionAmount, netAmount } = calculateCommission(
      amount,
      commissionRate,
      paymentFee
    )

    // Create contribution in database
    const contribution = await prisma.contribution.create({
      data: {
        amount,
        currency: "EUR",
        commissionRate,
        commissionAmount,
        paymentFee,
        netAmount,
        guestName,
        guestEmail,
        message: message || null,
        status: "PENDING",
        birthListId,
      },
    })

    // Create Stripe Checkout Session
    const stripe = getStripe()
    if (stripe) {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "eur",
              product_data: {
                name: `Contribution à la cagnotte - ${list.title}`,
                description: `Don de ${guestName}`,
              },
              unit_amount: Math.round(amount * 100), // Amount in cents
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${process.env.NEXTAUTH_URL}/liste/${list.slug}?contribution=success`,
        cancel_url: `${process.env.NEXTAUTH_URL}/liste/${list.slug}?contribution=cancelled`,
        metadata: {
          contributionId: contribution.id,
          birthListId: list.id,
        },
        customer_email: guestEmail,
      })

      // Update contribution with payment intent
      await prisma.contribution.update({
        where: { id: contribution.id },
        data: {
          paymentIntentId: session.id,
        },
      })

      return NextResponse.json({
        contributionId: contribution.id,
        checkoutUrl: session.url,
      })
    }

    // If no Stripe key, just return success (for development)
    return NextResponse.json({
      contributionId: contribution.id,
      message: "Contribution enregistrée (mode développement)",
    })
  } catch (error) {
    console.error("Error creating contribution:", error)
    return NextResponse.json(
      { error: "Erreur lors de la création de la contribution" },
      { status: 500 }
    )
  }
}

