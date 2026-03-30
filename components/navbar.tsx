"use client"

import { useLanguage } from "@/context/language-context"
import { useTheme } from "@/context/theme-context"
import { Button } from "@/components/ui/button"
import { Download, Moon, Sun } from "lucide-react"

export function Navbar() {
  const { language, setLanguage, t } = useLanguage()
  const { theme, toggleTheme, mounted } = useTheme()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-lg font-semibold tracking-tight text-foreground">
          Juan Cruz Giorda
        </a>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" asChild>
            <a href={language === "es" ? "/CV_GiordaJuanCruz.pdf" : "/CV_GiordaJuanCruz_us.pdf"} download>
              <Download className="size-4" />
              <span className="hidden sm:inline">{t("nav.downloadCV")}</span>
            </a>
          </Button>
          
          <div className="flex items-center border rounded-md overflow-hidden">
            <button
              onClick={() => setLanguage("es")}
              className={`px-3 py-1.5 text-sm font-medium transition-colors ${
                language === "es"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1.5 text-sm font-medium transition-colors ${
                language === "en"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              EN
            </button>
          </div>
          
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {mounted ? (
              theme === "light" ? <Moon className="size-4" /> : <Sun className="size-4" />
            ) : (
              <Moon className="size-4" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </nav>
    </header>
  )
}
