import { Monitor, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-[#2a2438]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <Monitor className="text-[#ff8243] w-6 h-6" strokeWidth={2.5} />
          <span className="font-bold text-[17px]">Enzo Kevin</span>
        </div>
        <p className="text-gray-400 text-[14px]">
          © 2025 Enzo Kevin. Todos os direitos reservados.
        </p>
        <div className="flex gap-4">
          <a
            href="#"
            className="text-gray-400 hover:text-[#ff8243] transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-[#ff8243] transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-[#ff8243] transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
