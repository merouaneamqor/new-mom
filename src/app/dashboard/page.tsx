import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/prisma"
import Link from "next/link"
import { Baby, Plus, Calendar, Gift, Euro, Share2 } from "lucide-react"
import { formatCurrency } from "@/lib/utils"
import { format } from "date-fns"
import { fr } from "date-fns/locale"
import Navbar from "@/components/Navbar"

export default async function DashboardPage() {
  const session = await auth()
  
  if (!session?.user?.id) {
    redirect("/auth/signin?callbackUrl=/dashboard")
  }

  const lists = await prisma.birthList.findMany({
    where: {
      userId: session.user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      products: true,
      contributions: {
        where: {
          status: "COMPLETED",
        },
      },
    },
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Navbar variant="minimal" showAuth={false} showCTA={false} />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Mes listes de naissance
            </h1>
            <p className="text-gray-600">
              Gérez vos listes et suivez les contributions
            </p>
          </div>
          <Link
            href="/creer-ma-liste"
            className="bg-[#f79176] text-white hover:bg-[#f57f63] transition font-medium inline-flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Nouvelle liste
          </Link>
        </div>

        {lists.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-12 text-center">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Gift className="w-10 h-10 text-orange-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Aucune liste pour le moment
            </h2>
            <p className="text-gray-600 mb-6">
              Créez votre première liste de naissance en quelques minutes
            </p>
            <Link
              href="/creer-ma-liste"
              className="bg-[#f79176] text-white hover:bg-[#f57f63] transition font-medium inline-flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Créer ma première liste
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lists.map((list) => {
              const totalProducts = list.products.length
              const totalContributions = list.contributions.reduce(
                (sum, c) => sum + c.amount,
                0
              )

              return (
                <Link
                  key={list.id}
                  href={`/dashboard/liste/${list.slug}`}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition">
                        {list.title}
                      </h3>
                      {list.babyName && (
                        <p className="text-gray-600 text-sm flex items-center gap-1">
                          <Baby className="w-4 h-4" />
                          {list.babyName}
                        </p>
                      )}
                    </div>
                    <Share2 className="w-5 h-5 text-gray-400" />
                  </div>

                  {list.dueDate && (
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                      <Calendar className="w-4 h-4" />
                      {format(new Date(list.dueDate), "dd MMMM yyyy", {
                        locale: fr,
                      })}
                    </div>
                  )}

                  <div className="border-t pt-4 space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 flex items-center gap-1">
                        <Gift className="w-4 h-4" />
                        Produits
                      </span>
                      <span className="font-semibold text-gray-900">
                        {totalProducts}
                      </span>
                    </div>

                    {list.cagnotteEnabled && (
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600 flex items-center gap-1">
                          <Euro className="w-4 h-4" />
                          Cagnotte
                        </span>
                        <span className="font-semibold text-orange-600">
                          {formatCurrency(totalContributions)}
                          {list.cagnotteGoal &&
                            ` / ${formatCurrency(list.cagnotteGoal)}`}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="mt-4 pt-4 border-t">
                    <span className="text-xs text-gray-500">
                      Créée le{" "}
                      {format(new Date(list.createdAt), "dd MMMM yyyy", {
                        locale: fr,
                      })}
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </main>
    </div>
  )
}

