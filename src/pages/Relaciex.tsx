import React, { useState, useEffect } from 'react';
import '../index.css';
interface PurchaseNotification {
  id: number;
  name: string;
  city: string;
  plan: string;
  show: boolean;
}
const Relaciex: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [modal, setModal] = useState<string | null>(null);
  const [spots, setSpots] = useState(37);
  const [showOffer, setShowOffer] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState<PurchaseNotification[]>([]);
  const purchaseData = [
    { name: 'Rafael C.', city: 'São Paulo', plan: 'Pro' },
    { name: 'Lucas M.', city: 'Rio de Janeiro', plan: 'Premium' },
    { name: 'Pedro S.', city: 'Curitiba', plan: 'Básico' },
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
    }, 10000); // Reduce cada 10 segundos
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
    if (!document.querySelector('[src*="68c26a722bd23f68cfa22f20"]')) {
      const script = document.createElement('script');
      script.src = 'https://scripts.converteai.net/ec09afc3-b6c2-4de5-b556-85edb9ced296/players/68c26a722bd23f68cfa22f20/v4/player.js';
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
      return () => {
        document.head.removeChild(script);
        document.head.removeChild(pixelScript1);
        document.head.removeChild(pixelScript2);
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
      {/* Animación de fondo */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black z-[-1]">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_30%_40%,rgba(0,255,136,0.08)_0%,transparent_60%),radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.06)_0%,transparent_60%)] animate-pulse" />
      </div>
      {/* Barra de urgencia (visible solo en la sección de precios) */}
      {showOffer && (
        <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-red-600 to-red-500 text-white text-center font-bold py-3 px-4 z-50 shadow-lg animate-[slideDown_0.5s_ease-out]">
          <div className="flex items-center justify-center gap-2 text-sm md:text-base">
            <span className="animate-pulse">⚡</span>
            <span>OFERTA LIMITADA: 50% OFF • Solo quedan <span className="bg-white text-red-600 px-2 py-1 rounded-full font-black">{spots}</span> plazas</span>
            <span className="animate-pulse">⚡</span>
          </div>
        </div>
      )}
      {/* Sección Hero */}
      <section className="min-h-screen flex items-center justify-center px-4 py-12 md:py-20 pt-16 md:pt-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full font-semibold text-black mb-6 md:mb-8 text-sm md:text-base shadow-lg">
            <span className="animate-bounce">🔥</span>
            NUEVA TECNOLOGÍA IA 2025
          </div>
          <h1 className="text-[clamp(28px,6vw,64px)] font-black leading-tight mb-5 bg-gradient-to-r from-white to-[#00FF88] bg-clip-text text-transparent overflow-visible whitespace-normal">
            ¿No sabes qué decir para conquistarla? La IA habla por ti...
          </h1>
          <p className="text-[clamp(16px,2.5vw,20px)] text-[#B0B0B0] mb-10 max-w-[600px] mx-auto">
            La <span className="text-[#00FF88] font-bold">Inteligencia Artificial</span> que analiza tus conversaciones y te dice{' '}
            <span className="text-[#00FF88] font-bold">exactamente</span> qué responder para despertar interés y concretar citas reales
          </p>
          <div className="mb-8 md:mb-12 flex justify-center">
            <div className="w-full max-w-md md:max-w-lg lg:max-w-xl bg-gray-800 rounded-2xl p-2 shadow-2xl">
              <vturb-smartplayer
                id="vid-68c26a722bd23f68cfa22f20"
                style={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '400px', borderRadius: '12px' }}
              ></vturb-smartplayer>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12 max-w-2xl mx-auto">
            {[
              { number: '94%', label: 'Tasa de Respuesta' },
              { number: '5.2x', label: 'Más Citas' },
              { number: '3.124', label: 'Usuarios Activos' }
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
              <span>QUIERO RESULTADOS AHORA</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <p className="text-sm text-gray-400 flex items-center justify-center gap-2 flex-wrap">
              <span>✅</span> Prueba GRATIS por 7 días
              <span>•</span>
              <span>✅</span> Acceso inmediato vía WhatsApp
            </p>
          </div>
        </div>
      </section>
      {/* Cómo Funciona - WhatsApp */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              <span className="text-green-400">WhatsApp</span> - Simple y Rápido
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Sin aplicaciones complicadas. Todo funciona directamente en tu WhatsApp
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: '📱',
                title: '1. Añade el Número',
                desc: 'Guarda nuestro WhatsApp y envía "COMENZAR" para activar',
                color: 'from-blue-400 to-blue-500'
              },
              {
                icon: '📸',
                title: '2. Envía la Captura',
                desc: 'Toma una captura de la conversación y envíala para análisis de la IA',
                color: 'from-purple-400 to-purple-500'
              },
              {
                icon: '⚡',
                title: '3. IA Analiza (30s)',
                desc: 'Recibe 3 opciones de respuesta personalizadas',
                color: 'from-yellow-400 to-orange-400'
              },
              {
                icon: '🔥',
                title: '4. Copia y Conquista',
                desc: 'Elige la mejor respuesta y ve los resultados',
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
              ¡Todo por WhatsApp, Cero Complicaciones!
            </div>
            <p className="text-gray-300 mb-6 md:mb-8 text-lg">
              Sin descargas, sin inicios de sesión. ¡Solo añade y comienza a conquistar!
            </p>
            <a
              href="#pricing"
              className="inline-flex items-center gap-3 px-8 md:px-12 py-4 bg-gradient-to-r from-green-400 to-green-500 text-black font-bold text-lg rounded-full shadow-2xl hover:-translate-y-1 transition-all"
            >
              <span>🚀</span>
              ACTIVAR AHORA EN WHATSAPP
            </a>
          </div>
        </div>
      </section>
      {/* Sección Demo */}
      <section className="py-16 md:py-24 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-12 md:mb-16">
            Mira la Transformación en la Práctica
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                step: '😰',
                title: 'ANTES: Conversación Estancada',
                messages: [
                  { type: 'other', text: '¡Hola! Vi que también te gusta hacer senderismo 😊' },
                  { type: 'user', text: '¡Hola! Sí, me encanta! Y a ti...' },
                  { type: 'other', text: '¡Hice la ruta de Pedra Bonita la semana pasada! 🏔️' },
                  { type: 'center', text: '🤔 "¿Y ahora? ¿Qué responder?"', className: 'text-gray-400 italic' },
                ],
                bgColor: 'from-red-900/20 to-red-800/20',
                borderColor: 'border-red-500/30'
              },
              {
                step: '🤖',
                title: 'NUESTRA IA ANALIZANDO',
                messages: [
                  {
                    type: 'ai',
                    html: '<div class="bg-emerald-500/20 p-4 rounded-lg border border-emerald-400/30"><strong class="text-emerald-400">💡 IA Detectó:</strong><br/>• Interés genuino de ella<br/>• Oportunidad de conexión<br/>• Momento ideal para crear misterio</div>',
                  },
                  {
                    type: 'ai',
                    html: '<div class="bg-blue-500/20 p-4 rounded-lg border border-blue-400/30"><strong class="text-blue-400">✨ Respuesta Sugerida:</strong><br/>"¡Pedra Bonita es increíble! ¿Fuiste al amanecer o al atardecer? Tengo una teoría sobre cuál es el mejor momento... 😏"</div>',
                  },
                ],
                bgColor: 'from-emerald-900/20 to-blue-900/20',
                borderColor: 'border-emerald-500/50'
              },
              {
                step: '🔥',
                title: 'DESPUÉS: Resultado Inmediato',
                messages: [
                  {
                    type: 'user',
                    text: '¡Pedra Bonita es increíble! ¿Fuiste al amanecer o al atardecer? Tengo una teoría sobre cuál es el mejor momento... 😏',
                  },
                  { type: 'other', text: 'Jajaja, ¡ahora estoy intrigada! Fui al atardecer... ¿cuál es tu teoría? 👀' },
                  { type: 'other', text: 'Parece que conoces los mejores lugares...' },
                  { type: 'center', text: '✅ ¡Conversación fluyendo perfectamente!', className: 'text-emerald-400 font-bold' },
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
      {/* Sección Características */}
      <section className="py-16 md:py-24 px-4 bg-black/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-12 md:mb-16">
            Funciones que Garantizan Resultados
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: '🎯',
                title: 'Análisis de Perfil IA',
                desc: 'Analiza su biografía y crea el mensaje inicial perfecto basado en intereses mutuos',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                icon: '💬',
                title: 'Revive Conversaciones',
                desc: 'Transforma matches inactivos en conversaciones activas con mensajes irresistibles',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                icon: '🔥',
                title: 'Escalada Inteligente',
                desc: 'Aumenta la tensión romántica de forma natural, sin parecer desesperado o invasivo',
                gradient: 'from-orange-500 to-red-500'
              },
              {
                icon: '📊',
                title: 'Detector de Interés',
                desc: 'Identifica si ella está realmente interesada o solo está siendo educada',
                gradient: 'from-green-500 to-emerald-500'
              },
              {
                icon: '⏰',
                title: 'Timing Perfecto',
                desc: 'Te avisa el momento exacto para pedir su número o invitarla a salir',
                gradient: 'from-yellow-500 to-orange-500'
              },
              {
                icon: '🎭',
                title: 'Personalidad Única',
                desc: 'Mantiene tu estilo auténtico mientras optimiza para obtener los mejores resultados',
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
      {/* Testimonios */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-gray-900/50 to-black/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-12 md:mb-16">
            Resultados Comprobados
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                text: '¡Las sugerencias de la IA son increíbles! Mis conversaciones ahora fluyen naturalmente y tengo muchas más citas programadas.',
                author: 'Rafael C.',
                location: 'São Paulo • 28 años',
                initials: 'RC',
                rating: 5
              },
              {
                text: 'Soy introvertido y siempre me trababa. Con la IA, puedo expresarme mejor y las chicas responden mucho más.',
                author: 'Lucas M.',
                location: 'Rio de Janeiro • 24 años',
                initials: 'LM',
                rating: 5
              },
              {
                text: '¡El detector de interés cambió mi vida! Dejo de perder el tiempo y me concentro en las que realmente quieren conocerme.',
                author: 'Thiago H.',
                location: 'Belo Horizonte • 31 años',
                initials: 'TH',
                rating: 5
              },
              {
                text: 'Tenía matches parados durante meses. La IA me ayudó a reactivar varias conversaciones y ya salí con 3 de ellas.',
                author: 'Pedro S.',
                location: 'Curitiba • 26 años',
                initials: 'PS',
                rating: 5
              },
              {
                text: 'Estaba escéptico, pero realmente funciona. La IA entiende el contexto y sugiere respuestas que tienen total sentido.',
                author: 'André F.',
                location: 'Porto Alegre • 29 años',
                initials: 'AF',
                rating: 5
              },
              {
                text: 'Es como tener un compañero experto 24/7. Los consejos son prácticos y me ayudan a mantener conversaciones interesantes.',
                author: 'Gabriel B.',
                location: 'Brasília • 27 años',
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
      {/* Comparación */}
      <section className="py-16 md:py-24 px-4 bg-black/80">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-12 md:mb-16">
            Por Qué Somos Diferentes
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: '❌ Otros Métodos',
                items: [
                  'Teoría genérica que no funciona',
                  'Tarda semanas en ver resultados',
                  'Cuesta más de $2000 en promedio',
                  'Te deja con dudas en el momento clave',
                  'Métodos anticuados'
                ],
                bgColor: 'from-red-900/30 to-red-800/20',
                borderColor: 'border-red-500/30'
              },
              {
                title: '✅ MandaEssa.ai',
                items: [
                  'IA analiza TU conversación específica',
                  'Respuesta en 30 segundos',
                  'Desde $9,80/mes',
                  'Sugerencias en tiempo real',
                  'Tecnología de vanguardia'
                ],
                bgColor: 'from-emerald-900/30 to-emerald-800/20',
                borderColor: 'border-emerald-500',
                highlight: true
              },
              {
                title: '❌ Plantillas Listas',
                items: [
                  'Todos usan las mismas',
                  'No se adaptan al contexto',
                  'Parecen robóticas y falsas',
                  'Ellas notan que es copiar/pegar',
                  'Cero personalización'
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
      {/* Sección Prueba Gratis */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-emerald-900/30 via-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-800/60 backdrop-blur-sm p-8 md:p-12 rounded-3xl border-2 border-emerald-500 shadow-2xl shadow-emerald-500/20">
            <div className="text-5xl md:text-6xl mb-6 animate-bounce">🎁</div>
            <h2 className="text-3xl md:text-5xl font-black text-emerald-400 mb-6">
              Prueba GRATIS por 7 Días
            </h2>
            <p className="text-xl md:text-2xl font-bold mb-4">
              Experimenta TODO sin pagar nada
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Usa nuestra IA durante 7 días completos y ve los resultados. Si no mejora tus conversaciones y consigues más citas,
              no pagas nada y recibes el 100% de tu dinero de vuelta.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8 mb-8">
              {[
                { text: '7 DÍAS', subtitle: 'Gratis' },
                { text: '100%', subtitle: 'Garantía' },
                { text: '0', subtitle: 'Riesgo' },
                { text: '24/7', subtitle: 'Soporte' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-4xl font-black text-emerald-400 mb-1">{item.text}</div>
                  <div className="text-gray-400 text-sm">{item.subtitle}</div>
                </div>
              ))}
            </div>
            <div className="bg-emerald-500/10 border border-emerald-400/30 rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-bold text-emerald-400 mb-4">Cómo funciona la prueba gratis:</h3>
              <div className="text-left space-y-2 max-w-2xl mx-auto">
                <p className="text-gray-300">✅ Activa tu cuenta y úsala durante 7 días completos</p>
                <p className="text-gray-300">✅ Prueba TODAS las funciones premium</p>
                <p className="text-gray-300">✅ ¿No te gusta? Cancela y no pagues nada</p>
                <p className="text-gray-300">✅ ¿Te gusta? Continúa con un descuento especial</p>
              </div>
            </div>
            <a
              href="#pricing"
              className="inline-flex items-center gap-3 px-10 md:px-14 py-5 md:py-6 bg-gradient-to-r from-emerald-400 to-emerald-500 text-black font-bold text-xl rounded-full shadow-2xl hover:shadow-emerald-400/25 hover:-translate-y-1 transition-all duration-300"
            >
              <span>🚀</span>
              COMENZAR PRUEBA GRATIS
            </a>
          </div>
        </div>
      </section>
      {/* Precios */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-gray-900/50 to-black" id="pricing">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-12 md:mb-16">
            Elige Tu Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {[
              {
                name: 'Básico',
                price: 'US$ 9,80',
                period: '/mes',
                features: [
                  '20 análisis por mes',
                  'Sugerencias básicas de respuesta',
                  'Detector de interés',
                  'Soporte vía WhatsApp',
                  'Actualizaciones mensuales'
                ],
                link: 'https://pay.hotmart.com/V101744430X?off=1xkq9czk',
                button: 'COMENZAR PRUEBA GRATIS',
                popular: false
              },
              {
                name: 'Pro',
                price: 'US$ 19,00',
                period: '/mes',
                features: [
                  '50 análisis por mes',
                  'Modo Escalada activado',
                  'Reactivador de matches',
                  'Análisis de perfil avanzado',
                  'Plantillas exclusivas',
                  'Soporte prioritario 24/7'
                ],
                link: 'https://pay.hotmart.com/V101744430X?off=1t2jrzuz',
                button: 'PRUEBA GRATIS PRO',
                popular: true
              },
              {
                name: 'Premium',
                price: 'US$ 57,00',
                period: '/mes',
                features: [
                  'Análisis ILIMITADOS',
                  'Todas las funciones Pro',
                  'IA personalizada para tu perfil',
                  'Modo Experto activado',
                  'Consultoría 1-1 mensual',
                  'Grupo VIP exclusivo'
                ],
                link: 'https://pay.hotmart.com/V101744430X?off=gryzc77a',
                button: 'PRUEBA PREMIUM GRATIS',
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
                      MÁS ELEGIDO
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-emerald-400 mb-2">{plan.name}</h3>
                  <div className="text-4xl md:text-5xl font-black mb-1">
                    {plan.price}
                    <span className="text-base text-gray-400 font-normal">{plan.period}</span>
                  </div>
                  <p className="text-sm text-emerald-400 font-semibold">7 días gratis, luego {plan.price}/mes</p>
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
                  Cancela en cualquier momento durante la prueba
                </p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <div className="bg-emerald-500/10 border-2 border-emerald-400 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
              <h3 className="text-xl md:text-2xl font-bold text-emerald-400 mb-4">
                💡 ¿Por qué ofrecemos una prueba gratis?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Porque estamos seguros de que nuestra IA transformará tus conversaciones.
                ¡En 7 días verás la diferencia y no querrás cancelar!
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Estadísticas de Prueba Social */}
      <section className="py-16 px-4 bg-emerald-500/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 text-center">
            {[
              { number: '3.124', label: 'Usuarios Activos' },
              { number: '52.847', label: 'Conversaciones Guardadas' },
              { number: '94%', label: 'Tasa de Éxito' },
              { number: '4.9⭐', label: 'Evaluación Promedio' },
              { number: '24/7', label: 'Disponible' },
              { number: '30s', label: 'Tiempo de Respuesta' }
            ].map((stat, index) => (
              <div key={index} className="p-4">
                <div className="text-3xl md:text-4xl font-black text-emerald-400 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Preguntas Frecuentes */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-12 md:mb-16">
            Preguntas Frecuentes
          </h2>
          <div className="space-y-4">
            {[
              {
                question: '¿Cómo funciona la prueba gratis de 7 días?',
                answer: '¡Simple! Te registras, eliges tu plan y usas TODAS las funciones durante 7 días completos sin pagar nada. Si no te gusta, cancela antes de los 7 días y no se te cobrará. Si continúas, el plan se activará automáticamente con un descuento especial.'
              },
              {
                question: '¿Es realmente una IA o son personas respondiendo?',
                answer: '100% Inteligencia Artificial avanzada, entrenada con millones de conversaciones exitosas. Funciona 24/7 al instante, analizando contexto, tono y timing para crear respuestas personalizadas en segundos.'
              },
              {
                question: '¿Cómo funciona el proceso completo?',
                answer: 'Tomas una captura de la conversación en la aplicación de citas, la envías a nuestro WhatsApp y en menos de 30 segundos recibes varias sugerencias de respuesta con una explicación detallada de por qué funcionan.'
              },
              {
                question: '¿Funciona para todas las plataformas?',
                answer: '¡Sí! Nuestra IA analiza conversaciones de cualquier plataforma: Tinder, Bumble, Happn, WhatsApp, Instagram, Telegram. Si es una conversación con interés romántico, nuestra IA te ayuda a conquistar.'
              },
              {
                question: '¿Pareceré falso usando las respuestas sugeridas?',
                answer: '¡No! La IA aprende tu estilo natural de conversación y adapta las sugerencias para que suenen auténticas. También puedes personalizarlas antes de enviarlas. Es como tener un amigo experto que te orienta.'
              },
              {
                question: '¿Y si no funciona para mí?',
                answer: 'Durante los 7 días de prueba gratis, puedes cancelar sin pagar nada. Después de eso, tenemos un 97% de satisfacción: la mayoría renueva porque los resultados son reales. Pero siempre puedes cancelar cuando quieras.'
              },
              {
                question: '¿Cuánto tiempo se tarda en ver los primeros resultados?',
                answer: '¡En la primera conversación ya notas la diferencia! La mayoría reporta una mejora significativa el primer día. Con una semana de uso, dominarás completamente las conversaciones.'
              },
              {
                question: '¿Necesito instalar alguna aplicación?',
                answer: '¡No! Funciona 100% por WhatsApp. Añades nuestro número, activas tu cuenta y ya puedes empezar a enviar capturas para recibir sugerencias inteligentes.'
              },
              {
                question: '¿Puedo cancelar en cualquier momento?',
                answer: '¡Sí! Durante la prueba gratis de 7 días, cancela sin pagar nada. Después, puedes cancelar en cualquier momento directamente por WhatsApp, sin burocracia ni tasas de cancelación.'
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
      {/* Llamada a la Acción Final */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-emerald-900/30 via-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Deja de Perder Oportunidades<br />
            <span className="text-emerald-400">Comienza Tu Prueba Gratis Hoy</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
            Únete a más de 3.000 hombres que transformaron sus vidas amorosas con nuestra IA
          </p>
          <div className="bg-emerald-500/10 border-2 border-emerald-400 rounded-3xl p-6 md:p-8 mb-10 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="animate-pulse text-xl">🎁</span>
              <h3 className="text-xl md:text-2xl font-bold text-emerald-400">BONUS EXCLUSIVO EN LA PRUEBA GRATIS</h3>
              <span className="animate-pulse text-xl">🎁</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
              {[
                '✅ E-book "100 Aperturas Irresistibles"',
                '✅ Acceso al Grupo VIP de Telegram',
                '✅ Soporte prioritario 24/7',
                '✅ Análisis ilimitados durante la prueba'
              ].map((bonus, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-200">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>{bonus}</span>
                </div>
              ))}
            </div>
          </div>
          <a
            href="https://pay.hotmart.com/V101744430X?off=1t2jrzuz"
            className="inline-flex items-center gap-4 px-12 md:px-16 py-5 md:py-6 bg-gradient-to-r from-emerald-400 to-emerald-500 text-black font-bold text-xl md:text-2xl rounded-full shadow-2xl hover:shadow-emerald-400/25 hover:-translate-y-2 transition-all duration-300 mb-6"
          >
            <span className="animate-pulse">🚀</span>
            COMENZAR PRUEBA GRATIS AHORA
            <span>→</span>
          </a>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-400 flex-wrap">
            <span className="flex items-center gap-1">
              <span>🎁</span> 7 días gratis
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <span>🔒</span> Cancela cuando quieras
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <span>💬</span> Todo vía WhatsApp
            </span>
          </div>
        </div>
      </section>
      {/* Pie de Página */}
      <footer className="py-12 px-4 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {[
              { text: 'Términos de Uso', onClick: () => showModal('terms') },
              { text: 'Política de Privacidad', onClick: () => showModal('privacy') },
              { text: 'Soporte', href: 'mailto:soporte@mandaessa.ai' },
              { text: 'Contacto', href: 'https://wa.me/558588395773' }
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
            © 2025 MandaEssa.ai - Todos los derechos reservados
          </p>
          <div className="text-center text-gray-600 text-xs leading-relaxed space-y-4 max-w-4xl mx-auto">
            <p>
              <strong>Aviso Legal:</strong> Los resultados pueden variar individualmente. MandaEssa.ai es una herramienta
              de asistencia para la comunicación que ofrece sugerencias basadas en IA para mejorar las habilidades de conversación.
              El éxito depende de varios factores, incluyendo tu perfil, fotos y compatibilidad. Úsala siempre de manera
              ética y respetuosa.
            </p>
            <p>
              <strong>Prueba Gratis:</strong> 7 días de acceso completo sin costo. Cancela antes del final para no ser cobrado.
              Después de la prueba, renovación automática según el plan elegido. Cancela en cualquier momento.
            </p>
            <p className="text-gray-700">
              Este sitio no está afiliado a Facebook, Instagram, WhatsApp ni ninguna plataforma de citas mencionada.
              Todas las marcas pertenecen a sus respectivos propietarios.
            </p>
          </div>
        </div>
      </footer>
      {/* Botón Flotante de WhatsApp */}
      <a
        href="https://wa.me/558588395773?text=Quiero%20saber%20m%C3%A1s%20sobre%20la%20prueba%20gratis%20de%20MandaEssa.ai"
        className="fixed bottom-6 right-6 bg-gradient-to-r from-green-400 to-green-500 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white text-2xl md:text-3xl shadow-2xl hover:scale-110 transition-all duration-300 z-50 animate-pulse"
      >
        💬
      </a>
      {/* Notificaciones de Compra */}
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
                  Activó el plan {notification.plan}
                </p>
              </div>
              <div className="text-xs text-gray-400">
                ahora
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Modales */}
      {modal === 'terms' && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] overflow-y-auto p-4">
          <div className="max-w-4xl mx-auto my-8 bg-gray-900 rounded-3xl border border-gray-700 shadow-2xl">
            <div className="flex justify-between items-center p-6 border-b border-gray-700">
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-400">Términos de Uso</h2>
              <button
                className="text-gray-400 hover:text-white text-3xl"
                onClick={closeModal}
              >
                ×
              </button>
            </div>
            <div className="p-6 text-gray-300 leading-relaxed space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">1. Aceptación de los Términos</h3>
                <p>Al usar MandaEssa.ai, aceptas estos Términos de Uso. Si no estás de acuerdo, no utilices nuestros servicios.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">2. Descripción del Servicio</h3>
                <p>MandaEssa.ai es un servicio de IA que proporciona sugerencias de conversación para mejorar las habilidades de comunicación en contextos románticos.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">3. Prueba Gratis</h3>
                <p>Ofrecemos 7 días de prueba gratuita con acceso completo. Después del período, se cobra automáticamente según el plan elegido. Cancela en cualquier momento.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">4. Uso Apropiado</h3>
                <p>Te comprometes a usar el servicio de manera ética y respetuosa. Está prohibido usarlo para:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Acoso o comportamiento inapropiado</li>
                  <li>Engañar o manipular a otras personas</li>
                  <li>Violar leyes locales o derechos de terceros</li>
                  <li>Compartir contenido ofensivo o ilegal</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">5. Privacidad y Datos</h3>
                <p>Respetamos tu privacidad. No almacenamos conversaciones personales. Las capturas enviadas se procesan y eliminan automáticamente.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">6. Limitación de Responsabilidad</h3>
                <p>MandaEssa.ai no se responsabiliza por resultados específicos ni por el uso indebido del servicio. El éxito depende de factores individuales.</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {modal === 'privacy' && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] overflow-y-auto p-4">
          <div className="max-w-4xl mx-auto my-8 bg-gray-900 rounded-3xl border border-gray-700 shadow-2xl">
            <div className="flex justify-between items-center p-6 border-b border-gray-700">
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-400">Política de Privacidad</h2>
              <button
                className="text-gray-400 hover:text-white text-3xl"
                onClick={closeModal}
              >
                ×
              </button>
            </div>
            <div className="p-6 text-gray-300 leading-relaxed space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">1. Recopilación de Datos</h3>
                <p>Recolectamos solo los datos necesarios para proporcionar el servicio, como capturas de conversaciones enviadas por el usuario, que se procesan y eliminan automáticamente.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">2. Uso de los Datos</h3>
                <p>Los datos se usan exclusivamente para generar sugerencias de respuestas y mejorar el servicio. No compartimos tus datos con terceros.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">3. Seguridad</h3>
                <p>Empleamos medidas de seguridad robustas para proteger tus datos durante el procesamiento. Todas las interacciones están encriptadas.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">4. Tus Derechos</h3>
                <p>Tienes derecho a acceder, corregir o solicitar la eliminación de tus datos en cualquier momento.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">5. Contacto</h3>
                <p>
                  Para dudas sobre privacidad, contáctanos a través de{' '}
                  <a href="mailto:soporte@mandaessa.ai" className="text-emerald-400 hover:underline">
                    soporte@mandaessa.ai
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
export default Relaciex;
