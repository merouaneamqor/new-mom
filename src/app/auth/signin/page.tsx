import Link from "next/link"
import { Baby } from "lucide-react"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import SignInForm from "@/components/SignInForm"
import Navbar from "@/components/Navbar"

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
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Navbar showAuth={false} />
      
      <div className="flex items-center justify-center p-4 py-16">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Baby className="w-12 h-12 text-orange-500" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              Bienvenue
            </h1>
            <p className="text-lg text-gray-600">
              Connectez-vous pour gérer vos listes de naissance
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            <SignInForm callbackUrl={searchParams.callbackUrl} />
          </div>

          <p className="text-center text-gray-600 mt-8 text-sm">
            Pas encore de compte ?{" "}
            <Link href="/creer-ma-liste" className="text-orange-600 hover:text-orange-700 font-semibold underline">
              Créez votre liste gratuitement
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

