import React, { useState, useEffect } from 'react';

// Componente principal del sitio
const ProtocoleSite = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [showButton, setShowButton] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  // Configura la fecha actual en formato español
  useEffect(() => {
    const fecha = new Date();
    const opciones = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    };
    const fechaFormateada = fecha.toLocaleDateString('es-MX', opciones);
    setCurrentDate(fechaFormateada);

    // Retraso de 1 hora (3600000ms) para mostrar el botón
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 3600000); // 1 hora

    return () => clearTimeout(timer);
  }, []);

  // Carga el Meta Pixel
  useEffect(() => {
    // Meta Pixel Code - Pixel 1
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    
    // Inicializa los dos pixels
    window.fbq('init', '1093258939518583');
    window.fbq('init', '1351918292572124');
    
    // Dispara PageView para ambos
    window.fbq('track', 'PageView');

    // Añade las imágenes noscript al body para ambos pixels
    const noscriptImg1 = document.createElement('img');
    noscriptImg1.height = 1;
    noscriptImg1.width = 1;
    noscriptImg1.style.display = 'none';
    noscriptImg1.src = 'https://www.facebook.com/tr?id=1093258939518583&ev=PageView&noscript=1';
    document.body.appendChild(noscriptImg1);

    const noscriptImg2 = document.createElement('img');
    noscriptImg2.height = 1;
    noscriptImg2.width = 1;
    noscriptImg2.style.display = 'none';
    noscriptImg2.src = 'https://www.facebook.com/tr?id=1351918292572124&ev=PageView&noscript=1';
    document.body.appendChild(noscriptImg2);

    return () => {
      // Cleanup si es necesario
      const existingImgs = document.querySelectorAll('img[src*="facebook.com/tr"]');
      existingImgs.forEach(img => img.remove());
    };
  }, []);

  // Carga el script del video VTurb
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://scripts.converteai.net/ec09afc3-b6c2-4de5-b556-85edb9ced296/players/68b935d8e2667294be3e9392/v4/player.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src*="68b935d8e2667294be3e9392"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  // Componente Modal
  const Modal = ({ show, onClose, title, children }) => {
    if (!show) return null;

    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '20px'
      }}>
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          maxWidth: '800px',
          width: '100%',
          maxHeight: '90vh',
          overflow: 'hidden',
          position: 'relative'
        }}>
          <div style={{
            padding: '20px',
            borderBottom: '1px solid #e5e5e5',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 'bold' }}>{title}</h2>
            <button 
              onClick={onClose}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                padding: '0',
                width: '30px',
                height: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              ×
            </button>
          </div>
          <div style={{
            padding: '20px',
            maxHeight: 'calc(90vh - 80px)',
            overflowY: 'auto',
            fontSize: '14px',
            lineHeight: '1.6'
          }}>
            {children}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#ffffff' }}>
      
      {/* Header con mensaje de fecha */}
      <div style={{ backgroundColor: '#171717', color: '#ffffff' }} className="py-4 text-center">
        <span className="text-sm">
          Debido a la alta demanda de acceso, garantizamos la presentación hasta hoy {currentDate}
        </span>
      </div>

      {/* Sección del video principal - fondo blanco */}
      <div style={{ backgroundColor: '#ffffff' }} className="py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Player de video VTurb */}
          <div 
            className="w-full flex justify-center mb-8"
            dangerouslySetInnerHTML={{
              __html: `
                <vturb-smartplayer 
                  id="vid-68b935d8e2667294be3e9392" 
                  style="display: block; margin: 0 auto; width: 100%; max-width: 400px;">
                </vturb-smartplayer>
              `
            }}
          />

          {/* Primera imagen - medical-3.png */}
          <div className="w-full flex justify-center mb-8">
            <img 
              src="https://tea.global-academia.com/wp-content/uploads/2024/11/medical-3.png" 
              alt="Imagen Médica"
              className="max-w-full h-auto"
              style={{ maxWidth: '600px' }}
            />
          </div>

          {/* Segunda imagen - KHzQbW6336022.png */}
          <div className="w-full flex justify-center mb-8">
            <img 
              src="https://media.atomicatpages.net/u/q4DGiTkDOlYWpXXoLEQFHmAp5132/Pictures/KHzQbW6336022.png" 
              alt="Imagen Adicional"
              className="max-w-full h-auto"
              style={{ maxWidth: '600px' }}
            />
          </div>
        </div>
      </div>

      {/* Texto informativo */}
      <div className="text-center py-4" style={{ backgroundColor: '#ffffff' }}>
        <p style={{ color: '#171717' }}>Mira el video para desbloquear la receta.</p>
      </div>

      {/* Botón de acceso (aparece después del retraso de 1 hora) */}
      {showButton && (
        <div className="text-center py-8" style={{ backgroundColor: '#f0f2f5' }}>
          <div className="container mx-auto px-4">
            <a 
              href="https://hotmart.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors duration-300 shadow-lg"
              style={{ 
                backgroundColor: '#42b883',
                borderColor: '#42b883'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#369970'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#42b883'}
            >
              ACCEDER AL PROTOCOLO
            </a>
            <p className="text-sm mt-4" style={{ color: '#8a8d91' }}>
              Acceso liberado después de 1 hora de visualización
            </p>
          </div>
        </div>
      )}

      {/* Footer con disclaimers y políticas */}
      <footer style={{ backgroundColor: '#f0f2f5' }} className="py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-sm mb-6" style={{ color: '#8a8d91' }}>
            <p className="mb-4">
              En <strong>www.dreamvisionlp.online</strong>, todo el contenido e información es de nuestra 
              entera responsabilidad. Aclaramos que este sitio no tiene afiliación, patrocinio o 
              aprobación de Meta Platforms, Inc. <strong>Facebook e Instagram</strong>, que no es 
              responsable de nuestro contenido.
            </p>
            <p className="mb-4">
              La información aquí presentada se proporciona únicamente con fines educativos e informativos, 
              y no reemplaza los consejos, diagnósticos o tratamientos de un profesional de la salud 
              calificado. Nuestros productos no están destinados a diagnosticar, tratar, curar o prevenir 
              cualquier enfermedad o condición médica.
            </p>
            <p>
              Es importante recordar que los resultados pueden variar significativamente de persona a persona. 
              La decisión de aplicar la información o usar nuestros productos es de su entera responsabilidad. 
              Para cuestiones relacionadas con su salud, siempre consulte a un especialista.
            </p>
          </div>
          
          {/* Enlaces de políticas con popups */}
          <div className="flex flex-wrap gap-4 justify-center pt-4" style={{ borderTop: '1px solid #dadde1' }}>
            <button 
              onClick={() => setShowPrivacyModal(true)}
              className="hover:underline"
              style={{ 
                color: '#385898',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              Política de Privacidad
            </button>
            <button 
              onClick={() => setShowTermsModal(true)}
              className="hover:underline"
              style={{ 
                color: '#385898',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              Términos de Uso
            </button>
          </div>
        </div>
      </footer>

      {/* Modal de Política de Privacidad */}
      <Modal 
        show={showPrivacyModal} 
        onClose={() => setShowPrivacyModal(false)} 
        title="Política de Privacidad"
      >
        <div>
          <p style={{ marginBottom: '16px' }}>
            Bienvenido al sitio <strong>https://www.dreamvisionlp.online/</strong> (en adelante denominado "Sitio").
          </p>
          <p style={{ marginBottom: '16px' }}>
            La protección de sus datos personales es una prioridad para nosotros. Esta Política de Privacidad 
            describe cómo sus datos personales son recolectados, utilizados, compartidos y protegidos cuando 
            usted usa nuestros productos y servicios digitales, en conformidad con las leyes de protección de 
            datos aplicables.
          </p>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', marginTop: '20px' }}>
            1. Identificación y Datos de Contacto del Responsable
          </h3>
          <p style={{ marginBottom: '16px' }}>
            El responsable de los datos personales recolectados a través de este Sitio es: www.dreamvisionlp.online
          </p>
          <p style={{ marginBottom: '16px' }}>
            Para cualquier cuestión relacionada con esta Política de Privacidad o sus datos personales, 
            puede contactarnos a través de los datos de contacto arriba mencionados.
          </p>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', marginTop: '20px' }}>
            2. Datos Personales Recolectados
          </h3>
          <p style={{ marginBottom: '16px' }}>
            Recolectamos diferentes categorías de datos personales, de acuerdo con sus interacciones con nuestro Sitio y servicios:
          </p>
          
          <h4 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '8px' }}>
            2.1 Categorías de Datos Recolectados
          </h4>
          <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
            <li style={{ marginBottom: '4px' }}>Datos de identificación: nombre, apellido, dirección de correo electrónico, número de teléfono.</li>
            <li style={{ marginBottom: '4px' }}>Datos de conexión: dirección IP, tipo de navegador, sistema operativo, identificadores de sesión.</li>
            <li style={{ marginBottom: '4px' }}>Datos de transacción: información de pago (procesada por terceros seguros), historial de compras.</li>
            <li style={{ marginBottom: '4px' }}>Datos de navegación: páginas visitadas, clics, tiempo pasado en el Sitio.</li>
            <li style={{ marginBottom: '4px' }}>Datos de marketing: preferencias de comunicación, respuestas a campañas publicitarias.</li>
          </ul>

          <h4 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '8px' }}>
            2.2 Fuentes y Métodos de Recolección
          </h4>
          <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
            <li style={{ marginBottom: '4px' }}>Formularios: datos proporcionados durante inscripción, compra o contacto a través de nuestro Sitio.</li>
            <li style={{ marginBottom: '4px' }}>Cookies y tecnologías similares: datos recolectados automáticamente durante su navegación (ver Sección 8).</li>
            <li style={{ marginBottom: '4px' }}>Terceros: datos obtenidos a través de socios o plataformas publicitarias (con su consentimiento previo).</li>
          </ul>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', marginTop: '20px' }}>
            3. Finalidades y Bases Legales del Tratamiento
          </h3>
          <p style={{ marginBottom: '16px' }}>
            Sus datos personales son tratados para las siguientes finalidades, conforme a las bases legales definidas por la legislación aplicable.
          </p>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', marginTop: '20px' }}>
            4. Destinatarios de los Datos Personales
          </h3>
          <p style={{ marginBottom: '16px' }}>
            Sus datos personales pueden ser compartidos con las siguientes categorías de destinatarios:
          </p>
          <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
            <li style={{ marginBottom: '4px' }}>Proveedores de servicios terceros: alojamiento, procesamiento de pagos, herramientas de análisis, plataformas de marketing.</li>
            <li style={{ marginBottom: '4px' }}>Socios comerciales: solo con su consentimiento explícito.</li>
            <li style={{ marginBottom: '4px' }}>Autoridades competentes: en caso de obligación legal o para proteger nuestros derechos.</li>
          </ul>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', marginTop: '20px' }}>
            5. Plazo de Conservación de los Datos
          </h3>
          <p style={{ marginBottom: '16px' }}>
            Conservamos sus datos personales solo por el tiempo necesario para las finalidades descritas arriba, 
            o conforme a las exigencias legales. Por ejemplo:
          </p>
          <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
            <li style={{ marginBottom: '4px' }}>Datos de transacción: conservados por 10 años para obligaciones contables.</li>
            <li style={{ marginBottom: '4px' }}>Datos de marketing: conservados hasta que retire su consentimiento.</li>
            <li style={{ marginBottom: '4px' }}>Datos de navegación: conservados por máximo 13 meses (ver Sección 8 sobre cookies).</li>
          </ul>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', marginTop: '20px' }}>
            6. Derechos de los Titulares de los Datos
          </h3>
          <p style={{ marginBottom: '16px' }}>
            Conforme a la legislación aplicable, usted posee los siguientes derechos relacionados con sus datos personales:
          </p>
          <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
            <li style={{ marginBottom: '4px' }}>Derecho de acceso: obtener una copia de sus datos personales.</li>
            <li style={{ marginBottom: '4px' }}>Derecho de rectificación: corregir datos inexactos o incompletos.</li>
            <li style={{ marginBottom: '4px' }}>Derecho de eliminación: solicitar la eliminación de sus datos (bajo ciertas condiciones).</li>
            <li style={{ marginBottom: '4px' }}>Derecho de limitación: restringir el tratamiento de sus datos.</li>
            <li style={{ marginBottom: '4px' }}>Derecho de portabilidad: recibir sus datos en formato estructurado y legible por máquina.</li>
            <li style={{ marginBottom: '4px' }}>Derecho de oposición: oponerse al tratamiento de sus datos por motivos legítimos o para fines de marketing.</li>
            <li style={{ marginBottom: '4px' }}>Derecho de retirar su consentimiento: en cualquier momento, para tratamientos basados en su consentimiento.</li>
          </ul>
          <p style={{ marginBottom: '16px' }}>
            Para ejercer sus derechos, contáctenos en: <strong>contacto@dreamvisionlp.online</strong>. 
            Usted también tiene derecho a presentar una reclamación ante la autoridad de protección de datos correspondiente.
          </p>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', marginTop: '20px' }}>
            7. Medidas de Seguridad
          </h3>
          <p style={{ marginBottom: '16px' }}>
            Implementamos medidas técnicas y organizacionales para proteger sus datos personales contra 
            acceso no autorizado, pérdida, alteración o divulgación. Estas medidas incluyen:
          </p>
          <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
            <li style={{ marginBottom: '4px' }}>Encriptación de datos sensibles.</li>
            <li style={{ marginBottom: '4px' }}>Controles de acceso rigurosos.</li>
            <li style={{ marginBottom: '4px' }}>Monitoreo regular de nuestros sistemas.</li>
          </ul>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', marginTop: '20px' }}>
            8. Política de Cookies y Tecnologías Similares
          </h3>
          <p style={{ marginBottom: '16px' }}>
            Utilizamos cookies para mejorar su experiencia de usuario. Estas cookies pueden incluir:
          </p>
          <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
            <li style={{ marginBottom: '4px' }}>Cookies esenciales: necesarios para el funcionamiento del Sitio.</li>
            <li style={{ marginBottom: '4px' }}>Cookies analíticos: para medir audiencia y analizar el uso del Sitio.</li>
            <li style={{ marginBottom: '4px' }}>Cookies de marketing: para personalizar publicidades.</li>
          </ul>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', marginTop: '20px' }}>
            9. Contacto
          </h3>
          <p style={{ marginBottom: '16px' }}>
            Para cualquier pregunta o solicitud relacionada con esta Política de Privacidad, contáctenos:
          </p>
          <p style={{ marginBottom: '16px' }}>
            Correo electrónico: <strong>contacto@dreamvisionlp.online</strong>
          </p>
        </div>
      </Modal>

      {/* Modal de Términos de Uso */}
      <Modal 
        show={showTermsModal} 
        onClose={() => setShowTermsModal(false)} 
        title="Términos de Uso"
      >
        <div>
          <p style={{ marginBottom: '16px' }}>
            <strong>www.dreamvisionlp.online</strong> elaboró los presentes Términos de Uso para demostrar 
            su compromiso firme respecto al uso que usted puede hacer de los servicios e información disponibles 
            en su sitio web.
          </p>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', marginTop: '20px' }}>
            Términos de Uso
          </h3>
          <p style={{ marginBottom: '16px' }}>
            El acceso a este sitio web implica la aceptación expresa y sin reservas de los términos de uso descritos 
            a continuación. Si usted no acepta estos términos, por favor, no acceda ni use este sitio web.
          </p>
          <p style={{ marginBottom: '16px' }}>
            Los visitantes pueden usar este sitio web solo para fines legales. Este sitio web no puede ser usado 
            para publicar, enviar, distribuir o divulgar contenido o información de naturaleza difamatoria, 
            obscena o ilegal, incluyendo información propietaria perteneciente a otras personas o empresas, 
            así como marcas registradas o información protegida por derechos de autor, sin la autorización 
            expresa del titular de esos derechos.
          </p>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', marginTop: '20px' }}>
            Limitación de Responsabilidad
          </h3>
          <p style={{ marginBottom: '16px' }}>
            Los contenidos son proporcionados en este sitio web sin ninguna garantía expresa o implícita de 
            calidad comercial o adecuación para un uso particular. <strong>www.dreamvisionlp.online</strong> 
            no puede ser responsable por daños, incluyendo pérdidas de ganancias, interrupciones de negocios 
            o pérdidas de información resultantes del uso o de la imposibilidad de usar estos contenidos.
          </p>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', marginTop: '20px' }}>
            Derechos de Autor y Propiedad Intelectual
          </h3>
          <p style={{ marginBottom: '16px' }}>
            Los documentos, contenidos y creaciones de este sitio web pertenecen a <strong>www.dreamvisionlp.online</strong> 
            y sus colaboradores. La autoría del contenido, documentos e imágenes mostrados en 
            <strong>www.dreamvisionlp.online</strong> está protegida por las leyes nacionales e internacionales. 
            No pueden ser copiados, reproducidos, modificados, publicados, actualizados, enviados, 
            transmitidos o distribuidos de cualquier manera sin autorización previa por escrito de 
            <strong>www.dreamvisionlp.online</strong>.
          </p>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', marginTop: '20px' }}>
            Contacto
          </h3>
          <p style={{ marginBottom: '16px' }}>
            Para cualquier pregunta relacionada con estos Términos de Uso, contáctenos: 
            <strong>contacto@dreamvisionlp.online</strong>
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default ProtocoleSite;
