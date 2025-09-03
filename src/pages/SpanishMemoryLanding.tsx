import React, { useState, useEffect } from 'react';

// Componente principal do site
const ProtocoleSite = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [showButton, setShowButton] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  // Configura a data atual em formato brasileiro
  useEffect(() => {
    const data = new Date();
    const options = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    };
    const dataFormatada = data.toLocaleDateString('pt-BR', options);
    setCurrentDate(dataFormatada);

    // Delay de 1 hora (3600000ms) para mostrar o botão
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 3600000); // 1 hora

    return () => clearTimeout(timer);
  }, []);

  // Carrega o Meta Pixel
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
    
    // Inicializa os dois pixels
    window.fbq('init', '1093258939518583');
    window.fbq('init', '1351918292572124');
    
    // Dispara PageView para ambos
    window.fbq('track', 'PageView');

    // Adiciona as imagens noscript ao body para ambos os pixels
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
      // Cleanup se necessário
      const existingImgs = document.querySelectorAll('img[src*="facebook.com/tr"]');
      existingImgs.forEach(img => img.remove());
    };
  }, []);

  // Carrega o script do vídeo VTurb
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://scripts.converteai.net/ec09afc3-b6c2-4de5-b556-85edb9ced296/players/68b874c894ac47063d501aed/v4/player.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src*="68b874c894ac47063d501aed"]');
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
      
      {/* Header com mensagem de data */}
      <div style={{ backgroundColor: '#171717', color: '#ffffff' }} className="py-4 text-center">
        <span className="text-sm">
          Devido à alta demanda de acesso, garantimos a apresentação até hoje {currentDate}
        </span>
      </div>

      {/* Seção do vídeo principal - fundo branco */}
      <div style={{ backgroundColor: '#ffffff' }} className="py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Player de vídeo VTurb */}
          <div 
            className="w-full flex justify-center mb-8"
            dangerouslySetInnerHTML={{
              __html: `
                <vturb-smartplayer 
                  id="vid-68b874c894ac47063d501aed" 
                  style="display: block; margin: 0 auto; width: 100%; max-width: 400px;">
                </vturb-smartplayer>
              `
            }}
          />

          {/* Primeira imagem - medical-3.png */}
          <div className="w-full flex justify-center mb-8">
            <img 
              src="https://tea.global-academia.com/wp-content/uploads/2024/11/medical-3.png" 
              alt="Medical Image"
              className="max-w-full h-auto"
              style={{ maxWidth: '600px' }}
            />
          </div>

          {/* Segunda imagem - KHzQbW6336022.png */}
          <div className="w-full flex justify-center mb-8">
            <img 
              src="https://media.atomicatpages.net/u/q4DGiTkDOlYWpXXoLEQFHmAp5132/Pictures/KHzQbW6336022.png" 
              alt="Additional Image"
              className="max-w-full h-auto"
              style={{ maxWidth: '600px' }}
            />
          </div>
        </div>
      </div>

      {/* Texto informativo */}
      <div className="text-center py-4" style={{ backgroundColor: '#ffffff' }}>
        <p style={{ color: '#171717' }}>Assista ao vídeo para desbloquear a receita.</p>
      </div>

      {/* Botão de acesso (aparece após delay de 1 hora) */}
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
              ACESSAR PROTOCOLO
            </a>
            <p className="text-sm mt-4" style={{ color: '#8a8d91' }}>
              Acesso liberado após 1 hora de visualização
            </p>
          </div>
        </div>
      )}

      {/* Footer com disclaimers e políticas */}
      <footer style={{ backgroundColor: '#f0f2f5' }} className="py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-sm mb-6" style={{ color: '#8a8d91' }}>
            <p className="mb-4">
              Em <strong>www.dreamvisionlp.online</strong>, todo o conteúdo e informações são de nossa 
              inteira responsabilidade. Esclarecemos que este site não possui afiliação, patrocínio ou 
              aprovação da Meta Platforms, Inc. <strong>Facebook e Instagram</strong>, que não é 
              responsável pelo nosso conteúdo.
            </p>
            <p className="mb-4">
              As informações aqui apresentadas são fornecidas apenas para fins educativos e informativos, 
              e não substituem os conselhos, diagnósticos ou tratamentos de um profissional de saúde 
              qualificado. Nossos produtos não se destinam a diagnosticar, tratar, curar ou prevenir 
              qualquer doença ou condição médica.
            </p>
            <p>
              É importante lembrar que os resultados podem variar significativamente de pessoa para pessoa. 
              A decisão de aplicar as informações ou usar nossos produtos é de sua inteira responsabilidade. 
              Para questões relacionadas à sua saúde, sempre consulte um especialista.
            </p>
          </div>
          
          {/* Links de políticas com popups */}
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
              Política de Privacidade
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
              Termos de Uso
            </button>
          </div>
        </div>
      </footer>

      {/* Modal de Política de Privacidade */}
      <Modal 
        show={showPrivacyModal} 
        onClose={() => setShowPrivacyModal(false)} 
        title="Política de Privacidade"
      >
        <div>
          <p style={{ marginBottom: '16px' }}>
            Bem-vindo ao site <strong>https://www.dreamvisionlp.online/</strong> (doravante denominado "Site").
          </p>
          <p style={{ marginBottom: '16px' }}>
            A proteção de seus dados pessoais é uma prioridade para nós. Esta Política de Privacidade 
            descreve como seus dados pessoais são coletados, usados, compartilhados e protegidos quando 
            você usa nossos produtos e serviços digitais, em conformidade com a Lei Geral de Proteção de 
            Dados (LGPD - Lei nº 13.709/2018) e demais legislações aplicáveis.
          </p>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', marginTop: '20px' }}>
            1. Identificação e Dados de Contato do Controlador
          </h3>
          <p style={{ marginBottom: '16px' }}>
            O controlador dos dados pessoais coletados através deste Site é: www.dreamvisionlp.online
          </p>
          <p style={{ marginBottom: '16px' }}>
            Para qualquer questão relacionada a esta Política de Privacidade ou aos seus dados pessoais, 
            você pode nos contatar através dos dados de contato acima.
          </p>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', marginTop: '20px' }}>
            2. Dados Pessoais Coletados
          </h3>
          <p style={{ marginBottom: '16px' }}>
            Coletamos diferentes categorias de dados pessoais, de acordo com suas interações com nosso Site e serviços:
          </p>
          
          <h4 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '8px' }}>
            2.1 Categorias de Dados Coletados
          </h4>
          <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
            <li style={{ marginBottom: '4px' }}>Dados de identificação: nome, sobrenome, endereço de e-mail, número de telefone.</li>
            <li style={{ marginBottom: '4px' }}>Dados de conexão: endereço IP, tipo de navegador, sistema operacional, identificadores de sessão.</li>
            <li style={{ marginBottom: '4px' }}>Dados de transação: informações de pagamento (processadas por terceiros seguros), histórico de compras.</li>
            <li style={{ marginBottom: '4px' }}>Dados de navegação: páginas visitadas, cliques, tempo gasto no Site.</li>
            <li style={{ marginBottom: '4px' }}>Dados de marketing: preferências de comunicação, respostas a campanhas publicitárias.</li>
          </ul>

          <h4 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '8px' }}>
            2.2 Fontes e Métodos de Coleta
          </h4>
          <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
            <li style={{ marginBottom: '4px' }}>Formulários: dados fornecidos durante inscrição, compra ou contato através do nosso Site.</li>
            <li style={{ marginBottom: '4px' }}>Cookies e tecnologias similares: dados coletados automaticamente durante sua navegação (ver Seção 8).</li>
            <li style={{ marginBottom: '4px' }}>Terceiros: dados obtidos através de parceiros ou plataformas publicitárias (com seu consentimento prévio).</li>
          </ul>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', marginTop: '20px' }}>
            3. Finalidades e Bases Legais do Tratamento
          </h3>
          <p style={{ marginBottom: '16px' }}>
            Seus dados pessoais são tratados para as seguintes finalidades, conforme as bases legais definidas pela LGPD.
          </p>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', marginTop: '20px' }}>
            4. Destinatários dos Dados Pessoais
          </h3>
          <p style={{ marginBottom: '16px' }}>
            Seus dados pessoais podem ser compartilhados com as seguintes categorias de destinatários:
          </p>
          <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
            <li style={{ marginBottom: '4px' }}>Prestadores de serviços terceirizados: hospedagem, processamento de pagamentos, ferramentas de análise, plataformas de marketing.</li>
            <li style={{ marginBottom: '4px' }}>Parceiros comerciais: apenas com seu consentimento explícito.</li>
            <li style={{ marginBottom: '4px' }}>Autoridades competentes: em caso de obrigação legal ou para proteger nossos direitos.</li>
          </ul>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', marginTop: '20px' }}>
            5. Prazo de Conservação dos Dados
          </h3>
          <p style={{ marginBottom: '16px' }}>
            Conservamos seus dados pessoais apenas pelo tempo necessário para as finalidades descritas acima, 
            ou conforme exigências legais. Por exemplo:
          </p>
          <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
            <li style={{ marginBottom: '4px' }}>Dados de transação: conservados por 10 anos para obrigações contábeis.</li>
            <li style={{ marginBottom: '4px' }}>Dados de marketing: conservados até que você retire seu consentimento.</li>
            <li style={{ marginBottom: '4px' }}>Dados de navegação: conservados por no máximo 13 meses (ver Seção 8 sobre cookies).</li>
          </ul>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', marginTop: '20px' }}>
            6. Direitos dos Titulares dos Dados
          </h3>
          <p style={{ marginBottom: '16px' }}>
            Conforme a LGPD, você possui os seguintes direitos relacionados aos seus dados pessoais:
          </p>
          <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
            <li style={{ marginBottom: '4px' }}>Direito de acesso: obter uma cópia de seus dados pessoais.</li>
            <li style={{ marginBottom: '4px' }}>Direito de retificação: corrigir dados inexatos ou incompletos.</li>
            <li style={{ marginBottom: '4px' }}>Direito de eliminação: solicitar a exclusão de seus dados (sob certas condições).</li>
            <li style={{ marginBottom: '4px' }}>Direito de limitação: restringir o tratamento de seus dados.</li>
            <li style={{ marginBottom: '4px' }}>Direito de portabilidade: receber seus dados em formato estruturado e legível por máquina.</li>
            <li style={{ marginBottom: '4px' }}>Direito de oposição: opor-se ao tratamento de seus dados por motivos legítimos ou para fins de marketing.</li>
            <li style={{ marginBottom: '4px' }}>Direito de retirar seu consentimento: a qualquer momento, para tratamentos baseados em seu consentimento.</li>
          </ul>
          <p style={{ marginBottom: '16px' }}>
            Para exercer seus direitos, entre em contato conosco em: <strong>contato@dreamvisionlp.online</strong>. 
            Você também tem o direito de apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD).
          </p>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', marginTop: '20px' }}>
            7. Medidas de Segurança
          </h3>
          <p style={{ marginBottom: '16px' }}>
            Implementamos medidas técnicas e organizacionais para proteger seus dados pessoais contra 
            acesso não autorizado, perda, alteração ou divulgação. Essas medidas incluem:
          </p>
          <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
            <li style={{ marginBottom: '4px' }}>Criptografia de dados sensíveis.</li>
            <li style={{ marginBottom: '4px' }}>Controles de acesso rigorosos.</li>
            <li style={{ marginBottom: '4px' }}>Monitoramento regular de nossos sistemas.</li>
          </ul>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', marginTop: '20px' }}>
            8. Política de Cookies e Tecnologias Similares
          </h3>
          <p style={{ marginBottom: '16px' }}>
            Utilizamos cookies para melhorar sua experiência de usuário. Estes cookies podem incluir:
          </p>
          <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
            <li style={{ marginBottom: '4px' }}>Cookies essenciais: necessários para o funcionamento do Site.</li>
            <li style={{ marginBottom: '4px' }}>Cookies analíticos: para medir audiência e analisar o uso do Site.</li>
            <li style={{ marginBottom: '4px' }}>Cookies de marketing: para personalizar publicidades.</li>
          </ul>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', marginTop: '20px' }}>
            9. Contato
          </h3>
          <p style={{ marginBottom: '16px' }}>
            Para qualquer questão ou solicitação relacionada a esta Política de Privacidade, entre em contato conosco:
          </p>
          <p style={{ marginBottom: '16px' }}>
            E-mail: <strong>contato@dreamvisionlp.online</strong>
          </p>
        </div>
      </Modal>

      {/* Modal de Termos de Uso */}
      <Modal 
        show={showTermsModal} 
        onClose={() => setShowTermsModal(false)} 
        title="Termos de Uso"
      >
        <div>
          <p style={{ marginBottom: '16px' }}>
            <strong>www.dreamvisionlp.online</strong> elaborou os presentes Termos de Uso para demonstrar 
            seu compromisso firme quanto ao uso que você pode fazer dos serviços e informações disponíveis 
            em seu site web.
          </p>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', marginTop: '20px' }}>
            Termos de Uso
          </h3>
          <p style={{ marginBottom: '16px' }}>
            O acesso a este site web implica a aceitação expressa e sem reservas dos termos de uso descritos 
            a seguir. Se você não aceita estes termos, por favor, não acesse nem use este site web.
          </p>
          <p style={{ marginBottom: '16px' }}>
            Os visitantes podem usar este site web apenas para fins legais. Este site web não pode ser usado 
            para publicar, enviar, distribuir ou divulgar conteúdo ou informações de natureza difamatória, 
            obscena ou ilegal, incluindo informações proprietárias pertencentes a outras pessoas ou empresas, 
            bem como marcas registradas ou informações protegidas por direitos autorais, sem a autorização 
            expressa do titular desses direitos.
          </p>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', marginTop: '20px' }}>
            Limitação de Responsabilidade
          </h3>
          <p style={{ marginBottom: '16px' }}>
            Os conteúdos são fornecidos neste site web sem qualquer garantia expressa ou implícita de 
            qualidade comercial ou adequação a um uso particular. <strong>www.dreamvisionlp.online</strong> 
            não pode ser responsabilizada por danos, incluindo perdas de lucros, interrupções de negócios 
            ou perdas de informações resultantes do uso ou da impossibilidade de usar estes conteúdos.
          </p>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', marginTop: '20px' }}>
            Direitos Autorais e Propriedade Intelectual
          </h3>
          <p style={{ marginBottom: '16px' }}>
            Os documentos, conteúdos e criações deste site web pertencem a <strong>www.dreamvisionlp.online</strong> 
            e seus colaboradores. A autoria do conteúdo, documentos e imagens exibidos em 
            <strong>www.dreamvisionlp.online</strong> está protegida pelas leis nacionais e internacionais. 
            Eles não podem ser copiados, reproduzidos, modificados, publicados, atualizados, postados, 
            transmitidos ou distribuídos de qualquer maneira sem autorização prévia por escrito de 
            <strong>www.dreamvisionlp.online</strong>.
          </p>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', marginTop: '20px' }}>
            Contato
          </h3>
          <p style={{ marginBottom: '16px' }}>
            Para qualquer questão relacionada a estes Termos de Uso, entre em contato conosco: 
            <strong>contato@dreamvisionlp.online</strong>
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default ProtocoleSite;
