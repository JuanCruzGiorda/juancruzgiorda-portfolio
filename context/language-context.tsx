"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "es" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  es: {
    // Navbar
    "nav.downloadCV": "Descargar CV",
    
    // Hero
    "hero.title": "Software Developer & Systems Engineering Student",
    "hero.description": "Soy estudiante de Ingeniería en Sistemas de Información en la Universidad Tecnológica Nacional, donde he adquirido los fundamentos de la ingeniería informática, algoritmos y estructuras de datos, así como en análisis, diseño y arquitectura de sistemas. Además, he desarrollado bases en inteligencia artificial y ciencia de datos. Me motiva participar en proyectos desafiantes que me permitan seguir aprendiendo y, al mismo tiempo, resolver problemas mediante soluciones eficientes y bien diseñadas.",
    "hero.cta": "Ver proyectos",
    
    // Projects
    "projects.title": "Experiencia y Proyectos",
    "projects.viewProject": "Ver proyecto",
    
    // Project 1
    "project1.title": "RDM Logística",
    "project1.role": "Software Developer",
    "project1.description": "Desarrollo de una aplicación web para automatización de presupuestos y gestión documental utilizando modelos de lenguaje.",
    "project1.highlight1": "Procesamiento de PDFs desde emails",
    "project1.highlight2": "Generación automática de presupuestos",
    "project1.highlight3": "Integración con APIs de Google",
    "project1.highlight4": "Detección de información incompleta y envío automático de emails",
    "project1.highlight5": "Trabajo con Scrum y Jira",
    
    // Project 2
    "project2.title": "Proyecto Final – Agricultura de Precisión",
    "project2.role": "Fullstack Developer",
    "project2.description": "Sistema basado en inteligencia artificial para detección de malezas mediante imágenes de drones y generación de mapas de prescripción.",
    "project2.highlight1": "Entrenamiento de modelos de IA",
    "project2.highlight2": "Procesamiento de imágenes aéreas",
    "project2.highlight3": "Visualización en mapas interactivos",
    "project2.highlight4": "Desarrollo fullstack",
    
    // Project 3
    "project3.title": "Sistema Web para Taller Mecánico",
    "project3.role": "Web Developer",
    "project3.description": "Desarrollo de una página web con panel administrativo para gestión de trabajos y visualización de servicios.",
    "project3.highlight1": "Relevamiento de requerimientos con cliente",
    "project3.highlight2": "Panel admin con dashboard",
    "project3.highlight3": "Subida de imágenes de trabajos",
    "project3.highlight4": "Integración con WhatsApp Business",
    "project3.highlight5": "Deploy en Vercel + dominio propio",
    
    // Contact
    "contact.title": "Contacto",
    "contact.description": "¿Te interesa trabajar conmigo? Contactame.",
    "contact.name": "Nombre",
    "contact.email": "Email",
    "contact.message": "Mensaje",
    "contact.send": "Enviar mensaje",
    
    // Footer
    "footer.rights": "Todos los derechos reservados.",
  },
  en: {
    // Navbar
    "nav.downloadCV": "Download CV",
    
    // Hero
    "hero.title": "Software Developer & Systems Engineering Student",
    "hero.description": "I am a Systems Engineering student at the National Technological University, where I have acquired a foundation in computer engineering, algorithms, and data structures, as well as in systems analysis, design, and architecture. I have also developed a foundation in artificial intelligence and data science. I am motivated to participate in challenging projects that allow me to continue learning and, at the same time, solve problems through efficient and well-designed solutions.",
    "hero.cta": "View projects",
    
    // Projects
    "projects.title": "Experience & Projects",
    "projects.viewProject": "View project",
    
    // Project 1
    "project1.title": "RDM Logistics",
    "project1.role": "Software Developer",
    "project1.description": "Development of a web application for budget automation and document management using language models.",
    "project1.highlight1": "PDF processing from emails",
    "project1.highlight2": "Automatic budget generation",
    "project1.highlight3": "Google APIs integration",
    "project1.highlight4": "Incomplete information detection and automatic email sending",
    "project1.highlight5": "Working with Scrum and Jira",
    
    // Project 2
    "project2.title": "Final Project – Precision Agriculture",
    "project2.role": "Fullstack Developer",
    "project2.description": "AI-based system for weed detection using drone images and prescription map generation.",
    "project2.highlight1": "AI model training",
    "project2.highlight2": "Aerial image processing",
    "project2.highlight3": "Interactive map visualization",
    "project2.highlight4": "Fullstack development",
    
    // Project 3
    "project3.title": "Web System for Auto Shop",
    "project3.role": "Web Developer",
    "project3.description": "Development of a website with admin panel for job management and service visualization.",
    "project3.highlight1": "Client requirements gathering",
    "project3.highlight2": "Admin panel with dashboard",
    "project3.highlight3": "Work image uploads",
    "project3.highlight4": "WhatsApp Business integration",
    "project3.highlight5": "Vercel deployment + custom domain",
    
    // Contact
    "contact.title": "Contact",
    "contact.description": "Interested in working with me? Get in touch.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send message",
    
    // Footer
    "footer.rights": "All rights reserved.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.es] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
