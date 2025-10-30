import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number, currency: string = "EUR"): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency,
  }).format(amount)
}

export function calculateCommission(
  amount: number,
  commissionRate: number = 4.0,
  paymentFee: number = 0.30
): { commissionAmount: number; netAmount: number; paymentFee: number } {
  const commissionAmount = (amount * commissionRate) / 100
  const totalFees = commissionAmount + paymentFee
  const netAmount = amount - totalFees

  return {
    commissionAmount,
    netAmount,
    paymentFee,
  }
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

export function getShareUrl(slug: string): string {
  const baseUrl = process.env.NEXTAUTH_URL || "http://localhost:3000"
  return `${baseUrl}/liste/${slug}`
}

