import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '../components/ui/Button';

const GermanLanding: React.FC = () => {
  const playerContainerRef = useRef<HTMLDivElement>(null);

  // Status der "Ton einschalten"-Leiste
  const [showUnmuteBar, setShowUnmuteBar] = useState(true);

  // ----- VTurb Smartplayer (NEU) -----
  useEffect(() => {
    const smartEl = document.createElement('vturb-smartplayer');
    // Neuer Player-ID
    smartEl.id = 'vid-68a7156a758079d62739f3b7';
    // Stil laut Snippet (max 400px)
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
      'https://scripts.converteai.net/6e999b30-1d79-497a-a68a-97fe5248857e/players/68a7156a758079d62739f3b7/v4/player.js';
    s.async = true;
    document.head.appendChild(s);

    return () => {
      try {
        if (playerContainerRef.current) playerContainerRef.current.innerHTML = '';
        const scripts = document.querySelectorAll(
          'script[src*="68a7156a758079d62739f3b7"]'
        );
        scripts.forEach((node) => node.parentElement?.removeChild(node));
      } catch {}
    };
  }, []);

  // Beobachtet den Player und zeigt/verbirgt die Unmute-Leiste
  useEffect(() => {
    let interval: number | undefined;

    const watch = () => {
      const container = playerContainerRef.current;
      const video: HTMLVideoElement | null =
        container?.querySelector('video') || null;

      if (!video) {
        interval = window.setTimeout(watch, 500) as any;
        return;
      }

      const updateBar = () => {
        const shouldShow = video.muted || video.paused;
        setShowUnmuteBar(shouldShow);
      };

      video.addEventListener('playing', updateBar);
      video.addEventListener('pause', updateBar);
      video.addEventListener('volumechange', updateBar);
      updateBar();
    };

    watch();
    return () => {
      if (interval) clearTimeout(interval);
    };
  }, []);

  // Unmute + Play beim Klick
  const handleUnmuteClick = () => {
    try {
      const container = playerContainerRef.current;
      const video: HTMLVideoElement | null =
        container?.querySelector('video') || null;
      if (video) {
        video.muted = false;
        const p = video.play();
        if (p && typeof p.then === 'function') {
          p.catch(() => {
            setTimeout(() => video.play().catch(() => {}), 150);
          });
        }
      } else {
        const sp = (window as any).smartplayer;
        if (sp && sp.instances && sp.instances[0]) {
          try {
            sp.instances[0].video.muted = false;
            sp.instances[0].video.play();
          } catch {}
        }
      }
      setShowUnmuteBar(false);
    } catch {
      setShowUnmuteBar(true);
    }
  };

  // ----- Modal AGB / Datenschutz -----
  const [openModal, setOpenModal] = useState(false);
  const [activeTab, setActiveTab] = useState<'terms' | 'privacy'>('terms');

  const openWithTab = (tab: 'terms' | 'privacy') => {
    setActiveTab(tab);
    setOpenModal(true);
  };

  // ----- SEITE -----
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Helmet>
        <title>Dream Vision</title>
        <meta name="description" content="Sehen Sie sich die Videopräsentation an." />

        {/* Performance-Marker + Preloads für den neuen VTurb-Player */}
        <script>{`!function(i,n){i._plt=i._plt||(n&&n.timeOrigin?n.timeOrigin+n.now():Date.now())}(window,performance);`}</script>
        <link
          rel="preload"
          href="https://scripts.converteai.net/6e999b30-1d79-497a-a68a-97fe5248857e/players/68a7156a758079d62739f3b7/v4/player.js"
          as="script"
        />
        <link
          rel="preload"
          href="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js"
          as="script"
        />
        {/* Kein .m3u8-Preload, da keine neue URL übergeben wurde */}
        <link rel="dns-prefetch" href="https://cdn.converteai.net" />
        <link rel="dns-prefetch" href="https://scripts.converteai.net" />
        <link rel="dns-prefetch" href="https://images.converteai.net" />
        <link rel="dns-prefetch" href="https://api.vturb.com.br" />

        {/* Meta Pixel (beibehalten) */}
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

      {/* Header leer */}
      <header className="py-4 px-4" />

      {/* Player zentriert */}
      <section className="relative overflow-hidden py-8 lg:py-12">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-[640px] w-full mx-auto">
            <div className="relative">
              <div ref={playerContainerRef} className="w-full" />
            </div>

            {/* Leiste "Klicken, um den Ton einzuschalten" */}
            {showUnmuteBar && (
              <button
                onClick={handleUnmuteClick}
                className="group mt-4 w-full flex items-center justify-center gap-3 bg-amber-500/15 hover:bg-amber-500/25 border border-amber-400/40 rounded-xl px-5 py-4 transition-all duration-200 ring-1 ring-amber-400/30"
                aria-label="Klicken, um den Ton einzuschalten"
              >
                {/* Lautsprecher-Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11 5l-4 4H4v6h3l4 4V5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15.54 8.46a5 5 0 010 7.07m2.83-9.9a9 9 0 010 12.73" />
                </svg>

                <div className="text-center">
                  <div className="text-amber-300 font-semibold text-[15px] leading-tight">
                    Klicken, um den Ton einzuschalten
                  </div>
                  <div className="text-amber-200/80 text-xs mt-0.5 animate-pulse">
                    Ton wurde vom Browser möglicherweise stummgeschaltet — tippen, um zu hören
                  </div>
                </div>

                {/* Pfeil als visueller Hinweis */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 opacity-80 group-hover:translate-x-0.5 transition-transform"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" />
                </svg>
              </button>
            )}

            {/* Zweiter Hinweis */}
            <p className="mt-3 text-center text-xs text-gray-300/80">
              Tipp: Wenn Sie keinen Ton hören, tippen Sie auf das Video oder auf die Schaltfläche oben.
            </p>
          </div>
        </div>
      </section>

      {/* Footer auf Deutsch */}
      <footer className="border-t border-gray-800 bg-gray-900 py-8 mt-16">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-5">
            <button
              onClick={() => openWithTab('terms')}
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              Allgemeine Geschäftsbedingungen
            </button>
            <button
              onClick={() => openWithTab('privacy')}
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              Datenschutzerklärung
            </button>
          </div>
          <p className="text-gray-500 text-sm">
            &copy; 2025. Alle Rechte vorbehalten.
          </p>
        </div>
      </footer>

      {/* Modal: AGB / Datenschutz (Deutsch) */}
      {openModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="policy-title"
        >
          {/* Hintergrund */}
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setOpenModal(false)}
          />

          {/* Inhalt */}
          <div className="relative z-10 w-full max-w-3xl bg-gray-900 text-gray-100 rounded-2xl shadow-2xl border border-gray-700">
            {/* Kopf */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-800">
              <h3 id="policy-title" className="text-lg font-bold">
                {activeTab === 'terms' ? 'Allgemeine Geschäftsbedingungen' : 'Datenschutzerklärung'}
              </h3>
              <button
                onClick={() => setOpenModal(false)}
                className="text-gray-400 hover:text-white"
                aria-label="Schließen"
              >
                ✕
              </button>
            </div>

            {/* Tabs */}
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
                  AGB
                </button>
                <button
                  onClick={() => setActiveTab('privacy')}
                  className={`px-4 py-2 text-sm border-l border-gray-700 ${
                    activeTab === 'privacy'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:text-white'
                  }`}
                >
                  Datenschutz
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="max-h-[70vh] overflow-y-auto px-5 pb-6 pt-4 leading-relaxed text-sm text-gray-200">
              {activeTab === 'terms' ? (
                <div className="space-y-4">
                  <p className="text-gray-300">
                    Durch den Zugriff auf diese Website erklären Sie sich mit diesen Nutzungsbedingungen,
                    allen geltenden Gesetzen und Vorschriften einverstanden und sind für deren Einhaltung verantwortlich.
                    Wenn Sie diesen Bedingungen nicht zustimmen, dürfen Sie diese Website nicht nutzen. Die Inhalte sind
                    durch geltende Urheber- und Markenrechte geschützt.
                  </p>

                  <h4 className="font-semibold text-white">1. Lizenznutzung</h4>
                  <p>
                    Es wird die Erlaubnis erteilt, vorübergehend eine Kopie der Materialien (Informationen oder Software)
                    auf dieser Website für den persönlichen, nicht-kommerziellen, vorübergehenden Gebrauch herunterzuladen.
                    Dies stellt eine Lizenz dar, keinen Eigentumsübergang. Unter dieser Lizenz dürfen Sie die Materialien
                    nicht verändern oder kopieren; nicht für kommerzielle Zwecke oder öffentliche Vorführung verwenden;
                    keine Software rückentwickeln; Urheberrechtsvermerke nicht entfernen; die Materialien nicht übertragen
                    oder auf einem anderen Server spiegeln. Die Lizenz endet automatisch bei Verstoß und kann jederzeit
                    beendet werden. Nach Beendigung müssen alle heruntergeladenen Materialien gelöscht werden.
                  </p>

                  <h4 className="font-semibold text-white">2. Haftungsausschluss</h4>
                  <p>
                    Die Materialien werden „wie besehen“ bereitgestellt. Wir geben keinerlei ausdrückliche oder
                    stillschweigende Garantien, einschließlich, aber nicht beschränkt auf Gewährleistungen der
                    Marktgängigkeit, Eignung für einen bestimmten Zweck oder Nichtverletzung von Rechten. Zudem
                    übernehmen wir keine Gewähr für Genauigkeit, Ergebnisse oder Zuverlässigkeit der Nutzung der
                    Materialien auf dieser oder verlinkten Websites.
                  </p>

                  <h4 className="font-semibold text-white">3. Beschränkungen</h4>
                  <p>
                    In keinem Fall haften wir oder unsere Lieferanten für Schäden (einschließlich, aber nicht
                    beschränkt auf Daten- oder Gewinnverluste oder Betriebsunterbrechungen), die aus der Nutzung
                    oder Unmöglichkeit der Nutzung der Materialien entstehen, selbst wenn wir auf die Möglichkeit
                    solcher Schäden hingewiesen wurden. Manche Rechtsordnungen erlauben keine Beschränkung
                    stillschweigender Gewährleistungen oder Haftung; dann gelten diese Beschränkungen ggf. nicht.
                  </p>

                  <h4 className="font-semibold text-white">4. Genauigkeit der Materialien</h4>
                  <p>
                    Die Materialien können technische, typografische oder fotografische Fehler enthalten. Wir übernehmen
                    keine Gewähr für Vollständigkeit, Aktualität oder Richtigkeit. Änderungen können jederzeit ohne
                    Ankündigung erfolgen, ohne Verpflichtung zur Aktualisierung.
                  </p>

                  <h4 className="font-semibold text-white">5. Links</h4>
                  <p>
                    Wir haben nicht alle mit dieser Website verlinkten Seiten geprüft und sind nicht für deren Inhalte
                    verantwortlich. Die Aufnahme eines Links bedeutet keine Billigung. Die Nutzung verlinkter Websites
                    erfolgt auf eigenes Risiko.
                  </p>

                  <h4 className="font-semibold text-white">6. Änderungen</h4>
                  <p>
                    Wir können diese Bedingungen jederzeit ohne Vorankündigung ändern. Durch die Nutzung der Website
                    stimmen Sie der jeweils gültigen Fassung zu.
                  </p>

                  <h4 className="font-semibold text-white">7. Anwendbares Recht</h4>
                  <p>
                    Diese Bedingungen unterliegen dem anwendbaren Recht und werden entsprechend ausgelegt. Sie
                    unterwerfen sich der ausschließlichen Zuständigkeit der Gerichte an unserem Sitz.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-gray-300">
                    Wir respektieren Ihre Privatsphäre. Alle erhobenen personenbezogenen Daten werden verwendet,
                    um Ihren Besuch produktiver und angenehmer zu gestalten. Durch die Nutzung dieser Website
                    stimmen Sie dieser Datenschutzerklärung zu.
                  </p>

                  <h4 className="font-semibold text-white">1. Welche Daten wir erheben</h4>
                  <p>
                    Wir können u. a. Ihren Namen, E-Mail-Adresse, Telefon/Handy, Anschrift, Geburtsdatum und weitere
                    erforderliche Informationen erheben. Die Verarbeitung erfolgt gemäß den geltenden Datenschutzgesetzen.
                  </p>

                  <h4 className="font-semibold text-white">2. Wie wir Daten nutzen</h4>
                  <p>
                    Zur Bereitstellung und Verbesserung von Leistungen, Personalisierung von Inhalten, Kommunikation,
                    rechtlichen Compliance-Zwecken und zur Erhöhung der Sicherheit der Website. Wir behalten uns
                    Aktualisierungen dieser Erklärung ohne vorherige Ankündigung vor.
                  </p>

                  <h4 className="font-semibold text-white">3. Werbung & Protokolle</h4>
                  <p>
                    Wie andere Websites können wir Daten im Zusammenhang mit Werbung erfassen (z. B. IP, ISP, Browsertyp,
                    Zeitpunkt des Besuchs, aufgerufene Seiten), u. a. für Geotargeting oder zielgruppenspezifische Anzeigen.
                  </p>

                  <h4 className="font-semibold text-white">4. Cookies & Web Beacons</h4>
                  <p>
                    Wir verwenden Cookies zur Speicherung von Präferenzen und zur Verbesserung der Nutzererfahrung.
                    Drittanbieter (z. B. Google AdSense) können Cookies/Web Beacons einsetzen und Teile Ihrer
                    Informationen erhalten, um relevante Werbung auszuspielen. Sie können Cookies im Browser/AV-Software
                    deaktivieren; dies kann die Nutzung der Website beeinträchtigen.
                  </p>

                  <h4 className="font-semibold text-white">5. Links zu Drittseiten</h4>
                  <p>
                    Unsere Website kann Links zu anderen Seiten enthalten. Für deren Inhalte oder Datenschutzpraktiken
                    sind wir nicht verantwortlich. Bitte prüfen Sie deren Datenschutzerklärungen.
                  </p>

                  <h4 className="font-semibold text-white">6. Ihre Rechte</h4>
                  <p>
                    Sie können uns kontaktieren, um Zugriff auf Ihre Daten zu erhalten, diese zu berichtigen oder löschen
                    zu lassen und – soweit anwendbar – der Verarbeitung zu widersprechen oder sie einzuschränken.
                  </p>

                  <h4 className="font-semibold text-white">7. Aktualisierungen</h4>
                  <p>
                    Diese Erklärung kann periodisch aktualisiert werden. Die jeweils aktuelle Version gilt ab Veröffentlichung
                    auf dieser Seite. Wir empfehlen regelmäßige Prüfung.
                  </p>
                </div>
              )}

              {/* Footer-Buttons */}
              <div className="mt-6 flex items-center justify-end gap-3">
                <Button
                  className="bg-gray-800 hover:bg-gray-700 text-gray-100"
                  onClick={() => setOpenModal(false)}
                >
                  Schließen
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Styles */}
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

export default GermanLanding;
