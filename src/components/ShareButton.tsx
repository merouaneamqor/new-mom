"use client"

import { Share2 } from "lucide-react"
import { toast } from "sonner"

export default function ShareButton({
  url,
  title,
}: {
  url: string
  title: string
}) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url,
        })
      } catch (error) {
        // User cancelled or error occurred
      }
    } else {
      await navigator.clipboard.writeText(url)
      toast.success("Lien copié dans le presse-papier !")
    }
  }

  return (
    <button
      onClick={handleShare}
      className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition inline-flex items-center gap-2 font-medium"
    >
      <Share2 className="w-4 h-4" />
      <span className="hidden sm:inline">Partager</span>
    </button>
  )
}

