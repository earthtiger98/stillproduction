import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { VideoBackground } from "@/components/video-background"
export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <VideoBackground />
      <div className="relative z-10">
        <Header />
        <Hero />
        <Services />
        <About />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
