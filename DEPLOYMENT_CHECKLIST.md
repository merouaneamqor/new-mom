# ✅ Checklist de Déploiement - Minipouce

## 📋 Pré-Déploiement

### 1. Configuration des Services Externes

#### Google OAuth
- [ ] Projet créé sur Google Cloud Console
- [ ] API Google+ activée
- [ ] Client ID OAuth créé
- [ ] Client Secret copié
- [ ] URLs de redirection configurées :
  - [ ] `http://localhost:3000/api/auth/callback/google` (dev)
  - [ ] `https://minipouce.fr/api/auth/callback/google` (prod)
- [ ] Screen de consentement configuré

#### Stripe
- [ ] Compte Stripe créé
- [ ] Mode test validé
- [ ] Clés API test copiées
- [ ] Clés API production copiées
- [ ] Webhook configuré (à faire après déploiement)

#### Base de Données PostgreSQL
- [ ] Service cloud choisi (Supabase/Neon/Railway)
- [ ] Base de données créée
- [ ] Connection string copiée
- [ ] Connexion testée localement

#### Hébergement (Vercel)
- [ ] Compte Vercel créé
- [ ] CLI installé : `npm i -g vercel`
- [ ] Authentifié : `vercel login`

### 2. Configuration Locale

#### Installation
```bash
# Clone du projet
cd /home/amqor/Work/new_mom

# Installation des dépendances
npm install

# Vérification
npm list --depth=0
```

#### Variables d'Environnement
- [ ] Fichier `.env.local` créé
- [ ] Toutes les variables renseignées :
  ```env
  DATABASE_URL="postgresql://..."
  NEXTAUTH_URL="http://localhost:3000"
  NEXTAUTH_SECRET="..."
  GOOGLE_CLIENT_ID="..."
  GOOGLE_CLIENT_SECRET="..."
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
  STRIPE_SECRET_KEY="sk_test_..."
  COMMISSION_RATE=4.0
  PAYMENT_PROCESSING_FEE=0.30
  ```

#### Base de Données
```bash
# Appliquer le schéma
npx prisma generate
npx prisma db push

# Vérifier avec Prisma Studio
npm run db:studio
```

### 3. Tests Locaux

#### Build & Start
```bash
# Build production
npm run build

# Si erreurs, les corriger avant de continuer

# Démarrer en mode production
npm start
```

#### Tests Fonctionnels Manuels
- [ ] **Page d'accueil** : `http://localhost:3000`
  - [ ] Affichage correct
  - [ ] Liens fonctionnent
  - [ ] Design responsive

- [ ] **Authentification** : `/auth/signin`
  - [ ] Connexion Google fonctionne
  - [ ] Redirection vers dashboard
  - [ ] Session persistante

- [ ] **Création de liste** : `/creer-ma-liste`
  - [ ] Formulaire se remplit
  - [ ] Validation fonctionne
  - [ ] Liste créée en DB
  - [ ] Redirection vers dashboard

- [ ] **Dashboard** : `/dashboard`
  - [ ] Listes affichées
  - [ ] Statistiques correctes
  - [ ] Navigation fluide

- [ ] **Détails liste** : `/dashboard/liste/[slug]`
  - [ ] Informations affichées
  - [ ] Bouton partager fonctionne
  - [ ] Ajout de produits (modal s'ouvre)

- [ ] **Vue publique** : `/liste/[slug]`
  - [ ] Liste visible sans connexion
  - [ ] Produits affichés
  - [ ] Cagnotte visible

- [ ] **Réservation** : Vue publique
  - [ ] Modal s'ouvre
  - [ ] Formulaire valide
  - [ ] Réservation enregistrée
  - [ ] Status produit mis à jour

- [ ] **Contribution** : Vue publique
  - [ ] Modal s'ouvre
  - [ ] Formulaire valide
  - [ ] Redirection Stripe checkout
  - [ ] Paiement test réussi (4242 4242 4242 4242)

- [ ] **Dashboard Admin** : `/admin`
  - [ ] Accessible (si role ADMIN)
  - [ ] Statistiques affichées
  - [ ] Revenus calculés

#### Vérification Console
- [ ] Aucune erreur dans console navigateur
- [ ] Aucune erreur dans terminal serveur
- [ ] Aucun warning critique

## 🚀 Déploiement Production

### 1. Préparation

#### Code
```bash
# Derniers changements
git add .
git commit -m "feat: MVP ready for production"
git push origin main
```

#### Vérifications
- [ ] Tous les fichiers sensibles sont dans `.gitignore`
- [ ] Pas de clés API en dur dans le code
- [ ] `env.example` à jour
- [ ] README complet

### 2. Déploiement Vercel

#### Première Fois
```bash
# Déploiement
vercel

# Suivre les instructions CLI
# - Link to existing project? No
# - Project name: minipouce
# - Directory: ./
# - Framework: Next.js
# - Settings correct? Yes
```

#### Variables d'Environnement
```bash
# Option 1 : Via CLI
vercel env add DATABASE_URL
vercel env add NEXTAUTH_SECRET
vercel env add GOOGLE_CLIENT_ID
vercel env add GOOGLE_CLIENT_SECRET
vercel env add NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
vercel env add STRIPE_SECRET_KEY
vercel env add COMMISSION_RATE
vercel env add PAYMENT_PROCESSING_FEE

# Option 2 : Via Dashboard Vercel
# Settings > Environment Variables > Add
```

**⚠️ IMPORTANT** : Pour chaque variable
- Sélectionner : Production, Preview, Development
- Utiliser les valeurs de PRODUCTION (pas test)

#### NEXTAUTH_URL
```bash
# Mettre l'URL de production Vercel
vercel env add NEXTAUTH_URL
# Valeur : https://minipouce.vercel.app (temporaire)
```

#### Déploiement en Production
```bash
vercel --prod
```

### 3. Configuration Post-Déploiement

#### Domaine
- [ ] Dans Vercel Dashboard → Settings → Domains
- [ ] Ajouter `minipouce.fr`
- [ ] Configurer DNS selon instructions
- [ ] Attendre propagation DNS (quelques minutes)
- [ ] Vérifier `https://minipouce.fr`

#### Mettre à jour NEXTAUTH_URL
```bash
# Depuis dashboard Vercel ou CLI
# Changer de https://minipouce.vercel.app
# Vers https://minipouce.fr
vercel env rm NEXTAUTH_URL production
vercel env add NEXTAUTH_URL
# Valeur: https://minipouce.fr

# Redéployer
vercel --prod
```

#### Google OAuth
- [ ] Retourner sur Google Cloud Console
- [ ] Ajouter URI de redirection :
  - `https://minipouce.fr/api/auth/callback/google`
- [ ] Sauvegarder

#### Stripe
##### Passer en mode Production
- [ ] Dashboard Stripe → Activer compte
- [ ] Récupérer clés production (pk_live_... et sk_live_...)
- [ ] Mettre à jour dans Vercel :
  ```bash
  vercel env rm NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY production
  vercel env add NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  # Valeur: pk_live_...
  
  vercel env rm STRIPE_SECRET_KEY production
  vercel env add STRIPE_SECRET_KEY
  # Valeur: sk_live_...
  ```

##### Webhooks Stripe
- [ ] Dashboard Stripe → Développeurs → Webhooks
- [ ] Ajouter endpoint : `https://minipouce.fr/api/webhooks/stripe`
- [ ] Sélectionner événements :
  - `checkout.session.completed`
  - `payment_intent.succeeded`
  - `payment_intent.payment_failed`
- [ ] Copier le secret du webhook
- [ ] Ajouter à Vercel :
  ```bash
  vercel env add STRIPE_WEBHOOK_SECRET
  # Valeur: whsec_...
  ```

##### Redéployer avec nouvelles configs
```bash
vercel --prod
```

### 4. Tests Production

#### Tests Complets
- [ ] Ouvrir `https://minipouce.fr`
- [ ] Page d'accueil se charge
- [ ] Connexion Google fonctionne
- [ ] Créer une liste complète
- [ ] Ajouter des produits
- [ ] Copier le lien de partage
- [ ] Ouvrir en navigation privée
- [ ] Réserver un produit
- [ ] Contribuer à la cagnotte (petit montant réel)
- [ ] Vérifier paiement dans Stripe Dashboard
- [ ] Vérifier contribution dans dashboard parent
- [ ] Tester sur mobile
- [ ] Tester sur différents navigateurs

#### Vérifications Stripe
- [ ] Paiement test visible dans Dashboard
- [ ] Montant correct (avec commission)
- [ ] Webhook reçu (Développeurs → Événements)
- [ ] Contribution marquée COMPLETED en DB

#### Monitoring
```bash
# Logs temps réel
vercel logs --follow

# Logs récents
vercel logs
```

## 📊 Post-Déploiement

### Configuration Analytics
- [ ] Google Analytics configuré
- [ ] Tag ajouté à `layout.tsx`
- [ ] Events tracking configuré

### SEO
- [ ] Google Search Console
  - [ ] Propriété ajoutée
  - [ ] Sitemap soumis
- [ ] Meta tags vérifiés
- [ ] Open Graph configuré
- [ ] robots.txt créé

### Monitoring & Alertes
- [ ] Sentry configuré (erreurs)
- [ ] Uptime monitoring (UptimeRobot)
- [ ] Alertes email configurées

### Sauvegardes
- [ ] Backup automatique DB configuré
- [ ] Plan de restauration documenté

### Sécurité
- [ ] HTTPS forcé (Vercel le fait)
- [ ] Headers sécurité configurés
- [ ] Rate limiting à ajouter
- [ ] Scan de vulnérabilités

### Communication
- [ ] Annonce sur réseaux sociaux
- [ ] Email aux beta testers
- [ ] Post Product Hunt (optionnel)
- [ ] Communiqué de presse (optionnel)

## 🔧 Maintenance Continue

### Daily
- [ ] Vérifier erreurs Sentry
- [ ] Monitorer uptime
- [ ] Répondre support client

### Weekly
- [ ] Review analytics
- [ ] Backup manuel DB
- [ ] Check performances Vercel
- [ ] Update dependencies sécurité

### Monthly
- [ ] Mise à jour dépendances
- [ ] Review logs complets
- [ ] Optimisations performances
- [ ] User feedback analysis

## 🆘 Plan de Rollback

Si problème critique en production :

```bash
# 1. Revenir au déploiement précédent (Vercel Dashboard)
# Settings > Deployments > [Previous] > Promote to Production

# 2. OU réinitialiser localement
git revert HEAD
git push origin main
vercel --prod

# 3. Vérifier que tout fonctionne

# 4. Investiguer le problème
vercel logs --follow

# 5. Fix en local, test, puis redéployer
```

## 📞 Contacts Utiles

### Support Services
- **Vercel Support** : support@vercel.com
- **Stripe Support** : https://support.stripe.com
- **Google Cloud** : https://cloud.google.com/support

### Documentation
- Next.js : https://nextjs.org/docs
- Prisma : https://www.prisma.io/docs
- Stripe : https://stripe.com/docs
- NextAuth : https://next-auth.js.org

## ✅ Checklist Finale

Avant de considérer le déploiement terminé :

- [ ] Site accessible sur domaine principal
- [ ] HTTPS actif
- [ ] Toutes les features fonctionnent
- [ ] Paiements Stripe en mode live testés
- [ ] Aucune erreur en production
- [ ] Monitoring actif
- [ ] Backups configurés
- [ ] Documentation à jour
- [ ] Équipe formée (si applicable)

## 🎉 Félicitations !

Si toutes les cases sont cochées, Minipouce est officiellement en production !

**Prochaines étapes** :
1. Commencer l'acquisition d'utilisateurs
2. Monitorer les métriques
3. Itérer basé sur feedback
4. Planifier la V1.1

---

**Bon lancement ! 🚀**

