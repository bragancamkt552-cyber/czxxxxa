import React, { useState, useEffect } from 'react';
import '../index.css';

interface PurchaseNotification {
  id: number;
  name: string;
  city: string;
  plan: string;
  show: boolean;
}

const PiseBienLanding: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [modal, setModal] = useState<string | null>(null);
  const [spots, setSpots] = useState(37);
  const [showOffer, setShowOffer] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showDelayedContent, setShowDelayedContent] = useState(false);
  const [notifications, setNotifications] = useState<PurchaseNotification[]>([]);

  const purchaseData = [
    { name: 'María L.', city: 'Ciudad de México', plan: 'Vitalicio' },
    { name: 'Juan R.', city: 'Guadalajara', plan: 'Vitalicio' },
    { name: 'Sofía M.', city: 'Monterrey', plan: 'Vitalicio' },
    { name: 'Pedro S.', city: 'Bogotá', plan: 'Vitalicio' },
    { name: 'Ana B.', city: 'Lima', plan: 'Vitalicio' },
    { name: 'Carlos H.', city: 'Santiago', plan: 'Vitalicio' },
    { name: 'Laura F.', city: 'Medellín', plan: 'Vitalicio' },
    { name: 'Miguel C.', city: 'Tijuana', plan: 'Vitalicio' },
    { name: 'Camila D.', city: 'Quito', plan: 'Vitalicio' },
    { name: 'Daniel P.', city: 'San José', plan: 'Vitalicio' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSpots((prev) => (prev > 15 ? prev - 1 : prev));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!document.querySelector('[src*="68d069cd713fc4a513282283"]')) {
      const script = document.createElement('script');
      script.src = 'https://scripts.converteai.net/bddd3820-6eca-4c7d-898b-ece1995d6f03/players/68d069cd713fc4a513282283/v4/player.js';
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOffer(true);
      setShowDelayedContent(true);
      setShowNotifications(true);
      startNotifications();
    }, 462000); // 7 minutes and 42 seconds
    return () => clearTimeout(timer);
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
      <title>Pise Bien</title>
      <meta
        name="description"
        content="Pise Bien: Alivia el dolor de la fascitis plantar en 7 días con nuestra bebida natural. Sin medicamentos, con garantía de 60 días. ¡Órale! Solo $90,00 MXN de por vida."
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
            <span>¡OFERTA LIMITADA: $90,00 MXN DE POR VIDA! • Solo quedan <span className="bg-white text-red-600 px-2 py-1 rounded-full font-black">{spots}</span> lugares</span>
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
            Alivia el Dolor de la Fascitis Plantar en Solo 7 Días
          </h1>
          <p className="text-[clamp(16px,2.5vw,20px)] text-gray-200 mb-10 max-w-[600px] mx-auto">
            ¡Di adiós a los analgésicos! Alivia tu fascitis plantar de forma <span className="text-[#00FF88] font-bold">natural</span>
          </p>
          <div className="mb-8 md:mb-12 flex justify-center">
            <div className="w-full max-w-md md:max-w-lg lg:max-w-xl bg-gray-800 rounded-2xl p-2 shadow-2xl">
              <vturb-smartplayer
                id="vid-68d069cd713fc4a513282283"
                style={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '400px' }}
              ></vturb-smartplayer>
            </div>
          </div>
          {showDelayedContent && (
            <div className="space-y-4">
              <a
                href="https://pay.hotmart.com/T99329125R?checkoutMode=10"
                className="inline-flex items-center justify-center gap-3 px-8 md:px-12 py-4 md:py-5 bg-gradient-to-r from-emerald-400 to-emerald-500 text-black font-bold text-lg md:text-xl rounded-full shadow-2xl hover:shadow-emerald-400/25 hover:-translate-y-1 transition-all duration-300 group w-full max-w-md"
              >
                <span>¡QUIERO ALIVIO AHORA!</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          )}
        </div>
      </section>
      {/* Delayed Content */}
      {showDelayedContent && (
        <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-gray-900/50 to-black">
          {/* Guarantee Section */}
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gray-800/60 backdrop-blur-sm p-8 md:p-12 rounded-3xl border-2 border-emerald-500 shadow-2xl shadow-emerald-500/20">
              <div className="text-5xl md:text-6xl mb-6 animate-bounce">🎁</div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                Garantía de 60 Días
              </h2>
              <p className="text-xl md:text-2xl font-bold text-gray-200 mb-4">
                Prueba Pise Bien sin riesgo
              </p>
              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                Usa nuestra bebida por 60 días completos. Si no sientes alivio, te devolvemos el 100% de tu dinero.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8 mb-8">
                {[
                  { text: '60 DÍAS', subtitle: 'Garantía' },
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
                href="https://pay.hotmart.com/T99329125R?checkoutMode=10"
                className="inline-flex items-center gap-3 px-10 md:px-14 py-5 md:py-6 bg-gradient-to-r from-emerald-400 to-emerald-500 text-black font-bold text-xl rounded-full shadow-2xl hover:shadow-emerald-400/25 hover:-translate-y-1 transition-all duration-300"
              >
                <span>🚀</span>
                ¡COMPRA AHORA CON GARANTÍA!
              </a>
            </div>
          </div>
          {/* Pricing Section */}
          <div className="max-w-5xl mx-auto mt-16">
            <h2 className="text-3xl md:text-5xl font-black text-center mb-12 md:mb-16 text-white">
              Adquiere Pise Bien Hoy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 md:gap-8 mb-12">
              <div className="relative bg-gray-800/40 backdrop-blur-sm p-6 md:p-8 rounded-3xl border-2 border-emerald-500 scale-105 shadow-2xl shadow-emerald-500/20">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-emerald-400 to-emerald-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                    ¡OFERTA EXCLUSIVA!
                  </span>
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Pise Bien Vitalicio</h3>
                  <div className="text-4xl md:text-5xl font-black mb-1 text-white">
                    <span className="line-through text-gray-400 text-2xl mr-2">$299,00 MXN</span>
                    $90,00 MXN
                    <span className="text-base text-gray-200 font-normal">/de por vida</span>
                  </div>
                  <p className="text-sm text-white font-semibold">Garantía de 60 días, pago único</p>
                </div>
                <div className="mb-6">
                  <img
                    src="data:image/svg+xml,%3Csvg width='400' height='250' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23065F46'/%3E%3Ctext x='50%25' y='25%25' font-family='Arial' font-size='16' fill='%23FFFFFF' text-anchor='middle'%3EPISE BIEN%3C/text%3E%3Ctext x='50%25' y='40%25' font-family='Arial' font-size='12' fill='%23FFFFFF' text-anchor='middle'%3EBebida Natural%3C/text%3E%3Ctext x='50%25' y='52%25' font-family='Arial' font-size='12' fill='%23FFFFFF' text-anchor='middle'%3EPara Fascitis Plantar%3C/text%3E%3Ctext x='50%25' y='68%25' font-family='Arial' font-size='10' fill='%23D1D5DB' text-anchor='middle'%3EPrograma Completo%3C/text%3E%3Ctext x='50%25' y='80%25' font-family='Arial' font-size='10' fill='%23D1D5DB' text-anchor='middle'%3EAlivio en 7 Días%3C/text%3E%3C/svg%3E"
                    alt="Visualización del producto Pise Bien - Programa completo con bebida natural para fascitis plantar"
                    className="w-full h-auto rounded-2xl shadow-lg max-w-md mx-auto"
                  />
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    'Bebida natural comprobada para fascitis plantar',
                    'Plan de 7 días para alivio rápido del dolor',
                    'Acceso de por vida al programa completo',
                    'Instrucciones detalladas para usar la bebida',
                    'Soporte prioritario vía WhatsApp 24/7',
                    'Garantía incondicional de 60 días',
                    'Sin mensualidades ni costos extra'
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-white font-bold mt-1">✓</span>
                      <span className="text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://pay.hotmart.com/T99329125R?checkoutMode=10"
                  className="block w-full text-center px-6 py-4 font-bold text-lg rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 text-black hover:shadow-2xl hover:shadow-emerald-400/25 hover:-translate-y-1 transition-all duration-300"
                >
                  ¡COMPRA CON GARANTÍA DE 60 DÍAS!
                </a>
                <p className="text-center text-xs text-gray-200 mt-3">
                  Pago único de $90,00 MXN • Sin costos adicionales • Acceso inmediato
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
          {/* Social Proof Stats */}
          <div className="max-w-6xl mx-auto mt-16">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 text-center">
              {[
                { number: '5,247', label: 'Usuarios Satisfechos' },
                { number: '95%', label: 'Tasa de Éxito' },
                { number: '4.8⭐', label: 'Calificación Promedio' },
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
          {/* FAQ */}
          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="text-3xl md:text-5xl font-black text-center mb-12 md:mb-16 text-white">
              Preguntas Frecuentes
            </h2>
            <div className="space-y-4">
              {[
                {
                  question: '¿Cómo funciona la garantía de 60 días?',
                  answer: 'Adquieres Pise Bien y tienes 60 días completos para probar la bebida. Si no sientes alivio significativo del dolor, puedes pedir el reembolso total del 100% de tu dinero, sin complicaciones.'
                },
                {
                  question: '¿Necesito ingredientes especiales para la bebida?',
                  answer: '¡No! La bebida de Pise Bien es fácil de preparar en casa con instrucciones claras. No necesitas nada caro o difícil de conseguir.'
                },
                {
                  question: '¿La bebida es segura para todas las edades?',
                  answer: 'Sí, Pise Bien fue desarrollado por expertos y es seguro para la mayoría de las personas. Es una solución natural de bajo riesgo. Te recomendamos checar con un doctor si tienes condiciones especiales.'
                },
                {
                  question: '¿Cuánto tiempo tarda en verse resultados?',
                  answer: 'La mayoría de nuestros usuarios reporta alivio significativo del dolor en solo 7 días usando la bebida. Algunos sienten mejora desde los primeros días.'
                },
                {
                  question: '¿El acceso es de verdad de por vida por $90,00 MXN?',
                  answer: '¡Órale! Por solo $90,00 MXN, tienes acceso ilimitado y de por vida al programa completo. Sin mensualidades, costos extra ni trampas. Es un pago único.'
                },
                {
                  question: '¿Cómo recibo el material después de la compra?',
                  answer: 'Tras confirmar tu pago, recibes acceso inmediato al programa completo por correo electrónico. Todo el material está disponible en una plataforma en línea exclusiva.'
                },
                {
                  question: '¿Funciona para casos graves de fascitis plantar?',
                  answer: 'Pise Bien está diseñado para ayudar a personas con diferentes niveles de fascitis plantar. Muchos con casos graves han reportado mejoras chidas. Para casos muy cañones, recomendamos un chequeo médico a la par.'
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
      )}
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
      {/* Footer */}
      <footer className="py-12 px-4 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {[
              { text: 'Términos de Uso', onClick: () => showModal('terms') },
              { text: 'Política de Privacidad', onClick: () => showModal('privacy') },
              { text: 'Soporte', href: 'mailto:soporte@pisebien.com' },
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
            © 2025 Pise Bien - Todos los derechos reservados
          </p>
          <div className="text-center text-gray-200 text-xs leading-relaxed space-y-4 max-w-4xl mx-auto">
            <p>
              <strong>Aviso Legal:</strong> Los resultados pueden variar en cada persona. La información presentada forma parte de un enfoque natural orientado al alivio del dolor causado por la fascitis plantar, basado en conocimientos especializados. No sustituye la orientación médica profesional. Se recomienda consultar a un profesional de la salud antes de realizar cualquier cambio en la rutina. La efectividad puede depender del compromiso personal y de las características individuales de cada caso.
            </p>
            <p>
              <strong>Soporte:</strong> Nuestro equipo está disponible para aclarar dudas y ofrecer soporte técnico. Contáctanos a través de los canales oficiales listados arriba.
            </p>
          </div>
        </div>
      </footer>
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
                <p>Al adquirir Pise Bien, aceptas estos Términos de Uso. Si no estás de acuerdo con algún término, no utilices nuestros servicios.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">2. Descripción del Servicio</h3>
                <p>Pise Bien es un programa educativo de soluciones naturales para aliviar el dolor de la fascitis plantar, basado en métodos naturales. No constituye asesoramiento médico ni sustituye la consulta con profesionales de la salud.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">3. Garantía de 60 Días</h3>
                <p>Ofrecemos 60 días de acceso completo con garantía de reembolso. Para solicitarlo, contáctanos a través de los canales oficiales dentro del plazo establecido.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">4. Uso Adecuado</h3>
                <p>Te comprometes a usar el programa de manera responsable. Recomendamos encarecidamente consultar a un médico antes de iniciar cualquier programa, especialmente si tienes condiciones de salud preexistentes.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">5. Limitación de Responsabilidad</h3>
                <p>Pise Bien no garantiza resultados específicos. Los resultados pueden variar entre individuos. No nos responsabilizamos por reacciones derivadas del uso indebido de la bebida.</p>
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
                  <a href="mailto:soporte@pisebien.com" className="text-emerald-400 hover:underline">
                    soporte@pisebien.com
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

export default PiseBienLanding;
