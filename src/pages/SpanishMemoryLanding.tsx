'use client';

import React, { useEffect, useMemo, useRef, useState } from "react";

/**
 * Página React/TSX "igual" à base enviada, porém:
 * - Troca o player de vídeo para o script VTurb fornecido pelo usuário
 * - Define um delay de 1 hora (se existir delay) para liberar o botão de ação
 * - Remove qualquer link de checkout/pagamento; mantém apenas hotmart.com.br
 * - Inclui plugin de comentários do Facebook
 *
 * Observação: este componente funciona em qualquer app React/Next. Em Next.js,
 * basta colocá-lo em src/app/page.tsx (ou pages/index.tsx) e garantir que roda apenas no client.
 */

const DELAY_MS = 60 * 60 * 1000; // 1 hora em milissegundos

export default function ProtocoleLikeLanding() {
  const [liberado, setLiberado] = useState(false);
  const [agora, setAgora] = useState<Date | null>(null);
  const unlockTimerRef = useRef<number | null>(null);

  // Texto de data em francês como no site-base
  const dataFrancesa = useMemo(() => {
    const d = new Date();
    return d.toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit", year: "numeric" });
  }, []);

  useEffect(() => {
    setAgora(new Date());

    // ---- Injeção do player VTurb (novo script) ----
    // Mantemos a tag <vturb-smartplayer> no JSX e apenas carregamos o player.js
    const s = document.createElement("script");
    s.type = "text/javascript";
    s.src =
      "https://scripts.converteai.net/ec09afc3-b6c2-4de5-b556-85edb9ced296/players/68b60b9d19546f43f5884ff5/v4/player.js";
    s.async = true;
    document.head.appendChild(s);

    // ---- Delay de 1 hora para liberar CTA ----
    unlockTimerRef.current = window.setTimeout(() => setLiberado(true), DELAY_MS);

    // ---- Facebook SDK para comentários ----
    const fbRoot = document.createElement("div");
    fbRoot.id = "fb-root";
    document.body.appendChild(fbRoot);

    const fbScript = document.createElement("script");
    fbScript.async = true;
    fbScript.defer = true;
    fbScript.crossOrigin = "anonymous";
    // Idioma pt_BR. Ajuste se desejar.
    fbScript.src = "https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v19.0";
    document.body.appendChild(fbScript);

    return () => {
      // cleanup do timer
      if (unlockTimerRef.current) window.clearTimeout(unlockTimerRef.current);
    };
  }, []);

  return (
    <main style={styles.page}>
      {/* HEAD "manual" com meta tags básicas */}
      <HeadMeta />

      {/* Barra superior com aviso de data (em francês como no site) */}
      <section style={styles.topBar}>
        <span>
          {`En raison de la forte demande d'accès, nous garantissons la présentation jusqu'à aujourd'hui le ${dataFrancesa}`}
        </span>
      </section>

      {/* Player de vídeo VTurb (novo script + tag fornecida) */}
      <section style={styles.videoSection}>
        {/* A tag abaixo é essencial para o player da VTurb */}
        <vturb-smartplayer
          id="vid-68b60b9d19546f43f5884ff5"
          style={{ display: "block", margin: "0 auto", width: "100%" }}
        ></vturb-smartplayer>
        {/* O script do player é carregado no useEffect */}
      </section>

      {/* Mensagem pedindo para ver o vídeo (como no site) */}
      <section style={styles.centeredText}>
        <p>Regardez la vidéo pour débloquer la recette.</p>
      </section>

      {/* "Comentários"/depoimentos estáticos para compor a página (opcional) */}
      <TestimonialsLike />

      {/* CTA liberado após 1 hora (se tiver delay, aqui está implementado) */}
      <section style={styles.ctaWrap}>
        <LockedCta liberado={liberado} />
        {!liberado && (
          <small style={styles.smallMuted}>
            O botão será liberado automaticamente após 1 hora de permanência na página.
          </small>
        )}
      </section>

      {/* Plugin de comentários do Facebook (oficial) */}
      <section style={styles.fbSection}>
        <h2 style={styles.h2}>Comentários</h2>
        <div
          className="fb-comments"
          data-href={typeof window !== "undefined" ? window.location.href : "https://example.com"}
          data-width="100%"
          data-numposts="10"
          data-order-by="social"
        ></div>
      </section>

      {/* Rodapé com avisos (sem links de pagamento/checkout) */}
      <footer style={styles.footer}>
        <p style={styles.disclaimer}>
          Em <strong>protocole.paiscelestiais.com.br</strong>, todo o conteúdo é de responsabilidade dos
          autores. Não há afiliação, patrocínio ou aprovação por parte da Meta (Facebook/Instagram).
          As informações têm caráter educativo e não substituem aconselhamento profissional de saúde.
          Resultados variam de pessoa para pessoa.
        </p>
        <nav style={styles.footerNav}>
          <a href="/politicas-de-privacidade" style={styles.footerLink}>
            Políticas de privacidade
          </a>
          <a href="/termos" style={styles.footerLink}>
            Termos de uso
          </a>
        </nav>
      </footer>

      {/* Estilos locais (sem dependências externas) */}
      <style>{globalCss}</style>
    </main>
  );
}

/** Cabeçalho mínimo com metas/OG */
function HeadMeta() {
  useEffect(() => {
    document.title = "Protocole37 – Protocole (versão TSX)";

    const metaCharset = document.createElement("meta");
    metaCharset.setAttribute("charSet", "UTF-8");
    document.head.appendChild(metaCharset);

    const viewport = document.createElement("meta");
    viewport.name = "viewport";
    viewport.content = "width=device-width, initial-scale=1, viewport-fit=cover";
    document.head.appendChild(viewport);

    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "max-image-preview:large";
    document.head.appendChild(robots);

    const ogType = document.createElement("meta");
    ogType.setAttribute("property", "og:type");
    ogType.content = "website";
    document.head.appendChild(ogType);

    const ogTitle = document.createElement("meta");
    ogTitle.setAttribute("property", "og:title");
    ogTitle.content = "Protocole37 – Protocole";
    document.head.appendChild(ogTitle);

    const ogUrl = document.createElement("meta");
    ogUrl.setAttribute("property", "og:url");
    ogUrl.content = typeof window !== "undefined" ? window.location.href : "https://example.com";
    document.head.appendChild(ogUrl);
  }, []);
  return null;
}

/** CTA bloqueado/liberado com delay */
function LockedCta({ liberado }: { liberado: boolean }) {
  if (liberado) {
    return (
      <a
        href="https://hotmart.com.br" // Somente domínio geral, sem checkout
        style={styles.ctaButton}
        rel="noopener noreferrer nofollow"
        target="_blank"
      >
        Acessar
      </a>
    );
  }
  return (
    <button style={styles.ctaButtonDisabled} disabled>
      Aguarde (libera em 1 hora)
    </button>
  );
}

/** Bloco de depoimentos/"comentários" estáticos inspirados no layout fornecido */
function TestimonialsLike() {
  return (
    <section style={styles.testimonialsSection}>
      <h2 style={styles.h2}>24 Commentaires</h2>
      <hr style={styles.hr} />

      <div style={styles.testiGrid}>
        <article style={styles.testiCard}>
          <img
            src="https://protocole.paiscelestiais.com.br/wp-content/uploads/2025/06/homem-3.jpg"
            alt="Antoine Dubois"
            style={styles.avatar}
            loading="lazy"
          />
          <div>
            <h3 style={styles.h3}>Antoine Dubois</h3>
            <p>
              Je suis de Lyon et je suis vraiment confiant après avoir lu les commentaires. J'ai longtemps
              cherché un moyen d'améliorer mon haleine, et j'ai bon espoir que cette approche m'aide aussi à
              retrouver une sensation de fraîcheur. 😍
            </p>
            <small style={styles.smallMuted}>Répondre · Aimer · Suivre · 1 h</small>
          </div>
        </article>

        <article style={styles.testiCard}>
          <img
            src="https://protocole.paiscelestiais.com.br/wp-content/uploads/2025/06/gile-16.jpg"
            alt="Sophie Moreau"
            style={styles.avatar}
            loading="lazy"
          />
          <div>
            <h3 style={styles.h3}>Sophie Moreau</h3>
            <p>
              Je suis en plein processus, c’est mon huitième jour. L'effet de fraîcheur s'est bien installé et
              ma confiance est revenue vers le cinquième jour.
            </p>
            <small style={styles.smallMuted}>Répondre · Aimer · Suivre · 4 min</small>
          </div>
        </article>

        <article style={styles.testiCard}>
          <img
            src="https://protocole.paiscelestiais.com.br/wp-content/uploads/2025/06/depo.jpg"
            alt="Chloé Lefevre"
            style={styles.avatar}
            loading="lazy"
          />
          <div>
            <h3 style={styles.h3}>Chloé Lefevre</h3>
            <p>
              Je me reconnais dans ces retours. Avoir une haleine vraiment fraîche a fait toute la différence.
            </p>
            <small style={styles.smallMuted}>Répondre · Aimer · Suivre · 6 min</small>
          </div>
        </article>

        <article style={styles.testiCard}>
          <img
            src="https://protocole.paiscelestiais.com.br/wp-content/uploads/2025/06/Absolute_Reality_v16_HighlyRealistic_HeadToToe_Image_of_a_Fair_0.jpg"
            alt="Élise Petit"
            style={styles.avatar}
            loading="lazy"
          />
          <div>
            <h3 style={styles.h3}>Élise Petit</h3>
            <p>
              J'ai longtemps cherché une solution et je commence cette démarche pleine d’espoir.
            </p>
            <small style={styles.smallMuted}>Répondre · Aimer · Suivre · 14 min</small>
          </div>
        </article>

        <article style={styles.testiCard}>
          <img
            src="https://protocole.paiscelestiais.com.br/wp-content/uploads/2025/06/mulher-de-oculos5.png"
            alt="Isabelle Mercier"
            style={styles.avatar}
            loading="lazy"
          />
          <div>
            <h3 style={styles.h3}>Isabelle Mercier</h3>
            <p>
              C’est super de voir des retours aussi positifs avec cette approche !
            </p>
            <small style={styles.smallMuted}>Répondre · Aimer · Suivre · 10 min</small>
          </div>
        </article>

        <article style={styles.testiCard}>
          <img
            src="https://protocole.paiscelestiais.com.br/wp-content/uploads/2025/06/woman-3-1024x1024.jpg"
            alt="Marie-Laure"
            style={styles.avatar}
            loading="lazy"
          />
          <div>
            <h3 style={styles.h3}>Marie-Laure</h3>
            <p>Merci les gars ! Je vais l'acheter.</p>
            <small style={styles.smallMuted}>Répondre · Aimer · Suivre · 6 min</small>
          </div>
        </article>

        <article style={styles.testiCard}>
          <img
            src="https://protocole.paiscelestiais.com.br/wp-content/uploads/2025/06/woman-marie-laure-1024x1024.jpg"
            alt="Julien Rousseau"
            style={styles.avatar}
            loading="lazy"
          />
          <div>
            <h3 style={styles.h3}>Julien Rousseau</h3>
            <p>
              Au début, bouche un peu sèche, mais rapidement plus de fraîcheur et confiance.
            </p>
            <small style={styles.smallMuted}>Répondre · Aimer · Suivre · 35 min</small>
          </div>
        </article>

        <article style={styles.testiCard}>
          <img
            src="https://protocole.paiscelestiais.com.br/wp-content/uploads/2025/06/homem-2.jpg"
            alt="Lucas Girard"
            style={styles.avatar}
            loading="lazy"
          />
          <div>
            <h3 style={styles.h3}>Lucas Girard</h3>
            <p>Cette méthode devrait être plus connue. Heureux de partager.</p>
            <small style={styles.smallMuted}>Répondre · Aimer · Suivre · 1 h</small>
          </div>
        </article>
      </div>
    </section>
  );
}

// ---------------- Estilos ----------------
const styles: { [k: string]: React.CSSProperties } = {
  page: {
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    color: "#171717",
    background: "#ffffff",
    lineHeight: 1.55,
  },
  topBar: {
    padding: "10px 16px",
    background: "#f3f4f6",
    textAlign: "center",
    fontSize: 14,
  },
  videoSection: {
    maxWidth: 960,
    margin: "24px auto 8px",
    padding: "0 16px",
  },
  centeredText: {
    maxWidth: 960,
    margin: "0 auto",
    padding: "8px 16px 24px",
    textAlign: "center",
    fontWeight: 600,
  },
  h2: { fontSize: 24, margin: "8px 0 12px" },
  h3: { fontSize: 18, margin: "0 0 6px" },
  hr: { border: 0, borderTop: "1px solid #e5e7eb", margin: "8px 0 16px" },
  testimonialsSection: {
    maxWidth: 1024,
    margin: "0 auto",
    padding: "16px",
  },
  testiGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 16,
  },
  testiCard: {
    display: "grid",
    gridTemplateColumns: "72px 1fr",
    gap: 12,
    alignItems: "flex-start",
    background: "#fff",
    border: "1px solid #e5e7eb",
    borderRadius: 12,
    padding: 12,
    boxShadow: "0 1px 2px rgba(0,0,0,.05)",
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: "50%",
    objectFit: "cover",
  },
  smallMuted: { color: "#6b7280", fontSize: 12 },
  ctaWrap: {
    maxWidth: 960,
    margin: "24px auto",
    padding: "0 16px",
    textAlign: "center",
  },
  ctaButton: {
    display: "inline-block",
    background: "#111827",
    color: "#fff",
    padding: "14px 22px",
    borderRadius: 999,
    textDecoration: "none",
    fontWeight: 700,
  },
  ctaButtonDisabled: {
    display: "inline-block",
    background: "#9ca3af",
    color: "#fff",
    padding: "14px 22px",
    borderRadius: 999,
    border: 0,
    fontWeight: 700,
  },
  fbSection: {
    maxWidth: 960,
    margin: "24px auto",
    padding: "0 16px 32px",
  },
  footer: {
    background: "#171717",
    color: "#fff",
    padding: "24px 16px",
  },
  disclaimer: {
    maxWidth: 1024,
    margin: "0 auto 16px",
    opacity: 0.9,
  },
  footerNav: {
    maxWidth: 1024,
    margin: "0 auto",
    display: "flex",
    gap: 16,
  },
  footerLink: {
    color: "#9ca3af",
    textDecoration: "none",
  },
};

const globalCss = `
  /* Evita layout shift de imagens */
  img { max-width: 100%; height: auto; }

  /* Corrige largura do player VTurb dentro do grid */
  vturb-smartplayer { display: block; width: 100%; }

  /* Tipografia básica */
  p { margin: 0 0 8px; }
`;
