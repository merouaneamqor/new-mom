import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { guestName, guestEmail, message, listProductId, birthListId } = body

    if (!guestName || !guestEmail || !listProductId || !birthListId) {
      return NextResponse.json(
        { error: "Données manquantes" },
        { status: 400 }
      )
    }

    // Verify list product exists and is available
    const listProduct = await prisma.listProduct.findUnique({
      where: { id: listProductId },
      include: {
        reservations: true,
      },
    })

    if (!listProduct) {
      return NextResponse.json(
        { error: "Produit introuvable" },
        { status: 404 }
      )
    }

    // Check if product is still available
    if (listProduct.reservations.length >= listProduct.quantity) {
      return NextResponse.json(
        { error: "Ce produit n'est plus disponible" },
        { status: 400 }
      )
    }

    // Create reservation
    const reservation = await prisma.reservation.create({
      data: {
        guestName,
        guestEmail,
        message: message || null,
        listProductId,
        birthListId,
      },
    })

    // Update product status if fully reserved
    if (listProduct.reservations.length + 1 >= listProduct.quantity) {
      await prisma.listProduct.update({
        where: { id: listProductId },
        data: {
          status: "RESERVED",
        },
      })
    }

    return NextResponse.json(reservation)
  } catch (error) {
    console.error("Error creating reservation:", error)
    return NextResponse.json(
      { error: "Erreur lors de la création de la réservation" },
      { status: 500 }
    )
  }
}

