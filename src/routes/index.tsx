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
    { title: 'Direito Civil & Família', desc: 'Planejamento sucessório, inventários, litígios patrimoniais e contratos de alta complexidade.', icon: <Scale className="w-6 h-6" /> },
    { title: 'Direito Empresarial', desc: 'Assessoria jurídica contínua, governança corporativa, contratos sociais e fusões.', icon: <Building2 className="w-6 h-6" /> },
    { title: 'Trabalhista Patronal', desc: 'Defesa e prevenção de riscos passivos para empresas e gestão preventiva de contencioso.', icon: <Briefcase className="w-6 h-6" /> },
    { title: 'Direito Tributário', desc: 'Planejamento tributário estratégico, contencioso administrativo e recuperação de créditos.', icon: <FileText className="w-6 h-6" /> },
  ];

  const testimonials = [
    { name: 'Dr. Roberto Mendes - CEO TechCorp', text: 'A atuação preventiva e estratégica do escritório evitou passivos significativos para nossa empresa.' },
    { name: 'Helena Cavalcanti', text: 'Atendimento impecável e transparente. Conduziram nosso processo de inventário com total agilidade e sigilo.' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg shadow-lg shadow-primary/20">
              <Scale className="w-6 h-6 text-background" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight leading-none">VANCE & ASSOC.</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">Advocacia Boutique</span>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center gap-10">
            {['Sobre', 'Áreas', 'Diferenciais', 'Depoimentos'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">{item}</a>
            ))}
            <Button asChild className="rounded-full px-6 bg-primary text-primary-foreground hover:opacity-90">
              <a href="#contato">Agendar Consulta</a>
            </Button>
          </nav>

          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Hero Section - Redesigned for Impact */}
      <section className="relative pt-44 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/20 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary">
              <ShieldCheck className="w-3.5 h-3.5" />
              Excelência Jurídica em Cada Detalhe
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
              Estratégia Jurídica de <span className="text-primary">Alto Impacto</span> para Negócios.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Atuação boutique focada em resultados extraordinários. Unimos o rigor técnico tradicional à agilidade do mercado moderno.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full px-8 h-14 text-base font-semibold">
                Falar com um Especialista
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 h-14 text-base font-semibold border-white/10 hover:bg-white/5">
                Conhecer o Escritório
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="glass-card p-10 rounded-3xl relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="space-y-8">
                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <p className="text-4xl font-bold">15+</p>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">Anos de Atuação</p>
                  </div>
                  <div className="w-px h-12 bg-white/10" />
                  <div className="space-y-1 text-right">
                    <p className="text-4xl font-bold">98%</p>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">Êxito em Teses</p>
                  </div>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-sm font-medium">Plantão Jurídico Ativo</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Nossa equipe está disponível para análises de urgência e consultoria estratégica imediata.</p>
                </div>
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
                <h3 className="text-xl font-bold text-slate-100">Dra. Helena Lumina</h3>
                <p className="text-amber-400 text-xs font-semibold">Diretora Clínica | CRM/SP 000.000</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Especialista em dermatologia estética e procedimentos minimamente invasivos, dedicada a realçar a autoestima com segurança e naturalidade.
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

      {/* Áreas de Atuação - Bento Grid Style */}
      <section id="areas" className="py-32 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight">Especialidades <span className="text-primary">Estratégicas</span></h2>
              <p className="text-muted-foreground max-w-md">Soluções jurídicas personalizadas para demandas de alta complexidade.</p>
            </div>
            <Button variant="link" className="text-primary p-0 h-auto font-bold">Ver todas as áreas →</Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {practiceAreas.map((area, i) => (
              <div key={i} className={`glass-card p-8 rounded-3xl group ${i === 0 ? 'md:col-span-2' : ''}`}>
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-background transition-all duration-500">
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{area.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section id="diferenciais" className="py-16 bg-slate-900/40 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6 glass-card card-3d rounded-xl space-y-2.5 border border-slate-800/80">
              <Building2 className="w-8 h-8 text-amber-400 mx-auto" />
              <h3 className="font-bold text-slate-100 text-base">Estrutura Corporativa</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Salas de reunião privativas no coração do centro financeiro de SP.</p>
            </div>
            <div className="p-6 glass-card card-3d rounded-xl space-y-2.5 border border-slate-800/80">
              <Gavel className="w-8 h-8 text-amber-400 mx-auto" />
              <h3 className="font-bold text-slate-100 text-base">Contencioso de Alto Impacto</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Atuação incisiva na defesa de teses jurídicas nos mais altos tribunais.</p>
            </div>
            <div className="p-6 glass-card card-3d rounded-xl space-y-2.5 border border-slate-800/80">
              <FileText className="w-8 h-8 text-amber-400 mx-auto" />
              <h3 className="font-bold text-slate-100 text-base">Consultoria Preventiva</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Análise minuciosa de riscos para evitar litígios desnecessários.</p>
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
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.map((t, i) => (
              <div key={i} className="p-6 rounded-xl glass-card card-3d space-y-3 border border-slate-800/80">
                <div className="flex text-amber-400 gap-1" aria-label="Avaliação 5 estrelas">
                  {[...Array(5)].map((_, idx) => <Star key={idx} className="w-4 h-4 fill-amber-400" />)}
                </div>
                <p className="text-slate-200 italic text-sm leading-relaxed">"{t.text}"</p>
                <p className="font-bold text-xs text-amber-400">— {t.name}</p>
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
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-slate-800/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-inset min-h-[48px]"
                  aria-expanded={isOpen}
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
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4 text-left glass-card p-8 sm:p-10 rounded-3xl text-slate-200 shadow-2xl border border-amber-500/20 bg-slate-900/90">
              <div>
                <label htmlFor="nome-input" className="block text-xs font-semibold text-slate-300 mb-1.5">Nome Completo</label>
                <input id="nome-input" type="text" required placeholder="Ex: Dr. Carlos Eduardo" className="w-full p-3.5 border border-slate-800 rounded-xl text-sm bg-slate-950/90 text-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all" />
              </div>
              <div>
                <label htmlFor="tel-input" className="block text-xs font-semibold text-slate-300 mb-1.5">Telefone / WhatsApp</label>
                <input id="tel-input" type="tel" required placeholder="(11) 99999-9999" className="w-full p-3.5 border border-slate-800 rounded-xl text-sm bg-slate-950/90 text-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all" />
              </div>
              <div>
                <label htmlFor="area-select" className="block text-xs font-semibold text-slate-300 mb-1.5">Área de Interesse Jurídico</label>
                <select id="area-select" required className="w-full p-3.5 border border-slate-800 rounded-xl text-sm bg-slate-950/90 text-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all">
                  <option value="">Selecione a área...</option>
                  <option value="civil">Direito Civil & Família / Inventários</option>
                  <option value="empresarial">Direito Empresarial & Compliance</option>
                  <option value="trabalhista">Direito Trabalhista Patronal</option>
                  <option value="tributario">Direito Tributário & Fiscal</option>
                  <option value="outro">Outras Demandas Estratégicas</option>
                </select>
              </div>
              <div>
                <label htmlFor="mensagem-input" className="block text-xs font-semibold text-slate-300 mb-1.5">Resumo da Demanda (Sigilo Garantido)</label>
                <textarea id="mensagem-input" rows={3} placeholder="Descreva brevemente sua necessidade..." className="w-full p-3.5 border border-slate-800 rounded-xl text-sm bg-slate-950/90 text-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all resize-none"></textarea>
              </div>
              <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-4 rounded-xl text-sm transition-all shadow-lg shadow-amber-500/20 btn-3d flex items-center justify-center gap-2 cursor-pointer">
                <Send className="w-4 h-4" /> Enviar Solicitação Confidencial
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
