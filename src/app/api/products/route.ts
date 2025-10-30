import { NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function POST(request: Request) {
  try {
    const session = await auth()
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Non authentifié" },
        { status: 401 }
      )
    }

    const body = await request.json()
    const {
      name,
      description,
      price,
      currency = "EUR",
      imageUrl,
      productUrl,
      brandName,
      brandLogo,
      brandWebsite,
      listId,
      quantity = 1,
      priority = 0,
      notes,
    } = body

    if (!name || !price || !brandName) {
      return NextResponse.json(
        { error: "Données manquantes" },
        { status: 400 }
      )
    }

    // Verify list belongs to user
    const list = await prisma.birthList.findFirst({
      where: {
        id: listId,
        userId: session.user.id,
      },
    })

    if (!list) {
      return NextResponse.json(
        { error: "Liste introuvable" },
        { status: 404 }
      )
    }

    // Find or create brand
    let brand = await prisma.brand.findUnique({
      where: { name: brandName },
    })

    if (!brand) {
      brand = await prisma.brand.create({
        data: {
          name: brandName,
          logo: brandLogo || null,
          website: brandWebsite || null,
        },
      })
    }

    // Create product
    const product = await prisma.product.create({
      data: {
        name,
        description: description || null,
        price: parseFloat(price),
        currency,
        imageUrl: imageUrl || null,
        productUrl: productUrl || null,
        brandId: brand.id,
      },
    })

    // Add to list
    const listProduct = await prisma.listProduct.create({
      data: {
        quantity,
        priority,
        notes: notes || null,
        birthListId: listId,
        productId: product.id,
      },
      include: {
        product: {
          include: {
            brand: true,
          },
        },
      },
    })

    return NextResponse.json(listProduct)
  } catch (error) {
    console.error("Error creating product:", error)
    return NextResponse.json(
      { error: "Erreur lors de la création du produit" },
      { status: 500 }
    )
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const search = searchParams.get("search")
    const brandId = searchParams.get("brandId")

    const where: any = {}

    if (search) {
      where.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
      ]
    }

    if (brandId) {
      where.brandId = brandId
    }

    const products = await prisma.product.findMany({
      where,
      include: {
        brand: true,
      },
      take: 50,
      orderBy: {
        createdAt: "desc",
      },
    })

    return NextResponse.json(products)
  } catch (error) {
    console.error("Error fetching products:", error)
    return NextResponse.json(
      { error: "Erreur lors de la récupération des produits" },
      { status: 500 }
    )
  }
}

