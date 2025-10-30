import Link from "next/link"
import { Baby, Gift, UserPlus, List, Share2, Heart, Euro, CheckCircle, MousePointer, Bell, ShoppingBag, Users, Sparkles, ArrowRight } from "lucide-react"

export default function CommentCaMarchePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Baby className="w-8 h-8 text-pink-500" />
            <span className="text-2xl font-bold text-gray-900">Minipouce</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/fonctionnalites" className="text-gray-600 hover:text-pink-600 transition">
              Fonctionnalités
            </Link>
            <Link href="/comment-ca-marche" className="text-pink-600 font-medium">
              Comment ça marche
            </Link>
            <Link href="/tarifs" className="text-gray-600 hover:text-pink-600 transition">
              Tarifs
            </Link>
            <Link href="/auth/signin" className="text-gray-600 hover:text-pink-600 transition">
              Connexion
            </Link>
            <Link 
              href="/creer-ma-liste" 
              className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition font-medium"
            >
              Créer ma liste
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Simple et intuitif</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Comment ça marche ?
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Créez votre liste de naissance en quelques minutes et partagez-la facilement avec vos proches
          </p>
        </div>
      </section>

      {/* Main Process - For Parents */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-pink-500 text-white px-4 py-2 rounded-full mb-4">
              <Baby className="w-5 h-5" />
              <span className="font-semibold">Pour les futurs parents</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900">
              En 3 étapes simples
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto">
                  1
                </div>
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center">
                    <UserPlus className="w-10 h-10 text-pink-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  Inscrivez-vous
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Créez votre compte gratuitement en quelques secondes avec Google. 
                  Aucune carte bancaire requise.
                </p>
              </div>
              {/* Arrow */}
              <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                <ArrowRight className="w-8 h-8 text-pink-400" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto">
                  2
                </div>
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                    <List className="w-10 h-10 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  Créez votre liste
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Ajoutez vos produits préférés de n'importe quelle marque. 
                  Activez la cagnotte si vous le souhaitez.
                </p>
              </div>
              {/* Arrow */}
              <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                <ArrowRight className="w-8 h-8 text-blue-400" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto">
                3
              </div>
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center">
                  <Share2 className="w-10 h-10 text-purple-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Partagez
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Envoyez le lien unique à vos proches par email, SMS ou réseaux sociaux. 
                C'est tout !
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Features for Parents */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Toutes les fonctionnalités en détail
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Multi-brand */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                    <ShoppingBag className="w-6 h-6 text-pink-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Produits multi-marques
                  </h3>
                  <p className="text-gray-600">
                    Ajoutez des produits de n'importe quelle boutique : Amazon, Bébé9, Aubert, Vertbaudet... 
                    Plus besoin de jongler entre plusieurs listes !
                  </p>
                </div>
              </div>

              {/* Cagnotte */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Euro className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Cagnotte intégrée
                  </h3>
                  <p className="text-gray-600">
                    Vos proches peuvent aussi contribuer financièrement. Fixez un objectif ou laissez ouvert. 
                    Vous recevez l'argent directement sur votre compte.
                  </p>
                </div>
              </div>

              {/* Dashboard */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Suivi en temps réel
                  </h3>
                  <p className="text-gray-600">
                    Consultez votre dashboard pour voir qui a réservé quoi, le montant de la cagnotte, 
                    et tous les messages de vos proches.
                  </p>
                </div>
              </div>

              {/* Notifications */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Bell className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Notifications automatiques
                  </h3>
                  <p className="text-gray-600">
                    Recevez un email à chaque réservation ou contribution. 
                    Restez informés sans avoir à vérifier constamment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Guests */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-full mb-4">
              <Users className="w-5 h-5" />
              <span className="font-semibold">Pour les invités</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900">
              Offrir un cadeau, c'est simple
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Recevez le lien
                    </h3>
                    <p className="text-gray-600">
                      Les futurs parents vous envoient le lien de leur liste par email, SMS ou message.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Choisissez votre cadeau
                    </h3>
                    <p className="text-gray-600">
                      Parcourez la liste et sélectionnez ce qui vous plaît. Vous pouvez voir ce qui est déjà réservé.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Réservez ou contribuez
                    </h3>
                    <p className="text-gray-600">
                      Réservez le produit pour l'acheter vous-même, ou contribuez directement à la cagnotte en quelques clics.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl p-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-bold text-gray-900 mb-4 text-center">
                  Deux options pour offrir
                </h4>
                
                <div className="space-y-4">
                  <div className="bg-pink-50 rounded-xl p-4 border-2 border-pink-200">
                    <div className="flex items-center gap-3 mb-2">
                      <Gift className="w-6 h-6 text-pink-600" />
                      <span className="font-bold text-gray-900">Réserver un produit</span>
                    </div>
                    <p className="text-sm text-gray-600 ml-9">
                      Vous achetez le cadeau vous-même sur le site de la marque. 
                      Pas de frais supplémentaires.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-4 border-2 border-blue-200">
                    <div className="flex items-center gap-3 mb-2">
                      <Euro className="w-6 h-6 text-blue-600" />
                      <span className="font-bold text-gray-900">Contribuer à la cagnotte</span>
                    </div>
                    <p className="text-sm text-gray-600 ml-9">
                      Donnez le montant de votre choix. Les parents utilisent l'argent comme ils veulent.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white text-center">
            <Heart className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">
              Pas besoin de créer un compte
            </h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              En tant qu'invité, vous pouvez consulter la liste, réserver des cadeaux et contribuer 
              sans avoir à créer un compte. Juste votre nom et email suffisent !
            </p>
          </div>
        </div>
      </section>

      {/* Security & Trust */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sécurisé et fiable
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Votre confiance est notre priorité
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Paiements sécurisés
                </h3>
                <p className="text-sm text-gray-600">
                  Nous utilisons Stripe, leader mondial du paiement en ligne. 
                  Vos données bancaires sont protégées.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MousePointer className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Données protégées
                </h3>
                <p className="text-sm text-gray-600">
                  Vos informations personnelles sont chiffrées et ne sont jamais partagées 
                  avec des tiers.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Support réactif
                </h3>
                <p className="text-sm text-gray-600">
                  Une question ? Un problème ? Notre équipe vous répond rapidement 
                  par email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section (Placeholder) */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Voyez Minipouce en action
            </h2>
            <p className="text-xl text-gray-600">
              Une démo vaut mieux que mille mots
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl p-8 aspect-video flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <MousePointer className="w-10 h-10 text-pink-600" />
              </div>
              <p className="text-gray-700 font-medium">
                Vidéo de démonstration à venir
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
              Questions fréquentes
            </h2>

            <div className="space-y-4">
              <details className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <summary className="font-bold text-gray-900 cursor-pointer">
                  Combien de temps faut-il pour créer une liste ?
                </summary>
                <p className="text-gray-600 mt-3">
                  Moins de 5 minutes ! Vous pouvez créer votre liste et ajouter vos premiers produits 
                  très rapidement. Vous pourrez la compléter au fur et à mesure.
                </p>
              </details>

              <details className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <summary className="font-bold text-gray-900 cursor-pointer">
                  Puis-je modifier ma liste après l'avoir partagée ?
                </summary>
                <p className="text-gray-600 mt-3">
                  Oui, absolument ! Vous pouvez ajouter, modifier ou supprimer des produits à tout moment. 
                  Les changements sont visibles immédiatement pour vos proches.
                </p>
              </details>

              <details className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <summary className="font-bold text-gray-900 cursor-pointer">
                  Que se passe-t-il après la naissance ?
                </summary>
                <p className="text-gray-600 mt-3">
                  Votre liste reste accessible aussi longtemps que vous le souhaitez. Vous pouvez la fermer, 
                  l'archiver ou créer une nouvelle liste pour un autre événement.
                </p>
              </details>

              <details className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <summary className="font-bold text-gray-900 cursor-pointer">
                  Les invités peuvent-ils voir qui a offert quoi ?
                </summary>
                <p className="text-gray-600 mt-3">
                  Non, par défaut seuls les parents voient qui a réservé ou contribué. 
                  Cela évite la comparaison entre invités et préserve la surprise.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Prêt à commencer ?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Créez votre liste de naissance en quelques minutes
          </p>
          <Link 
            href="/creer-ma-liste"
            className="inline-flex items-center gap-2 bg-pink-500 text-white px-10 py-4 rounded-full hover:bg-pink-600 transition font-bold text-lg shadow-lg"
          >
            <Gift className="w-6 h-6" />
            Créer ma liste gratuitement
          </Link>
          <p className="text-sm text-gray-500 mt-4">
            Aucune carte bancaire requise • Gratuit pour toujours
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Baby className="w-6 h-6 text-pink-500" />
                <span className="text-xl font-bold text-gray-900">Minipouce</span>
              </div>
              <p className="text-gray-600 text-sm">
                La plateforme de listes de naissance qui simplifie la vie des futurs parents.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Produit</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><Link href="/fonctionnalites" className="hover:text-pink-600">Fonctionnalités</Link></li>
                <li><Link href="/tarifs" className="hover:text-pink-600">Tarifs</Link></li>
                <li><Link href="/demo" className="hover:text-pink-600">Démo</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Entreprise</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><Link href="/a-propos" className="hover:text-pink-600">À propos</Link></li>
                <li><Link href="/partenaires" className="hover:text-pink-600">Devenir partenaire</Link></li>
                <li><Link href="/contact" className="hover:text-pink-600">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Légal</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><Link href="/mentions-legales" className="hover:text-pink-600">Mentions légales</Link></li>
                <li><Link href="/cgv" className="hover:text-pink-600">CGV</Link></li>
                <li><Link href="/confidentialite" className="hover:text-pink-600">Confidentialité</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-gray-600 text-sm">
            <p>&copy; 2025 Minipouce. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

