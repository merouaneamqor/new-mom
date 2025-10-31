"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Baby } from "lucide-react"

interface NavbarProps {
  variant?: "default" | "minimal"
  showAuth?: boolean
  showCTA?: boolean
}

export default function Navbar({ 
  variant = "default", 
  showAuth = true,
  showCTA = true 
}: NavbarProps) {
  const pathname = usePathname()
  
  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="border-b bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Baby className="w-8 h-8 text-orange-500 group-hover:scale-110 transition-transform" />
          <span className="text-2xl font-bold bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent">
            Tiny Tot
          </span>
        </Link>
        
        {variant === "default" && (
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              href="/fonctionnalites" 
              className={`transition-colors font-medium ${
                isActive("/fonctionnalites")
                  ? "text-orange-600 font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-orange-600"
                  : "text-gray-600 hover:text-orange-600"
              }`}
            >
              Fonctionnalités
            </Link>
            <Link 
              href="/comment-ca-marche" 
              className={`transition-colors font-medium ${
                isActive("/comment-ca-marche")
                  ? "text-orange-600 font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-orange-600"
                  : "text-gray-600 hover:text-orange-600"
              }`}
            >
              Comment ça marche
            </Link>
            <Link 
              href="/tarifs" 
              className={`transition-colors font-medium ${
                isActive("/tarifs")
                  ? "text-orange-600 font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-orange-600"
                  : "text-gray-600 hover:text-orange-600"
              }`}
            >
              Tarifs
            </Link>
            {showAuth && (
              <Link 
                href="/auth/signin" 
                className="text-gray-600 hover:text-orange-600 transition-colors font-medium"
              >
                Connexion
              </Link>
            )}
            {showCTA && (
              <Link 
                href="/creer-ma-liste" 
                className="bg-[#f79176] hover:bg-[#f57f63] text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:scale-105 transition-all font-semibold"
              >
                Créer ma liste
              </Link>
            )}
          </nav>
        )}
      </div>
    </header>
  )
}

