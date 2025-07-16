import { useState } from "react"
import { Mail, Linkedin, Github, Download, Send, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sumanthreddy.k861@gmail.com",
    href: "mailto:sumanthreddy.k861@gmail.com"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/k-sumanth-reddy",
    href: "https://linkedin.com/in/k-sumanth-reddy"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/sumanthreddy217",
    href: "https://github.com/sumanthreddy217"
  }
]

export function ContactSection() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      })
      setFormData({ name: "", email: "", message: "" })
      setIsSubmitting(false)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container-modern">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss opportunities and collaborate on exciting projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="animate-fade-in-up space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a conversation about technology and development. 
                Feel free to reach out through any of the channels below.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="flex items-center space-x-4 p-4 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-soft group"
                >
                  <div className="bg-gradient-primary p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <contact.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {contact.label}
                    </p>
                    <p className="text-sm text-muted-foreground">{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Resume Download */}
            <div className="pt-6">
              <Button 
                className="btn-hero w-full"
                onClick={() => window.open("https://drive.google.com/file/d/1wHcBt653iakiCrJ-RAqZZl9HWHzgWrzp/view?usp=drive_link", "_blank")}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="card-modern p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-hero w-full"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}