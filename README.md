# Tiny Tot - Plateforme de Listes de Naissance

Une plateforme moderne et flexible pour créer et gérer des listes de naissance avec cagnotte intégrée.

## 🎯 Proposition de Valeur

Tiny Tot se positionne comme une plateforme innovante de listes de naissance avec :

- **Multi-marques** : Centralisez des produits de plusieurs enseignes sur une seule liste
- **Cagnotte intégrée** : Permettez aux proches de participer financièrement
- **Expérience simple** : Interface intuitive pour les parents et les invités

## 💼 Modèle Économique

### Sources de Revenus

1. **Commissions sur la cagnotte** : ~4% + frais de paiement sur chaque contribution
2. **Partenariats/Affiliation** : Commissions sur les achats via la plateforme
3. **Options premium** : Fonctionnalités avancées (à venir)

### Clients Cibles

- Futurs parents créant leur liste de naissance
- Famille et amis souhaitant offrir des cadeaux

## 🚀 Fonctionnalités

### Pour les Parents

- ✅ Création de liste de naissance personnalisée
- ✅ Ajout de produits de n'importe quelle marque
- ✅ Activation de la cagnotte avec objectif
- ✅ Partage facile via lien unique
- ✅ Suivi des réservations et contributions
- ✅ Dashboard complet

### Pour les Invités

- ✅ Consultation de la liste publique
- ✅ Réservation de cadeaux
- ✅ Contribution à la cagnotte via Stripe
- ✅ Ajout de messages personnalisés

## 🛠️ Stack Technique

- **Framework** : Next.js 16 (App Router)
- **Langage** : TypeScript
- **Base de données** : PostgreSQL avec Prisma ORM
- **Authentification** : NextAuth.js v5
- **Paiements** : Stripe
- **Styling** : Tailwind CSS v4
- **Validation** : Zod + React Hook Form
- **UI Components** : Lucide Icons, Sonner (notifications)

## 📦 Installation

### Prérequis

- Node.js 20+
- PostgreSQL
- Compte Stripe (pour les paiements)
- Compte Google OAuth (pour l'authentification)

### Configuration

1. **Cloner le projet**

```bash
git clone <repository-url>
cd new_mom
```

2. **Installer les dépendances**

```bash
npm install
```

3. **Configurer les variables d'environnement**

Créez un fichier `.env.local` à la racine :

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/minipouce?schema=public"

# Next Auth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# Google OAuth
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# Commission Settings
COMMISSION_RATE=4.0
PAYMENT_PROCESSING_FEE=0.30
```

4. **Initialiser la base de données**

```bash
npx prisma db push
npx prisma generate
```

5. **Lancer le serveur de développement**

```bash
npm run dev
```

L'application sera accessible sur `http://localhost:3000`

## 🗄️ Schéma de Base de Données

### Modèles Principaux

- **User** : Utilisateurs (parents, invités, admin)
- **BirthList** : Listes de naissance avec paramètres
- **Product** : Catalogue de produits
- **Brand** : Marques et partenaires
- **ListProduct** : Produits dans les listes
- **Reservation** : Réservations de cadeaux
- **Contribution** : Contributions à la cagnotte
- **Analytics** : Suivi des événements

### Tracking des Revenus

Chaque contribution enregistre :
- Montant brut
- Commission (4%)
- Frais de paiement
- Montant net reversé aux parents

## 🎨 Structure du Projet

```
src/
├── app/
│   ├── api/              # API Routes
│   │   ├── auth/         # NextAuth
│   │   ├── birth-lists/  # Gestion des listes
│   │   ├── contributions/# Cagnotte
│   │   └── reservations/ # Réservations
│   ├── auth/             # Pages d'authentification
│   ├── dashboard/        # Dashboard parents
│   ├── liste/[slug]/     # Vue publique des listes
│   ├── creer-ma-liste/   # Création de liste
│   └── page.tsx          # Landing page
├── components/           # Composants React
├── lib/                  # Utilitaires
│   ├── auth.ts          # Configuration NextAuth
│   ├── prisma.ts        # Client Prisma
│   └── utils.ts         # Helpers
└── prisma/
    └── schema.prisma     # Schéma de base de données
```

## 🔐 Authentification

NextAuth.js v5 avec support Google OAuth. Les utilisateurs peuvent :
- Se connecter avec Google
- Créer et gérer leurs listes
- Accéder à leur dashboard

## 💳 Système de Paiement

### Stripe Integration

- **Checkout Sessions** pour les contributions
- **Webhooks** pour valider les paiements
- **Commission automatique** : 4% + frais fixes

### Calcul des Frais

```typescript
Montant contribution : 100€
Commission (4%)      : 4€
Frais de paiement   : 0.30€
─────────────────────
Montant net parent  : 95.70€
```

## 🎯 Roadmap

### Phase 1 : MVP ✅
- [x] Landing page
- [x] Authentification
- [x] Création de listes
- [x] Ajout de produits
- [x] Vue publique
- [x] Système de réservation
- [x] Cagnotte avec Stripe

### Phase 2 : Améliorations 🚧
- [ ] Catalogue de produits pré-intégré
- [ ] Scraping automatique de produits
- [ ] Notifications par email
- [ ] Tableau de bord analytics avancé
- [ ] Gestion des partenaires/affiliation

### Phase 3 : Premium 📋
- [ ] Thèmes personnalisables
- [ ] Import/export de listes
- [ ] Support multilingue
- [ ] Application mobile

## 🤝 Partenariats

### Intégration Marques

Le système supporte :
- Tracking des commissions d'affiliation
- Liens affiliés automatiques
- Reporting par marque/partenaire

### Devenir Partenaire

Contactez-nous pour intégrer votre catalogue :
- Commission configurable
- API d'intégration
- Dashboard partenaire

## 📊 Analytics

Le système enregistre :
- Pages vues
- Contributions
- Réservations
- Conversions
- Revenus par liste

## 🔒 Sécurité

- Authentification via NextAuth.js
- Validation des données avec Zod
- Protection CSRF
- Paiements sécurisés via Stripe
- Variables d'environnement

## 🌐 Déploiement

### Vercel (Recommandé)

```bash
vercel --prod
```

### Variables d'environnement à configurer

Voir le fichier `env.example` pour la liste complète.

## 🧪 Tests

```bash
# Linter
npm run lint

# Type checking
npx tsc --noEmit

# Database studio
npm run db:studio
```

## 📄 License

Propriétaire - Tiny Tot © 2025

## 📞 Contact

- Site web : minipouce.fr
- Email : contact@minipouce.fr

## 🙏 Remerciements

Construit avec ❤️ pour faciliter la vie des futurs parents.
# new-mom
