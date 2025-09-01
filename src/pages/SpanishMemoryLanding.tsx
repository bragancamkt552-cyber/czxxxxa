import React, { useState, useEffect } from 'react';

// Componente principal do site
const ProtocoleSite = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [showButton, setShowButton] = useState(false);

  // Configura a data atual em formato francês
  useEffect(() => {
    const data = new Date();
    const options: Intl.DateTimeFormatOptions = {
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

      {/* Seção de comentários do Facebook - cores originais */}
      <section style={{ 
        background: 'linear-gradient(135deg, rgb(202,248,128) 0%, rgb(113,206,126) 100%)'
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
          
          {/* Links de políticas */}
          <div className="flex flex-wrap gap-4 justify-center pt-4" style={{ borderTop: '1px solid #dadde1' }}>
            <a 
              href="https://protocole.paiscelestiais.com.br/politiques-de-confidentialite/" 
              className="hover:underline"
              style={{ color: '#385898' }}
            >
              Politiques de confidentialité
            </a>
            <a 
              href="https://protocole.paiscelestiais.com.br/" 
              className="hover:underline"
              style={{ color: '#385898' }}
            >
              Conditions d'utilisation
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProtocoleSite;
