"use client"

import { useState } from "react"
import { useLanguage } from "@/context/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Github, Linkedin, Mail, CheckCircle, AlertCircle } from "lucide-react"

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message?: string;
}

export function ContactProfessional() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<FormStatus>({ type: 'idle' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ 
          type: 'success', 
          message: 'Mensaje enviado correctamente. Te responderé pronto!' 
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ 
          type: 'error', 
          message: result.error || 'Error enviando el mensaje' 
        });
      }
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: 'Error de conexión. Inténtalo nuevamente.' 
      });
    }
  };

  if (status.type === 'success') {
    return (
      <section id="contact" className="py-24 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              ¡Gracias por tu mensaje!
            </h2>
            <p className="text-muted-foreground mb-12 text-lg">
              {status.message}
            </p>
            <Button 
              onClick={() => {
                setStatus({ type: 'idle' });
                setFormData({ name: '', email: '', message: '' });
              }} 
              size="lg"
            >
              Enviar otro mensaje
            </Button>
          </div>
        </div>
      </section>
    );
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
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t("contact.name")}
                  required 
                  disabled={status.type === 'loading'}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="email">{t("contact.email")}</FieldLabel>
                <Input 
                  id="email" 
                  name="email" 
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t("contact.email")}
                  required 
                  disabled={status.type === 'loading'}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="message">{t("contact.message")}</FieldLabel>
                <Textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("contact.message")}
                  rows={5}
                  required 
                  disabled={status.type === 'loading'}
                />
              </Field>
            </FieldGroup>

            {status.type === 'error' && (
              <div className="flex items-center gap-2 text-red-600 text-sm">
                <AlertCircle className="w-4 h-4" />
                <span>{status.message}</span>
              </div>
            )}

            <Button 
              type="submit" 
              size="lg" 
              className="w-full md:w-auto"
              disabled={status.type === 'loading'}
            >
              {status.type === 'loading' ? "Enviando..." : t("contact.send")}
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
                  href="mailto:giordajuan02@gmail.com"
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
