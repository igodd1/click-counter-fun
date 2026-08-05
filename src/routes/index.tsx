import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import {
  Phone, MapPin, Clock, CheckCircle2, ShieldCheck, Scale, Gavel, Briefcase,
  Award, FileText, Building2, Send, Menu, X, ChevronDown, MessageSquare, ArrowUpRight,
} from 'lucide-react';

export const Route = createFileRoute('/')({
  component: Home,
  head: () => ({
    meta: [
      { title: 'Vance & Associados | Advocacia Empresarial em São Paulo' },
      {
        name: 'description',
        content:
          'Escritório boutique de advocacia em São Paulo. Direito empresarial, tributário, trabalhista patronal e civil com atuação estratégica e sigilo absoluto.',
      },
      { property: 'og:title', content: 'Vance & Associados | Advocacia Empresarial' },
      {
        property: 'og:description',
        content: 'Assessoria jurídica boutique com rigor técnico, sigilo absoluto e atuação nos Tribunais Superiores.',
      },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
});

const navItems = [
  { label: 'Escritório', href: '#escritorio' },
  { label: 'Áreas', href: '#areas' },
  { label: 'Método', href: '#metodo' },
  { label: 'Clientes', href: '#clientes' },
  { label: 'Contato', href: '#contato' },
];

const practiceAreas = [
  { title: 'Direito Empresarial', desc: 'Governança corporativa, contratos societários, fusões e aquisições e assessoria contínua.', icon: Building2 },
  { title: 'Direito Tributário', desc: 'Planejamento fiscal, contencioso administrativo e recuperação de créditos tributários.', icon: FileText },
  { title: 'Trabalhista Patronal', desc: 'Prevenção de passivos, defesa em contencioso e reestruturação de políticas internas.', icon: Briefcase },
  { title: 'Civil & Sucessões', desc: 'Planejamento sucessório, inventários, holdings familiares e litígios patrimoniais.', icon: Scale },
  { title: 'Contencioso Estratégico', desc: 'Sustentação oral e teses de repercussão junto ao STJ e ao STF.', icon: Gavel },
  { title: 'Compliance & Riscos', desc: 'Programas de integridade, due diligence e resposta a investigações internas.', icon: ShieldCheck },
];

const method = [
  { step: '01', title: 'Diagnóstico', desc: 'Análise preliminar sigilosa do caso, mapeamento de riscos e cenários possíveis.' },
  { step: '02', title: 'Estratégia', desc: 'Definição da tese, do caminho processual e da estimativa de prazos e custos.' },
  { step: '03', title: 'Execução', desc: 'Condução do caso com relatórios periódicos e interlocução direta com o sócio responsável.' },
];

const clients = [
  { name: 'Dr. Roberto Mendes', role: 'CEO, TechCorp', text: 'A atuação preventiva do escritório evitou passivos relevantes e deu previsibilidade ao nosso plano de expansão.' },
  { name: 'Helena Cavalcanti', role: 'Cliente Privado', text: 'Conduziram o inventário da família com agilidade, clareza e sigilo absoluto do início ao fim.' },
  { name: 'Marina Duarte', role: 'CFO, Grupo Aurora', text: 'Recuperação tributária conduzida com rigor técnico e comunicação impecável em cada etapa.' },
];

const faqs = [
  { question: 'Como funciona a primeira consulta jurídica?', answer: 'Realizamos uma análise preliminar sigilosa do caso, identificando as opções cabíveis, estimativa de prazos e honorários de forma clara e escrita.' },
  { question: 'O escritório atende demandas fora de São Paulo?', answer: 'Sim. Atuamos em âmbito nacional com processos 100% digitais e representação nos Tribunais Superiores em Brasília.' },
  { question: 'Quais documentos são necessários para iniciar?', answer: 'Para a primeira reunião: RG/CPF ou CNPJ, contrato social quando aplicável e os documentos preliminares do litígio ou da dúvida.' },
  { question: 'Como é garantido o sigilo das informações?', answer: 'Toda comunicação é protegida pelo sigilo profissional da OAB e por acordo de confidencialidade desde o primeiro contato.' },
];

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur-xl">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-4 lg:flex lg:justify-between">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center border border-primary/50 bg-primary/10">
              <Scale className="h-4 w-4 text-primary" />
            </span>
            <span className="flex min-w-0 flex-col leading-tight">
              <span className="truncate font-display text-lg tracking-tight">Vance &amp; Associados</span>
              <span className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Advocacia Boutique</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {item.label}
              </a>
            ))}
            <Button asChild className="rounded-none px-6">
              <a href="#contato">Agendar consulta</a>
            </Button>
          </nav>

          <button
            className="grid h-10 w-10 place-items-center border border-border lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="border-t border-border bg-background px-6 py-4 lg:hidden">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block border-b border-border/60 py-3 text-sm text-muted-foreground last:border-0"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden border-b border-border pt-36 pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 left-1/4 h-[28rem] w-[28rem] rounded-full bg-primary/15 blur-[140px]" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-secondary/40 blur-[120px]" />
        </div>

        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-14 lg:grid-cols-12 lg:items-end">
            <div className="space-y-8 lg:col-span-7">
              <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                <span className="h-px w-10 rule-line" />
                São Paulo · desde 2010
              </p>
              <h1 className="font-display text-5xl leading-[1.05] tracking-tight md:text-7xl">
                Estratégia jurídica para decisões que <em className="text-primary not-italic italic">não admitem erro</em>.
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
                Escritório boutique dedicado a empresas e famílias empresárias. Rigor técnico tradicional,
                execução moderna e interlocução direta com o sócio responsável pelo seu caso.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-12 rounded-none px-8">
                  <a href="#contato">Solicitar análise preliminar</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-12 rounded-none border-border px-8 hover:bg-secondary">
                  <a href="#escritorio">Conhecer o escritório</a>
                </Button>
              </div>
            </div>

            <dl className="grid grid-cols-3 gap-px border border-border bg-border lg:col-span-5">
              {[
                { k: '15+', v: 'Anos de atuação' },
                { k: '98%', v: 'Êxito em teses' },
                { k: '240', v: 'Casos conduzidos' },
              ].map((s) => (
                <div key={s.k} className="bg-surface px-5 py-8 text-center">
                  <dt className="font-display text-4xl text-foreground">{s.k}</dt>
                  <dd className="mt-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Escritório */}
      <section id="escritorio" className="border-b border-border py-24">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">O escritório</p>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              Compromisso inarredável com o interesse do cliente.
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Trabalhamos com um número deliberadamente limitado de casos por sócio. Isso garante análise
              artesanal, previsibilidade de prazos e uma estratégia desenhada para o seu contexto — não para um modelo padrão.
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {[
                'Sigilo absoluto e confidencialidade rigorosa',
                'Relatórios transparentes e acompanhamento em tempo real',
                'Estrutura multidisciplinar para demandas complexas',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="panel p-8">
            <div className="flex min-w-0 items-center gap-4">
              <span className="grid h-14 w-14 shrink-0 place-items-center border border-primary/40 bg-primary/10">
                <Award className="h-6 w-6 text-primary" />
              </span>
              <div className="min-w-0">
                <h3 className="truncate font-display text-2xl">Dra. Helena Vance</h3>
                <p className="text-xs uppercase tracking-[0.18em] text-primary">Sócia fundadora · OAB/SP 184.920</p>
              </div>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Mestre em Direito Empresarial, com atuação concentrada em contencioso estratégico e gestão de crises
              societárias para grupos nacionais e estrangeiros.
            </p>
            <div className="mt-6 space-y-3 border-t border-border pt-6 text-xs text-muted-foreground">
              {[
                { icon: ShieldCheck, text: 'Especialista em gestão de crises e litígios estratégicos' },
                { icon: Briefcase, text: 'Atuação nos Tribunais Superiores (STJ e STF)' },
                { icon: FileText, text: 'Membro efetivo do Instituto dos Advogados do Brasil' },
              ].map(({ icon: Icon, text }) => (
                <p key={text} className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Áreas */}
      <section id="areas" className="border-b border-border py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
            <div className="space-y-4">
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Áreas de atuação</p>
              <h2 className="font-display text-4xl md:text-5xl">Especialidades estratégicas</h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              Seis frentes complementares que cobrem o ciclo completo de risco jurídico de uma operação.
            </p>
          </div>

          <div className="grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map(({ title, desc, icon: Icon }) => (
              <article key={title} className="group bg-background p-8 transition-colors hover:bg-surface">
                <Icon className="h-6 w-6 text-primary" />
                <h3 className="mt-6 font-display text-2xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-xs uppercase tracking-[0.18em] text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Saiba mais <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Método */}
      <section id="metodo" className="border-b border-border bg-surface/50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 space-y-4">
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Método</p>
            <h2 className="max-w-2xl font-display text-4xl md:text-5xl">Como conduzimos cada caso</h2>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {method.map((m) => (
              <div key={m.step} className="space-y-4 border-t border-primary/40 pt-6">
                <span className="font-display text-5xl text-primary/70">{m.step}</span>
                <h3 className="font-display text-2xl">{m.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clientes */}
      <section id="clientes" className="border-b border-border py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 space-y-4">
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Clientes</p>
            <h2 className="font-display text-4xl md:text-5xl">O que dizem sobre a nossa atuação</h2>
          </div>
          <div className="grid gap-px border border-border bg-border md:grid-cols-3">
            {clients.map((c) => (
              <figure key={c.name} className="bg-background p-8">
                <blockquote className="font-display text-xl leading-snug">“{c.text}”</blockquote>
                <figcaption className="mt-6 border-t border-border pt-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  <span className="text-primary">{c.name}</span> · {c.role}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-border py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Dúvidas frequentes</p>
            <h2 className="font-display text-4xl">Perguntas que recebemos com frequência</h2>
          </div>
          <div className="border-t border-border">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={faq.question} className="border-b border-border">
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex min-h-[56px] w-full items-center justify-between gap-6 py-5 text-left transition-colors hover:text-primary"
                  >
                    <span className="text-sm font-medium">{faq.question}</span>
                    <ChevronDown className={`h-4 w-4 shrink-0 text-primary transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && <p className="pb-6 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contato + Localização */}
      <section id="contato" className="py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Contato</p>
              <h2 className="font-display text-4xl md:text-5xl">Solicite uma análise preliminar</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Retornamos em até 2 horas úteis. Todo o contato é protegido por sigilo profissional.
              </p>
            </div>

            <div className="space-y-4 border-t border-border pt-8 text-sm text-muted-foreground">
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Av. Brigadeiro Faria Lima, 2000 — Conj. 1201<br />Itaim Bibi, São Paulo — SP</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                (11) 3045-9000 · (11) 98888-7777
              </p>
              <p className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-primary" />
                Seg a Sex, 9h às 18h30 (sob agendamento)
              </p>
            </div>

            <div className="h-64 overflow-hidden border border-border">
              <iframe
                title="Mapa de localização do escritório"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.402287029202!2d-46.6875!3d-23.5855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce576135293215%3A0xd59f9431f2c9776a!2sAv.%20Brig.%20Faria%20Lima%2C%202000!5e0!3m2!1wpt-BR!2sbr!4v1680000000000!5m2!1wpt-BR!2sbr"
                className="h-full w-full border-0"
                loading="lazy"
              />
            </div>
          </div>

          {submitted ? (
            <div className="panel flex flex-col justify-center gap-3 p-10 text-center">
              <h3 className="font-display text-3xl text-primary">Solicitação enviada</h3>
              <p className="text-sm text-muted-foreground">
                Nossa equipe entrará em contato em até 2 horas úteis, com total sigilo.
              </p>
              <Button variant="outline" className="mx-auto mt-4 rounded-none border-border" onClick={() => setSubmitted(false)}>
                Nova solicitação
              </Button>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="panel space-y-5 p-8 sm:p-10"
            >
              <div>
                <label htmlFor="nome-input" className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Nome completo</label>
                <input id="nome-input" type="text" required placeholder="Carlos Eduardo Ramos"
                  className="w-full border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary" />
              </div>
              <div>
                <label htmlFor="tel-input" className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Telefone / WhatsApp</label>
                <input id="tel-input" type="tel" required placeholder="(11) 99999-9999"
                  className="w-full border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary" />
              </div>
              <div>
                <label htmlFor="area-select" className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Área de interesse</label>
                <select id="area-select" required
                  className="w-full border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary">
                  <option value="">Selecione a área…</option>
                  <option value="empresarial">Direito Empresarial &amp; Compliance</option>
                  <option value="tributario">Direito Tributário &amp; Fiscal</option>
                  <option value="trabalhista">Trabalhista Patronal</option>
                  <option value="civil">Civil, Família &amp; Sucessões</option>
                  <option value="outro">Outras demandas estratégicas</option>
                </select>
              </div>
              <div>
                <label htmlFor="mensagem-input" className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Resumo da demanda</label>
                <textarea id="mensagem-input" rows={4} placeholder="Descreva brevemente sua necessidade…"
                  className="w-full resize-none border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary" />
              </div>
              <Button type="submit" className="flex h-12 w-full items-center justify-center gap-2 rounded-none text-sm font-medium">
                <Send className="h-4 w-4" /> Enviar solicitação confidencial
              </Button>
              <p className="text-center text-[11px] text-muted-foreground">Protegido por sigilo profissional da OAB.</p>
            </form>
          )}
        </div>
      </section>

      <a
        href="https://wa.me/5511988887777"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Atendimento via WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex min-h-[48px] items-center gap-2 border border-primary/40 bg-primary px-4 py-3 text-xs font-medium text-primary-foreground shadow-2xl transition-transform hover:scale-105"
      >
        <MessageSquare className="h-4 w-4" />
        <span className="hidden sm:inline">Atendimento expresso</span>
      </a>

      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Vance &amp; Associados Advocacia · OAB/SP 184.920</p>
          <p className="uppercase tracking-[0.18em]">São Paulo · Brasília</p>
        </div>
      </footer>
    </div>
  );
}
