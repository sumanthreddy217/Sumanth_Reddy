import { ArrowDown, Download, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import profilePicture from "@/assets/profile-picture.jpg"

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToAbout = () => {
    const element = document.querySelector("#about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      
      <div className="container-modern section-padding text-center relative z-10">
        <div className="animate-fade-in-up">
          {/* Profile Picture */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-glow floating-animation">
                <img
                  src={profilePicture}
                  alt="Karri Damodara Sai Sumanth Reddy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-10"></div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-foreground">Karri Damodara Sai</span>
            <br />
            <span className="text-gradient">Sumanth Reddy</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Aspiring Full Stack Developer passionate about building user-friendly and responsive web applications
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={scrollToContact}
              className="btn-hero"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            
            <Button 
              variant="outline"
              className="btn-outline-hero"
              onClick={() => window.open("#", "_blank")}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToAbout}
            className="animate-bounce inline-flex items-center text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}