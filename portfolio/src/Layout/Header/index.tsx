"use client";

import { Monitor } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [activeSection, setActiveSection] = useState("inicio");

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 w-full bg-[#1f1b2e]/80 backdrop-blur-md z-50">
      <nav className="container mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2.5 text-lg font-bold">
          <Monitor className="text-[#ff8243] w-6 h-6" strokeWidth={2.5} />
          <span className="text-white">Enzo Kevin</span>
        </div>
        <ul className="hidden md:flex items-center gap-10">
          {["Início", "Sobre", "Habilidades", "Projetos", "Contato"].map(
            (item) => (
              <li key={item}>
                <button
                  onClick={() =>
                    scrollToSection(
                      item
                        .toLowerCase()
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "")
                    )
                  }
                  className={`text-[15px] font-medium hover:text-[#ff8243] transition-colors ${
                    activeSection ===
                    item
                      .toLowerCase()
                      .normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, "")
                      ? "text-[#ff8243]"
                      : "text-gray-300"
                  }`}
                >
                  {item}
                </button>
              </li>
            )
          )}
        </ul>
        <button className="bg-gradient-to-r from-[#ff8243] to-[#ffa64d] px-7 py-2.5 rounded-md font-semibold text-[15px] hover:shadow-lg hover:shadow-[#ff8243]/40 transition-all">
          Contratar
        </button>
      </nav>
    </header>
  );
}
