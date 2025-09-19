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
  rating: number;
  image: string;
}

const SecaFacilLanding: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [modal, setModal] = useState<string | null>(null);
  const [spots, setSpots] = useState(37);
  const [showOffer, setShowOffer] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState<PurchaseNotification[]>([]);

  const purchaseData = [
    { name: 'María S.', city: 'Ciudad de México', plan: 'Fórmula Completa' },
    { name: 'Ana P.', city: 'Guadalajara', plan: 'Fórmula Completa' },
    { name: 'Juan R.', city: 'Monterrey', plan: 'Fórmula Completa' },
    { name: 'Carlos F.', city: 'Puebla', plan: 'Fórmula Completa' },
    { name: 'Paula B.', city: 'Querétaro', plan: 'Fórmula Completa' },
    { name: 'Roberto H.', city: 'León', plan: 'Fórmula Completa' },
    { name: 'Fernanda L.', city: 'Mérida', plan: 'Fórmula Completa' },
    { name: 'Miguel C.', city: 'Tijuana', plan: 'Fórmula Completa' },
    { name: 'Sofía M.', city: 'Cancún', plan: 'Fórmula Completa' },
    { name: 'Lucas D.', city: 'San Luis Potosí', plan: 'Fórmula Completa' },
  ];

  const testimonials: Testimonial[] = [
    {
      text: '¡Por fin encontré algo que jala! En pocos días ya noté una diferencia cañona en el sudor de manos y pies.',
      author: 'Ana C.',
      location: 'Ciudad de México • 28 años',
      rating: 5,
      image: "data:image/svg+xml,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='40' cy='40' r='35' fill='%2310B981'/%3E%3Ctext x='50%25' y='55%25' font-family='Arial' font-size='24' fill='white' text-anchor='middle'%3EAC%3C/text%3E%3C/svg%3E"
    },
    {
      text: 'Ya no paso vergüenzas en juntas. ¡Mi autoestima regresó al cien!',
      author: 'Roberto M.',
      location: 'Guadalajara • 35 años',
      rating: 5,
      image: "data:image/svg+xml,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='40' cy='40' r='35' fill='%2306B6D4'/%3E%3Ctext x='50%25' y='55%25' font-family='Arial' font-size='24' fill='white' text-anchor='middle'%3ERM%3C/text%3E%3C/svg%3E"
    },
    {
      text: 'Súper fácil de preparar en casa. ¡Ingredientes sencillos, pero el resultado está chido!',
      author: 'Fernanda S.',
      location: 'Monterrey • 31 años',
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
    if (!document.querySelector('[src*="68cae14e9f5b422b2ea94507"]')) {
      const script = document.createElement('script');
      script.src = 'https://scripts.converteai.net/bddd3820-6eca-4c7d-898b-ece1995d6f03/players/68cae14e9f5b422b2ea94507/v4/player.js';
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
      <title>Seca Fácil</title>
      <meta
        name="description"
        content="Seca Fácil: Alivia el sudor excesivo en 7 días con un gel natural casero. Sin químicos, con garantía de 7 días. Solo 92,00 MXN de por vida."
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
            <span>¡OFERTA LIMITADA: 92,00 MXN DE POR VIDA! • Solo quedan <span className="bg-white text-red-600 px-2 py-1 rounded-full font-black">{spots}</span> lugares</span>
            <span className="animate-pulse">⚡</span>
          </div>
        </div>
      )}
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-12 md:py-20 pt-16 md:pt-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full font-semibold text-black mb-6 md:mb-8 text-sm md:text-base shadow-lg">
            <span className="animate-bounce">🔥</span>
            ¡SOLUCIÓN NATURAL 2025!
          </div>
          <h1 className="text-[clamp(28px,6vw,64px)] font-black leading-tight mb-5 bg-gradient-to-r from-white to-[#00FF88] bg-clip-text text-transparent overflow-visible whitespace-normal">
            Alivia el Sudor Excesivo en Solo 7 Días
          </h1>
          <p className="text-[clamp(16px,2.5vw,20px)] text-gray-200 mb-10 max-w-[600px] mx-auto">
            La solución natural para quienes sufren de sudor excesivo. Nuestro <span className="text-[#00FF88] font-bold">Gel Natural de Alivio para Sudor</span> reduce la hiperhidrosis sin químicos pesados, ¡y te devuelve la confianza!
          </p>
          <div className="mb-8 md:mb-12 flex justify-center">
            <div className="w-full max-w-md md:max-w-lg lg:max-w-xl bg-gray-800 rounded-2xl p-2 shadow-2xl">
              <vturb-smartplayer
                id="vid-68cae14e9f5b422b2ea94507"
                style={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '400px' }}
              ></vturb-smartplayer>
              <script type="text/javascript">
                {`var s=document.createElement("script"); s.src="https://scripts.converteai.net/bddd3820-6eca-4c7d-898b-ece1995d6f03/players/68cae14e9f5b422b2ea94507/v4/player.js", s.async=!0,document.head.appendChild(s);`}
              </script>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12 max-w-2xl mx-auto">
            {[
              { number: '97%', label: 'Tasa de Éxito' },
              { number: '7 Días', label: 'Alivio Rápido' },
              { number: '4.9⭐', label: 'Calificación Promedio' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700">
                <div className="text-2xl md:text-4xl font-black text-emerald-400 mb-1">{stat.number}</div>
                <div className="text-xs md:text-sm text-gray-200">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <a
              href="https://pay.cakto.com.br/a8o524u_572837"
              className="inline-flex items-center justify-center gap-3 px-8 md:px-12 py-4 md:py-5 bg-gradient-to-r from-emerald-400 to-emerald-500 text-black font-bold text-lg md:text-xl rounded-full shadow-2xl hover:shadow-emerald-400/25 hover:-translate-y-1 transition-all duration-300 group w-full max-w-md"
            >
              <span>¡QUIERO ALIVIO YA!</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <p className="text-sm text-gray-200 flex items-center justify-center gap-2 flex-wrap">
              <span>✅</span> Garantía de 7 días
              <span>•</span>
              <span>✅</span> Acceso inmediato
            </p>
          </div>
        </div>
      </section>
      {/* How It Works */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-white">
              <span className="text-emerald-400">Simple y Eficaz</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              Alivia el sudor excesivo con nuestro Gel Natural de Alivio para Sudor en solo 7 días
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: '📋',
                title: '1. Compra el Plan',
                desc: 'Adquiere Seca Fácil y obtén acceso inmediato',
                color: 'from-blue-400 to-blue-500'
              },
              {
                icon: '🧪',
                title: '2. Prepara el Gel',
                desc: 'Haz el gel natural en casa con ingredientes sencillos',
                color: 'from-purple-400 to-purple-500'
              },
              {
                icon: '⏱️',
                title: '3. 7 Días de Acción',
                desc: 'Aplica el gel diario por 7 días para alivio rápido',
                color: 'from-yellow-400 to-orange-400'
              },
              {
                icon: '😊',
                title: '4. Vive con Confianza',
                desc: 'Vuelve a vivir sin el oso del sudor excesivo',
                color: 'from-red-400 to-pink-400'
              },
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl md:text-4xl shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                  {step.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-emerald-400 mb-2">{step.title}</h3>
                <p className="text-sm md:text-base text-gray-200 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 md:mt-16 text-center p-6 md:p-8 bg-gradient-to-r from-green-900/30 to-green-800/30 rounded-3xl border-2 border-green-400 backdrop-blur-sm">
            <div className="text-2xl md:text-3xl font-bold text-emerald-400 mb-4 flex items-center justify-center gap-2">
              <span className="animate-bounce">💪</span>
              ¡Sin Complicaciones!
            </div>
            <p className="text-gray-200 mb-6 md:mb-8 text-lg">
              ¡Prepara tu propio Gel Natural de Alivio para Sudor en casa! Con ingredientes sencillos, creas una solución refrescante y efectiva, perfecta para combatir el sudor excesivo de forma natural.
            </p>
            <a
              href="https://pay.cakto.com.br/a8o524u_572837"
              className="inline-flex items-center gap-3 px-8 md:px-12 py-4 bg-gradient-to-r from-green-400 to-green-500 text-black font-bold text-lg rounded-full shadow-2xl hover:-translate-y-1 transition-all"
            >
              <span>🚀</span>
              ¡COMPRA AHORA!
            </a>
          </div>
        </div>
      </section>
      {/* Problem and Solution */}
      <section className="py-16 md:py-24 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-12 md:mb-16 text-white">
            Acaba con el Sudor Excesivo
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-gradient-to-b from-red-900/20 to-red-800/20 p-6 md:p-8 rounded-3xl border-2 border-red-500/30 backdrop-blur-sm">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6">El Problema</h3>
              <div className="mb-6">
                <img
                  src="/dr12.png"
                  alt="Profesional demostrando experiencia en control de sudor excesivo"
                  className="w-full h-auto rounded-xl mb-4 max-w-md mx-auto"
                />
              </div>
              <p className="text-gray-200 mb-4 leading-relaxed">¿Alguna vez evitaste dar la mano por el sudor? ¿O usaste ropa oscura para esconder manchas? La hiperhidrosis puede hacer que cada momento sea un oso, limitando tu confianza y calidad de vida. Sientes:</p>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start gap-3"><span className="text-white font-bold">•</span> Sudor incontrolable en manos, pies o axilas</li>
                <li className="flex items-start gap-3"><span className="text-white font-bold">•</span> Vergüenza en situaciones sociales o laborales</li>
                <li className="flex items-start gap-3"><span className="text-white font-bold">•</span> Frustración con productos que irritan la piel o no jalan</li>
                <li className="flex items-start gap-3"><span className="text-white font-bold">•</span> Miedo a tratamientos caros o invasivos que no resuelven</li>
              </ul>
            </div>
            <div className="bg-gradient-to-b from-emerald-900/20 to-green-800/20 p-6 md:p-8 rounded-3xl border-2 border-emerald-500/50 backdrop-blur-sm">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6">La Solución</h3>
              <div className="mb-6">
                <img
                  src="/exerc.png"
                  alt="Persona preparando el Gel Natural de Alivio para Sudor en casa"
                  className="w-full h-auto rounded-xl mb-4 max-w-md mx-auto"
                />
              </div>
              <p className="text-gray-200 mb-4 leading-relaxed">¡Con Seca Fácil, puedes recuperar tu confianza! Nuestro <span className="font-bold">Gel Natural de Alivio para Sudor</span>, hecho con ingredientes naturales como aloe vera y aceites esenciales, reduce el sudor excesivo sin químicos. Tendrás:</p>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start gap-3"><span className="text-white font-bold">✓</span> Alivio natural en solo 7 días</li>
                <li className="flex items-start gap-3"><span className="text-white font-bold">✓</span> Gel sencillo para preparar en casa</li>
                <li className="flex items-start gap-3"><span className="text-white font-bold">✓</span> Sin efectos secundarios ni químicos pesados</li>
                <li className="flex items-start gap-3"><span className="text-white font-bold">✓</span> Libertad para vivir sin oso</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Visual Proof Section */}
      <section className="py-16 md:py-24 px-4 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-12 md:mb-16 text-white">
            Mira los Resultados en la Práctica
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-gradient-to-b from-gray-800/40 to-gray-900/40 p-6 md:p-8 rounded-3xl border-2 border-emerald-500/50 backdrop-blur-sm">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Cómo Funciona el Gel</h3>
              <p className="text-gray-200 mb-6 leading-relaxed">El Gel Natural de Alivio para Sudor de Seca Fácil fue diseñado por expertos para reducir el sudor y refrescar tu piel. Mira qué fácil es prepararlo:</p>
              <img
                src="/exerc.png"
                alt="Persona preparando el Gel Natural de Alivio para Sudor en casa"
                className="w-full h-auto rounded-2xl shadow-lg mb-6 max-w-md mx-auto"
              />
              <p className="text-gray-200 text-sm italic">*Imagen ilustrativa: gel sencillo para aliviar el sudor excesivo.</p>
            </div>
            <div className="bg-gradient-to-b from-gray-800/40 to-gray-900/40 p-6 md:p-8 rounded-3xl border-2 border-emerald-500/50 backdrop-blur-sm">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Reducción del Sudor: Antes y Después</h3>
              <p className="text-gray-200 mb-6 leading-relaxed">Nuestros usuarios reportan una reducción cañona del sudor en solo 7 días. Mira el progreso que puedes esperar:</p>
              <div className="bg-gray-700 p-6 rounded-xl mb-4">
                <div className="flex justify-between items-end h-32">
                  <div className="flex flex-col items-center">
                    <div className="bg-red-500 w-12 h-24 rounded-t flex items-end justify-center text-white font-bold pb-2">8</div>
                    <p className="text-sm mt-2 text-center text-gray-200">Antes</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-emerald-500 w-12 h-6 rounded-t flex items-end justify-center text-white font-bold pb-1">2</div>
                    <p className="text-sm mt-2 text-center text-gray-200">Después</p>
                  </div>
                </div>
                <p className="text-center text-sm text-gray-200 mt-4">Nivel de Sudor (0-10)</p>
              </div>
              <p className="text-gray-200 text-sm italic mt-4">*Gráfico ilustrativo: reducción promedio del sudor reportada por usuarios.</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <img
              src="/dr12.png"
              alt="Profesional demostrando experiencia en control de sudor excesivo"
              className="w-32 h-32 md:w-48 md:h-48 mx-auto rounded-full shadow-lg mb-4"
            />
            <p className="text-gray-200 text-sm italic">Desarrollado por expertos para resultados chidos.</p>
          </div>
          {/* Before/After Images */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Resultados Visuales</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-800/40 p-6 rounded-3xl border border-gray-700">
                <h4 className="text-lg font-bold text-white mb-4">Antes de Seca Fácil</h4>
                <img
                  src="data:image/svg+xml,%3Csvg width='300' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23991B1B'/%3E%3Ctext x='50%25' y='30%25' font-family='Arial' font-size='14' fill='%23FFFFFF' text-anchor='middle'%3ESudor excesivo%3C/text%3E%3Ctext x='50%25' y='45%25' font-family='Arial' font-size='14' fill='%23FFFFFF' text-anchor='middle'%3Een todo el cuerpo%3C/text%3E%3Ctext x='50%25' y='60%25' font-family='Arial' font-size='12' fill='%23FFFFFF' text-anchor='middle'%3EVergüenza%3C/text%3E%3Ctext x='50%25' y='75%25' font-family='Arial' font-size='12' fill='%23FFFFFF' text-anchor='middle'%3Esocial%3C/text%3E%3C/svg%3E"
                  alt="Ilustración mostrando sudor excesivo antes del tratamiento"
                  className="w-full h-auto rounded-xl mb-4 max-w-md mx-auto"
                />
                <p className="text-gray-200 text-sm">Sudor que limita el día a día</p>
              </div>
              <div className="bg-gray-800/40 p-6 rounded-3xl border border-gray-700">
                <h4 className="text-lg font-bold text-white mb-4">Después de Seca Fácil</h4>
                <img
                  src="data:image/svg+xml,%3Csvg width='300' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23065F46'/%3E%3Ctext x='50%25' y='30%25' font-family='Arial' font-size='14' fill='%23FFFFFF' text-anchor='middle'%3EAlivio del sudor%3C/text%3E%3Ctext x='50%25' y='45%25' font-family='Arial' font-size='14' fill='%23FFFFFF' text-anchor='middle'%3Een 7 días%3C/text%3E%3Ctext x='50%25' y='60%25' font-family='Arial' font-size='12' fill='%23FFFFFF' text-anchor='middle'%3EConfianza para%3C/text%3E%3Ctext x='50%25' y='75%25' font-family='Arial' font-size='12' fill='%23FFFFFF' text-anchor='middle'%3Evivir%3C/text%3E%3C/svg%3E"
                  alt="Ilustración mostrando alivio del sudor y confianza para vivir tras el tratamiento"
                  className="w-full h-auto rounded-xl mb-4 max-w-md mx-auto"
                />
                <p className="text-gray-200 text-sm">Regreso a una vida confiada y sin sudor</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-16 md:py-24 px-4 bg-black/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-12 md:mb-16 text-white">
            ¿Por Qué Elegir Seca Fácil?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: '🌿',
                title: 'Solución 100% Natural',
                desc: 'Alivia la hiperhidrosis sin antitranspirantes químicos ni procedimientos invasivos',
                gradient: 'from-green-500 to-emerald-500'
              },
              {
                icon: '⏱️',
                title: 'Resultados en 7 Días',
                desc: 'Siente alivio rápido con nuestro gel natural comprobado',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                icon: '🏠',
                title: 'Fácil de Preparar en Casa',
                desc: 'Gel sencillo que no necesita ingredientes caros',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                icon: '💪',
                title: 'Efecto Duradero',
                desc: 'Reduce el sudor a futuro con ingredientes naturales',
                gradient: 'from-orange-500 to-red-500'
              },
              {
                icon: '🔒',
                title: 'Seguro y Comprobado',
                desc: 'Método creado por expertos en control de sudor',
                gradient: 'from-yellow-500 to-orange-500'
              },
              {
                icon: '💸',
                title: 'Accesible y de por Vida',
                desc: 'Solo 92,00 MXN para acceso ilimitado al programa',
                gradient: 'from-indigo-500 to-purple-500'
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-800/40 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-gray-700 hover:border-emerald-500/50 hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${benefit.gradient} rounded-2xl text-2xl mb-4 text-white group-hover:scale-110 transition-transform`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-200 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-gray-900/50 to-black/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-12 md:mb-16 text-white">
            Testimonios Reales
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
                <blockquote className="text-gray-200 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={`Foto de perfil de ${testimonial.author}`}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="font-bold text-white">{testimonial.author}</div>
                    <div className="text-sm text-gray-200">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Guarantee Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-emerald-900/30 via-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-800/60 backdrop-blur-sm p-8 md:p-12 rounded-3xl border-2 border-emerald-500 shadow-2xl shadow-emerald-500/20">
            <div className="text-5xl md:text-6xl mb-6 animate-bounce">🎁</div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              Garantía de 7 Días
            </h2>
            <p className="text-xl md:text-2xl font-bold text-gray-200 mb-4">
              Prueba Seca Fácil sin riesgo
            </p>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              Usa nuestro programa durante 7 días completos. Si no sientes alivio, te devolvemos el 100% de tu lana.
            </p>
            <div className="mb-8">
              <img
                src="data:image/svg+xml,%3Csvg width='400' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23374151'/%3E%3Ctext x='50%25' y='30%25' font-family='Arial' font-size='16' fill='%23FFFFFF' text-anchor='middle'%3E7 DÍAS DE%3C/text%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='20' fill='%23FFFFFF' text-anchor='middle'%3EGARANTÍA%3C/text%3E%3Ctext x='50%25' y='70%25' font-family='Arial' font-size='14' fill='%23D1D5DB' text-anchor='middle'%3E100%25 Reembolso%3C/text%3E%3C/svg%3E"
                alt="Sello de garantía de 7 días con 100% de reembolso"
                className="w-full max-w-md h-auto mx-auto rounded-2xl mb-6"
              />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8 mb-8">
              {[
                { text: '7 DÍAS', subtitle: 'Garantía' },
                { text: '100%', subtitle: 'Reembolso' },
                { text: '0', subtitle: 'Riesgo' },
                { text: '24/7', subtitle: 'Soporte' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-4xl font-black text-white mb-1">{item.text}</div>
                  <div className="text-gray-200 text-sm">{item.subtitle}</div>
                </div>
              ))}
            </div>
            <a
              href="https://pay.cakto.com.br/a8o524u_572837"
              className="inline-flex items-center gap-3 px-10 md:px-14 py-5 md:py-6 bg-gradient-to-r from-emerald-400 to-emerald-500 text-black font-bold text-xl rounded-full shadow-2xl hover:shadow-emerald-400/25 hover:-translate-y-1 transition-all duration-300"
            >
              <span>🚀</span>
              ¡COMPRA AHORA CON GARANTÍA!
            </a>
          </div>
        </div>
      </section>
      {/* Pricing */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-gray-900/50 to-black" id="pricing">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-12 md:mb-16 text-white">
            Adquiere Seca Fácil Hoy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 md:gap-8 mb-12">
            <div className="relative bg-gray-800/40 backdrop-blur-sm p-6 md:p-8 rounded-3xl border-2 border-emerald-500 scale-105 shadow-2xl shadow-emerald-500/20">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-emerald-400 to-emerald-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                  ¡OFERTA EXCLUSIVA!
                </span>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Seca Fácil de por Vida</h3>
                <div className="text-4xl md:text-5xl font-black mb-1 text-white">
                  <span className="line-through text-gray-400 text-2xl mr-2">297,00 MXN</span>
                  92,00 MXN
                  <span className="text-base text-gray-200 font-normal">/de por vida</span>
                </div>
                <p className="text-sm text-white font-semibold">Garantía de 7 días, pago único</p>
              </div>
              <div className="mb-6">
                <img
                  src="data:image/svg+xml,%3Csvg width='400' height='250' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23065F46'/%3E%3Ctext x='50%25' y='25%25' font-family='Arial' font-size='16' fill='%23FFFFFF' text-anchor='middle'%3ESECA FÁCIL%3C/text%3E%3Ctext x='50%25' y='40%25' font-family='Arial' font-size='12' fill='%23FFFFFF' text-anchor='middle'%3EGel Natural%3C/text%3E%3Ctext x='50%25' y='52%25' font-family='Arial' font-size='12' fill='%23FFFFFF' text-anchor='middle'%3EPara Sudor Excesivo%3C/text%3E%3Ctext x='50%25' y='68%25' font-family='Arial' font-size='10' fill='%23D1D5DB' text-anchor='middle'%3EFórmula Completa%3C/text%3E%3Ctext x='50%25' y='80%25' font-family='Arial' font-size='10' fill='%23D1D5DB' text-anchor='middle'%3EAlivio en 7 Días%3C/text%3E%3C/svg%3E"
                  alt="Vista previa del producto Seca Fácil - Fórmula completa con gel natural para sudor excesivo"
                  className="w-full h-auto rounded-2xl shadow-lg max-w-md mx-auto"
                />
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  'Fórmula completa del gel natural para hiperhidrosis',
                  'Plan de 7 días para alivio rápido del sudor',
                  'Acceso de por vida al programa completo',
                  'Instrucciones detalladas para preparar el gel',
                  'Soporte prioritario vía WhatsApp 24/7',
                  'Garantía incondicional de 7 días',
                  'Sin mensualidades ni costos extras'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-white font-bold mt-1">✓</span>
                    <span className="text-gray-200">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://pay.cakto.com.br/a8o524u_572837"
                className="block w-full text-center px-6 py-4 font-bold text-lg rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 text-black hover:shadow-2xl hover:shadow-emerald-400/25 hover:-translate-y-1 transition-all duration-300"
              >
                ¡COMPRA CON GARANTÍA DE 7 DÍAS!
              </a>
              <p className="text-center text-xs text-gray-200 mt-3">
                Pago único de 92,00 MXN • Sin costos adicionales • Acceso inmediato
              </p>
            </div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-gray-800/40 rounded-2xl border border-gray-700">
              <span className="text-white">🔒</span>
              <span className="text-sm text-gray-200">Pago 100% seguro</span>
              <span className="text-white">💳</span>
              <span className="text-sm text-gray-200">Tarjeta • PayPal</span>
            </div>
          </div>
        </div>
      </section>
      {/* Social Proof Stats */}
      <section className="py-16 px-4 bg-emerald-500/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 text-center">
            {[
              { number: '5,247', label: 'Usuarios Satisfechos' },
              { number: '97%', label: 'Tasa de Éxito' },
              { number: '4.9⭐', label: 'Calificación Promedio' },
              { number: '7 Días', label: 'Alivio Rápido' },
              { number: '24/7', label: 'Soporte' },
              { number: '100%', label: 'Garantía' }
            ].map((stat, index) => (
              <div key={index} className="p-4">
                <div className="text-3xl md:text-4xl font-black text-white mb-2">{stat.number}</div>
                <div className="text-sm text-gray-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section className="py-16 md:py-24 px-4 bg-black/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-12 md:mb-16 text-white">
            Preguntas Frecuentes
          </h2>
          <div className="space-y-4">
            {[
              {
                question: '¿Cómo jala la garantía de 7 días?',
                answer: 'Compras Seca Fácil y tienes 7 días completos para probar el programa. Si no sientes un alivio chido, puedes pedir el reembolso total del 100% de tu lana, sin broncas.'
              },
              {
                question: '¿Necesito ingredientes especiales para el gel?',
                answer: '¡Nel! El Gel Natural de Alivio para Sudor de Seca Fácil se hace con ingredientes sencillos, como aloe vera y aceites esenciales, que encuentras fácil. No necesitas nada caro ni difícil de hallar.'
              },
              {
                question: '¿El gel es seguro para todas las edades?',
                answer: 'Sí, Seca Fácil fue creado por expertos y es seguro para la mayoría de la banda. El gel es natural y de bajo riesgo. Siempre te recomendamos checar con un doc si tienes alguna condición especial.'
              },
              {
                question: '¿Cuánto tiempo tarda en verse resultados?',
                answer: 'La mayoría de nuestros usuarios reporta un alivio choncho en solo 7 días aplicando el gel. Algunos sienten mejora desde los primeros días.'
              },
              {
                question: '¿El acceso es de verdad de por vida por 92,00 MXN?',
                answer: '¡Órale! Por solo 92,00 MXN, tienes acceso ilimitado y de por vida a la fórmula completa. Sin mensualidades, costos extra ni trampas. Es un pago único.'
              },
              {
                question: '¿Cómo recibo el material después de la compra?',
                answer: 'Tras confirmar tu pago, recibes acceso inmediato a la fórmula completa por correo electrónico. Todo el material está disponible en una plataforma en línea exclusiva.'
              },
              {
                question: '¿Jala para casos graves de hiperhidrosis?',
                answer: 'Seca Fácil está diseñado para ayudar a la banda con diferentes niveles de sudor excesivo. Muchos con casos pesados han reportado mejoras chidas. Para casos muy cañones, te recomendamos un chequeo médico a la par.'
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden hover:border-emerald-500/50 transition-all"
              >
                <button
                  className="w-full p-6 text-left font-bold text-lg flex justify-between items-center hover:bg-emerald-500/5 transition-all text-white"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="pr-4">{faq.question}</span>
                  <span className={`text-2xl transition-transform duration-300 flex-shrink-0 ${activeFaq === index ? 'rotate-45' : ''}`}>+</span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${activeFaq === index ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                  <div className="px-6 text-gray-200 leading-relaxed">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Final CTA */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-emerald-900/30 via-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-white">
            Vive sin Sudor Excesivo Hoy Mismo<br />
            <span className="text-emerald-400">¡Empieza Ahora con Garantía!</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed">
            Únete a miles de personas que recuperaron la confianza con Seca Fácil
          </p>
          <div className="mb-8">
            <img
              src="data:image/svg+xml,%3Csvg width='500' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23065F46'/%3E%3Ctext x='50%25' y='25%25' font-family='Arial' font-size='20' fill='%23FFFFFF' text-anchor='middle'%3EVUELVE A LA VIDA CONFIADA%3C/text%3E%3Ctext x='50%25' y='45%25' font-family='Arial' font-size='16' fill='%23FFFFFF' text-anchor='middle'%3ESin sudor, sin vergüenza%3C/text%3E%3Ctext x='50%25' y='65%25' font-family='Arial' font-size='14' fill='%23D1D5DB' text-anchor='middle'%3ESolo 92,00 MXN%3C/text%3E%3Ctext x='50%25' y='80%25' font-family='Arial' font-size='14' fill='%23D1D5DB' text-anchor='middle'%3EGarantía de 7 días%3C/text%3E%3C/svg%3E"
              alt="Ilustración de persona viviendo sin sudor excesivo tras usar Seca Fácil"
              className="w-full max-w-lg h-auto mx-auto rounded-2xl mb-8"
            />
          </div>
          <a
            href="https://pay.cakto.com.br/a8o524u_572837"
            className="inline-flex items-center gap-4 px-12 md:px-16 py-5 md:py-6 bg-gradient-to-r from-emerald-400 to-emerald-500 text-black font-bold text-xl md:text-2xl rounded-full shadow-2xl hover:shadow-emerald-400/25 hover:-translate-y-2 transition-all duration-300 mb-6"
          >
            <span className="animate-pulse">🚀</span>
            ¡COMPRAR SECA FÁCIL AHORA!
            <span>→</span>
          </a>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-200 flex-wrap">
            <span className="flex items-center gap-1">
              <span>🎁</span> Garantía total de 7 días
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <span>🔒</span> Pago único de 92,00 MXN
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <span>⚡</span> Acceso inmediato
            </span>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-12 px-4 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {[
              { text: 'Términos de Uso', onClick: () => showModal('terms') },
              { text: 'Política de Privacidad', onClick: () => showModal('privacy') },
              { text: 'Soporte', href: 'mailto:soporte@secafacil.com' },
              { text: 'Contacto', href: 'https://wa.me/5511999999999' }
            ].map((link, index) => (
              <a
                key={index}
                href={link.href || '#'}
                onClick={link.onClick ? (e) => { e.preventDefault(); link.onClick(); } : undefined}
                className="text-gray-200 hover:text-emerald-400 transition-colors text-sm"
              >
                {link.text}
              </a>
            ))}
          </div>
          <p className="text-center text-gray-200 text-sm mb-8">
            © 2025 Seca Fácil - Todos los derechos reservados
          </p>
          <div className="text-center text-gray-200 text-xs leading-relaxed space-y-4 max-w-4xl mx-auto">
            <p>
              <strong>Aviso Legal:</strong> Los resultados pueden variar de persona a persona. Seca Fácil es un programa de soluciones naturales para aliviar el sudor excesivo, desarrollado con base en conocimientos especializados. Este producto no sustituye la consulta médica. Consulta a un profesional de la salud antes de iniciar cualquier programa. El éxito del programa depende de la dedicación individual y de factores específicos de cada caso.
            </p>
            <p>
              <strong>Garantía:</strong> Ofrecemos 7 días de acceso completo con garantía incondicional de reembolso. Si no estás satisfecho, solicita un reembolso total dentro del plazo. Pago único de 92,00 MXN, sin mensualidades ni costos adicionales.
            </p>
            <p>
              <strong>Soporte:</strong> Nuestro equipo está disponible para resolver dudas y ofrecer soporte técnico. Contáctanos a través de los canales oficiales mencionados arriba.
            </p>
          </div>
        </div>
      </footer>
      {/* Purchase Notifications */}
      <div className="fixed bottom-6 left-6 z-40 space-y-3">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`bg-white text-gray-900 p-3 md:p-4 rounded-xl md:rounded-2xl shadow-2xl border-l-4 border-emerald-500 max-w-xs transform transition-all duration-500 ${
              notification.show ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            }`}
          >
            <div className="flex items-start gap-2 md:gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xs md:text-sm flex-shrink-0">
                {notification.name.split(' ')[0][0]}{notification.name.split(' ')[1]?.[0] || ''}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 md:gap-2 mb-1">
                  <span className="text-green-600 text-xs md:text-sm">●</span>
                  <span className="font-semibold text-xs md:text-sm">{notification.name}</span>
                </div>
                <p className="text-xs text-gray-600 mb-1">{notification.city}</p>
                <p className="text-xs font-medium text-emerald-600">Activó el plan {notification.plan}</p>
              </div>
              <div className="text-xs text-gray-600">ahora</div>
            </div>
          </div>
        ))}
      </div>
      {/* Modals */}
      {modal === 'terms' && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] overflow-y-auto p-4">
          <div className="max-w-4xl mx-auto my-8 bg-gray-900 rounded-3xl border border-gray-700 shadow-2xl">
            <div className="flex justify-between items-center p-6 border-b border-gray-700">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Términos de Uso</h2>
              <button className="text-gray-200 hover:text-white text-3xl" onClick={closeModal}>
                ×
              </button>
            </div>
            <div className="p-6 text-gray-200 leading-relaxed space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">1. Aceptación de los Términos</h3>
                <p>Al adquirir Seca Fácil, aceptas estos Términos de Uso. Si no estás de acuerdo con algún término, no utilices nuestros servicios.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">2. Descripción del Servicio</h3>
                <p>Seca Fácil es un programa educativo de soluciones naturales para aliviar el sudor excesivo, basado en métodos naturales. No constituye asesoramiento médico ni sustituye la consulta con profesionales de la salud.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">3. Garantía de 7 Días</h3>
                <p>Ofrecemos 7 días de acceso completo con garantía de reembolso. Para solicitarlo, contáctanos a través de los canales oficiales dentro del plazo establecido.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">4. Uso Adecuado</h3>
                <p>Te comprometes a usar el programa de manera responsable. Recomendamos encarecidamente consultar a un médico antes de iniciar cualquier programa, especialmente si tienes condiciones de salud preexistentes.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">5. Limitación de Responsabilidad</h3>
                <p>Seca Fácil no garantiza resultados específicos. Los resultados pueden variar entre individuos. No nos responsabilizamos por reacciones derivadas del uso indebido del gel.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">6. Propiedad Intelectual</h3>
                <p>Todo el contenido del programa está protegido por derechos de autor. Está prohibida la reproducción, distribución o uso comercial sin autorización expresa.</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {modal === 'privacy' && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] overflow-y-auto p-4">
          <div className="max-w-4xl mx-auto my-8 bg-gray-900 rounded-3xl border border-gray-700 shadow-2xl">
            <div className="flex justify-between items-center p-6 border-b border-gray-700">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Política de Privacidad</h2>
              <button className="text-gray-200 hover:text-white text-3xl" onClick={closeModal}>
                ×
              </button>
            </div>
            <div className="p-6 text-gray-200 leading-relaxed space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">1. Recolección de Datos</h3>
                <p>Recolectamos solo los datos necesarios para procesar tu compra y brindar soporte adecuado, como nombre, correo electrónico e información de pago. No recolectamos datos sensibles innecesarios.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">2. Uso de los Datos</h3>
                <p>Los datos se utilizan exclusivamente para administrar tu cuenta, procesar pagos, brindar soporte y mejorar nuestros servicios. No compartimos, vendemos ni alquilamos tus datos a terceros.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">3. Seguridad</h3>
                <p>Utilizamos encriptación SSL y medidas de seguridad robustas para proteger tus datos personales y financieros contra accesos no autorizados.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">4. Tus Derechos</h3>
                <p>De acuerdo con las leyes de protección de datos, puedes acceder, corregir, actualizar o solicitar la eliminación de tus datos en cualquier momento a través de nuestros canales de contacto.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">5. Cookies</h3>
                <p>Usamos cookies esenciales para el funcionamiento del sitio y analíticas para mejorar tu experiencia. Puedes administrar las cookies a través de la configuración de tu navegador.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">6. Contacto</h3>
                <p>
                  Para dudas sobre privacidad o ejercer tus derechos, contáctanos vía{' '}
                  <a href="mailto:soporte@secafacil.com" className="text-emerald-400 hover:underline">
                    soporte@secafacil.com
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

export default SecaFacilLanding;
