"use client"

import { Plus } from "lucide-react"
import { useState } from "react"

export default function AddProductButton({ listId }: { listId: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition inline-flex items-center gap-2 font-medium"
      >
        <Plus className="w-5 h-5" />
        Ajouter un produit
      </button>

      {/* Modal placeholder - would implement full modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full">
            <h2 className="text-2xl font-bold mb-4">Ajouter un produit</h2>
            <p className="text-gray-600 mb-4">
              Fonctionnalité à implémenter : formulaire d'ajout de produit
            </p>
            <button
              onClick={() => setIsOpen(false)}
              className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </>
  )
}

