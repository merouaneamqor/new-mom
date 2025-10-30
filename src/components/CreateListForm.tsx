"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { Baby, Calendar, Lock, Globe, Eye } from "lucide-react"

const createListSchema = z.object({
  title: z.string().min(3, "Le titre doit contenir au moins 3 caractères"),
  babyName: z.string().optional(),
  dueDate: z.string().optional(),
  description: z.string().optional(),
  visibility: z.enum(["PUBLIC", "PRIVATE", "UNLISTED"]),
  cagnotteEnabled: z.boolean(),
  cagnotteGoal: z.number().optional(),
})

type CreateListFormData = z.infer<typeof createListSchema>

export default function CreateListForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CreateListFormData>({
    resolver: zodResolver(createListSchema),
    defaultValues: {
      visibility: "PUBLIC",
      cagnotteEnabled: true,
    },
  })

  const cagnotteEnabled = watch("cagnotteEnabled")

  const onSubmit = async (data: CreateListFormData) => {
    setIsSubmitting(true)
    
    try {
      const response = await fetch("/api/birth-lists", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Erreur lors de la création de la liste")
      }

      const list = await response.json()
      
      toast.success("Liste créée avec succès !")
      router.push(`/dashboard/liste/${list.slug}`)
    } catch (error) {
      toast.error("Une erreur est survenue. Veuillez réessayer.")
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Title */}
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
          Titre de votre liste *
        </label>
        <input
          id="title"
          type="text"
          {...register("title")}
          placeholder="Notre liste de naissance"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
        />
        {errors.title && (
          <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
        )}
      </div>

      {/* Baby Name */}
      <div>
        <label htmlFor="babyName" className="block text-sm font-medium text-gray-700 mb-2">
          <Baby className="w-4 h-4 inline mr-1" />
          Prénom du bébé (optionnel)
        </label>
        <input
          id="babyName"
          type="text"
          {...register("babyName")}
          placeholder="Lucas, Emma..."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
        />
      </div>

      {/* Due Date */}
      <div>
        <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700 mb-2">
          <Calendar className="w-4 h-4 inline mr-1" />
          Date prévue (optionnel)
        </label>
        <input
          id="dueDate"
          type="date"
          {...register("dueDate")}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
        />
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
          Message personnalisé (optionnel)
        </label>
        <textarea
          id="description"
          {...register("description")}
          rows={4}
          placeholder="Un petit mot pour vos proches..."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition resize-none"
        />
      </div>

      {/* Visibility */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Visibilité de la liste
        </label>
        <div className="space-y-3">
          <label className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-pink-300 cursor-pointer transition">
            <input
              type="radio"
              value="PUBLIC"
              {...register("visibility")}
              className="w-4 h-4 text-pink-500 focus:ring-pink-500"
            />
            <div className="ml-3">
              <div className="flex items-center gap-2 font-medium text-gray-900">
                <Globe className="w-4 h-4" />
                Publique
              </div>
              <p className="text-sm text-gray-500">Visible par tous avec le lien</p>
            </div>
          </label>

          <label className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-pink-300 cursor-pointer transition">
            <input
              type="radio"
              value="UNLISTED"
              {...register("visibility")}
              className="w-4 h-4 text-pink-500 focus:ring-pink-500"
            />
            <div className="ml-3">
              <div className="flex items-center gap-2 font-medium text-gray-900">
                <Eye className="w-4 h-4" />
                Non répertoriée
              </div>
              <p className="text-sm text-gray-500">Accessible uniquement via le lien</p>
            </div>
          </label>

          <label className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-pink-300 cursor-pointer transition">
            <input
              type="radio"
              value="PRIVATE"
              {...register("visibility")}
              className="w-4 h-4 text-pink-500 focus:ring-pink-500"
            />
            <div className="ml-3">
              <div className="flex items-center gap-2 font-medium text-gray-900">
                <Lock className="w-4 h-4" />
                Privée
              </div>
              <p className="text-sm text-gray-500">Protection par mot de passe</p>
            </div>
          </label>
        </div>
      </div>

      {/* Cagnotte */}
      <div className="border-t pt-6">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            {...register("cagnotteEnabled")}
            className="w-5 h-5 text-pink-500 rounded focus:ring-pink-500"
          />
          <div>
            <div className="font-medium text-gray-900">Activer la cagnotte</div>
            <p className="text-sm text-gray-500">
              Permettre à vos proches de contribuer financièrement
            </p>
          </div>
        </label>

        {cagnotteEnabled && (
          <div className="mt-4 ml-8">
            <label htmlFor="cagnotteGoal" className="block text-sm font-medium text-gray-700 mb-2">
              Objectif de la cagnotte (optionnel)
            </label>
            <div className="relative">
              <input
                id="cagnotteGoal"
                type="number"
                step="0.01"
                {...register("cagnotteGoal", { valueAsNumber: true })}
                placeholder="1000"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                €
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-pink-500 text-white py-4 rounded-lg hover:bg-pink-600 transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Création en cours..." : "Créer ma liste"}
      </button>
    </form>
  )
}

