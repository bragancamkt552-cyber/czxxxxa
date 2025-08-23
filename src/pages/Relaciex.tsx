<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta name="description" content="Aula exclusiva ao vivo - Aprenda o método completo">
  <title>🔴 AO VIVO: Aula Exclusiva em Andamento</title>
  <style>
    *{margin:0;padding:0;box-sizing:border-box}
    body{
      font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;
      background:#0a0a0a;color:#fff;overflow-x:hidden;
      -webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale
    }

    /* Barra Superior */
    .top-bar{
      position:fixed;top:0;left:0;width:100%;
      background:linear-gradient(90deg,#1a1a1a,#2a2a2a);
      padding:12px;text-align:center;font-weight:bold;font-size:14px;z-index:1000;transition:.5s;
      box-shadow:0 2px 10px rgba(0,0,0,.3)
    }
    .top-bar.urgent{background:linear-gradient(90deg,#ff0000,#ff3333);animation:pulse 2s infinite}
    @keyframes pulse{0%,100%{opacity:1}50%{opacity:.85}}

    /* Faixa de prova social (inscritos totais) */
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

    /* Container */
    .main-container{
      max-width:1400px;margin:10px auto 0;padding:20px;
      display:grid;grid-template-columns:1fr 360px;gap:20px
    }

    /* Vídeo */
    .video-section{
      background:linear-gradient(135deg,#000,#111);border-radius:16px;overflow:hidden;
      position:relative;box-shadow:0 20px 40px rgba(0,0,0,.5);
      border:1px solid rgba(255,255,255,.1)
    }
    .video-placeholder{
      width:100%;aspect-ratio:16/9;background:radial-gradient(circle at center,#222,#000);
      display:flex;align-items:center;justify-content:center;position:relative;
      cursor:pointer;transition:.3s
    }
    .video-placeholder:hover{transform:scale(1.01)}
    .video-placeholder > div{font-size:64px;text-shadow:0 0 20px rgba(255,255,255,.3);animation:playPulse 2s infinite}
    @keyframes playPulse{0%,100%{transform:scale(1);opacity:.8}50%{transform:scale(1.1);opacity:1}}

    /* Badge AO VIVO */
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

    /* Badge Exclusividade */
    .exclusive-badge{
      position:absolute;top:16px;right:16px;
      background:rgba(255,255,255,.08);border:1px solid rgba(255,215,0,.3);
      backdrop-filter:blur(10px);padding:8px 14px;border-radius:12px;
      font-size:12px;color:#FFD700;z-index:10;text-shadow:0 0 10px rgba(255,215,0,.3)
    }

    /* Pergunta fixa (overlay) */
    .question-overlay{
      position:absolute;bottom:20px;left:50%;transform:translateX(-50%);
      background:rgba(0,0,0,.8);border:1px solid rgba(255,215,0,.3);
      padding:10px 16px;border-radius:12px;font-size:13px;color:#fff;z-index:10;
      backdrop-filter:blur(5px);max-width:90%;text-align:center;
      animation:questionFloat 3s ease-in-out infinite
    }
    @keyframes questionFloat{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(-5px)}}

    /* Timer do vídeo */
    .video-timer{
      position:absolute;bottom:16px;right:16px;
      background:rgba(0,0,0,.8);padding:8px 12px;border-radius:8px;
      font-size:12px;font-family:monospace;backdrop-filter:blur(5px);
      border:1px solid rgba(255,255,255,.1)
    }

    /* Viewers */
    .viewer-count{
      position:absolute;top:70px;right:16px;
      background:rgba(0,0,0,.8);padding:8px 14px;border-radius:25px;
      display:flex;gap:8px;align-items:center;backdrop-filter:blur(5px);
      border:1px solid rgba(255,255,255,.1);animation:viewerPulse 4s infinite
    }
    @keyframes viewerPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.05)}}
    .viewer-eye{color:#ff4d4d;filter:drop-shadow(0 0 5px rgba(255,77,77,.5))}
    .viewer-number{font-weight:bold;color:#FFD700}

    /* Chat */
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

    /* Indicadores de atividade */
    .activity-indicators{
      display:flex;gap:20px;padding:16px;
      background:linear-gradient(135deg,#1a1a1a,#222);
      border-radius:12px;margin-top:20px;justify-content:center;
      border:1px solid rgba(255,255,255,.1);flex-wrap:wrap
    }
    .indicator{display:flex;align-items:center;gap:8px;font-size:14px;opacity:.9}
    .indicator-icon{
      width:12px;height:12px;background:#4CAF50;border-radius:50%;
      animation:pulse-dot 2s infinite;box-shadow:0 0 8px rgba(76,175,80,.5)
    }

    /* Pre-CTA */
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

    /* CTA */
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
    @keyframes shine{0%{left:-100%}100%{left:100%}}
    .cta-button:hover{
      transform:scale(1.05) translateY(-3px);
      box-shadow:0 20px 50px rgba(255,215,0,.6)
    }
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
    @keyframes fadeIn{from{opacity:0}to{opacity:1}}
    .spots-number{
      font-size:32px;font-weight:bold;color:#FFD700;
      text-shadow:0 0 20px rgba(255,215,0,.5);animation:numberPulse 2s infinite
    }
    @keyframes numberPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.1)}}
    .button-loading{display:none;margin-top:15px;font-size:14px;color:#999;animation:loadingPulse 1s infinite}
    .button-loading.active{display:block}
    @keyframes loadingPulse{0%,100%{opacity:.5}50%{opacity:1}}

    /* Countdown flutuante */
    .countdown-timer{
      position:fixed;bottom:20px;right:20px;
      background:linear-gradient(135deg,rgba(255,0,0,.95),rgba(255,51,51,.95));
      padding:12px 20px;border-radius:25px;font-weight:bold;z-index:1000;
      display:none;animation:slideInRight .5s ease-out;
      box-shadow:0 10px 30px rgba(255,0,0,.4);backdrop-filter:blur(10px);
      border:1px solid rgba(255,255,255,.2)
    }
    .countdown-timer.active{display:block}
    @keyframes slideInRight{from{transform:translateX(100%)}to{transform:translateX(0)}}

    /* Notificação popup */
    .notification-popup{
      position:fixed;bottom:20px;left:20px;
      background:linear-gradient(135deg,#1e3c72,#2a5298);
      padding:16px 24px;border-radius:12px;
      box-shadow:0 10px 30px rgba(0,0,0,.4);transform:translateX(-400px);
      z-index:999;transition:transform .5s ease;backdrop-filter:blur(10px);
      border:1px solid rgba(255,255,255,.1)
    }
    .notification-popup.active{animation:notificationSlide 10s infinite}
    @keyframes notificationSlide{15%,85%{transform:translateX(0)}0%,100%{transform:translateX(-400px)}}

    /* Ticker de compras rodando */
    .ticker{
      position:fixed;left:0;right:0;bottom:0;
      background:linear-gradient(90deg,#0f0f0f,#1a1a1a);
      border-top:1px solid rgba(255,215,0,.3);padding:10px 0;z-index:1200;display:none;
      box-shadow:0 -5px 20px rgba(0,0,0,.3)
    }
    .ticker.active{display:block}
    .ticker-track{white-space:nowrap;overflow:hidden;position:relative}
    .ticker-content{
      display:inline-block;padding-left:100%;
      animation:tickerMove 30s linear infinite
    }
    @keyframes tickerMove{0%{transform:translateX(0)}100%{transform:translateX(-100%)}}
    .ticker-item{
      display:inline-block;margin-right:50px;color:#ddd;font-size:13px;
      background:rgba(255,255,255,.05);padding:5px 10px;border-radius:15px;
      border:1px solid rgba(255,255,255,.1)
    }
    .ticker-item strong{color:#9fe39f}

    /* Bônus surpresa (banner) */
    .bonus-banner{
      position:fixed;top:80px;left:50%;transform:translateX(-50%);
      background:linear-gradient(135deg,#1b2838,#243b55);
      border:1px solid #2b4a6a;color:#fff;padding:12px 20px;
      border-radius:15px;box-shadow:0 15px 35px rgba(0,0,0,.4);
      z-index:1100;display:none;backdrop-filter:blur(10px);
      animation:bonusBounce 2s infinite
    }
    .bonus-banner.active{display:block;animation:fadeIn .4s ease-out, bonusBounce 3s infinite 1s}
    @keyframes bonusBounce{0%,100%{transform:translateX(-50%) scale(1)}50%{transform:translateX(-50%) scale(1.02)}}

    /* Replay escassez (rodapé fixo acima do ticker) */
    .replay-strip{
      position:fixed;left:0;right:0;bottom:50px;
      background:linear-gradient(90deg,#161616,#1f1f1f);
      border-top:1px solid rgba(255,0,0,.3);color:#ddd;
      text-align:center;padding:10px;font-size:13px;display:none;z-index:1100;
      box-shadow:0 -3px 15px rgba(0,0,0,.3)
    }
    .replay-strip.active{display:block}

    /* RESPONSIVO MELHORADO */
    @media (max-width: 1200px){
      .main-container{max-width:100%;padding:15px}
    }

    @media (max-width: 900px){
      .main-container{grid-template-columns:1fr;gap:15px}
      .chat-section{height:450px;margin-top:10px}
      .video-placeholder > div{font-size:48px}
      .activity-indicators{gap:15px;padding:12px}
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
      .question-overlay{bottom:12px;padding:8px 12px;font-size:12px;max-width:95%}
      .video-timer{bottom:12px;right:12px;padding:6px 8px;font-size:11px}
      
      .chat-section{height:400px;border-radius:12px}
      .chat-header{padding:12px}
      .chat-messages{padding:12px}
      .chat-input-container{padding:12px}
      .chat-input{padding:10px 14px;font-size:13px}
      
      .activity-indicators{
        flex-direction:column;gap:8px;padding:12px;text-align:center
      }
      .indicator{justify-content:center;font-size:13px}
      
      .pre-cta-message{padding:16px;margin-top:15px}
      .pre-cta-message h3{font-size:18px}
      
      .cta-button{
        padding:16px 32px;font-size:16px;border-radius:30px;
        width:100%;max-width:350px
      }
      .limited-spots{padding:16px;margin-top:15px}
      .spots-number{font-size:28px}
      
      .countdown-timer{
        bottom:15px;right:15px;padding:8px 15px;font-size:13px;
        border-radius:20px
      }
      .notification-popup{
        bottom:15px;left:15px;padding:12px 16px;font-size:13px;
        max-width:calc(100vw - 30px)
      }
      .bonus-banner{
        top:60px;padding:10px 15px;font-size:13px;
        max-width:calc(100vw - 30px)
      }
      .replay-strip{bottom:45px;padding:8px;font-size:12px}
      .ticker{padding:8px 0}
      .ticker-item{margin-right:30px;font-size:12px;padding:4px 8px}
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
      .notification-popup{font-size:12px}
      .bonus-banner{font-size:12px;top:55px}
    }

    /* Melhorias extras para UX */
    .pulse-effect{
      animation:ctaPulse 2s infinite;
    }
    @keyframes ctaPulse{
      0%{box-shadow:0 15px 40px rgba(255,215,0,.4)}
      50%{box-shadow:0 20px 50px rgba(255,215,0,.7)}
      100%{box-shadow:0 15px 40px rgba(255,215,0,.4)}
    }

    .urgency-shake{
      animation:urgencyShake .5s ease-in-out;
    }
    @keyframes urgencyShake{
      0%,100%{transform:translateX(0)}
      25%{transform:translateX(-5px)}
      75%{transform:translateX(5px)}
    }

    /* Loading state melhorado */
    .loading-dots::after{
      content:'...';
      animation:loadingDots 1.5s infinite;
    }
    @keyframes loadingDots{
      0%{content:'...'}
      33%{content:'.'}
      66%{content:'..'}
      100%{content:'...'}
    }

    /* Scroll suave */
    html{scroll-behavior:smooth}
  </style>
</head>
<body>
  <!-- Barra Superior -->
  <div class="top-bar" id="topBar">📚 Aula Exclusiva ao Vivo - Preste atenção nas dicas!</div>

  <!-- Prova social de inscritos -->
  <div class="social-proof-strip">
    <span><strong>+3.250</strong> pessoas já assistiram esta aula exclusiva nas últimas semanas</span>
  </div>

  <!-- Container -->
  <div class="main-container">
    <!-- Seção do Vídeo -->
    <div class="video-section">
      <!-- Badge AO VIVO -->
      <div class="live-badge">
        <div class="live-dot"></div><span>AO VIVO</span>
      </div>

      <!-- Badge Exclusividade -->
      <div class="exclusive-badge">🔒 Conteúdo restrito — não listado no YouTube</div>

      <!-- Contador de Viewers -->
      <div class="viewer-count">
        <span class="viewer-eye">👁</span>
        <span class="viewer-number" id="viewerCount">847</span>
        <span>assistindo</span>
      </div>

      <!-- Vídeo -->
      <div class="video-placeholder" onclick="playVideo()">
        <div>▶️</div>
        <!-- Pergunta fixa -->
        <div class="question-overlay" id="questionOverlay">
          💬 Responda no chat: Qual sua maior dificuldade com <strong>o tema da aula</strong>?
        </div>
        <!-- Timer -->
        <div class="video-timer" id="videoTimer">00:00 / 15:00</div>
      </div>
    </div>

    <!-- Chat Lateral -->
    <div class="chat-section">
      <div class="chat-header">
        <div>
          <h3>Chat ao Vivo</h3>
          <div class="pin-message">📌 No final: presente especial + condição exclusiva</div>
          <div class="poll-badge" id="pollBadge" style="display:none;">
            🗳️ Enquete: <strong>70%</strong> disseram que já tentaram antes e não conseguiram sozinho.
          </div>
        </div>
        <div class="online-indicator">
          <div class="online-dot"></div>
          <span id="onlineCount">187</span> online
        </div>
      </div>

      <div class="chat-messages" id="chatMessages"></div>

      <div class="chat-input-container">
        <input type="text" class="chat-input" placeholder="Digite sua pergunta..." maxlength="200" />
      </div>
    </div>

    <!-- Indicadores de atividade -->
    <div class="activity-indicators">
      <div class="indicator"><div class="indicator-icon"></div><span id="city1">São Paulo, SP está assistindo</span></div>
      <div class="indicator"><div class="indicator-icon"></div><span id="city2">Rio de Janeiro, RJ entrou agora</span></div>
      <div class="indicator"><div class="indicator-icon"></div><span id="city3">Fortaleza, CE está online</span></div>
    </div>

    <!-- Pre-CTA -->
    <div class="pre-cta-message" id="preCta">
      <h3>🎯 Prepare-se!</h3>
      <p>Nos próximos minutos vou revelar como aplicar tudo isso de forma completa…</p>
    </div>

    <!-- CTA -->
    <div class="cta-section" id="ctaSection">
      <h2 style="margin-bottom:15px;color:#FFD700;font-size:24px;">🎁 CHEGOU O MOMENTO!</h2>
      <p style="margin-bottom:20px;font-size:18px;">Acesso liberado APENAS para quem está assistindo ao vivo agora</p>
      <a href="#" class="cta-button" id="mainCta">QUERO ACESSO COMPLETO AO MÉTODO</a>
      <div class="button-loading loading-dots" id="buttonLoading">⏳ Processando</div>
      <div class="limited-spots">
        <p style="margin-bottom:15px;font-size:16px;">⚠️ ATENÇÃO: Por questões de suporte, estamos limitando as vagas</p>
        <p>Restam apenas <span class="spots-number" id="spotsNumber">47</span> vagas com 40% de desconto</p>
        <p style="font-size:14px;margin-top:15px;color:#ccc;">
          Preço normal: <s>R$ 497</s> | Hoje apenas: <strong style="color:#FFD700;">R$ 297</strong>
        </p>
      </div>
    </div>
  </div>

  <!-- Countdown -->
  <div class="countdown-timer" id="countdownTimer">⏰ Desconto expira em: <span id="countdown">14:59</span></div>

  <!-- Replay escassez -->
  <div class="replay-strip" id="replayStrip">📺 Replay disponível até <strong id="replayDate">amanhã 23:59</strong>. Depois, sai do ar.</div>

  <!-- Notificação popup -->
  <div class="notification-popup" id="notificationPopup">
    <div class="notification-content">
      <span style="font-size:20px;">🎉</span>
      <span><strong id="buyerName">Maria Silva</strong> acabou de garantir sua vaga!</span>
    </div>
  </div>

  <!-- Ticker de compras -->
  <div class="ticker" id="ticker">
    <div class="ticker-track">
      <div class="ticker-content" id="tickerContent">
        <!-- Inserido via JS -->
      </div>
    </div>
  </div>

  <div class="bonus-banner" id="bonusBanner">🎁 Além disso, quem garantir hoje leva <strong>bônus exclusivo</strong>!</div>

  <script>
    // ====== CONFIG TEMPOS (ms) ======
    const TIMING = {
      preCta: 600000,   // 10:00
      showCta: 780000,  // 13:00
      urgentMode: 780000
    };
    // Para testes rápidos (descomente a linha abaixo):
    // const TIMING = { preCta: 10000, showCta: 20000, urgentMode: 20000 };

    // ====== MELHORIAS DE UX ======
    let userInteracted = false;
    let ctaActivated = false;
    let urgencyLevel = 0;

    // Detectar interação do usuário para melhorar engajamento
    function trackUserInteraction() {
      if (!userInteracted) {
        userInteracted = true;
        console.log('👤 Usuário está engajado');
        // Aumentar frequência de updates quando usuário está ativo
        increaseActivityFrequency();
      }
    }

    // Event listeners para detectar engajamento
    document.addEventListener('click', trackUserInteraction);
    document.addEventListener('scroll', trackUserInteraction);
    document.addEventListener('keydown', trackUserInteraction);

    // ====== ARRAYS DE MENSAGENS MELHORADOS ======
    const chatMessagesPhase1 = [
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
      { delay: 580000, author: "Daniela Rocha", text: "Ansiosa pelo que vem a seguir! 🤩", admin: false }
    ];

    const chatMessagesPhase2 = [
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
      { delay: 300000, author: "Juliana Martins", text: "Só 12 vagas restantes! Corram! 🏃‍♀️💨", admin: false }
    ];

    const cities = [
      "Belo Horizonte, MG","Porto Alegre, RS","Recife, PE","Salvador, BA",
      "Curitiba, PR","Brasília, DF","Manaus, AM","Goiânia, GO",
      "Campinas, SP","Natal, RN","João Pessoa, PB","Maceió, AL",
      "Vitória, ES","Campo Grande, MS","Cuiabá, MT","Florianópolis, SC"
    ];

    const buyerNames = [
      "José Santos","Paula Oliveira","Marcos Silva","Juliana Costa",
      "Roberto Lima","Fernanda Souza","André Pereira","Carla Mendes",
      "Lucas Ferreira","Beatriz Alves","Thiago Reis","Marina Gomes",
      "Alberto Rocha","Priscila Dias","Fábio Castro","Rafaela Nunes",
      "Eduardo Barbosa","Camila Torres","Diego Morais","Letícia Campos"
    ];

    let buyerIndex = 0;

    // ====== FUNÇÕES DE CHAT MELHORADAS ======
    function addChatMessage(author, text, isAdmin = false) {
      const chatContainer = document.getElementById('chatMessages');
      const div = document.createElement('div');
      div.className = `chat-message ${isAdmin ? 'message-admin' : ''}`;
      div.innerHTML = `
        <div class="message-author">${author}</div>
        <div class="message-text">${text}</div>
      `;
      chatContainer.appendChild(div);
      chatContainer.scrollTop = chatContainer.scrollHeight;

      // Remover mensagens antigas para performance (máximo 50 mensagens)
      const messages = chatContainer.querySelectorAll('.chat-message');
      if (messages.length > 50) {
        messages[0].remove();
      }
    }

    // Iniciar mensagens da fase 1
    chatMessagesPhase1.forEach(message => 
      setTimeout(() => addChatMessage(message.author, message.text, message.admin), message.delay)
    );

    // Mostrar poll após 6 minutos
    setTimeout(() => {
      document.getElementById('pollBadge').style.display = 'block';
    }, 360000);

    // ====== INTERAÇÃO DO USUÁRIO NO CHAT ======
    const chatInput = document.querySelector('.chat-input');
    let lastMessageTime = 0;

    chatInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter' && this.value.trim()) {
        const now = Date.now();
        if (now - lastMessageTime < 3000) return; // Evitar spam
        lastMessageTime = now;

        const userMessage = this.value.trim();
        addChatMessage('Você', userMessage, false);
        this.value = '';

        // Resposta automática mais inteligente
        setTimeout(() => {
          if (!ctaActivated) {
            respondToUserMessage(userMessage, false);
          } else {
            respondToUserMessage(userMessage, true);
          }
        }, 1500 + Math.random() * 1000);
      }
    });

    function respondToUserMessage(message, isCtaActive) {
      const lowerMsg = message.toLowerCase();
      
      if (!isCtaActive) {
        // Antes do CTA - foco em engajamento
        if (lowerMsg.includes('iniciante') || lowerMsg.includes('começar')) {
          addChatMessage('Moderador', 'Perfeito para iniciantes! Mostramos tudo do zero, sem complicação 🚀', true);
        } else if (lowerMsg.includes('tempo') || lowerMsg.includes('rápido')) {
          addChatMessage('Moderador', 'Método pensado para quem tem pouco tempo: 10-15 min/dia ⏰', true);
        } else if (lowerMsg.includes('funciona') || lowerMsg.includes('resultado')) {
          addChatMessage('Moderador', 'Funciona sim! Vou mostrar casos práticos ainda nesta aula 📊', true);
        } else if (lowerMsg.includes('quanto') || lowerMsg.includes('preço')) {
          addChatMessage('Moderador', 'Calma! Vou falar sobre investimento daqui a pouco 😉', true);
        } else {
          const responses = [
            'Ótima pergunta! Continue assistindo que a resposta vem 👀',
            'Interessante! Vou abordar isso ainda na aula 🎯',
            'Boa observação! Fique ligado que vou explicar 📚',
            'Excelente ponto! A resposta prática vem a seguir ⚡'
          ];
          addChatMessage('Moderador', responses[Math.floor(Math.random() * responses.length)], true);
        }
      } else {
        // Depois do CTA - foco em conversão
        if (lowerMsg.includes('preço') || lowerMsg.includes('valor') || lowerMsg.includes('quanto')) {
          addChatMessage('Moderador', 'Hoje com 40% OFF: de R$ 497 por apenas R$ 297 (12x sem juros) 💰', true);
        } else if (lowerMsg.includes('garantia') || lowerMsg.includes('risco')) {
          addChatMessage('Moderador', '7 dias de garantia incondicional. Risco zero! 🛡️', true);
        } else if (lowerMsg.includes('funciona') || lowerMsg.includes('resultado')) {
          addChatMessage('Moderador', 'Método testado e aprovado! Com garantia total 🏆', true);
        } else if (lowerMsg.includes('vaga') || lowerMsg.includes('lugar')) {
          addChatMessage('Moderador', 'Vagas limitadas! Garante a sua no botão dourado ⬆️', true);
        } else {
          const ctaResponses = [
            'Aproveita o botão dourado enquanto o desconto está liberado! ⬆️',
            'Última chance com este valor! Não perca 🔥',
            'Garante sua vaga agora - vagas limitadas! ⚡',
            'Desconto exclusivo para quem está ao vivo! 🎯'
          ];
          addChatMessage('Moderador', ctaResponses[Math.floor(Math.random() * ctaResponses.length)], true);
        }
      }
    }

    // ====== TIMER DE VÍDEO ======
    let videoSeconds = 0;
    const videoTimerInterval = setInterval(() => {
      const minutes = Math.floor(videoSeconds / 60);
      const seconds = videoSeconds % 60;
      document.getElementById('videoTimer').textContent = 
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} / 15:00`;
      videoSeconds++;
      if (videoSeconds >= 900) clearInterval(videoTimerInterval);
    }, 1000);

    // ====== CONTADORES DINÂMICOS ======
    let currentViewers = 847;
    let onlineCount = 187;

    function updateViewers() {
      const viewerEl = document.getElementById('viewerCount');
      if (!ctaActivated && currentViewers < 1450) {
        currentViewers += Math.floor(Math.random() * 15) + 5;
      } else if (ctaActivated) {
        // Durante CTA, simular flutuação mais realista
        const change = Math.floor(Math.random() * 20) - 10;
        currentViewers = Math.max(1200, Math.min(1450, currentViewers + change));
      }
      viewerEl.textContent = currentViewers.toLocaleString('pt-BR');
      
      // Adicionar classe de pulso quando viewer aumenta significativamente
      if (Math.random() > 0.8) {
        viewerEl.parentElement.classList.add('urgency-shake');
        setTimeout(() => viewerEl.parentElement.classList.remove('urgency-shake'), 500);
      }
    }

    function updateOnlineCount() {
      const onlineEl = document.getElementById('onlineCount');
      if (!ctaActivated && onlineCount < 320) {
        onlineCount += Math.floor(Math.random() * 5) + 1;
      } else if (ctaActivated) {
        onlineCount += Math.floor(Math.random() * 8) - 3;
        onlineCount = Math.max(280, Math.min(350, onlineCount));
      }
      onlineEl.textContent = onlineCount;
    }

    // Aumentar frequência quando usuário está ativo
    function increaseActivityFrequency() {
      setInterval(updateViewers, 2000); // Mais frequente
      setInterval(updateOnlineCount, 3000);
    }

    // Frequência normal
    setInterval(updateViewers, 4000);
    setInterval(updateOnlineCount, 6000);

    // ====== ROTAÇÃO DE CIDADES ======
    function rotateCities() {
      const selectedCities = [...cities].sort(() => 0.5 - Math.random()).slice(0, 3);
      const actions = ['está assistindo', 'entrou agora', 'está online', 'está curtindo', 'voltou agora'];
      
      document.getElementById('city1').textContent = `${selectedCities[0]} ${actions[Math.floor(Math.random() * actions.length)]}`;
      document.getElementById('city2').textContent = `${selectedCities[1]} ${actions[Math.floor(Math.random() * actions.length)]}`;
      document.getElementById('city3').textContent = `${selectedCities[2]} ${actions[Math.floor(Math.random() * actions.length)]}`;
    }

    setInterval(rotateCities, 8000);

    // ====== INDICADOR DE DIGITAÇÃO ======
    function showTypingIndicator() {
      if (Math.random() > 0.6) { // 40% de chance
        const typing = document.createElement('div');
        typing.className = 'chat-message';
        typing.style.fontStyle = 'italic';
        typing.style.opacity = '0.7';
        typing.innerHTML = '<span style="color:#666;">💭 Alguém está digitando...</span>';
        document.getElementById('chatMessages').appendChild(typing);
        setTimeout(() => typing.remove(), 2500);
      }
    }

    setInterval(showTypingIndicator, 20000);

    // ====== PRE-CTA ======
    setTimeout(() => {
      document.getElementById('preCta').classList.add('active');
      // Aumentar urgência gradualmente
      urgencyLevel = 1;
    }, TIMING.preCta);

    // ====== ATIVAÇÃO DO CTA ======
    function activateCTA() {
      if (ctaActivated) return;
      ctaActivated = true;
      urgencyLevel = 2;

      // Ativar seção CTA
      document.getElementById('ctaSection').classList.add('active');

      // Mudar barra superior para urgente
      const topBar = document.getElementById('topBar');
      topBar.classList.add('urgent');
      topBar.innerHTML = '⚠️ OFERTA LIBERADA! Vagas limitadas - Desconto exclusivo AO VIVO!';

      // Ativar elementos de urgência
      document.getElementById('countdownTimer').classList.add('active');
      document.getElementById('notificationPopup').classList.add('active');
      document.getElementById('ticker').classList.add('active');
      document.getElementById('replayStrip').classList.add('active');

      // Bônus banner com delay
      setTimeout(() => {
        document.getElementById('bonusBanner').classList.add('active');
      }, 3000);

      // Esconder pergunta fixa
      const questionOverlay = document.getElementById('questionOverlay');
      if (questionOverlay) questionOverlay.style.display = 'none';

      // Iniciar mensagens da fase 2
      chatMessagesPhase2.forEach(message => 
        setTimeout(() => addChatMessage(message.author, message.text, message.admin), message.delay)
      );

      // Iniciar sistemas de urgência
      startCountdown();
      startSpotsCountdown();
      startPurchaseNotifications();
      startTicker();
      startUrgencyEffects();
    }

    setTimeout(activateCTA, TIMING.showCta);

    // ====== COUNTDOWN REGRESSIVO ======
    let countdownMinutes = 14;
    let countdownSeconds = 59;

    function startCountdown() {
      setInterval(() => {
        countdownSeconds--;
        if (countdownSeconds < 0) {
          countdownSeconds = 59;
          countdownMinutes--;
        }
        if (countdownMinutes < 0) {
          countdownMinutes = 14;
          countdownSeconds = 59;
        }

        const countdownEl = document.getElementById('countdown');
        if (countdownEl) {
          countdownEl.textContent = `${String(countdownMinutes).padStart(2, '0')}:${String(countdownSeconds).padStart(2, '0')}`;
          
          // Adicionar urgência quando tempo está acabando
          if (countdownMinutes < 5) {
            countdownEl.style.color = '#ff4d4d';
            countdownEl.style.fontWeight = 'bold';
          }
        }
      }, 1000);
    }

    // ====== CONTADOR DE VAGAS ======
    function startSpotsCountdown() {
      let spots = 47;
      const spotsEl = document.getElementById('spotsNumber');

      const decreaseSpots = () => {
        if (spots > 5) {
          spots -= Math.floor(Math.random() * 3) + 1;
          if (spots < 5) spots = 5;
          spotsEl.textContent = spots;

          if (spots <= 15) {
            spotsEl.style.color = '#ff4d4d';
            spotsEl.classList.add('urgency-shake');
            setTimeout(() => spotsEl.classList.remove('urgency-shake'), 500);
          }
          if (spots <= 8) {
            spotsEl.style.animation = 'numberPulse 1s infinite';
          }
        }
      };

      // Cronograma de redução de vagas
      setTimeout(decreaseSpots, 8000);
      setTimeout(decreaseSpots, 20000);
      setTimeout(decreaseSpots, 40000);
      setTimeout(decreaseSpots, 70000);
      setTimeout(decreaseSpots, 120000);
      
      // Redução contínua após 2 minutos
      setTimeout(() => {
        setInterval(decreaseSpots, 45000 + Math.random() * 30000);
      }, 120000);
    }

    // ====== NOTIFICAÇÕES DE COMPRA ======
    function startPurchaseNotifications() {
      const showNotification = () => {
        const buyerNameEl = document.getElementById('buyerName');
        const randomName = buyerNames[buyerIndex % buyerNames.length];
        buyerNameEl.textContent = randomName;
        buyerIndex++;

        // Vibrar botão CTA quando alguém compra
        const ctaButton = document.getElementById('mainCta');
        if (ctaButton) {
          ctaButton.classList.add('pulse-effect');
          setTimeout(() => ctaButton.classList.remove('pulse-effect'), 3000);
        }
      };

      // Primeira notificação rápida
      setTimeout(showNotification, 4000);
      
      // Notificações regulares
      setInterval(showNotification, 15000 + Math.random() * 10000);
    }

    // ====== TICKER DE COMPRAS ======
    function startTicker() {
      const tickerContent = document.getElementById('tickerContent');
      const allNames = [...buyerNames, "Thiago A.", "Marina G.", "Alberto R.", "Priscila D.", "Fábio C.", "Rafaela N.", "Eduardo B."];
      const states = ["SP", "RJ", "MG", "PR", "SC", "RS", "ES", "BA", "CE", "DF", "GO", "PE", "AM"];
      
      const items = [];
      for (let i = 0; i < 25; i++) {
        const name = allNames[Math.floor(Math.random() * allNames.length)];
        const state = states[Math.floor(Math.random() * states.length)];
        const time = Math.floor(Math.random() * 30) + 1;
        items.push(`<span class="ticker-item">✅ <strong>${name}</strong> (${state}) garantiu há ${time}min</span>`);
      }
      tickerContent.innerHTML = items.join('');
    }

    // ====== EFEITOS DE URGÊNCIA ======
    function startUrgencyEffects() {
      // Shake periódico no CTA
      setInterval(() => {
        const ctaButton = document.getElementById('mainCta');
        if (ctaButton && Math.random() > 0.7) {
          ctaButton.classList.add('urgency-shake');
          setTimeout(() => ctaButton.classList.remove('urgency-shake'), 600);
        }
      }, 30000);

      // Pulso no countdown quando crítico
      setInterval(() => {
        const countdown = document.getElementById('countdownTimer');
        if (countdown && countdownMinutes < 10) {
          countdown.classList.add('urgency-shake');
          setTimeout(() => countdown.classList.remove('urgency-shake'), 400);
        }
      }, 20000);
    }

    // ====== DATA DO REPLAY ======
    (function setReplayDate() {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const day = String(tomorrow.getDate()).padStart(2, '0');
      const month = String(tomorrow.getMonth() + 1).padStart(2, '0');
      const year = tomorrow.getFullYear();
      document.getElementById('replayDate').textContent = `${day}/${month}/${year} 23:59`;
    })();

    // ====== BOTÃO CTA COM LOADING ======
    document.getElementById('mainCta')?.addEventListener('click', function(e) {
      e.preventDefault();
      
      const button = this;
      const loading = document.getElementById('buttonLoading');
      
      // Mostrar loading
      loading.classList.add('active');
      button.style.opacity = '0.7';
      button.style.pointerEvents = 'none';

      // Simular processamento
      setTimeout(() => {
        // Aqui você colocaria o link real da sua página de checkout
        window.open('https://seudominio.com/checkout', '_blank');
        
        // Restaurar botão
        setTimeout(() => {
          loading.classList.remove('active');
          button.style.opacity = '1';
          button.style.pointerEvents = 'auto';
        }, 2000);
      }, 2500);
    });

    // ====== FUNÇÃO PLAY VÍDEO ======
    function playVideo() {
      // Aqui você pode integrar com YouTube, Vimeo ou player personalizado
      alert('🎬 Aqui você integraria com seu player de vídeo real!');
    }

    // ====== MODO TESTE RÁPIDO ======
    let testMode = false;
    chatInput.addEventListener('input', function(e) {
      if (e.target.value === 'acelerar' && !testMode) {
        testMode = true;
        addChatMessage('Sistema', '🚀 Modo teste ativado! Acelerando timeline...', true);
        e.target.value = '';
        
        setTimeout(() => document.getElementById('preCta').classList.add('active'), 2000);
        setTimeout(() => activateCTA(), 5000);
      }
    });

    // ====== PERFORMANCE E SEO ======
    // Lazy loading para elementos não críticos
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    });

    // Observar elementos para animação
    document.querySelectorAll('.activity-indicators, .pre-cta-message').forEach(el => {
      observer.observe(el);
    });

    // Preload de recursos críticos
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap';
    preloadLink.as = 'style';
    document.head.appendChild(preloadLink);

    console.log('🚀 Landing page carregada com sucesso!');
  </script>
</body>
</html>
