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
      // Cleanup
      const existingScript = document.querySelector('script[src*="68b60b9d19546f43f5884ff5"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  // Carrega scripts externos necessários
  useEffect(() => {
    // UTMify script
    const utmifyScript = document.createElement('script');
    utmifyScript.src = "https://cdn.utmify.com.br/scripts/utms/latest.js";
    utmifyScript.setAttribute('data-utmify-prevent-subids', '');
    utmifyScript.async = true;
    utmifyScript.defer = true;
    document.head.appendChild(utmifyScript);

    // Facebook Pixel (exemplo - substitua pelo seu pixel)
    const fbScript = document.createElement('script');
    fbScript.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '1275089334318832');
      fbq('track', 'PageView');
    `;
    document.head.appendChild(fbScript);

    return () => {
      // Cleanup scripts
      const scripts = document.querySelectorAll('script[src*="utmify"], script[src*="fbevents"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Meta tags e SEO (seria implementado via Head no Next.js) */}
      <div style={{ display: 'none' }}>
        <meta charSet="UTF-8" />
        <title>Protocole37 – Protocole</title>
        <meta name="robots" content="max-image-preview:large" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </div>

      {/* Header com mensagem de data */}
      <div className="bg-gray-100 py-4 text-center">
        <span className="text-sm text-gray-700">
          En raison de la forte demande d'accès, nous garantissons la présentation jusqu'à aujourd'hui le {currentDate}
        </span>
      </div>

      {/* Seção do vídeo principal */}
      <div className="bg-white py-8">
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
      <div className="text-center py-4">
        <p className="text-gray-700">Regardez la vidéo pour débloquer la recette.</p>
      </div>

      {/* Seção de comentários do Facebook */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8">
            
            {/* Título da seção de comentários */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">24 Commentaires</h2>
              <hr className="border-gray-300" />
            </div>

            {/* Comentário 1 - Antoine Dubois */}
            <div className="flex gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
              <img 
                src="https://protocole.paiscelestiais.com.br/wp-content/uploads/2025/06/homem-3.jpg" 
                alt="Antoine Dubois"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="font-bold text-gray-800">Antoine Dubois</h3>
                <p className="text-gray-700 mt-2">
                  Je suis de Lyon et je suis vraiment confiant après avoir lu les commentaires. 
                  J'ai longtemps cherché un moyen d'améliorer mon haleine, et j'ai bon espoir 
                  que cette approche m'aide aussi à retrouver une sensation de fraîcheur. 😍
                </p>
                <div className="text-sm text-gray-500 mt-2">
                  Répondre · Aimer · Suivre · 1 h
                </div>
              </div>
            </div>

            {/* Comentário 2 - Sophie Moreau */}
            <div className="flex gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
              <img 
                src="https://protocole.paiscelestiais.com.br/wp-content/uploads/2025/06/gile-16.jpg" 
                alt="Sophie Moreau"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="font-bold text-gray-800">Sophie Moreau</h3>
                <p className="text-gray-700 mt-2">
                  Je suis en plein processus, c'est mon huitième jour. J'appréhendais un peu 
                  la sensation de bouche sèche au début, mais la fraîcheur de mon haleine 
                  s'est vraiment bien installée. Ma confiance est revenue quand ma sensation 
                  en bouche est redevenue agréable, vers le cinquième jour.
                </p>
                <div className="text-sm text-gray-500 mt-2">
                  Répondre · Aimer · Suivre · 4 min
                </div>
              </div>
            </div>

            {/* Comentário 3 - Chloé Lefevre */}
            <div className="flex gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
              <img 
                src="https://protocole.paiscelestiais.com.br/wp-content/uploads/2025/06/depo.jpg" 
                alt="Chloé Lefevre"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="font-bold text-gray-800">Chloé Lefevre</h3>
                <p className="text-gray-700 mt-2">
                  En lisant ton histoire, Chloé, je me reconnais. J'ai longtemps cherché 
                  une solution pour un hálito vraiment frais, et ça a vraiment affecté ma confiance. 
                  Je commence cette démarche pleine d'espoir.
                </p>
                <div className="text-sm text-gray-500 mt-2">
                  Répondre · Aimer · Suivre · 6 min
                </div>
              </div>
            </div>

            {/* Comentário 4 - Élise Petit */}
            <div className="flex gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
              <img 
                src="https://protocole.paiscelestiais.com.br/wp-content/uploads/2025/06/Absolute_Reality_v16_HighlyRealistic_HeadToToe_Image_of_a_Fair_0.jpg" 
                alt="Élise Petit"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="font-bold text-gray-800">Élise Petit</h3>
                <p className="text-gray-700 mt-2">
                  En lisant ton histoire, Chloé, je me reconnais. J'ai longtemps cherché 
                  une solution pour un hálito vraiment frais, et ça a vraiment affecté ma confiance. 
                  Je commence cette démarche pleine d'espoir.
                </p>
                <div className="text-sm text-gray-500 mt-2">
                  Répondre · Aimer · Suivre · 14 min
                </div>
              </div>
            </div>

            {/* Comentário 5 - Isabelle Mercier */}
            <div className="flex gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
              <img 
                src="https://protocole.paiscelestiais.com.br/wp-content/uploads/2025/06/mulher-de-oculos5.png" 
                alt="Isabelle Mercier"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="font-bold text-gray-800">Isabelle Mercier</h3>
                <p className="text-gray-700 mt-2">
                  C'est super de voir des retours aussi positifs avec cette approche ! 
                  Félicitations Chloé d'avoir trouvé quelque chose qui vous apporte un tel bien-être. 
                  On sait combien c'est important de se sentir à l'aise avec son haleine.
                </p>
                <div className="text-sm text-gray-500 mt-2">
                  Répondre · Aimer · Suivre · 10 min
                </div>
              </div>
            </div>

            {/* Comentário 6 - Marie-Laure */}
            <div className="flex gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
              <img 
                src="https://protocole.paiscelestiais.com.br/wp-content/uploads/2025/06/woman-3.jpg" 
                alt="Marie-Laure"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="font-bold text-gray-800">Marie-Laure</h3>
                <p className="text-gray-700 mt-2">
                  Merci les gars ! Je vais l'acheter.
                </p>
                <div className="text-sm text-gray-500 mt-2">
                  Répondre · Aimer · Suivre · 6 min
                </div>
              </div>
            </div>

            {/* Comentário 7 - Julien Rousseau */}
            <div className="flex gap-4 mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
              <img 
                src="https://protocole.paiscelestiais.com.br/wp-content/uploads/2025/06/woman-marie-laure.jpg" 
                alt="Julien Rousseau"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="font-bold text-gray-800">Julien Rousseau</h3>
                <p className="text-gray-700 mt-2">
                  C'est vrai, j'avais la bouche un peu sèche au début, mais je me suis vite 
                  sentie plus propre et plus fraîche. J'ai maintenant une haleine plus sûre de moi. 
                  C'est ce qui m'a aidée ; ça a vraiment changé notre quotidien.
                </p>
                <div className="text-sm text-gray-500 mt-2">
                  Répondre · Aimer · Suivre · 35 min
                </div>
              </div>
            </div>

            {/* Comentário 8 - Lucas Girard */}
            <div className="flex gap-4 mb-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
              <img 
                src="https://protocole.paiscelestiais.com.br/wp-content/uploads/2025/06/homem-2.jpg" 
                alt="Lucas Girard"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="font-bold text-gray-800">Lucas Girard</h3>
                <p className="text-gray-700 mt-2">
                  Je pense que cette méthode de rafraîchissement de l'haleine devrait être 
                  connue de plus de monde. C'est formidable de pouvoir partager cette découverte.
                </p>
                <div className="text-sm text-gray-500 mt-2">
                  Répondre · Aimer · Suivre · 1 h
                </div>
              </div>
            </div>

            {/* Plugin social do Facebook */}
            <div className="flex items-center gap-2 mt-8 pt-4 border-t border-gray-200">
              <div className="text-blue-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <span className="text-sm text-gray-600">Plug-in social Facebook</span>
            </div>
          </div>
        </div>
      </section>

      {/* Botão de acesso (aparece após delay de 1 hora) */}
      {showButton && (
        <div className="text-center py-8 bg-green-50">
          <div className="container mx-auto px-4">
            <a 
              href="https://hotmart.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors duration-300 shadow-lg"
            >
              ACESSAR PROTOCOLE
            </a>
            <p className="text-sm text-gray-600 mt-4">
              Acesso liberado após 1 hora de visualização
            </p>
          </div>
        </div>
      )}

      {/* Footer com disclaimers e políticas */}
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-sm text-gray-600 mb-6">
            <p className="mb-4">
              Sur <strong>protocole.paiscelestiais.com.br</strong>, l'ensemble du contenu et des 
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
          <div className="flex flex-wrap gap-4 justify-center border-t border-gray-300 pt-4">
            <a 
              href="https://protocole.paiscelestiais.com.br/politiques-de-confidentialite/" 
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Politiques de confidentialité
            </a>
            <a 
              href="https://protocole.paiscelestiais.com.br/" 
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Conditions d'utilisation
            </a>
          </div>
        </div>
      </footer>

      {/* NoScript para Facebook Pixel */}
      <noscript>
        <img 
          height="1" 
          width="1" 
          style={{ display: 'none' }} 
          src="https://www.facebook.com/tr?id=1275089334318832&ev=PageView&noscript=1&cd%5Bpage_title%5D=Protocole37&cd%5Bpost_type%5D=page&cd%5Bpost_id%5D=35&cd%5Bplugin%5D=PixelYourSite&cd%5Buser_role%5D=guest&cd%5Bevent_url%5D=protocole.paiscelestiais.com.br%2Fpah37%2F" 
          alt="" 
        />
      </noscript>
    </div>
  );
};

export default ProtocoleSite;
