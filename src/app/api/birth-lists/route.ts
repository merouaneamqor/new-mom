import { NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { generateSlug } from "@/lib/utils"

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
      title,
      babyName,
      dueDate,
      description,
      visibility,
      cagnotteEnabled,
      cagnotteGoal,
    } = body

    // Generate unique slug
    let slug = generateSlug(title)
    let slugExists = await prisma.birthList.findUnique({
      where: { slug },
    })

    // If slug exists, append a number
    let counter = 1
    while (slugExists) {
      slug = `${generateSlug(title)}-${counter}`
      slugExists = await prisma.birthList.findUnique({
        where: { slug },
      })
      counter++
    }

    const birthList = await prisma.birthList.create({
      data: {
        title,
        slug,
        babyName: babyName || null,
        dueDate: dueDate ? new Date(dueDate) : null,
        description: description || null,
        visibility: visibility || "PUBLIC",
        cagnotteEnabled: cagnotteEnabled ?? true,
        cagnotteGoal: cagnotteGoal ? parseFloat(cagnotteGoal) : null,
        userId: session.user.id,
      },
    })

    return NextResponse.json(birthList)
  } catch (error) {
    console.error("Error creating birth list:", error)
    return NextResponse.json(
      { error: "Erreur lors de la création de la liste" },
      { status: 500 }
    )
  }
}

export async function GET(request: Request) {
  try {
    const session = await auth()
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Non authentifié" },
        { status: 401 }
      )
    }

    const lists = await prisma.birthList.findMany({
      where: {
        userId: session.user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        products: {
          include: {
            product: {
              include: {
                brand: true,
              },
            },
          },
        },
      },
    })

    return NextResponse.json(lists)
  } catch (error) {
    console.error("Error fetching birth lists:", error)
    return NextResponse.json(
      { error: "Erreur lors de la récupération des listes" },
      { status: 500 }
    )
  }
}

