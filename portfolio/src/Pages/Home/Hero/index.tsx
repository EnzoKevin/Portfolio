import { Clapperboard } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="pt-32 pb-20 px-6 container mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="flex items-center gap-2.5 text-[#ffa64d] mb-6">
            <Clapperboard className="w-5 h-5" />
            <span className="text-[13px] tracking-widest font-medium uppercase">
              Desenvolvedor FullStack
            </span>
          </div>
          <h1 className="text-5xl md:text-[56px] font-bold mb-6 leading-tight">
            Enzo Kevin{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff8243] to-[#ffa64d]">
              Morais Rocha
            </span>
          </h1>
          <p className="text-gray-400 text-[17px] mb-10 leading-relaxed max-w-xl">
            Criando experiências digitais épicas com código limpo e arquiteturas
            robustas. Especialista em React, Node.js e tecnologias modernas.
          </p>
          <div className="flex gap-4 mb-16">
            <button className="bg-gradient-to-r from-[#ff8243] to-[#ffa64d] px-9 py-3.5 rounded-lg font-semibold text-[15px] hover:shadow-xl hover:shadow-[#ff8243]/40 transition-all">
              Ver Projetos
            </button>
            <button className="border-2 border-[#ff8243] text-[#ff8243] px-9 py-3.5 rounded-lg font-semibold text-[15px] hover:bg-[#ff8243]/10 transition-all">
              Download CV
            </button>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div>
              <div className="text-[40px] font-bold text-[#ff8243] mb-1.5">
                3+
              </div>
              <div className="text-[13px] text-gray-400 font-medium">
                Anos de Experiência
              </div>
            </div>
            <div>
              <div className="text-[40px] font-bold text-[#ff8243] mb-1.5">
                50+
              </div>
              <div className="text-[13px] text-gray-400 font-medium">
                Projetos Concluídos
              </div>
            </div>
            <div>
              <div className="text-[40px] font-bold text-[#ff8243] mb-1.5">
                15+
              </div>
              <div className="text-[13px] text-gray-400 font-medium">
                Tecnologias
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-[#ff8243] via-[#ffa64d] to-[#ff8243] rounded-[32px] blur-3xl opacity-20"></div>
          <div className="relative bg-gradient-to-br from-[#ff8243] via-[#ff9352] to-[#ffa64d] p-[2px] rounded-[28px]">
            <div className="bg-[#312a45] rounded-[26px] p-10">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
                <span className="ml-auto text-[13px] text-gray-400 font-medium">
                  developer.js
                </span>
              </div>
              <pre className="text-[15px] font-mono leading-relaxed">
                <code>
                  <span className="text-[#c792ea]">const</span>{" "}
                  <span className="text-[#82aaff]">developer</span>{" "}
                  <span className="text-white">=</span>{" "}
                  <span className="text-[#89ddff]">{"{"}</span>
                  {"\n  "}
                  <span className="text-[#7fdbca]">name:</span>{" "}
                  <span className="text-[#ff8243]">"Enzo Kevin"</span>,{"\n  "}
                  <span className="text-[#7fdbca]">role:</span>{" "}
                  <span className="text-[#ff8243]">"FullStack"</span>,{"\n  "}
                  <span className="text-[#7fdbca]">passion:</span>{" "}
                  <span className="text-[#ff8243]">"Cinema & Code"</span>
                  {"\n"}
                  <span className="text-[#89ddff]">{"}"}</span>;
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
