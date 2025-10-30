import Link from "next/link"
import { Baby, Gift, Heart, Users, Sparkles, ShoppingBag, CreditCard, Share2 } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Baby className="w-8 h-8 text-pink-500" />
            <span className="text-2xl font-bold text-gray-900">Minipouce</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/fonctionnalites" className="text-gray-600 hover:text-pink-600 transition">
              Fonctionnalités
            </Link>
            <Link href="/comment-ca-marche" className="text-gray-600 hover:text-pink-600 transition">
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
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Plateforme de listes de naissance nouvelle génération</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Votre liste de naissance,
            <br />
            <span className="text-pink-600">simple et flexible</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Centralisez tous vos cadeaux préférés de différentes marques sur une seule liste. 
            Vos proches peuvent offrir ou contribuer à une cagnotte en toute simplicité.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/creer-ma-liste"
              className="bg-pink-500 text-white px-8 py-4 rounded-full hover:bg-pink-600 transition font-semibold text-lg inline-flex items-center justify-center gap-2"
            >
              <Gift className="w-5 h-5" />
              Créer ma liste gratuitement
            </Link>
            <Link 
              href="/demo"
              className="bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-full hover:border-pink-300 transition font-semibold text-lg"
            >
              Voir une démo
            </Link>
          </div>
        </div>

        {/* Hero Image/Illustration Placeholder */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-pink-100 to-blue-100 rounded-3xl p-8 shadow-2xl border border-gray-200">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <Baby className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <div className="h-4 w-32 bg-gray-200 rounded mb-2"></div>
                    <div className="h-3 w-24 bg-gray-100 rounded"></div>
                  </div>
                </div>
                <Share2 className="w-6 h-6 text-gray-400" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-4 aspect-square flex items-center justify-center">
                    <ShoppingBag className="w-8 h-8 text-gray-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Pourquoi choisir Minipouce ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une expérience repensée pour les futurs parents et leurs proches
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Multi-brand */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition">
            <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center mb-6">
              <ShoppingBag className="w-7 h-7 text-pink-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Multi-marques
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Ajoutez des produits de n'importe quelle boutique en ligne ou physique. 
              Plus besoin de créer plusieurs listes !
            </p>
          </div>

          {/* Cagnotte */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <CreditCard className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Cagnotte intégrée
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Vos proches peuvent aussi contribuer financièrement. 
              Parfait pour les gros achats ou l'imprévu !
            </p>
          </div>

          {/* Simple & Personalized */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition">
            <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
              <Heart className="w-7 h-7 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Simple et personnalisable
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Créez votre liste en quelques minutes. Personnalisez-la à votre image 
              et partagez-la facilement.
            </p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-gradient-to-br from-pink-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-xl text-gray-600">
              En 3 étapes simples
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Créez votre liste
              </h3>
              <p className="text-gray-600">
                Ajoutez vos produits préférés de n'importe quelle boutique et activez la cagnotte
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Partagez facilement
              </h3>
              <p className="text-gray-600">
                Envoyez le lien unique à vos proches par email, SMS ou réseaux sociaux
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Recevez vos cadeaux
              </h3>
              <p className="text-gray-600">
                Vos proches réservent des cadeaux ou contribuent à la cagnotte en toute simplicité
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Stats */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-12 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-8 h-8" />
                <div className="text-5xl font-bold">10k+</div>
              </div>
              <p className="text-pink-100 text-lg">Listes créées</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Gift className="w-8 h-8" />
                <div className="text-5xl font-bold">50k+</div>
              </div>
              <p className="text-pink-100 text-lg">Cadeaux offerts</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Heart className="w-8 h-8" />
                <div className="text-5xl font-bold">98%</div>
              </div>
              <p className="text-pink-100 text-lg">Parents satisfaits</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Prêt à créer votre liste ?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Rejoignez des milliers de futurs parents qui ont choisi Minipouce pour leur liste de naissance
          </p>
          <Link 
            href="/creer-ma-liste"
            className="bg-pink-500 text-white px-10 py-4 rounded-full hover:bg-pink-600 transition font-semibold text-lg inline-flex items-center gap-2"
          >
            <Gift className="w-6 h-6" />
            Créer ma liste gratuitement
          </Link>
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
