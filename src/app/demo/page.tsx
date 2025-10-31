import Link from "next/link"
import { Baby, Gift, Users, Euro, CheckCircle, ArrowRight, Sparkles, Heart, Share2, Bell, Play } from "lucide-react"
import Navbar from "@/components/Navbar"

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-orange-200 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-amber-200 rounded-full blur-3xl opacity-50"></div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 px-5 py-2.5 rounded-full mb-8 shadow-sm border border-orange-200">
            <Play className="w-5 h-5" />
            <span className="text-sm font-semibold">Démo interactive</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-extrabold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-[#fcead8] via-amber-300 to-blue-600 bg-clip-text text-transparent">
              Voyez Tiny Tot en action
            </span>
          </h1>
          
          <p className="text-2xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
            Découvrez comment créer votre liste de naissance en quelques minutes et la partager avec vos proches
          </p>
        </div>
      </section>

      {/* Interactive Demo Sections */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto space-y-24">
          
          {/* Demo 1: Create List */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-4">
                <span className="font-bold">Étape 1</span>
              </div>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                Créez votre liste en 2 minutes
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Inscrivez-vous avec Google, donnez un nom à votre liste et personnalisez-la selon vos besoins.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-gray-900">Inscription rapide</span>
                    <p className="text-gray-600">Connexion en un clic avec Google</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-gray-900">Personnalisation</span>
                    <p className="text-gray-600">Nom du bébé, date prévue, message personnalisé</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-gray-900">URL unique</span>
                    <p className="text-gray-600">Votre liste a son propre lien facile à partager</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-200 via-amber-200 to-blue-200 rounded-3xl p-2 shadow-2xl">
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <Baby className="w-8 h-8 text-orange-500" />
                    <span className="text-2xl font-bold bg-gradient-to-r from-[#fcead8] from-[#faead9] bg-clip-text text-transparent">Tiny Tot</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Créer ma liste</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Titre de la liste</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:border-orange-500 focus:outline-none"
                        placeholder="Liste de naissance de..."
                        disabled
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nom du bébé</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:border-orange-500 focus:outline-none"
                        placeholder="Emma"
                        disabled
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Date prévue</label>
                      <input 
                        type="date" 
                        className="w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:border-orange-500 focus:outline-none"
                        disabled
                      />
                    </div>
                    <button className="w-full bg-[#f79176] hover:bg-[#f57f63] text-white py-3 rounded-xl font-bold shadow-lg cursor-not-allowed opacity-75">
                      Créer ma liste
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Demo 2: Add Products */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="bg-gradient-to-br from-blue-200 via-amber-200 to-orange-200 rounded-3xl p-2 shadow-2xl">
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Ajouter des produits</h3>
                  <div className="space-y-4">
                    {/* Product Card 1 */}
                    <div className="border-2 border-blue-200 rounded-xl p-4 flex gap-4">
                      <div className="w-20 h-20 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Gift className="w-10 h-10 text-blue-500" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900">Poussette 3 roues</h4>
                        <p className="text-sm text-gray-600">Amazon</p>
                        <p className="text-lg font-bold text-blue-600">299€</p>
                      </div>
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    </div>
                    {/* Product Card 2 */}
                    <div className="border-2 border-blue-200 rounded-xl p-4 flex gap-4">
                      <div className="w-20 h-20 bg-amber-100 rounded-lg flex items-center justify-center">
                        <Gift className="w-10 h-10 text-amber-500" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900">Lit bébé évolutif</h4>
                        <p className="text-sm text-gray-600">Bébé9</p>
                        <p className="text-lg font-bold text-amber-300">189€</p>
                      </div>
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    </div>
                    {/* Add Button */}
                    <button className="w-full border-2 border-dashed border-orange-300 rounded-xl py-4 text-orange-600 font-bold hover:bg-orange-50 transition cursor-not-allowed opacity-75">
                      + Ajouter un produit
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
                <span className="font-bold">Étape 2</span>
              </div>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                Ajoutez vos produits préférés
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Ajoutez des produits de n'importe quelle marque. Amazon, Vertbaudet, Aubert... tout est possible !
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-gray-900">Multi-marques</span>
                    <p className="text-gray-600">Ajoutez des produits de toutes les boutiques</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-gray-900">Prix et photos</span>
                    <p className="text-gray-600">Chaque produit avec son prix et son image</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-gray-900">Lien direct</span>
                    <p className="text-gray-600">Vos invités accèdent au produit en un clic</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Demo 3: Share and Manage */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full mb-4">
                <span className="font-bold">Étape 3</span>
              </div>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                Partagez et suivez en temps réel
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Partagez votre liste avec vos proches et suivez les réservations et contributions en direct.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Share2 className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-gray-900">Partage facile</span>
                    <p className="text-gray-600">Email, SMS, réseaux sociaux... comme vous voulez</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Bell className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-gray-900">Notifications</span>
                    <p className="text-gray-600">Recevez un email à chaque réservation</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-gray-900">Suivi en direct</span>
                    <p className="text-gray-600">Tableau de bord pour suivre l'avancement</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-200 via-orange-200 to-blue-200 rounded-3xl p-2 shadow-2xl">
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h3>
                  <div className="space-y-4">
                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 border-2 border-orange-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Gift className="w-5 h-5 text-orange-600" />
                          <span className="text-sm font-medium text-gray-700">Produits</span>
                        </div>
                        <p className="text-3xl font-bold text-gray-900">12</p>
                      </div>
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border-2 border-blue-200">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle className="w-5 h-5 text-blue-600" />
                          <span className="text-sm font-medium text-gray-700">Réservés</span>
                        </div>
                        <p className="text-3xl font-bold text-gray-900">8</p>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-4 border-2 border-amber-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Euro className="w-5 h-5 text-amber-300" />
                        <span className="text-sm font-medium text-gray-700">Cagnotte</span>
                      </div>
                      <p className="text-3xl font-bold text-gray-900">350€</p>
                      <div className="w-full bg-amber-200 rounded-full h-2 mt-3">
                        <div className="bg-amber-300 h-2 rounded-full" style={{ width: "70%" }}></div>
                      </div>
                    </div>
                    {/* Recent Activity */}
                    <div className="pt-4 border-t-2 border-gray-100">
                      <p className="text-sm font-bold text-gray-700 mb-3">Activité récente</p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-600"><span className="font-bold">Marie</span> a réservé un produit</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-600"><span className="font-bold">Thomas</span> a contribué 50€</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Guest Experience Section */}
      <section className="bg-gradient-to-br from-blue-50 via-amber-50/30 to-orange-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-5 py-2.5 rounded-full mb-6 shadow-md">
                <Users className="w-5 h-5" />
                <span className="font-bold">Pour les invités</span>
              </div>
              <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
                Une expérience simple pour vos proches
              </h2>
              <p className="text-xl text-gray-600">
                Vos invités n'ont besoin d'aucun compte pour participer
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-gray-100">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Comment ça marche pour eux ?</h3>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Reçoivent le lien</h4>
                      <p className="text-gray-600">Par email, SMS ou message</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Parcourent la liste</h4>
                      <p className="text-gray-600">Voient tous les produits et la cagnotte</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Réservent ou contribuent</h4>
                      <p className="text-gray-600">En quelques clics, sans créer de compte</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-amber-100 rounded-2xl p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Users className="w-10 h-10 text-blue-600" />
                    </div>
                    <p className="text-gray-700 font-bold text-lg mb-2">
                      Aucun compte requis
                    </p>
                    <p className="text-gray-600">
                      Juste un nom et un email suffisent
                    </p>
                  </div>
                </div>
              </div>
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
                Prêt à créer votre liste ?
              </h2>
              
              <p className="text-2xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
                Rejoignez des milliers de futurs parents qui ont simplifié leur liste de naissance
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
                  <span className="font-medium">Gratuit</span>
                </div>
                <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">Sans carte bancaire</span>
                </div>
                <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">2 minutes</span>
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
                  <Link href="/comment-ca-marche" className="text-gray-600 hover:text-orange-600 transition-colors flex items-center gap-2 group">
                    <span className="group-hover:translate-x-1 transition-transform">Comment ça marche</span>
                  </Link>
                </li>
                <li>
                  <Link href="/tarifs" className="text-gray-600 hover:text-orange-600 transition-colors flex items-center gap-2 group">
                    <span className="group-hover:translate-x-1 transition-transform">Tarifs</span>
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

