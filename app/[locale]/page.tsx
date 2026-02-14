import Hero from "@/app/components/home/Hero";
import ProjectsPreview from "@/app/components/home/ProjectsPreview";
import About from "@/app/components/home/About";
import Skills from "@/app/components/home/Skills";
import Contact from "@/app/components/home/Contact";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <ProjectsPreview />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}