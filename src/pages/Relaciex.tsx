import React, { useEffect, useMemo, useRef, useState } from "react";

/**
 * Página LiveClass
 * - 100% client-side, compatível com Vite + React + TS (Vercel)
 * - Player sem overlays bugados
 * - Enquete dentro do chat (interativa)
 * - CTA, countdown, ticker, popup e bônus refinados
 */

type LiveClassProps = {
  /** URL de embed (YouTube, Vimeo, Vturb etc). Ex: "https://www.youtube.com/embed/ID?rel=0&autoplay=0" */
  videoUrl?: string;
  /** Link do checkout */
  checkoutUrl?: string;
};

const LiveClass: React.FC<LiveClassProps> = ({
  videoUrl,
  checkoutUrl = "https://seudominio.com/checkout",
}) => {
  // ======= ESTADOS PRINCIPAIS =======
  const [ctaActivated, setCtaActivated] = useState(false);
  const [preCtaActive, setPreCtaActive] = useState(false);

  const [viewerCount, setViewerCount] = useState(847);
  const [onlineCount, setOnlineCount] = useState(187);

  const [countdown, setCountdown] = useState({ min: 14, sec: 59 });
  const [spots, setSpots] = useState(47);

  const [buyerName, setBuyerName] = useState("Maria Silva");
  const [bonusActive, setBonusActive] = useState(false);
  const [tickerActive, setTickerActive] = useState(false);

  // ======= ENQUETE (dentro do chat) =======
  const [pollVisible, setPollVisible] = useState(false);
  const [poll, setPoll] = useState({
    total: 0,
    options: [
      { id: "tempo", label: "Falta de tempo", votes: 0 },
      { id: "consistencia", label: "Falta de consistência", votes: 0 },
      { id: "guia", label: "Não ter um passo a passo", votes: 0 },
      { id: "outro", label: "Outro", votes: 0 },
    ],
    voted: false,
  });

  // ======= CHAT =======
  const chatRef = useRef<HTMLDivElement | null>(null);
  const lastMsgAt = useRef<number>(0);

  const pushChat = (author: string, text: string, admin = false) => {
    const box = chatRef.current;
    if (!box) return;
    const el = document.createElement("div");
    el.className = `chat-message ${admin ? "message-admin" : ""}`;
    el.innerHTML = `<div class="message-author">${author}</div><div class="message-text">${text}</div>`;
    box.appendChild(el);
    box.scrollTop = box.scrollHeight;

    const max = box.querySelectorAll(".chat-message");
    if (max.length > 70) max[0].remove();
  };

  // Seeds de mensagens (fase 1 e 2)
  const phase1 = useMemo(
    () => [
      { d: 2000, a: "João Pedro", t: "Oi pessoal! Primeira vez aqui 👋", ad: false },
      { d: 5000, a: "Maria Santos", t: "Vim pela indicação de uma amiga", ad: false },
      { d: 8000, a: "Moderador", t: "Bem-vindos! A aula vai ser direta ao ponto 👇", ad: true },
      { d: 15000, a: "Ana Clara", t: "Som e vídeo perfeitos por aqui! 🔊", ad: false },
      { d: 30000, a: "Carlos Silva", t: "Gostando do formato, bem claro!", ad: false },
      { d: 45000, a: "Luciana Reis", t: "Anotando tudo 📝", ad: false },
      { d: 56000, a: "Pedro Oliveira", t: "Isso serve para iniciantes?", ad: false },
      { d: 59000, a: "Moderador", t: "Serve! Mostramos o passo a passo do zero 🚀", ad: true },
      { d: 88000, a: "Fernanda Costa", t: "Funciona para quem tem pouco tempo?", ad: false },
      { d: 91000, a: "Moderador", t: "Sim! Método pensado para 10–15 min/dia ⏰", ad: true },
      { d: 120000, a: "Roberto Lima", t: "Está clareando muita coisa 💡", ad: false },
    ],
    []
  );

  const phase2 = useMemo(
    () => [
      { d: 1000, a: "Ricardo Mendes", t: "APARECEU o botão! Vou garantir minha vaga! 🟡", ad: false },
      { d: 3000, a: "Moderador", t: "🎉 Vagas limitadas enquanto o desconto estiver ativo!", ad: true },
      { d: 7000, a: "Carla Mendes", t: "Nossa, achei que seria mais caro 😱", ad: false },
      { d: 11000, a: "Bruno Souza", t: "Menos que uma pizza por mês 🍕", ad: false },
      { d: 16000, a: "Moderador", t: "Garantia total de 7 dias 🛡️", ad: true },
      { d: 22000, a: "Paula Ferreira", t: "COMPREI! Melhor investimento ✅", ad: false },
      { d: 30000, a: "Roberto Lima", t: "Gente, as vagas estão acabando! ⚠️", ad: false },
    ],
    []
  );

  // ======= TIMINGS =======
  const TIMING = useMemo(
    () => ({ preCta: 600000, showCta: 780000 }), // 10:00 / 13:00
    []
  );
  // Para teste rápido, troque por:
  // const TIMING = { preCta: 10000, showCta: 20000 };

  // ======= EFEITOS =======
  // Mensagens fase 1 + mostrar enquete com atraso
  useEffect(() => {
    const timeouts: number[] = [];
    phase1.forEach((m) => timeouts.push(window.setTimeout(() => pushChat(m.a, m.t, m.ad), m.d)));
    timeouts.push(
      window.setTimeout(() => {
        setPollVisible(true);
        // também fixa um aviso no chat quando a enquete abre
        pushChat("Moderador", "🗳️ Enquete aberta! Vote acima do chat e conte sua maior dificuldade.", true);
      }, 360000) // 6 min
    );
    return () => timeouts.forEach((t) => window.clearTimeout(t));
  }, [phase1]);

  // Pre-CTA e CTA
  useEffect(() => {
    const t1 = window.setTimeout(() => setPreCtaActive(true), TIMING.preCta);
    const t2 = window.setTimeout(() => activateCTA(), TIMING.showCta);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [TIMING.preCta, TIMING.showCta]);

  // Viewers & Online
  useEffect(() => {
    const iv1 = window.setInterval(() => {
      setViewerCount((v) =>
        !ctaActivated && v < 1450
          ? v + Math.floor(Math.random() * 12) + 4
          : Math.max(1200, Math.min(1450, v + (Math.floor(Math.random() * 16) - 8)))
      );
    }, 3000);
    const iv2 = window.setInterval(() => {
      setOnlineCount((o) =>
        !ctaActivated && o < 320 ? o + Math.floor(Math.random() * 4) + 1 : Math.max(280, Math.min(350, o + (Math.floor(Math.random() * 6) - 3)))
      );
    }, 4500);
    return () => {
      window.clearInterval(iv1);
      window.clearInterval(iv2);
    };
  }, [ctaActivated]);

  // ======= CTA activation routine =======
  const activateCTA = () => {
    if (ctaActivated) return;
    setCtaActivated(true);

    // Mensagens fase 2
    phase2.forEach((m) => window.setTimeout(() => pushChat(m.a, m.t, m.ad), m.d));

    // Countdown
    const iv = window.setInterval(() => {
      setCountdown((c) => {
        let m = c.min,
          s = c.sec - 1;
        if (s < 0) {
          s = 59;
          m -= 1;
        }
        if (m < 0) return { min: 14, sec: 59 };
        return { min: m, sec: s };
      });
    }, 1000);
    // limpar no unmount
    const detach = () => window.clearInterval(iv);
    window.addEventListener("beforeunload", detach, { once: true });

    // Vagas
    const reduce = () => setSpots((s) => (s <= 5 ? s : Math.max(5, s - (1 + Math.floor(Math.random() * 2)))));
    [8000, 20000, 40000, 70000, 120000].forEach((ms) => window.setTimeout(reduce, ms));
    setTimeout(() => {
      const ivr = window.setInterval(reduce, 60000);
      window.addEventListener("beforeunload", () => window.clearInterval(ivr), { once: true });
    }, 120000);

    // Notificações + ticker + bônus
    setTimeout(() => setBuyerName(randomName()), 4000);
    const ivn = window.setInterval(() => setBuyerName(randomName()), 18000);
    window.addEventListener("beforeunload", () => window.clearInterval(ivn), { once: true });

    setTickerActive(true);
    setTimeout(() => setBonusActive(true), 3000);
  };

  // ======= UTIL =======
  const names = useMemo(
    () => [
      "José Santos",
      "Paula Oliveira",
      "Marcos Silva",
      "Juliana Costa",
      "Roberto Lima",
      "Fernanda Souza",
      "André Pereira",
      "Carla Mendes",
      "Lucas Ferreira",
      "Beatriz Alves",
      "Thiago Reis",
      "Marina Gomes",
      "Priscila Dias",
      "Fábio Castro",
      "Rafaela Nunes",
      "Eduardo Barbosa",
    ],
    []
  );
  const randomName = () => names[Math.floor(Math.random() * names.length)];

  const replayDate = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()} 23:59`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const tickerItems = useMemo(() => {
    const ufs = ["SP", "RJ", "MG", "PR", "SC", "RS", "ES", "BA", "CE", "DF", "GO", "PE", "AM"];
    return Array.from({ length: 22 }).map(() => {
      const n = randomName();
      const uf = ufs[Math.floor(Math.random() * ufs.length)];
      const t = Math.floor(Math.random() * 30) + 1;
      return `✅ <strong>${n}</strong> (${uf}) garantiu há ${t}min`;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ======= HANDLERS =======
  const onUserSend = (val: string) => {
    const now = Date.now();
    if (now - lastMsgAt.current < 1200) return;
    lastMsgAt.current = now;

    const msg = val.trim();
    if (!msg) return;

    // Easter egg
    if (msg === "acelerar" && !ctaActivated) {
      pushChat("Sistema", "🚀 Modo teste ativado! Acelerando timeline…", true);
      setTimeout(() => setPreCtaActive(true), 1200);
      setTimeout(() => activateCTA(), 2500);
      return;
    }

    pushChat("Você", msg, false);
    const m = msg.toLowerCase();

    setTimeout(() => {
      if (!ctaActivated) {
        if (m.includes("iniciante")) return pushChat("Moderador", "Perfeito para iniciantes. A aula guia do zero 🚀", true);
        if (m.includes("tempo")) return pushChat("Moderador", "Pensado para rotina corrida: 10–15 min/dia ⏰", true);
        if (m.includes("preço") || m.includes("valor")) return pushChat("Moderador", "Falo do investimento já já 😉", true);
        return pushChat("Moderador", "Ótima pergunta! Vou responder durante a aula 👇", true);
      } else {
        if (m.includes("preço") || m.includes("valor"))
          return pushChat("Moderador", "Hoje 40% OFF: de R$ 497 por R$ 297 (12x sem juros) 💰", true);
        if (m.includes("garantia")) return pushChat("Moderador", "7 dias de garantia incondicional 🛡️", true);
        return pushChat("Moderador", "Aproveite o botão enquanto o desconto está ativo! ⬆️", true);
      }
    }, 900 + Math.random() * 900);
  };

  const onClickCTA = (e: React.MouseEvent) => {
    e.preventDefault();
    const btn = e.currentTarget as HTMLAnchorElement;
    const spinner = document.getElementById("buttonLoading");
    btn.style.opacity = "0.75";
    (btn.style as any).pointerEvents = "none";
    spinner?.classList.add("active");
    setTimeout(() => {
      window.open(checkoutUrl, "_blank");
      spinner?.classList.remove("active");
      btn.style.opacity = "1";
      (btn.style as any).pointerEvents = "auto";
    }, 2000);
  };

  // ======= VOTO DA ENQUETE =======
  const votePoll = (id: string) => {
    if (poll.voted) return;
    setPoll((p) => {
      const options = p.options.map((o) => (o.id === id ? { ...o, votes: o.votes + 1 } : o));
      const total = p.total + 1;
      // Mensagem no chat
      const chosen = options.find((o) => o.id === id)?.label || " — ";
      pushChat("Moderador", `Voto registrado: "${chosen}". Obrigado por participar!`, true);
      return { ...p, options, total, voted: true };
    });
  };

  // ======= RENDER =======
  return (
    <>
      {/* TOP BAR */}
      <div className={`top-bar ${ctaActivated ? "urgent" : ""}`}>
        {ctaActivated
          ? "⚠️ OFERTA LIBERADA! Vagas limitadas — Desconto exclusivo AO VIVO"
          : "📚 Aula Exclusiva — preste atenção nas dicas!"}
      </div>

      {/* PROVA SOCIAL */}
      <div className="social-proof-strip">
        <span>
          <strong>+3.250</strong> pessoas já assistiram esta aula exclusiva nas últimas semanas
        </span>
      </div>

      {/* GRID PRINCIPAL */}
      <div className="container">
        {/* PLAYER */}
        <section className="player-card">
          <div className="badge live">
            <span className="dot" /> AO VIVO
          </div>
          <div className="badge lock">🔒 Conteúdo restrito — não listado no YouTube</div>

          <div className="viewers">
            👁 <span className="num">{viewerCount.toLocaleString("pt-BR")}</span> assistindo
          </div>

          {videoUrl ? (
            <div className="frame-wrap">
              <iframe
                className="frame"
                src={videoUrl}
                title="Aula Exclusiva"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <button
              className="placeholder"
              onClick={() => alert("Conecte seu player (YouTube/Vimeo/VTurb) passando a prop 'videoUrl'.")}
            >
              <span className="play">▶</span>
              <span className="hint">Clique para pré-visualizar (sem player real)</span>
            </button>
          )}
        </section>

        {/* CHAT */}
        <aside className="chat">
          <header className="chat-head">
            <div className="left">
              <h3>Chat ao Vivo</h3>
              <div className="pin">📌 No final: presente especial + condição exclusiva</div>

              {/* BLOCO DE ENQUETE */}
              {pollVisible && (
                <div className="poll-box">
                  <div className="poll-title">🗳️ Enquete: Qual sua maior dificuldade?</div>

                  <div className={`poll-options ${poll.voted ? "voted" : ""}`}>
                    {poll.options.map((o) => {
                      const pct = poll.total ? Math.round((o.votes / poll.total) * 100) : 0;
                      return (
                        <button
                          key={o.id}
                          className={`poll-option ${poll.voted ? "disabled" : ""}`}
                          onClick={() => votePoll(o.id)}
                          disabled={poll.voted}
                          aria-label={`Votar em ${o.label}`}
                        >
                          <span className="label">{o.label}</span>
                          <span className="bar">
                            <i style={{ width: `${pct}%` }} />
                          </span>
                          <span className="pct">{pct}%</span>
                        </button>
                      );
                    })}
                  </div>
                  {poll.voted ? <small className="poll-thanks">✅ Obrigado por votar! Resultados em tempo real acima.</small> : null}
                </div>
              )}
            </div>

            <div className="online">
              <span className="dot" /> {onlineCount} online
            </div>
          </header>

          <div className="messages" ref={chatRef} />

          <div className="chat-input">
            <input
              type="text"
              placeholder="Digite sua pergunta… (dica: escreva 'acelerar' para testar)"
              maxLength={240}
              onKeyDown={(e) => {
                if (e.key !== "Enter") return;
                onUserSend((e.currentTarget.value || "").trim());
                e.currentTarget.value = "";
              }}
            />
          </div>
        </aside>

        {/* PRE-CTA */}
        {preCtaActive && (
          <div className="precta">
            <h4>🎯 Prepare-se!</h4>
            <p>Nos próximos minutos vou revelar como aplicar tudo isso de forma completa…</p>
          </div>
        )}

        {/* CTA */}
        <section className={`cta ${ctaActivated ? "active" : ""}`}>
          <h2>🎁 CHEGOU O MOMENTO!</h2>
          <p>Acesso liberado APENAS para quem está assistindo ao vivo agora</p>

          <a href="#" id="mainCta" className="cta-btn" onClick={onClickCTA}>
            QUERO ACESSO COMPLETO AO MÉTODO
          </a>
          <div id="buttonLoading" className="loading">
            ⏳ Processando
          </div>

          <div className="limit">
            <p>⚠️ Por questões de suporte, estamos limitando as vagas</p>
            <p>
              Restam <span className={`spots ${spots <= 15 ? "low" : ""}`}>{spots}</span> vagas com 40% de desconto
            </p>
            <small>
              De <s>R$ 497</s> por <strong>R$ 297</strong>
            </small>
          </div>
        </section>
      </div>

      {/* FLOATING ELEMENTS */}
      <div className={`countdown ${ctaActivated ? "show" : ""}`}>
        ⏰ Desconto expira em:{" "}
        <b className={countdown.min < 5 ? "critical" : ""}>
          {String(countdown.min).padStart(2, "0")}:{String(countdown.sec).padStart(2, "0")}
        </b>
      </div>

      <div className={`replay ${ctaActivated ? "show" : ""}`}>
        📺 Replay disponível até <strong>{replayDate}</strong>. Depois sai do ar.
      </div>

      <div className={`popup ${ctaActivated ? "show" : ""}`}>
        <span>🎉</span> <strong>{buyerName}</strong> acabou de garantir sua vaga!
      </div>

      <div className={`ticker ${tickerActive ? "show" : ""}`}>
        <div className="track">
          <div
            className="line"
            dangerouslySetInnerHTML={{
              __html: tickerItems.map((i) => `<span class="item">${i}</span>`).join(""),
            }}
          />
        </div>
      </div>

      {bonusActive && (
        <div className="bonus">🎁 Quem garantir hoje leva <strong>bônus exclusivo</strong>!</div>
      )}

      {/* ======= ESTILOS ======= */}
      <style>{`
        :root{
          --bg:#0a0a0a; --card:#111418; --muted:#a9b0b8; --text:#f5f7fa;
          --brand:#ffd54a; --brand2:#ff9f1c; --danger:#ff4d4d; --stroke:#1f2430;
        }
        *{box-sizing:border-box}
        html,body{height:100%}
        body{margin:0;background:var(--bg);color:var(--text);font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial}

        .top-bar{
          position:fixed;inset:0 0 auto 0;height:48px;display:flex;align-items:center;justify-content:center;
          font-weight:700;font-size:14px;z-index:50;
          background:linear-gradient(90deg,#14161a,#1b1f26);
          border-bottom:1px solid var(--stroke);
        }
        .top-bar.urgent{background:linear-gradient(90deg,#7a1010,#b21616)}

        .social-proof-strip{
          margin-top:48px;height:40px;display:flex;align-items:center;justify-content:center;
          color:var(--muted);font-size:13px;border-bottom:1px solid var(--stroke);
          background:linear-gradient(180deg,#0c0f14 0%, #0a0a0a 100%);
        }
        .social-proof-strip strong{color:var(--brand)}

        .container{
          max-width:1200px;padding:18px;margin:0 auto;display:grid;gap:20px;
          grid-template-columns:minmax(0,1fr) 360px;
        }
        @media (max-width: 980px){ .container{grid-template-columns:1fr} }

        /* PLAYER CARD */
        .player-card{
          position:relative;background:linear-gradient(180deg,#0f1218,#0b0e13);
          border:1px solid var(--stroke);border-radius:16px;overflow:hidden;
          box-shadow:0 10px 30px rgba(0,0,0,.4);
        }
        .frame-wrap{position:relative;width:100%;aspect-ratio:16/9;background:#000;}
        .frame{position:absolute;inset:0;width:100%;height:100%;border:0}
        .placeholder{
          width:100%;aspect-ratio:16/9;display:flex;align-items:center;justify-content:center;gap:12px;
          background:radial-gradient(60% 60% at 50% 50%, #1d232f 0%, #0e121a 100%);
          border:0;color:var(--muted);font-weight:600;cursor:pointer;transition:transform .2s;
        }
        .placeholder .play{display:inline-grid;place-items:center;width:56px;height:56px;border-radius:50%;
          background:linear-gradient(135deg,var(--brand),var(--brand2));color:#000;font-weight:900}
        .placeholder:hover{transform:scale(1.01)}
        .badge{
          position:absolute;top:12px;padding:8px 12px;border-radius:12px;font-weight:700;font-size:12px;
          backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,.08)
        }
        .badge.live{left:12px;background:rgba(220,30,30,.85);display:flex;gap:8px;align-items:center}
        .badge.live .dot{width:8px;height:8px;border-radius:50%;background:#fff}
        .badge.lock{right:12px;background:rgba(255,255,255,.06);color:var(--brand)}
        .viewers{
          position:absolute;right:12px;top:56px;padding:6px 10px;border-radius:999px;
          background:rgba(0,0,0,.45);backdrop-filter:blur(6px);font-weight:600;font-size:12px;
          border:1px solid rgba(255,255,255,.06)
        }
        .viewers .num{color:var(--brand)}

        /* CHAT */
        .chat{
          background:linear-gradient(180deg,#10141b,#0d1117);border:1px solid var(--stroke);
          border-radius:16px;display:flex;flex-direction:column;min-height:520px;max-height:720px;overflow:hidden;
        }
        .chat-head{
          display:flex;justify-content:space-between;gap:12px;align-items:flex-start;
          padding:14px 14px 10px;border-bottom:1px solid var(--stroke);
        }
        .chat-head h3{margin:0 0 6px 0;font-size:16px}
        .pin{font-size:12px;background:rgba(255,213,74,.12);border:1px solid rgba(255,213,74,.35);padding:6px 8px;border-radius:8px;color:#f8e08a}

        .poll-box{margin-top:10px;background:rgba(255,255,255,.03);border:1px solid var(--stroke);border-radius:10px;padding:10px}
        .poll-title{font-size:13px;margin-bottom:8px;color:#dfe6ee}
        .poll-options{display:grid;gap:8px}
        .poll-option{
          display:grid;grid-template-columns:1fr auto;align-items:center;gap:10px;
          background:#0f131a;border:1px solid #202635;border-radius:10px;padding:8px 10px;color:#e6ebf2;
          cursor:pointer;transition:transform .08s,border-color .15s;
        }
        .poll-option:hover{transform:translateY(-1px);border-color:#334155}
        .poll-option.disabled{cursor:default;opacity:.85}
        .poll-option .label{font-size:13px;text-align:left}
        .poll-option .bar{height:6px;background:#1a2230;border-radius:999px;overflow:hidden}
        .poll-option .bar i{display:block;height:100%;background:linear-gradient(135deg,var(--brand),var(--brand2))}
        .poll-option .pct{font-weight:800;font-size:12px;color:#cbd5e1}
        .poll-thanks{display:block;margin-top:6px;color:#9fb4ff}

        .online{display:flex;align-items:center;gap:8px;font-size:13px;color:#8ddca1;font-weight:700}
        .online .dot{width:8px;height:8px;border-radius:50%;background:#31d07f}

        .messages{flex:1;padding:14px;overflow:auto;display:flex;flex-direction:column;gap:10px}
        .messages::-webkit-scrollbar{width:8px}
        .messages::-webkit-scrollbar-thumb{background:#2a313d;border-radius:8px}
        .chat-message{background:rgba(255,255,255,.03);border:1px solid var(--stroke);padding:10px;border-radius:10px}
        .chat-message .message-author{font-weight:800;font-size:12px;color:#8ab4ff}
        .chat-message .message-text{font-size:13px;color:#dfe6ee;margin-top:3px;line-height:1.4}
        .chat-message.message-admin{background:rgba(255,213,74,.08);border-color:rgba(255,213,74,.35)}
        .chat-message.message-admin .message-author{color:#ffd54a}

        .chat-input{padding:12px;border-top:1px solid var(--stroke);background:#0d1218}
        .chat-input input{
          width:100%;padding:12px 14px;border-radius:12px;border:1px solid #202635;background:#121722;color:var(--text);
          outline:none;transition:border .2s
        }
        .chat-input input:focus{border-color:#334155}

        /* PRE-CTA */
        .precta{
          grid-column:1/-1;margin:6px auto 0;max-width:1200px;width:100%;
          background:linear-gradient(180deg,#0f131a,#0b0f14);border:1px solid var(--stroke);
          border-radius:14px;padding:14px;text-align:center;color:#e8edf4
        }
        .precta h4{margin:0 0 6px 0}

        /* CTA */
        .cta{
          grid-column:1/-1;text-align:center;margin:8px auto 20px;max-width:1200px;display:none
        }
        .cta.active{display:block}
        .cta h2{margin:0 0 8px 0;color:var(--brand)}
        .cta p{margin:0 0 16px 0;color:#e8edf4}
        .cta-btn{
          display:inline-block;background:linear-gradient(135deg,var(--brand),var(--brand2));
          color:#151515;font-weight:900;text-transform:uppercase;letter-spacing:.6px;
          padding:18px 32px;border-radius:999px;box-shadow:0 12px 30px rgba(255,159,28,.25);
          transition:transform .15s;
        }
        .cta-btn:hover{transform:translateY(-2px) scale(1.02)}
        .loading{display:none;margin-top:10px;color:#9aa3ad;font-size:13px}
        .loading.active{display:block}
        .limit{
          margin:18px auto 0;background:rgba(255,77,77,.08);border:1px solid rgba(255,77,77,.35);
          color:#ffd5d5;border-radius:12px;padding:14px;max-width:520px
        }
        .limit .spots{font-weight:900;color:var(--brand)}
        .limit .spots.low{color:var(--danger)}
        .limit small{display:block;margin-top:8px;color:#cdd3db}

        /* FLOATING */
        .countdown{
          position:fixed;right:16px;bottom:16px;background:linear-gradient(135deg,#a21212,#e33a3a);
          border:1px solid rgba(255,255,255,.15);color:#fff;padding:10px 14px;border-radius:999px;
          box-shadow:0 10px 30px rgba(226,58,58,.35);display:none;z-index:60;font-weight:800
        }
        .countdown.show{display:block}
        .countdown .critical{color:#fff700}
        .replay{
          position:fixed;left:0;right:0;bottom:56px;text-align:center;
          background:linear-gradient(180deg,#101419,#0c1016);border-top:1px solid var(--stroke);
          color:#cbd5e1;font-size:13px;padding:10px;display:none;z-index:55
        }
        .replay.show{display:block}
        .popup{
          position:fixed;left:16px;bottom:16px;background:linear-gradient(135deg,#1e3c72,#2a5298);
          border:1px solid rgba(255,255,255,.15);padding:12px 14px;border-radius:12px;color:#fff;
          box-shadow:0 10px 30px rgba(0,0,0,.35);display:none;z-index:60
        }
        .popup.show{display:block;animation:fadeInOut 9s ease-in-out infinite}
        @keyframes fadeInOut{
          0%{opacity:0;transform:translateX(-20px)}
          10%{opacity:1;transform:translateX(0)}
          85%{opacity:1;transform:translateX(0)}
          100%{opacity:0;transform:translateX(-20px)}
        }
        .ticker{
          position:fixed;left:0;right:0;bottom:0;background:linear-gradient(180deg,#0b0f14,#090c10);
          border-top:1px solid var(--stroke);padding:8px 0;display:none;z-index:70
        }
        .ticker.show{display:block}
        .track{white-space:nowrap;overflow:hidden}
        .line{display:inline-block;padding-left:100%;animation:marq 28s linear infinite}
        @keyframes marq{0%{transform:translateX(0)}100%{transform:translateX(-100%)}}
        .item{
          display:inline-block;margin-right:32px;padding:6px 10px;border-radius:999px;
          background:rgba(255,255,255,.05);border:1px solid var(--stroke);color:#dbe2ea;font-size:12px
        }
        .bonus{
          position:fixed;top:72px;left:50%;transform:translateX(-50%);
          background:linear-gradient(135deg,#1b2838,#243b55);border:1px solid #2b4a6a;color:#fff;
          padding:10px 16px;border-radius:12px;z-index:65;box-shadow:0 10px 30px rgba(0,0,0,.35)
        }

        /* Responsivo */
        @media (max-width: 520px){
          .chat{min-height:480px}
          .viewers{top:50px}
          .badge{top:10px}
          .social-proof-strip{font-size:12px}
          .countdown{right:12px;bottom:12px}
          .popup{left:12px;bottom:12px}
        }
      `}</style>
    </>
  );
};

export default LiveClass;
