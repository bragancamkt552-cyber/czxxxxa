import React, { useEffect, useMemo, useRef, useState } from "react";

/**
 * LiveClass — versão ajustada
 * - Sem overlay/timer no player
 * - Sem cidades
 * - Enquete interativa dentro do chat (estilo Instagram)
 * - Rodapé com Política e Termos
 * - Espaçamento extra quando barras flutuantes estão ativas, evitando “cortar” o rodapé
 */

const LiveClass: React.FC = () => {
  // ====== ESTADOS PRINCIPAIS ======
  const [userInteracted, setUserInteracted] = useState(false);
  const [ctaActivated, setCtaActivated] = useState(false);
  const [urgencyLevel, setUrgencyLevel] = useState(0);
  const [viewerCount, setViewerCount] = useState(847);
  const [onlineCount, setOnlineCount] = useState(187);
  const [preCtaActive, setPreCtaActive] = useState(false);
  const [countdown, setCountdown] = useState({ min: 14, sec: 59 });
  const [spots, setSpots] = useState(47);
  const [buyerName, setBuyerName] = useState("Maria Silva");
  const [pollVisible, setPollVisible] = useState(false);
  const [bonusActive, setBonusActive] = useState(false);
  const [tickerActive, setTickerActive] = useState(false);

  // ====== ENQUETE (chat) ======
  const pollBase = useMemo(
    () => ({
      question: "Qual sua maior dificuldade com este tema?",
      options: [
        "Sou iniciante",
        "Falta de tempo",
        "Não sei por onde começar",
        "Já tentei e não deu certo",
      ],
      // base “não real” para social proof
      baseVotes: [42, 67, 51, 39],
    }),
    []
  );
  const [userVoted, setUserVoted] = useState(false);
  const [userChoice, setUserChoice] = useState<number | null>(null);
  const [tallies, setTallies] = useState<number[]>(pollBase.baseVotes);

  // Refs
  const chatInputRef = useRef<HTMLInputElement | null>(null);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);
  const lastMessageTime = useRef<number>(0);
  const timersRef = useRef<number[]>([]);
  const intervalsRef = useRef<number[]>([]);

  // ====== CONFIG TEMPOS ======
  const TIMING = useMemo(
    () => ({
      preCta: 600000, // 10:00
      showCta: 780000, // 13:00
      urgentMode: 780000,
      pollAtMs: 360000, // 6:00 — momento estratégico no meio da conversa
    }),
    []
  );
  // Para testes rápidos:
  // const TIMING = { preCta: 10000, showCta: 20000, urgentMode: 20000, pollAtMs: 5000 };

  // ====== DADOS MOCK ======
  const chatMessagesPhase1 = useMemo(
    () => [
      { delay: 2000, author: "João Pedro", text: "Oi pessoal! Primeira vez aqui", admin: false },
      { delay: 4500, author: "Maria Santos", text: "Vim pela indicação de uma amiga 👋", admin: false },
      { delay: 7000, author: "Moderador", text: "Bem-vindos! A aula já vai entregar conteúdo prático 👇", admin: true },
      { delay: 12000, author: "Ana Clara", text: "Som e imagem perfeitos aqui! 🔊", admin: false },
      { delay: 25000, author: "Carlos Silva", text: "Nunca tinha pensado desse jeito... 🤯", admin: false },
      { delay: 40000, author: "Luciana Reis", text: "Anotando tudo! 📝", admin: false },
      { delay: 55000, author: "Pedro Oliveira", text: "Isso serve para iniciantes?", admin: false },
      { delay: 58000, author: "Moderador", text: "Serve sim! Inclusive mostramos o passo a passo do zero 🚀", admin: true },
      { delay: 85000, author: "Fernanda Costa", text: "Funciona para quem tem pouco tempo?", admin: false },
      { delay: 88000, author: "Moderador", text: "Total! O método foi pensado para rotinas corridas (10–15 min/dia) ⏰", admin: true },
      { delay: 115000, author: "Roberto Lima", text: "Está clareando muita coisa pra mim 💡", admin: false },
      { delay: 170000, author: "Juliana Martins", text: "Dá pra aplicar hoje mesmo?", admin: false },
      { delay: 173000, author: "Moderador", text: "Sim! Tem passo prático ainda nessa aula 🎯", admin: true },
      { delay: 220000, author: "Bruno Souza", text: "Sensacional! Mudou minha perspectiva 🤯", admin: false },
      { delay: 280000, author: "Patrícia Alves", text: "Quero saber mais detalhes sobre o método", admin: false },
      { delay: 340000, author: "Amanda Silva", text: "Isso é revolucionário! Compartilhando com amigos 📱", admin: false },
      { delay: 400000, author: "Gabriel Santos", text: "Minha esposa precisa ver isso também", admin: false },
      { delay: 460000, author: "Camila Oliveira", text: "Amando cada minuto! Conteúdo de qualidade 👏", admin: false },
      { delay: 520000, author: "Felipe Costa", text: "Quando vamos ter acesso ao material completo?", admin: false },
      { delay: 525000, author: "Moderador", text: "Fica comigo, Felipe! Em instantes libero tudo 🔓", admin: true },
      { delay: 580000, author: "Daniela Rocha", text: "Ansiosa pelo que vem a seguir! 🤩", admin: false },
    ],
    []
  );

  const chatMessagesPhase2 = useMemo(
    () => [
      { delay: 1000, author: "Ricardo Mendes", text: "APARECEU O BOTÃO! 🟡 Vou garantir minha vaga!", admin: false },
      { delay: 3000, author: "Moderador", text: "🎉 As vagas são limitadas! Garanta a sua enquanto o desconto está ativo", admin: true },
      { delay: 6000, author: "Vanessa Lima", text: "Quanto custa? Vale a pena?", admin: false },
      { delay: 8000, author: "Carla Mendes", text: "Nossa, achei que seria mais caro! 😱", admin: false },
      { delay: 11000, author: "Bruno Souza", text: "Menos que uma pizza por mês! Sem desculpas 🍕", admin: false },
      { delay: 14000, author: "Carlos Silva", text: "Acabei de comprar! Muito barato pelo valor 💰", admin: false },
      { delay: 18000, author: "Moderador", text: "Tem garantia total de 7 dias. Testa sem risco 🛡️", admin: true },
      { delay: 25000, author: "Paula Ferreira", text: "COMPREI! Melhor investimento que já fiz! ✅", admin: false },
      { delay: 32000, author: "Roberto Lima", text: "Gente, as vagas estão acabando mesmo! ⚠️", admin: false },
      { delay: 40000, author: "Ana Clara", text: "Paguei no PIX, acesso imediato! Funcionou 🚀", admin: false },
      { delay: 48000, author: "Lucas Souza", text: "Esse desconto é só hoje?", admin: false },
      { delay: 51000, author: "Moderador", text: "Exclusivo para quem está ao vivo. Aproveita! ⏳", admin: true },
      { delay: 65000, author: "Thiago Alves", text: "Processando meu pagamento... ansioso! 🔄", admin: false },
      { delay: 80000, author: "Priscila Dias", text: "Consegui! Era isso que eu precisava 🙌", admin: false },
      { delay: 95000, author: "Eduardo Santos", text: "Último desconto do ano? Não posso perder!", admin: false },
      { delay: 110000, author: "Moderador", text: "Restam poucas vagas pessoal! Não deixem para depois ⚡", admin: true },
      { delay: 300000, author: "Juliana Martins", text: "Só 12 vagas restantes! Corram! 🏃‍♀️💨", admin: false },
    ],
    []
  );

  const buyerNames = useMemo(
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
      "Alberto Rocha",
      "Priscila Dias",
      "Fábio Castro",
      "Rafaela Nunes",
      "Eduardo Barbosa",
      "Camila Torres",
      "Diego Morais",
      "Letícia Campos",
    ],
    []
  );

  // ====== CHAT (imperativo igual ao seu) ======
  const appendChat = (author: string, text: string, admin = false) => {
    const container = chatContainerRef.current;
    if (!container) return;
    const wrap = document.createElement("div");
    wrap.className = `chat-message ${admin ? "message-admin" : ""}`;
    wrap.innerHTML = `
      <div class="message-author">${author}</div>
      <div class="message-text">${text}</div>
    `;
    container.appendChild(wrap);
    container.scrollTop = container.scrollHeight;

    const msgs = container.querySelectorAll(".chat-message");
    if (msgs.length > 50) msgs[0].remove();
  };

  // Enquete como um “chat-message” interativo
  const insertPollIntoChat = () => {
    if (!chatContainerRef.current) return;

    const container = chatContainerRef.current;
    const pollWrap = document.createElement("div");
    pollWrap.className = "chat-message poll-card";

    const currentTallies = [...tallies];

    const total = currentTallies.reduce((a, b) => a + b, 0);
    const optionHtml = pollBase.options
      .map((opt, idx) => {
        const pct = Math.round((currentTallies[idx] / Math.max(1, total)) * 100);
        return `
          <button class="poll-option" data-idx="${idx}">
            <span class="poll-label">${opt}</span>
            <span class="poll-bar"><i style="width:${pct}%"></i></span>
            <span class="poll-pct">${pct}%</span>
          </button>
        `;
      })
      .join("");

    pollWrap.innerHTML = `
      <div class="message-author" style="color:#9fe39f">Enquete · Moderador</div>
      <div class="poll-question">${pollBase.question}</div>
      <div class="poll-options">${optionHtml}</div>
      <div class="poll-hint">Toque para votar • Resultados parciais de outros participantes</div>
    `;

    container.appendChild(pollWrap);
    container.scrollTop = container.scrollHeight;

    // listeners de voto
    pollWrap.querySelectorAll<HTMLButtonElement>(".poll-option").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (userVoted) return;
        const idx = Number(btn.dataset.idx);
        setUserVoted(true);
        setUserChoice(idx);

        // atualiza estado + UI com animação das barras
        setTallies((prev) => {
          const next = [...prev];
          next[idx] += 1; // voto do usuário
          const sum = next.reduce((a, b) => a + b, 0);

          // atualiza barra/pct visual
          pollWrap.querySelectorAll(".poll-option").forEach((opt, i) => {
            const width = Math.round((next[i] / sum) * 100);
            (opt.querySelector("i") as HTMLElement).style.width = width + "%";
            (opt.querySelector(".poll-pct") as HTMLElement).textContent = width + "%";
            opt.classList.toggle("selected", i === idx);
          });
          (pollWrap.querySelector(".poll-hint") as HTMLElement).textContent =
            "Obrigado por votar! Estes são os resultados parciais.";
          return next;
        });
      });
    });
  };

  // ====== EFEITOS ======
  // Fase 1 + marca de tempo para mostrar enquete
  useEffect(() => {
    chatMessagesPhase1.forEach((m) => {
      const t = window.setTimeout(() => appendChat(m.author, m.text, m.admin), m.delay);
      timersRef.current.push(t);
    });

    const pollT = window.setTimeout(() => setPollVisible(true), TIMING.pollAtMs);
    timersRef.current.push(pollT);

    return () => {
      timersRef.current.forEach((t) => window.clearTimeout(t));
      timersRef.current = [];
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Quando a enquete ficar visível, inserir no chat
  useEffect(() => {
    if (pollVisible) insertPollIntoChat();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pollVisible]);

  // Perguntas do usuário
  const handleUserMessage = (msg: string) => {
    const now = Date.now();
    if (now - lastMessageTime.current < 3000) return;
    lastMessageTime.current = now;

    appendChat("Você", msg, false);
    const lower = msg.toLowerCase();

    const responder = () => {
      if (!ctaActivated) {
        if (lower.includes("iniciante") || lower.includes("começar"))
          appendChat("Moderador", "Perfeito para iniciantes! Mostramos tudo do zero, sem complicação 🚀", true);
        else if (lower.includes("tempo") || lower.includes("rápido"))
          appendChat("Moderador", "Método pensado para quem tem pouco tempo: 10-15 min/dia ⏰", true);
        else if (lower.includes("funciona") || lower.includes("resultado"))
          appendChat("Moderador", "Funciona sim! Vou mostrar casos práticos ainda nesta aula 📊", true);
        else if (lower.includes("quanto") || lower.includes("preço"))
          appendChat("Moderador", "Calma! Vou falar sobre investimento daqui a pouco 😉", true);
        else {
          const responses = [
            "Ótima pergunta! Continue assistindo que a resposta vem 👀",
            "Interessante! Vou abordar isso ainda na aula 🎯",
            "Boa observação! Fique ligado que vou explicar 📚",
            "Excelente ponto! A resposta prática vem a seguir ⚡",
          ];
          appendChat("Moderador", responses[Math.floor(Math.random() * responses.length)], true);
        }
      } else {
        if (lower.includes("preço") || lower.includes("valor") || lower.includes("quanto"))
          appendChat("Moderador", "Hoje com 40% OFF: de R$ 497 por apenas R$ 297 (12x sem juros) 💰", true);
        else if (lower.includes("garantia") || lower.includes("risco"))
          appendChat("Moderador", "7 dias de garantia incondicional. Risco zero! 🛡️", true);
        else if (lower.includes("funciona") || lower.includes("resultado"))
          appendChat("Moderador", "Método testado e aprovado! Com garantia total 🏆", true);
        else if (lower.includes("vaga") || lower.includes("lugar"))
          appendChat("Moderador", "Vagas limitadas! Garanta a sua no botão dourado ⬆️", true);
        else {
          const ctaResponses = [
            "Aproveita o botão dourado enquanto o desconto está liberado! ⬆️",
            "Última chance com este valor! Não perca 🔥",
            "Garanta sua vaga agora — vagas limitadas! ⚡",
            "Desconto exclusivo para quem está ao vivo! 🎯",
          ];
          appendChat("Moderador", ctaResponses[Math.floor(Math.random() * ctaResponses.length)], true);
        }
      }
    };

    const t = window.setTimeout(responder, 1500 + Math.random() * 1000);
    timersRef.current.push(t);
  };

  // Interação
  useEffect(() => {
    const handler = () => !userInteracted && setUserInteracted(true);
    document.addEventListener("click", handler);
    document.addEventListener("scroll", handler);
    document.addEventListener("keydown", handler);
    return () => {
      document.removeEventListener("click", handler);
      document.removeEventListener("scroll", handler);
      document.removeEventListener("keydown", handler);
    };
  }, [userInteracted]);

  // “Alguém está digitando…”
  useEffect(() => {
    const typing = window.setInterval(() => {
      if (Math.random() > 0.6 && chatContainerRef.current) {
        const node = document.createElement("div");
        node.className = "chat-message";
        node.style.fontStyle = "italic";
        node.style.opacity = "0.7";
        node.innerHTML = '<span style="color:#666;">💭 Alguém está digitando...</span>';
        chatContainerRef.current.appendChild(node);
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        window.setTimeout(() => node.remove(), 2500);
      }
    }, 20000);
    intervalsRef.current.push(typing);
    return () => window.clearInterval(typing);
  }, []);

  // Viewers/online
  useEffect(() => {
    const baseViewers = window.setInterval(() => {
      setViewerCount((v) => {
        if (!ctaActivated && v < 1450) return v + Math.floor(Math.random() * 15) + 5;
        const change = Math.floor(Math.random() * 20) - 10;
        const next = Math.max(1200, Math.min(1450, v + change));
        return ctaActivated ? next : v;
      });
    }, userInteracted ? 2000 : 4000);
    const baseOnline = window.setInterval(() => {
      setOnlineCount((o) => {
        if (!ctaActivated && o < 320) return o + Math.floor(Math.random() * 5) + 1;
        const next = o + (Math.floor(Math.random() * 8) - 3);
        return ctaActivated ? Math.max(280, Math.min(350, next)) : o;
      });
    }, userInteracted ? 3000 : 6000);

    intervalsRef.current.push(baseViewers, baseOnline);
    return () => {
      window.clearInterval(baseViewers);
      window.clearInterval(baseOnline);
    };
  }, [ctaActivated, userInteracted]);

  // Pre-CTA
  useEffect(() => {
    const id = window.setTimeout(() => {
      setPreCtaActive(true);
      setUrgencyLevel(1);
    }, TIMING.preCta);
    timersRef.current.push(id);
    return () => window.clearTimeout(id);
  }, [TIMING.preCta]);

  // CTA, countdown, spots, ticker, bônus
  const activateCTA = () => {
    if (ctaActivated) return;
    setCtaActivated(true);
    setUrgencyLevel(2);

    chatMessagesPhase2.forEach((m) => {
      const t = window.setTimeout(() => appendChat(m.author, m.text, m.admin), m.delay);
      timersRef.current.push(t);
    });

    const countdownId = window.setInterval(() => {
      setCountdown((c) => {
        let min = c.min;
        let sec = c.sec - 1;
        if (sec < 0) {
          sec = 59;
          min -= 1;
        }
        if (min < 0) return { min: 14, sec: 59 };
        return { min, sec };
      });
    }, 1000);
    intervalsRef.current.push(countdownId);

    const reduce = () =>
      setSpots((s) => {
        if (s <= 5) return s;
        let next = s - (Math.floor(Math.random() * 3) + 1);
        if (next < 5) next = 5;
        return next;
      });

    [8000, 20000, 40000, 70000, 120000].forEach((ms) => {
      const t = window.setTimeout(reduce, ms);
      timersRef.current.push(t);
    });
    const loopReduce = window.setTimeout(() => {
      const int = window.setInterval(reduce, 45000 + Math.random() * 30000);
      intervalsRef.current.push(int);
    }, 120000);
    timersRef.current.push(loopReduce);

    const firstNotif = window.setTimeout(() => {
      const idx = Math.floor(Math.random() * buyerNames.length);
      setBuyerName(buyerNames[idx]);
    }, 4000);
    timersRef.current.push(firstNotif);
    const notifInt = window.setInterval(() => {
      const idx = Math.floor(Math.random() * buyerNames.length);
      setBuyerName(buyerNames[idx]);
      const btn = document.getElementById("mainCta");
      if (btn) {
        btn.classList.add("pulse-effect");
        window.setTimeout(() => btn.classList.remove("pulse-effect"), 3000);
      }
    }, 15000 + Math.random() * 10000);
    intervalsRef.current.push(notifInt);

    setTickerActive(true);
    const bonusT = window.setTimeout(() => setBonusActive(true), 3000);
    timersRef.current.push(bonusT);
  };

  useEffect(() => {
    const t = window.setTimeout(activateCTA, TIMING.showCta);
    timersRef.current.push(t);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [TIMING.showCta]);

  // Replay date (amanhã 23:59)
  const replayDate = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    const dia = String(d.getDate()).padStart(2, "0");
    const mes = String(d.getMonth() + 1).padStart(2, "0");
    const ano = d.getFullYear();
    return `${dia}/${mes}/${ano} 23:59`;
  }, []);

  // Ticker
  const tickerItems = useMemo(() => {
    const all = [
      ...buyerNames,
      "Thiago A.",
      "Marina G.",
      "Alberto R.",
      "Priscila D.",
      "Fábio C.",
      "Rafaela N.",
      "Eduardo B.",
    ];
    const states = ["SP", "RJ", "MG", "PR", "SC", "RS", "ES", "BA", "CE", "DF", "GO", "PE", "AM"];
    const items: string[] = [];
    for (let i = 0; i < 25; i++) {
      const name = all[Math.floor(Math.random() * all.length)];
      const uf = states[Math.floor(Math.random() * states.length)];
      const t = Math.floor(Math.random() * 30) + 1;
      items.push(`✅ <strong>${name}</strong> (${uf}) garantiu há ${t}min`);
    }
    return items;
  }, [buyerNames]);

  // Limpeza
  useEffect(() => {
    return () => {
      timersRef.current.forEach((t) => window.clearTimeout(t));
      intervalsRef.current.forEach((i) => window.clearInterval(i));
    };
  }, []);

  // CTA click
  const handleCtaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const loading = document.getElementById("buttonLoading");
    const btn = e.currentTarget as HTMLAnchorElement;
    if (loading) loading.classList.add("active");
    btn.style.opacity = "0.7";
    (btn.style as any).pointerEvents = "none";

    window.setTimeout(() => {
      window.open("https://seudominio.com/checkout", "_blank");
      window.setTimeout(() => {
        if (loading) loading.classList.remove("active");
        btn.style.opacity = "1";
        (btn.style as any).pointerEvents = "auto";
      }, 2000);
    }, 2500);
  };

  const handleVideoClick = () => {
    alert("🎬 Aqui você integraria com seu player de vídeo real!");
  };

  return (
    <>
      <div className="top-bar" id="topBar">
        {ctaActivated
          ? "⚠️ OFERTA LIBERADA! Vagas limitadas - Desconto exclusivo AO VIVO!"
          : "📚 Aula Exclusiva ao Vivo - Preste atenção nas dicas!"}
      </div>

      <div className="social-proof-strip">
        <span>
          <strong>+3.250</strong> pessoas já assistiram esta aula exclusiva nas últimas semanas
        </span>
      </div>

      <div className={`main-container ${ctaActivated ? "with-bottom-bars" : ""}`}>
        {/* Vídeo */}
        <div className="video-section">
          <div className="live-badge">
            <div className="live-dot" />
            <span>AO VIVO</span>
          </div>

          <div className="exclusive-badge">🔒 Conteúdo restrito — não listado no YouTube</div>

          <div className="viewer-count">
            <span className="viewer-eye">👁</span>
            <span className="viewer-number" id="viewerCount">
              {viewerCount.toLocaleString("pt-BR")}
            </span>
            <span>assistindo</span>
          </div>

          <div className="video-placeholder" onClick={handleVideoClick}>
            <div>▶️</div>
          </div>
        </div>

        {/* Chat */}
        <div className="chat-section">
          <div className="chat-header">
            <div>
              <h3>Chat ao Vivo</h3>
              <div className="pin-message">📌 No final: presente especial + condição exclusiva</div>
              {pollVisible && (
                <div className="poll-badge" id="pollBadge">
                  🗳️ Enquete aberta no chat — participe!
                </div>
              )}
            </div>
            <div className="online-indicator">
              <div className="online-dot" />
              <span id="onlineCount">{onlineCount}</span>&nbsp;online
            </div>
          </div>

          <div className="chat-messages" id="chatMessages" ref={chatContainerRef} />

          <div className="chat-input-container">
            <input
              ref={chatInputRef}
              type="text"
              className="chat-input"
              placeholder="Digite sua pergunta..."
              maxLength={200}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  const target = e.currentTarget;
                  const val = target.value.trim();
                  if (!val) return;
                  if (val === "acelerar" && !ctaActivated) {
                    appendChat("Sistema", "🚀 Modo teste ativado! Acelerando timeline...", true);
                    target.value = "";
                    window.setTimeout(() => setPreCtaActive(true), 2000);
                    window.setTimeout(() => activateCTA(), 5000);
                    return;
                  }
                  handleUserMessage(val);
                  target.value = "";
                }
              }}
              onInput={() => !userInteracted && setUserInteracted(true)}
            />
          </div>
        </div>

        {/* Pre-CTA */}
        <div className={`pre-cta-message ${preCtaActive ? "active" : ""}`} id="preCta">
          <h3>🎯 Prepare-se!</h3>
          <p>Nos próximos minutos vou revelar como aplicar tudo isso de forma completa…</p>
        </div>

        {/* CTA */}
        <div className={`cta-section ${ctaActivated ? "active" : ""}`} id="ctaSection">
          <h2 style={{ marginBottom: 15, color: "#FFD700", fontSize: 24 }}>🎁 CHEGOU O MOMENTO!</h2>
          <p style={{ marginBottom: 20, fontSize: 18 }}>
            Acesso liberado APENAS para quem está assistindo ao vivo agora
          </p>
          <a href="#" className="cta-button" id="mainCta" onClick={handleCtaClick}>
            QUERO ACESSO COMPLETO AO MÉTODO
          </a>
          <div className="button-loading loading-dots" id="buttonLoading">
            ⏳ Processando
          </div>
          <div className="limited-spots">
            <p style={{ marginBottom: 15, fontSize: 16 }}>
              ⚠️ ATENÇÃO: Por questões de suporte, estamos limitando as vagas
            </p>
            <p>
              Restam apenas{" "}
              <span
                className="spots-number"
                id="spotsNumber"
                style={{
                  color: spots <= 15 ? "#ff4d4d" : undefined,
                  animation: spots <= 8 ? "numberPulse 1s infinite" : undefined,
                }}
              >
                {spots}
              </span>{" "}
              vagas com 40% de desconto
            </p>
            <p style={{ fontSize: 14, marginTop: 15, color: "#ccc" }}>
              Preço normal: <s>R$ 497</s> | Hoje apenas: <strong style={{ color: "#FFD700" }}>R$ 297</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Countdown */}
      <div className={`countdown-timer ${ctaActivated ? "active" : ""}`} id="countdownTimer">
        ⏰ Desconto expira em:{" "}
        <span
          id="countdown"
          style={{
            color: countdown.min < 5 ? "#ff4d4d" : undefined,
            fontWeight: countdown.min < 5 ? "bold" : undefined,
          }}
        >
          {`${String(countdown.min).padStart(2, "0")}:${String(countdown.sec).padStart(2, "0")}`}
        </span>
      </div>

      {/* Replay */}
      <div className={`replay-strip ${ctaActivated ? "active" : ""}`} id="replayStrip">
        📺 Replay disponível até <strong id="replayDate">{replayDate}</strong>. Depois, sai do ar.
      </div>

      {/* Notificação popup */}
      <div className={`notification-popup ${ctaActivated ? "active" : ""}`} id="notificationPopup">
        <div className="notification-content">
          <span style={{ fontSize: 20 }}>🎉</span>
          <span>
            <strong id="buyerName">{buyerName}</strong> acabou de garantir sua vaga!
          </span>
        </div>
      </div>

      {/* Ticker */}
      <div className={`ticker ${tickerActive ? "active" : ""}`} id="ticker">
        <div className="ticker-track">
          <div
            className="ticker-content"
            id="tickerContent"
            dangerouslySetInnerHTML={{
              __html: tickerItems.map((i) => `<span class="ticker-item">${i}</span>`).join(""),
            }}
          />
        </div>
      </div>

      {/* Rodapé (Política/Termos) */}
      <footer className="site-footer">
        <div className="footer-inner">
          <span>© {new Date().getFullYear()} Sua Marca</span>
          <nav>
            <a href="/politica-de-privacidade" target="_blank" rel="noreferrer">
              Política de Privacidade
            </a>
            <a href="/termos-de-uso" target="_blank" rel="noreferrer">
              Termos de Uso
            </a>
            <a href="/suporte" target="_blank" rel="noreferrer">
              Suporte
            </a>
          </nav>
        </div>
      </footer>

      {/* ====== ESTILOS ====== */}
      <style>{`
        *{margin:0;padding:0;box-sizing:border-box}
        body{
          font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;
          background:#0a0a0a;color:#fff;overflow-x:hidden;
          -webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale
        }

        .top-bar{
          position:fixed;top:0;left:0;width:100%;
          background:linear-gradient(90deg,#1a1a1a,#2a2a2a);
          padding:12px;text-align:center;font-weight:bold;font-size:14px;z-index:1000;transition:.5s;
          box-shadow:0 2px 10px rgba(0,0,0,.3)
        }

        .social-proof-strip{
          margin-top:50px;background:linear-gradient(90deg,#111,#1a1a1a);border-bottom:1px solid #333;
          text-align:center;padding:12px;font-size:13px;color:#ddd;position:relative;overflow:hidden
        }
        .social-proof-strip::before{
          content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;
          background:linear-gradient(90deg,transparent,rgba(255,215,0,.1),transparent);
          animation:shine 4s infinite
        }
        .social-proof-strip strong{color:#FFD700;text-shadow:0 0 10px rgba(255,215,0,.3)}

        .main-container{
          max-width:1400px;margin:10px auto 0;padding:20px;
          display:grid;grid-template-columns:1fr 360px;gap:20px;
        }
        /* evita cortar o rodapé quando barras flutuantes estiverem visíveis */
        .with-bottom-bars { padding-bottom: 180px; }

        .video-section{
          background:linear-gradient(135deg,#000,#111);border-radius:16px;overflow:hidden;
          position:relative;box-shadow:0 20px 40px rgba(0,0,0,.5);
          border:1px solid rgba(255,255,255,.1)
        }
        .video-placeholder{
          width:100%;aspect-ratio:16/9;
          background:radial-gradient(circle at 50% 50%, #1c2330 0%, #0b0f16 100%);
          display:flex;align-items:center;justify-content:center;position:relative;
          cursor:pointer;transition:.3s
        }
        .video-placeholder:hover{transform:scale(1.01)}
        .video-placeholder > div{font-size:64px;text-shadow:0 0 20px rgba(255,255,255,.3);animation:playPulse 2s infinite}
        @keyframes playPulse{0%,100%{transform:scale(1);opacity:.85}50%{transform:scale(1.1);opacity:1}}

        .live-badge{
          position:absolute;top:16px;left:16px;background:linear-gradient(135deg,#ff0000,#ff3333);
          padding:8px 16px;border-radius:25px;display:flex;align-items:center;gap:8px;z-index:10;
          animation:blink 1.5s infinite;box-shadow:0 4px 15px rgba(255,0,0,.4);
          border:1px solid rgba(255,255,255,.2)
        }
        @keyframes blink{0%,100%{opacity:1}50%{opacity:.9}}
        .live-dot{
          width:10px;height:10px;background:#fff;border-radius:50%;
          animation:pulse-dot 1.5s infinite;box-shadow:0 0 10px rgba(255,255,255,.5)
        }
        @keyframes pulse-dot{0%,100%{transform:scale(1)}50%{transform:scale(1.3)}}

        .exclusive-badge{
          position:absolute;top:16px;right:16px;
          background:rgba(255,255,255,.08);border:1px solid rgba(255,215,0,.3);
          backdrop-filter:blur(10px);padding:8px 14px;border-radius:12px;
          font-size:12px;color:#FFD700;z-index:10;text-shadow:0 0 10px rgba(255,215,0,.3)
        }

        .viewer-count{
          position:absolute;top:70px;right:16px;
          background:rgba(0,0,0,.8);padding:8px 14px;border-radius:25px;
          display:flex;gap:8px;align-items:center;backdrop-filter:blur(5px);
          border:1px solid rgba(255,255,255,.1);animation:viewerPulse 4s infinite
        }
        @keyframes viewerPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.05)}}
        .viewer-eye{color:#ff4d4d;filter:drop-shadow(0 0 5px rgba(255,77,77,.5))}
        .viewer-number{font-weight:bold;color:#FFD700}

        .chat-section{
          background:linear-gradient(135deg,#1a1a1a,#222);border-radius:16px;
          display:flex;flex-direction:column;height:600px;
          box-shadow:0 10px 30px rgba(0,0,0,.3);border:1px solid rgba(255,255,255,.1)
        }
        .chat-header{
          padding:16px;background:linear-gradient(135deg,#252525,#2a2a2a);
          border-radius:16px 16px 0 0;display:flex;justify-content:space-between;align-items:center;
          border-bottom:1px solid rgba(255,255,255,.1)
        }
        .online-indicator{display:flex;align-items:center;gap:8px;font-size:14px;color:#4CAF50;font-weight:bold}
        .online-dot{
          width:8px;height:8px;background:#4CAF50;border-radius:50%;
          animation:pulse-dot 2s infinite;box-shadow:0 0 10px rgba(76,175,80,.5)
        }
        .pin-message{
          margin-top:8px;font-size:12px;color:#FFD700;
          background:linear-gradient(135deg,#1a1a1a,#2a1a00);
          border:1px solid rgba(255,215,0,.3);border-radius:8px;padding:8px;
          position:relative;overflow:hidden
        }
        .pin-message::before{
          content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;
          background:linear-gradient(90deg,transparent,rgba(255,215,0,.1),transparent);
          animation:shine 3s infinite
        }
        .poll-badge{
          margin-top:8px;font-size:12px;color:#9fe39f;
          background:linear-gradient(135deg,#152a15,#1a3d1a);
          border:1px solid rgba(159,227,159,.3);border-radius:8px;padding:8px
        }
        .chat-messages{
          flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:12px;
          scroll-behavior:smooth
        }
        .chat-messages::-webkit-scrollbar{width:6px}
        .chat-messages::-webkit-scrollbar-track{background:#252525;border-radius:3px}
        .chat-messages::-webkit-scrollbar-thumb{background:#444;border-radius:3px}
        .chat-messages::-webkit-scrollbar-thumb:hover{background:#555}
        .chat-message{
          animation:slideIn .4s ease-out;padding:8px;border-radius:8px;
          background:rgba(255,255,255,.03);border-left:3px solid transparent;transition:.2s
        }
        .chat-message:hover{background:rgba(255,255,255,.06);transform:translateX(5px)}
        @keyframes slideIn{from{opacity:0;transform:translateX(-20px)}to{opacity:1;transform:translateX(0)}}
        .message-author{font-weight:bold;color:#4A90E2;font-size:13px;margin-bottom:4px}
        .message-text{font-size:14px;color:#e0e0e0;line-height:1.4}
        .message-admin{border-left-color:#FFD700;background:rgba(255,215,0,.08)}
        .message-admin .message-author{color:#FFD700}
        .message-admin .message-author::before{content:"⭐ "}

        /* ENQUETE NO CHAT */
        .poll-card{
          background:linear-gradient(135deg,#141a14,#0f140f);
          border:1px solid rgba(159,227,159,.25);
        }
        .poll-question{
          font-weight:600;margin:6px 2px 10px;color:#c8f0c8
        }
        .poll-options{
          display:flex;flex-direction:column;gap:10px
        }
        .poll-option{
          display:grid;grid-template-columns:1fr auto;align-items:center;gap:10px;
          background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);
          border-radius:10px;padding:10px;cursor:pointer;transition:.2s
        }
        .poll-option:hover{transform:translateY(-1px);background:rgba(255,255,255,.06)}
        .poll-option.selected{outline:2px solid #9fe39f;background:rgba(159,227,159,.12)}
        .poll-label{font-size:14px;color:#e7ffe7}
        .poll-bar{height:8px;border-radius:8px;background:#1e2a1e;overflow:hidden}
        .poll-bar i{display:block;height:100%;width:0;transition:width .5s ease;background:#36c36c}
        .poll-pct{font-weight:700;color:#9fe39f;font-size:13px}
        .poll-hint{margin-top:8px;font-size:12px;color:#9fe39f;opacity:.9}

        .chat-input-container{padding:16px;background:linear-gradient(135deg,#252525,#2a2a2a);border-radius:0 0 16px 16px}
        .chat-input{
          width:100%;padding:12px 16px;background:rgba(255,255,255,.08);
          border:1px solid rgba(255,255,255,.2);border-radius:25px;color:#fff;
          font-size:14px;transition:.3s;backdrop-filter:blur(5px)
        }
        .chat-input:focus{
          outline:none;border-color:#FFD700;box-shadow:0 0 15px rgba(255,215,0,.3);
          background:rgba(255,255,255,.12)
        }
        .chat-input::placeholder{color:#999}

        .pre-cta-message{
          grid-column:1/-1;text-align:center;padding:24px;
          background:linear-gradient(135deg,#1a1a1a,#2a2a2a);
          border-radius:16px;margin-top:20px;display:none;
          animation:fadeIn .5s ease-out;border:1px solid rgba(255,215,0,.2);
          position:relative;overflow:hidden
        }
        .pre-cta-message.active{display:block}
        .pre-cta-message::before{
          content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;
          background:linear-gradient(90deg,transparent,rgba(255,215,0,.1),transparent);
          animation:shine 3s infinite
        }
        .pre-cta-message h3{color:#FFD700;margin-bottom:12px;font-size:20px;text-shadow:0 0 15px rgba(255,215,0,.3)}

        .cta-section{
          grid-column:1/-1;text-align:center;margin-top:30px;display:none;
          animation:fadeInScale .6s ease-out
        }
        .cta-section.active{display:block}
        @keyframes fadeInScale{from{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}
        .cta-button{
          background:linear-gradient(135deg,#FFD700,#FFA500);color:#000;
          padding:20px 40px;font-size:18px;font-weight:bold;border:none;
          border-radius:50px;cursor:pointer;transition:.3s;text-decoration:none;
          display:inline-block;position:relative;overflow:hidden;
          box-shadow:0 15px 40px rgba(255,215,0,.4);text-transform:uppercase;
          letter-spacing:1px
        }
        .cta-button::before{
          content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;
          background:linear-gradient(90deg,transparent,rgba(255,255,255,.4),transparent);
          animation:shine 2.5s infinite
        }
        .cta-button:hover{transform:scale(1.05) translateY(-3px);box-shadow:0 20px 50px rgba(255,215,0,.6)}
        .cta-button:active{transform:scale(.98)}
        .limited-spots{
          background:linear-gradient(135deg,rgba(255,0,0,.1),rgba(255,0,0,.2));
          border:1px solid rgba(255,0,0,.4);padding:20px;border-radius:12px;
          margin-top:20px;display:none;position:relative;overflow:hidden
        }
        .cta-section.active .limited-spots{display:block;animation:fadeIn .5s ease-out .5s both}
        .limited-spots::before{
          content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;
          background:linear-gradient(90deg,transparent,rgba(255,0,0,.1),transparent);
          animation:shine 4s infinite
        }
        .spots-number{font-size:32px;font-weight:bold;color:#FFD700;text-shadow:0 0 20px rgba(255,215,0,.5);animation:numberPulse 2s infinite}
        @keyframes numberPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.1)}}
        .button-loading{display:none;margin-top:15px;font-size:14px;color:#999;animation:loadingPulse 1s infinite}
        .button-loading.active{display:block}
        @keyframes loadingPulse{0%,100%{opacity:.5}50%{opacity:1}}

        .countdown-timer{
          position:fixed;bottom:20px;right:20px;
          background:linear-gradient(135deg,rgba(255,0,0,.95),rgba(255,51,51,.95));
          padding:12px 20px;border-radius:25px;font-weight:bold;z-index:1200;
          display:none;animation:slideInRight .5s ease-out;
          box-shadow:0 10px 30px rgba(255,0,0,.4);backdrop-filter:blur(10px);
          border:1px solid rgba(255,255,255,.2)
        }
        .countdown-timer.active{display:block}

        .notification-popup{
          position:fixed;bottom:20px;left:20px;
          background:linear-gradient(135deg,#1e3c72,#2a5298);
          padding:16px 24px;border-radius:12px;
          box-shadow:0 10px 30px rgba(0,0,0,.4);transform:translateX(-400px);
          z-index:1200;transition:transform .5s ease;backdrop-filter:blur(10px);
          border:1px solid rgba(255,255,255,.1)
        }
        .notification-popup.active{animation:notificationSlide 10s infinite}
        @keyframes notificationSlide{15%,85%{transform:translateX(0)}0%,100%{transform:translateX(-400px)}}

        .ticker{
          position:fixed;left:0;right:0;bottom:0;
          background:linear-gradient(90deg,#0f0f0f,#1a1a1a);
          border-top:1px solid rgba(255,215,0,.3);padding:10px 0;z-index:1100;display:none;
          box-shadow:0 -5px 20px rgba(0,0,0,.3)
        }
        .ticker.active{display:block}
        .ticker-track{white-space:nowrap;overflow:hidden;position:relative}
        .ticker-content{display:inline-block;padding-left:100%;animation:tickerMove 30s linear infinite}
        @keyframes tickerMove{0%{transform:translateX(0)}100%{transform:translateX(-100%)}}
        .ticker-item{display:inline-block;margin-right:50px;color:#ddd;font-size:13px;background:rgba(255,255,255,.05);padding:5px 10px;border-radius:15px;border:1px solid rgba(255,255,255,.1)}
        .ticker-item strong{color:#9fe39f}

        .replay-strip{
          position:fixed;left:0;right:0;bottom:50px;
          background:linear-gradient(90deg,#161616,#1f1f1f);
          border-top:1px solid rgba(255,0,0,.3);color:#ddd;
          text-align:center;padding:10px;font-size:13px;display:none;z-index:1100;
          box-shadow:0 -3px 15px rgba(0,0,0,.3)
        }
        .replay-strip.active{display:block}

        /* RODAPÉ */
        .site-footer{
          margin:30px auto 0; padding:20px 16px; border-top:1px solid rgba(255,255,255,.08);
          background:linear-gradient(180deg, rgba(255,255,255,.02), rgba(255,255,255,.01));
        }
        .footer-inner{
          max-width:1200px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:16px;
          color:#bbb;font-size:13px;
        }
        .footer-inner nav{display:flex;gap:16px;flex-wrap:wrap}
        .footer-inner a{color:#ddd;text-decoration:none}
        .footer-inner a:hover{text-decoration:underline}

        @media (max-width: 1200px){
          .main-container{max-width:100%;padding:15px}
        }
        @media (max-width: 900px){
          .main-container{grid-template-columns:1fr;gap:15px}
          .chat-section{height:450px;margin-top:10px}
          .video-placeholder > div{font-size:48px}
        }
        @media (max-width: 768px){
          .top-bar{font-size:12px;padding:10px 8px}
          .social-proof-strip{margin-top:45px;padding:10px 8px;font-size:12px}
          .main-container{padding:10px;margin-top:5px}
          .video-section{border-radius:12px}
          .video-placeholder > div{font-size:40px}
          .live-badge{padding:6px 12px;font-size:12px;top:12px;left:12px}
          .exclusive-badge{font-size:11px;padding:6px 10px;top:12px;right:12px}
          .viewer-count{top:55px;right:12px;padding:6px 10px;font-size:12px}
          .chat-section{height:400px;border-radius:12px}
          .chat-header{padding:12px}
          .chat-messages{padding:12px}
          .chat-input-container{padding:12px}
          .chat-input{padding:10px 14px;font-size:13px}
          .pre-cta-message{padding:16px;margin-top:15px}
          .pre-cta-message h3{font-size:18px}
          .cta-button{
            padding:16px 32px;font-size:16px;border-radius:30px;
            width:100%;max-width:350px
          }
          .limited-spots{padding:16px;margin-top:15px}
          .spots-number{font-size:28px}
          .countdown-timer{bottom:15px;right:15px;padding:8px 15px;font-size:13px;border-radius:20px}
          .notification-popup{bottom:15px;left:15px;padding:12px 16px;font-size:13px;max-width:calc(100vw - 30px)}
          .replay-strip{bottom:45px;padding:8px;font-size:12px}
          .ticker{padding:8px 0}
          .ticker-item{margin-right:30px;font-size:12px;padding:4px 8px}
          .site-footer{padding-bottom:80px} /* mais respiro no mobile */
        }
        @media (max-width: 480px){
          .top-bar{font-size:11px}
          .social-proof-strip{font-size:11px}
          .video-placeholder > div{font-size:32px}
          .live-badge{padding:5px 10px;font-size:11px}
          .exclusive-badge{font-size:10px;padding:5px 8px}
          .chat-section{height:350px}
          .message-author{font-size:12px}
          .message-text{font-size:13px}
          .cta-button{padding:14px 24px;font-size:15px}
          .pre-cta-message h3{font-size:16px}
          .spots-number{font-size:24px}
          .countdown-timer{font-size:12px;padding:6px 12px}
        }

        .pulse-effect{animation:ctaPulse 2s infinite;}
        @keyframes ctaPulse{
          0%{box-shadow:0 15px 40px rgba(255,215,0,.4)}
          50%{box-shadow:0 20px 50px rgba(255,215,0,.7)}
          100%{box-shadow:0 15px 40px rgba(255,215,0,.4)}
        }
        .loading-dots::after{content:'...';animation:loadingDots 1.5s infinite}
        @keyframes loadingDots{
          0%{content:'...'}33%{content:'.'}66%{content:'..'}100%{content:'...'}
        }
        html{scroll-behavior:smooth}
      `}</style>
    </>
  );
};

export default LiveClass;
