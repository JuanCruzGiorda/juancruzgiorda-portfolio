"use client"

import { useLanguage } from "@/context/language-context"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center px-6 pt-16"
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
          <div className="order-2 md:order-1 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 text-balance">
              Juan Cruz Giorda
            </h1>
            <p className="text-lg md:text-xl text-accent font-medium mb-4">
              {t("hero.title")}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl text-pretty">
              {t("hero.description")}
            </p>
            <Button size="lg" asChild>
              <a href="#projects">
                {t("hero.cta")}
                <ArrowDown className="size-4" />
              </a>
            </Button>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            <div className="relative">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-muted to-secondary overflow-hidden border-4 border-background shadow-xl">
                <Image
                  src="/profile.jpg"
                  alt="Juan Cruz Giorda"
                  width={224}
                  height={224}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-lg">
                <span className="text-accent-foreground text-2xl">{"</>"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
