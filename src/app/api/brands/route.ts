import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const search = searchParams.get("search")
    const partnersOnly = searchParams.get("partnersOnly") === "true"

    const where: any = {}

    if (search) {
      where.name = { contains: search, mode: "insensitive" }
    }

    if (partnersOnly) {
      where.isPartner = true
    }

    const brands = await prisma.brand.findMany({
      where,
      orderBy: {
        name: "asc",
      },
      include: {
        _count: {
          select: { products: true },
        },
      },
    })

    return NextResponse.json(brands)
  } catch (error) {
    console.error("Error fetching brands:", error)
    return NextResponse.json(
      { error: "Erreur lors de la récupération des marques" },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const session = await auth()
    
    // Only admins can create brands directly
    if (!session?.user || session.user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "Non autorisé" },
        { status: 403 }
      )
    }

    const body = await request.json()
    const {
      name,
      logo,
      website,
      isPartner = false,
      commissionRate,
      affiliateUrl,
    } = body

    if (!name) {
      return NextResponse.json(
        { error: "Le nom de la marque est requis" },
        { status: 400 }
      )
    }

    const brand = await prisma.brand.create({
      data: {
        name,
        logo: logo || null,
        website: website || null,
        isPartner,
        commissionRate: commissionRate ? parseFloat(commissionRate) : null,
        affiliateUrl: affiliateUrl || null,
      },
    })

    return NextResponse.json(brand)
  } catch (error) {
    console.error("Error creating brand:", error)
    return NextResponse.json(
      { error: "Erreur lors de la création de la marque" },
      { status: 500 }
    )
  }
}

