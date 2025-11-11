import { Code } from "lucide-react";

const skills = [
  "React",
  "TypeScript",
  "Node.js",
  "Next.js",
  "Tailwind CSS",
  "PostgreSQL",
  "Express",
  "REST APIs",
  "Git",
  "Docker",
  "MongoDB",
  "GraphQL",
  "AWS",
  "Jest",
  "CI/CD",
];

export default function Skills() {
  return (
    <section id="habilidades" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2.5 text-[#ffa64d] mb-4">
            <Code className="w-5 h-5" />
            <span className="text-[13px] tracking-widest font-medium uppercase">
              Arsenal Técnico
            </span>
          </div>
          <h2 className="text-[42px] font-bold mb-4">
            Habilidades & Tecnologias
          </h2>
          <p className="text-gray-400 text-[16px] max-w-2xl mx-auto leading-relaxed">
            Ferramentas que uso para dar vida às ideias
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="bg-[#2a2438] px-7 py-3.5 rounded-full border border-[#3a3448] hover:border-[#ff8243] hover:bg-[#ff8243]/10 hover:text-[#ff8243] transition-all cursor-pointer text-[15px] font-medium"
                style={{
                  animation: "fadeIn 0.5s ease-out ${index * 0.05}s both",
                }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
