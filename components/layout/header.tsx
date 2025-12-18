"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { navigationData } from "@/data/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false)
  const [isMobileLanguageOpen, setIsMobileLanguageOpen] = useState(false)

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label)
  }

  const closeDropdown = () => {
    setActiveDropdown(null)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6 lg:px-8">
        <Link href={navigationData.logo.href} className="flex items-center">
          <Image src="/logo.svg" alt="TEC4U" width={142} height={30} className="h-7 w-auto" priority />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigationData.mainMenu.map((item) => (
            <div key={item.label} className="relative">
              {item.hasDropdown ? (
                <button
                  onClick={() => toggleDropdown(item.label)}
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  className="flex items-center gap-2 rounded-full bg-[#E61755] px-5 py-2.5 text-sm font-semibold uppercase text-white transition-all hover:bg-[#d01449]"
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4" />
                </button>
              ) : (
                <Link
                  href={item.href}
                  className={`text-sm font-semibold uppercase transition-colors hover:text-[#E61755] ${
                    item.highlight
                      ? "rounded-full border-2 border-[#E61755] px-4 py-2 text-[#E61755] hover:bg-[#E61755] hover:text-white"
                      : "text-[#1E1E1E]"
                  }`}
                >
                  {item.label}
                </Link>
              )}

              {item.hasDropdown && activeDropdown === item.label && item.dropdown && (
                <div
                  className="absolute left-0 top-full mt-2 w-screen max-w-4xl rounded-2xl bg-white p-8 shadow-2xl"
                  onMouseLeave={closeDropdown}
                >
                  <p className="mb-6 text-sm text-[#1E1E1E]">{item.dropdown.title}</p>

                  {/* Solutions Grid */}
                  <div className="mb-8 grid grid-cols-2 gap-4">
                    {item.dropdown.sections.map((section) => (
                      <Link
                        key={section.title}
                        href={section.href}
                        className="group relative rounded-xl bg-gradient-to-br from-gray-50 to-white p-6 transition-all hover:shadow-lg"
                      >
                        <div className="mb-3 flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm">
                            <Image
                              src={`/icons/${section.icon}.svg`}
                              alt={section.title}
                              width={24}
                              height={24}
                              className="text-[#E61755]"
                            />
                          </div>
                          <h3 className="flex items-center gap-2 text-base font-bold text-[#1E1E1E]">
                            {section.title}
                            {section.badge && (
                              <span className="rounded-full bg-gradient-to-r from-[#E61755] to-[#8454F4] px-2.5 py-0.5 text-xs font-semibold text-white">
                                {section.badge}
                              </span>
                            )}
                          </h3>
                        </div>
                        <p className="text-sm leading-relaxed text-gray-600">{section.description}</p>
                      </Link>
                    ))}
                  </div>

                  {/* Platforms Section */}
                  {item.dropdown.platforms && (
                    <div className="mb-4 flex items-center justify-between rounded-xl bg-gray-50 p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          <Image src="/icons/monitor.svg" alt="" width={20} height={20} />
                          <Image src="/icons/monitor.svg" alt="" width={20} height={20} />
                        </div>
                        <span className="text-sm font-medium text-[#1E1E1E]">{item.dropdown.platforms.title}</span>
                      </div>
                      <Link
                        href={item.dropdown.platforms.cta.href}
                        className="flex items-center gap-2 text-sm font-bold text-[#E61755] hover:underline"
                      >
                        {item.dropdown.platforms.cta.text}
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                  )}

                  {/* Ads Section */}
                  {item.dropdown.ads && (
                    <div className="mb-4 flex items-center justify-between rounded-xl bg-gray-50 p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          <Image src="/icons/megaphone.svg" alt="" width={20} height={20} />
                          <Image src="/icons/megaphone.svg" alt="" width={20} height={20} />
                        </div>
                        <span className="text-sm font-medium text-[#1E1E1E]">{item.dropdown.ads.title}</span>
                      </div>
                      <Link
                        href={item.dropdown.ads.cta.href}
                        className="flex items-center gap-2 text-sm font-bold text-[#E61755] hover:underline"
                      >
                        {item.dropdown.ads.cta.text}
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                  )}

                  {/* Producer Section */}
                  {item.dropdown.producer && (
                    <div className="rounded-xl bg-gradient-to-r from-[#8454F4] to-[#E61755] p-6 text-white">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
                            <span className="text-2xl">🎬</span>
                          </div>
                          <p className="text-sm font-medium">{item.dropdown.producer.title}</p>
                        </div>
                        <Link
                          href={item.dropdown.producer.cta.href}
                          className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#8454F4] transition-transform hover:scale-105"
                        >
                          {item.dropdown.producer.cta.text}
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex items-center gap-2 text-sm font-semibold uppercase text-[#1E1E1E] transition-colors hover:text-[#E61755]"
            >
              {navigationData.language.label}
              <ChevronDown className="h-4 w-4" />
            </button>

            {isLanguageOpen && (
              <div className="absolute right-0 top-full mt-2 w-40 rounded-lg bg-white py-2 shadow-xl">
                {navigationData.language.options.map((option) => (
                  <button
                    key={option.value}
                    className="w-full px-4 py-2 text-left text-sm text-[#1E1E1E] transition-colors hover:bg-gray-50"
                    onClick={() => setIsLanguageOpen(false)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Contact Button */}
          <Button
            asChild
            className="gap-2 rounded-full bg-gradient-to-r from-[#8454F4] to-[#E61755] px-6 py-3 font-semibold uppercase text-white shadow-lg transition-transform hover:scale-105"
          >
            <Link href={navigationData.contact.href}>
              {navigationData.contact.text}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-border/40 bg-gray-50 lg:hidden">
          <nav className="container flex flex-col px-4 py-6">
            {/* Solutions Accordion */}
            <div className="mb-2">
              <button
                onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
                className="flex w-full items-center justify-between rounded-lg bg-[#E61755] px-5 py-3.5 text-sm font-bold uppercase text-white transition-colors hover:bg-[#d01449]"
              >
                SOLUÇÕES
                <ChevronDown className={`h-5 w-5 transition-transform ${isMobileSolutionsOpen ? "rotate-180" : ""}`} />
              </button>

              {isMobileSolutionsOpen && (
                <div className="mt-3 space-y-3 rounded-lg bg-white p-4">
                  <p className="mb-4 text-xs text-gray-600">Confira as nossas soluções:</p>
                  {navigationData.mainMenu
                    .find((item) => item.label === "SOLUÇÕES")
                    ?.dropdown?.sections.map((section) => (
                      <Link
                        key={section.title}
                        href={section.href}
                        className="block rounded-lg border border-gray-100 p-4 transition-all hover:border-[#E61755] hover:bg-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="mb-2 flex items-center gap-2">
                          <Image
                            src={`/icons/${section.icon}.svg`}
                            alt=""
                            width={20}
                            height={20}
                            className="text-[#E61755]"
                          />
                          <h3 className="text-sm font-bold text-[#1E1E1E]">{section.title}</h3>
                        </div>
                        <p className="text-xs leading-relaxed text-gray-600">{section.description}</p>
                      </Link>
                    ))}
                </div>
              )}
            </div>

            {/* TWODUO Produtora */}
            <div className="mb-2 rounded-lg bg-white p-4">
              <Link href="/twoduo" className="block" onClick={() => setIsMenuOpen(false)}>
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-lg">🎬</span>
                  <h3 className="text-sm font-bold text-[#1E1E1E]">TWODUO Produtora</h3>
                </div>
                <p className="text-xs leading-relaxed text-gray-600">
                  Produtora audiovisual focada em trazer a personalidade do seu projeto à tona
                </p>
              </Link>
            </div>

            {/* Other Menu Items */}
            {navigationData.mainMenu
              .filter((item) => item.label !== "SOLUÇÕES")
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`py-3 text-sm font-semibold uppercase transition-colors hover:text-[#E61755] ${
                    item.highlight ? "rounded-lg bg-[#FFF0F5] px-4 text-[#E61755]" : "px-2 text-[#1E1E1E]"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

            {/* Language Selector */}
            <div className="my-2 border-t border-gray-200 pt-4">
              <button
                onClick={() => setIsMobileLanguageOpen(!isMobileLanguageOpen)}
                className="flex w-full items-center justify-between px-2 py-3 text-sm font-semibold uppercase text-[#1E1E1E]"
              >
                IDIOMA
                <ChevronDown className={`h-5 w-5 transition-transform ${isMobileLanguageOpen ? "rotate-180" : ""}`} />
              </button>
              {isMobileLanguageOpen && (
                <div className="mt-2 space-y-1 rounded-lg bg-white p-2">
                  {navigationData.language.options.map((option) => (
                    <button
                      key={option.value}
                      className="w-full rounded px-4 py-2 text-left text-sm text-[#1E1E1E] transition-colors hover:bg-gray-50"
                      onClick={() => {
                        setIsMobileLanguageOpen(false)
                        setIsMenuOpen(false)
                      }}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Contact Button */}
            <Button
              asChild
              className="mt-4 gap-2 rounded-full bg-gradient-to-r from-[#8454F4] to-[#E61755] font-semibold uppercase shadow-lg"
            >
              <Link href={navigationData.contact.href} onClick={() => setIsMenuOpen(false)}>
                {navigationData.contact.text}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
