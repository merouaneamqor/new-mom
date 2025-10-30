# 🚀 Guide de Configuration - Minipouce

Ce guide vous accompagne pas à pas pour configurer et déployer Minipouce.

## 📋 Prérequis

- **Node.js** 20+ et npm
- **PostgreSQL** (ou compte sur un service cloud comme Supabase, Neon, etc.)
- **Compte Stripe** (pour les paiements)
- **Compte Google Cloud** (pour OAuth)

## 🔧 Configuration Locale

### 1. Installation des dépendances

```bash
npm install
```

### 2. Configuration de la base de données PostgreSQL

#### Option A : PostgreSQL Local

```bash
# Installer PostgreSQL
sudo apt install postgresql postgresql-contrib  # Ubuntu/Debian
brew install postgresql                         # macOS

# Créer une base de données
sudo -u postgres psql
CREATE DATABASE minipouce;
CREATE USER minipouce_user WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE minipouce TO minipouce_user;
\q
```

#### Option B : PostgreSQL Cloud (Recommandé)

1. Créez un compte sur [Supabase](https://supabase.com) ou [Neon](https://neon.tech)
2. Créez un nouveau projet
3. Copiez la connexion string PostgreSQL

### 3. Configuration Google OAuth

1. Allez sur [Google Cloud Console](https://console.cloud.google.com)
2. Créez un nouveau projet ou sélectionnez-en un
3. Activez l'API "Google+ API"
4. Allez dans "Identifiants" → "Créer des identifiants" → "ID client OAuth 2.0"
5. Type d'application : Application Web
6. URI de redirection autorisés : `http://localhost:3000/api/auth/callback/google`
7. Copiez le Client ID et le Client Secret

### 4. Configuration Stripe

1. Créez un compte sur [Stripe](https://stripe.com)
2. Allez dans "Développeurs" → "Clés API"
3. Copiez vos clés de test (pk_test_... et sk_test_...)
4. Pour les webhooks (optionnel en dev) :
   - Installez Stripe CLI : `brew install stripe/stripe-cli/stripe`
   - Connectez-vous : `stripe login`
   - Écoutez les événements : `stripe listen --forward-to localhost:3000/api/webhooks/stripe`

### 5. Variables d'environnement

Créez un fichier `.env.local` à la racine :

```env
# Database
DATABASE_URL="postgresql://minipouce_user:your_password@localhost:5432/minipouce"

# Next Auth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="générez-une-clé-secrète-aléatoire-ici"

# Google OAuth
GOOGLE_CLIENT_ID="votre-client-id.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET="votre-client-secret"

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..." # Si vous utilisez webhooks

# Commission (optionnel)
COMMISSION_RATE=4.0
PAYMENT_PROCESSING_FEE=0.30
```

**Générer NEXTAUTH_SECRET** :
```bash
openssl rand -base64 32
```

### 6. Initialiser la base de données

```bash
# Appliquer le schéma Prisma
npx prisma db push

# Générer le client Prisma
npx prisma generate

# (Optionnel) Ouvrir Prisma Studio pour visualiser la DB
npm run db:studio
```

### 7. Lancer l'application

```bash
npm run dev
```

L'application sera accessible sur `http://localhost:3000`

## 🌐 Déploiement en Production

### Option 1 : Vercel (Recommandé)

Vercel est parfait pour Next.js et offre un déploiement simple.

1. **Installer Vercel CLI**
```bash
npm i -g vercel
```

2. **Se connecter**
```bash
vercel login
```

3. **Déployer**
```bash
vercel --prod
```

4. **Configurer les variables d'environnement**
   - Allez sur votre projet Vercel
   - Settings → Environment Variables
   - Ajoutez toutes les variables de `.env.local`
   - ⚠️ Changez `NEXTAUTH_URL` pour votre domaine de production

5. **Configuration du domaine**
   - Allez dans Settings → Domains
   - Ajoutez `minipouce.fr`
   - Configurez les DNS selon les instructions

### Option 2 : Docker

```dockerfile
# Dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npx prisma generate
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

```yaml
# docker-compose.yml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://postgres:password@db:5432/minipouce
      - NEXTAUTH_URL=http://localhost:3000
      - NEXTAUTH_SECRET=your-secret
    depends_on:
      - db

  db:
    image: postgres:16-alpine
    environment:
      - POSTGRES_DB=minipouce
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

```bash
docker-compose up -d
```

## 🔐 Configuration Stripe en Production

1. **Webhooks**
   - Allez dans Stripe Dashboard → Développeurs → Webhooks
   - Ajoutez un endpoint : `https://minipouce.fr/api/webhooks/stripe`
   - Sélectionnez les événements :
     - `checkout.session.completed`
     - `payment_intent.succeeded`
   - Copiez le secret du webhook → `STRIPE_WEBHOOK_SECRET`

2. **Clés de production**
   - Remplacez les clés de test par les clés de production
   - Activez votre compte Stripe

## 📧 Configuration Email (Optionnel)

Pour envoyer des notifications par email, ajoutez :

```env
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
SMTP_USER="votre-email@gmail.com"
SMTP_PASSWORD="mot-de-passe-application"
SMTP_FROM="noreply@minipouce.fr"
```

## 🔍 Vérification Post-Déploiement

- [ ] La page d'accueil se charge correctement
- [ ] L'authentification Google fonctionne
- [ ] Création d'une liste de naissance
- [ ] Ajout de produits
- [ ] Partage de la liste (lien public accessible)
- [ ] Réservation d'un produit (vue invité)
- [ ] Contribution à la cagnotte
- [ ] Paiement Stripe réussi
- [ ] Dashboard admin accessible (si ADMIN role)

## 🐛 Dépannage

### Erreur de connexion à la base de données

```bash
# Vérifiez que PostgreSQL est démarré
sudo systemctl status postgresql

# Testez la connexion
psql -h localhost -U minipouce_user -d minipouce
```

### Erreur Prisma "Schema not found"

```bash
npx prisma generate
npx prisma db push
```

### OAuth Google ne fonctionne pas

1. Vérifiez que les URI de redirection sont corrects
2. Vérifiez que l'API Google+ est activée
3. Vérifiez `NEXTAUTH_URL` dans `.env.local`

### Stripe checkout échoue

1. Vérifiez que les clés Stripe sont correctes
2. Testez avec une carte de test : `4242 4242 4242 4242`
3. Consultez les logs Stripe Dashboard

## 📊 Monitoring et Analytics

### Logs en production

```bash
# Vercel
vercel logs

# Docker
docker-compose logs -f app
```

### Base de données

```bash
# Ouvrir Prisma Studio
npm run db:studio
```

## 🔄 Mises à jour

```bash
# Récupérer les dernières modifications
git pull

# Installer les nouvelles dépendances
npm install

# Appliquer les migrations DB
npx prisma db push

# Redémarrer l'application
npm run build
npm start
```

## 📱 Prochaines Étapes

1. **Personnalisation**
   - Modifiez les couleurs dans `tailwind.config.ts`
   - Ajoutez votre logo dans `/public`
   - Personnalisez les emails

2. **SEO**
   - Ajoutez `sitemap.xml`
   - Configurez Google Analytics
   - Optimisez les meta tags

3. **Performance**
   - Configurez le cache CDN
   - Optimisez les images (Next.js Image)
   - Activez les Service Workers

4. **Sécurité**
   - Configurez CSP headers
   - Activez rate limiting
   - Configurez CORS

## 💡 Besoin d'aide ?

- Documentation Next.js : https://nextjs.org/docs
- Documentation Prisma : https://www.prisma.io/docs
- Documentation Stripe : https://stripe.com/docs
- Documentation NextAuth : https://next-auth.js.org

---

**Bon développement ! 🚀**

