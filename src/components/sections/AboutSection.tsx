import { GraduationCap, Calendar, MapPin } from "lucide-react"

const education = [
  {
    degree: "B.Tech in Computer Science Engineering and Data Science",
    institution: "Swarnandhra College of Engineering and Technology",
    period: "2022 – Present",
    icon: GraduationCap
  },
  {
    degree: "Intermediate in MPC",
    institution: "Sri Chaitanya Junior College",
    period: "2020 – 2022",
    icon: GraduationCap
  },
  {
    degree: "Secondary School",
    institution: "Medapati Surya Kumari Educational Academy",
    period: "2010 – 2020",
    icon: GraduationCap
  }
]

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-modern">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dedicated to crafting exceptional digital experiences through code
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-6 text-primary">My Journey</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hello! I'm Karri Damodara Sai Sumanth Reddy, an aspiring Full Stack Developer with a passion for creating 
                innovative and user-centric web applications. My journey in technology began with curiosity and has evolved 
                into a dedicated pursuit of excellence in software development.
              </p>
              <p>
                I specialize in modern web technologies including HTML, CSS, JavaScript, and Bootstrap for frontend development, 
                while actively expanding my expertise in backend technologies like React, Node.js, MongoDB, and Flask. 
                My goal is to bridge the gap between beautiful design and robust functionality.
              </p>
              <p>
                What drives me is the ability to transform ideas into interactive, responsive applications that solve real-world 
                problems. I believe in writing clean, maintainable code and staying updated with the latest industry trends 
                and best practices.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or learning about the latest developments in AI and machine learning.
              </p>
            </div>
          </div>

          {/* Education Section */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold mb-6 text-primary">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="card-modern p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-primary p-3 rounded-lg">
                      <edu.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2">{edu.degree}</h4>
                      <div className="flex items-center space-x-4 text-muted-foreground text-sm">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{edu.institution}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}