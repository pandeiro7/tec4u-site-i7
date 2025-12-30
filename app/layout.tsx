import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import localFont from "next/font/local"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { I18nProvider } from "@/lib/i18n/context"

// Configuração da General Sans local
const generalSans = localFont({
  src: [
    {
      path: "../public/fonts/GeneralSans-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/GeneralSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/GeneralSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/GeneralSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-general-sans",
})

export const metadata: Metadata = {
  title: "TEC4U Digital - Soluções 100% personalizadas para o seu negócio",
  description:
    "Agência 360º especializada em e-commerce, marketing digital e desenvolvimento web. Mais de 10 anos de experiência transformando negócios digitais.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={generalSans.variable}>
      <body className={`${generalSans.className} antialiased font-sans`}>
        <I18nProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </I18nProvider>
        <Analytics />
      </body>
    </html>
  )
}