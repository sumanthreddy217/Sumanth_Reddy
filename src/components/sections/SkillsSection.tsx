import { 
  Code, 
  Database, 
  Globe, 
  Server, 
  Terminal, 
  Smartphone,
  GitBranch,
  Layers,
  Coffee,
  Braces,
  FileCode,
  Zap,
  Chrome,
  Settings
} from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML", level: 90, icon: FileCode },
      { name: "CSS", level: 85, icon: Layers },
      { name: "JavaScript", level: 80, icon: Braces },
      { name: "Bootstrap", level: 85, icon: Smartphone },
      { name: "React", level: 70, icon: Globe }
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Python", level: 85, icon: Code },
      { name: "Java", level: 75, icon: Coffee },
      { name: "Flask", level: 70, icon: Server },
      { name: "MongoDB", level: 65, icon: Database },
      { name: "Node.js", level: 60, icon: Terminal }
    ]
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", level: 80, icon: GitBranch },
      { name: "GitHub", level: 85, icon: GitBranch },
      { name: "VS Code", level: 90, icon: Settings },
      { name: "Postman", level: 75, icon: Chrome },
      { name: "YOLOv8", level: 60, icon: Zap }
    ]
  }
]

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-modern">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Constantly learning and improving my technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title} 
              className="animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="card-modern p-8 h-full">
                <h3 className="text-xl font-bold mb-6 text-center text-primary">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="bg-gradient-primary p-2 rounded-lg">
                            <skill.icon className="h-4 w-4 text-primary-foreground" />
                          </div>
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}