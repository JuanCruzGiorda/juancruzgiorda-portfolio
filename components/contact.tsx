"use client"

import { useLanguage } from "@/context/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Github, Linkedin, Mail } from "lucide-react"

export function Contact() {
  const { t } = useLanguage()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <section id="contact" className="py-24 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-muted-foreground mb-12 text-lg">
            {t("contact.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <form 
            onSubmit={handleSubmit}
            className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100"
          >
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">{t("contact.name")}</FieldLabel>
                <Input 
                  id="name" 
                  name="name" 
                  placeholder={t("contact.name")}
                  required 
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="email">{t("contact.email")}</FieldLabel>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  placeholder={t("contact.email")}
                  required 
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="message">{t("contact.message")}</FieldLabel>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder={t("contact.message")}
                  rows={5}
                  required 
                />
              </Field>
            </FieldGroup>
            <Button type="submit" size="lg" className="w-full md:w-auto">
              {t("contact.send")}
            </Button>
          </form>

          <div className="flex flex-col justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            <div className="space-y-6">
              <p className="text-muted-foreground">
                {t("contact.description")}
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/juancruzgiorda/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Linkedin className="size-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/JuanCruzGiorda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Github className="size-5" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="giordajuan02@gmail.com"
                  className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Mail className="size-5" />
                  <span className="sr-only">Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
