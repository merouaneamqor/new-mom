import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tiny Tot - Votre liste de naissance simple et flexible",
  description: "Créez votre liste de naissance avec des produits de toutes vos marques préférées. Cagnotte intégrée pour vos proches.",
  keywords: ["liste de naissance", "cagnotte", "bébé", "cadeau naissance", "future maman"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
