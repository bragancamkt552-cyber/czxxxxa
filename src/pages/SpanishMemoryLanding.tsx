import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';

const ChineseMemoryLanding: React.FC = () => {
  const playerContainerRef = useRef<HTMLDivElement>(null);

  // ----- VTurb Smartplayer (NOVO) -----
  useEffect(() => {
    const smartEl = document.createElement('vturb-smartplayer');
    smartEl.id = 'vid-689ea9d23d1881737d6ea2a5'; // Novo ID do player (conforme solicitado)
    smartEl.setAttribute(
      'style',
      'display:block; margin:0 auto; width:100%; max-width:400px;'
    );

    if (playerContainerRef.current) {
      playerContainerRef.current.innerHTML = '';
      playerContainerRef.current.appendChild(smartEl);
    }

    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src =
      'https://scripts.converteai.net/6e999b30-1d79-497a-a68a-97fe5248857e/players/689ea9d23d1881737d6ea2a5/v4/player.js';
    s.async = true;
    document.head.appendChild(s);

    return () => {
      try {
        if (playerContainerRef.current) playerContainerRef.current.innerHTML = '';
        const scripts = document.querySelectorAll(
          'script[src*="689ea9d23d1881737d6ea2a5"]'
        );
        scripts.forEach((node) => node.parentElement?.removeChild(node));
      } catch {}
    };
  }, []);

  // ----- Modal de Termos / Privacidade -----
  const [openModal, setOpenModal] = useState(false);
  const [activeTab, setActiveTab] = useState<'terms' | 'privacy'>('terms');

  const openWithTab = (tab: 'terms' | 'privacy') => {
    setActiveTab(tab);
    setOpenModal(true);
  };

  // ----- PÁGINA -----
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Helmet>
        <title>NASA 训练的神经科学家：8 秒大脑技巧，快速增强记忆力</title>
        <meta
          name="description"
          content="学习由 NASA 训练的神经科学家分享的 8 秒大脑技巧，帮助你更快记忆、更久记住。"
        />

        {/* Meta Pixel（Facebook） */}
        <script>{`
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)n=f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1093258939518583');
fbq('track', 'PageView');
        `}</script>
        <noscript>{`<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1093258939518583&ev=PageView&noscript=1" />`}</noscript>
      </Helmet>

      {/* 顶部 */}
      <header className="py-6 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3">
            <CheckCircle className="w-6 h-6 text-purple-400" />
            <span className="text-[1.05rem] font-bold text-white">记忆力提升计划</span>
          </div>
        </div>
      </header>

      {/* Hero（仅播放器与标题，已移除“延迟后显示”的所有区块） */}
      <section className="relative overflow-hidden py-10 lg:py-14">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h1 className="text-white font-bold leading-tight text-[clamp(1.2rem,3.8vw,1.9rem)]">
              NASA 训练的神经科学家
              <span className="block mt-1 text-[clamp(1rem,3.4vw,1.3rem)] font-semibold opacity-90">
                “做这个 8 秒大脑技巧”，让记忆更强
              </span>
            </h1>
          </div>

          {/* Player */}
          <div className="max-w-[640px] w-full mx-auto">
            <div className="relative">
              <div ref={playerContainerRef} className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="border-t border-gray-800 bg-gray-900 py-8 mt-16">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-5">
            <button
              onClick={() => openWithTab('terms')}
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              使用条款
            </button>
            <button
              onClick={() => openWithTab('privacy')}
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              隐私政策
            </button>
          </div>
          <p className="text-gray-500 text-sm">&copy; 2025 记忆力提升计划. 保留所有权利。</p>
        </div>
      </footer>

      {/* Modal: 条款 / 隐私（中文简体） */}
      {openModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="policy-title"
        >
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setOpenModal(false)}
          />

          {/* content */}
          <div className="relative z-10 w-full max-w-3xl bg-gray-900 text-gray-100 rounded-2xl shadow-2xl border border-gray-700">
            {/* header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-800">
              <h3 id="policy-title" className="text-lg font-bold">
                {activeTab === 'terms' ? '条款与条件' : '隐私政策'}
              </h3>
              <button
                onClick={() => setOpenModal(false)}
                className="text-gray-400 hover:text-white"
                aria-label="关闭"
              >
                ✕
              </button>
            </div>

            {/* tabs */}
            <div className="px-5 pt-4">
              <div className="inline-flex rounded-lg overflow-hidden border border-gray-700">
                <button
                  onClick={() => setActiveTab('terms')}
                  className={`px-4 py-2 text-sm ${
                    activeTab === 'terms'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:text-white'
                  }`}
                >
                  条款与条件
                </button>
                <button
                  onClick={() => setActiveTab('privacy')}
                  className={`px-4 py-2 text-sm border-l border-gray-700 ${
                    activeTab === 'privacy'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:text-white'
                  }`}
                >
                  隐私政策
                </button>
              </div>
            </div>

            {/* body */}
            <div className="max-h-[70vh] overflow-y-auto px-5 pb-6 pt-4 leading-relaxed text-sm text-gray-200">
              {activeTab === 'terms' ? (
                <div className="space-y-4">
                  <p className="text-gray-300">
                    以下为本网站（“本网站”或“我们”）的服务条款。访问或使用本网站，即表示您同意受这些条款、所有适用法律与法规的约束，并承诺遵守所有适用的地方法律。如您不同意任何条款，请勿使用或访问本网站。本网站所载资料受适用的版权与商标法保护。
                  </p>

                  <h4 className="font-semibold text-white">1. 使用条款</h4>
                  <p>
                    访问本网站即表示您同意遵守本服务条款及所有适用法律法规，并确认您有责任遵守所在辖区的适用法律。如您不同意任何条款，您将被禁止使用或访问本网站。
                  </p>

                  <h4 className="font-semibold text-white">2. 许可与限制</h4>
                  <p>
                    我们授予您在非商业、临时、个人过渡性浏览的前提下，下载本网站资料（信息或软件）的一份副本之有限许可。该许可并非所有权转移，且在此许可下您不得：修改或复制资料；将资料用于任何商业目的或公开展示（无论商业或非商业）；尝试反编译或反向工程本网站所含软件；删除资料中的任何版权或所有权标识；将资料转移给他人或在其他服务器上“镜像”资料。若您违反这些限制，本许可将自动终止；我们亦可随时终止该许可。许可终止后，您应删除所下载的一切资料（无论电子或纸质）。
                  </p>

                  <h4 className="font-semibold text-white">3. 免责声明</h4>
                  <p>
                    本网站上的所有资料均按“现状”提供。我们不作任何明示或暗示的保证，在此否认包括但不限于适销性、特定用途适用性及不侵权在内的一切保证。我们亦不就资料之准确性、可能结果或可靠性作出任何陈述或保证，亦不就与本网站资料相关或与本网站链接的任何网站之使用作出保证。
                  </p>

                  <h4 className="font-semibold text-white">4. 责任限制</h4>
                  <p>
                    在任何情况下，我们或我们的供应商均不就因使用或无法使用本网站资料而引起的任何损害（包括但不限于数据或利润损失，或业务中断）承担责任，即使我们或授权代表已被口头或书面告知可能发生此类损害。某些司法辖区不允许对默示保证进行限制，或不允许对间接或附带性损害承担责任之限制，上述限制可能不适用于您。
                  </p>

                  <h4 className="font-semibold text-white">5. 资料准确性</h4>
                  <p>
                    本网站所载资料可能包括技术性、印刷性或影像性错误。我们不保证任何资料准确、完整或最新。我们可随时在不另行通知的情况下对资料进行更改，但不承诺更新。
                  </p>

                  <h4 className="font-semibold text-white">6. 链接</h4>
                  <p>
                    我们未对与本网站相链接的所有外部网站进行审查，对任何链接网站的内容不承担责任。包含任何链接并不代表我们对该网站的认可。使用任何链接网站的风险由您自行承担。
                  </p>

                  <h4 className="font-semibold text-white">7. 修改</h4>
                  <p>
                    我们可随时在不另行通知的情况下修订本服务条款。使用本网站即表示您同意受当时有效版本的条款约束。
                  </p>

                  <h4 className="font-semibold text-white">8. 适用法律</h4>
                  <p>
                    本条款受适用法律管辖并依其解释。您不可撤销地同意，将因本条款产生或与之相关的争议提交至我们所在地有管辖权的法院专属管辖。
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-gray-300">
                    我们重视您的隐私。所有收集到的个人信息仅用于帮助提升您在本网站的体验，使其更高效、愉快且个性化。使用本网站即表示您同意本隐私政策。
                  </p>

                  <h4 className="font-semibold text-white">1. 我们收集的信息</h4>
                  <p>
                    我们可能收集的个人信息包括：姓名、电子邮件、电话、住址、出生日期及其他必要信息。我们承诺按照适用的数据保护法律进行处理与保存。
                  </p>

                  <h4 className="font-semibold text-white">2. 信息的使用</h4>
                  <p>
                    我们将使用您的个人信息以提供与改进服务、个性化内容、进行沟通、满足法律合规以及加强网站安全。我们保留在不事先通知的情况下更新本隐私政策的权利。
                  </p>

                  <h4 className="font-semibold text-white">3. 广告与日志信息</h4>
                  <p>
                    如同其他网站，我们可能收集并使用与广告相关的信息，例如您的 IP、ISP、浏览器类型、访问时间以及您在本网站浏览的页面。这些信息可用于地理定向或向特定用户群体展示更相关的广告内容。
                  </p>

                  <h4 className="font-semibold text-white">4. Cookies 与网络信标</h4>
                  <p>
                    我们使用 Cookies 来存储偏好设置并改善您的浏览体验。本网站也可能使用第三方广告商（例如 Google AdSense）。这些第三方可能通过 Cookies 与/或 Web
                    Beacons 接收您的部分信息（如 IP、ISP、浏览器类型等）以实现广告定向。您可在浏览器或安全软件中关闭 Cookies，但这可能影响您使用本网站及其他网站的方式。
                  </p>

                  <h4 className="font-semibold text-white">5. 第三方链接</h4>
                  <p>
                    我们的网站可能包含第三方网站的链接。我们不对第三方网站的隐私实践或内容负责。访问第三方网站时，请查阅其隐私政策。
                  </p>

                  <h4 className="font-semibold text-white">6. 您的选择与权利</h4>
                  <p>
                    您可随时联系我们以访问、更正或请求删除您的个人信息，并在适用情况下反对或限制我们对信息的处理。根据法律规定，我们将在合理期限内予以回应。
                  </p>

                  <h4 className="font-semibold text-white">7. 政策更新</h4>
                  <p>
                    我们可能会不定期更新本隐私政策。更新后的版本将在本页面发布并立即生效。建议您定期查阅以了解最新条款。
                  </p>
                </div>
              )}

              {/* footer buttons */}
              <div className="mt-6 flex items-center justify-end gap-3">
                <Button
                  className="bg-gray-800 hover:bg-gray-700 text-gray-100"
                  onClick={() => setOpenModal(false)}
                >
                  关闭
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* styles */}
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

export default ChineseMemoryLanding;
