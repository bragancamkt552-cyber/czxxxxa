import React, { useState, useEffect } from 'react';
import '../index.css';

interface PurchaseNotification {
  id: number;
  name: string;
  city: string;
  plan: string;
  show: boolean;
}

interface Testimonial {
  text: string;
  author: string;
  location: string;
  initials: string;
  rating: number;
  image: string;
}

const PiseBemLanding: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [modal, setModal] = useState<string | null>(null);
  const [spots, setSpots] = useState(37);
  const [showOffer, setShowOffer] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState<PurchaseNotification[]>([]);

  const purchaseData = [
    { name: 'Maria S.', city: 'São Paulo', plan: 'Vitalício' },
    { name: 'Ana P.', city: 'Rio de Janeiro', plan: 'Vitalício' },
    { name: 'João R.', city: 'Curitiba', plan: 'Vitalício' },
    { name: 'Carlos F.', city: 'Porto Alegre', plan: 'Vitalício' },
    { name: 'Paula B.', city: 'Brasília', plan: 'Vitalício' },
    { name: 'Roberto H.', city: 'Belo Horizonte', plan: 'Vitalício' },
    { name: 'Fernanda L.', city: 'Salvador', plan: 'Vitalício' },
    { name: 'Miguel C.', city: 'Fortaleza', plan: 'Vitalício' },
    { name: 'Sofia M.', city: 'Recife', plan: 'Vitalício' },
    { name: 'Lucas D.', city: 'Florianópolis', plan: 'Vitalício' },
  ];

  const testimonials: Testimonial[] = [
    {
      text: 'Depois de meses sofrendo com fascite, o Pise Bem me salvou! Em 5 dias a dor diminuiu muito.',
      author: 'Ana C.',
      location: 'São Paulo • 35 anos',
      initials: 'AC',
      rating: 5,
      image: "data:image/svg+xml,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='40' cy='40' r='35' fill='%2310B981'/%3E%3Ctext x='50%25' y='55%25' font-family='Arial' font-size='24' fill='white' text-anchor='middle'%3EAC%3C/text%3E%3C/svg%3E"
    },
    {
      text: 'Eu achava que precisaria de cirurgia, mas esses exercícios mudaram tudo. Caminho sem dor agora!',
      author: 'Roberto M.',
      location: 'Rio de Janeiro • 42 anos',
      initials: 'RM',
      rating: 5,
      image: "data:image/svg+xml,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='40' cy='40' r='35' fill='%2306B6D4'/%3E%3Ctext x='50%25' y='55%25' font-family='Arial' font-size='24' fill='white' text-anchor='middle'%3ERM%3C/text%3E%3C/svg%3E"
    },
    {
      text: 'Fácil de seguir e realmente funciona. Não preciso mais de analgésicos!',
      author: 'Fernanda S.',
      location: 'Belo Horizonte • 29 anos',
      initials: 'FS',
      rating: 5,
      image: "data:image/svg+xml,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='40' cy='40' r='35' fill='%23EC4899'/%3E%3Ctext x='50%25' y='55%25' font-family='Arial' font-size='24' fill='white' text-anchor='middle'%3EFS%3C/text%3E%3C/svg%3E"
    },
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
      script.src = 'https://scripts.converteai.net/bddd3820-6eca-4c7d-898b-ece1995d6f03/players/68c9c1e44a41dc9133548d30/v4/player.js';
      script.async = true;
      document.head.appendChild(script);

      const pixelScript1 = document.createElement('script');
      pixelScript1.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1351918292572124');
        fbq('track', 'PageView');
      `;
      document.head.appendChild(pixelScript1);

      const pixelScript2 = document.createElement('script');
      pixelScript2.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1093258939518583');
        fbq('track', 'PageView');
      `;
      document.head.appendChild(pixelScript2);

      const gtagScript = document.createElement('script');
      gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=AW-11028750083';
      gtagScript.async = true;
      document.head.appendChild(gtagScript);

      const gtagConfig = document.createElement('script');
      gtagConfig.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-11028750083');
      `;
      document.head.appendChild(gtagConfig);

      const tiktokScript = document.createElement('script');
      tiktokScript.innerHTML = `
        !function (w, d, t) {
          w.TiktokAnalyticsObject=t;
          var ttq=w[t]=w[t]||[];
          ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"];
          ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};
          for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);
          ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e};
          ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
          ttq.load('D31H6Q3C77UD68QFDC00');
          ttq.page();
        }(window, document, 'ttq');
      `;
      document.head.appendChild(tiktokScript);

      return () => {
        document.head.removeChild(script);
        document.head.removeChild(pixelScript1);
        document.head.removeChild(pixelScript2);
        document.head.removeChild(gtagScript);
        document.head.removeChild(gtagConfig);
        document.head.removeChild(tiktokScript);
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
      <title>Pise Bem</title>
      <meta
        name="description"
        content="Pise Bem: Alivie a fascite plantar em 7 dias com 10 exercícios naturais. Sem medicamentos, com garantia de 7 dias. Apenas R$9,90 vitalício."
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=1351918292572124&ev=PageView&noscript=1"
        />
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=1093258939518583&ev=PageView&noscript=1"
        />
      </noscript>
      {/* Background Animation */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black z-[-1]">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_30%_40%,rgba(0,255,136,0.08)_0%,transparent_60%),radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.06)_0%,transparent_60%)] animate-pulse" />
      </div>
      {/* Urgency Bar */}
      {showOffer && (
        <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-red-600 to-red-500 text-white text-center font-bold py-3 px-4 z-50 shadow-lg animate-[slideDown_0.5s_ease-out]">
          <div className="flex items-center justify-center gap-2 text-sm md:text-base">
            <span className="animate-pulse">⚡</span>
            <span>OFERTA LIMITADA: R$9,90 VITALÍCIO • Restam apenas <span className="bg-white text-red-600 px-2 py-1 rounded-full font-black">{spots}</span> vagas</span>
            <span className="animate-pulse">⚡</span>
          </div>
        </div>
      )}
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-12 md:py-20 pt-16 md:pt-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full font-semibold text-black mb-6 md:mb-8 text-sm md:text-base shadow-lg">
            <span className="animate-bounce">🔥</span>
            SOLUÇÃO NATURAL 2025
          </div>
          <h1 className="text-[clamp(28px,6vw,64px)] font-black leading-tight mb-5 bg-gradient-to-r from-white to-[#00FF88] bg-clip-text text-transparent overflow-visible whitespace-normal">
            Alivie a Dor da Fascite Plantar em Apenas 7 Dias
          </h1>
          <p className="text-[clamp(16px,2.5vw,20px)] text-[#B0B0B0] mb-10 max-w-[600px] mx-auto">
            Diga adeus aos analgésicos! Trate sua fascite plantar de forma <span className="text-[#00FF88] font-bold">natural</span> com nosso plano de 10 exercícios comprovados, sem efeitos colaterais.
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
              { number: '95%', label: 'Taxa de Sucesso' },
              { number: '7 Dias', label: 'Alívio Rápido' },
              { number: '4.8⭐', label: 'Avaliação Média' }
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
              <span>QUERO ALÍVIO AGORA</span>
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
              <span className="text-green-400">Simples e Eficaz</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Alivie a dor da fascite plantar com nosso plano de 10 exercícios em apenas 7 dias
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: '📋',
                title: '1. Adquira o Plano',
                desc: 'Compre o Pise Bem e receba acesso imediato',
                color: 'from-blue-400 to-blue-500'
              },
              {
                icon: '🏋️',
                title: '2. Siga os Exercícios',
                desc: 'Realize os 10 exercícios diários em casa',
                color: 'from-purple-400 to-purple-500'
              },
              {
                icon: '⏱️',
                title: '3. 7 Dias de Ação',
                desc: 'Siga o plano por 7 dias para alívio rápido',
                color: 'from-yellow-400 to-orange-400'
              },
              {
                icon: '🚶',
                title: '4. Caminhe Sem Dor',
                desc: 'Volte a caminhar com conforto e liberdade',
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
              <span className="animate-bounce">💪</span>
              Zero Complicação!
            </div>
            <p className="text-gray-300 mb-6 md:mb-8 text-lg">
              Sem equipamentos caros ou consultas. Comece hoje mesmo!
            </p>
            <a
              href="#pricing"
              className="inline-flex items-center gap-3 px-8 md:px-12 py-4 bg-gradient-to-r from-green-400 to-green-500 text-black font-bold text-lg rounded-full shadow-2xl hover:-translate-y-1 transition-all"
            >
              <span>🚀</span>
              COMPRE AGORA
            </a>
          </div>
        </div>
      </section>
      {/* Problem and Solution */}
      <section className="py-16 md:py-24 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-12 md:mb-16">
            Acabe com a Dor da Fascite Plantar
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-gradient-to-b from-red-900/20 to-red-800/20 p-6 md:p-8 rounded-3xl border-2 border-red-500/30 backdrop-blur-sm">
              <h3 className="text-xl md:text-2xl font-bold text-red-400 mb-6">O Problema</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">Você já perdeu momentos importantes por causa da dor no calcanhar? A fascite plantar pode transformar cada passo em um sofrimento, limitando sua liberdade e qualidade de vida. Você sente:</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3"><span className="text-red-400 font-bold">•</span> Dor lancinante ao acordar ou após longos períodos sentado</li>
                <li className="flex items-start gap-3"><span className="text-red-400 font-bold">•</span> Dificuldade para caminhar, correr ou até mesmo ficar em pé</li>
                <li className="flex items-start gap-3"><span className="text-red-400 font-bold">•</span> Frustração com analgésicos que causam efeitos colaterais</li>
                <li className="flex items-start gap-3"><span className="text-red-400 font-bold">•</span> Medo de tratamentos caros ou invasivos que não funcionam</li>
              </ul>
            </div>
            <div className="bg-gradient-to-b from-emerald-900/20 to-green-800/20 p-6 md:p-8 rounded-3xl border-2 border-emerald-500/50 backdrop-blur-sm">
              <h3 className="text-xl md:text-2xl font-bold text-emerald-400 mb-6">A Solução</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">Com o Pise Bem, você pode voltar a viver sem limitações! Nosso programa de 10 exercícios naturais, desenvolvido por especialistas, alivia a dor da fascite plantar sem medicamentos. Você terá:</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3"><span className="text-emerald-400 font-bold">✓</span> Alívio natural em apenas 7 dias</li>
                <li className="flex items-start gap-3"><span className="text-emerald-400 font-bold">✓</span> Exercícios simples para fazer em casa</li>
                <li className="flex items-start gap-3"><span className="text-emerald-400 font-bold">✓</span> Sem efeitos colaterais ou medicamentos</li>
                <li className="flex items-start gap-3"><span className="text-emerald-400 font-bold">✓</span> Liberdade para caminhar e viver sem dor</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Visual Proof Section */}
      <section className="py-16 md:py-24 px-4 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-12 md:mb-16">
            Veja os Resultados na Prática
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-gradient-to-b from-gray-800/40 to-gray-900/40 p-6 md:p-8 rounded-3xl border-2 border-emerald-500/50 backdrop-blur-sm">
              <h3 className="text-xl md:text-2xl font-bold text-emerald-400 mb-4">Como Funcionam os Exercícios</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">Os 10 exercícios do Pise Bem foram cuidadosamente desenvolvidos por profissionais para aliviar a dor e fortalecer seus pés. Veja como é simples:</p>
              <img
                src="/images/exercise-demo.jpg"
                alt="Ilustração de uma pessoa realizando exercícios simples para fascite plantar, como alongamento do arco do pé, em um ambiente doméstico"
                className="w-full h-auto rounded-2xl shadow-lg mb-6"
              />
              <p className="text-gray-300 text-sm italic">*Imagem ilustrativa: exercícios simples para alívio da fascite plantar.</p>
            </div>
            <div className="bg-gradient-to-b from-gray-800/40 to-gray-900/40 p-6 md:p-8 rounded-3xl border-2 border-emerald-500/50 backdrop-blur-sm">
              <h3 className="text-xl md:text-2xl font-bold text-emerald-400 mb-4">Redução da Dor: Antes e Depois</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">Nossos usuários relatam uma redução significativa da dor em apenas 7 dias. Veja o progresso que você pode esperar:</p>
              <div className="bg-gray-700 p-6 rounded-xl mb-4">
                <div className="flex justify-between items-end h-32">
                  <div className="flex flex-col items-center">
                    <div className="bg-red-500 w-12 h-24 rounded-t flex items-end justify-center text-white font-bold pb-2">8</div>
                    <p className="text-sm mt-2 text-center">Antes</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-emerald-500 w-12 h-6 rounded-t flex items-end justify-center text-white font-bold pb-1">2</div>
                    <p className="text-sm mt-2 text-center">Depois</p>
                  </div>
                </div>
                <p className="text-center text-sm text-gray-400 mt-4">Nível de Dor (0-10)</p>
              </div>
              <p className="text-gray-300 text-sm italic mt-4">*Gráfico ilustrativo: redução média da dor relatada por usuários.</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <img
              src="/images/specialist.jpg"
              alt="Profissional em jaleco branco em um ambiente profissional, demonstrando confiança e expertise em saúde podal"
              className="w-32 h-32 md:w-48 md:h-48 mx-auto rounded-full shadow-lg mb-4"
            />
            <p className="text-gray-300 text-sm italic">Desenvolvido por especialistas em saúde podal para resultados reais.</p>
          </div>
          {/* Before/After Images */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-emerald-400 mb-8">Resultados Visuais</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-800/40 p-6 rounded-3xl border border-gray-700">
                <h4 className="text-lg font-bold text-red-400 mb-4">Antes do Pise Bem</h4>
                <img
                  src="data:image/svg+xml,%3Csvg width='300' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23991B1B'/%3E%3Ctext x='50%25' y='30%25' font-family='Arial' font-size='14' fill='%23FCA5A5' text-anchor='middle'%3EDor intensa%3C/text%3E%3Ctext x='50%25' y='45%25' font-family='Arial' font-size='14' fill='%23FCA5A5' text-anchor='middle'%3Eno calcanhar%3C/text%3E%3Ctext x='50%25' y='60%25' font-family='Arial' font-size='12' fill='%23FCA5A5' text-anchor='middle'%3EDificuldade para%3C/text%3E%3Ctext x='50%25' y='75%25' font-family='Arial' font-size='12' fill='%23FCA5A5' text-anchor='middle'%3Ecaminhar%3C/text%3E%3C/svg%3E"
                  alt="Ilustração mostrando dor intensa no calcanhar antes do tratamento"
                  className="w-full h-auto rounded-xl mb-4"
                />
                <p className="text-gray-400 text-sm">Dor limitante no dia a dia</p>
              </div>
              <div className="bg-gray-800/40 p-6 rounded-3xl border border-gray-700">
                <h4 className="text-lg font-bold text-emerald-400 mb-4">Depois do Pise Bem</h4>
                <img
                  src="data:image/svg+xml,%3Csvg width='300' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23065F46'/%3E%3Ctext x='50%25' y='30%25' font-family='Arial' font-size='14' fill='%2334D399' text-anchor='middle'%3EAlívio da dor%3C/text%3E%3Ctext x='50%25' y='45%25' font-family='Arial' font-size='14' fill='%2334D399' text-anchor='middle'%3Eem 7 dias%3C/text%3E%3Ctext x='50%25' y='60%25' font-family='Arial' font-size='12' fill='%2334D399' text-anchor='middle'%3ELiberdade para%3C/text%3E%3Ctext x='50%25' y='75%25' font-family='Arial' font-size='12' fill='%2334D399' text-anchor='middle'%3Ecaminhar%3C/text%3E%3C/svg%3E"
                  alt="Ilustração mostrando alívio da dor e liberdade para caminhar após o tratamento"
                  className="w-full h-auto rounded-xl mb-4"
                />
                <p className="text-gray-400 text-sm">Volta à vida ativa e sem dor</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-16 md:py-24 px-4 bg-black/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-12 md:mb-16">
            Por Que Escolher o Pise Bem?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: '🌿',
                title: 'Solução 100% Natural',
                desc: 'Trate sua fascite plantar sem analgésicos ou procedimentos invasivos',
                gradient: 'from-green-500 to-emerald-500'
              },
              {
                icon: '⏱️',
                title: 'Resultados em 7 Dias',
                desc: 'Sinta alívio rápido com nosso plano de exercícios comprovado',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                icon: '🏠',
                title: 'Fácil de Fazer em Casa',
                desc: 'Exercícios simples que não requerem equipamentos caros',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                icon: '💪',
                title: 'Fortalecimento Duradouro',
                desc: 'Previna a dor futura com fortalecimento do pé e tornozelo',
                gradient: 'from-orange-500 to-red-500'
              },
              {
                icon: '🔒',
                title: 'Seguro e Comprovado',
                desc: 'Método desenvolvido por especialistas em saúde podal',
                gradient: 'from-yellow-500 to-orange-500'
              },
              {
                icon: '💸',
                title: 'Acessível e Vitalício',
                desc: 'Apenas R$9,90 para acesso ilimitado ao programa',
                gradient: 'from-indigo-500 to-purple-500'
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-800/40 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-gray-700 hover:border-emerald-500/50 hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${benefit.gradient} rounded-2xl text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-emerald-400 mb-3">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-gray-900/50 to-black/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-12 md:mb-16">
            Depoimentos Reais
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
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
                  <img
                    src={testimonial.image}
                    alt={`Foto de perfil de ${testimonial.author}`}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="font-bold text-emerald-400">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Before/After Images */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-emerald-400 mb-8">Resultados Visuais</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-800/40 p-6 rounded-3xl border border-gray-700">
                <h4 className="text-lg font-bold text-red-400 mb-4">Antes do Pise Bem</h4>
                <img
                  src="data:image/svg+xml,%3Csvg width='300' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23991B1B'/%3E%3Ctext x='50%25' y='30%25' font-family='Arial' font-size='14' fill='%23FCA5A5' text-anchor='middle'%3EDor intensa%3C/text%3E%3Ctext x='50%25' y='45%25' font-family='Arial' font-size='14' fill='%23FCA5A5' text-anchor='middle'%3Eno calcanhar%3C/text%3E%3Ctext x='50%25' y='60%25' font-family='Arial' font-size='12' fill='%23FCA5A5' text-anchor='middle'%3EDificuldade para%3C/text%3E%3Ctext x='50%25' y='75%25' font-family='Arial' font-size='12' fill='%23FCA5A5' text-anchor='middle'%3Ecaminhar%3C/text%3E%3C/svg%3E"
                  alt="Ilustração mostrando dor intensa no calcanhar antes do tratamento"
                  className="w-full h-auto rounded-xl mb-4"
                />
                <p className="text-gray-400 text-sm">Dor limitante no dia a dia</p>
              </div>
              <div className="bg-gray-800/40 p-6 rounded-3xl border border-gray-700">
                <h4 className="text-lg font-bold text-emerald-400 mb-4">Depois do Pise Bem</h4>
                <img
                  src="data:image/svg+xml,%3Csvg width='300' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23065F46'/%3E%3Ctext x='50%25' y='30%25' font-family='Arial' font-size='14' fill='%2334D399' text-anchor='middle'%3EAlívio da dor%3C/text%3E%3Ctext x='50%25' y='45%25' font-family='Arial' font-size='14' fill='%2334D399' text-anchor='middle'%3Eem 7 dias%3C/text%3E%3Ctext x='50%25' y='60%25' font-family='Arial' font-size='12' fill='%2334D399' text-anchor='middle'%3ELiberdade para%3C/text%3E%3Ctext x='50%25' y='75%25' font-family='Arial' font-size='12' fill='%2334D399' text-anchor='middle'%3Ecaminhar%3C/text%3E%3C/svg%3E"
                  alt="Ilustração mostrando alívio da dor e liberdade para caminhar após o tratamento"
                  className="w-full h-auto rounded-xl mb-4"
                />
                <p className="text-gray-400 text-sm">Volta à vida ativa e sem dor</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Guarantee Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-emerald-900/30 via-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-800/60 backdrop-blur-sm p-8 md:p-12 rounded-3xl border-2 border-emerald-500 shadow-2xl shadow-emerald-500/20">
            <div className="text-5xl md:text-6xl mb-6 animate-bounce">🎁</div>
            <h2 className="text-3xl md:text-5xl font-black text-emerald-400 mb-6">
              7 Dias de Garantia
            </h2>
            <p className="text-xl md:text-2xl font-bold mb-4">
              Experimente o Pise Bem sem risco
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Use nosso programa por 7 dias completos. Se não sentir alívio, receba 100% do seu dinheiro de volta.
            </p>
            <div className="mb-8">
              <img
                src="data:image/svg+xml,%3Csvg width='400' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23374151'/%3E%3Ctext x='50%25' y='30%25' font-family='Arial' font-size='16' fill='%2310B981' text-anchor='middle'%3E7 DIAS DE%3C/text%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='20' fill='%2310B981' text-anchor='middle'%3EGARANTIA%3C/text%3E%3Ctext x='50%25' y='70%25' font-family='Arial' font-size='14' fill='%236B7280' text-anchor='middle'%3E100%25 Reembolso%3C/text%3E%3C/svg%3E"
                alt="Selo de garantia de 7 dias com 100% de reembolso"
                className="w-full max-w-md h-auto mx-auto rounded-2xl mb-6"
              />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8 mb-8">
              {[
                { text: '7 DIAS', subtitle: 'Garantia' },
                { text: '100%', subtitle: 'Reembolso' },
                { text: '0', subtitle: 'Risco' },
                { text: '24/7', subtitle: 'Suporte' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-4xl font-black text-emerald-400 mb-1">{item.text}</div>
                  <div className="text-gray-400 text-sm">{item.subtitle}</div>
                </div>
              ))}
            </div>
            <a
              href="https://pay.cakto.com.br/pisebem"
              className="inline-flex items-center gap-3 px-10 md:px-14 py-5 md:py-6 bg-gradient-to-r from-emerald-400 to-emerald-500 text-black font-bold text-xl rounded-full shadow-2xl hover:shadow-emerald-400/25 hover:-translate-y-1 transition-all duration-300"
            >
              <span>🚀</span>
              COMPRE AGORA COM GARANTIA
            </a>
          </div>
        </div>
      </section>
      {/* Pricing */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-gray-900/50 to-black" id="pricing">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-12 md:mb-16">
            Adquira o Pise Bem Hoje
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 md:gap-8 mb-12">
            <div className="relative bg-gray-800/40 backdrop-blur-sm p-6 md:p-8 rounded-3xl border-2 border-emerald-500 scale-105 shadow-2xl shadow-emerald-500/20">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-emerald-400 to-emerald-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                  OFERTA EXCLUSIVA
                </span>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-emerald-400 mb-2">Pise Bem Vitalício</h3>
                <div className="text-4xl md:text-5xl font-black mb-1">
                  <span className="line-through text-gray-500 text-2xl mr-2">R$97,00</span>
                  R$9,90
                  <span className="text-base text-gray-400 font-normal">/vitalício</span>
                </div>
                <p className="text-sm text-emerald-400 font-semibold">7 dias de garantia, pagamento único</p>
              </div>
              <div className="mb-6">
                <img
                  src="data:image/svg+xml,%3Csvg width='400' height='250' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23065F46'/%3E%3Ctext x='50%25' y='25%25' font-family='Arial' font-size='16' fill='%2334D399' text-anchor='middle'%3EPISE BEM%3C/text%3E%3Ctext x='50%25' y='40%25' font-family='Arial' font-size='12' fill='%2334D399' text-anchor='middle'%3E10 Exercícios%3C/text%3E%3Ctext x='50%25' y='52%25' font-family='Arial' font-size='12' fill='%2334D399' text-anchor='middle'%3EPara Fascite Plantar%3C/text%3E%3Ctext x='50%25' y='68%25' font-family='Arial' font-size='10' fill='%236B7280' text-anchor='middle'%3EGuia Completo%3C/text%3E%3Ctext x='50%25' y='80%25' font-family='Arial' font-size='10' fill='%236B7280' text-anchor='middle'%3EAlívio em 7 Dias%3C/text%3E%3C/svg%3E"
                  alt="Visualização do produto Pise Bem - Guia completo com 10 exercícios para fascite plantar"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  '10 exercícios comprovados para fascite plantar',
                  'Plano de 7 dias para alívio rápido da dor',
                  'Acesso vitalício ao programa completo',
                  'Instruções detalhadas passo a passo',
                  'Suporte prioritário via WhatsApp 24/7',
                  'Garantia incondicional de 7 dias',
                  'Sem mensalidades ou taxas extras'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-emerald-400 font-bold mt-1">✓</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://pay.cakto.com.br/pisebem"
                className="block w-full text-center px-6 py-4 font-bold text-lg rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 text-black hover:shadow-2xl hover:shadow-emerald-400/25 hover:-translate-y-1 transition-all duration-300"
              >
                COMPRE COM GARANTIA DE 7 DIAS
              </a>
              <p className="text-center text-xs text-gray-500 mt-3">
                Pagamento único de R$9,90 • Sem taxas adicionais • Acesso imediato
              </p>
            </div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-gray-800/40 rounded-2xl border border-gray-700">
              <span className="text-green-400">🔒</span>
              <span className="text-sm text-gray-300">Pagamento 100% seguro</span>
              <span className="text-green-400">💳</span>
              <span className="text-sm text-gray-300">PIX • Cartão • Boleto</span>
            </div>
          </div>
        </div>
      </section>
      {/* Social Proof Stats */}
      <section className="py-16 px-4 bg-emerald-500/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 text-center">
            {[
              { number: '5.247', label: 'Usuários Satisfeitos' },
              { number: '95%', label: 'Taxa de Sucesso' },
              { number: '4.8⭐', label: 'Avaliação Média' },
              { number: '7 Dias', label: 'Alívio Rápido' },
              { number: '24/7', label: 'Suporte' },
              { number: '100%', label: 'Garantia' }
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
                question: 'Como funciona a garantia de 7 dias?',
                answer: 'Você adquire o Pise Bem e tem 7 dias completos para testar o programa. Se não sentir alívio significativo da dor, pode solicitar reembolso total de 100% do valor pago, sem burocracia.'
              },
              {
                question: 'Preciso de equipamentos especiais para os exercícios?',
                answer: 'Não! Os 10 exercícios do Pise Bem são simples e podem ser feitos em casa, sem necessidade de equipamentos especiais ou academia. Você precisa apenas de alguns minutos por dia.'
              },
              {
                question: 'O programa é seguro para todas as idades?',
                answer: 'Sim, o Pise Bem foi desenvolvido por especialistas em saúde podal e é seguro para a maioria das pessoas. Os exercícios são de baixo impacto. Sempre recomendamos consultar um médico se você tiver condições de saúde específicas.'
              },
              {
                question: 'Quanto tempo leva para sentir os resultados?',
                answer: 'A maioria dos nossos usuários relata alívio significativo da dor em apenas 7 dias seguindo o plano de exercícios. Alguns sentem melhora já nos primeiros dias de prática.'
              },
              {
                question: 'O acesso é realmente vitalício por R$9,90?',
                answer: 'Sim! Por apenas R$9,90, você tem acesso ilimitado e vitalício ao programa completo. Não há mensalidades, taxas extras ou custos ocultos. É um pagamento único.'
              },
              {
                question: 'Como recebo o material após a compra?',
                answer: 'Após a confirmação do pagamento, você recebe acesso imediato ao programa completo via e-mail. Todo o material fica disponível em uma área exclusiva online.'
              },
              {
                question: 'Funciona para casos severos de fascite plantar?',
                answer: 'O Pise Bem foi desenvolvido para ajudar pessoas com diferentes níveis de fascite plantar. Muitos usuários com casos mais severos relataram melhora significativa. Para casos muito graves, recomendamos acompanhamento médico paralelo.'
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
                  <span className={`text-2xl transition-transform duration-300 flex-shrink-0 ${activeFaq === index ? 'rotate-45' : ''}`}>+</span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${activeFaq === index ? 'max-h-96 pb-6' : 'max-h-0'}`}>
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
            Caminhe Sem Dor Hoje Mesmo<br />
            <span className="text-emerald-400">Comece Agora com Garantia</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
            Junte-se a milhares de pessoas que recuperaram a liberdade de movimento com o Pise Bem
          </p>
          <div className="mb-8">
            <img
              src="data:image/svg+xml,%3Csvg width='500' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23065F46'/%3E%3Ctext x='50%25' y='25%25' font-family='Arial' font-size='20' fill='%2334D399' text-anchor='middle'%3EVOLTA À VIDA ATIVA%3C/text%3E%3Ctext x='50%25' y='45%25' font-family='Arial' font-size='16' fill='%2334D399' text-anchor='middle'%3ESem dor, sem limitações%3C/text%3E%3Ctext x='50%25' y='65%25' font-family='Arial' font-size='14' fill='%236B7280' text-anchor='middle'%3EApenas R$9,90%3C/text%3E%3Ctext x='50%25' y='80%25' font-family='Arial' font-size='14' fill='%236B7280' text-anchor='middle'%3EGarantia de 7 dias%3C/text%3E%3C/svg%3E"
              alt="Ilustração de pessoa caminhando livremente sem dor após usar o Pise Bem"
              className="w-full max-w-lg h-auto mx-auto rounded-2xl mb-8"
            />
          </div>
          <a
            href="https://pay.cakto.com.br/pisebem"
            className="inline-flex items-center gap-4 px-12 md:px-16 py-5 md:py-6 bg-gradient-to-r from-emerald-400 to-emerald-500 text-black font-bold text-xl md:text-2xl rounded-full shadow-2xl hover:shadow-emerald-400/25 hover:-translate-y-2 transition-all duration-300 mb-6"
          >
            <span className="animate-pulse">🚀</span>
            COMPRAR PISE BEM AGORA
            <span>→</span>
          </a>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-400 flex-wrap">
            <span className="flex items-center gap-1">
              <span>🎁</span> 7 dias de garantia total
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <span>🔒</span> Pagamento único R$9,90
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <span>⚡</span> Acesso imediato
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
              { text: 'Suporte', href: 'mailto:suporte@pisebem.com' },
              { text: 'Contato', href: 'https://wa.me/5511999999999' }
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
          <div className="text-center text-gray-600 text-xs leading-relaxed space-y-4 max-w-4xl mx-auto">
            <p>
              <strong>Aviso Legal:</strong> Os resultados podem variar individualmente. O Pise Bem é um programa de exercícios para alívio da fascite plantar, desenvolvido com base em conhecimento especializado. Este produto não substitui acompanhamento médico. Consulte um profissional de saúde antes de iniciar qualquer programa de exercícios. O sucesso do programa depende da dedicação individual e fatores específicos de cada caso.
            </p>
            <p>
              <strong>Garantia:</strong> Oferecemos 7 dias de acesso completo com garantia incondicional de reembolso. Se não ficar satisfeito, solicite reembolso total dentro do prazo. Pagamento único de R$9,90, sem mensalidades ou taxas adicionais.
            </p>
            <p>
              <strong>Suporte:</strong> Nossa equipe está disponível para esclarecer dúvidas e oferecer suporte técnico. Entre em contato através dos canais oficiais listados acima.
            </p>
          </div>
        </div>
      </footer>
      {/* Purchase Notifications */}
      <div className="fixed bottom-6 left-6 z-40 space-y-3 purchase-notification">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`bg-white text-gray-900 p-3 md:p-4 rounded-xl md:rounded-2xl shadow-2xl border-l-4 border-emerald-500 max-w-xs transform transition-all duration-500 ${
              notification.show ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
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
                <p className="text-xs text-gray-600 mb-1">{notification.city}</p>
                <p className="text-xs font-medium text-emerald-600">Ativou o plano {notification.plan}</p>
              </div>
              <div className="text-xs text-gray-400">agora</div>
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
              <button className="text-gray-400 hover:text-white text-3xl" onClick={closeModal}>
                ×
              </button>
            </div>
            <div className="p-6 text-gray-300 leading-relaxed space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">1. Aceitação dos Termos</h3>
                <p>Ao adquirir o Pise Bem, você concorda com estes Termos de Uso. Se não concordar com algum termo, não utilize nossos serviços.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">2. Descrição do Serviço</h3>
                <p>O Pise Bem é um programa educacional de exercícios para alívio da fascite plantar, baseado em métodos naturais. Não constitui aconselhamento médico e não substitui consulta com profissionais de saúde.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">3. Garantia de 7 Dias</h3>
                <p>Oferecemos 7 dias de acesso completo com garantia de reembolso. Para solicitar, entre em contato através dos canais oficiais dentro do prazo estabelecido.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">4. Uso Apropriado</h3>
                <p>Você concorda em usar o programa de forma responsável. Recomendamos fortemente consultar um médico antes de iniciar qualquer programa de exercícios, especialmente se tiver condições de saúde preexistentes.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">5. Limitação de Responsabilidade</h3>
                <p>O Pise Bem não garante resultados específicos. Os resultados podem variar entre indivíduos. Não nos responsabilizamos por lesões decorrentes do uso inadequado dos exercícios.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">6. Propriedade Intelectual</h3>
                <p>Todo o conteúdo do programa é protegido por direitos autorais. É proibida a reprodução, distribuição ou uso comercial sem autorização expressa.</p>
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
              <button className="text-gray-400 hover:text-white text-3xl" onClick={closeModal}>
                ×
              </button>
            </div>
            <div className="p-6 text-gray-300 leading-relaxed space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">1. Coleta de Dados</h3>
                <p>Coletamos apenas dados necessários para processar sua compra e fornecer suporte adequado, como nome, e-mail e informações de pagamento. Não coletamos dados sensíveis desnecessários.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">2. Uso dos Dados</h3>
                <p>Os dados são utilizados exclusivamente para gerenciar sua conta, processar pagamentos, fornecer suporte e melhorar nossos serviços. Não compartilhamos, vendemos ou alugamos seus dados para terceiros.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">3. Segurança</h3>
                <p>Utilizamos criptografia SSL e medidas de segurança robustas para proteger seus dados pessoais e financeiros contra acesso não autorizado.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">4. Seus Direitos (LGPD)</h3>
                <p>Conforme a Lei Geral de Proteção de Dados, você pode acessar, corrigir, atualizar ou solicitar a exclusão de seus dados a qualquer momento através dos nossos canais de contato.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">5. Cookies</h3>
                <p>Utilizamos cookies essenciais para o funcionamento do site e analytics para melhorar sua experiência. Você pode gerenciar cookies através das configurações do seu navegador.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">6. Contato</h3>
                <p>
                  Para dúvidas sobre privacidade ou exercer seus direitos, entre em contato via{' '}
                  <a href="mailto:suporte@pisebem.com" className="text-emerald-400 hover:underline">
                    suporte@pisebem.com
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

export default PiseBemLanding;
