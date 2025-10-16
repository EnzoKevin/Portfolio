import { Film, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "StreamFlix",
    description:
      "Plataforma de streaming com recomendações personalizadas usando IA",
    tech: ["React", "Node.js", "MongoDB", "TensorFlow"],
    image:
      "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Cinema Booking",
    description:
      "Sistema completo de reservas para cinemas com pagamento integrado",
    tech: ["Next.js", "PostgreSQL", "Stripe", "TypeScript"],
    image:
      "https://images.pexels.com/photos/7991319/pexels-photo-7991319.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Movie Analytics",
    description:
      "Dashboard de análise de bilheteria e tendências cinematográficas",
    tech: ["React", "D3.js", "Express", "Redis"],
    image:
      "https://images.pexels.com/photos/265685/pexels-photo-265685.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Film Archive",
    description:
      "Arquivo digital de filmes clássicos com curadoria especializada",
    tech: ["Vue.js", "Firebase", "Algolia", "AWS S3"],
    image:
      "https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=800",
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
                <img
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
