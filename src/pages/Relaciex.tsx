import React, { useState, useEffect } from 'react';

const AbundanceSite = () => {
  const [showButton, setShowButton] = useState(false);
  const [watchersCount, setWatchersCount] = useState(474);
  const [currentYear] = useState(new Date().getFullYear());
  const [userCity, setUserCity] = useState('your area');

  // Detecta a localização via IP apenas - sem avisos do browser
  useEffect(() => {
    // Primeira tentativa com ipapi.co
    fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => {
        const city = data.city || data.region || data.country_name || 'your area';
        setUserCity(city);
      })
      .catch(() => {
        // Fallback com ipinfo.io se ipapi.co falhar
        fetch('https://ipinfo.io/json')
          .then(response => response.json())
          .then(data => {
            const city = data.city || data.region || data.country || 'your area';
            setUserCity(city);
          })
          .catch(() => {
            // Fallback final com API alternativa
            fetch('https://api.db-ip.com/v2/free/self')
              .then(response => response.json())
              .then(data => {
                const city = data.city || data.stateProv || data.countryName || 'your area';
                setUserCity(city);
              })
              .catch(() => {
                setUserCity('your area');
              });
          });
      });
  }, []);

  // Simulação de pessoas entrando - contador crescente mais rápido
  useEffect(() => {
    const interval = setInterval(() => {
      setWatchersCount(prev => {
        const increment = Math.floor(Math.random() * 4) + 1; // Adiciona 1-4 pessoas
        const newCount = prev + increment;
        // Mantém entre 470-600 pessoas
        return newCount > 600 ? 470 + Math.floor(Math.random() * 30) : newCount;
      });
    }, 2000 + Math.random() * 4000); // Entre 2-6 segundos (muito mais rápido)

    return () => clearInterval(interval);
  }, []);

  // Delay de 1 hora (3600000ms) para mostrar o botão
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 3600000); // 1 hora

    return () => clearTimeout(timer);
  }, []);

  // Carrega o script do vídeo VTurb - novo ID
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://scripts.converteai.net/ec09afc3-b6c2-4de5-b556-85edb9ced296/players/68b633a9422babc4e3902a3c/v4/player.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src*="68b633a9422babc4e3902a3c"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <>
      <div 
        className="min-h-screen"
        style={{
          backgroundImage: 'url(https://media.atomicatpages.net/u/q4DGiTkDOlYWpXXoLEQFHmAp5132/Pictures/myiAtz6261736.png)',
          backgroundPosition: 'right bottom',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        {/* PRIMEIRO: Header vermelho com mensagem personalizada */}
        <header 
          style={{ backgroundColor: '#8b0000' }}
          className="py-4 text-center"
        >
          <div className="container mx-auto px-4">
            <p className="text-white text-base md:text-xl font-medium">
              You and some people from <span className="text-yellow-300 font-bold">{userCity}</span> have been selected to attend this presentation.
            </p>
          </div>
        </header>

        {/* HEADLINE PRINCIPAL - Acima do vídeo */}
        <section className="py-8 md:py-12 bg-transparent text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold text-black leading-tight mb-4 drop-shadow-lg">
              This 7-Second Brain Wave Ritual
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-red-600 leading-tight drop-shadow-lg animate-pulse">
              Attracts Money to You...
            </h2>
            <div className="mt-6 w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
          </div>
        </section>

        {/* SEGUNDO: Seção do vídeo - ABAIXO do headline */}
        <section className="py-8 md:py-12 bg-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Player de vídeo VTurb */}
              <div className="mb-6">
                <div 
                  style={{ aspectRatio: '16/9' }}
                  className="w-full"
                >
                  <vturb-smartplayer 
                    id="vid-68b633a9422babc4e3902a3c" 
                    style={{ display: 'block', margin: '0 auto', width: '100%' }}
                  />
                </div>
              </div>
              
              {/* TERCEIRO: Contador de visualizações - ABAIXO do vídeo */}
              <div className="text-center">
                <h4 className="text-black text-base md:text-lg font-medium">
                  <span className="font-bold text-red-600 animate-pulse">{watchersCount}</span> people are watching right now...
                </h4>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de referências científicas */}
        <section 
          style={{ backgroundColor: '#1b2b61' }}
          className="py-8"
        >
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-white text-xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Scientific References and Clinical Studies:
            </h3>
            <div className="max-w-4xl mx-auto">
              <img 
                src="https://media.atomicatpages.net/u/q4DGiTkDOlYWpXXoLEQFHmAp5132/Pictures/YfxNKB6928575.png" 
                alt="Scientific References"
                className="w-full h-auto"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* Seção de imagem complementar */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <img 
                src="https://media.atomicatpages.net/u/q4DGiTkDOlYWpXXoLEQFHmAp5132/Pictures/KHzQbW6336022.png" 
                alt="Brain Wave Research"
                className="w-full h-auto"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* Seção de comentários do Facebook */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              
              {/* Título da seção de comentários */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-black mb-4">Comments (47)</h2>
                <hr className="border-gray-300" />
              </div>

              {/* Comentário 1 - Sarah Johnson */}
              <div className="mb-6">
                <div className="flex gap-3 items-start">
                  <div 
                    className="w-10 h-10 rounded-full flex-shrink-0 bg-pink-200 flex items-center justify-center text-pink-700 font-semibold text-sm"
                  >
                    SJ
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-sm" style={{ color: '#1877f2' }}>Sarah Johnson</h3>
                      <span className="text-xs text-gray-500">2h</span>
                    </div>
                    <p className="text-sm mb-2" style={{ color: '#1c1e21' }}>
                      This actually worked! I was skeptical at first, but after just 3 days of doing the 7-second ritual, 
                      I received an unexpected bonus at work. My husband thought I was crazy until he saw the deposit! 💰
                    </p>
                    <div className="flex items-center gap-4 text-xs" style={{ color: '#65676b' }}>
                      <span className="cursor-pointer hover:underline font-semibold">Like</span>
                      <span className="cursor-pointer hover:underline font-semibold">Reply</span>
                      <span className="flex items-center gap-1">
                        <span>👍</span>
                        <span>❤️</span>
                        <span className="ml-1">23</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comentário 2 - Michael Chen */}
              <div className="mb-6 ml-6">
                <div className="flex gap-3 items-start">
                  <div 
                    className="w-10 h-10 rounded-full flex-shrink-0 bg-blue-200 flex items-center justify-center text-blue-700 font-semibold text-sm"
                  >
                    MC
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-sm" style={{ color: '#1877f2' }}>Michael Chen</h3>
                      <span className="text-xs text-gray-500">1h</span>
                    </div>
                    <p className="text-sm mb-2" style={{ color: '#1c1e21' }}>
                      @Sarah Johnson I just started yesterday! Already feeling more positive about money. 
                      Can you share more details about what happened?
                    </p>
                    <div className="flex items-center gap-4 text-xs" style={{ color: '#65676b' }}>
                      <span className="cursor-pointer hover:underline font-semibold">Like</span>
                      <span className="cursor-pointer hover:underline font-semibold">Reply</span>
                      <span className="flex items-center gap-1">
                        <span>👍</span>
                        <span className="ml-1">12</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comentário 3 - Emma Rodriguez */}
              <div className="mb-6">
                <div className="flex gap-3 items-start">
                  <div 
                    className="w-10 h-10 rounded-full flex-shrink-0 bg-red-800 flex items-center justify-center text-white font-semibold text-sm"
                  >
                    ER
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-sm" style={{ color: '#1877f2' }}>Emma Rodriguez</h3>
                      <span className="text-xs text-gray-500">3h</span>
                    </div>
                    <p className="text-sm mb-2" style={{ color: '#1c1e21' }}>
                      My daughter used this technique and her grades went from C's to A's! 
                      The science behind it makes so much sense. Thank you for sharing this! 🙏
                    </p>
                    <div className="flex items-center gap-4 text-xs" style={{ color: '#65676b' }}>
                      <span className="cursor-pointer hover:underline font-semibold">Like</span>
                      <span className="cursor-pointer hover:underline font-semibold">Reply</span>
                      <span className="flex items-center gap-1">
                        <span>👍</span>
                        <span>❤️</span>
                        <span>😮</span>
                        <span className="ml-1">45</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comentário 4 - David Wilson */}
              <div className="mb-6">
                <div className="flex gap-3 items-start">
                  <div 
                    className="w-10 h-10 rounded-full flex-shrink-0 bg-red-800 flex items-center justify-center text-white font-semibold text-sm"
                  >
                    DW
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-sm" style={{ color: '#1877f2' }}>David Wilson</h3>
                      <span className="text-xs text-gray-500">4h</span>
                    </div>
                    <p className="text-sm mb-2" style={{ color: '#1c1e21' }}>
                      I've been doing manifestation for years but never understood the brain wave connection. 
                      This video changed everything! Already seeing results after just one week.
                    </p>
                    <div className="flex items-center gap-4 text-xs" style={{ color: '#65676b' }}>
                      <span className="cursor-pointer hover:underline font-semibold">Like</span>
                      <span className="cursor-pointer hover:underline font-semibold">Reply</span>
                      <span className="flex items-center gap-1">
                        <span>👍</span>
                        <span>💯</span>
                        <span className="ml-1">18</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comentário 5 - Lisa Thompson */}
              <div className="mb-6">
                <div className="flex gap-3 items-start">
                  <div 
                    className="w-10 h-10 rounded-full flex-shrink-0 bg-red-800 flex items-center justify-center text-white font-semibold text-sm"
                  >
                    LT
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-sm" style={{ color: '#1877f2' }}>Lisa Thompson</h3>
                      <span className="text-xs text-gray-500">5h</span>
                    </div>
                    <p className="text-sm mb-2" style={{ color: '#1c1e21' }}>
                      Finally something that actually works! I was drowning in debt and now I have multiple income streams. 
                      The theta wave activation is real! 🌟
                    </p>
                    <div className="flex items-center gap-4 text-xs" style={{ color: '#65676b' }}>
                      <span className="cursor-pointer hover:underline font-semibold">Like</span>
                      <span className="cursor-pointer hover:underline font-semibold">Reply</span>
                      <span className="flex items-center gap-1">
                        <span>👍</span>
                        <span>❤️</span>
                        <span>🎉</span>
                        <span className="ml-1">67</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comentário 6 - James Parker */}
              <div className="mb-6">
                <div className="flex gap-3 items-start">
                  <div 
                    className="w-10 h-10 rounded-full flex-shrink-0 bg-red-800 flex items-center justify-center text-white font-semibold text-sm"
                  >
                    JP
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-sm" style={{ color: '#1877f2' }}>James Parker</h3>
                      <span className="text-xs text-gray-500">6h</span>
                    </div>
                    <p className="text-sm mb-2" style={{ color: '#1c1e21' }}>
                      My wife was skeptical but now she's a believer too! We bought our dream house last month. 
                      The 7-second ritual changed our entire financial situation. 🏡
                    </p>
                    <div className="flex items-center gap-4 text-xs" style={{ color: '#65676b' }}>
                      <span className="cursor-pointer hover:underline font-semibold">Like</span>
                      <span className="cursor-pointer hover:underline font-semibold">Reply</span>
                      <span className="flex items-center gap-1">
                        <span>👍</span>
                        <span>❤️</span>
                        <span>😍</span>
                        <span className="ml-1">89</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Plugin social do Facebook */}
              <div className="flex items-center gap-2 mt-8 pt-4 border-t border-gray-300">
                <div style={{ color: '#1877f2' }}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <span className="text-xs" style={{ color: '#65676b' }}>Facebook Comments Plugin</span>
              </div>
            </div>
          </div>
        </section>

        {/* Botão de acesso (aparece após delay de 1 hora) */}
        {showButton && (
          <section className="text-center py-12 bg-yellow-100">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto p-8 bg-white border-4 border-red-500 rounded-lg">
                <div className="text-red-600 text-2xl font-bold mb-4">
                  WAIT! In just 1:51…<br/>
                  I'll reveal my 7‑second ritual<br/>
                  that attracts money
                </div>
                <p className="text-lg mb-6 text-gray-800">
                  My wife Taylor was speechless when I used it<br/>
                  to buy our dream house.<br/><br/>
                  You don't need any equipment. You do it at home.<br/>
                  And it's so simple that my daughter used it to<br/>
                  instantly improve her grades.
                </p>
                <a 
                  href="https://hotmart.com.br" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-yellow-400 text-black font-bold py-4 px-8 rounded-lg text-lg border-4 border-blue-600 uppercase transition-transform duration-300 hover:scale-105"
                  style={{ animation: 'pulse 1.5s infinite' }}
                >
                  KEEP WATCHING TO DISCOVER<br/>
                  MY 7‑SECOND RITUAL &gt;&gt;
                </a>
              </div>
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="bg-gray-100 py-8 text-center text-xs" style={{ color: '#a6a6a6' }}>
          <div className="container mx-auto px-4">
            <p className="mb-2">Copyright {currentYear} - Abundance For All ®</p>
            <p className="mb-2">All rights reserved</p>
            <div className="mb-4">
              <a href="/terms" className="hover:underline">Terms of use</a>
              <span className="mx-2">·</span>
              <a href="/privacy" className="hover:underline">Privacy</a>
            </div>
            <p className="max-w-4xl mx-auto text-xs leading-relaxed">
              This site is not part of the Facebook or Meta Platforms, Inc. website and is NOT endorsed by Facebook in any way. 
              Facebook is a trademark of Meta Platforms, Inc. Reproduction, distribution, or modification of this website and related materials 
              in whole or in part is strictly prohibited. This website and all its contents are protected by copyright and intellectual property 
              laws of all countries. The author reserves the right to claim damages if these conditions are not followed. Every effort has been 
              made to accurately represent this program. There is no guarantee that you will achieve the desired abundance.
            </p>
          </div>
        </footer>

        {/* CSS personalizado para animações */}
        <style jsx>{`
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.07); }
            100% { transform: scale(1); }
          }
        `}</style>
      </div>
    </>
  );
};

export default AbundanceSite;
