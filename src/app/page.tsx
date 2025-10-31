import Link from "next/link"
import { Baby, Gift, Heart, Users, Sparkles, ShoppingBag, CreditCard, Share2, Search, ArrowRight, Check, TrendingUp, Star, Mail, ExternalLink } from "lucide-react"
import Navbar from "@/components/Navbar"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section with Strong CTA */}
      <section className="bg-[#fcead8] py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
              Prêts à faire votre<br />
              <span className="bg-gradient-to-r from-[#fcead8] to-[#faead9] bg-clip-text text-transparent">
                liste de naissance ?
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-4">
              Inscription gratuite en 2 minutes
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link 
                href="/creer-ma-liste"
                className="bg-[#f79176] text-white px-10 py-5 rounded-full hover:bg-[#f57f63] transition-all hover:scale-105 font-bold text-lg inline-flex items-center justify-center gap-3 shadow-lg"
              >
                <Gift className="w-6 h-6" />
                Créer ma liste de naissance
              </Link>
              <Link 
                href="/demo"
                className="bg-white border-2 border-gray-300 text-gray-700 px-10 py-5 rounded-full hover:border-orange-400 hover:shadow-lg transition-all font-bold text-lg inline-flex items-center justify-center gap-2"
              >
                Voir un exemple
                <ExternalLink className="w-5 h-5" />
              </Link>
            </div>

            {/* Social Proof */}
            <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md border border-orange-100">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-200 to-amber-200 border-2 border-white"></div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <p className="text-sm font-semibold text-gray-700">
                  Plus de <span className="text-orange-600">15,000 parents</span> nous ont fait confiance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inspiration Section - Similar to Minipouce */}
      <section className="py-20 bg-[#ffffff]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-4">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-bold">L'inspiration, la clef de Tiny Tot</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Créez votre liste.<br />C'est simple et rapide.
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tiny Tot a créé pour vous des listes d'inspiration par univers, par thème, par style et par marque. 
                Gagnez du temps et imaginez pour votre futur enfant un univers qui vous ressemble.
              </p>
            </div>

            {/* Category Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
              {[
                { name: "Poussettes", icon: "🚼" },
                { name: "Chambres", icon: "🛏️" },
                { name: "Vêtements", icon: "👶" },
                { name: "Jouets d'éveil", icon: "🧸" },
                { name: "Puériculture", icon: "🍼" },
              ].map((category, index) => (
                <Link 
                  key={index}
                  href={`/categories/${category.name.toLowerCase()}`}
                  className="group bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 text-center hover:shadow-xl hover:scale-105 transition-all border border-orange-100"
                >
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition">
                    {category.name}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Products, All Shops - Like Minipouce */}
      <section className="py-20 bg-[#fbf7f4]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                  Tous les produits,<br />
                  <span className="text-orange-600">toutes les boutiques</span>
                </h2>
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  Liberté d'ajouter à votre liste de naissance tout ce que vous désirez depuis n'importe quel site web !
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  De petits artisans, de l'occasion... et une recherche intuitive parmi plus de 
                  <span className="font-bold text-orange-600"> 3,500 marques</span> et 
                  <span className="font-bold text-orange-600"> 250,000 articles</span> déjà présents.
                </p>

                {/* Brand Logos */}
                <div className="grid grid-cols-4 gap-4">
                  {["Vertbaudet", "Smallable", "Orchestra", "Aubert", "Bébé9", "Monoprix", "IKEA", "Amazon"].map((brand, i) => (
                    <div key={i} className="bg-white rounded-xl p-3 text-center border border-gray-200 hover:border-orange-300 hover:shadow-md transition">
                      <p className="text-xs font-semibold text-gray-700">{brand}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="bg-white rounded-3xl shadow-2xl p-6 border-2 border-orange-100">
                  {/* Search Bar Mockup */}
                  <div className="bg-gray-50 rounded-xl p-4 mb-6 flex items-center gap-3 border border-gray-200">
                    <Search className="w-5 h-5 text-gray-400" />
                    <input 
                      type="text" 
                      placeholder="Rechercher un produit, une marque..."
                      className="bg-transparent flex-1 outline-none text-gray-600"
                      disabled
                    />
                  </div>
                  
                  {/* Product Results Mockup */}
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-4 flex gap-4 items-center border border-orange-100">
                        <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                          <ShoppingBag className="w-8 h-8 text-orange-400" />
                        </div>
                        <div className="flex-1">
                          <div className="h-3 bg-orange-200 rounded w-3/4 mb-2"></div>
                          <div className="h-2 bg-orange-100 rounded w-1/2"></div>
                        </div>
                        <div className="text-lg font-bold text-orange-600">€€€</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-[#f79176] text-white rounded-2xl px-6 py-3 shadow-xl font-bold">
                  Multi-marques !
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid - Intuitive List + Cagnotte */}
      <section className="py-20 bg-[#ffffff]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Intuitive List */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 md:p-12">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <Baby className="w-8 h-8 text-orange-500" />
                    <span className="font-bold text-gray-900">Ma Liste</span>
                  </div>
                  <Share2 className="w-6 h-6 text-gray-400" />
                </div>
                
                <div className="space-y-3 mb-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Gift className="w-6 h-6 text-orange-500" />
                      </div>
                      <div className="flex-1">
                        <div className="h-2 bg-gray-200 rounded w-3/4 mb-1"></div>
                        <div className="h-2 bg-gray-100 rounded w-1/2"></div>
                      </div>
                      <Check className="w-5 h-5 text-green-500" />
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-extrabold text-gray-900 mb-2">
                  Une liste intuitive
                </h3>
                <p className="text-gray-700">
                  Tiny Tot s'adapte à tous les supports ! Créez et gérez votre liste depuis n'importe quel appareil.
                </p>
              </div>
            </div>

            {/* Cagnotte Feature */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-100 rounded-3xl p-8 md:p-12">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                    <CreditCard className="w-8 h-8 text-orange-500" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Cagnotte Naissance</h4>
                  <div className="text-4xl font-extrabold text-orange-600 mb-4">850€</div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 h-3 rounded-full" style={{ width: "70%" }}></div>
                  </div>
                  <p className="text-sm text-gray-600">Objectif: 1,200€</p>
                </div>
                
                {/* Recent Contributions */}
                <div className="space-y-2">
                  {[
                    { name: "Marie", amount: "50€" },
                    { name: "Thomas", amount: "100€" },
                    { name: "Sophie", amount: "75€" },
                  ].map((contrib, i) => (
                    <div key={i} className="flex items-center justify-between text-sm bg-orange-50 rounded-lg p-2">
                      <span className="font-semibold text-gray-700">{contrib.name}</span>
                      <span className="text-orange-600 font-bold">{contrib.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-extrabold text-gray-900 mb-2">
                  Votre cagnotte en 2 clics
                </h3>
                <p className="text-gray-700">
                  Vos proches participent facilement. Laissez-les contribuer à plusieurs pour un gros achat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Create a List - Educational Section */}
      <section className="py-20 bg-[#fcead8]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                Pourquoi faire une liste<br />
                <span className="text-orange-600">de naissance ?</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Créer une liste de naissance est un passage clé pour anticiper sereinement l'arrivée de votre bébé. 
                En tant que futurs parents, il n'est pas toujours évident de connaître les indispensables pour bébé, 
                ni de s'orienter parmi les marques tendances.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-orange-100">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                {[
                  {
                    icon: <Check className="w-8 h-8 text-green-500" />,
                    title: "Évitez les doublons",
                    description: "Vos proches savent exactement ce qui a été offert"
                  },
                  {
                    icon: <Heart className="w-8 h-8 text-orange-500" />,
                    title: "Recevez ce dont vous avez besoin",
                    description: "Plus de cadeaux inutiles qui prennent la poussière"
                  },
                  {
                    icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
                    title: "Gagnez du temps",
                    description: "Organisez tout au même endroit en quelques minutes"
                  }
                ].map((benefit, i) => (
                  <div key={i} className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-50 rounded-2xl mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <Link 
                  href="/comment-ca-marche"
                  className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold"
                >
                  En savoir plus sur comment ça marche
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-[#fbf7f4]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
              <Mail className="w-8 h-8 text-orange-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Rejoignez notre newsletter
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Inscrivez-vous pour recevoir nos actus, conseils et offres exclusives
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input 
                type="email"
                placeholder="Entrez votre email"
                className="flex-1 px-6 py-4 rounded-full border-2 border-gray-200 focus:border-orange-400 focus:outline-none text-gray-900"
              />
              <button 
                type="submit"
                className="bg-[#f79176] hover:bg-[#f57f63] text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-lg whitespace-nowrap"
              >
                S'inscrire
              </button>
            </form>
            
            <p className="text-sm text-gray-500 mt-4">
              Nous respectons votre vie privée. Pas de spam, promis ! 🤝
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-[#fcead8] to-[#faead9] text-gray-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Pour les futurs parents qui savent ce qu'ils veulent,<br />
              et ceux qui ne le savent pas encore.
            </h2>
            <p className="text-xl text-gray-700 mb-10">
              Rejoignez la communauté Tiny Tot dès aujourd'hui
            </p>
            <Link 
              href="/creer-ma-liste"
              className="inline-flex items-center gap-3 bg-[#f79176] hover:bg-[#f57f63] text-white px-10 py-5 rounded-full hover:scale-105 transition-all font-extrabold text-xl shadow-2xl"
            >
              <Gift className="w-7 h-7" />
              Créer ma liste gratuitement
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
<footer className="border-t bg-[#ffffff]">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4 group">
                <Baby className="w-7 h-7 text-orange-500 group-hover:scale-110 transition-transform" />
                <span className="text-xl font-bold bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent">
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
                  <Link href="/fonctionnalites" className="text-gray-600 hover:text-orange-600 transition-colors">
                    Fonctionnalités
                  </Link>
                </li>
                <li>
                  <Link href="/comment-ca-marche" className="text-gray-600 hover:text-orange-600 transition-colors">
                    Comment ça marche
                  </Link>
                </li>
                <li>
                  <Link href="/tarifs" className="text-gray-600 hover:text-orange-600 transition-colors">
                    Tarifs
                  </Link>
                </li>
                <li>
                  <Link href="/demo" className="text-gray-600 hover:text-orange-600 transition-colors">
                    Démo
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-5 text-lg">Entreprise</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/a-propos" className="text-gray-600 hover:text-orange-600 transition-colors">
                    À propos
                  </Link>
                </li>
                <li>
                  <Link href="/partenaires" className="text-gray-600 hover:text-orange-600 transition-colors">
                    Devenir partenaire
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-orange-600 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-5 text-lg">Légal</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/mentions-legales" className="text-gray-600 hover:text-orange-600 transition-colors">
                    Mentions légales
                  </Link>
                </li>
                <li>
                  <Link href="/cgv" className="text-gray-600 hover:text-orange-600 transition-colors">
                    CGV
                  </Link>
                </li>
                <li>
                  <Link href="/confidentialite" className="text-gray-600 hover:text-orange-600 transition-colors">
                    Confidentialité
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
