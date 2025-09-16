import React, { useState, useEffect } from 'react';
import '../index.css';

interface PurchaseNotification {
  id: number;
  name: string;
  city: string;
  plan: string;
  show: boolean;
}

const PlantarPainSolution: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [modal, setModal] = useState<string | null>(null);
  const [spots, setSpots] = useState(37);
  const [showOffer, setShowOffer] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState<PurchaseNotification[]>([]);

  const purchaseData = [
    { name: 'Rafael C.', city: 'São Paulo', plan: 'Básico' },
    { name: 'Lucas M.', city: 'Rio de Janeiro', plan: 'Premium' },
    // Add other users' purchase notifications here...
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSpots((prev) => (prev > 15 ? prev - 1 : prev));
    }, 10000);
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
    if (!document.querySelector('[src*="68c9c1e44a41dc9133548d30"]')) {
      const script = document.createElement('script');
      script.src =
        'https://scripts.converteai.net/bddd3820-6eca-4c7d-898b-ece1995d6f03/players/68c9c1e44a41dc9133548d30/v4/player.js';
      script.async = true;
      document.head.appendChild(script);
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
      <title>Pise Bem | Solução Natural para Fascite Plantar</title>
      <meta name="description" content="Solução natural e eficaz para a fascite plantar. Sem medicamentos e com resultados comprovados!" />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=1234567890&ev=PageView&noscript=1"
        />
      </noscript>

      {/* Background Animation */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black z-[-1]">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_30%_40%,rgba(0,255,136,0.08)_0%,transparent_60%),radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.06)_0%,transparent_60%)] animate-pulse" />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-12 md:py-20 pt-16 md:pt-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full font-semibold text-black mb-6 md:mb-8 text-sm md:text-base shadow-lg">
            <span className="animate-bounce">🔥</span>
            SOLUÇÃO SEM MEDICAMENTOS
          </div>
          <h1 className="text-[clamp(28px,6vw,64px)] font-black leading-tight mb-5 bg-gradient-to-r from-white to-[#00FF88] bg-clip-text text-transparent overflow-visible whitespace-normal">
            Livre de Dor no Calcanhar em 7 Dias!
          </h1>
          <p className="text-[clamp(16px,2.5vw,20px)] text-[#B0B0B0] mb-10 max-w-[600px] mx-auto">
            Diga adeus à fascite plantar com um tratamento natural, sem analgésicos, e resultados visíveis em apenas 7 dias.
          </p>
          <div className="mb-8 md:mb-12 flex justify-center">
            <div className="w-full max-w-md md:max-w-lg lg:max-w-xl bg-gray-800 rounded-2xl p-2 shadow-2xl">
              <vturb-smartplayer
                id="vid-68c9c1e44a41dc9133548d30"
                style={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '400px' }}
              ></vturb-smartplayer>
              <script type="text/javascript">
                {`var s=document.createElement("script"); s.src="https://scripts.converteai.net/bddd3820-6eca-4c7d-898b-ece1995d6f03/players/68c9c1e44a41dc9133548d30/v4/player.js", s.async=!0,document.head.appendChild(s);`}
              </script>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12 max-w-2xl mx-auto">
            {[
              { number: '94%', label: 'Taxa de Alívio da Dor' },
              { number: '5.2x', label: 'Redução Rápida de Inchaço' },
              { number: '3.124', label: 'Usuários Satisfeitos' }
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
              <span>✅</span> 7 dias de garantia
              <span>•</span>
              <span>✅</span> Acesso imediato
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              <span className="text-green-400">Simples e Rápido</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              O tratamento que você precisa, em apenas 7 dias. Sem medicamentos!
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: '📱',
                title: '1. Compre Agora',
                desc: 'Adquira seu plano e comece o tratamento',
                color: 'from-blue-400 to-blue-500'
              },
              {
                icon: '📋',
                title: '2. Siga o Plano',
                desc: 'Receba 10 exercícios eficazes e fáceis de seguir',
                color: 'from-purple-400 to-purple-500'
              },
              {
                icon: '⚡',
                title: '3. Alívio Rápido',
                desc: 'Veja a redução da dor já no 3º dia de uso',
                color: 'from-yellow-400 to-orange-400'
              },
              {
                icon: '🦶',
                title: '4. Caminhe Sem Dor',
                desc: 'Experimente um alívio duradouro e eficaz',
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
              Zero Complicação!
            </div>
            <p className="text-gray-300 mb-6 md:mb-8 text-lg">
              Comece agora e conquiste uma vida sem dores. É fácil e rápido!
            </p>
            <a
              href="#pricing"
              className="inline-flex items-center gap-3 px-8 md:px-12 py-4 bg-gradient-to-r from-green-400 to-green-500 text-black font-bold text-lg rounded-full shadow-2xl hover:-translate-y-1 transition-all"
            >
              <span>🚀</span>
              COMEÇAR AGORA
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-gray-900/50 to-black" id="pricing">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-12 md:mb-16">
            Escolha Seu Plano
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {[
              {
                name: 'Plano Único',
                price: 'R$ 9,90',
                period: '/Vitalício',
                features: [
                  'Acesso aos 10 exercícios',
                  'Plano de 7 dias',
                  'Solução natural para fascite plantar',
                  'Sem necessidade de medicamentos'
                ],
                link: 'https://pay.cakto.com.br/jvpeebs',
                button: 'COMPRE AGORA',
                popular: true
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
                  <p className="text-sm text-emerald-400 font-semibold">Garantia de 7 dias</p>
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
                  Cancele a qualquer momento durante a garantia
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {[
              { text: 'Termos de Uso', onClick: () => showModal('terms') },
              { text: 'Política de Privacidade', onClick: () => showModal('privacy') }
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
            © 2025 Pise Bem - Todos os direitos reservados
          </p>
        </div>
      </footer>

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
            <div className="p-6 text
            <div className="p-6 text-gray-300 leading-relaxed space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">1. Aceitação dos Termos</h3>
                <p>Ao utilizar o Pise Bem, você concorda com estes Termos de Uso. Se não concordar, não utilize nossos serviços.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">2. Descrição do Serviço</h3>
                <p>O Pise Bem oferece um programa de exercícios naturais para aliviar a fascite plantar de maneira eficaz e sem medicamentos.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">3. Garantia de 7 Dias</h3>
                <p>Oferecemos 7 dias de garantia de satisfação. Caso não esteja satisfeito, basta cancelar e solicitar o reembolso total.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">4. Uso Apropriado</h3>
                <p>Você concorda em usar o serviço de forma ética. É proibido usar para práticas ilegais ou prejudiciais.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">5. Privacidade e Dados</h3>
                <p>Respeitamos sua privacidade. Não armazenamos informações pessoais sem o seu consentimento. Seus dados são protegidos por criptografia.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">6. Limitação de Responsabilidade</h3>
                <p>O Pise Bem não se responsabiliza por resultados individuais. O sucesso depende do uso consistente do programa e da adesão aos exercícios.</p>
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
                <p>Coletamos dados essenciais para fornecer nossos serviços, como prints de conversas, que são processados e excluídos automaticamente após o uso.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">2. Uso dos Dados</h3>
                <p>Utilizamos os dados para personalizar e melhorar as sugestões de respostas, sem compartilhá-los com terceiros sem sua permissão.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">3. Segurança</h3>
                <p>Implementamos medidas de segurança rigorosas para proteger seus dados enquanto estão em processo de análise e durante a utilização do serviço.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">4. Seus Direitos</h3>
                <p>Você tem o direito de acessar, corrigir ou excluir seus dados pessoais a qualquer momento, conforme estipulado pela lei de proteção de dados.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">5. Contato</h3>
                <p>
                  Para dúvidas sobre nossa política de privacidade, entre em contato conosco pelo e-mail{' '}
                  <a href="mailto:suporte@pisebem.com" className="text-emerald-400 hover:underline">
                    suporte@pisebem.com
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlantarPainSolution;
