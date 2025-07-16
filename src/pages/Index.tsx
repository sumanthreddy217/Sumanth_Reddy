import { Navigation } from "@/components/Navigation"
import { HeroSection } from "@/components/sections/HeroSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { SkillsSection } from "@/components/sections/SkillsSection"
import { ProjectsSection } from "@/components/sections/ProjectsSection"
import { ContactSection } from "@/components/sections/ContactSection"
import { FooterSection } from "@/components/sections/FooterSection"

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
