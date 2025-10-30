import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import CreateListForm from "@/components/CreateListForm"
import Link from "next/link"
import { Baby } from "lucide-react"

export default async function CreateListPage() {
  const session = await auth()
  
  if (!session?.user) {
    redirect("/auth/signin?callbackUrl=/creer-ma-liste")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Baby className="w-8 h-8 text-pink-500" />
            <span className="text-2xl font-bold text-gray-900">Minipouce</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">Bonjour, {session.user.name}</span>
          </div>
        </div>
      </header>

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

