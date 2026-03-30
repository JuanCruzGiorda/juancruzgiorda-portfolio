"use client"

import { useState } from "react"
import { useLanguage } from "@/context/language-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, Play } from "lucide-react"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  role: string
  description: string
  highlights: string[]
  technologies: string[]
  image?: string
  link?: string
  video?: string
}

export function ProjectCard({
  title,
  role,
  description,
  highlights,
  technologies,
  image,
  link,
  video,
}: ProjectCardProps) {
  const { t } = useLanguage()
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  const ImageContent = () => (
    <>
      {image ? (
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-xl bg-background/20 backdrop-blur-sm flex items-center justify-center border border-border/50">
            <span className="text-3xl text-foreground/60">{"</>"}</span>
          </div>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      {(link || video) && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-background/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
            {link ? (
              <ExternalLink className="size-6 text-accent" />
            ) : (
              <Play className="size-6 text-accent" />
            )}
          </div>
        </div>
      )}
    </>
  )

  return (
    <>
      <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-accent/50 bg-card flex flex-col h-full">
        {link ? (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="aspect-video bg-gradient-to-br from-muted to-secondary relative overflow-hidden block cursor-pointer"
          >
            <ImageContent />
          </a>
        ) : video ? (
          <button
            onClick={() => setIsVideoOpen(true)}
            className="aspect-video bg-gradient-to-br from-muted to-secondary relative overflow-hidden block cursor-pointer w-full text-left"
          >
            <ImageContent />
          </button>
        ) : (
          <div className="aspect-video bg-gradient-to-br from-muted to-secondary relative overflow-hidden">
            <ImageContent />
          </div>
        )}
        <CardHeader className="pb-2">
          <div className="flex items-start justify-between gap-2">
            <div>
              <CardTitle className="text-lg font-semibold">{title}</CardTitle>
              <CardDescription className="text-accent font-medium">{role}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 flex-1 flex flex-col">
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
          <ul className="space-y-1.5 flex-1">
            {highlights.map((highlight, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                {highlight}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-1.5">
            {technologies.map((tech) => (
              <Badge 
                key={tech} 
                variant="secondary" 
                className="text-xs font-medium"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {video && (
        <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>{title} - Demo</DialogTitle>
            </DialogHeader>
            <div className="aspect-video w-full">
              <video
                src={video}
                controls
                autoPlay
                className="w-full h-full rounded-md"
              >
                Tu navegador no soporta videos HTML5.
              </video>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}
