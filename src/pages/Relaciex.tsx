import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { CheckCircle, Clock, Shield } from 'lucide-react';
import { Button } from '../components/ui/Button';

const MapaDaReconquistaLanding: React.FC = () => {
  const [showContent, setShowContent] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15 * 60);
  const playerContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const smartEl = document.createElement('vturb-smartplayer');
    smartEl.id = 'vid-689cf8489c1ba5538391e1a';  // Novo ID do player
    smartEl.setAttribute('style', 'display:block; margin:0 auto; width:100%; max-width:400px;');

    if (playerContainerRef.current) {
      playerContainerRef.current.innerHTML = '';
      playerContainerRef.current.appendChild(smartEl);
    }

    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = 'https://scripts.converteai.net/6e999b30-1d79-497a-a68a-97fe5248857e/players/689cf8489c1ba5538391e1a/v4/player.js'; // Novo link do script
    s.async = true;
    document.head.appendChild(s);

    return () => {
      try {
        if (playerContainerRef.current) playerContainerRef.current.innerHTML = '';
        const scripts = document.querySelectorAll('script[src*="689cf8489c1ba5538391e1a"]');
        scripts.forEach((node) => node.parentElement?.removeChild(node));
      } catch {}
    };
  }, []);

  useEffect(() => {
    const SECONDS_TO_DISPLAY = 600; // Delay aumentado para 10 minutos (600 segundos)
    let attempts = 0;
    let elsDisplayed = false;
    const key = `alreadyElsDisplayedReconquista${SECONDS_TO_DISPLAY}`;
    const already = localStorage.getItem(key);

    const showHidden = () => {
      elsDisplayed = true;
      setShowContent(true);
      localStorage.setItem(key, 'true');
    };

    const watchProgress = () => {
      const smartplayer = (window as any).smartplayer;
      if (!smartplayer || !(smartplayer.instances && smartplayer.instances.length)) {
        if (attempts >= 10) return;
        attempts += 1;
        return setTimeout(watchProgress, 1000);
      }
      smartplayer.instances[0].on('timeupdate', () => {
        if (elsDisplayed || smartplayer.instances[0].smartAutoPlay) return;
        if (smartplayer.instances[0].video.currentTime < SECONDS_TO_DISPLAY) return;
        showHidden();
      });
    };

    if (already === 'true') setTimeout(showHidden, 100);
    else watchProgress();
  }, []);

  useEffect(() => {
    if (!showContent) return;
    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timer);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [showContent]);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const r = s % 60;
    return { minutes: m.toString().padStart(2, '0'), seconds: r.toString().padStart(2, '0') };
  };
  const { minutes, seconds } = formatTime(timeLeft);

  const handleOrderClick = () => {
    try {
      (window as any).fbq && (window as any).fbq('track', 'InitiateCheckout');
    } catch {}
    window.open('https://pay.hotmart.com/G97220862L?checkoutMode=10', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Helmet>
        <title>重新赢回爱：重获爱情地图</title>
        <meta name="description" content="发现如何通过重获爱情地图中的独特技巧重新赢回你的前任。" />
      </Helmet>

      <header className="py-6 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3">
            <CheckCircle className="w-6 h-6 text-purple-400" />
            <span className="text-[1.05rem] font-bold text-white">重获爱情</span>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden py-10 lg:py-14">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h1 className="text-white font-bold leading-tight text-[clamp(1.2rem,3.8vw,1.9rem)]">
              通过重获爱情地图重新赢回你的前任
              <span className="block mt-1 text-[clamp(1rem,3.4vw,1.3rem)] font-semibold opacity-90">
                用经过验证的技巧重新掌控你的关系
              </span>
            </h1>
          </div>

          <div className="max-w-[640px] w-full mx-auto">
            <div className="relative">
              <div ref={playerContainerRef} className="w-full" />
            </div>
          </div>

          {showContent && (
            <div className="animate-fade-in mt-10">
              <div className="max-w-4xl mx-auto bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30 rounded-xl p-6 md:p-8">
                <h3 className="text-white text-[1.2rem] md:text-[1.35rem] font-bold leading-snug mb-5">
                  现在是你重新赢回爱的机会。
                  <br />
                  查看你的完整计划：
                </h3>

                <div className="flex justify-center items-center gap-4 mb-6">
                  <div className="bg-black/50 rounded-lg p-4 text-center min-w-[84px]">
                    <div className="text-3xl md:text-4xl font-bold text-red-400">{minutes}</div>
                    <div className="text-xs text-gray-300">分钟</div>
                  </div>
                  <div className="text-2xl text-white font-bold">:</div>
                  <div className="bg-black/50 rounded-lg p-4 text-center min-w-[84px]">
                    <div className="text-3xl md:text-4xl font-bold text-red-400">{seconds}</div>
                    <div className="text-xs text-gray-300">秒</div>
                  </div>
                </div>

                <div className="text-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-[1.05rem] md:text-[1.2rem] px-10 py-5 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
                    onClick={handleOrderClick}
                  >
                    <Clock className="w-6 h-6 mr-3" />
                    立即获取访问权限
                  </Button>

                  <div className="flex items-center justify-center mt-5 text-green-400">
                    <Shield className="w-5 h-5 mr-2" />
                    <span className="text-sm">30 天保证，否则全额退款</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto mt-10">
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 text-center">
                  <CheckCircle className="w-9 h-9 text-purple-400 mx-auto mb-3" />
                  <h4 className="text-white font-bold mb-1">经过验证的方法</h4>
                  <p className="text-gray-300 text-sm">基于真实关系的重获爱情技巧。</p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 text-center">
                  <Clock className="w-9 h-9 text-blue-400 mx-auto mb-3" />
                  <h4 className="text-white font-bold mb-1">易于跟随</h4>
                  <p className="text-gray-300 text-sm">快速有效的技巧，今天就能开始。</p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 text-center">
                  <Shield className="w-9 h-9 text-green-400 mx-auto mb-3" />
                  <h4 className="text-white font-bold mb-1">全面支持</h4>
                  <p className="text-gray-300 text-sm">我们会帮助你成功重获爱情。</p>
                </div>
              </div>

              <div className="text-center mt-10">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-[1.15rem] px-14 py-6 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse"
                  onClick={handleOrderClick}
                >
                  立即开始你的重获爱情之旅
                </Button>
                <p className="text-gray-400 mt-3 text-xs md:text-sm">
                  *限时优惠 — 今天就预定名额。
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      <footer className="border-t border-gray-800 bg-gray-900 py-8 mt-16">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-5">
            <a href="/terms" className="text-gray-400 hover:text-purple-400 transition-colors">
              使用条款
            </a>
            <a href="/privacy" className="text-gray-400 hover:text-purple-400 transition-colors">
              隐私政策
            </a>
          </div>
          <p className="text-gray-500 text-sm">&copy; 2025 重获爱情地图. 保留所有权利。</p>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.8s ease-out; }
      `}</style>
    </div>
  );
};

export default MapaDaReconquistaLanding;
