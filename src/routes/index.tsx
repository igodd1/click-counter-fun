import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Phone, MapPin, Clock, Star, CheckCircle2, ShieldCheck, Scale, Gavel, Briefcase, Award, FileText, Building2, Calendar, Send, Menu, X, ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    { question: 'Como funciona a primeira consulta jurídica?', answer: 'Realizamos uma análise preliminar sigilosa do seu caso, onde identificamos as opções cabíveis, estimativa de prazos e honorários de forma clara.' },
    { question: 'O escritório atende demandas fora de São Paulo?', answer: 'Sim. Atuamos em âmbito nacional com processos 100% digitais e representação nos Tribunais Superiores em Brasília.' },
    { question: 'Quais os documentos necessários para iniciar o atendimento?', answer: 'Para a primeira reunião, recomendamos RG/CPF ou CNPJ, contrato social se aplicável, e documentos preliminares do litígio ou dúvida.' },
    { question: 'Como é garantido o sigilo das informações prestadas?', answer: 'Todas as comunicações são protegidas pelo sigilo profissional da OAB e por acordos de confidencialidade (NDA) desde o primeiro contato.' },
  ];

  const practiceAreas = [
    { title: 'Direito Civil & Família', desc: 'Planejamento sucessório, inventários, litígios patrimoniais e contratos de alta complexidade.' },
    { title: 'Direito Empresarial & Compliance', desc: 'Assessoria jurídica contínua, governança corporativa, contratos sociais e fusões.' },
    { title: 'Direito Trabalhista Patronal', desc: 'Defesa e prevenção de riscos passivos para empresas e gestão preventiva de contencioso.' },
    { title: 'Direito Tributário & Fiscal', desc: 'Planejamento tributário estratégico, contencioso administrativo e recuperação de créditos.' },
  ];

  const testimonials = [
    { name: 'Dr. Roberto Mendes - CEO TechCorp', text: 'A atuação preventiva e estratégica do escritório evitou passivos significativos para nossa empresa.' },
    { name: 'Helena Cavalcanti', text: 'Atendimento impecável e transparente. Conduziram nosso processo de inventário com total agilidade e sigilo.' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2.5 font-bold text-xl text-amber-400 tracking-tight">
            <Scale className="w-7 h-7 text-amber-500" />
            <span className="text-slate-100">Vance & Associados <span className="text-xs font-normal text-amber-400 block -mt-1 tracking-wider uppercase">Advocacia & Consultoria</span></span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-300">
            <a href="#sobre" className="hover:text-amber-400 transition-colors">O Escritório</a>
            <a href="#areas" className="hover:text-amber-400 transition-colors">Áreas de Atuação</a>
            <a href="#diferenciais" className="hover:text-amber-400 transition-colors">Diferenciais</a>
            <a href="#depoimentos" className="hover:text-amber-400 transition-colors">Avaliações</a>
            <a href="#contato" className="hover:text-amber-400 transition-colors">Contato</a>
          </nav>
          <Button asChild size="sm" className="hidden md:inline-flex bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold rounded-md px-5 shadow-md">
            <a href="#contato">Agendar Consulta Jurídica</a>
          </Button>
          <button className="md:hidden p-1 text-slate-200" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden p-4 bg-slate-900 border-t border-slate-800 flex flex-col gap-3 text-sm font-medium text-slate-200">
            <a href="#sobre" onClick={() => setIsMenuOpen(false)}>O Escritório</a>
            <a href="#areas" onClick={() => setIsMenuOpen(false)}>Áreas de Atuação</a>
            <a href="#diferenciais" onClick={() => setIsMenuOpen(false)}>Diferenciais</a>
            <a href="#depoimentos" onClick={() => setIsMenuOpen(false)}>Avaliações</a>
            <a href="#contato" onClick={() => setIsMenuOpen(false)}>Contato</a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="py-20 px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center animate-in fade-in slide-in-from-bottom-4 duration-1000 perspective-1000">
        <div className="space-y-5">
          <span className="inline-flex items-center gap-2 text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30 px-3.5 py-1.5 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.2)]">
            <Gavel className="w-4 h-4 text-amber-400" /> Advocacia de Alta Performance & Consultoria
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-100 leading-tight tracking-tight">
            Defesa Estratégica & Soluções Jurídicas de <span className="gold-gradient-text">Excelência</span>.
          </h1>
          <p className="text-slate-300 leading-relaxed text-base">
            Protegendo patrimônios, empresas e direitos individuais com máxima dedicação ética, rigor técnico e foco em resultados resolutivos.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button asChild className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-md px-6 py-6 text-sm btn-3d">
              <a href="#contato" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" /> Agendar Consulta
              </a>
            </Button>
            <Button variant="outline" asChild className="rounded-md border-slate-700 bg-slate-900/80 text-slate-200 hover:bg-slate-800 hover:text-amber-400 px-6 py-6 text-sm glass-card transition-all duration-300 hover:-translate-y-1">
              <a href="#areas">Conhecer Atuação</a>
            </Button>
          </div>
        </div>
        <div className="relative group preserve-3d">
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/40 via-amber-600/20 to-amber-400/40 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition duration-700"></div>
          <div className="relative glass-card rounded-2xl p-8 text-center shadow-2xl space-y-4 [transform:rotateY(-6deg)_rotateX(6deg)] hover:[transform:rotateY(0deg)_rotateX(0deg)] transition-all duration-500">
            <div className="w-20 h-20 mx-auto rounded-full bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.25)] [transform:translateZ(20px)]">
              <Scale className="w-10 h-10" />
            </div>
            <div className="[transform:translateZ(15px)]">
              <p className="text-amber-400 font-bold text-xl">Vance & Associados</p>
              <p className="text-slate-400 text-xs mt-1 font-medium tracking-wide">SOCIEDADE DE ADVOGADOS • OAB/SP 184.920</p>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-800/80 text-left [transform:translateZ(10px)]">
              <div className="bg-slate-950/70 p-3.5 rounded-lg border border-slate-800 shadow-inner">
                <p className="text-amber-400 font-bold text-lg">18+ Anos</p>
                <p className="text-slate-400 text-xs">de Prática Jurídica</p>
              </div>
              <div className="bg-slate-950/70 p-3.5 rounded-lg border border-slate-800 shadow-inner">
                <p className="text-amber-400 font-bold text-lg">98.4%</p>
                <p className="text-slate-400 text-xs">Éxito Contencioso</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o Escritório / Advogado Principal */}
      <section id="sobre" className="py-20 bg-slate-900/60 border-y border-slate-800 perspective-1000">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div className="glass-card card-3d rounded-2xl p-8 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Award className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-100">Dr. Alexandre Vance</h3>
                <p className="text-amber-400 text-xs font-semibold">Sócio-Fundador | OAB/SP 184.920</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Mestre em Direito Processual Civil pela USP, atuando há quase duas décadas na solução de conflitos patrimoniais e defesa corporativa para grandes empresas e famílias.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-slate-200 text-xs">
                <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Especialista em Gestão de Crises e Litígios Estratégicos</span>
              </div>
              <div className="flex items-center gap-3 text-slate-200 text-xs">
                <Briefcase className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Atuação em Tribunais Superiores (STJ e STF)</span>
              </div>
              <div className="flex items-center gap-3 text-slate-200 text-xs">
                <FileText className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Membro Efetivo do Instituto dos Advogados do Brasil</span>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <span className="text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30 px-3 py-1 rounded-full">Tradição & Inovação</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-100 leading-snug">Compromisso inarredável com a justiça e com o interesse do cliente.</h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Nosso escritório alia tradição e o mais alto rigor técnico à agilidade moderna. Oferecemos atendimento exclusivo e humanizado, tratando cada caso de forma artesanal e estratégica.
            </p>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" /> Sigilo absoluto e confidencialidade rigorosa</li>
              <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" /> Relatórios transparentes e acompanhamento em tempo real</li>
              <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" /> Estrutura multidisciplinar para demandas complexas</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section id="areas" className="py-20 max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 space-y-3">
          <span className="text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30 px-3 py-1 rounded-full">Especialização</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">Áreas de Atuação Jurídica</h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">Soluções jurídicas preventivas, consultivas e litigiosas sob medida.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
          {practiceAreas.map((area, i) => (
            <div key={i} className="glass-card card-3d p-6 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-sm mb-4 shadow-[0_0_10px_rgba(245,158,11,0.15)] [transform:translateZ(15px)]">
                0{i + 1}
              </div>
              <h3 className="font-bold text-slate-100 text-lg [transform:translateZ(10px)]">{area.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed [transform:translateZ(5px)]">{area.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Diferenciais */}
      <section id="diferenciais" className="py-16 bg-slate-900/40 border-y border-slate-800 perspective-1000">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6 glass-card card-3d rounded-xl space-y-2">
              <Building2 className="w-8 h-8 text-amber-400 mx-auto [transform:translateZ(10px)]" />
              <h4 className="font-bold text-slate-100 [transform:translateZ(8px)]">Estrutura Corporativa</h4>
              <p className="text-xs text-slate-400 [transform:translateZ(5px)]">Salas de reunião privativas no coração do centro financeiro de SP.</p>
            </div>
            <div className="p-6 glass-card card-3d rounded-xl space-y-2">
              <Gavel className="w-8 h-8 text-amber-400 mx-auto [transform:translateZ(10px)]" />
              <h4 className="font-bold text-slate-100 [transform:translateZ(8px)]">Contencioso de Alto Impacto</h4>
              <p className="text-xs text-slate-400 [transform:translateZ(5px)]">Atuação incisiva na defesa de teses jurídicas nos mais altos tribunais.</p>
            </div>
            <div className="p-6 glass-card card-3d rounded-xl space-y-2">
              <FileText className="w-8 h-8 text-amber-400 mx-auto [transform:translateZ(10px)]" />
              <h4 className="font-bold text-slate-100 [transform:translateZ(8px)]">Consultoria Preventiva</h4>
              <p className="text-xs text-slate-400 [transform:translateZ(5px)]">Análise minuciosa de riscos para evitar litígios desnecessários.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-20 bg-slate-900/60 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12 space-y-2">
            <span className="text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30 px-3 py-1 rounded-full">Reconhecimento</span>
            <h2 className="text-3xl font-bold text-slate-100">Depoimentos dos Nossos Clientes</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto perspective-1000">
            {testimonials.map((t, i) => (
              <div key={i} className="p-6 rounded-xl glass-card card-3d space-y-3">
                <div className="flex text-amber-400 gap-1 [transform:translateZ(10px)]">
                  {[...Array(5)].map((_, idx) => <Star key={idx} className="w-4 h-4 fill-amber-400" />)}
                </div>
                <p className="text-slate-300 italic text-sm leading-relaxed [transform:translateZ(5px)]">"{t.text}"</p>
                <p className="font-bold text-xs text-amber-400 [transform:translateZ(8px)]">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 max-w-4xl mx-auto px-4">
        <div className="text-center mb-10 space-y-2">
          <span className="text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30 px-3 py-1 rounded-full">Dúvidas Frequentes</span>
          <h2 className="text-3xl font-bold text-slate-100 flex items-center justify-center gap-2">
            <HelpCircle className="w-7 h-7 text-amber-400 inline-block" /> Perguntas Frequentes
          </h2>
          <p className="text-slate-400 text-sm">Respostas para as principais dúvidas sobre nossa atuação jurídica.</p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div key={index} className="border border-slate-800 rounded-xl bg-slate-900/80 overflow-hidden transition-all duration-200">
                <button
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-slate-800/50 transition-colors"
                >
                  <span className="font-semibold text-slate-200 text-sm sm:text-base">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-4 pb-5 pt-1 sm:px-5 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-800/60 bg-slate-950/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Localização */}
      <section id="mapa" className="py-20 max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="space-y-4 bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-md">
            <h2 className="text-2xl font-bold text-slate-100">Nosso Escritório</h2>
            <div className="space-y-3 text-sm text-slate-300">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>Av. Brigadeiro Faria Lima, 2000 - Conj. 1201<br />Itaim Bibi, São Paulo - SP</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>(11) 3045-9000 / (11) 98888-7777</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Seg à Sex: 09h às 18h30 (Sob agendamento)</span>
              </p>
            </div>
          </div>
          <div className="md:col-span-2 h-72 rounded-xl overflow-hidden border border-slate-800 shadow-md">
            <iframe
              title="Mapa de Localização do Escritório de Advocacia"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.402287029202!2d-46.6875!3d-23.5855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce576135293215%3A0xd59f9431f2c9776a!2sAv.%20Brig.%20Faria%20Lima%2C%202000!5e0!3m2!1wpt-BR!2sbr!4v1680000000000!5m2!1wpt-BR!2sbr"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Contato Form */}
      <section id="contato" className="py-20 bg-slate-900 border-t border-slate-800 text-slate-100">
        <div className="max-w-xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Solicite uma Análise Preliminar</h2>
          <p className="text-slate-400 text-sm">Preencha o formulário para agendar uma consulta sigilosa com nossos advogados.</p>
          {submitted ? (
            <div className="p-6 bg-emerald-950/80 border border-emerald-600/50 text-emerald-200 rounded-xl text-sm font-medium space-y-2 shadow-lg">
              <p className="font-bold text-base text-emerald-400">Solicitação enviada com sucesso!</p>
              <p className="text-emerald-300 text-xs">Nossa equipe entrará em contato em até 2 horas úteis com total sigilo.</p>
              <Button onClick={() => setSubmitted(false)} variant="outline" className="bg-emerald-900/40 hover:bg-emerald-900/80 text-emerald-100 border-emerald-500/30 text-xs mt-3">
                Nova Solicitação
              </Button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4 text-left glass-card p-8 rounded-2xl text-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-slate-800">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Nome Completo</label>
                <input type="text" required placeholder="Ex: Dr. Carlos Eduardo" className="w-full p-3 border border-slate-800 rounded-md text-sm bg-slate-950/80 focus:outline-none focus:border-amber-500 transition-colors shadow-inner" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Telefone / WhatsApp</label>
                <input type="tel" required placeholder="(11) 99999-9999" className="w-full p-3 border border-slate-800 rounded-md text-sm bg-slate-950/80 focus:outline-none focus:border-amber-500 transition-colors shadow-inner" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Área de Interesse Jurídico</label>
                <select className="w-full p-3 border border-slate-800 rounded-md text-sm bg-slate-950/80 text-slate-200 focus:outline-none focus:border-amber-500 transition-colors shadow-inner">
                  <option value="">Selecione...</option>
                  <option value="civil">Direito Civil & Família / Inventários</option>
                  <option value="empresarial">Direito Empresarial & Compliance</option>
                  <option value="trabalhista">Direito Trabalhista Patronal</option>
                  <option value="tributario">Direito Tributário & Fiscal</option>
                  <option value="outros">Outras Demandas Especiais</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Descrição Resumida do Caso</label>
                <textarea rows={3} placeholder="Descreva sucintamente sua dúvida ou necessidade..." className="w-full p-3 border border-slate-800 rounded-md text-sm bg-slate-950/80 text-slate-200 focus:outline-none focus:border-amber-500 transition-colors shadow-inner" />
              </div>
              <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3.5 rounded-md flex items-center justify-center gap-2 text-sm mt-2 btn-3d">
                <Send className="w-4 h-4" /> Enviar Mensagem Sigilosa
              </Button>
            </form>
          )}
        </div>
      </section>

      {/* Floating WhatsApp Action */}
      <a
        href="https://wa.me/5511988887777"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Atendimento via WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-full shadow-2xl flex items-center gap-2 font-semibold text-xs transition-all hover:scale-105 group border border-emerald-400/30"
      >
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline font-medium">Atendimento Expresso</span>
      </a>

      <footer className="py-10 text-center text-xs text-slate-500 bg-slate-950 border-t border-slate-900">
        <p>© {new Date().getFullYear()} Vance & Associados Advocacia • OAB/SP 184.920. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
