"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "How It Works", href: "#how-it-works" },
    { name: "Find an Expert", href: "#find-expert" },
    { name: "Featured", href: "#featured" },
    { name: "Claim Offers", href: "#claim-offers" },
    { name: "FAQs", href: "#faqs" },
  ]

  return (
    <header
      className={`fixed top-0 right-0 w-auto z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="flex flex-col gap-2 p-2">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[240px] sm:w-[300px]">
            <nav className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium transition-colors hover:text-primary"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <nav className="hidden md:flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="rounded-full bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-primary hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

