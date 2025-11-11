import { Film, Github, Linkedin, Mail } from "lucide-react";

export default function About() {
  return (
    <section id="sobre" className="py-24 px-6 bg-[#161320]">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2.5 text-[#ffa64d] mb-4">
            <Film className="w-5 h-5" />
            <span className="text-[13px] tracking-widest font-medium uppercase">
              Sobre Mim
            </span>
          </div>
          <h2 className="text-[42px] font-bold mb-4">
            Desenvolvedor & Cinéfilo
          </h2>
          <p className="text-gray-400 text-[16px] max-w-2xl mx-auto leading-relaxed">
            Assim como um diretor cria histórias épicas, eu construo
            experiências digitais memoráveis
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <p className="text-gray-300 text-[16px] leading-[1.8]">
              Sou um desenvolvedor FullStack apaixonado por criar soluções que
              fazem a diferença. Minha jornada na programação começou há mais de
              3 anos, e desde então tenho me dedicado a dominar as melhores
              práticas e tecnologias do mercado.
            </p>
            <p className="text-gray-300 text-[16px] leading-[1.8]">
              Inspirado pela narrativa cinematográfica, acredito que cada
              projeto conta uma história única. Combino técnica, criatividade e
              atenção aos detalhes para entregar produtos que não apenas
              funcionam, mas encantam os usuários.
            </p>
            <div className="flex gap-5 pt-4">
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#2a2438] flex items-center justify-center text-[#ff8243] hover:bg-[#ff8243] hover:text-white transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#2a2438] flex items-center justify-center text-[#ff8243] hover:bg-[#ff8243] hover:text-white transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#2a2438] flex items-center justify-center text-[#ff8243] hover:bg-[#ff8243] hover:text-white transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#ff8243] to-[#ffa64d] rounded-2xl rotate-2 opacity-30"></div>
            <div className="relative bg-[#2a2438] rounded-2xl p-10 border border-[#3a3448]">
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#ffa64d]"></div>
                  <span className="text-[16px] font-medium">
                    Clean Code Enthusiast
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#ffa64d]"></div>
                  <span className="text-[16px] font-medium">
                    Agile Methodology
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#ffa64d]"></div>
                  <span className="text-[16px] font-medium">
                    Continuous Learning
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#ffa64d]"></div>
                  <span className="text-[16px] font-medium">
                    Problem Solver
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
