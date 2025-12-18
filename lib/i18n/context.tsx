"use client"

import { createContext, useContext, useState, type ReactNode, useEffect } from "react"

type Locale = "pt" | "en" | "es"

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("pt")
  const [isHydrated, setIsHydrated] = useState(false)

  // Load saved locale from localStorage on mount
  useEffect(() => {
    setIsHydrated(true)
    const savedLocale = localStorage.getItem("tec4u-locale") as Locale
    if (savedLocale && ["pt", "en", "es"].includes(savedLocale)) {
      setLocale(savedLocale)
    }
  }, [])

  // Save locale to localStorage when it changes
  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale)
    if (typeof window !== "undefined") {
      localStorage.setItem("tec4u-locale", newLocale)
    }
  }

  return <I18nContext.Provider value={{ locale, setLocale: handleSetLocale }}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}
