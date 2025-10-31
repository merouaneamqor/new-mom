import Link from "next/link"
import { Baby, Check, X, Sparkles, Gift, Euro, Users, Crown, Zap } from "lucide-react"
import Navbar from "@/components/Navbar"

export default function TarifsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-orange-50">
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Transparent et sans surprise</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Une tarification simple et <span className="text-orange-600">équitable</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Gratuit pour créer votre liste. Nous gagnons uniquement quand vous recevez des contributions.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="bg-white rounded-3xl shadow-lg border-2 border-gray-100 p-8 relative">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Gift className="w-6 h-6 text-orange-500" />
                <h3 className="text-2xl font-bold text-gray-900">Gratuit</h3>
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold text-gray-900">0€</span>
                <span className="text-gray-600">/mois</span>
              </div>
              <p className="text-gray-600">Pour toujours</p>
            </div>

            <div className="mb-8">
              <p className="text-sm text-gray-700 bg-orange-50 p-3 rounded-lg">
                <strong>Commission cagnotte :</strong> 4% + frais de paiement
              </p>
            </div>

            <Link
              href="/creer-ma-liste"
              className="block w-full bg-[#f79176] text-white hover:bg-[#f57f63] transition font-semibold text-center mb-8"
            >
              Commencer gratuitement
            </Link>

            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
                Inclus :
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">1 liste de naissance active</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Produits illimités</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Multi-marques</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Cagnotte intégrée</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Partage illimité</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Dashboard de suivi</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Support par email</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Branding Tiny Tot</span>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="bg-gradient-to-br from-orange-500 from-[#faead9] rounded-3xl shadow-2xl p-8 relative transform scale-105 border-4 border-orange-400">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                <Crown className="w-4 h-4" />
                POPULAIRE
              </div>
            </div>

            <div className="mb-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-6 h-6" />
                <h3 className="text-2xl font-bold">Premium</h3>
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold">10€</span>
                <span className="text-orange-100">/mois</span>
              </div>
              <p className="text-orange-100">ou 80€/an (2 mois offerts)</p>
            </div>

            <div className="mb-8">
              <p className="text-sm text-white bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                <strong>Commission cagnotte :</strong> 2% seulement + frais de paiement
              </p>
            </div>

            <button
              disabled
              className="block w-full bg-white text-orange-600 py-3 rounded-full font-bold text-center mb-8 opacity-75 cursor-not-allowed"
            >
              Bientôt disponible
            </button>

            <div className="space-y-4 text-white">
              <h4 className="font-semibold text-sm uppercase tracking-wide">
                Tout du plan gratuit, plus :
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="font-medium">Listes illimitées</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="font-medium">Commission réduite (2%)</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Thèmes personnalisables</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Sans branding Tiny Tot</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Analytics avancés</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Logo personnalisé</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Export des données</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Support prioritaire</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-3xl shadow-lg border-2 border-gray-100 p-8 relative">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-6 h-6 text-amber-500" />
                <h3 className="text-2xl font-bold text-gray-900">Entreprise</h3>
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-bold text-gray-900">Sur devis</span>
              </div>
              <p className="text-gray-600">Pour boutiques & partenaires</p>
            </div>

            <div className="mb-8">
              <p className="text-sm text-gray-700 bg-amber-50 p-3 rounded-lg">
                <strong>Solution sur-mesure</strong> adaptée à vos besoins
              </p>
            </div>

            <Link
              href="/contact"
              className="block w-full bg-gray-900 text-white py-3 rounded-full hover:bg-gray-800 transition font-semibold text-center mb-8"
            >
              Nous contacter
            </Link>

            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
                Inclus :
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">White-label complet</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Intégration catalogue</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">API dédiée</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Dashboard entreprise</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Support dédié</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Commissions négociées</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Formation équipe</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">SLA garanti</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commission Details */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Comment fonctionne la commission ?
              </h2>
              <p className="text-xl text-gray-600">
                Nous sommes transparents sur nos tarifs
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Euro className="w-6 h-6 text-orange-500" />
                Exemple de contribution
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <span className="text-gray-700">Contribution d'un proche</span>
                  <span className="text-2xl font-bold text-gray-900">100€</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                  <span className="text-gray-700">Commission Tiny Tot (4%)</span>
                  <span className="text-lg font-semibold text-orange-600">- 4€</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                  <span className="text-gray-700">Frais de paiement Stripe</span>
                  <span className="text-lg font-semibold text-orange-600">- 0.30€</span>
                </div>
                
                <div className="border-t-2 border-gray-200 pt-4">
                  <div className="flex items-center justify-between p-4 bg-green-100 rounded-lg">
                    <span className="text-gray-900 font-bold">Vous recevez</span>
                    <span className="text-3xl font-bold text-green-600">95.70€</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-600 mt-6 text-center">
                Les frais sont automatiquement déduits. Vous recevez l'argent directement sur votre compte bancaire.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-500" />
                  Pour les produits réservés
                </h4>
                <p className="text-gray-700">
                  <strong>0€ de commission !</strong> Lorsque vos proches réservent un cadeau pour l'acheter eux-mêmes, 
                  aucun frais ne s'applique.
                </p>
              </div>

              <div className="bg-amber-50 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Gift className="w-5 h-5 text-amber-500" />
                  Pourquoi une commission ?
                </h4>
                <p className="text-gray-700">
                  Elle nous permet de maintenir la plateforme, d'assurer la sécurité des paiements et 
                  d'améliorer continuellement le service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Questions fréquentes
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">
                Puis-je créer plusieurs listes avec le plan gratuit ?
              </h3>
              <p className="text-gray-600">
                Le plan gratuit permet de créer 1 liste active. Si vous souhaitez créer plusieurs listes 
                (par exemple pour jumeaux, ou une liste de mariage), le plan Premium vous permet d'en créer autant que vous voulez.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">
                Y a-t-il des frais cachés ?
              </h3>
              <p className="text-gray-600">
                Non, absolument aucun. La commission de 4% sur la cagnotte est la seule chose que nous facturons. 
                Il n'y a pas de frais d'inscription, pas d'abonnement obligatoire, et les réservations de produits sont gratuites.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">
                Quand vais-je recevoir l'argent de la cagnotte ?
              </h3>
              <p className="text-gray-600">
                Les fonds sont transférés sur votre compte bancaire sous 7 jours après la contribution. 
                Vous pouvez suivre l'état des paiements dans votre dashboard.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">
                Puis-je passer du plan gratuit au plan Premium plus tard ?
              </h3>
              <p className="text-gray-600">
                Oui, à tout moment ! Vous pouvez upgrader votre compte depuis votre dashboard. 
                La facturation sera au prorata du temps restant dans le mois.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">
                Que se passe-t-il si j'annule mon abonnement Premium ?
              </h3>
              <p className="text-gray-600">
                Votre liste reste accessible jusqu'à la fin de la période payée. Ensuite, vous revenez 
                automatiquement au plan gratuit. Aucune donnée n'est perdue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 from-[#faead9] py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-6">
              Prêt à créer votre liste ?
            </h2>
            <p className="text-xl text-orange-100 mb-10">
              Commencez gratuitement, sans carte bancaire
            </p>
            <Link
              href="/creer-ma-liste"
              className="inline-flex items-center gap-2 bg-white text-orange-600 px-10 py-4 rounded-full hover:bg-orange-50 transition font-bold text-lg"
            >
              <Gift className="w-6 h-6" />
              Créer ma liste gratuitement
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Baby className="w-6 h-6 text-orange-500" />
                <span className="text-xl font-bold text-gray-900">Tiny Tot</span>
              </div>
              <p className="text-gray-600 text-sm">
                La plateforme de listes de naissance qui simplifie la vie des futurs parents.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Produit</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><Link href="/fonctionnalites" className="hover:text-orange-600">Fonctionnalités</Link></li>
                <li><Link href="/tarifs" className="hover:text-orange-600">Tarifs</Link></li>
                <li><Link href="/demo" className="hover:text-orange-600">Démo</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Entreprise</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><Link href="/a-propos" className="hover:text-orange-600">À propos</Link></li>
                <li><Link href="/partenaires" className="hover:text-orange-600">Devenir partenaire</Link></li>
                <li><Link href="/contact" className="hover:text-orange-600">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Légal</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><Link href="/mentions-legales" className="hover:text-orange-600">Mentions légales</Link></li>
                <li><Link href="/cgv" className="hover:text-orange-600">CGV</Link></li>
                <li><Link href="/confidentialite" className="hover:text-orange-600">Confidentialité</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-gray-600 text-sm">
            <p>&copy; 2025 Tiny Tot. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

