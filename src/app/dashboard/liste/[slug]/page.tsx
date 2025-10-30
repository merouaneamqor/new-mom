import { auth } from "@/lib/auth"
import { redirect, notFound } from "next/navigation"
import { prisma } from "@/lib/prisma"
import Link from "next/link"
import { Baby, Share2, Plus, Edit, Trash2, ExternalLink, Euro, Gift } from "lucide-react"
import { formatCurrency, getShareUrl } from "@/lib/utils"
import ShareButton from "@/components/ShareButton"
import AddProductButton from "@/components/AddProductButton"

export default async function ListDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const session = await auth()
  
  if (!session?.user?.id) {
    redirect("/auth/signin")
  }

  const list = await prisma.birthList.findUnique({
    where: {
      slug: params.slug,
    },
    include: {
      products: {
        include: {
          product: {
            include: {
              brand: true,
            },
          },
          reservations: true,
        },
        orderBy: {
          priority: "desc",
        },
      },
      contributions: {
        where: {
          status: "COMPLETED",
        },
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  })

  if (!list) {
    notFound()
  }

  if (list.userId !== session.user.id) {
    redirect("/dashboard")
  }

  const shareUrl = getShareUrl(list.slug)
  const totalContributions = list.contributions.reduce(
    (sum, c) => sum + c.amount,
    0
  )
  const progressPercentage = list.cagnotteGoal
    ? (totalContributions / list.cagnotteGoal) * 100
    : 0

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2">
            <Baby className="w-8 h-8 text-pink-500" />
            <span className="text-2xl font-bold text-gray-900">Minipouce</span>
          </Link>
          <div className="flex items-center gap-4">
            <ShareButton url={shareUrl} title={list.title} />
            <Link
              href={`/dashboard/liste/${list.slug}/edit`}
              className="text-gray-600 hover:text-pink-600 transition inline-flex items-center gap-2"
            >
              <Edit className="w-5 h-5" />
              <span className="hidden sm:inline">Modifier</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* List Header */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {list.title}
              </h1>
              {list.babyName && (
                <p className="text-xl text-gray-600 flex items-center gap-2">
                  <Baby className="w-5 h-5" />
                  Pour {list.babyName}
                </p>
              )}
            </div>
          </div>

          {list.description && (
            <p className="text-gray-600 mb-6">{list.description}</p>
          )}

          {/* Share URL */}
          <div className="bg-pink-50 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-2">Lien de partage :</p>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={shareUrl}
                readOnly
                className="flex-1 px-3 py-2 bg-white border border-gray-200 rounded text-sm"
              />
              <button
                onClick={() => navigator.clipboard.writeText(shareUrl)}
                className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition text-sm font-medium"
              >
                Copier
              </button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Products List */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Mes produits ({list.products.length})
              </h2>
              <AddProductButton listId={list.id} />
            </div>

            {list.products.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-12 text-center">
                <Gift className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Aucun produit pour le moment
                </h3>
                <p className="text-gray-600 mb-6">
                  Ajoutez vos premiers produits à votre liste
                </p>
                <AddProductButton listId={list.id} />
              </div>
            ) : (
              <div className="space-y-4">
                {list.products.map((listProduct) => (
                  <div
                    key={listProduct.id}
                    className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition"
                  >
                    <div className="flex gap-4">
                      {listProduct.product.imageUrl && (
                        <div className="w-24 h-24 flex-shrink-0">
                          <img
                            src={listProduct.product.imageUrl}
                            alt={listProduct.product.name}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-1">
                              {listProduct.product.name}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {listProduct.product.brand.name}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-xl font-bold text-pink-600">
                              {formatCurrency(listProduct.product.price)}
                            </p>
                            <p className="text-xs text-gray-500">
                              Quantité: {listProduct.quantity}
                            </p>
                          </div>
                        </div>

                        {listProduct.notes && (
                          <p className="text-sm text-gray-600 mb-3">
                            {listProduct.notes}
                          </p>
                        )}

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {listProduct.status === "RESERVED" && (
                              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                                Réservé ({listProduct.reservations.length})
                              </span>
                            )}
                            {listProduct.status === "PURCHASED" && (
                              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                                Acheté
                              </span>
                            )}
                            {listProduct.product.productUrl && (
                              <a
                                href={listProduct.product.productUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-pink-600 hover:text-pink-700 flex items-center gap-1"
                              >
                                Voir le produit
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            )}
                          </div>
                          <button
                            className="text-gray-400 hover:text-red-600 transition"
                            title="Supprimer"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Cagnotte */}
            {list.cagnotteEnabled && (
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Euro className="w-5 h-5 text-pink-500" />
                  Cagnotte
                </h3>

                <div className="mb-4">
                  <div className="flex items-end justify-between mb-2">
                    <span className="text-3xl font-bold text-pink-600">
                      {formatCurrency(totalContributions)}
                    </span>
                    {list.cagnotteGoal && (
                      <span className="text-gray-600">
                        / {formatCurrency(list.cagnotteGoal)}
                      </span>
                    )}
                  </div>
                  {list.cagnotteGoal && (
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-pink-500 to-purple-500 h-full transition-all duration-500"
                        style={{
                          width: `${Math.min(progressPercentage, 100)}%`,
                        }}
                      />
                    </div>
                  )}
                </div>

                <p className="text-sm text-gray-600 mb-4">
                  {list.contributions.length} contribution
                  {list.contributions.length > 1 ? "s" : ""}
                </p>

                {list.contributions.length > 0 && (
                  <div className="border-t pt-4 space-y-3">
                    <p className="text-sm font-medium text-gray-700">
                      Dernières contributions :
                    </p>
                    {list.contributions.slice(0, 5).map((contribution) => (
                      <div
                        key={contribution.id}
                        className="flex items-center justify-between text-sm"
                      >
                        <span className="text-gray-600">
                          {contribution.guestName}
                        </span>
                        <span className="font-semibold text-pink-600">
                          {formatCurrency(contribution.amount)}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Stats */}
            <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl p-6 text-white">
              <h3 className="text-lg font-bold mb-4">Statistiques</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-pink-100">Produits</span>
                  <span className="text-2xl font-bold">
                    {list.products.length}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-pink-100">Réservations</span>
                  <span className="text-2xl font-bold">
                    {list.products.filter((p) => p.status === "RESERVED").length}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-pink-100">Achetés</span>
                  <span className="text-2xl font-bold">
                    {list.products.filter((p) => p.status === "PURCHASED")
                      .length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

