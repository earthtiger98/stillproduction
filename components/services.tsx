"use client"

import { ArrowRight } from "lucide-react"

const services = [
  {
    number: "01",
    title: "Brand Identity",
    description: "Strategic brand development that cuts through the noise. Logo design, visual systems, and brand guidelines that demand recognition.",
  },
  {
    number: "02",
    title: "Digital Design",
    description: "Web experiences that convert. UI/UX design, interactive prototypes, and digital products built for impact.",
  },
  {
    number: "03",
    title: "Motion & Video",
    description: "Dynamic visual storytelling. Animation, motion graphics, and video content that captures and holds attention.",
  },
  {
    number: "04",
    title: "Art Direction",
    description: "Creative vision brought to life. Photography direction, campaign concepts, and visual strategy that elevates.",
  },
]

export function Services() {
  return (
    <section id="services" className="relative py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
              What We Do
            </p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              OUR <span className="text-accent">SERVICES</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground leading-relaxed">
            Every project is an opportunity to push boundaries. We specialize in creating work that resonates deeply and performs exceptionally.
          </p>
        </div>

        <div className="grid gap-0 border-t border-border">
          {services.map((service) => (
            <div
              key={service.number}
              className="group py-10 border-b border-border cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                <span className="text-sm text-muted-foreground font-mono">
                  {service.number}
                </span>
                <h3 className="text-2xl md:text-4xl font-bold tracking-tight group-hover:text-accent transition-colors flex-1">
                  {service.title}
                </h3>
                <p className="text-muted-foreground max-w-md leading-relaxed hidden md:block">
                  {service.description}
                </p>
                <ArrowRight className="text-muted-foreground group-hover:text-accent group-hover:translate-x-2 transition-all" />
              </div>
              <p className="text-muted-foreground mt-4 md:hidden leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
