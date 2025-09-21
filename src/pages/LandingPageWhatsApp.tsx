import React, { useState, useEffect } from 'react';
import '../index.css';

const SecaFacilLanding: React.FC = () => {
  const [modal, setModal] = useState<string | null>(null);
  const [showCta, setShowCta] = useState(false);

  // Delay in milliseconds for showing the Urgency Bar and CTA button (adjustable)
  const CTA_DELAY_MS = 30000;

  useEffect(() => {
    if (!document.querySelector('[src*="68d05dbb0450601628c9de09"]')) {
      const script = document.createElement('script');
      script.src = 'https://scripts.converteai.net/bddd3820-6eca-4c7d-898b-ece1995d6f03/players/68d05dbb0450601628c9de09/v4/player.js';
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
      setShowCta(true);
    }, CTA_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const showModal = (type: string) => {
    setModal(type);
  };

  const closeModal = () => {
    setModal(null);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <title>Seco Fácil</title>
      <meta
        name="description"
        content="Seco Fácil: Alivia el sudor excesivo en 7 días con un gel natural casero. Sin químicos, con garantía de 7 días. Solo $92,00 MXN de por vida."
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
      {showCta && (
        <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-red-600 to-red-500 text-white text-center font-bold py-3 px-4 z-50 shadow-lg animate-[slideDown_0.5s_ease-out]">
          <div className="flex items-center justify-center gap-2 text-sm md:text-base">
            <span className="animate-pulse">⚡</span>
            <span>¡Atención! ⏳ ¡Tu oferta exclusiva está a punto de expirar! • Solo $92,00 MXN</span>
            <span className="animate-pulse">⚡</span>
          </div>
        </div>
      )}
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-12 md:py-20 pt-16 md:pt-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8 md:mb-12 flex justify-center">
            <div className="w-full max-w-md md:max-w-lg lg:max-w-xl bg-gray-800 rounded-2xl p-2 shadow-2xl">
              <vturb-smartplayer
                id="vid-68d05dbb0450601628c9de09"
                style={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '400px' }}
              ></vturb-smartplayer>
              <script type="text/javascript">
                {`var s=document.createElement("script"); s.src="https://scripts.converteai.net/bddd3820-6eca-4c7d-898b-ece1995d6f03/players/68d05dbb0450601628c9de09/v4/player.js", s.async=!0,document.head.appendChild(s);`}
              </script>
            </div>
          </div>
          {showCta && (
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
      {/* Footer */}
      <footer className="py-12 px-4 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {[
              { text: 'Términos de Uso', onClick: () => showModal('terms') },
              { text: 'Política de Privacidad', onClick: () => showModal('privacy') },
              { text: 'Soporte', href: 'mailto:soporte@seco-facil.com' },
              { text: 'Contacto', href: 'https://wa.me/52YOURNUMBER' }
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
            © 2025 Seco Fácil - Todos los derechos reservados
          </p>
          <div className="text-center text-gray-200 text-xs leading-relaxed space-y-4 max-w-4xl mx-auto">
            <p>
              <strong>Aviso Legal:</strong> Los resultados pueden variar individualmente. Seco Fácil es un programa de soluciones naturales para aliviar el sudor excesivo, desarrollado con base en conocimiento especializado. Este producto no sustituye el acompañamiento médico. Consulta a un profesional de la salud antes de iniciar cualquier programa. El éxito del programa depende de la dedicación individual y de factores específicos de cada caso.
            </p>
            <p>
              <strong>Garantía:</strong> Ofrecemos 7 días de acceso completo con garantía incondicional de reembolso. Si no estás satisfecho, solicita reembolso total dentro del plazo. Pago único de $92,00 MXN, sin mensualidades ni costos adicionales.
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
                <p>Al adquirir Seco Fácil, aceptas estos Términos de Uso. Si no estás de acuerdo con algún término, no utilices nuestros servicios.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">2. Descripción del Servicio</h3>
                <p>Seco Fácil es un programa educativo de soluciones naturales para aliviar el sudor excesivo, basado en métodos naturales. No constituye asesoramiento médico ni sustituye la consulta con profesionales de la salud.</p>
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
                <p>Seco Fácil no garantiza resultados específicos. Los resultados pueden variar entre individuos. No nos responsabilizamos por reacciones derivadas del uso indebido del gel.</p>
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
                  <a href="mailto:soporte@seco-facil.com" className="text-emerald-400 hover:underline">
                    soporte@seco-facil.com
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
