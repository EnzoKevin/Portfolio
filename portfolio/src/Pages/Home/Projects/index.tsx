"use client";

import { Film, ExternalLink } from "lucide-react";
import RerunImg from "@/assets/rerun.png";
import EduTrack from "@/assets/eduTrack.png";
import ApiGolang from "@/assets/golang.png";
import Image from "next/image";

const projects = [
  {
    title: "Rerun",
    description: "Recriação do site da rerun",
    tech: ["React", "Node.js", "Responsividade", "TypeScript"],
    image: RerunImg,
  },
  {
    title: "Api Golang",
    description: "API Restful CRUD",
    tech: ["Golang", "Docker", "MongoDB", "Clean Code"],
    image: ApiGolang,
  },
  {
    title: "Edu Track",
    description: "Dashboard de análise e registro de alunos em faculdades",
    tech: ["Figma", "CSS", "HTML5", "JavaScript"],
    image: EduTrack,
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="py-24 px-6 bg-[#161320]">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2.5 text-[#ffa64d] mb-4">
            <Film className="w-5 h-5" />
            <span className="text-[13px] tracking-widest font-medium uppercase">
              Portfólio
            </span>
          </div>
          <h2 className="text-[42px] font-bold mb-4">Projetos em Destaque</h2>
          <p className="text-gray-400 text-[16px] max-w-2xl mx-auto leading-relaxed">
            Uma seleção dos meus melhores trabalhos
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-[#1f1b2e] rounded-2xl overflow-hidden border border-[#2a2438] hover:border-[#ff8243] transition-all duration-300"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1f1b2e] via-[#1f1b2e]/60 to-transparent"></div>
              </div>
              <div className="p-7">
                <h3 className="text-[24px] font-bold mb-3 group-hover:text-[#ff8243] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-[15px] mb-5 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2.5 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-[13px] bg-[#2a2438] px-4 py-1.5 rounded-full text-[#ffa64d] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="flex items-center gap-2 text-[#ff8243] font-medium hover:gap-3 transition-all text-[15px]">
                  Ver Projeto <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
