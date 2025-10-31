import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import CreateListForm from "@/components/CreateListForm"
import Link from "next/link"
import { Baby } from "lucide-react"
import Navbar from "@/components/Navbar"

export default async function CreateListPage() {
  const session = await auth()
  
  if (!session?.user) {
    redirect("/auth/signin?callbackUrl=/creer-ma-liste")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Navbar variant="minimal" showAuth={false} showCTA={false} />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Créez votre liste de naissance
            </h1>
            <p className="text-xl text-gray-600">
              Quelques informations pour personnaliser votre liste
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <CreateListForm />
          </div>
        </div>
      </main>
    </div>
  )
}

