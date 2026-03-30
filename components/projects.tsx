"use client"

import { useLanguage } from "@/context/language-context"
import { ProjectCard } from "@/components/project-card"

export function Projects() {
  const { t } = useLanguage()

  const projects = [
    {
      title: t("project1.title"),
      role: t("project1.role"),
      description: t("project1.description"),
      highlights: [
        t("project1.highlight1"),
        t("project1.highlight2"),
        t("project1.highlight3"),
        t("project1.highlight4"),
        t("project1.highlight5"),
      ],
      technologies: ["Next.js", "Nest.js", "PostgreSQL", "AI/LLMs"],
      image: "/projects/rdm-logistica.png",
      video: "/videos/rdm-logistica-demo.mp4",
    },
    {
      title: t("project2.title"),
      role: t("project2.role"),
      description: t("project2.description"),
      highlights: [
        t("project2.highlight1"),
        t("project2.highlight2"),
        t("project2.highlight3"),
        t("project2.highlight4"),
      ],
      technologies: ["React", "Python", "Django", "GCP"],
      image: "/projects/agricultura-precision.png",
      video: "/videos/agricultura-precision-demo.mp4",
    },
    {
      title: t("project3.title"),
      role: t("project3.role"),
      description: t("project3.description"),
      highlights: [
        t("project3.highlight1"),
        t("project3.highlight2"),
        t("project3.highlight3"),
        t("project3.highlight4"),
        t("project3.highlight5"),
      ],
      technologies: ["Next.js", "Supabase", "Vercel"],
      image: "/projects/taller-mecanico.png",
      link: "https://www.giordasuspension.com/", 
    },
  ]

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {t("projects.title")}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="animate-in fade-in slide-in-from-bottom-4 duration-700 h-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
