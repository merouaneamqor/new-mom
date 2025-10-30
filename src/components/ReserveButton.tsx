"use client"

import { Gift } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"

const reserveSchema = z.object({
  guestName: z.string().min(2, "Veuillez entrer votre nom"),
  guestEmail: z.string().email("Email invalide"),
  message: z.string().optional(),
})

type ReserveFormData = z.infer<typeof reserveSchema>

export default function ReserveButton({
  listProductId,
  listId,
  productName,
}: {
  listProductId: string
  listId: string
  productName: string
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReserveFormData>({
    resolver: zodResolver(reserveSchema),
  })

  const onSubmit = async (data: ReserveFormData) => {
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          listProductId,
          birthListId: listId,
        }),
      })

      if (!response.ok) {
        throw new Error("Erreur lors de la réservation")
      }

      toast.success("Produit réservé avec succès !")
      setIsOpen(false)
      
      // Refresh the page to show updated status
      window.location.reload()
    } catch (error) {
      toast.error("Une erreur est survenue. Veuillez réessayer.")
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition font-medium inline-flex items-center justify-center gap-2"
      >
        <Gift className="w-5 h-5" />
        Réserver ce cadeau
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white rounded-2xl p-8 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Réserver ce produit
            </h2>
            <p className="text-gray-600 mb-6">{productName}</p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label
                  htmlFor="guestName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Votre nom *
                </label>
                <input
                  id="guestName"
                  type="text"
                  {...register("guestName")}
                  placeholder="Marie Dupont"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
                />
                {errors.guestName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.guestName.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="guestEmail"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Votre email *
                </label>
                <input
                  id="guestEmail"
                  type="email"
                  {...register("guestEmail")}
                  placeholder="marie@exemple.fr"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
                />
                {errors.guestEmail && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.guestEmail.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message (optionnel)
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  rows={3}
                  placeholder="Un petit mot pour les futurs parents..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition resize-none"
                />
              </div>

              <div className="bg-pink-50 rounded-lg p-4 text-sm text-gray-700">
                <p>
                  <strong>Note :</strong> En réservant ce produit, vous vous
                  engagez à l'offrir. Les futurs parents seront notifiés de
                  votre réservation.
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition font-medium"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Réservation..." : "Confirmer"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

