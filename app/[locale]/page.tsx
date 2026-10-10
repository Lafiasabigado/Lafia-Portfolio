import Hero from "@/app/components/home/Hero";
import ProjectMarquee from "@/app/components/home/ProjectMarquee";
import AboutSection from "@/app/components/home/AboutSection";
import ServicesSection from "@/app/components/home/ServicesSection";
import ProjectsGrid from "@/app/components/home/ProjectsGrid";
import OffscreenGallery from "@/app/components/home/OffscreenGallery";
import Contact from "@/app/components/home/Contact";

export default function Home() {
  return (
    <div className="relative pb-16 bg-black text-white selection:bg-white/20">
      <Hero />
      <ProjectMarquee />
      <AboutSection />
      <ServicesSection />
      <ProjectsGrid />
      <OffscreenGallery />
      <Contact />
    </div>
  );
}