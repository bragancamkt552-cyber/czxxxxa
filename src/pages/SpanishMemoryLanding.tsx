import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '../components/ui/Button';

const IndonesiaLanding: React.FC = () => {
  const playerContainerRef = useRef<HTMLDivElement>(null);

  // ----- VTurb Smartplayer (NOVO) -----
  useEffect(() => {
    const smartEl = document.createElement('vturb-smartplayer');
    // ID do player novo (bate com o path .../players/68a4ac52e4999a94ff65d436/...)
    smartEl.id = 'vid-68a4ac52e4999a94ff65d436';
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
      'https://scripts.converteai.net/6e999b30-1d79-497a-a68a-97fe5248857e/players/68a4ac52e4999a94ff65d436/v4/player.js';
    s.async = true;
    document.head.appendChild(s);

    return () => {
      try {
        if (playerContainerRef.current) playerContainerRef.current.innerHTML = '';
        const scripts = document.querySelectorAll(
          'script[src*="68a4ac52e4999a94ff65d436"]'
        );
        scripts.forEach((node) => node.parentElement?.removeChild(node));
      } catch {}
    };
  }, []);

  // ----- Modal Syarat & Ketentuan / Kebijakan Privasi -----
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
        <title>Halaman Video</title>
        <meta name="description" content="Tonton presentasi video." />

        {/* Perf marker + Preloads do VTurb (conforme enviados) */}
        <script>{`!function(i,n){i._plt=i._plt||(n&&n.timeOrigin?n.timeOrigin+n.now():Date.now())}(window,performance);`}</script>
        <link
          rel="preload"
          href="https://scripts.converteai.net/6e999b30-1d79-497a-a68a-97fe5248857e/players/68a4ac52e4999a94ff65d436/v4/player.js"
          as="script"
        />
        <link
          rel="preload"
          href="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js"
          as="script"
        />
        <link
          rel="preload"
          href="https://cdn.converteai.net/6e999b30-1d79-497a-a68a-97fe5248857e/68a4ac3aae4be6b5c2220505/main.m3u8"
          as="fetch"
        />
        <link rel="dns-prefetch" href="https://cdn.converteai.net" />
        <link rel="dns-prefetch" href="https://scripts.converteai.net" />
        <link rel="dns-prefetch" href="https://images.converteai.net" />
        <link rel="dns-prefetch" href="https://api.vturb.com.br" />

        {/* Meta Pixel (mantido) */}
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

      {/* Header limpo (sem títulos/temas) */}
      <header className="py-4 px-4" />

      {/* Player centralizado (nenhum título acima) */}
      <section className="relative overflow-hidden py-10 lg:py-14">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-[640px] w-full mx-auto">
            <div className="relative">
              <div ref={playerContainerRef} className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé em indonésio */}
      <footer className="border-t border-gray-800 bg-gray-900 py-8 mt-16">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-5">
            <button
              onClick={() => openWithTab('terms')}
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              Syarat & Ketentuan
            </button>
            <button
              onClick={() => openWithTab('privacy')}
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              Kebijakan Privasi
            </button>
          </div>
          <p className="text-gray-500 text-sm">
            &copy; 2025. Semua hak dilindungi.
          </p>
        </div>
      </footer>

      {/* Modal: Syarat & Ketentuan / Kebijakan Privasi (Bahasa Indonesia) */}
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
                {activeTab === 'terms' ? 'Syarat & Ketentuan' : 'Kebijakan Privasi'}
              </h3>
              <button
                onClick={() => setOpenModal(false)}
                className="text-gray-400 hover:text-white"
                aria-label="Tutup"
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
                  Syarat & Ketentuan
                </button>
                <button
                  onClick={() => setActiveTab('privacy')}
                  className={`px-4 py-2 text-sm border-l border-gray-700 ${
                    activeTab === 'privacy'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:text-white'
                  }`}
                >
                  Kebijakan Privasi
                </button>
              </div>
            </div>

            {/* body */}
            <div className="max-h-[70vh] overflow-y-auto px-5 pb-6 pt-4 leading-relaxed text-sm text-gray-200">
              {activeTab === 'terms' ? (
                <div className="space-y-4">
                  <p className="text-gray-300">
                    Dengan mengakses situs ini, Anda setuju untuk terikat oleh syarat layanan ini,
                    semua hukum serta peraturan yang berlaku, dan Anda bertanggung jawab untuk
                    mematuhi hukum setempat yang relevan. Jika Anda tidak setuju dengan syarat ini,
                    mohon tidak menggunakan situs ini. Materi pada situs ini dilindungi oleh hukum
                    hak cipta dan merek dagang yang berlaku.
                  </p>

                  <h4 className="font-semibold text-white">1. Lisensi Penggunaan</h4>
                  <p>
                    Izin diberikan untuk mengunduh sementara satu salinan materi (informasi atau
                    perangkat lunak) di situs ini untuk keperluan tampilan pribadi dan non-komersial
                    secara sementara. Ini adalah pemberian lisensi, bukan pengalihan hak milik, dan
                    di bawah lisensi ini Anda tidak boleh: memodifikasi atau menyalin materi;
                    menggunakan materi untuk tujuan komersial atau untuk tampilan publik
                    (komersial/non-komersial); mencoba membongkar atau merekayasa balik perangkat
                    lunak apa pun di situs; menghapus tanda hak cipta atau kepemilikan; memindahkan
                    materi ke orang lain atau “mirror” materi di server lain. Lisensi berakhir
                    otomatis jika Anda melanggar ketentuan ini dan dapat dihentikan kapan pun. Saat
                    berakhir, Anda harus menghapus semua materi yang diunduh, baik elektronik maupun
                    cetak.
                  </p>

                  <h4 className="font-semibold text-white">2. Disclaimer</h4>
                  <p>
                    Materi di situs ini disediakan “sebagaimana adanya”. Kami tidak membuat jaminan
                    apa pun, tersurat maupun tersirat, termasuk namun tidak terbatas pada jaminan
                    kelayakan diperjualbelikan, kesesuaian untuk tujuan tertentu, atau
                    non-pelanggaran hak. Kami juga tidak menjamin akurasi, hasil yang mungkin
                    terjadi, atau keandalan penggunaan materi di situs ini atau terkait dengan
                    materi tersebut di situs tertaut.
                  </p>

                  <h4 className="font-semibold text-white">3. Batasan</h4>
                  <p>
                    Dalam keadaan apa pun kami atau pemasok kami tidak akan bertanggung jawab atas
                    kerusakan apa pun (termasuk, tanpa batasan, kehilangan data atau keuntungan, atau
                    gangguan bisnis) yang timbul dari penggunaan atau ketidakmampuan menggunakan
                    materi di situs ini, bahkan jika kami telah diberitahu tentang kemungkinan
                    kerusakan tersebut. Beberapa yurisdiksi tidak mengizinkan pembatasan jaminan
                    tersirat atau tanggung jawab atas kerusakan insidental/konsekuensial, sehingga
                    pembatasan ini mungkin tidak berlaku bagi Anda.
                  </p>

                  <h4 className="font-semibold text-white">4. Akurasi Materi</h4>
                  <p>
                    Materi di situs ini dapat mencakup kesalahan teknis, tipografis, atau
                    fotografis. Kami tidak menjamin bahwa materi apa pun akurat, lengkap, atau
                    terkini. Kami dapat mengubah materi kapan saja tanpa pemberitahuan, namun tidak
                    berkomitmen untuk memperbaruinya.
                  </p>

                  <h4 className="font-semibold text-white">5. Tautan</h4>
                  <p>
                    Kami belum meninjau semua situs yang ditautkan ke situs ini dan tidak bertanggung
                    jawab atas konten situs tertaut. Pencantuman tautan tidak menyiratkan dukungan.
                    Penggunaan situs tertaut sepenuhnya merupakan risiko Anda sendiri.
                  </p>

                  <h4 className="font-semibold text-white">6. Perubahan</h4>
                  <p>
                    Kami dapat merevisi syarat layanan situs ini kapan saja tanpa pemberitahuan.
                    Dengan menggunakan situs ini, Anda setuju untuk terikat pada versi syarat yang
                    berlaku saat itu.
                  </p>

                  <h4 className="font-semibold text-white">7. Hukum yang Berlaku</h4>
                  <p>
                    Syarat ini diatur dan ditafsirkan sesuai dengan hukum yang berlaku. Anda setuju
                    untuk tunduk pada yurisdiksi eksklusif pengadilan di wilayah kami.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-gray-300">
                    Kami menghormati privasi Anda. Semua informasi pribadi yang dikumpulkan akan
                    digunakan untuk membantu membuat kunjungan Anda lebih produktif dan menyenangkan.
                    Dengan menggunakan situs ini, Anda menyetujui Kebijakan Privasi ini.
                  </p>

                  <h4 className="font-semibold text-white">1. Informasi yang Kami Kumpulkan</h4>
                  <p>
                    Kami dapat mengumpulkan nama, email, telepon/ponsel, alamat, tanggal lahir, dan
                    informasi lain yang diperlukan. Data diproses sesuai hukum perlindungan data yang
                    berlaku.
                  </p>

                  <h4 className="font-semibold text-white">2. Penggunaan Informasi</h4>
                  <p>
                    Informasi digunakan untuk menyediakan/meningkatkan layanan, personalisasi konten,
                    komunikasi, kepatuhan hukum, dan keamanan situs. Kami dapat memperbarui kebijakan
                    ini tanpa pemberitahuan sebelumnya.
                  </p>

                  <h4 className="font-semibold text-white">3. Iklan</h4>
                  <p>
                    Seperti situs lain, kami dapat mengumpulkan data terkait iklan (IP, ISP, jenis
                    browser, waktu kunjungan, halaman yang dilihat) untuk penargetan geografis atau
                    audiens tertentu.
                  </p>

                  <h4 className="font-semibold text-white">4. Cookies & Web Beacons</h4>
                  <p>
                    Kami menggunakan cookies untuk menyimpan preferensi dan meningkatkan pengalaman.
                    Pihak ketiga (mis. Google AdSense) mungkin menggunakan cookies/Web Beacons dan
                    menerima sebagian informasi Anda guna penayangan iklan yang relevan. Anda dapat
                    menonaktifkan cookies di pengaturan browser/perangkat lunak keamanan, namun ini
                    dapat memengaruhi cara Anda berinteraksi dengan situs.
                  </p>

                  <h4 className="font-semibold text-white">5. Tautan ke Situs Pihak Ketiga</h4>
                  <p>
                    Situs kami mungkin berisi tautan ke situs lain. Kami tidak bertanggung jawab atas
                    kebijakan privasi atau konten situs pihak ketiga. Silakan tinjau kebijakan privasi
                    mereka saat mengunjunginya.
                  </p>

                  <h4 className="font-semibold text-white">6. Hak Anda</h4>
                  <p>
                    Anda dapat menghubungi kami untuk mengakses, memperbaiki, atau meminta penghapusan
                    data pribadi Anda serta, jika berlaku, menolak atau membatasi pemrosesan data.
                  </p>

                  <h4 className="font-semibold text-white">7. Pembaruan Kebijakan</h4>
                  <p>
                    Kebijakan ini dapat diperbarui secara berkala. Versi terbaru berlaku sejak
                    dipublikasikan di halaman ini. Disarankan memeriksa secara rutin.
                  </p>
                </div>
              )}

              {/* footer buttons */}
              <div className="mt-6 flex items-center justify-end gap-3">
                <Button
                  className="bg-gray-800 hover:bg-gray-700 text-gray-100"
                  onClick={() => setOpenModal(false)}
                >
                  Tutup
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

export default IndonesiaLanding;
