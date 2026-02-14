import Hero from "./components/home/Hero";
import ProjectsPreview from "./components/home/ProjectsPreview";
import About from "./components/home/About";
import Skills from "./components/home/Skills";
import Contact from "./components/home/Contact";

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