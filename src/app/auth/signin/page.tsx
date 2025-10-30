import Link from "next/link"
import { Baby } from "lucide-react"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import SignInForm from "@/components/SignInForm"

export default async function SignInPage({
  searchParams,
}: {
  searchParams: { callbackUrl?: string }
}) {
  const session = await auth()

  if (session?.user) {
    redirect(searchParams.callbackUrl || "/dashboard")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <Baby className="w-10 h-10 text-pink-500" />
            <span className="text-3xl font-bold text-gray-900">Minipouce</span>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Connexion
          </h1>
          <p className="text-gray-600">
            Connectez-vous pour gérer vos listes de naissance
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <SignInForm callbackUrl={searchParams.callbackUrl} />
        </div>

        <p className="text-center text-gray-600 mt-6 text-sm">
          Pas encore de compte ?{" "}
          <Link href="/creer-ma-liste" className="text-pink-600 hover:text-pink-700 font-medium">
            Créez votre liste gratuitement
          </Link>
        </p>
      </div>
    </div>
  )
}

