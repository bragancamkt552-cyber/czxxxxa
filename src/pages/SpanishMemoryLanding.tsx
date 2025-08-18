import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';

const IndoMemoryLanding: React.FC = () => {
  const playerContainerRef = useRef<HTMLDivElement>(null);

  // ----- VTurb Smartplayer (ATUALIZADO) -----
  useEffect(() => {
    const smartEl = document.createElement('vturb-smartplayer');
    smartEl.id = 'vid-68a3904af320e081cd011416';
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
      'https://scripts.converteai.net/6e999b30-1d79-497a-a68a-97fe5248857e/players/68a3904af320e081cd011416/v4/player.js';
    s.async = true;
    document.head.appendChild(s);

    return () => {
      try {
        if (playerContainerRef.current) playerContainerRef.current.innerHTML = '';
        const scripts = document.querySelectorAll(
          'script[src*="68a3904af320e081cd011416"]'
        );
        scripts.forEach((node) => node.parentElement?.removeChild(node));
      } catch {}
    };
  }, []);

  // ----- Modal Termasuk Syarat / Privasi -----
  const [openModal, setOpenModal] = useState(false);
  const [activeTab, setActiveTab] = useState<'terms' | 'privacy'>('terms');

  const openWithTab = (tab: 'terms' | 'privacy') => {
    setActiveTab(tab);
    setOpenModal(true);
  };

  // ----- HALAMAN -----
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Helmet htmlAttributes={{ lang: 'id' }}>
        <title>Neuroscientist dilatih NASA: Trik Otak 8-Detik untuk Memperkuat Ingatan</title>
        <meta
          name="description"
          content="Pelajari trik otak 8-detik dari Neuroscientist terlatih NASA — ingat lebih cepat dan tahan lebih lama."
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

      {/* Hero */}
      <section className="relative overflow-hidden py-10 lg:py-14">
        <div className="container mx-auto px-4 relative z-10">
          {/* Player */}
          <div className="max-w-[640px] w-full mx-auto">
            <div className="relative">
              <div ref={playerContainerRef} className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900 py-8 mt-16">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-5">
            <button
              onClick={() => openWithTab('terms')}
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              Syarat Penggunaan
            </button>
            <button
              onClick={() => openWithTab('privacy')}
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              Kebijakan Privasi
            </button>
          </div>
          <p className="text-gray-500 text-sm">&copy; 2025 Program Peningkatan Memori. Semua hak dilindungi.</p>
        </div>
      </footer>

      {/* Modal: Syarat / Privasi */}
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
                    Dengan menggunakan situs web ini (“Situs”), Anda setuju dengan syarat ini, hukum dan peraturan yang berlaku. Jika Anda tidak setuju, harap jangan gunakan Situs. Konten ini dilindungi oleh hukum hak cipta dan merek dagang.
                  </p>

                  <h4 className="font-semibold text-white">1. Syarat Penggunaan</h4>
                  <p>
                    Dengan menggunakan Situs, Anda menyatakan bahwa Anda akan mematuhi hukum yang berlaku dan bertanggung jawab penuh atas kepatuhan tersebut.
                  </p>

                  <h4 className="font-semibold text-white">2. Lisensi & Batasan</h4>
                  <p>
                    Kami memberikan lisensi terbatas untuk mengunduh satu salinan konten untuk penggunaan pribadi dan sementara. Anda tidak boleh mengubah, menyalin, menggunakan secara komersial, menampilkan publik, melakukan reverse-engineering, menghapus hak cipta, atau menyalinnya ke server lain.
                  </p>

                  <h4 className="font-semibold text-white">3. Penyangkalan</h4>
                  <p>
                    Konten di Situs ini disediakan “sebagaimana adanya”. Kami tidak memberikan jaminan, baik tersurat maupun tersirat, termasuk kelayakan jual, kesesuaian tujuan tertentu, atau non-pelanggaran.
                  </p>

                  <h4 className="font-semibold text-white">4. Batas Tanggung Jawab</h4>
                  <p>
                    Kami tidak bertanggung jawab atas kerugian apa pun (kehilangan data/keuntungan, gangguan bisnis, dll.), bahkan jika diberitahu sebelumnya tentang kemungkinan kerugian tersebut.
                  </p>

                  <h4 className="font-semibold text-white">5. Akurasi</h4>
                  <p>
                    Konten mungkin mengandung kesalahan teknis atau tipografi. Kami dapat mengubah konten kapan saja tanpa pemberitahuan.
                  </p>

                  <h4 className="font-semibold text-white">6. Tautan</h4>
                  <p>
                    Tautan eksternal hanya untuk kenyamanan; kami tidak bertanggung jawab atas kontennya. Penggunaannya adalah risiko Anda sendiri.
                  </p>

                  <h4 className="font-semibold text-white">7. Perubahan</h4>
                  <p>
                    Kami dapat mengubah syarat ini kapan saja. Penggunaan berkelanjutan berarti Anda menerima versi terbaru.
                  </p>

                  <h4 className="font-semibold text-white">8. Hukum yang Berlaku</h4>
                  <p>
                    Syarat ini tunduk pada hukum yang berlaku, dan setiap sengketa berada di bawah yurisdiksi eksklusif pengadilan kami.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-gray-300">
                    Kami menghormati privasi Anda. Data pribadi yang dikumpulkan hanya digunakan untuk meningkatkan pengalaman Anda. Dengan menggunakan Situs, Anda menyetujui kebijakan ini.
                  </p>

                  <h4 className="font-semibold text-white">1. Data yang Dikumpulkan</h4>
                  <p>
                    Nama, email, telepon, alamat, tanggal lahir, dan detail lain yang diperlukan sesuai dengan hukum perlindungan data.
                  </p>

                  <h4 className="font-semibold text-white">2. Penggunaan Data</h4>
                  <p>
                    Data digunakan untuk menyediakan/meningkatkan layanan, personalisasi konten, komunikasi, kepatuhan hukum, dan keamanan.
                  </p>

                  <h4 className="font-semibold text-white">3. Iklan & Log</h4>
                  <p>
                    IP, ISP, jenis browser, waktu, dan halaman yang dilihat dapat digunakan untuk penargetan geografis dan iklan relevan.
                  </p>

                  <h4 className="font-semibold text-white">4. Cookies</h4>
                  <p>
                    Kami menggunakan cookies untuk menyimpan preferensi dan meningkatkan pengalaman. Pihak ketiga mungkin juga menggunakan cookies/web beacon. Anda dapat menonaktifkannya, tetapi itu dapat memengaruhi fungsi Situs.
                  </p>

                  <h4 className="font-semibold text-white">5. Tautan Pihak Ketiga</h4>
                  <p>
                    Situs kami mungkin berisi tautan ke situs eksternal; kami tidak bertanggung jawab atas praktik privasi mereka.
                  </p>

                  <h4 className="font-semibold text-white">6. Hak Anda</h4>
                  <p>
                    Anda dapat meminta akses, perbaikan, atau penghapusan data pribadi Anda. Anda juga berhak menolak atau membatasi pemrosesan.
                  </p>

                  <h4 className="font-semibold text-white">7. Pembaruan</h4>
                  <p>
                    Kami dapat memperbarui kebijakan ini dari waktu ke waktu; versi terbaru akan dipublikasikan di sini dan berlaku segera.
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

export default IndoMemoryLanding;
