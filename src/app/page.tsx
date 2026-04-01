import Nav from "@/components/Nav";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import PhotographySection from "@/components/PhotographySection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Nav />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <AboutSection />
        <PhotographySection />
        <ContactSection />
      </main>
    </div>
  );
}
