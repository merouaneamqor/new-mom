import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/prisma"
import Link from "next/link"
import { Baby, TrendingUp, Users, Euro, ShoppingBag, Gift } from "lucide-react"
import { formatCurrency } from "@/lib/utils"
import Navbar from "@/components/Navbar"

export default async function AdminDashboardPage() {
  const session = await auth()
  
  if (!session?.user || session.user.role !== "ADMIN") {
    redirect("/")
  }

  // Fetch global statistics
  const [
    totalUsers,
    totalLists,
    totalProducts,
    totalContributions,
    totalReservations,
    partners,
  ] = await Promise.all([
    prisma.user.count(),
    prisma.birthList.count(),
    prisma.product.count(),
    prisma.contribution.findMany({
      where: { status: "COMPLETED" },
    }),
    prisma.reservation.count(),
    prisma.brand.findMany({
      where: { isPartner: true },
      include: {
        products: {
          include: {
            listProducts: {
              where: { status: "PURCHASED" },
            },
          },
        },
      },
    }),
  ])

  const contributionRevenue = totalContributions.reduce(
    (sum, c) => sum + c.commissionAmount,
    0
  )

  const partnerRevenue = partners.reduce((sum, brand) => {
    const brandRevenue = brand.products.reduce(
      (pSum, product) =>
        pSum +
        product.listProducts.reduce((lpSum, lp) => lpSum + product.price, 0),
      0
    )
    return sum + (brand.commissionRate ? (brandRevenue * brand.commissionRate) / 100 : 0)
  }, 0)

  const totalRevenue = contributionRevenue + partnerRevenue

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Navbar variant="minimal" showAuth={false} showCTA={false} />
      
      {/* Admin Badge */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-4">
          <span className="text-sm bg-amber-100 text-amber-700 px-3 py-1.5 rounded-full font-medium">
            Admin Dashboard
          </span>
          <Link
            href="/dashboard"
            className="text-gray-600 hover:text-orange-600 transition"
          >
            Mes listes
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Tableau de Bord Admin
          </h1>
          <p className="text-gray-600">
            Vue d'ensemble de la plateforme et des revenus
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <Euro className="w-10 h-10 opacity-80" />
              <div className="text-right">
                <div className="text-3xl font-bold">
                  {formatCurrency(totalRevenue)}
                </div>
                <div className="text-orange-100 text-sm">Revenus Total</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <Users className="w-10 h-10 opacity-80" />
              <div className="text-right">
                <div className="text-3xl font-bold">{totalUsers}</div>
                <div className="text-blue-100 text-sm">Utilisateurs</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-500 from-[#faead9] rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <Gift className="w-10 h-10 opacity-80" />
              <div className="text-right">
                <div className="text-3xl font-bold">{totalLists}</div>
                <div className="text-amber-100 text-sm">Listes</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <ShoppingBag className="w-10 h-10 opacity-80" />
              <div className="text-right">
                <div className="text-3xl font-bold">{totalProducts}</div>
                <div className="text-green-100 text-sm">Produits</div>
              </div>
            </div>
          </div>
        </div>

        {/* Revenue Breakdown */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-orange-500" />
              Revenus par Source
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                <div>
                  <div className="font-semibold text-gray-900">
                    Commissions Cagnotte
                  </div>
                  <div className="text-sm text-gray-600">
                    {totalContributions.length} contributions
                  </div>
                </div>
                <div className="text-xl font-bold text-orange-600">
                  {formatCurrency(contributionRevenue)}
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                <div>
                  <div className="font-semibold text-gray-900">
                    Partenariats / Affiliation
                  </div>
                  <div className="text-sm text-gray-600">
                    {partners.length} partenaires
                  </div>
                </div>
                <div className="text-xl font-bold text-blue-600">
                  {formatCurrency(partnerRevenue)}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Statistiques d'Engagement
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b">
                <span className="text-gray-600">Réservations</span>
                <span className="text-2xl font-bold text-gray-900">
                  {totalReservations}
                </span>
              </div>
              <div className="flex items-center justify-between py-3 border-b">
                <span className="text-gray-600">Contributions</span>
                <span className="text-2xl font-bold text-gray-900">
                  {totalContributions.length}
                </span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-gray-600">Montant Total Cagnotte</span>
                <span className="text-2xl font-bold text-green-600">
                  {formatCurrency(
                    totalContributions.reduce((sum, c) => sum + c.amount, 0)
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Partners Table */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Partenaires Actifs
          </h2>
          {partners.length === 0 ? (
            <p className="text-gray-600 text-center py-8">
              Aucun partenaire pour le moment
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Marque
                    </th>
                    <th className="text-right py-3 px-4 font-semibold text-gray-700">
                      Produits
                    </th>
                    <th className="text-right py-3 px-4 font-semibold text-gray-700">
                      Vendus
                    </th>
                    <th className="text-right py-3 px-4 font-semibold text-gray-700">
                      Commission
                    </th>
                    <th className="text-right py-3 px-4 font-semibold text-gray-700">
                      Revenus
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {partners.map((brand) => {
                    const soldCount = brand.products.reduce(
                      (sum, p) => sum + p.listProducts.length,
                      0
                    )
                    const revenue = brand.products.reduce(
                      (sum, p) =>
                        sum +
                        p.listProducts.reduce((s, lp) => s + p.price, 0),
                      0
                    )
                    const commission = brand.commissionRate
                      ? (revenue * brand.commissionRate) / 100
                      : 0

                    return (
                      <tr key={brand.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">
                          <div className="font-medium text-gray-900">
                            {brand.name}
                          </div>
                        </td>
                        <td className="text-right py-3 px-4 text-gray-600">
                          {brand.products.length}
                        </td>
                        <td className="text-right py-3 px-4 text-gray-600">
                          {soldCount}
                        </td>
                        <td className="text-right py-3 px-4 text-gray-600">
                          {brand.commissionRate}%
                        </td>
                        <td className="text-right py-3 px-4 font-semibold text-green-600">
                          {formatCurrency(commission)}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

