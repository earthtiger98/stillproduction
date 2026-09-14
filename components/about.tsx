const stats = [
  { value: "150+", label: "Projects Completed" },
  { value: "12", label: "Years Experience" },
  { value: "40+", label: "Global Clients" },
  { value: "8", label: "Design Awards" },
]

export function About() {
  return (
    <section id="about" className="relative py-32 px-6 md:px-12 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
              About Us
            </p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
              EMBRACE<br />
              THE <span className="text-accent">PROCESS</span>
            </h2>
          </div>
          
          <div className="flex flex-col gap-8">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed">
              Great design creates momentum. It clarifies. It connects. It transforms.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We are a collective of designers, strategists, and makers who believe that meaningful work comes from looking beyond the obvious. We bring curiosity, clarity, and craft to every creative challenge.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Since 2014, we&apos;ve partnered with ambitious brands ready to stand out, not fit in. From startups to global enterprises, we bring the same intensity and craft to every project.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-16 border-t border-border">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <p className="text-4xl md:text-5xl font-bold text-accent tracking-tight">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground mt-2 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
