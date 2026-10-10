import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGit, FaFigma } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiDjango, SiTailwindcss, SiVuedotjs, SiPython } from "react-icons/si";

const Skills = () => {
  const skills = [
    { id: 1, name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { id: 2, name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { id: 3, name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { id: 4, name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
    { id: 5, name: "React", icon: <FaReact className="text-cyan-400" /> },
    { id: 6, name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { id: 7, name: "Django", icon: <SiDjango className="text-emerald-500" /> },
    { id: 8, name: "Python", icon: <SiPython className="text-blue-400" /> },
    { id: 9, name: "Vue.js", icon: <SiVuedotjs className="text-emerald-400" /> },
    { id: 10, name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { id: 11, name: "Figma", icon: <FaFigma className="text-pink-400" /> },
    { id: 12, name: "Git", icon: <FaGit className="text-red-500" /> },
  ];

  return (
    <div className="pt-28 md:pt-36 pb-32">
      <div className="container-custom">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12">
          <div>
            <p className="font-handwritten text-muted text-2xl mb-1">arsenal</p>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-white tracking-tight">
              Compétences
            </h1>
          </div>
          <div className="space-y-8">
            <p className="text-fg-soft text-lg leading-relaxed">
              J&apos;aime apprendre continuellement et affiner mes outils. Voici les technologies et bibliothèques avec lesquelles je conçois des produits au quotidien :
            </p>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <div
                  key={skill.id}
                  className="flex items-center gap-2.5 bg-bg-elevated border border-line rounded-full py-2 px-4 hover:border-white/30 transition-colors"
                >
                  <span className="text-lg">{skill.icon}</span>
                  <span className="text-sm font-medium text-white">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;