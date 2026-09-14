"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="relative py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Get In Touch
            </p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
              READY TO<br />
              <span className="text-accent">START?</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Have a project in mind? We&apos;d love to hear about it. Drop us a line and let&apos;s create something extraordinary together.
            </p>

            <div className="flex flex-col gap-6">
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Email</p>
                <a href="mailto:hello@stillproduction.com" className="text-lg hover:text-accent transition-colors">
                  hello@stillproduction.com
                </a>
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Phone</p>
                <a href="tel:+1234567890" className="text-lg hover:text-accent transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Location</p>
                <p className="text-lg">Los Angeles, CA</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm text-muted-foreground uppercase tracking-wider mb-3">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-muted-foreground uppercase tracking-wider mb-3">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="company" className="block text-sm text-muted-foreground uppercase tracking-wider mb-3">
                Company
              </label>
              <input
                type="text"
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors"
                placeholder="Your company"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-muted-foreground uppercase tracking-wider mb-3">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors resize-none min-h-[120px]"
                placeholder="Tell us about your project..."
                required
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-3 mt-4 px-8 py-4 bg-foreground text-background font-medium text-sm uppercase tracking-widest hover:bg-accent hover:text-accent-foreground transition-colors self-start"
            >
              Send Message
              <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
