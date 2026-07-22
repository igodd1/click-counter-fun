import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Sparkles,
  Smile,
  Award,
  UserCheck,
  Menu,
  X,
  MessageSquare,
  ChevronRight,
} from 'lucide-react';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    procedure: 'Avaliação Geral',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const procedures = [
    {
      title: 'Implantes Dentários',
      description: 'Recupere a mastigação e a confiança de sorrir com implantes de alta precisão e carga imediata.',
      icon: ShieldCheck,
      tag: 'Mais Procurado',
    },
    {
      title: 'Lentes de Contato Dental',
      description: 'Lâminas ultra-finas em porcelana para alinhar, clarear e harmonizar o formato dos dentes.',
      icon: Sparkles,
      tag: 'Estética',
    },
    {
      title: 'Clareamento Dental a Laser',
      description: 'Sorriso radiante e brilhante em poucas sessões com técnicas seguras que preservam o esmalte.',
      icon: Smile,
      tag: 'Rápido',
    },
    {
      title: 'Ortodontia & Alinhadores Invisíveis',
      description: 'Correção da posição dos dentes de forma discreta, confortável e sem fios metálicos.',
      icon: CheckCircle2,
      tag: 'Invisível',
    },
    {
      title: 'Endodontia (Tratamento de Canal)',
      description: 'Tratamentos modernos e praticamente indolores para salvar dentes danificados e aliviar dores.',
      icon: Award,
      tag: 'Especializada',
    },
    {
      title: 'Odontopediatria & Preventiva',
      description: 'Atendimento humanizado e carinhoso para crianças, com foco na prevenção e hábitos saudáveis.',
      icon: UserCheck,
      tag: 'Familiar',
    },
  ];

  const testimonials = [
    {
      name: 'Mariana Oliveira',
      role: 'Empresária',
      comment: 'Fiz o tratamento com lentes de contato dental com o Dr. Lucas e o resultado superou todas as expectativas. Atendimento impecável!',
      stars: 5,
    },
    {
      name: 'Carlos Eduardo Santos',
      role: 'Engenheiro',
      comment: 'Tinha muito medo de colocar implantes, mas a equipe é extremamente atenciosa e o procedimento foi super tranquilo. Recomendo de olhos fechados!',
      stars: 5,
    },
    {
      name: 'Beatriz Lima',
      role: 'Professora',
      comment: 'O clareamento ficou maravilhoso e sem nada de sensibilidade! A clínica é linda, limpa e pontual no horário agendado.',
      stars: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Top Banner */}
      <div className="bg-sky-900 text-slate-100 text-xs sm:text-sm py-2 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-sky-300" /> (11) 99999-8888
            </span>
            <span className="hidden md:flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-sky-300" /> Av. Paulista, 1000 - São Paulo/SP
            </span>
          </div>
          <div className="flex items-center gap-1 text-sky-200">
            <Clock className="w-3.5 h-3.5" /> Seg a Sex: 08h às 19h | Sáb: 08h às 13h
          </div>
        </div>
      </div>

      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="bg-sky-600 text-white p-2 rounded-xl font-bold text-xl flex items-center justify-center">
              <Smile className="w-6 h-6" />
            </div>
            <div>
              <span className="block text-lg font-bold text-slate-900 leading-tight">Dr. Lucas Silva</span>
              <span className="block text-xs text-sky-600 font-medium">Odontologia & Estética • CRO-SP 12345</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6 font-medium text-slate-600 text-sm">
            <a href="#sobre" className="hover:text-sky-600 transition-colors">Sobre</a>
            <a href="#procedimentos" className="hover:text-sky-600 transition-colors">Procedimentos</a>
            <a href="#depoimentos" className="hover:text-sky-600 transition-colors">Depoimentos</a>
            <a href="#localizacao" className="hover:text-sky-600 transition-colors">Localização</a>
            <a href="#contato" className="hover:text-sky-600 transition-colors">Contato</a>
          </nav>

          <div className="hidden md:flex items-center">
            <a
              href="#contato"
              className="bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-all shadow-sm flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Agendar Avaliação
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white px-4 py-3 flex flex-col gap-3">
            <a href="#sobre" onClick={() => setMobileMenuOpen(false)} className="py-1 text-slate-700 font-medium">Sobre</a>
            <a href="#procedimentos" onClick={() => setMobileMenuOpen(false)} className="py-1 text-slate-700 font-medium">Procedimentos</a>
            <a href="#depoimentos" onClick={() => setMobileMenuOpen(false)} className="py-1 text-slate-700 font-medium">Depoimentos</a>
            <a href="#localizacao" onClick={() => setMobileMenuOpen(false)} className="py-1 text-slate-700 font-medium">Localização</a>
            <a href="#contato" onClick={() => setMobileMenuOpen(false)} className="py-1 text-slate-700 font-medium">Contato</a>
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-sky-600 text-white text-center font-semibold py-2 rounded-lg mt-2"
            >
              Agendar Avaliação
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-900 via-sky-800 to-slate-900 text-white py-16 sm:py-24 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <span className="inline-flex items-center gap-1.5 bg-sky-500/20 text-sky-200 border border-sky-400/30 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-sky-300" />
              Sorria com Confiança & Segurança
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
              Sua saúde bucal em mãos de especialistas altamente qualificados.
            </h1>
            <p className="text-sky-100 text-base sm:text-lg mb-8 leading-relaxed">
              Tratamentos odontológicos modernos, indolores e personalizados para transformar o seu sorriso e devolver sua qualidade de vida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contato"
                className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl transition-all text-center flex items-center justify-center gap-2 shadow-lg"
              >
                <Calendar className="w-5 h-5" />
                Agendar Consulta
              </a>
              <a
                href="#procedimentos"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium px-6 py-3.5 rounded-xl transition-all text-center flex items-center justify-center gap-2"
              >
                Ver Procedimentos
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            <div className="mt-10 pt-8 border-t border-sky-700/50 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-sky-300">12+</p>
                <p className="text-xs sm:text-sm text-sky-100">Anos de Experiência</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-sky-300">5.000+</p>
                <p className="text-xs sm:text-sm text-sky-100">Pacientes Atendidos</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-sky-300">99%</p>
                <p className="text-xs sm:text-sm text-sky-100">Satisfação</p>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md shadow-2xl">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-b from-sky-100 to-sky-200 flex flex-col items-center justify-center text-slate-600 relative overflow-hidden">
                <Smile className="w-24 h-24 text-sky-600 mb-2" />
                <p className="font-semibold text-slate-800">Dr. Lucas Silva</p>
                <p className="text-xs text-slate-500">CRO-SP 12345</p>
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur p-3 rounded-xl shadow-md flex items-center justify-between text-xs text-slate-800">
                  <span className="font-medium flex items-center gap-1.5">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" /> 4.9/5.0 em Avaliações
                  </span>
                  <span className="text-sky-700 font-bold">Ver Depoimentos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o Dentista */}
      <section id="sobre" className="py-16 sm:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-xs font-semibold">
              Sobre o Profissional
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900">
              Cuidado humanizado e tecnologia de ponta para o seu bem-estar.
            </h2>
            <p className="text-slate-600 leading-relaxed">
              O <strong>Dr. Lucas Silva</strong> é cirurgião-dentista formado pela USP com especialização em Implantodontia e Prótese Dental. Há mais de uma década dedica sua carreira a restaurar sorrisos e devolver a autoestima dos seus pacientes com tratamentos seguros e sem dor.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Nossa clínica foi planejada para oferecer uma experiência acolhedora, reduzindo a ansiedade do tratamento odontológico tradicional por meio de equipamentos modernos e protocolos de atendimento humanizado.
            </p>

            <div className="space-y-2 pt-2">
              {[
                'Membro da Associação Brasileira de Odontologia (ABO)',
                'Especialista em Implantodontia e Estética Dental',
                'Atendimento personalizado e ambiente highly higienizado',
                'Uso de anestesia computadorizada e odontologia digital',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-3">
              Por que escolher nossa clínica?
            </h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-sky-100 text-sky-700 rounded-xl">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Segurança Biossegura</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Rigorosos protocolos de esterilização e equipamentos certificados pela ANVISA.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-sky-100 text-sky-700 rounded-xl">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Pontualidade nos Horários</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Respeito total ao seu tempo com agendamentos espaçados sem filas de espera.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-sky-100 text-sky-700 rounded-xl">
                  <Smile className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Tratamento Sem Dor</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Técnicas de anestesia suave e equipamentos que priorizam o seu conforto.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Área de Procedimentos */}
      <section id="procedimentos" className="py-16 sm:py-24 px-4 bg-slate-100">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="bg-sky-200 text-sky-900 px-3 py-1 rounded-full text-xs font-semibold">
              Especialidades
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900">
              Procedimentos Odontológicos
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Oferecemos um portfólio completo de tratamentos integrados para a saúde e a estética do seu sorriso.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {procedures.map((proc, index) => {
              const IconComp = proc.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-sky-50 text-sky-600 rounded-xl group-hover:bg-sky-600 group-hover:text-white transition-colors">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-semibold text-sky-700 bg-sky-100 px-2.5 py-1 rounded-full">
                        {proc.tag}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{proc.title}</h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                      {proc.description}
                    </p>
                  </div>
                  <a
                    href="#contato"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-800 transition-colors pt-2 border-t border-slate-100"
                  >
                    Saber mais sobre {proc.title}
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-16 sm:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-xs font-semibold">
              O Que Dizem Nossos Pacientes
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900">
              Depoimentos & Experiências
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A satisfação de quem confiou o seu sorriso aos nossos cuidados.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between space-y-4 shadow-sm"
              >
                <div className="space-y-3">
                  <div className="flex gap-1">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-xs sm:text-sm italic leading-relaxed">
                    "{item.comment}"
                  </p>
                </div>
                <div className="border-t border-slate-200 pt-3">
                  <p className="font-bold text-slate-900 text-sm">{item.name}</p>
                  <p className="text-xs text-slate-500">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Localização / Maps */}
      <section id="localizacao" className="py-16 sm:py-24 px-4 bg-slate-100">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="bg-sky-200 text-sky-900 px-3 py-1 rounded-full text-xs font-semibold">
              Onde Estamos
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900">
              Localização & Estrutura
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Fácil acesso, estacionamento no local e infraestrutura preparada para o seu conforto.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-6 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">
                  Informações da Clínica
                </h3>

                <div className="space-y-4 text-sm">
                  <div className="flex gap-3 items-start">
                    <MapPin className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-800">Endereço</p>
                      <p className="text-slate-600 text-xs">
                        Av. Paulista, 1000 - Cj. 802<br />
                        Bela Vista, São Paulo - SP
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <Phone className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-800">Telefone / WhatsApp</p>
                      <p className="text-slate-600 text-xs">(11) 99999-8888 / (11) 3333-2222</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <Clock className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-800">Horário de Atendimento</p>
                      <p className="text-slate-600 text-xs">Segunda a Sexta: 08h - 19h</p>
                      <p className="text-slate-600 text-xs">Sábado: 08h - 13h</p>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-2.5 rounded-xl text-xs text-center flex items-center justify-center gap-2 transition-colors"
              >
                <MapPin className="w-4 h-4" />
                Abrir no Google Maps
              </a>
            </div>

            {/* Google Maps Iframe */}
            <div className="md:col-span-2 bg-slate-200 border border-slate-300 rounded-2xl overflow-hidden min-h-[320px] relative flex flex-col items-center justify-center text-slate-600">
              <iframe
                title="Mapa de Localização"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.106696123306!2d-46.65390548502213!3d-23.56287998468161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f228976e!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '320px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contato / Agendamento */}
      <section id="contato" className="py-16 sm:py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <span className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-xs font-semibold">
              Agende sua Consulta
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900">
              Fale Conosco ou Marque uma Avaliação
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Preencha o formulário abaixo ou chame diretamente no WhatsApp. Nossa equipe responderá rapidamente.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Mensagem Enviada com Sucesso!</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Obrigado, {formData.name || 'paciente'}! Recebemos sua solicitação. Entraremos em contato muito em breve para confirmar o horário da sua avaliação.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', phone: '', procedure: 'Avaliação Geral', message: '' });
                  }}
                  className="bg-sky-600 text-white font-semibold text-xs px-5 py-2.5 rounded-xl hover:bg-sky-700 transition-colors"
                >
                  Enviar Outra Mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Seu Nome Completo *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Ana Maria"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Telefone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="(11) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Procedimento de Interesse</label>
                  <select
                    value={formData.procedure}
                    onChange={(e) => setFormData({ ...formData, procedure: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  >
                    <option value="Avaliação Geral">Avaliação Geral</option>
                    <option value="Implantes Dentários">Implantes Dentários</option>
                    <option value="Lentes de Contato Dental">Lentes de Contato Dental</option>
                    <option value="Clareamento Dental">Clareamento Dental</option>
                    <option value="Ortodontia / Alinhadores">Ortodontia / Alinhadores</option>
                    <option value="Tratamento de Canal">Tratamento de Canal</option>
                    <option value="Odontopediatria">Odontopediatria</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Mensagem ou Observações (opcional)</label>
                  <textarea
                    rows={3}
                    placeholder="Conte-nos um pouco sobre a sua dúvida ou preferência de horário..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button
                    type="submit"
                    className="flex-1 bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-6 rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Enviar Solicitação
                  </button>

                  <a
                    href="https://wa.me/5511999998888?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta."
                    target="_blank"
                    rel="noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Falar no WhatsApp
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4 text-xs border-t border-slate-800">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-base">
              <Smile className="w-5 h-5 text-sky-400" />
              Dr. Lucas Silva
            </div>
            <p className="text-slate-400 leading-relaxed">
              Transformando sorrisos com segurança, tecnologia e atendimento humanizado.
            </p>
          </div>

          <div>
            <p className="text-white font-semibold mb-3">Links Rápidos</p>
            <ul className="space-y-2">
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre o Dentista</a></li>
              <li><a href="#procedimentos" className="hover:text-white transition-colors">Procedimentos</a></li>
              <li><a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a></li>
              <li><a href="#localizacao" className="hover:text-white transition-colors">Localização</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <p className="text-white font-semibold mb-3">Procedimentos</p>
            <ul className="space-y-2">
              <li>Implantes Dentários</li>
              <li>Lentes de Contato Dental</li>
              <li>Clareamento a Laser</li>
              <li>Alinhadores Invisíveis</li>
              <li>Endodontia</li>
            </ul>
          </div>

          <div>
            <p className="text-white font-semibold mb-3">Contato & Endereço</p>
            <p className="mb-1">Av. Paulista, 1000 - Cj. 802 - SP</p>
            <p className="mb-1">Telefone: (11) 99999-8888</p>
            <p>Email: contato@drlucassilva.com.br</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto pt-6 border-t border-slate-800 text-center flex flex-col sm:flex-row justify-between items-center gap-2 text-slate-500">
          <p>© {new Date().getFullYear()} Clínica Odontológica Dr. Lucas Silva. Todos os direitos reservados.</p>
          <p>CRO-SP 12345 | Responsável Técnico: Dr. Lucas Silva</p>
        </div>
      </footer>
    </div>
  );
}
