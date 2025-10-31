import Link from "next/link"
import { Baby, Gift, UserPlus, List, Share2, Heart, Euro, CheckCircle, MousePointer, Bell, ShoppingBag, Users, Sparkles, ArrowRight, Zap, Shield, Lock } from "lucide-react"
import Navbar from "@/components/Navbar"

export default function CommentCaMarchePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50/30 to-blue-50">
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-orange-200 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-amber-200 rounded-full blur-3xl opacity-50"></div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 px-5 py-2.5 rounded-full mb-8 shadow-sm border border-orange-200">
            <Sparkles className="w-5 h-5 animate-pulse" />
            <span className="text-sm font-semibold">Simple • Intuitif • Gratuit</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-extrabold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-[#fcead8] via-amber-300 to-blue-600 bg-clip-text text-transparent">
              Comment ça marche ?
            </span>
          </h1>
          
          <p className="text-2xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Créez votre liste de naissance en <span className="font-bold text-orange-600">3 minutes</span> et partagez-la avec vos proches en un clic
          </p>
          
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Sans inscription</span>
            </div>
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Gratuit à vie</span>
            </div>
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Multi-marques</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Process - For Parents */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#f79176] hover:bg-[#f57f63] text-white px-5 py-2.5 rounded-full mb-6 shadow-md">
              <Baby className="w-5 h-5" />
              <span className="font-bold">Pour les futurs parents</span>
            </div>
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
              En 3 étapes simples
            </h2>
            <p className="text-xl text-gray-600">
              De l'inscription au partage, tout se fait en quelques minutes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 mb-16 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-20 left-1/4 right-1/4 h-1 bg-gradient-to-r from-orange-200 via-blue-200 to-amber-200 -z-10"></div>
            
            {/* Step 1 */}
            <div className="relative group">
              <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100 h-full hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 rounded-2xl flex items-center justify-center text-white text-2xl font-extrabold shadow-lg rotate-3 group-hover:rotate-6 transition-transform">
                    1
                  </div>
                </div>
                <div className="pt-8">
                  <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <UserPlus className="w-12 h-12 text-orange-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    Inscrivez-vous
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed mb-4">
                    Créez votre compte gratuitement en quelques secondes avec Google.
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm text-green-600 font-medium">
                    <Zap className="w-4 h-4" />
                    <span>30 secondes chrono</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative group">
              <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100 h-full hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-2xl flex items-center justify-center text-white text-2xl font-extrabold shadow-lg -rotate-3 group-hover:-rotate-6 transition-transform">
                    2
                  </div>
                </div>
                <div className="pt-8">
                  <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <List className="w-12 h-12 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    Créez votre liste
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed mb-4">
                    Ajoutez vos produits préférés de n'importe quelle marque.
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm text-blue-600 font-medium">
                    <ShoppingBag className="w-4 h-4" />
                    <span>Multi-marques illimité</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative group">
              <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100 h-full hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 via-amber-300 to-amber-700 rounded-2xl flex items-center justify-center text-white text-2xl font-extrabold shadow-lg rotate-3 group-hover:rotate-6 transition-transform">
                    3
                  </div>
                </div>
                <div className="pt-8">
                  <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Share2 className="w-12 h-12 text-amber-300" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    Partagez
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed mb-4">
                    Envoyez le lien unique à vos proches en un clic.
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm text-amber-300 font-medium">
                    <Heart className="w-4 h-4" />
                    <span>Partage instantané</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick CTA */}
          <div className="text-center">
            <Link 
              href="/creer-ma-liste"
              className="inline-flex items-center gap-3 bg-[#f79176] hover:bg-[#f57f63] text-white px-10 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all font-bold text-lg"
            >
              <Gift className="w-6 h-6" />
              Commencer maintenant
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-sm text-gray-500 mt-4">
              ✨ Sans carte bancaire • Gratuit pour toujours
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Features for Parents */}
      <section className="bg-gradient-to-b from-white via-orange-50/30 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                Toutes les fonctionnalités en détail
              </h2>
              <p className="text-xl text-gray-600">
                Découvrez tout ce qui rend Tiny Tot unique
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Multi-brand */}
              <div className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                      <ShoppingBag className="w-7 h-7 text-orange-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Produits multi-marques
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Ajoutez des produits de n'importe quelle boutique : Amazon, Bébé9, Aubert, Vertbaudet... 
                      <span className="block mt-1 text-orange-600 font-medium">Plus besoin de jongler entre plusieurs listes !</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Cagnotte */}
              <div className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                      <Euro className="w-7 h-7 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Cagnotte intégrée
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Vos proches peuvent aussi contribuer financièrement. Fixez un objectif ou laissez ouvert.
                      <span className="block mt-1 text-blue-600 font-medium">Recevez l'argent directement sur votre compte.</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Dashboard */}
              <div className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                      <CheckCircle className="w-7 h-7 text-amber-300" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Suivi en temps réel
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Consultez votre dashboard pour voir qui a réservé quoi et le montant de la cagnotte.
                      <span className="block mt-1 text-amber-300 font-medium">Tous les messages de vos proches au même endroit.</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Notifications */}
              <div className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                      <Bell className="w-7 h-7 text-green-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Notifications automatiques
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Recevez un email à chaque réservation ou contribution.
                      <span className="block mt-1 text-green-600 font-medium">Restez informés sans avoir à vérifier constamment.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Guests */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-5 py-2.5 rounded-full mb-6 shadow-md">
              <Users className="w-5 h-5" />
              <span className="font-bold">Pour les invités</span>
            </div>
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
              Offrir un cadeau, c'est simple
            </h2>
            <p className="text-xl text-gray-600">
              Aucune inscription requise pour participer
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="space-y-8">
                <div className="flex gap-5 group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br bg-[#f79176] hover:bg-[#f57f63] text-white rounded-2xl flex items-center justify-center font-extrabold text-lg shadow-lg group-hover:scale-110 transition-transform">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Recevez le lien
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Les futurs parents vous envoient le lien de leur liste par email, SMS ou message.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl flex items-center justify-center font-extrabold text-lg shadow-lg group-hover:scale-110 transition-transform">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Choisissez votre cadeau
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Parcourez la liste et sélectionnez ce qui vous plaît. Vous voyez ce qui est déjà réservé.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 from-[#faead9] text-white rounded-2xl flex items-center justify-center font-extrabold text-lg shadow-lg group-hover:scale-110 transition-transform">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Réservez ou contribuez
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Réservez le produit pour l'acheter vous-même, ou contribuez à la cagnotte en quelques clics.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-100 via-amber-100 to-blue-100 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Deux options pour offrir
                </h4>
                
                <div className="space-y-5">
                  <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-6 border-2 border-orange-300 shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                        <Gift className="w-6 h-6 text-white" />
                      </div>
                      <span className="font-bold text-gray-900 text-lg">Réserver un produit</span>
                    </div>
                    <p className="text-gray-700 ml-13">
                      Vous achetez le cadeau vous-même sur le site de la marque. 
                      <span className="block mt-1 font-semibold text-orange-600">✓ Pas de frais supplémentaires</span>
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6 border-2 border-blue-300 shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                        <Euro className="w-6 h-6 text-white" />
                      </div>
                      <span className="font-bold text-gray-900 text-lg">Contribuer à la cagnotte</span>
                    </div>
                    <p className="text-gray-700 ml-13">
                      Donnez le montant de votre choix. Les parents utilisent l'argent comme ils veulent.
                      <span className="block mt-1 font-semibold text-blue-600">✓ Paiement sécurisé instantané</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 via-amber-300 to-orange-600 rounded-3xl p-10 text-white text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16 blur-3xl"></div>
            <div className="relative">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Heart className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-extrabold mb-4">
                Pas besoin de créer un compte
              </h3>
              <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
                En tant qu'invité, vous pouvez consulter la liste, réserver des cadeaux et contribuer 
                sans avoir à créer un compte. <span className="font-bold underline">Juste votre nom et email suffisent !</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Trust */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-bold">Sécurité garantie</span>
              </div>
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Sécurisé et fiable
            </h2>
            <p className="text-xl text-gray-600 mb-16">
              Votre confiance est notre priorité
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="group bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:shadow-2xl hover:border-green-200 hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-md">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Paiements sécurisés
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Nous utilisons <span className="font-bold text-green-600">Stripe</span>, leader mondial du paiement en ligne. 
                  Vos données bancaires sont protégées.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:shadow-2xl hover:border-blue-200 hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-md">
                  <Lock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Données protégées
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Vos informations personnelles sont <span className="font-bold text-blue-600">chiffrées</span> et ne sont jamais partagées 
                  avec des tiers.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:shadow-2xl hover:border-amber-200 hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-md">
                  <Heart className="w-8 h-8 text-amber-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Support réactif
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Une question ? Un problème ? Notre équipe vous répond <span className="font-bold text-amber-300">rapidement</span> 
                  par email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section (Placeholder) */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Voyez Tiny Tot en action
            </h2>
            <p className="text-xl text-gray-600">
              Une démo vaut mieux que mille mots
            </p>
          </div>

          <div className="relative bg-gradient-to-br from-orange-200 via-amber-200 to-blue-200 rounded-3xl p-2 shadow-2xl">
            <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-3xl p-8 aspect-video flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
              <div className="text-center relative z-10">
                <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl group hover:scale-110 transition-transform cursor-pointer">
                  <MousePointer className="w-12 h-12 text-orange-600 group-hover:text-amber-300 transition-colors" />
                </div>
                <p className="text-gray-800 font-bold text-lg mb-2">
                  Vidéo de démonstration à venir
                </p>
                <p className="text-gray-600 text-sm">
                  Découvrez bientôt comment utiliser Tiny Tot en 2 minutes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-orange-50/30 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                Questions fréquentes
              </h2>
              <p className="text-lg text-gray-600">
                Tout ce que vous devez savoir
              </p>
            </div>

            <div className="space-y-5">
              <details className="group bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  <span>Combien de temps faut-il pour créer une liste ?</span>
                  <span className="text-orange-500 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-600 mt-4 leading-relaxed pt-4 border-t border-gray-100">
                  <span className="font-bold text-orange-600">Moins de 5 minutes !</span> Vous pouvez créer votre liste et ajouter vos premiers produits 
                  très rapidement. Vous pourrez la compléter au fur et à mesure.
                </p>
              </details>

              <details className="group bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  <span>Puis-je modifier ma liste après l'avoir partagée ?</span>
                  <span className="text-blue-500 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-600 mt-4 leading-relaxed pt-4 border-t border-gray-100">
                  <span className="font-bold text-blue-600">Oui, absolument !</span> Vous pouvez ajouter, modifier ou supprimer des produits à tout moment. 
                  Les changements sont visibles immédiatement pour vos proches.
                </p>
              </details>

              <details className="group bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-amber-200 hover:shadow-xl transition-all">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  <span>Que se passe-t-il après la naissance ?</span>
                  <span className="text-amber-500 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-600 mt-4 leading-relaxed pt-4 border-t border-gray-100">
                  Votre liste reste accessible <span className="font-bold text-amber-300">aussi longtemps que vous le souhaitez</span>. Vous pouvez la fermer, 
                  l'archiver ou créer une nouvelle liste pour un autre événement.
                </p>
              </details>

              <details className="group bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-green-200 hover:shadow-xl transition-all">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  <span>Les invités peuvent-ils voir qui a offert quoi ?</span>
                  <span className="text-green-500 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-600 mt-4 leading-relaxed pt-4 border-t border-gray-100">
                  <span className="font-bold text-green-600">Non</span>, par défaut seuls les parents voient qui a réservé ou contribué. 
                  Cela évite la comparaison entre invités et préserve la surprise.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-[#f79176] rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-32 -translate-y-32 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-32 translate-y-32 blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-10 h-10 animate-pulse" />
              </div>
              
              <h2 className="text-5xl font-extrabold mb-6">
                Prêt à commencer ?
              </h2>
              
              <p className="text-2xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
                Créez votre liste de naissance en quelques minutes et simplifiez-vous la vie
              </p>
              
              <Link 
                href="/creer-ma-liste"
                className="inline-flex items-center gap-3 bg-white text-gray-900 px-12 py-5 rounded-full hover:scale-105 hover:shadow-2xl transition-all font-extrabold text-xl group"
              >
                <Gift className="w-7 h-7 text-orange-500 group-hover:rotate-12 transition-transform" />
                Créer ma liste gratuitement
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <div className="mt-8 flex items-center justify-center gap-6 text-white/90">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">Sans carte bancaire</span>
                </div>
                <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">Gratuit pour toujours</span>
                </div>
                <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">Multi-marques</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4 group">
                <Baby className="w-7 h-7 text-orange-500 group-hover:scale-110 transition-transform" />
                <span className="text-xl font-bold bg-gradient-to-r from-[#fcead8] from-[#faead9] bg-clip-text text-transparent">
                  Tiny Tot
                </span>
              </Link>
              <p className="text-gray-600 leading-relaxed mb-4">
                La plateforme de listes de naissance qui simplifie la vie des futurs parents.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-500">Créé avec ❤️ en France</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-5 text-lg">Produit</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/fonctionnalites" className="text-gray-600 hover:text-orange-600 transition-colors flex items-center gap-2 group">
                    <span className="group-hover:translate-x-1 transition-transform">Fonctionnalités</span>
                  </Link>
                </li>
                <li>
                  <Link href="/tarifs" className="text-gray-600 hover:text-orange-600 transition-colors flex items-center gap-2 group">
                    <span className="group-hover:translate-x-1 transition-transform">Tarifs</span>
                  </Link>
                </li>
                <li>
                  <Link href="/demo" className="text-gray-600 hover:text-orange-600 transition-colors flex items-center gap-2 group">
                    <span className="group-hover:translate-x-1 transition-transform">Démo</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-5 text-lg">Entreprise</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/a-propos" className="text-gray-600 hover:text-orange-600 transition-colors flex items-center gap-2 group">
                    <span className="group-hover:translate-x-1 transition-transform">À propos</span>
                  </Link>
                </li>
                <li>
                  <Link href="/partenaires" className="text-gray-600 hover:text-orange-600 transition-colors flex items-center gap-2 group">
                    <span className="group-hover:translate-x-1 transition-transform">Devenir partenaire</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-orange-600 transition-colors flex items-center gap-2 group">
                    <span className="group-hover:translate-x-1 transition-transform">Contact</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-5 text-lg">Légal</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/mentions-legales" className="text-gray-600 hover:text-orange-600 transition-colors flex items-center gap-2 group">
                    <span className="group-hover:translate-x-1 transition-transform">Mentions légales</span>
                  </Link>
                </li>
                <li>
                  <Link href="/cgv" className="text-gray-600 hover:text-orange-600 transition-colors flex items-center gap-2 group">
                    <span className="group-hover:translate-x-1 transition-transform">CGV</span>
                  </Link>
                </li>
                <li>
                  <Link href="/confidentialite" className="text-gray-600 hover:text-orange-600 transition-colors flex items-center gap-2 group">
                    <span className="group-hover:translate-x-1 transition-transform">Confidentialité</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-8 text-center">
            <p className="text-gray-600 font-medium">
              &copy; 2025 <span className="font-bold text-orange-600">Tiny Tot</span>. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

