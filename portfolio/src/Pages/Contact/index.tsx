import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contato" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2.5 text-[#ffa64d] mb-4">
            <Mail className="w-5 h-5" />
            <span className="text-[13px] tracking-widest font-medium uppercase">
              Contato
            </span>
          </div>
          <h2 className="text-[42px] font-bold mb-4">
            Vamos Trabalhar Juntos?
          </h2>
          <p className="text-gray-400 text-[16px] max-w-2xl mx-auto leading-relaxed">
            Tenho interesse em oportunidades freelance ou projetos desafiadores.
            Se você tem algum projeto em mente, vamos conversar!
          </p>
        </div>
        <div className="bg-[#2a2438] rounded-2xl p-10 md:p-12 border border-[#3a3448]">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[14px] font-medium mb-2.5">
                  Nome
                </label>
                <input
                  type="text"
                  className="w-full bg-[#1f1b2e] border border-[#3a3448] rounded-lg px-4 py-3.5 text-[15px] focus:outline-none focus:border-[#ff8243] transition-colors placeholder:text-gray-500"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-[14px] font-medium mb-2.5">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-[#1f1b2e] border border-[#3a3448] rounded-lg px-4 py-3.5 text-[15px] focus:outline-none focus:border-[#ff8243] transition-colors placeholder:text-gray-500"
                  placeholder="seu@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-[14px] font-medium mb-2.5">
                Assunto
              </label>
              <input
                type="text"
                className="w-full bg-[#1f1b2e] border border-[#3a3448] rounded-lg px-4 py-3.5 text-[15px] focus:outline-none focus:border-[#ff8243] transition-colors placeholder:text-gray-500"
                placeholder="Assunto da mensagem"
              />
            </div>
            <div>
              <label className="block text-[14px] font-medium mb-2.5">
                Mensagem
              </label>
              <textarea
                rows={5}
                className="w-full bg-[#1f1b2e] border border-[#3a3448] rounded-lg px-4 py-3.5 text-[15px] focus:outline-none focus:border-[#ff8243] transition-colors resize-none placeholder:text-gray-500"
                placeholder="Descreva seu projeto ou mensagem..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#ff8243] to-[#ffa64d] px-8 py-4 rounded-lg font-semibold text-[15px] hover:shadow-xl hover:shadow-[#ff8243]/40 transition-all"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
