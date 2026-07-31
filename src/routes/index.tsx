import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Phone, MapPin, Clock, Star, CheckCircle2, ShieldCheck, Sparkles, Smile, Calendar, Send, Menu, X } from 'lucide-react';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const procedures = [
    { title: 'Implantes Dentários', desc: 'Restauração definitiva com máxima naturalidade.' },
    { title: 'Lentes de Contato', desc: 'Transformação do sorriso com facetas ultrafinas.' },
    { title: 'Ortodontia', desc: 'Alinhadores invisíveis e aparelhos estéticos.' },
    { title: 'Clareamento Dental', desc: 'Técnicas a laser e caseiras supervisionadas.' },
  ];

  const testimonials = [
    { name: 'Mariana Silva', text: 'O atendimento foi incrível e o resultado do meu sorriso ficou super natural!' },
    { name: 'Carlos Eduardo', text: 'Tratamento sem dor, instalações modernas e equipe atenciosa do início ao fim.' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-sky-900">
            <Smile className="w-6 h-6 text-sky-600" />
            <span>OdontoExcellence</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
            <a href="#sobre" className="hover:text-sky-600 transition-colors">Sobre</a>
            <a href="#procedimentos" className="hover:text-sky-600 transition-colors">Procedimentos</a>
            <a href="#depoimentos" className="hover:text-sky-600 transition-colors">Depoimentos</a>
            <a href="#mapa" className="hover:text-sky-600 transition-colors">Mapa</a>
            <a href="#contato" className="hover:text-sky-600 transition-colors">Contato</a>
          </nav>
          <Button asChild size="sm" className="hidden md:inline-flex bg-sky-600 hover:bg-sky-700 text-white rounded-full px-5">
            <a href="#contato">Agendar Consulta</a>
          </Button>
          <button className="md:hidden p-1 text-slate-700" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden p-4 bg-white border-t border-slate-200 flex flex-col gap-3 text-sm font-medium">
            <a href="#sobre" onClick={() => setIsMenuOpen(false)}>Sobre</a>
            <a href="#procedimentos" onClick={() => setIsMenuOpen(false)}>Procedimentos</a>
            <a href="#depoimentos" onClick={() => setIsMenuOpen(false)}>Depoimentos</a>
            <a href="#mapa" onClick={() => setIsMenuOpen(false)}>Mapa</a>
            <a href="#contato" onClick={() => setIsMenuOpen(false)}>Contato</a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="py-16 px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <div className="space-y-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-sky-100 text-sky-800 px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" /> Odontologia Especializada & Estética
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Seu novo sorriso começa com o cuidado que você merece.
          </h1>
          <p className="text-slate-600 leading-relaxed">
            Atendimento humanizado, tecnologia moderna e tratamentos personalizados para sua saúde e estética bucal.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild className="bg-sky-600 hover:bg-sky-700 text-white rounded-full px-6">
              <a href="#contato" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" /> Agendar Avaliação
              </a>
            </Button>
            <Button variant="outline" asChild className="rounded-full border-sky-200 text-sky-900 hover:bg-sky-50">
              <a href="#procedimentos">Ver Serviços</a>
            </Button>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-blue-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-white rounded-3xl h-64 md:h-80 flex flex-col items-center justify-center border border-sky-100 p-6 text-center shadow-xl">
            <Smile className="w-20 h-20 text-sky-600 mb-2 animate-pulse" />
            <p className="text-sky-900 font-bold text-lg">Consultório Odontológico</p>
            <p className="text-sky-700 text-xs mt-1 font-medium">Ambiente climatizado e tecnologia de ponta</p>
          </div>
        </div>
      </section>

      {/* Sobre o Dentista */}
      <section id="sobre" className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-slate-100 rounded-2xl h-64 md:h-80 flex flex-col items-center justify-center border border-slate-200 p-6 text-center">
            <ShieldCheck className="w-16 h-16 text-sky-600 mb-2" />
            <span className="font-bold text-slate-800">Excelência Técnica</span>
            <span className="text-xs text-slate-500 mt-1">Mais de 15 anos transformando sorrisos</span>
          </div>
          <div className="space-y-4">
            <span className="text-xs font-semibold bg-sky-100 text-sky-800 px-3 py-1 rounded-full">Sobre o Profissional</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Dr. Lucas Mendes</h2>
            <p className="text-xs font-semibold text-sky-600">CRO-SP 123.456 | Cirurgião-Dentista</p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Especialista em Reabilitação Oral e Ortodontia, o Dr. Lucas Mendes dedica-se a devolver a estética e funcionalidade do sorriso através de tratamentos humanizados e indolores.
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0" /> Especialista em Implantodontia e Estética</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0" /> Membro da Associação Brasileira de Odontologia</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0" /> Mais de 5.000 pacientes atendidos com satisfação</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Procedimentos */}
      <section id="procedimentos" className="py-16 max-w-6xl mx-auto px-4">
        <div className="text-center mb-10 space-y-2">
          <span className="text-xs font-semibold bg-sky-100 text-sky-800 px-3 py-1 rounded-full">Especialidades</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Nossos Procedimentos</h2>
          <p className="text-slate-600 text-sm max-w-lg mx-auto">Tratamentos completos para a sua saúde e harmonia bucal.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {procedures.map((p, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center text-sky-600 font-bold text-sm mb-3">
                0{i + 1}
              </div>
              <h3 className="font-bold text-sky-900 text-lg">{p.title}</h3>
              <p className="text-slate-600 text-xs leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10 space-y-2">
            <span className="text-xs font-semibold bg-sky-100 text-sky-800 px-3 py-1 rounded-full">Avaliações</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">O que dizem nossos pacientes</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex text-amber-400 gap-1">
                  {[...Array(5)].map((_, idx) => <Star key={idx} className="w-4 h-4 fill-amber-400" />)}
                </div>
                <p className="text-slate-700 italic text-sm leading-relaxed">"{t.text}"</p>
                <p className="font-bold text-xs text-slate-900">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mapa e Localização */}
      <section id="mapa" className="py-16 max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="space-y-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">Localização</h2>
            <div className="space-y-3 text-sm text-slate-600">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                <span>Av. Paulista, 1000 - Sala 804<br />Bela Vista, São Paulo - SP</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-600 flex-shrink-0" />
                <span>(11) 99999-8888 / (11) 3333-4444</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-sky-600 flex-shrink-0" />
                <span>Seg à Sex: 08h às 19h | Sáb: 08h às 13h</span>
              </p>
            </div>
          </div>
          <div className="md:col-span-2 h-72 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <iframe
              title="Mapa de Localização do Consultório"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197587029202!2d-46.6543!3d-23.5615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%201000!5e0!3m2!1wpt-BR!2sbr!4v1680000000000!5m2!1wpt-BR!2sbr"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-16 bg-sky-900 text-white">
        <div className="max-w-xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold">Agende sua Consulta</h2>
          <p className="text-sky-100 text-sm">Preencha os dados abaixo para entrarmos em contato via WhatsApp/Telefone.</p>
          {submitted ? (
            <div className="p-6 bg-emerald-600 text-white rounded-2xl text-sm font-medium space-y-2 shadow-lg">
              <p className="font-bold text-base">Solicitação enviada com sucesso!</p>
              <p className="text-emerald-100 text-xs">Nossa equipe entrará em contato em até 2 horas úteis.</p>
              <Button onClick={() => setSubmitted(false)} variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20 text-xs mt-2">
                Nova Solicitação
              </Button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4 text-left bg-white p-8 rounded-3xl shadow-2xl text-slate-800 border border-sky-100">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Nome Completo</label>
                <input type="text" required placeholder="Ex: Ana Maria" className="w-full p-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-600" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Telefone / WhatsApp</label>
                <input type="tel" required placeholder="(11) 99999-9999" className="w-full p-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-600" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Procedimento de Interesse</label>
                <select className="w-full p-2.5 border border-slate-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-sky-600">
                  <option value="">Selecione...</option>
                  <option value="implantes">Implantes Dentários</option>
                  <option value="lentes">Lentes de Contato</option>
                  <option value="ortodontia">Ortodontia</option>
                  <option value="clareamento">Clareamento Dental</option>
                  <option value="limpeza">Limpeza / Avaliação Geral</option>
                </select>
              </div>
              <Button type="submit" className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 text-sm mt-2">
                <Send className="w-4 h-4" /> Enviar Solicitação
              </Button>
            </form>
          )}
        </div>
      </section>

      <footer className="py-10 text-center text-xs text-slate-400 bg-slate-950 border-t border-slate-800">
        <p>© {new Date().getFullYear()} OdontoExcellence - CRO-SP 123.456. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
