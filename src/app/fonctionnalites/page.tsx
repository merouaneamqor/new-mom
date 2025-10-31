import Link from "next/link"
import { 
  Baby, 
  Gift, 
  ShoppingBag, 
  Euro, 
  Share2, 
  Heart, 
  Sparkles, 
  Users, 
  Lock, 
  Bell, 
  BarChart3, 
  Smartphone, 
  Globe, 
  Palette, 
  FileText, 
  MessageSquare,
  Clock,
  CheckCircle,
  Crown,
  Zap,
  Search,
  Download,
  Mail
} from "lucide-react"
import Navbar from "@/components/Navbar"

export default function FonctionnalitesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-orange-50">
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Toutes les fonctionnalités</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Une plateforme complète pour votre <span className="text-orange-600">liste de naissance</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Découvrez tout ce que Tiny Tot peut faire pour simplifier l'organisation de votre liste
          </p>

          <Link 
            href="/creer-ma-liste"
            className="inline-flex items-center gap-2 bg-[#f79176] text-white px-8 py-4 rounded-full hover:bg-[#f57f63] transition font-semibold text-lg"
          >
            <Gift className="w-5 h-5" />
            Essayer gratuitement
          </Link>
        </div>
      </section>

      {/* Core Features */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Fonctionnalités principales
            </h2>
            <p className="text-xl text-gray-600">
              Tout ce dont vous avez besoin pour votre liste de naissance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Multi-brand */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition group">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <ShoppingBag className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Multi-marques
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Ajoutez des produits de n'importe quelle boutique : Amazon, Bébé9, Aubert, Vertbaudet... 
                Une seule liste pour tous vos souhaits.
              </p>
            </div>

            {/* Cagnotte */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition group">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Euro className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Cagnotte intégrée
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Vos proches peuvent contribuer financièrement. Fixez un objectif ou laissez ouvert. 
                Paiements sécurisés via Stripe.
              </p>
            </div>

            {/* Easy Sharing */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition group">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 from-[#faead9] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Share2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Partage facile
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Un lien unique à partager par email, SMS ou réseaux sociaux. 
                Vos proches y accèdent en un clic.
              </p>
            </div>

            {/* Real-time tracking */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition group">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <BarChart3 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Suivi en temps réel
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Dashboard complet pour voir les réservations, contributions et messages. 
                Statistiques détaillées.
              </p>
            </div>

            {/* No account for guests */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition group">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Sans compte invités
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Vos proches peuvent réserver et contribuer sans créer de compte. 
                Juste un nom et un email.
              </p>
            </div>

            {/* Messages */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition group">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 from-[#faead9] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <MessageSquare className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Messages personnalisés
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Vos proches peuvent laisser des messages avec leurs cadeaux ou contributions. 
                Des moments précieux à conserver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* List Management Features */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Gestion de votre liste
              </h2>
              <p className="text-xl text-gray-600">
                Contrôlez tous les aspects de votre liste de naissance
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Customization */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <Palette className="w-6 h-6 text-orange-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Personnalisation complète
                  </h3>
                  <p className="text-gray-600">
                    Titre personnalisé, description, photo de profil, date prévue, message d'accueil... 
                    Votre liste reflète votre personnalité.
                  </p>
                </div>
              </div>

              {/* Privacy settings */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Lock className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Contrôle de la visibilité
                  </h3>
                  <p className="text-gray-600">
                    Choisissez si votre liste est publique, privée (avec mot de passe) ou non répertoriée 
                    (accessible uniquement via le lien).
                  </p>
                </div>
              </div>

              {/* Product organization */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                    <FileText className="w-6 h-6 text-amber-300" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Organisation des produits
                  </h3>
                  <p className="text-gray-600">
                    Ajoutez des notes, définissez des priorités, indiquez les quantités souhaitées. 
                    Catégorisez vos produits pour faciliter la navigation.
                  </p>
                </div>
              </div>

              {/* Live updates */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Modifications en temps réel
                  </h3>
                  <p className="text-gray-600">
                    Ajoutez, modifiez ou supprimez des produits à tout moment. 
                    Les changements sont instantanés pour vos invités.
                  </p>
                </div>
              </div>

              {/* Notifications */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <Bell className="w-6 h-6 text-orange-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Notifications intelligentes
                  </h3>
                  <p className="text-gray-600">
                    Recevez des alertes par email à chaque réservation ou contribution. 
                    Restez informés sans avoir à vérifier constamment.
                  </p>
                </div>
              </div>

              {/* Analytics */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-indigo-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Statistiques détaillées
                  </h3>
                  <p className="text-gray-600">
                    Nombre de visites, taux de réservation, progression de la cagnotte... 
                    Toutes les métriques importantes dans votre dashboard.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guest Experience */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Expérience invités optimale
            </h2>
            <p className="text-xl text-gray-600">
              Vos proches profitent d'une interface simple et intuitive
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                <Smartphone className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Mobile-friendly
              </h3>
              <p className="text-gray-700 text-sm">
                Interface optimisée pour tous les appareils. Réserver un cadeau depuis son smartphone 
                n'a jamais été aussi simple.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                <Search className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Recherche et filtres
              </h3>
              <p className="text-gray-700 text-sm">
                Filtrez par marque, prix ou catégorie. Recherchez rapidement le cadeau parfait 
                parmi tous les produits.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                <CheckCircle className="w-6 h-6 text-amber-300" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Statut en temps réel
              </h3>
              <p className="text-gray-700 text-sm">
                Vos invités voient immédiatement ce qui est disponible, réservé ou déjà acheté. 
                Pas de doublons !
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Features */}
      <section className="bg-gradient-to-br from-amber-500 to-orange-600 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                <Crown className="w-5 h-5" />
                <span className="font-semibold">Bientôt disponible</span>
              </div>
              <h2 className="text-4xl font-bold mb-4">
                Fonctionnalités Premium
              </h2>
              <p className="text-xl text-amber-100">
                Encore plus de possibilités avec l'abonnement Premium
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Zap className="w-8 h-8 text-yellow-300 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">
                  Listes illimitées
                </h3>
                <p className="text-amber-100 text-sm">
                  Créez autant de listes que vous voulez pour différents événements.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Palette className="w-8 h-8 text-orange-300 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">
                  Thèmes personnalisés
                </h3>
                <p className="text-amber-100 text-sm">
                  Choisissez parmi plusieurs thèmes ou créez le vôtre avec vos couleurs.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Download className="w-8 h-8 text-blue-300 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">
                  Export des données
                </h3>
                <p className="text-amber-100 text-sm">
                  Exportez votre liste et les contributions en PDF ou Excel.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Mail className="w-8 h-8 text-green-300 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">
                  Support prioritaire
                </h3>
                <p className="text-amber-100 text-sm">
                  Réponse garantie sous 24h et assistance personnalisée.
                </p>
              </div>
            </div>

            <div className="text-center mt-10">
              <Link
                href="/tarifs"
                className="inline-flex items-center gap-2 bg-white text-amber-300 px-8 py-4 rounded-full hover:bg-amber-50 transition font-bold text-lg shadow-lg"
              >
                Voir les tarifs Premium
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Trust */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sécurité et fiabilité
            </h2>
            <p className="text-xl text-gray-600">
              Vos données et paiements sont protégés
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">
                SSL/HTTPS
              </h3>
              <p className="text-sm text-gray-600">
                Toutes les données sont chiffrées en transit
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">
                Paiements Stripe
              </h3>
              <p className="text-sm text-gray-600">
                Leader mondial du paiement sécurisé
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-amber-300" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">
                RGPD conforme
              </h3>
              <p className="text-sm text-gray-600">
                Respect total de votre vie privée
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">
                Support dédié
              </h3>
              <p className="text-sm text-gray-600">
                Une équipe à votre écoute 7j/7
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Tiny Tot vs. Autres plateformes
              </h2>
              <p className="text-xl text-gray-600">
                Pourquoi choisir Tiny Tot pour votre liste de naissance
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-orange-500 from-[#faead9] text-white">
                  <tr>
                    <th className="text-left py-4 px-6 font-semibold">Fonctionnalité</th>
                    <th className="text-center py-4 px-4 font-semibold">Tiny Tot</th>
                    <th className="text-center py-4 px-4 font-semibold">Listes traditionnelles</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-4 px-6 text-gray-700">Multi-marques</td>
                    <td className="text-center py-4 px-4">
                      <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4 text-gray-400">✕</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 text-gray-700">Cagnotte intégrée</td>
                    <td className="text-center py-4 px-4">
                      <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4 text-gray-400">✕</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-gray-700">Sans compte pour invités</td>
                    <td className="text-center py-4 px-4">
                      <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4 text-gray-400">✕</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 text-gray-700">Paiements sécurisés</td>
                    <td className="text-center py-4 px-4">
                      <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-gray-700">Gratuit pour parents</td>
                    <td className="text-center py-4 px-4">
                      <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4 text-gray-400">✕</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 text-gray-700">Dashboard analytics</td>
                    <td className="text-center py-4 px-4">
                      <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4 text-gray-400">✕</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Prêt à découvrir toutes ces fonctionnalités ?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Créez votre liste gratuitement et profitez de toutes les fonctionnalités
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/creer-ma-liste"
              className="inline-flex items-center justify-center gap-2 bg-[#f79176] text-white px-10 py-4 rounded-full hover:bg-[#f57f63] transition font-bold text-lg shadow-lg"
            >
              <Gift className="w-6 h-6" />
              Créer ma liste gratuitement
            </Link>
            <Link 
              href="/demo"
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-300 text-gray-700 px-10 py-4 rounded-full hover:border-orange-300 transition font-bold text-lg"
            >
              Voir une démo
            </Link>
          </div>
          <p className="text-sm text-gray-500 mt-6">
            Aucune carte bancaire requise • Essai gratuit illimité
          </p>
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

