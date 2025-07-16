import { ExternalLink, Github, Flame, CheckSquare, User } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "To-Do List Application",
    description: "A modern React + Vite application for managing daily tasks with real-time updates, local storage persistence, and intuitive user interface.",
    technologies: ["React", "Vite", "JavaScript", "CSS", "Local Storage"],
    features: [
      "Real-time task updates",
      "Local storage persistence", 
      "Responsive design",
      "Task filtering and sorting"
    ],
    icon: CheckSquare,
    gradient: "from-blue-500 to-purple-600",
    github: "https://github.com/sumanthreddy217/To-Do-List",
    demo: "https://to-do-list-six-virid.vercel.app/"
  },
  {
    title: "Fire Detection System",
    description: "Real-time fire detection web application using computer vision and machine learning with YOLOv8 model for accurate fire detection.",
    technologies: ["Python", "YOLOv8", "Flask", "HTML", "CSS", "JavaScript"],
    features: [
      "Real-time video processing",
      "YOLOv8 object detection",
      "Web-based interface",
      "Alert system"
    ],
    icon: Flame,
    gradient: "from-red-500 to-orange-600",
    github: "https://github.com/sumanthreddy217/Fire-Dectection",
    demo: "#"
  },
  {
    title: "Interactive Profile Card",
    description: "A responsive and interactive profile card component with modern CSS animations, social media links, and hover effects.",
    technologies: ["HTML", "CSS", "Responsive Design"],
    features: [
      "Smooth animations",
      "Social media integration",
      "Mobile responsive",
      "Modern design"
    ],
    icon: User,
    gradient: "from-green-500 to-teal-600",
    github: "https://github.com/sumanthreddy217/Profile_Card",
    demo: "#"
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container-modern">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing my development skills through practical applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="animate-fade-in-up card-modern overflow-hidden group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Header */}
              <div className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                    <project.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="absolute -bottom-8 -right-8 opacity-10">
                  <project.icon className="h-32 w-32 text-white" />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-foreground">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex space-x-2 pt-4">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="flex-1"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-primary hover:brightness-110"
                    onClick={() => window.open(project.demo, "_blank")}
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline"
            className="btn-outline-hero"
            onClick={() => window.open("https://github.com/sumanthreddy217?tab=repositories", "_blank")}
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}