import { prisma } from "@/lib/prisma"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Baby, Calendar, Heart, Gift, Euro, ExternalLink } from "lucide-react"
import { formatCurrency } from "@/lib/utils"
import { format } from "date-fns"
import { fr } from "date-fns/locale"
import ContributeButton from "@/components/ContributeButton"
import ReserveButton from "@/components/ReserveButton"
import Navbar from "@/components/Navbar"

export default async function PublicListPage({
  params,
}: {
  params: { slug: string }
}) {
  const list = await prisma.birthList.findUnique({
    where: {
      slug: params.slug,
    },
    include: {
      products: {
        where: {
          status: {
            not: "UNAVAILABLE",
          },
        },
        include: {
          product: {
            include: {
              brand: true,
            },
          },
          reservations: {
            select: {
              id: true,
              guestName: true,
            },
          },
        },
        orderBy: {
          priority: "desc",
        },
      },
      contributions: {
        where: {
          status: "COMPLETED",
        },
      },
    },
  })

  if (!list || list.visibility === "PRIVATE") {
    notFound()
  }

  const totalContributions = list.contributions.reduce(
    (sum, c) => sum + c.amount,
    0
  )
  const progressPercentage = list.cagnotteGoal
    ? (totalContributions / list.cagnotteGoal) * 100
    : 0

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-orange-50">
      <Navbar showAuth={false} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-100 via-amber-50 to-blue-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-sm">
              <Heart className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-medium text-gray-700">
                Liste de naissance
              </span>
            </div>

            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              {list.title}
            </h1>

            {list.babyName && (
              <p className="text-2xl text-gray-700 mb-4 flex items-center justify-center gap-2">
                <Baby className="w-6 h-6 text-orange-500" />
                Pour l'arrivée de {list.babyName}
              </p>
            )}

            {list.dueDate && (
              <p className="text-lg text-gray-600 flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" />
                Prévu pour le{" "}
                {format(new Date(list.dueDate), "dd MMMM yyyy", {
                  locale: fr,
                })}
              </p>
            )}

            {list.description && (
              <div className="mt-8 bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-gray-700 max-w-2xl mx-auto shadow-sm">
                <p className="text-lg leading-relaxed">{list.description}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Cagnotte Section */}
          {list.cagnotteEnabled && (
            <div className="mb-12">
              <div className="bg-gradient-to-br from-orange-500 from-[#faead9] rounded-3xl p-8 text-white shadow-2xl">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
                    <Euro className="w-8 h-8" />
                    Participer à la cagnotte
                  </h2>
                  <p className="text-orange-100 mb-6">
                    Vous pouvez aussi contribuer financièrement pour aider les
                    futurs parents
                  </p>

                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-6">
                    <div className="flex items-end justify-between mb-3">
                      <span className="text-4xl font-bold">
                        {formatCurrency(totalContributions)}
                      </span>
                      {list.cagnotteGoal && (
                        <span className="text-xl text-orange-100">
                          / {formatCurrency(list.cagnotteGoal)}
                        </span>
                      )}
                    </div>
                    {list.cagnotteGoal && (
                      <div className="w-full bg-white/30 rounded-full h-4 overflow-hidden">
                        <div
                          className="bg-white h-full transition-all duration-500 rounded-full"
                          style={{
                            width: `${Math.min(progressPercentage, 100)}%`,
                          }}
                        />
                      </div>
                    )}
                    <p className="text-orange-100 text-sm mt-2">
                      {list.contributions.length} personne
                      {list.contributions.length > 1 ? "s ont" : " a"}{" "}
                      contribué
                    </p>
                  </div>

                  <ContributeButton listId={list.id} listTitle={list.title} />
                </div>
              </div>
            </div>
          )}

          {/* Products Section */}
          <div>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                <Gift className="w-8 h-8 inline mr-2" />
                Les cadeaux souhaités
              </h2>
              <p className="text-gray-600">
                {list.products.length} produit
                {list.products.length > 1 ? "s" : ""} dans cette liste
              </p>
            </div>

            {list.products.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-12 text-center">
                <Gift className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600">
                  Aucun produit n'a encore été ajouté à cette liste
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {list.products.map((listProduct) => {
                  const isReserved = listProduct.status === "RESERVED"
                  const isPurchased = listProduct.status === "PURCHASED"
                  const reservationsCount = listProduct.reservations.length
                  const quantityLeft =
                    listProduct.quantity - reservationsCount

                  return (
                    <div
                      key={listProduct.id}
                      className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition group"
                    >
                      {listProduct.product.imageUrl && (
                        <div className="aspect-square bg-gray-100 overflow-hidden">
                          <img
                            src={listProduct.product.imageUrl}
                            alt={listProduct.product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                          />
                        </div>
                      )}

                      <div className="p-6">
                        <div className="mb-4">
                          <h3 className="text-lg font-bold text-gray-900 mb-1">
                            {listProduct.product.name}
                          </h3>
                          <p className="text-sm text-gray-600 mb-2">
                            {listProduct.product.brand.name}
                          </p>
                          <p className="text-2xl font-bold text-orange-600">
                            {formatCurrency(listProduct.product.price)}
                          </p>
                        </div>

                        {listProduct.notes && (
                          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                            {listProduct.notes}
                          </p>
                        )}

                        <div className="space-y-3">
                          {isPurchased ? (
                            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-center font-medium">
                              ✓ Déjà acheté
                            </div>
                          ) : isReserved && quantityLeft === 0 ? (
                            <div className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded-lg text-center font-medium">
                              ✓ Réservé ({reservationsCount})
                            </div>
                          ) : (
                            <>
                              {quantityLeft < listProduct.quantity && (
                                <p className="text-sm text-gray-600 text-center">
                                  {quantityLeft} disponible
                                  {quantityLeft > 1 ? "s" : ""} sur{" "}
                                  {listProduct.quantity}
                                </p>
                              )}
                              <ReserveButton
                                listProductId={listProduct.id}
                                listId={list.id}
                                productName={listProduct.product.name}
                              />
                            </>
                          )}

                          {listProduct.product.productUrl && (
                            <a
                              href={listProduct.product.productUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2 text-sm text-orange-600 hover:text-orange-700 transition"
                            >
                              Voir le produit
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-orange-100 to-amber-100 rounded-3xl p-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Vous aussi, créez votre liste de naissance
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Avec Tiny Tot, centralisez tous vos cadeaux préférés et
              bénéficiez d'une cagnotte intégrée
            </p>
            <Link
              href="/creer-ma-liste"
              className="bg-[#f79176] text-white px-8 py-4 rounded-full hover:bg-[#f57f63] transition font-semibold inline-flex items-center gap-2"
            >
              <Gift className="w-5 h-5" />
              Créer ma liste gratuitement
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-gray-50 mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-gray-600 text-sm">
          <p>&copy; 2025 Tiny Tot. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}

