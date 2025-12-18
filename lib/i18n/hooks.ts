"use client"

import { useI18n } from "./context"
import { translations } from "./translations"

type TranslationKey = keyof typeof translations

export function useTranslations<T extends TranslationKey>(key: T) {
  const { locale } = useI18n()

  const translation = translations[key]?.[locale] || translations[key]?.["pt"]

  return translation
}
