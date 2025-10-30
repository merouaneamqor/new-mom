import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth"

// Get partnership revenue stats
export async function GET(request: Request) {
  try {
    const session = await auth()
    
    if (!session?.user || session.user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "Non autorisé" },
        { status: 403 }
      )
    }

    const { searchParams } = new URL(request.url)
    const brandId = searchParams.get("brandId")
    const startDate = searchParams.get("startDate")
    const endDate = searchParams.get("endDate")

    // Get all partner brands
    const partners = await prisma.brand.findMany({
      where: {
        isPartner: true,
      },
      include: {
        products: {
          include: {
            listProducts: {
              where: {
                status: "PURCHASED",
              },
            },
          },
        },
      },
    })

    // Calculate revenue per partner
    const partnerStats = partners.map((brand) => {
      const totalProducts = brand.products.reduce(
        (sum, product) => sum + product.listProducts.length,
        0
      )
      const totalRevenue = brand.products.reduce(
        (sum, product) =>
          sum +
          product.listProducts.reduce(
            (pSum, lp) => pSum + product.price,
            0
          ),
        0
      )
      const estimatedCommission = brand.commissionRate
        ? (totalRevenue * brand.commissionRate) / 100
        : 0

      return {
        brandId: brand.id,
        brandName: brand.name,
        productsSold: totalProducts,
        totalRevenue,
        commissionRate: brand.commissionRate,
        estimatedCommission,
      }
    })

    // Get contribution stats
    const contributions = await prisma.contribution.findMany({
      where: {
        status: "COMPLETED",
      },
      select: {
        amount: true,
        commissionAmount: true,
        paymentFee: true,
      },
    })

    const contributionStats = {
      totalContributions: contributions.length,
      totalAmount: contributions.reduce((sum, c) => sum + c.amount, 0),
      totalCommissions: contributions.reduce(
        (sum, c) => sum + c.commissionAmount,
        0
      ),
      totalPaymentFees: contributions.reduce((sum, c) => sum + c.paymentFee, 0),
    }

    return NextResponse.json({
      partnerStats,
      contributionStats,
      totalRevenue:
        partnerStats.reduce((sum, p) => sum + p.estimatedCommission, 0) +
        contributionStats.totalCommissions,
    })
  } catch (error) {
    console.error("Error fetching partnership stats:", error)
    return NextResponse.json(
      { error: "Erreur lors de la récupération des statistiques" },
      { status: 500 }
    )
  }
}

// Update partnership terms
export async function PATCH(request: Request) {
  try {
    const session = await auth()
    
    if (!session?.user || session.user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "Non autorisé" },
        { status: 403 }
      )
    }

    const body = await request.json()
    const { brandId, isPartner, commissionRate, affiliateUrl } = body

    if (!brandId) {
      return NextResponse.json(
        { error: "Brand ID requis" },
        { status: 400 }
      )
    }

    const brand = await prisma.brand.update({
      where: { id: brandId },
      data: {
        isPartner: isPartner ?? undefined,
        commissionRate: commissionRate ? parseFloat(commissionRate) : undefined,
        affiliateUrl: affiliateUrl ?? undefined,
      },
    })

    return NextResponse.json(brand)
  } catch (error) {
    console.error("Error updating partnership:", error)
    return NextResponse.json(
      { error: "Erreur lors de la mise à jour du partenariat" },
      { status: 500 }
    )
  }
}

