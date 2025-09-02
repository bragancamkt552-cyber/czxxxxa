import React, { useState, useEffect } from 'react';

// Componente principal do site
const ProtocoleSite = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [showButton, setShowButton] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  // Configura a data atual em formato francês
  useEffect(() => {
    const data = new Date();
    const options = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    };
    const dataFormatada = data.toLocaleDateString('fr-FR', options);
    setCurrentDate(dataFormatada);

    // Delay de 1 hora (3600000ms) para mostrar o botão
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 3600000); // 1 hora

    return () => clearTimeout(timer);
  }, []);

  // Carrega o Meta Pixel
  useEffect(() => {
    // Meta Pixel Code
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('init', '1093258939518583');
    window.fbq('track', 'PageView');

    // Adiciona a imagem noscript ao body
    const noscriptImg = document.createElement('img');
    noscriptImg.height = 1;
    noscriptImg.width = 1;
    noscriptImg.style.display = 'none';
    noscriptImg.src = 'https://www.facebook.com/tr?id=1093258939518583&ev=PageView&noscript=1';
    document.body.appendChild(noscriptImg);

    return () => {
      // Cleanup se necessário
      const existingImg = document.querySelector('img[src*="facebook.com/tr"]');
      if (existingImg) {
        existingImg.remove();
      }
    };
  }, []);

  // Carrega o script do vídeo VTurb
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://scripts.converteai.net/ec09afc3-b6c2-4de5-b556-85edb9ced296/players/68b60b9d19546f43f5884ff5/v4/player.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src*="68b60b9d19546f43f5884ff5"]');
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
      
      {/* Header com mensagem de data - igual ao original */}
      <div style={{ backgroundColor: '#171717', color: '#ffffff' }} className="py-4 text-center">
        <span className="text-sm">
          En raison de la forte demande d'accès, nous garantissons la présentation jusqu'à aujourd'hui le {currentDate}
        </span>
      </div>

      {/* Seção do vídeo principal - fundo branco */}
      <div style={{ backgroundColor: '#ffffff' }} className="py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Headlines acima do vídeo */}
          <div className="text-center mb-8">
            <h1 style={{ 
              fontSize: '28px', 
              fontWeight: 'bold', 
              color: '#171717',
              lineHeight: '1.2',
              marginBottom: '16px',
              textShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              Mauvaise Haleine ? Découvrez Une Solution Simple que Tout le Monde Peut Appliquer
            </h1>
            
            <h2 style={{ 
              fontSize: '18px', 
              fontWeight: '500', 
              color: '#666666',
              lineHeight: '1.4',
              marginBottom: '32px',
              fontStyle: 'italic'
            }}>
              Vous faites cela tous les jours sans imaginer que cela affecte votre haleine
            </h2>
          </div>

          {/* Player de vídeo VTurb */}
          <div 
            className="w-full"
            dangerouslySetInnerHTML={{
              __html: `
                <vturb-smartplayer 
                  id="vid-68b60b9d19546f43f5884ff5" 
                  style="display: block; margin: 0 auto; width: 100%;">
                </vturb-smartplayer>
              `
            }}
          />
          
          {/* Espaçamento */}
          <div className="py-8"></div>
        </div>
      </div>

      {/* Texto informativo */}
      <div className="text-center py-4" style={{ backgroundColor: '#ffffff' }}>
        <p style={{ color: '#171717' }}>Regardez la vidéo pour débloquer la recette.</p>
      </div>

      {/* Seção de comentários do Facebook - fundo vermelho escuro */}
      <section style={{ 
        background: 'linear-gradient(135deg, rgb(139,69,19) 0%, rgb(160,82,45) 100%)'
      }} className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div style={{ backgroundColor: '#ffffff' }} className="rounded-lg p-8">
            
            {/* Título da seção de comentários */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#171717' }}>24 Commentaires</h2>
              <div style={{ 
                height: '1px', 
                backgroundColor: '#171717',
                width: '100%'
              }}></div>
            </div>

            {/* Comentário 1 - Antoine Dubois */}
            <div className="mb-6">
              <div className="flex gap-4 items-start">
                <img 
                  src="https://protocole.paiscelestiais.com.br/wp-content/uploads/2025/06/homem-3.jpg" 
                  alt="Antoine Dubois"
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-sm" style={{ color: '#385898' }}>Antoine Dubois</h3>
                  </div>
                  <p className="text-sm mb-2" style={{ color: '#1d2129' }}>
                    Je suis de Lyon et je suis vraiment confiant après avoir lu les commentaires. 
                    J'ai longtemps cherché un moyen d'améliorer mon haleine, et j'ai bon espoir 
                    que cette approche m'aide aussi à retrouver une sensation de fraîcheur. 😍
                  </p>
                  <div className="flex items-center gap-4 text-xs" style={{ color: '#8a8d91' }}>
                    <span className="cursor-pointer hover:underline">Répondre</span>
                    <span>·</span>
                    <span className="cursor-pointer hover:underline">Aimer</span>
                    <span>·</span>
                    <span className="cursor-pointer hover:underline">Suivre</span>
                    <span>·</span>
                    <span>1 h</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Comentário 2 - Sophie Moreau */}
            <div className="mb-6">
              <div className="flex gap-4 items-start">
                <img 
                  src="https://protocole.paiscelestiais.com.br/wp-content/uploads/2025/06/gile-16.jpg" 
                  alt="Sophie Moreau"
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-sm" style={{ color: '#385898' }}>Sophie Moreau</h3>
                  </div>
                  <p className="text-sm mb-2" style={{ color: '#1d2129' }}>
                    Je suis en plein processus, c'est mon huitième jour. J'appréhendais un peu 
                    la sensation de bouche sèche au début, mais la fraîcheur de mon haleine 
                    s'est vraiment bien installée. Ma confiance est revenue quand ma sensation 
                    en bouche est redevenue agréable, vers le cinquième jour.
                  </p>
                  <div className="flex items-center gap-4 text-xs" style={{ color: '#8a8d91' }}>
                    <span className="cursor-pointer hover:underline">Répondre</span>
                    <span>·</span>
                    <span className="cursor-pointer hover:underline">Aimer</span>
                    <span>·</span>
                    <span className="cursor-pointer hover:underline">Suivre</span>
                    <span>·</span>
                    <span>4 min</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Comentário 3 - Chloé Lefevre */}
            <div className="mb-6">
              <div className="flex gap-4 items-start">
                <img 
                  src="https://protocole.paiscelestiais.com.br/wp-content/uploads/2025/06/depo.jpg" 
                  alt="Chloé Lefevre"
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-sm" style={{ color: '#385898' }}>Chloé Lefevre</h3>
                  </div>
                  <p className="text-sm mb-2" style={{ color: '#1d2129' }}>
                    En lisant ton histoire, Chloé, je me reconnais. J'ai longtemps cherché 
                    une solution pour un hálito vraiment frais, et ça a vraiment affecté ma confiance. 
                    Je commence cette démarche pleine d'espoir.
                  </p>
                  <div className="flex items-center gap-4 text-xs" style={{ color: '#8a8d91' }}>
                    <span className="cursor-pointer hover:underline">Répondre</span>
                    <span>·</span>
                    <span className="cursor-pointer hover:underline">Aimer</span>
                    <span>·</span>
                    <span className="cursor-pointer hover:underline">Suivre</span>
                    <span>·</span>
                    <span>6 min</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Comentário 4 - Élise Petit */}
            <div className="mb-6">
              <div className="flex gap-4 items-start">
                <img 
                  src="https://protocole.paiscelestiais.com.br/wp-content/uploads/2025/06/Absolute_Reality_v16_HighlyRealistic_HeadToToe_Image_of_a_Fair_0.jpg" 
                  alt="Élise Petit"
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-sm" style={{ color: '#385898' }}>Élise Petit</h3>
                  </div>
                  <p className="text-sm mb-2" style={{ color: '#1d2129' }}>
                    En lisant ton histoire, Chloé, je me reconnais. J'ai longtemps cherché 
                    une solution pour un hálito vraiment frais, et ça a vraiment affecté ma confiance. 
                    Je commence cette démarche pleine d'espoir.
                  </p>
                  <div className="flex items-center gap-4 text-xs" style={{ color: '#8a8d91' }}>
                    <span className="cursor-pointer hover:underline">Répondre</span>
                    <span>·</span>
                    <span className="cursor-pointer hover:underline">Aimer</span>
                    <span>·</span>
                    <span className="cursor-pointer hover:underline">Suivre</span>
                    <span>·</span>
                    <span>14 min</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Comentário 5 - Isabelle Mercier */}
            <div className="mb-6">
              <div className="flex gap-4 items-start">
                <img 
                  src="https://protocole.paiscelestiais.com.br/wp-content/uploads/2025/06/mulher-de-oculos5.png" 
                  alt="Isabelle Mercier"
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-sm" style={{ color: '#385898' }}>Isabelle Mercier</h3>
                  </div>
                  <p className="text-sm mb-2" style={{ color: '#1d2129' }}>
                    C'est super de voir des retours aussi positifs avec cette approche ! 
                    Félicitations Chloé d'avoir trouvé quelque chose qui vous apporte un tel bien-être. 
                    On sait combien c'est important de se sentir à l'aise avec son haleine.
                  </p>
                  <div className="flex items-center gap-4 text-xs" style={{ color: '#8a8d91' }}>
                    <span className="cursor-pointer hover:underline">Répondre</span>
                    <span>·</span>
                    <span className="cursor-pointer hover:underline">Aimer</span>
                    <span>·</span>
                    <span className="cursor-pointer hover:underline">Suivre</span>
                    <span>·</span>
                    <span>10 min</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Comentário 6 - Marie-Laure */}
            <div className="mb-6">
              <div className="flex gap-4 items-start">
                <img 
                  src="https://protocole.paiscelestiais.com.br/wp-content/uploads/2025/06/woman-3-1024x1024.jpg" 
                  alt="Marie-Laure"
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-sm" style={{ color: '#385898' }}>Marie-Laure</h3>
                  </div>
                  <p className="text-sm mb-2" style={{ color: '#1d2129' }}>
                    Merci les gars ! Je vais l'acheter.
                  </p>
                  <div className="flex items-center gap-4 text-xs" style={{ color: '#8a8d91' }}>
                    <span className="cursor-pointer hover:underline">Répondre</span>
                    <span>·</span>
                    <span className="cursor-pointer hover:underline">Aimer</span>
                    <span>·</span>
                    <span className="cursor-pointer hover:underline">Suivre</span>
                    <span>·</span>
                    <span>6 min</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Comentário 7 - Julien Rousseau */}
            <div className="mb-6">
              <div className="flex gap-4 items-start">
                <img 
                  src="https://protocole.paiscelestiais.com.br/wp-content/uploads/2025/06/woman-marie-laure-1024x1024.jpg" 
                  alt="Julien Rousseau"
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-sm" style={{ color: '#385898' }}>Julien Rousseau</h3>
                  </div>
                  <p className="text-sm mb-2" style={{ color: '#1d2129' }}>
                    C'est vrai, j'avais la bouche un peu sèche au début, mais je me suis vite 
                    sentie plus propre et plus fraîche. J'ai maintenant une haleine plus sûre de moi. 
                    C'est ce qui m'a aidée ; ça a vraiment changé notre quotidien.
                  </p>
                  <div className="flex items-center gap-4 text-xs" style={{ color: '#8a8d91' }}>
                    <span className="cursor-pointer hover:underline">Répondre</span>
                    <span>·</span>
                    <span className="cursor-pointer hover:underline">Aimer</span>
                    <span>·</span>
                    <span className="cursor-pointer hover:underline">Suivre</span>
                    <span>·</span>
                    <span>35 min</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Comentário 8 - Lucas Girard */}
            <div className="mb-6">
              <div className="flex gap-4 items-start">
                <img 
                  src="https://protocole.paiscelestiais.com.br/wp-content/uploads/2025/06/homem-2.jpg" 
                  alt="Lucas Girard"
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-sm" style={{ color: '#385898' }}>Lucas Girard</h3>
                  </div>
                  <p className="text-sm mb-2" style={{ color: '#1d2129' }}>
                    Je pense que cette méthode de rafraîchissement de l'haleine devrait être 
                    connue de plus de monde. C'est formidable de pouvoir partager cette découverte.
                  </p>
                  <div className="flex items-center gap-4 text-xs" style={{ color: '#8a8d91' }}>
                    <span className="cursor-pointer hover:underline">Répondre</span>
                    <span>·</span>
                    <span className="cursor-pointer hover:underline">Aimer</span>
                    <span>·</span>
                    <span className="cursor-pointer hover:underline">Suivre</span>
                    <span>·</span>
                    <span>1 h</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Plugin social do Facebook */}
            <div className="flex items-center gap-2 mt-8 pt-4" style={{ borderTop: '1px solid #e5e5e5' }}>
              <div style={{ color: '#385898' }}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <span className="text-xs" style={{ color: '#8a8d91' }}>Plug-in social Facebook</span>
            </div>
          </div>
        </div>
      </section>

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
              ACESSAR PROTOCOLE
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
              Sur <strong>www.dreamvisionlp.online</strong>, l'ensemble du contenu et des 
              informations relève de notre seule et entière responsabilité. Nous tenons à préciser 
              que ce site n'a aucune affiliation, aucun parrainage ni aucune approbation de la part 
              de Meta Platforms, Inc. <strong>Facebook et Instagram</strong>, qui n'est en aucun cas 
              responsable de notre contenu.
            </p>
            <p className="mb-4">
              Les informations présentées ici sont fournies à des fins éducatives et informatives 
              uniquement, et ne remplacent en aucun cas les conseils, le diagnostic ou le traitement 
              d'un professionnel de la santé qualifié. Nos produits ne sont pas destinés à diagnostiquer, 
              traiter, guérir ou prévenir une quelconque maladie ou condition médicale.
            </p>
            <p>
              Il est essentiel de rappeler que les résultats peuvent varier de manière significative 
              d'une personne à l'autre. La décision d'appliquer les informations ou d'utiliser nos 
              produits relève de votre entière responsabilité. Pour toute question relative à votre 
              santé, consultez toujours un spécialiste.
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
              Politiques de confidentialité
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
              Conditions d'utilisation
            </button>
          </div>
        </div>
      </footer>

      {/* Modal de Política de Privacidade */}
      <Modal 
        show={showPrivacyModal} 
        onClose={() => setShowPrivacyModal(false)} 
        title="Politique de Confidentialité"
      >
        <div>
          <p style={{ marginBottom: '16px' }}>
            Bienvenue sur le site <strong>https://www.dreamvisionlp.online/</strong> (ci-après dénommé le "Site").
          </p>
          <p style={{ marginBottom: '16px' }}>
            La protection de vos données personnelles est une priorité pour nous. Cette Politique de Confidentialité décrit comment vos données personnelles sont collectées, utilisées, partagées et protégées lorsque vous utilisez nos produits et services numériques, en conformité avec le Règlement Général sur la Protection des Données (RGPD – UE 2016/679) et la Loi française n° 78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés, telle que modifiée.
          </p>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', marginTop: '20px' }}>
            1. Identification et Coordonnées du Responsable du Traitement
          </h3>
          <p style={{ marginBottom: '16px' }}>
            Le responsable du traitement des données personnelles collectées via ce Site est : www.dreamvisionlp.online
          </p>
          <p style={{ marginBottom: '16px' }}>
            Pour toute question relative à cette Politique de Confidentialité ou à vos données personnelles, vous pouvez nous contacter via les coordonnées ci-dessus.
          </p>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', marginTop: '20px' }}>
            2. Données Personnelles Collectées
          </h3>
          <p style={{ marginBottom: '16px' }}>
            Nous collectons différentes catégories de données personnelles, selon vos interactions avec notre Site et nos services :
          </p>
          
          <h4 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '8px' }}>
            2.1 Catégories de Données Collectées
          </h4>
          <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
            <li style={{ marginBottom: '4px' }}>Données d'identification : nom, prénom, adresse e-mail, numéro de téléphone.</li>
            <li style={{ marginBottom: '4px' }}>Données de connexion : adresse IP, type de navigateur, système d'exploitation, identifiants de session.</li>
            <li style={{ marginBottom: '4px' }}>Données de transaction : informations de paiement (traitées par des tiers sécurisés), historique d'achats.</li>
            <li style={{ marginBottom: '4px' }}>Données de navigation : pages visitées, clics, temps passé sur le Site.</li>
            <li style={{ marginBottom: '4px' }}>Données de marketing : préférences en matière de communication, réponses aux campagnes publicitaires.</li>
          </ul>

          <h4 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '8px' }}>
            2.2 Sources et Méthodes de Collecte
          </h4>
          <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
            <li style={{ marginBottom: '4px' }}>Formulaires : données fournies lors de l'inscription, de l'achat ou du contact via notre Site.</li>
            <li style={{ marginBottom: '4px' }}>Cookies et technologies similaires : données collectées automatiquement lors de votre navigation (voir Section 8).</li>
            <li style={{ marginBottom: '4px' }}>Tiers : données obtenues via des partenaires ou des plateformes publicitaires (avec votre consentement préalable).</li>
          </ul>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', marginTop: '20px' }}>
            3. Finalités et Bases Légales du Traitement
          </h3>
          <p style={{ marginBottom: '16px' }}>
            Vos données personnelles sont traitées pour les finalités suivantes, conformément aux bases légales définies par le RGPD.
          </p>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', marginTop: '20px' }}>
            4. Destinataires des Données Personnelles
          </h3>
          <p style={{ marginBottom: '16px' }}>
            Vos données personnelles peuvent être partagées avec les catégories de destinataires suivantes :
          </p>
          <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
            <li style={{ marginBottom: '4px' }}>Prestataires de services tiers : hébergement, traitement des paiements, outils d'analyse, plateformes de marketing.</li>
            <li style={{ marginBottom: '4px' }}>Partenaires commerciaux : uniquement avec votre consentement explicite.</li>
            <li style={{ marginBottom: '4px' }}>Autorités compétentes : en cas d'obligation légale ou pour protéger nos droits.</li>
          </ul>

          <h4 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '8px' }}>
            4.1 Transferts Internationaux
          </h4>
          <p style={{ marginBottom: '16px' }}>
            Si vos données sont transférées en dehors de l'Union européenne, nous veillons à ce que des garanties appropriées soient mises en place, telles que des clauses contractuelles types ou des décisions d'adéquation de la Commission européenne.
          </p>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', marginTop: '20px' }}>
            5. Durée de Conservation des Données
          </h3>
          <p style={{ marginBottom: '16px' }}>
            Nous conservons vos données personnelles uniquement pendant la durée nécessaire aux finalités décrites ci-dessus, ou conformément aux exigences légales. Par exemple :
          </p>
          <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
            <li style={{ marginBottom: '4px' }}>Données de transaction : conservées pendant 10 ans pour des obligations comptables.</li>
            <li style={{ marginBottom: '4px' }}>Données de marketing : conservées jusqu'à ce que vous retiriez votre consentement.</li>
            <li style={{ marginBottom: '4px' }}>Données de navigation : conservées pendant 13 mois maximum (voir Section 8 sur les cookies).</li>
          </ul>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', marginTop: '20px' }}>
            6. Droits des Titulaires des Données
          </h3>
          <p style={{ marginBottom: '16px' }}>
            Conformément au RGPD et à la loi française, vous disposez des droits suivants concernant vos données personnelles :
          </p>
          <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
            <li style={{ marginBottom: '4px' }}>Droit d'accès : obtenir une copie de vos données personnelles.</li>
            <li style={{ marginBottom: '4px' }}>Droit de rectification : corriger des données inexactes ou incomplètes.</li>
            <li style={{ marginBottom: '4px' }}>Droit à l'effacement : demander la suppression de vos données (sous certaines conditions).</li>
            <li style={{ marginBottom: '4px' }}>Droit à la limitation : restreindre le traitement de vos données.</li>
            <li style={{ marginBottom: '4px' }}>Droit à la portabilité : recevoir vos données dans un format structuré et lisible par machine.</li>
            <li style={{ marginBottom: '4px' }}>Droit d'opposition : vous opposer au traitement de vos données pour des motifs légitimes ou à des fins de marketing.</li>
            <li style={{ marginBottom: '4px' }}>Droit de retirer votre consentement : à tout moment, pour les traitements basés sur votre consentement.</li>
          </ul>
          <p style={{ marginBottom: '16px' }}>
            Pour exercer vos droits, contactez-nous à : <strong>contact@dreamvisionlp.online</strong>. Vous avez également le droit de déposer une plainte auprès de la CNIL (www.cnil.fr).
          </p>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', marginTop: '20px' }}>
            7. Mesures de Sécurité
          </h3>
          <p style={{ marginBottom: '16px' }}>
            Nous mettons en œuvre des mesures techniques et organisationnelles pour protéger vos données personnelles contre tout accès non autorisé, perte, altération ou divulgation. Ces mesures incluent :
          </p>
          <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
            <li style={{ marginBottom: '4px' }}>Cryptage des données sensibles.</li>
            <li style={{ marginBottom: '4px' }}>Contrôles d'accès stricts.</li>
            <li style={{ marginBottom: '4px' }}>Surveillance régulière de nos systèmes.</li>
          </ul>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', marginTop: '20px' }}>
            8. Politique de Cookies et Technologies Similaires
          </h3>
          <p style={{ marginBottom: '16px' }}>
            Nous utilisons des cookies pour améliorer votre expérience utilisateur. Ces cookies peuvent inclure :
          </p>
          <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
            <li style={{ marginBottom: '4px' }}>Cookies essentiels : nécessaires au fonctionnement du Site.</li>
            <li style={{ marginBottom: '4px' }}>Cookies analytiques : pour mesurer l'audience et analyser l'utilisation du Site.</li>
            <li style={{ marginBottom: '4px' }}>Cookies marketing : pour personnaliser les publicités.</li>
          </ul>
          <p style={{ marginBottom: '16px' }}>
            Vous pouvez gérer vos préférences en matière de cookies via notre bandeau de consentement ou les paramètres de votre navigateur. Pour plus d'informations, consultez notre Politique de Cookies.
          </p>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', marginTop: '20px' }}>
            9. Protection des Enfants
          </h3>
          <p style={{ marginBottom: '16px' }}>
            Nos services ne sont pas destinés aux enfants de moins de 16 ans. Nous ne collectons pas intentionnellement leurs données personnelles. Si vous pensez qu'un enfant nous a fourni des informations, contactez-nous immédiatement.
          </p>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', marginTop: '20px' }}>
            10. Modifications de la Politique de Confidentialité
          </h3>
          <p style={{ marginBottom: '16px' }}>
            Nous nous réservons le droit de modifier cette Politique à tout moment. Toute modification sera publiée sur cette page avec une date de mise à jour. En cas de changements significatifs, nous vous en informerons par e-mail ou via une notification sur le Site.
          </p>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', marginTop: '20px' }}>
            11. Contact
          </h3>
          <p style={{ marginBottom: '16px' }}>
            Pour toute question ou demande concernant cette Politique de Confidentialité, veuillez nous contacter à :
          </p>
          <p style={{ marginBottom: '16px' }}>
            E-mail: <strong>contact@dreamvisionlp.online</strong>
          </p>
          <p style={{ marginBottom: '16px', marginTop: '20px' }}>
            Cette Politique de Confidentialité est juridiquement contraignante et s'applique à tous les utilisateurs du Site https://www.dreamvisionlp.online/.
          </p>
          <p style={{ marginBottom: '16px' }}>
            En utilisant nos services, vous acceptez les termes de cette Politique.
          </p>
        </div>
      </Modal>

      {/* Modal de Conditions d'Utilisation */}
      <Modal 
        show={showTermsModal} 
        onClose={() => setShowTermsModal(false)} 
        title="Conditions d'Utilisation"
      >
        <div>
          <p style={{ marginBottom: '16px' }}>
            <strong>www.dreamvisionlp.online</strong> a rédigé les présentes Conditions d'utilisation afin de démontrer son engagement ferme quant à l'utilisation que vous pouvez faire des services et informations disponibles sur son site web.
          </p>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', marginTop: '20px' }}>
            Conditions d'utilisation
          </h3>
          <p style={{ marginBottom: '16px' }}>
            L'accès à ce site web implique l'acceptation expresse et sans réserve des conditions d'utilisation décrites ci-dessous. Si vous n'acceptez pas ces conditions, veuillez ne pas accéder à ce site web ni l'utiliser.
          </p>
          <p style={{ marginBottom: '16px' }}>
            Les visiteurs ne peuvent utiliser ce site web qu'à des fins légales. Ce site web ne peut être utilisé pour publier, envoyer, distribuer ou diffuser du contenu ou des informations de nature diffamatoire, obscène ou illégale, y compris des informations exclusives appartenant à d'autres personnes ou entreprises, ainsi que des marques déposées ou des informations protégées par le droit d'auteur, sans l'autorisation expresse du titulaire de ces droits. De plus, les visiteurs ne peuvent utiliser ce site web pour obtenir ou divulguer des informations personnelles, y compris les adresses Internet, concernant les utilisateurs.
          </p>
          <p style={{ marginBottom: '16px' }}>
            <strong>www.dreamvisionlp.online</strong> s'efforce de maintenir la qualité, l'actualité et l'authenticité des informations publiées sur son site web, mais décline toute responsabilité en cas de défaillance du service ou d'inexactitude des informations fournies.
          </p>
          <p style={{ marginBottom: '16px' }}>
            Les utilisateurs ne doivent pas présumer que ces services et informations sont exempts d'erreurs ou adaptés à leurs besoins spécifiques. <strong>www.dreamvisionlp.online</strong> ne s'engage pas à mettre à jour les informations et se réserve le droit de modifier à tout moment les conditions d'utilisation ou les prix des services et produits proposés sur son site web.
          </p>
          <p style={{ marginBottom: '16px' }}>
            L'accès à ce site web est gratuit. <strong>www.dreamvisionlp.online</strong> peut créer des espaces d'accès exclusifs pour ses clients ou des tiers spécialement autorisés.
          </p>
          <p style={{ marginBottom: '16px' }}>
            <strong>www.dreamvisionlp.online</strong> peut, à sa seule discrétion et à tout moment, modifier ou désactiver le site web, ainsi que limiter, annuler ou suspendre son utilisation ou son accès. Les présentes Conditions d'utilisation peuvent également être modifiées à tout moment. Veuillez consulter cette page régulièrement et consulter les Conditions en vigueur. Certaines dispositions des présentes Conditions peuvent être remplacées par des conditions expresses ou des mentions légales figurant sur certaines pages de ce site web.
          </p>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', marginTop: '20px' }}>
            Informations soumises par les utilisateurs et les contributeurs
          </h3>
          <p style={{ marginBottom: '16px' }}>
            Tout matériel, information ou communication transmis, envoyé ou publié sur ce site web sera considéré comme non confidentiel, et <strong>www.dreamvisionlp.online</strong> décline toute responsabilité en cas de violation des droits de ses créateurs. Il est strictement interdit de transmettre, d'échanger ou de publier, via ce site web, tout contenu obscène, diffamatoire ou illégal, ainsi que des textes ou créations de tiers sans l'autorisation de l'auteur. <strong>www.dreamvisionlp.online</strong> se réserve le droit de restreindre l'accès aux informations soumises par des tiers à ses utilisateurs.
          </p>
          <p style={{ marginBottom: '16px' }}>
            <strong>www.dreamvisionlp.online</strong> peut, sans y être obligé, surveiller, examiner et restreindre l'accès à toute zone du site web où les utilisateurs transmettent et échangent des informations entre eux, y compris, mais sans s'y limiter, les salons de discussion, les centres de messagerie ou autres forums de discussion, et peut supprimer ou refuser l'accès à ces informations ou communications. Cependant, <strong>www.dreamvisionlp.online</strong> n'est pas responsable du contenu des informations échangées entre les utilisateurs, qu'il soit légal ou illégal.
          </p>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', marginTop: '20px' }}>
            Limitation de responsabilité
          </h3>
          <p style={{ marginBottom: '16px' }}>
            Les contenus sont fournis sur ce site web sans aucune garantie expresse ou implicite de qualité marchande ou d'adéquation à un usage particulier. <strong>www.dreamvisionlp.online</strong> ne saurait en aucun cas être tenu responsable des dommages, y compris les pertes de profits, les interruptions d'activité ou les pertes d'informations résultant de l'utilisation ou de l'impossibilité d'utiliser ces contenus. <strong>www.dreamvisionlp.online</strong> ne garantit pas l'exactitude ni l'exhaustivité des informations, textes, graphiques, liens ou autres éléments contenus dans les supports.
          </p>
          <p style={{ marginBottom: '16px' }}>
            <strong>www.dreamvisionlp.online</strong> décline toute responsabilité en cas de violation des droits d'auteur résultant des informations, documents et éléments publiés sur ce site web et s'engage à les supprimer dès notification de la violation.
          </p>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', marginTop: '20px' }}>
            Erreurs
          </h3>
          <p style={{ marginBottom: '16px' }}>
            Les documents, informations, images et graphiques publiés sur ce site web peuvent contenir des inexactitudes techniques ou des erreurs typographiques. <strong>www.dreamvisionlp.online</strong> et/ou ses fournisseurs respectifs ne sauraient en aucun cas être tenus responsables des dommages directs ou indirects résultant de l'impossibilité d'utilisation, de la perte de données ou de profits, résultant de l'accès ou du fonctionnement du site web, des services proposés ou des informations disponibles sur ce site. L'accès aux services, contenus, informations et fonctionnalités de ce site web ne garantit pas leur qualité.
          </p>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', marginTop: '20px' }}>
            Liens vers des sites web tiers
          </h3>
          <p style={{ marginBottom: '16px' }}>
            Les sites web externes ne sont pas sous le contrôle de <strong>www.dreamvisionlp.online</strong>, qui décline toute responsabilité quant au contenu des autres sites web liés ou accessibles via notre site. <strong>www.dreamvisionlp.online</strong> se réserve le droit de supprimer tout lien ou lien vers d'autres sites web ou services à tout moment. <strong>www.dreamvisionlp.online</strong> ne cautionne aucune entreprise ni aucun produit lié, accessible ou annoncé via notre site web, ni aucune publicité publiée sur celui-ci, et se réserve le droit de publier cet avertissement sur ses sites web chaque fois qu'elle le juge nécessaire.
          </p>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', marginTop: '20px' }}>
            Droits d'auteur et propriété intellectuelle
          </h3>
          <p style={{ marginBottom: '16px' }}>
            Les documents, contenus et créations de ce site web appartiennent à <strong>www.dreamvisionlp.online</strong> et à ses contributeurs. La paternité du contenu, des documents et des images affichés sur <strong>www.dreamvisionlp.online</strong> est protégée par les lois nationales et internationales. Ils ne peuvent être copiés, reproduits, modifiés, publiés, mis à jour, postés, transmis ou distribués de quelque manière que ce soit sans l'autorisation écrite préalable de <strong>www.dreamvisionlp.online</strong>.
          </p>
          <p style={{ marginBottom: '16px' }}>
            Les images contenues sur ce site web sont incorporées aux présentes à des fins de visualisation uniquement et, sauf autorisation écrite expresse, ne peuvent être ni enregistrées ni téléchargées. Toute reproduction ou stockage de contenus récupérés sur ce service exposera les contrevenants à des sanctions légales.
          </p>
          <p style={{ marginBottom: '16px' }}>
            Le nom <strong>www.dreamvisionlp.online</strong>, son logo, le nom de domaine d'accès à Internet, ainsi que tous les éléments caractéristiques de la technologie développée et présentée ici, sous forme de bases de données, constituent des marques déposées et des droits de propriété intellectuelle privés, et tous les droits découlant de leur enregistrement sont protégés par la loi. Certains droits d'utilisation peuvent être cédés par <strong>www.dreamvisionlp.online</strong> en vertu d'un contrat ou d'une licence spéciale, révocable à tout moment en cas de non-respect de ses conditions.
          </p>
          <p style={{ marginBottom: '16px' }}>
            Les marques déposées de <strong>www.dreamvisionlp.online</strong> ne peuvent être utilisées publiquement qu'avec autorisation expresse. L'utilisation de ces marques à des fins publicitaires et promotionnelles doit être dûment déclarée.
          </p>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', marginTop: '20px' }}>
            Réclamations pour violation de droits d'auteur
          </h3>
          <p style={{ marginBottom: '16px' }}>
            <strong>www.dreamvisionlp.online</strong> respecte la propriété intellectuelle d'autrui et demande à ses membres d'en faire autant. Toute violation du droit d'auteur doit être signalée via les canaux de contact répertoriés sur notre site Web et accompagnée de documents et d'informations confirmant la paternité.
          </p>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', marginTop: '20px' }}>
            Contact
          </h3>
          <p style={{ marginBottom: '16px' }}>
            Pour toute question concernant ces Conditions d'Utilisation, veuillez nous contacter à : <strong>contact@dreamvisionlp.online</strong>
          </p>
          <p style={{ marginBottom: '16px', marginTop: '20px' }}>
            Ces Conditions d'Utilisation sont juridiquement contraignantes et s'appliquent à tous les utilisateurs du site <strong>https://www.dreamvisionlp.online/</strong>
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default ProtocoleSite;
