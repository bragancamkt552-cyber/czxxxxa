import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';

const HindiMemoryLanding: React.FC = () => {
  const playerContainerRef = useRef<HTMLDivElement>(null);

  // ----- VTurb Smartplayer (ATUALIZADO PARA "ab-test") -----
  useEffect(() => {
    // cria o custom element com o NOVO ID no formato "ab-..."
    const smartEl = document.createElement('vturb-smartplayer');
    smartEl.id = 'ab-68a1f56c81401ba8c783d375';
    smartEl.setAttribute(
      'style',
      'display:block; margin:0 auto; width:100%; max-width:640px;'
    );

    if (playerContainerRef.current) {
      playerContainerRef.current.innerHTML = '';
      playerContainerRef.current.appendChild(smartEl);
    }

    // injeta o script do caminho "ab-test/.../player.js"
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src =
      'https://scripts.converteai.net/6e999b30-1d79-497a-a68a-97fe5248857e/ab-test/68a1f56c81401ba8c783d375/player.js';
    s.async = true;
    document.head.appendChild(s);

    return () => {
      try {
        if (playerContainerRef.current) playerContainerRef.current.innerHTML = '';
        const scripts = document.querySelectorAll(
          'script[src*="68a1f56c81401ba8c783d375"]'
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
      <Helmet htmlAttributes={{ lang: 'hi' }}>
        <title>NASA द्वारा प्रशिक्षित न्यूरोसाइंटिस्ट: 8-सेकंड ब्रेन ट्रिक से याददाश्त तेज़ करें</title>
        <meta
          name="description"
          content="NASA-प्रशिक्षित न्यूरोसाइंटिस्ट का 8-सेकंड ब्रेन ट्रिक सीखें — जल्दी याद करें और लंबे समय तक याद रखें।"
        />

        {/* Meta Pixel (Facebook) */}
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

      {/* शीर्ष */}
      <header className="py-6 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3">
            <CheckCircle className="w-6 h-6 text-purple-400" />
            <span className="text-[1.05rem] font-bold text-white">स्मृति-वृद्धि कार्यक्रम</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden py-10 lg:py-14">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h1 className="text-white font-bold leading-tight text-[clamp(1.2rem,3.8vw,1.9rem)]">
              NASA द्वारा प्रशिक्षित न्यूरोसाइंटिस्ट
              <span className="block mt-1 text-[clamp(1rem,3.4vw,1.3rem)] font-semibold opacity-90">
                “यह 8-सेकंड का ब्रेन ट्रिक करें” — याददाश्त और तेज़ बनाएं
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

      {/* पाद लेख */}
      <footer className="border-t border-gray-800 bg-gray-900 py-8 mt-16">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-5">
            <button
              onClick={() => openWithTab('terms')}
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              उपयोग की शर्तें
            </button>
            <button
              onClick={() => openWithTab('privacy')}
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              गोपनीयता नीति
            </button>
          </div>
          <p className="text-gray-500 text-sm">&copy; 2025 स्मृति-वृद्धि कार्यक्रम. सर्वाधिकार सुरक्षित।</p>
        </div>
      </footer>

      {/* Modal: शर्तें / गोपनीयता (हिंदी) */}
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
                {activeTab === 'terms' ? 'नियम एवं शर्तें' : 'गोपनीयता नीति'}
              </h3>
              <button
                onClick={() => setOpenModal(false)}
                className="text-gray-400 hover:text-white"
                aria-label="बंद करें"
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
                  नियम एवं शर्तें
                </button>
                <button
                  onClick={() => setActiveTab('privacy')}
                  className={`px-4 py-2 text-sm border-l border-gray-700 ${
                    activeTab === 'privacy'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:text-white'
                  }`}
                >
                  गोपनीयता नीति
                </button>
              </div>
            </div>

            {/* body */}
            <div className="max-h-[70vh] overflow-y-auto px-5 pb-6 pt-4 leading-relaxed text-sm text-gray-200">
              {activeTab === 'terms' ? (
                <div className="space-y-4">
                  <p className="text-gray-300">
                    यह वेबसाइट (“वेबसाइट”, “हम”) उपयोग करने पर आप इन शर्तों, लागू कानूनों एवं विनियमों से सहमत होते हैं। यदि आप किसी भी शर्त से असहमत हैं, तो कृपया वेबसाइट का उपयोग न करें। इस साइट की सामग्री पर कॉपीराइट एवं ट्रेडमार्क कानून लागू होते हैं।
                  </p>

                  <h4 className="font-semibold text-white">1. उपयोग की शर्त</h4>
                  <p>
                    वेबसाइट का उपयोग करके आप यह घोषित करते हैं कि आप लागू कानूनों का पालन करेंगे और अपने क्षेत्राधिकार के कानूनों का अनुपालन करने के लिए स्वयं जिम्मेदार हैं।
                  </p>

                  <h4 className="font-semibold text-white">2. लाइसेंस एवं सीमाएँ</h4>
                  <p>
                    हम आपको व्यक्तिगत, गैर-व्यावसायिक एवं अस्थायी देखने हेतु सामग्री की एक प्रति डाउनलोड करने का सीमित लाइसेंस देते हैं। आप सामग्री में परिवर्तन/प्रतिलिपि, व्यावसायिक उपयोग/सार्वजनिक प्रदर्शन, रिवर्स-इंजीनियरिंग, कॉपीराइट नोटिस हटाने या सामग्री को अन्य सर्वर पर मिरर नहीं कर सकते। उल्लंघन होने पर लाइसेंस स्वतः समाप्त हो जाएगा और आपको डाउनलोड की गई सभी सामग्री हटानी होगी।
                  </p>

                  <h4 className="font-semibold text-white">3. अस्वीकरण</h4>
                  <p>
                    वेबसाइट की सामग्री “जैसी है” आधार पर प्रदान की जाती है। किसी भी प्रकार की वारंटी—प्रत्यक्ष या निहित—नहीं दी जाती, जिसमें व्यापारयोग्यता, किसी विशेष उद्देश्य हेतु उपयुक्तता एवं उल्लंघन-रहित होने की वारंटी शामिल है।
                  </p>

                  <h4 className="font-semibold text-white">4. दायित्व सीमा</h4>
                  <p>
                    किसी भी परिस्थिति में वेबसाइट या उसके आपूर्तिकर्ता किसी भी नुकसान (डेटा/लाभ हानि, व्यवसाय रुकावट आदि) के लिए उत्तरदायी नहीं होंगे, भले ही ऐसी क्षति की संभावना के बारे में सूचित किया गया हो।
                  </p>

                  <h4 className="font-semibold text-white">5. सटीकता</h4>
                  <p>
                    सामग्री में तकनीकी/मुद्रण/चित्रात्मक त्रुटियाँ हो सकती हैं। हम सटीकता, पूर्णता या नवीनता की गारंटी नहीं देते और बिना सूचना संशोधन कर सकते हैं।
                  </p>

                  <h4 className="font-semibold text-white">6. लिंक</h4>
                  <p>
                    बाहरी वेबसाइटों के लिंक केवल सुविधा के लिए हैं; उनकी सामग्री के लिए हम जिम्मेदार नहीं हैं। लिंक का उपयोग आपके स्वयं के जोखिम पर है।
                  </p>

                  <h4 className="font-semibold text-white">7. संशोधन</h4>
                  <p>
                    हम किसी भी समय इन शर्तों में बदलाव कर सकते हैं। वेबसाइट का निरंतर उपयोग नवीनतम शर्तों की स्वीकृति माना जाएगा।
                  </p>

                  <h4 className="font-semibold text-white">8. प्रযोज्य कानून</h4>
                  <p>
                    ये शर्तें लागू कानूनों के अधीन हैं, और विवादों पर हमारे क्षेत्राधिकार की न्यायालयों का विशेष अधिकार होगा।
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-gray-300">
                    हम आपकी गोपनीयता का सम्मान करते हैं। एकत्रित व्यक्तिगत जानकारी का उपयोग केवल आपकी अनुभव-गुणवत्ता बढ़ाने के लिए किया जाता है। वेबसाइट का उपयोग करते समय आप इस नीति से सहमत होते हैं।
                  </p>

                  <h4 className="font-semibold text-white">1. हम क्या एकत्र करते हैं</h4>
                  <p>
                    नाम, ईमेल, फोन, पता, जन्म-तिथि और अन्य आवश्यक विवरण—जिन्हें हम लागू डेटा-संरक्षा कानूनों के अनुसार संसाधित करते हैं।
                  </p>

                  <h4 className="font-semibold text-white">2. जानकारी का उपयोग</h4>
                  <p>
                    सेवाएँ प्रदान/सुधारने, सामग्री व्यक्तिगत बनाने, संचार करने, कानूनी अनुपालन और सुरक्षा के लिए जानकारी का उपयोग किया जा सकता है।
                  </p>

                  <h4 className="font-semibold text-white">3. विज्ञापन एवं लॉग</h4>
                  <p>
                    IP, ISP, ब्राउज़र प्रकार, समय और देखे गए पृष्ठ जैसे डेटा भू-लक्ष्यीकरण और अधिक प्रासंगिक विज्ञापन दिखाने हेतु उपयोग किए जा सकते हैं।
                  </p>

                  <h4 className="font-semibold text-white">4. कुकीज़</h4>
                  <p>
                    हम कुकीज़ का उपयोग वरीयताएँ संग्रहीत करने और अनुभव सुधारने के लिए करते हैं। तृतीय-पक्ष विज्ञापनदाता कुकीज़/वेब-बीकन का उपयोग कर सकते हैं। आप कुकीज़ निष्क्रिय कर सकते हैं, पर इससे वेबसाइट का उपयोग प्रभावित हो सकता है।
                  </p>

                  <h4 className="font-semibold text-white">5. तृतीय-पक्ष लिंक</h4>
                  <p>
                    हमारी साइट पर बाहरी साइटों के लिंक हो सकते हैं; उनकी गोपनीयता प्रथाओं के लिए हम जिम्मेदार नहीं हैं।
                  </p>

                  <h4 className="font-semibold text-white">6. आपके अधिकार</h4>
                  <p>
                    आप अपनी जानकारी तक पहुँच, सुधार या मिटाने का अनुरोध कर सकते हैं, और प्रसंस्करण का विरोध/सीमा तय कर सकते हैं—हम उचित समय में उत्तर देंगे।
                  </p>

                  <h4 className="font-semibold text-white">7. अद्यतन</h4>
                  <p>
                    हम समय-समय पर इस नीति को अपडेट कर सकते हैं; अद्यतन संस्करण यहीं प्रकाशित होगा और तुरंत प्रभावी होगा।
                  </p>
                </div>
              )}

              {/* footer buttons */}
              <div className="mt-6 flex items-center justify-end gap-3">
                <Button
                  className="bg-gray-800 hover:bg-gray-700 text-gray-100"
                  onClick={() => setOpenModal(false)}
                >
                  बंद करें
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

export default HindiMemoryLanding;
