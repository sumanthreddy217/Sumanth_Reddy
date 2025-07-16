import { Heart, Github, Linkedin, Mail } from "lucide-react"

export function FooterSection() {
  return (
    <footer className="bg-foreground/5 border-t border-border">
      <div className="container-modern py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">SUMANTH</h3>
            <p className="text-muted-foreground leading-relaxed">
              Aspiring Full Stack Developer passionate about creating innovative 
              web solutions and contributing to the tech community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["Home", "About", "Skills", "Projects", "Contact"].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.querySelector(`#${link.toLowerCase()}`)
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect With Me</h4>
            <div className="flex space-x-4">
              <a
                href="mailto:sumanth.reddy@email.com"
                className="p-3 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-300 glow-on-hover"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/sumanth-reddy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-300 glow-on-hover"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/sumanthreddy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-300 glow-on-hover"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center">
            © 2024 Karri Damodara Sai Sumanth Reddy. Made with 
            <Heart className="h-4 w-4 mx-1 text-red-500" />
            and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  )
}