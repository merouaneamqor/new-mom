"use client"

import { Euro } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"
import { formatCurrency } from "@/lib/utils"

const contributeSchema = z.object({
  amount: z.number().min(5, "Le montant minimum est de 5€"),
  guestName: z.string().min(2, "Veuillez entrer votre nom"),
  guestEmail: z.string().email("Email invalide"),
  message: z.string().optional(),
})

type ContributeFormData = z.infer<typeof contributeSchema>

export default function ContributeButton({
  listId,
  listTitle,
}: {
  listId: string
  listTitle: string
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ContributeFormData>({
    resolver: zodResolver(contributeSchema),
  })

  const amount = watch("amount")

  const onSubmit = async (data: ContributeFormData) => {
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contributions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          birthListId: listId,
        }),
      })

      if (!response.ok) {
        throw new Error("Erreur lors de la contribution")
      }

      const result = await response.json()

      // Redirect to Stripe Checkout
      if (result.checkoutUrl) {
        window.location.href = result.checkoutUrl
      } else {
        toast.success("Contribution enregistrée !")
        setIsOpen(false)
      }
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
        className="bg-white text-pink-600 px-8 py-4 rounded-full hover:bg-pink-50 transition font-bold text-lg inline-flex items-center gap-2 shadow-lg"
      >
        <Euro className="w-6 h-6" />
        Contribuer à la cagnotte
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
              Contribuer à la cagnotte
            </h2>
            <p className="text-gray-600 mb-6">{listTitle}</p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label
                  htmlFor="amount"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Montant (minimum 5€) *
                </label>
                <div className="relative">
                  <input
                    id="amount"
                    type="number"
                    step="0.01"
                    {...register("amount", { valueAsNumber: true })}
                    placeholder="50"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                    €
                  </span>
                </div>
                {errors.amount && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.amount.message}
                  </p>
                )}
                {amount && amount >= 5 && (
                  <p className="mt-2 text-sm text-gray-600">
                    Commission de {((amount * 4) / 100).toFixed(2)}€ (4%) +
                    frais de paiement = Net reçu:{" "}
                    <strong>
                      {formatCurrency(
                        amount - (amount * 4) / 100 - 0.3
                      )}
                    </strong>
                  </p>
                )}
              </div>

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
                  {isSubmitting ? "Traitement..." : "Continuer"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

