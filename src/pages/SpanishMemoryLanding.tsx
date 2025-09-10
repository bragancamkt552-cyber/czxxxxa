import React, { useState, useEffect } from 'react';
import '../index.css';

interface PurchaseNotification {
  id: number;
  name: string;
  city: string;
  plan: string;
  show: boolean;
}

const SpanishMemoryLanding: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [modal, setModal] = useState<string | null>(null);
  const [spots, setSpots] = useState(37);
  const [showOffer, setShowOffer] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState<PurchaseNotification[]>([]);

  const purchaseData = [
    { name: 'Rafael C.', city: 'São Paulo', plan: 'Pro' },
    { name: 'Lucas M.', city: 'Rio de Janeiro', plan: 'Premium' },
    { name: 'Pedro S.', city: 'Curitiba', plan: 'Pro' },
    { name: 'André F.', city: 'Porto Alegre', plan: 'Básico' },
    { name: 'Gabriel B.', city: 'Brasília', plan: 'Pro' },
    { name: 'Thiago H.', city: 'Belo Horizonte', plan: 'Premium' },
    { name: 'João P.', city: 'Salvador', plan: 'Pro' },
    { name: 'Carlos R.', city: 'Fortaleza', plan: 'Básico' },
    { name: 'Bruno L.', city: 'Recife', plan: 'Pro' },
    { name: 'Diego M.', city: 'Florianópolis', plan: 'Premium' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSpots((prev) => (prev > 15 ? prev - 1 : prev));
    }, 10000); // Diminui a cada 10 segundos
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const pricingSection = entries[0];
        if (pricingSection.isIntersecting) {
          setShowOffer(true);
          setShowNotifications(true);
          startNotifications();
        } else {
          setShowOffer(false);
        }
      },
      { threshold: 0.1 }
    );
    const pricingElement = document.getElementById('pricing');
    if (pricingElement) {
      observer.observe(pricingElement);
    }
    return () => {
      if (pricingElement) {
        observer.unobserve(pricingElement);
      }
    };
  }, [showNotifications]);

  useEffect(() => {
    if (!document.querySelector('[src*="68c1f27dfc60e3d12b16bf13"]')) {
      const script = document.createElement('script');
      script.src = 'https://scripts.converteai.net/ec09afc3-b6c2-4de5-b556-85edb9ced296/players/68c1f27dfc60e3d12b16bf13/v4/player.js';
      script.async = true;
      document.head.appendChild(script);
      return () => {
        document.head.removeChild(script);
      };
    }
  }, []);

  const startNotifications = () => {
    const showNotification = () => {
      const randomPurchase = purchaseData[Math.floor(Math.random() * purchaseData.length)];
      const newNotification: PurchaseNotification = {
        id: Date.now(),
        name: randomPurchase.name,
        city: randomPurchase.city,
        plan: randomPurchase.plan,
        show: true,
      };
      setNotifications((prev) => [...prev, newNotification]);
      setTimeout(() => {
        setNotifications((prev) =>
          prev.map((notif) =>
            notif.id === newNotification.id ? { ...notif, show: false } : notif
          )
        );
        setTimeout(() => {
          setNotifications((prev) => prev.filter((notif) => notif.id !== newNotification.id));
        }, 500);
      }, 4000);
    };
    setTimeout(showNotification, 1000);
    const intervalId = setInterval(() => {
      showNotification();
    }, Math.random() * 7000 + 8000);
    setTimeout(() => {
      clearInterval(intervalId);
    }, 300000);
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const showModal = (type: string) => {
    setModal(type);
  };

  const closeModal = () => {
    setModal(null);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Background Animation */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black z-[-1]">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_30%_40%,rgba(0,255,136,0.08)_0%,transparent_60%),radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.06)_0%,transparent_60%)] animate-pulse" />
      </div>

      {/* Urgency Bar (mostra apenas na seção de preços) */}
      {showOffer && (
        <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-red-600 to-red-500 text-white text-center font-bold py-3 px-4 z-50 shadow-lg animate-[slideDown_0.5s_ease-out]">
          <div className="flex items-center justify-center gap-2 text-sm md:text-base">
            <span className="animate-pulse">⚡</span>
            <span>OFERTA LIMITADA: 50% OFF • Restam apenas <span className="bg-white text-red-600 px-2 py-1 rounded-full font-black">{spots}</span> vagas</span>
            <span className="animate-pulse">⚡</span>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-12 md:py-20 pt-16 md:pt-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full font-semibold text-black mb-6 md:mb-8 text-sm md:text-base shadow-lg">
            <span className="animate-bounce">🔥</span>
            NOVA TECNOLOGIA IA 2025
          </div>
          <h1 className="text-[clamp(28px,6vw,64px)] font-black leading-tight mb-5 bg-gradient-to-r from-white to-[#00FF88] bg-clip-text text-transparent overflow-visible whitespace-normal">
            Pare de Perder Matches Por Não Saber o Que Dizer
          </h1>
          <p className="text-[clamp(16px,2.5vw,20px)] text-[#B0B0B0] mb-10 max-w-[600px] mx-auto">
            A <span className="text-[#00FF88] font-bold">Inteligência Artificial</span> que analisa suas conversas e te diz{' '}
            <span className="text-[#00FF88] font-bold">exatamente</span> o que responder para despertar interesse e marcar encontros reais
          </p>
          <div className="mb-8 md:mb-12 flex justify-center">
            <div className="w-full max-w-md md:max-w-lg lg:max-w-xl bg-gray-800 rounded-2xl p-2 shadow-2xl">
              <vturb-smartplayer
                id="vid-68c1f27dfc60e3d12b16bf13"
                style={{ display: 'block', margin: '0 auto', width: '100%', borderRadius: '12px' }}
              ></vturb-smartplayer>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12 max-w-2xl mx-auto">
            {[
              { number: '94%', label: 'Taxa de Resposta' },
              { number: '5.2x', label: 'Mais Encontros' },
              { number: '3.124', label: 'Usuários Ativos' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700">
                <div className="text-2xl md:text-4xl font-black text-emerald-400 mb-1">{stat.number}</div>
                <div className="text-xs md:text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-3 px-8 md:px-12 py-4 md:py-5 bg-gradient-to-r from-emerald-400 to-emerald-500 text-black font-bold text-lg md:text-xl rounded-full shadow-2xl hover:shadow-emerald-400/25 hover:-translate-y-1 transition-all duration-300 group w-full max-w-md"
            >
              <span>QUERO RESULTADOS AGORA</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <p className="text-sm text-gray-400 flex items-center justify-center gap-2 flex-wrap">
              <span>✅</span> Teste GRÁTIS por 7 dias
              <span>•</span>
              <span>✅</span> Acesso imediato via WhatsApp
            </p>
          </div>
        </div>
      </section>

      {/* How It Works - WhatsApp */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              <span className="text-green-400">WhatsApp</span> - Simples e Rápido
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Sem apps complicados. Tudo funciona direto no seu WhatsApp
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: '📱',
                title: '1. Adicione o Número',
                desc: 'Salve nosso WhatsApp e envie "COMEÇAR" para ativar',
                color: 'from-blue-400 to-blue-500'
              },
              {
                icon: '📸',
                title: '2. Envie o Print',
                desc: 'Tire print da conversa e envie para análise da IA',
                color: 'from-purple-400 to-purple-500'
              },
              {
                icon: '⚡',
                title: '3. IA Analisa (30s)',
                desc: 'Receba 3 opções de resposta personalizadas',
                color: 'from-yellow-400 to-orange-400'
              },
              {
                icon: '🔥',
                title: '4. Copie e Conquiste',
                desc: 'Escolha a melhor resposta e veja os resultados',
                color: 'from-red-400 to-pink-400'
              },
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl md:text-4xl shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                  {step.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-emerald-400 mb-2">{step.title}</h3>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 md:mt-16 text-center p-6 md:p-8 bg-gradient-to-r from-green-900/30 to-green-800/30 rounded-3xl border-2 border-green-400 backdrop-blur-sm">
            <div className="text-2xl md:text-3xl font-bold text-green-400 mb-4 flex items-center justify-center gap-2">
              <span className="animate-bounce">💬</span>
              Tudo pelo WhatsApp, Zero Complicação!
            </div>
            <p className="text-gray-300 mb-6 md:mb-8 text-lg">
              Sem downloads, sem logins. É só adicionar e começar a conquistar!
            </p>
            <a
              href="#pricing"
              className="inline-flex items-center gap-3 px-8 md:px-12 py-4 bg-gradient-to-r from-green-400 to-green-500 text-black font-bold text-lg rounded-full shadow-2xl hover:-translate-y-1 transition-all"
            >
              <span>🚀</span>
              ATIVAR AGORA NO WHATSAPP
            </a>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-16 md:py-24 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-12 md:mb-16">
            Veja a Transformação na Prática
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                step: '😰',
                title: 'ANTES: Conversa Travada',
                messages: [
                  { type: 'other', text: 'Oi! Vi que você também curte trilhas 😊' },
                  { type: 'user', text: 'Oi! Sim, adoro! E você...' },
                  { type: 'other', text: 'Fiz a trilha da Pedra Bonita semana passada! 🏔️' },
                  { type: 'center', text: '🤔 "E agora? O que responder?"', className: 'text-gray-400 italic' },
                ],
                bgColor: 'from-red-900/20 to-red-800/20',
                borderColor: 'border-red-500/30'
              },
              {
                step: '🤖',
                title: 'NOSSA IA ANALISANDO',
                messages: [
                  {
                    type: 'ai',
                    html: '<div class="bg-emerald-500/20 p-4 rounded-lg border border-emerald-400/30"><strong class="text-emerald-400">💡 IA Detectou:</strong><br/>• Interesse genuíno dela<br/>• Oportunidade de conexão<br/>• Momento ideal para criar mistério</div>',
                  },
                  {
                    type: 'ai',
                    html: '<div class="bg-blue-500/20 p-4 rounded-lg border border-blue-400/30"><strong class="text-blue-400">✨ Resposta Sugerida:</strong><br/>"Pedra Bonita é incrível! Você foi no nascer ou pôr do sol? Tenho uma teoria sobre qual momento é melhor... 😏"</div>',
                  },
                ],
                bgColor: 'from-emerald-900/20 to-blue-900/20',
                borderColor: 'border-emerald-500/50'
              },
              {
                step: '🔥',
                title: 'DEPOIS: Resultado Imediato',
                messages: [
                  {
                    type: 'user',
                    text: 'Pedra Bonita é incrível! Você foi no nascer ou pôr do sol? Tenho uma teoria sobre qual momento é melhor... 😏',
                  },
                  { type: 'other', text: 'Hahaha agora fiquei curiosa! Fui no pôr do sol... qual é sua teoria? 👀' },
                  { type: 'other', text: 'Você parece conhecer os melhores lugares...' },
                  { type: 'center', text: '✅ Conversa fluindo perfeitamente!', className: 'text-emerald-400 font-bold' },
                ],
                bgColor: 'from-emerald-900/20 to-green-800/20',
                borderColor: 'border-emerald-500/50'
              },
            ].map((demo, index) => (
              <div
                key={index}
                className={`bg-gradient-to-b ${demo.bgColor} p-6 md:p-8 rounded-3xl border-2 ${demo.borderColor} backdrop-blur-sm hover:-translate-y-2 transition-all duration-300 shadow-2xl`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{demo.step}</span>
                  <h3 className="text-lg md:text-xl font-bold">{demo.title}</h3>
                </div>
                <div className="bg-black/40 rounded-2xl p-4 md:p-6 min-h-[280px] space-y-3">
                  {demo.messages.map((msg, i) => (
                    <div key={i} className={`${msg.type === 'user' ? 'text-right' : msg.type === 'center' ? 'text-center' : ''}`}>
                      {msg.html ? (
                        <div dangerouslySetInnerHTML={{ __html: msg.html }} />
                      ) : (
                        <div className={`inline-block px-4 py-3 rounded-2xl max-w-[85%] text-sm md:text-base ${
                          msg.type === 'user'
                            ? 'bg-gradient-to-r from-emerald-400 to-emerald-500 text-black font-semibold'
                            : msg.type === 'other'
                            ? 'bg-gray-700/80 text-white'
                            : msg.className || ''
                        }`}>
                          {msg.text}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 px-4 bg-black/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-12 md:mb-16">
            Recursos Que Garantem Resultados
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: '🎯',
                title: 'Análise de Perfil IA',
                desc: 'Analisa a bio dela e cria a primeira mensagem perfeita baseada em interesses mútuos',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                icon: '💬',
                title: 'Ressuscita Conversas',
                desc: 'Transforma matches mortos em conversas ativas com mensagens irresistíveis',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                icon: '🔥',
                title: 'Escalada Inteligente',
                desc: 'Aumenta a tensão romântica naturalmente, sem soar desesperado ou invasivo',
                gradient: 'from-orange-500 to-red-500'
              },
              {
                icon: '📊',
                title: 'Detector de Interesse',
                desc: 'Identifica se ela está realmente interessada ou apenas sendo educada',
                gradient: 'from-green-500 to-emerald-500'
              },
              {
                icon: '⏰',
                title: 'Timing Perfeito',
                desc: 'Te avisa o momento exato para pedir o número ou chamar para sair',
                gradient: 'from-yellow-500 to-orange-500'
              },
              {
                icon: '🎭',
                title: 'Personalidade Única',
                desc: 'Mantém seu estilo autêntico enquanto otimiza para máximos resultados',
                gradient: 'from-indigo-500 to-purple-500'
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/40 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-gray-700 hover:border-emerald-500/50 hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${feature.gradient} rounded-2xl text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-emerald-400 mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-gray-900/50 to-black/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-12 md:mb-16">
            Resultados Comprovados
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                text: 'As sugestões da IA são incríveis! Minhas conversas fluem naturalmente agora e tenho muito mais encontros marcados.',
                author: 'Rafael C.',
                location: 'São Paulo • 28 anos',
                initials: 'RC',
                rating: 5
              },
              {
                text: 'Sou introvertido e sempre travava. Com a IA, consigo me expressar melhor e as garotas respondem muito mais.',
                author: 'Lucas M.',
                location: 'Rio de Janeiro • 24 anos',
                initials: 'LM',
                rating: 5
              },
              {
                text: 'O detector de interesse mudou minha vida! Paro de perder tempo e foco nas que realmente querem me conhecer.',
                author: 'Thiago H.',
                location: 'Belo Horizonte • 31 anos',
                initials: 'TH',
                rating: 5
              },
              {
                text: 'Tinha matches parados há meses. A IA me ajudou a reativar várias conversas e já saí com 3 delas!',
                author: 'Pedro S.',
                location: 'Curitiba • 26 anos',
                initials: 'PS',
                rating: 5
              },
              {
                text: 'Estava cético, mas funciona mesmo. A IA entende o contexto e sugere respostas que fazem total sentido.',
                author: 'André F.',
                location: 'Porto Alegre • 29 anos',
                initials: 'AF',
                rating: 5
              },
              {
                text: 'É como ter um wingman expert 24/7. As dicas são práticas e me ajudam a manter conversas interessantes.',
                author: 'Gabriel B.',
                location: 'Brasília • 27 anos',
                initials: 'GB',
                rating: 5
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800/40 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-gray-700 hover:border-emerald-500/50 transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <blockquote className="text-gray-300 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center font-bold text-black text-sm">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-bold text-emerald-400">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 md:py-24 px-4 bg-black/80">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-12 md:mb-16">
            Por Que Somos Diferentes
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: '❌ Outros Métodos',
                items: [
                  'Teoria genérica que não funciona',
                  'Demora semanas para ver resultado',
                  'Custa R$2000+ em média',
                  'Te deixa na dúvida na hora H',
                  'Métodos ultrapassados'
                ],
                bgColor: 'from-red-900/30 to-red-800/20',
                borderColor: 'border-red-500/30'
              },
              {
                title: '✅ MandaEssa.ai',
                items: [
                  'IA analisa SUA conversa específica',
                  'Resposta em 30 segundos',
                  'A partir de R$39,90/mês',
                  'Sugestões em tempo real',
                  'Tecnologia de ponta'
                ],
                bgColor: 'from-emerald-900/30 to-emerald-800/20',
                borderColor: 'border-emerald-500',
                highlight: true
              },
              {
                title: '❌ Templates Prontos',
                items: [
                  'Todo mundo usa os mesmos',
                  'Não se adapta ao contexto',
                  'Parece robótico e fake',
                  'Elas percebem que é copy/paste',
                  'Zero personalização'
                ],
                bgColor: 'from-red-900/30 to-red-800/20',
                borderColor: 'border-red-500/30'
              }
            ].map((comp, index) => (
              <div
                key={index}
                className={`bg-gradient-to-b ${comp.bgColor} p-6 md:p-8 rounded-3xl border-2 ${comp.borderColor} backdrop-blur-sm ${comp.highlight ? 'scale-105 shadow-2xl shadow-emerald-500/20' : ''}`}
              >
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-center">{comp.title}</h3>
                <ul className="space-y-3">
                  {comp.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <span className="text-lg flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Trial Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-emerald-900/30 via-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-800/60 backdrop-blur-sm p-8 md:p-12 rounded-3xl border-2 border-emerald-500 shadow-2xl shadow-emerald-500/20">
            <div className="text-5xl md:text-6xl mb-6 animate-bounce">🎁</div>
            <h2 className="text-3xl md:text-5xl font-black text-emerald-400 mb-6">
              Teste GRÁTIS por 7 Dias
            </h2>
            <p className="text-xl md:text-2xl font-bold mb-4">
              Experimente TUDO sem pagar nada
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Use nossa IA por 7 dias completos e veja os resultados. Se não melhorar suas conversas e conseguir mais encontros,
              você não paga nada e ainda recebe 100% do seu dinheiro de volta.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8 mb-8">
              {[
                { text: '7 DIAS', subtitle: 'Grátis' },
                { text: '100%', subtitle: 'Garantia' },
                { text: '0', subtitle: 'Risco' },
                { text: '24/7', subtitle: 'Suporte' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-4xl font-black text-emerald-400 mb-1">{item.text}</div>
                  <div className="text-gray-400 text-sm">{item.subtitle}</div>
                </div>
              ))}
            </div>
            <div className="bg-emerald-500/10 border border-emerald-400/30 rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-bold text-emerald-400 mb-4">Como funciona o teste grátis:</h3>
              <div className="text-left space-y-2 max-w-2xl mx-auto">
                <p className="text-gray-300">✅ Ative sua conta e use por 7 dias completos</p>
                <p className="text-gray-300">✅ Teste TODOS os recursos premium</p>
                <p className="text-gray-300">✅ Não gostou? Cancele e não pague nada</p>
                <p className="text-gray-300">✅ Gostou? Continue com desconto especial</p>
              </div>
            </div>
            <a
              href="#pricing"
              className="inline-flex items-center gap-3 px-10 md:px-14 py-5 md:py-6 bg-gradient-to-r from-emerald-400 to-emerald-500 text-black font-bold text-xl rounded-full shadow-2xl hover:shadow-emerald-400/25 hover:-translate-y-1 transition-all duration-300"
            >
              <span>🚀</span>
              COMEÇAR TESTE GRÁTIS
            </a>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-gray-900/50 to-black" id="pricing">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-12 md:mb-16">
            Escolha Seu Plano
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {[
              {
                name: 'Básico',
                price: 'R$ 39,90',
                period: '/mês',
                features: [
                  '20 análises por mês',
                  'Sugestões básicas de resposta',
                  'Detector de interesse',
                  'Suporte via WhatsApp',
                  'Atualizações mensais'
                ],
                link: 'https://pay.kiwify.com.br/8FUUpEG',
                button: 'COMEÇAR TESTE GRÁTIS',
                popular: false
              },
              {
                name: 'Pro',
                price: 'R$ 97',
                period: '/mês',
                features: [
                  '50 análises por mês',
                  'Modo Escalada ativado',
                  'Ressuscitador de matches',
                  'Análise de perfil avançada',
                  'Templates exclusivos',
                  'Suporte prioritário 24/7'
                ],
                link: 'https://pay.kiwify.com.br/0pegT9S',
                button: 'TESTE GRÁTIS PRO',
                popular: true
              },
              {
                name: 'Premium',
                price: 'R$ 247',
                period: '/mês',
                features: [
                  'Análises ILIMITADAS',
                  'Todos os recursos Pro',
                  'IA personalizada pro seu perfil',
                  'Modo Expert ativado',
                  'Consultoria 1-1 mensal',
                  'Grupo VIP exclusivo'
                ],
                link: 'https://pay.kiwify.com.br/TL2Ixa1',
                button: 'TESTE PREMIUM GRÁTIS',
                popular: false
              }
            ].map((plan, index) => (
              <div
                key={index}
                className={`relative bg-gray-800/40 backdrop-blur-sm p-6 md:p-8 rounded-3xl border-2 transition-all duration-300 ${
                  plan.popular
                    ? 'border-emerald-500 scale-105 shadow-2xl shadow-emerald-500/20'
                    : 'border-gray-700 hover:border-emerald-500/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-emerald-400 to-emerald-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                      MAIS ESCOLHIDO
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-emerald-400 mb-2">{plan.name}</h3>
                  <div className="text-4xl md:text-5xl font-black mb-1">
                    {plan.price}
                    <span className="text-base text-gray-400 font-normal">{plan.period}</span>
                  </div>
                  <p className="text-sm text-emerald-400 font-semibold">7 dias grátis, depois {plan.price}/mês</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-emerald-400 font-bold mt-1">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.link}
                  className={`block w-full text-center px-6 py-4 font-bold text-lg rounded-full transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-emerald-400 to-emerald-500 text-black hover:shadow-2xl hover:shadow-emerald-400/25'
                      : 'bg-gradient-to-r from-gray-700 to-gray-600 text-white hover:from-emerald-400 hover:to-emerald-500 hover:text-black'
                  } hover:-translate-y-1`}
                >
                  {plan.button}
                </a>
                <p className="text-center text-xs text-gray-500 mt-3">
                  Cancele a qualquer momento durante o teste
                </p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <div className="bg-emerald-500/10 border-2 border-emerald-400 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
              <h3 className="text-xl md:text-2xl font-bold text-emerald-400 mb-4">
                💡 Por que oferecemos teste grátis?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Porque temos certeza que nossa IA vai transformar suas conversas.
                Em 7 dias você vai ver a diferença e não vai querer cancelar!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Stats */}
      <section className="py-16 px-4 bg-emerald-500/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 text-center">
            {[
              { number: '3.124', label: 'Usuários Ativos' },
              { number: '52.847', label: 'Conversas Salvas' },
              { number: '94%', label: 'Taxa de Sucesso' },
              { number: '4.9⭐', label: 'Avaliação Média' },
              { number: '24/7', label: 'Disponível' },
              { number: '30s', label: 'Tempo Resposta' }
            ].map((stat, index) => (
              <div key={index} className="p-4">
                <div className="text-3xl md:text-4xl font-black text-emerald-400 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-12 md:mb-16">
            Perguntas Frequentes
          </h2>
          <div className="space-y-4">
            {[
              {
                question: 'Como funciona o teste grátis de 7 dias?',
                answer: 'Simples! Você se cadastra, escolhe seu plano e usa TODOS os recursos por 7 dias completos sem pagar nada. Se não gostar, cancele antes dos 7 dias e não será cobrado. Se continuar, o plano será ativado automaticamente com desconto especial.'
              },
              {
                question: 'É realmente uma IA ou são pessoas respondendo?',
                answer: '100% Inteligência Artificial avançada, treinada com milhões de conversas bem-sucedidas. Funciona 24/7 instantaneamente, analisando contexto, tom e timing para criar respostas personalizadas em segundos.'
              },
              {
                question: 'Como funciona o processo completo?',
                answer: 'Você tira print da conversa no app de namoro, envia para nosso WhatsApp e em menos de 30 segundos recebe várias sugestões de resposta com explicação detalhada do porquê funcionam.'
              },
              {
                question: 'Funciona para todas as plataformas?',
                answer: 'Sim! Nossa IA analisa conversas de qualquer plataforma: Tinder, Bumble, Happn, WhatsApp, Instagram, Telegram. Se é conversa com interesse romântico, nossa IA te ajuda a conquistar.'
              },
              {
                question: 'Vou parecer falso usando as respostas sugeridas?',
                answer: 'Não! A IA aprende seu estilo natural de conversa e adapta as sugestões para soar autêntico. Você também pode personalizar antes de enviar. É como ter um amigo expert te orientando.'
              },
              {
                question: 'E se não funcionar para mim?',
                answer: 'Durante os 7 dias de teste grátis, você pode cancelar sem pagar nada. Depois disso, temos 97% de satisfação - a maioria renova porque os resultados são reais. Mas você sempre pode cancelar quando quiser.'
              },
              {
                question: 'Quanto tempo para ver os primeiros resultados?',
                answer: 'Na primeira conversa você já nota a diferença! A maioria relata melhora significativa no primeiro dia. Com uma semana de uso, você estará dominando completamente as conversas.'
              },
              {
                question: 'Preciso instalar algum aplicativo?',
                answer: 'Não! Funciona 100% pelo WhatsApp. Você adiciona nosso número, ativa sua conta e já pode começar a enviar prints para receber sugestões inteligentes.'
              },
              {
                question: 'Posso cancelar a qualquer momento?',
                answer: 'Sim! Durante o teste grátis de 7 dias, cancele sem pagar nada. Depois, você pode cancelar a qualquer momento direto pelo WhatsApp, sem burocracia ou taxas de cancelamento.'
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden hover:border-emerald-500/50 transition-all"
              >
                <button
                  className="w-full p-6 text-left font-bold text-lg flex justify-between items-center hover:bg-emerald-500/5 transition-all"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="pr-4">{faq.question}</span>
                  <span className={`text-2xl transition-transform duration-300 flex-shrink-0 ${
                    activeFaq === index ? 'rotate-45' : ''
                  }`}>+</span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${
                  activeFaq === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}>
                  <div className="px-6 text-gray-300 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-emerald-900/30 via-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Pare de Perder Oportunidades<br />
            <span className="text-emerald-400">Comece Seu Teste Grátis Hoje</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
            Junte-se a mais de 3.000 homens que transformaram suas vidas amorosas com nossa IA
          </p>
          <div className="bg-emerald-500/10 border-2 border-emerald-400 rounded-3xl p-6 md:p-8 mb-10 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="animate-pulse text-xl">🎁</span>
              <h3 className="text-xl md:text-2xl font-bold text-emerald-400">BÔNUS EXCLUSIVO NO TESTE GRÁTIS</h3>
              <span className="animate-pulse text-xl">🎁</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
              {[
                '✅ E-book "100 Aberturas Irresistíveis"',
                '✅ Acesso ao Grupo VIP Telegram',
                '✅ Suporte prioritário 24/7',
                '✅ Análises ilimitadas durante o teste'
              ].map((bonus, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-200">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>{bonus}</span>
                </div>
              ))}
            </div>
          </div>
          <a
            href="https://pay.kiwify.com.br/0pegT9S"
            className="inline-flex items-center gap-4 px-12 md:px-16 py-5 md:py-6 bg-gradient-to-r from-emerald-400 to-emerald-500 text-black font-bold text-xl md:text-2xl rounded-full shadow-2xl hover:shadow-emerald-400/25 hover:-translate-y-2 transition-all duration-300 mb-6"
          >
            <span className="animate-pulse">🚀</span>
            COMEÇAR TESTE GRÁTIS AGORA
            <span>→</span>
          </a>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-400 flex-wrap">
            <span className="flex items-center gap-1">
              <span>🎁</span> 7 dias grátis
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <span>🔒</span> Cancele quando quiser
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <span>💬</span> Tudo via WhatsApp
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {[
              { text: 'Termos de Uso', onClick: () => showModal('terms') },
              { text: 'Política de Privacidade', onClick: () => showModal('privacy') },
              { text: 'Suporte', href: 'mailto:suporte@mandaessa.ai' },
              { text: 'Contato', href: 'https://wa.me/558588395773' }
            ].map((link, index) => (
              <a
                key={index}
                href={link.href || '#'}
                onClick={link.onClick ? (e) => { e.preventDefault(); link.onClick(); } : undefined}
                className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
              >
                {link.text}
              </a>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mb-8">
            © 2025 MandaEssa.ai - Todos os direitos reservados
          </p>
          <div className="text-center text-gray-600 text-xs leading-relaxed space-y-4 max-w-4xl mx-auto">
            <p>
              <strong>Aviso Legal:</strong> Os resultados podem variar individualmente. O MandaEssa.ai é uma ferramenta
              de assistência para comunicação que oferece sugestões baseadas em IA para melhorar habilidades de conversação.
              O sucesso depende de diversos fatores incluindo seu perfil, fotos e compatibilidade. Use sempre de forma
              ética e respeitosa.
            </p>
            <p>
              <strong>Teste Grátis:</strong> 7 dias de acesso completo sem custo. Cancele antes do término para não ser cobrado.
              Após o teste, renovação automática conforme plano escolhido. Cancele a qualquer momento.
            </p>
            <p className="text-gray-700">
              Este site não é afiliado ao Facebook, Instagram, WhatsApp ou qualquer plataforma de namoro mencionada.
              Todas as marcas pertencem aos seus respectivos proprietários.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/558588395773?text=Quero%20saber%20mais%20sobre%20o%20teste%20gratis%20do%20MandaEssa.ai"
        className="fixed bottom-6 right-6 bg-gradient-to-r from-green-400 to-green-500 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white text-2xl md:text-3xl shadow-2xl hover:scale-110 transition-all duration-300 z-50 animate-pulse"
      >
        💬
      </a>

      {/* Purchase Notifications */}
      <div className="fixed bottom-6 left-6 z-40 space-y-3 purchase-notification">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`bg-white text-gray-900 p-3 md:p-4 rounded-xl md:rounded-2xl shadow-2xl border-l-4 border-emerald-500 max-w-xs transform transition-all duration-500 ${
              notification.show
                ? 'translate-x-0 opacity-100'
                : '-translate-x-full opacity-0'
            }`}
          >
            <div className="flex items-start gap-2 md:gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xs md:text-sm flex-shrink-0">
                {notification.name.split(' ')[0][0]}{notification.name.split(' ')[1]?.[0]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 md:gap-2 mb-1">
                  <span className="text-green-600 text-xs md:text-sm">●</span>
                  <span className="font-semibold text-xs md:text-sm">{notification.name}</span>
                </div>
                <p className="text-xs text-gray-600 mb-1">
                  {notification.city}
                </p>
                <p className="text-xs font-medium text-emerald-600">
                  Ativou o plano {notification.plan}
                </p>
              </div>
              <div className="text-xs text-gray-400">
                agora
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modals */}
      {modal === 'terms' && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] overflow-y-auto p-4">
          <div className="max-w-4xl mx-auto my-8 bg-gray-900 rounded-3xl border border-gray-700 shadow-2xl">
            <div className="flex justify-between items-center p-6 border-b border-gray-700">
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-400">Termos de Uso</h2>
              <button
                className="text-gray-400 hover:text-white text-3xl"
                onClick={closeModal}
              >
                ×
              </button>
            </div>
            <div className="p-6 text-gray-300 leading-relaxed space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">1. Aceitação dos Termos</h3>
                <p>Ao utilizar o MandaEssa.ai, você concorda com estes Termos de Uso. Se não concordar, não utilize nossos serviços.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">2. Descrição do Serviço</h3>
                <p>O MandaEssa.ai é um serviço de IA que fornece sugestões de conversação para melhorar habilidades de comunicação em contextos românticos.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">3. Teste Grátis</h3>
                <p>Oferecemos 7 dias de teste gratuito com acesso completo. Após o período, cobrança automática conforme plano escolhido. Cancele a qualquer momento.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">4. Uso Apropriado</h3>
                <p>Você concorda em usar o serviço de forma ética e respeitosa. É proibido usar para:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Assédio ou comportamento inadequado</li>
                  <li>Enganar ou manipular outras pessoas</li>
                  <li>Violar leis locais ou direitos de terceiros</li>
                  <li>Compartilhar conteúdo ofensivo ou ilegal</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">5. Privacidade e Dados</h3>
                <p>Respeitamos sua privacidade. Não armazenamos conversas pessoais. Prints enviados são processados e deletados automaticamente.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">6. Limitação de Responsabilidade</h3>
                <p>O MandaEssa.ai não se responsabiliza por resultados específicos ou pelo uso indevido do serviço. O sucesso depende de fatores individuais.</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {modal === 'privacy' && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] overflow-y-auto p-4">
          <div className="max-w-4xl mx-auto my-8 bg-gray-900 rounded-3xl border border-gray-700 shadow-2xl">
            <div className="flex justify-between items-center p-6 border-b border-gray-700">
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-400">Política de Privacidade</h2>
              <button
                className="text-gray-400 hover:text-white text-3xl"
                onClick={closeModal}
              >
                ×
              </button>
            </div>
            <div className="p-6 text-gray-300 leading-relaxed space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">1. Coleta de Dados</h3>
                <p>Coletamos apenas dados necessários para fornecer o serviço, como prints de conversas enviados pelo usuário, que são processados e deletados automaticamente.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">2. Uso dos Dados</h3>
                <p>Os dados são usados exclusivamente para gerar sugestões de respostas e melhorar o serviço. Não compartilhamos seus dados com terceiros.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">3. Segurança</h3>
                <p>Empregamos medidas de segurança robustas para proteger seus dados durante o processamento. Todas as interações são criptografadas.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">4. Seus Direitos</h3>
                <p>Você tem o direito de acessar, corrigir ou solicitar a exclusão de seus dados a qualquer momento.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">5. Contato</h3>
                <p>
                  Para dúvidas sobre privacidade, entre em contato via{' '}
                  <a href="mailto:suporte@mandaessa.ai" className="text-emerald-400 hover:underline">
                    suporte@mandaessa.ai
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpanishMemoryLanding;
