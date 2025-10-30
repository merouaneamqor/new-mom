import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { eventType, birthListId, metadata } = body

    if (!eventType) {
      return NextResponse.json(
        { error: "Type d'événement requis" },
        { status: 400 }
      )
    }

    await prisma.analytics.create({
      data: {
        eventType,
        birthListId: birthListId || null,
        metadata: metadata || {},
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error recording analytics:", error)
    return NextResponse.json(
      { error: "Erreur lors de l'enregistrement" },
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

    const { searchParams } = new URL(request.url)
    const listId = searchParams.get("listId")
    const startDate = searchParams.get("startDate")
    const endDate = searchParams.get("endDate")

    // Verify user owns the list
    if (listId) {
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
    }

    const where: any = {}

    if (listId) {
      where.birthListId = listId
    }

    if (startDate || endDate) {
      where.createdAt = {}
      if (startDate) where.createdAt.gte = new Date(startDate)
      if (endDate) where.createdAt.lte = new Date(endDate)
    }

    const events = await prisma.analytics.findMany({
      where,
      orderBy: {
        createdAt: "desc",
      },
      take: 1000,
    })

    // Aggregate stats
    const stats = {
      totalEvents: events.length,
      byType: events.reduce((acc: any, event) => {
        acc[event.eventType] = (acc[event.eventType] || 0) + 1
        return acc
      }, {}),
    }

    return NextResponse.json({ events, stats })
  } catch (error) {
    console.error("Error fetching analytics:", error)
    return NextResponse.json(
      { error: "Erreur lors de la récupération des analytics" },
      { status: 500 }
    )
  }
}

