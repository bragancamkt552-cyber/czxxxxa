import React, { useEffect, useMemo, useRef, useState } from "react";

const LiveClass: React.FC = () => {
  // ====== STATES ======
  const [userInteracted, setUserInteracted] = useState(false);
  const [ctaActivated, setCtaActivated] = useState(false);
  const [viewerCount, setViewerCount] = useState(847);
  const [onlineCount, setOnlineCount] = useState(187);
  const [preCtaActive, setPreCtaActive] = useState(false);
  const [spots, setSpots] = useState(20);
  // Poll
  const pollBase = useMemo(
    () => ({
      question: "What's the biggest challenge for your senior pet?",
      options: [
        "Managing arthritis pain",
        "Finding safe food",
        "Maintaining energy levels",
        "Affording vet care"
      ],
      baseVotes: [142, 238, 187, 93]
    }),
    []
  );
  const [pollVisible, setPollVisible] = useState(false);
  const [userVoted, setUserVoted] = useState(false);
  const [tallies, setTallies] = useState<number[]>(pollBase.baseVotes);
  // Refs
  const chatContainerRef = useRef<HTMLDivElement | null>(null);
  const timersRef = useRef<number[]>([]);
  const intervalsRef = useRef<number[]>([]);
  // Timing
  const TIMING = useMemo(
    () => ({
      preCta: 300000, // 5 min
      showCta: 600000, // 10 min
      pollAtMs: 360000 // 6 min
    }),
    []
  );
  // Realistic chat messages about senior pet health
  const chatMessagesPhase1 = useMemo(
    () => [
      { delay: 2000, author: "Sarah", text: "Hey everyone, first time here! 🐾", admin: false },
      { delay: 4500, author: "Mike", text: "My old lab has arthritis, hoping to learn more!", admin: false },
      { delay: 7000, author: "🌟 Moderator", text: "Welcome all! The class on senior pet health is about to start!", admin: true },
      { delay: 15000, author: "Emma", text: "This is so helpful already!", admin: false },
      { delay: 28000, author: "Tom", text: "Wow, I never knew pet food could be so harmful!", admin: false },
      { delay: 42000, author: "Lisa", text: "Taking notes for my 12yo cat 😺", admin: false },
      { delay: 58000, author: "Jake", text: "Does this really help with joint pain?", admin: false },
      { delay: 61000, author: "🌟 Moderator", text: "Absolutely, Jake! We'll share real success stories soon!", admin: true },
      { delay: 90000, author: "Rachel", text: "Can busy pet owners do this?", admin: false },
      { delay: 93000, author: "🌟 Moderator", text: "Yes! Just 10-15 min a day can make a difference!", admin: true },
      { delay: 120000, author: "Chris", text: "Starting to get it now!", admin: false },
      { delay: 180000, author: "Kelly", text: "Can we start this today for our dog?", admin: false },
      { delay: 183000, author: "🌟 Moderator", text: "Yes, Kelly! We'll show you the steps soon!", admin: true },
      { delay: 240000, author: "Brian", text: "This is a game-changer for my old pup!", admin: false },
      { delay: 300000, author: "Laura", text: "I need to know more about safe diets!", admin: false },
      { delay: 360000, author: "Megan", text: "This is mind-blowing!", admin: false },
      { delay: 420000, author: "Steve", text: "My wife needs to see this for our cat!", admin: false },
      { delay: 480000, author: "Sophie", text: "Loving this so much!", admin: false },
      { delay: 540000, author: "Dan", text: "When do we get full access?", admin: false },
      { delay: 543000, author: "🌟 Moderator", text: "Hold tight, Dan! We'll open access soon!", admin: true },
      { delay: 590000, author: "Tina", text: "So excited!!", admin: false }
    ],
    []
  );
  const chatMessagesPhase2 = useMemo(
    () => [
      { delay: 1000, author: "Mark", text: "IT’S HERE!! 🐶", admin: false },
      { delay: 3000, author: "🌟 Moderator", text: "Limited spots, folks! Grab yours now!", admin: true },
      { delay: 6000, author: "Jessica", text: "How much is it?", admin: false },
      { delay: 8000, author: "Claire", text: "Wow, that’s super affordable!", admin: false },
      { delay: 11000, author: "Brian", text: "Cheaper than a vet visit lol!", admin: false },
      { delay: 14000, author: "Tom", text: "Just signed up!! Worth it!", admin: false },
      { delay: 18000, author: "🌟 Moderator", text: "7-day money-back guarantee, everyone!", admin: true },
      { delay: 25000, author: "Emily", text: "Got my spot! 🎉", admin: false },
      { delay: 32000, author: "Robert", text: "Spots are going fast!", admin: false },
      { delay: 40000, author: "Anna", text: "Payment went through instantly!", admin: false },
      { delay: 48000, author: "Lucas", text: "Is this price only for today?", admin: false },
      { delay: 51000, author: "🌟 Moderator", text: "Only for live viewers, Lucas!", admin: true },
      { delay: 65000, author: "Tyler", text: "Processing my payment...", admin: false },
      { delay: 80000, author: "Priya", text: "This is exactly what my cat needed!", admin: false },
      { delay: 95000, author: "Ed", text: "Not missing this!", admin: false }
    ],
    []
  );
  // Function to append chat messages
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
    // Limit messages to 50
    const msgs = container.querySelectorAll(".chat-message");
    if (msgs.length > 50) msgs[0].remove();
  };
  // Insert poll into chat
  const insertPollIntoChat = () => {
    if (!chatContainerRef.current) return;
    const container = chatContainerRef.current;

    const pollWrap = document.createElement("div");
    pollWrap.className = "poll-container";
    const total = tallies.reduce((a, b) => a + b, 0);

    pollWrap.innerHTML = `
      <div class="poll-header">📊 QUICK POLL</div>
      <div class="poll-question">${pollBase.question}</div>
      <div class="poll-options">
        ${pollBase.options.map((opt, idx) => {
          const pct = userVoted ? Math.round((tallies[idx] / total) * 100) : 0;
          return `
            <button class="poll-option" data-idx="${idx}">
              <span class="poll-text">${opt}</span>
              ${userVoted ? `
                <div class="poll-result">
                  <div class="poll-bar">
                    <div class="poll-fill" style="width: ${pct}%"></div>
                  </div>
                  <span class="poll-pct">${pct}%</span>
                </div>
              ` : ''}
            </button>
          `;
        }).join('')}
      </div>
      ${!userVoted ? '<div class="poll-hint">👆 Click to vote</div>' : '<div class="poll-hint">✅ Thanks for voting!</div>'}
    `;
    container.appendChild(pollWrap);
    container.scrollTop = container.scrollHeight;
    if (!userVoted) {
      pollWrap.querySelectorAll<HTMLButtonElement>(".poll-option").forEach((btn) => {
        btn.addEventListener("click", () => {
          const idx = Number(btn.dataset.idx);
          setUserVoted(true);

          setTallies((prev) => {
            const next = [...prev];
            next[idx] += 1;
            return next;
          });
          // Recreate poll with results
          pollWrap.remove();
          insertPollIntoChat();
        });
      });
    }
  };
  // Initialize chat
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
  }, [chatMessagesPhase1, TIMING.pollAtMs]);
  useEffect(() => {
    if (pollVisible) insertPollIntoChat();
  }, [pollVisible]);
  // User interaction
  useEffect(() => {
    const handler = () => !userInteracted && setUserInteracted(true);
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [userInteracted]);
  // Viewers and online counts
  useEffect(() => {
    const viewerInterval = window.setInterval(() => {
      setViewerCount((v) => {
        if (!ctaActivated && v < 1450) return v + Math.floor(Math.random() * 15) + 5;
        const change = Math.floor(Math.random() * 20) - 10;
        return Math.max(1200, Math.min(1450, v + change));
      });
    }, 3000);
    const onlineInterval = window.setInterval(() => {
      setOnlineCount((o) => {
        if (!ctaActivated && o < 320) return o + Math.floor(Math.random() * 5) + 1;
        return Math.max(280, Math.min(350, o + (Math.floor(Math.random() * 8) - 3)));
      });
    }, 4000);
    intervalsRef.current.push(viewerInterval, onlineInterval);
    return () => {
      window.clearInterval(viewerInterval);
      window.clearInterval(onlineInterval);
    };
  }, [ctaActivated]);
  // Pre-CTA
  useEffect(() => {
    const t = window.setTimeout(() => setPreCtaActive(true), TIMING.preCta);
    timersRef.current.push(t);
    return () => window.clearTimeout(t);
  }, [TIMING.preCta]);
  // Activate CTA
  const activateCTA = () => {
    if (ctaActivated) return;
    setCtaActivated(true);
    chatMessagesPhase2.forEach((m) => {
      const t = window.setTimeout(() => appendChat(m.author, m.text, m.admin), m.delay);
      timersRef.current.push(t);
    });
    // Reduce spots faster initially
    const reduceSpots = () => {
      setSpots((s) => {
        if (s <= 2) return s;
        const reduction = s > 10 ? Math.floor(Math.random() * 3) + 2 : 1;
        return Math.max(2, s - reduction);
      });
    };
    // Initial accelerated reduction
    [3000, 8000, 15000, 25000, 40000, 60000].forEach((ms) => {
      const t = window.setTimeout(reduceSpots, ms);
      timersRef.current.push(t);
    });
    // Slower reduction later
    const slowReduction = window.setInterval(reduceSpots, 45000);
    intervalsRef.current.push(slowReduction);
  };
  useEffect(() => {
    const t = window.setTimeout(activateCTA, TIMING.showCta);
    timersRef.current.push(t);
    return () => window.clearTimeout(t);
  }, [TIMING.showCta]);
  // Cleanup
  useEffect(() => {
    return () => {
      timersRef.current.forEach((t) => window.clearTimeout(t));
      intervalsRef.current.forEach((i) => window.clearInterval(i));
    };
  }, []);
  const handleCtaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open("https://pay.hotmart.com/your-link", "_blank");
  };
  return (
    <>
      <div className={`top-bar ${ctaActivated ? 'urgent' : ''}`}>
        {ctaActivated
          ? "🔥 OFFER LIVE! Last spots at a discount"
          : "📚 Exclusive Class - Pay attention to the tips"}
      </div>
      <div className="container">
        <div className="video-column">
          <h1 className="video-headline">Discover How to Support Your Pet’s Health and Happiness at Any Age</h1>
          {/* Video */}
          <div className="video-wrapper">
            <div className="live-indicator" aria-live="polite">
              <span className="live-dot" aria-hidden />
              LIVE
            </div>
            <div className="viewer-counter" aria-live="polite">
              <span role="img" aria-label="views">👁</span>
              {viewerCount.toLocaleString('en-US')}
            </div>
            <div className="video-player">
              <smart-player
                video-id="68b1fa656fe4730e992a26b4"
                account-id="ec09afc3-b6c2-4de5-b556-85edb9ced296"
                player-version="v4"
                autoplay
              ></smart-player>
            </div>
            <div className="exclusive-tag">
              🔒 Exclusive Content - Unlisted
            </div>
          </div>
          {/* Pre-CTA */}
          {preCtaActive && !ctaActivated && (
            <div className="pre-cta">
              <h3>🎯 Attention!</h3>
              <p>In the next few minutes, we’ll reveal something special...</p>
            </div>
          )}
          {/* Main CTA */}
          {ctaActivated && (
            <div className="cta-box" role="region" aria-label="Offer">
              <h2>🎁 OFFER LIVE!</h2>
              <p className="cta-subtitle">Exclusive for live viewers</p>
              <div className="price-box" aria-live="polite">
                <span className="old-price">Was $197</span>
                <span className="new-price">$47</span>
                <span className="installments">or 12x $4.70</span>
              </div>
              <button className="cta-button" onClick={handleCtaClick} aria-label="Secure my spot now">
                SECURE MY SPOT NOW
              </button>
              <div className="spots-counter" aria-live="polite">
                <span>⚠️ Only</span>
                <span className={`spots-number ${spots <= 5 ? 'urgent' : ''}`}>{spots}</span>
                <span>discounted spots left</span>
              </div>
            </div>
          )}
        </div>
        {/* Chat */}
        <div className="chat-column">
          <div className="chat-header">
            <h3>💬 Live Chat</h3>
            <div className="online-counter" aria-live="polite">
              <span className="online-dot" aria-hidden />
              {onlineCount} online
            </div>
          </div>
          <div className="chat-messages" ref={chatContainerRef} />
          <div className="chat-input-wrapper">
            <input
              type="text"
              placeholder="Ask your question..."
              className="chat-input"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  const input = e.currentTarget as HTMLInputElement;
                  if (input.value.trim()) {
                    appendChat("You", input.value);
                    input.value = "";
                    setTimeout(() => {
                      appendChat("🌟 Moderator", "Great question! Keep watching for more!", true);
                    }, 1500);
                  }
                }
              }}
            />
          </div>
        </div>
      </div>
      {/* Sticky mini-CTA for mobile */}
      {ctaActivated && (
        <button className="sticky-cta" onClick={handleCtaClick} aria-label="Secure spot">
          Secure Spot for $47
        </button>
      )}
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} PetHealth Solutions. All rights reserved.</p>
        <nav className="footer-links">
          <a href="/terms" aria-label="Terms of Use">Terms</a>
          <a href="/privacy" aria-label="Privacy Policy">Privacy</a>
          <a href="/support" aria-label="Support">Support</a>
        </nav>
      </footer>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: linear-gradient(135deg, #0f0f1e 0%, #1a1a2e 100%);
          color: #fff;
          min-height: 100vh;
        }
        .top-bar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(20, 20, 35, 0.95);
          backdrop-filter: blur(10px);
          padding: 14px;
          text-align: center;
          font-size: 14px;
          font-weight: 600;
          z-index: 1000;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        .top-bar.urgent {
          background: linear-gradient(90deg, #ff6b6b, #ff8787);
          animation: urgentPulse 2s infinite;
        }
        @keyframes urgentPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.9; }
        }
        .container {
          max-width: 1400px;
          margin: 80px auto 40px;
          padding: 0 20px;
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 30px;
        }
        .video-headline {
          text-align: center;
          font-size: 28px;
          font-weight: bold;
          color: #ffd700;
          margin-bottom: 20px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        /* Video */
        .video-wrapper {
          position: relative;
          background: #000;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        }
        .live-indicator {
          position: absolute;
          top: 20px;
          left: 20px;
          background: #ff4757;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
          z-index: 10;
          animation: livePulse 2s infinite;
        }
        @keyframes livePulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255, 71, 87, 0.7); }
          50% { box-shadow: 0 0 0 10px rgba(255, 71, 87, 0); }
        }
        .live-dot {
          width: 8px;
          height: 8px;
          background: white;
          border-radius: 50%;
          animation: dotPulse 1.5s infinite;
        }
        @keyframes dotPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .viewer-counter {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(10px);
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
          z-index: 10;
        }
        .video-player {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          background: #000;
        }
        .video-player smart-player {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .exclusive-tag {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(255, 215, 0, 0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 215, 0, 0.3);
          padding: 8px 20px;
          border-radius: 20px;
          font-size: 12px;
          color: #ffd700;
        }
        /* Pre-CTA */
        .pre-cta {
          margin-top: 20px;
          padding: 20px;
          background: linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 215, 0, 0.05));
          border: 1px solid rgba(255, 215, 0, 0.3);
          border-radius: 16px;
          text-align: center;
          animation: fadeIn 0.5s ease;
        }
        .pre-cta h3 {
          color: #ffd700;
          margin-bottom: 8px;
        }
        /* CTA Box */
        .cta-box {
          margin-top: 20px;
          padding: 30px;
          background: linear-gradient(135deg, #1e1e35, #2a2a45);
          border-radius: 20px;
          text-align: center;
          animation: slideUp 0.5s ease;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .cta-box h2 {
          color: #ffd700;
          margin-bottom: 10px;
          font-size: 24px;
        }
        .cta-subtitle {
          color: #aaa;
          margin-bottom: 20px;
        }
        .price-box {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          margin-bottom: 25px;
        }
        .old-price {
          color: #777;
          text-decoration: line-through;
          font-size: 18px;
        }
        .new-price {
          color: #ffd700;
          font-size: 32px;
          font-weight: bold;
        }
        .installments {
          color: #aaa;
          font-size: 14px;
        }
        .cta-button {
          background: linear-gradient(135deg, #ffd700, #ffed4e);
          color: #000;
          border: none;
          padding: 18px 40px;
          border-radius: 50px;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(255, 215, 0, 0.3);
        }
        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(255, 215, 0, 0.4);
        }
        .spots-counter {
          margin-top: 20px;
          padding: 15px;
          background: rgba(255, 0, 0, 0.1);
          border: 1px solid rgba(255, 0, 0, 0.3);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        .spots-number {
          font-size: 28px;
          font-weight: bold;
          color: #ffd700;
          animation: spotsPulse 2s infinite;
        }
        .spots-number.urgent {
          color: #ff4757;
          animation: urgentSpotsPulse 0.5s infinite;
        }
        @keyframes spotsPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        @keyframes urgentSpotsPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        /* Chat */
        .chat-column {
          background: linear-gradient(135deg, #1a1a2e, #252540);
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 700px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        }
        .chat-header {
          padding: 20px;
          background: rgba(0, 0, 0, 0.2);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .chat-header h3 {
          font-size: 16px;
          font-weight: 600;
        }
        .online-counter {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #4cd137;
          font-size: 14px;
          font-weight: 600;
        }
        .online-dot {
          width: 8px;
          height: 8px;
          background: #4cd137;
          border-radius: 50%;
          animation: dotPulse 2s infinite;
        }
        .chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .chat-messages::-webkit-scrollbar {
          width: 6px;
        }
        .chat-messages::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 3px;
        }
        .chat-message {
          animation: messageSlide 0.3s ease;
        }
        @keyframes messageSlide {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .message-author {
          font-size: 13px;
          font-weight: 600;
          color: #74b9ff;
          margin-bottom: 4px;
        }
        .message-admin .message-author {
          color: #ffd700;
        }
        .message-text {
          font-size: 14px;
          color: #e0e0e0;
          line-height: 1.4;
        }
        /* Poll */
        .poll-container {
          background: linear-gradient(135deg, rgba(74, 185, 255, 0.1), rgba(74, 185, 255, 0.05));
          border: 1px solid rgba(74, 185, 255, 0.3);
          border-radius: 12px;
          padding: 16px;
          margin: 10px 0;
        }
        .poll-header {
          color: #74b9ff;
          font-weight: 600;
          font-size: 12px;
          margin-bottom: 10px;
        }
        .poll-question {
          font-size: 15px;
          font-weight: 600;
          margin-bottom: 12px;
          color: #fff;
        }
        .poll-options {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .poll-option {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 10px;
          cursor: pointer;
          transition: all 0.2s ease;
          color: #e0e0e0;
          font-size: 14px;
          text-align: left;
        }
        .poll-option:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateX(5px);
        }
        .poll-result {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 8px;
        }
        .poll-bar {
          flex: 1;
          height: 6px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
          overflow: hidden;
        }
        .poll-fill {
          height: 100%;
          background: linear-gradient(90deg, #74b9ff, #54a0ff);
          transition: width 0.5s ease;
        }
        .poll-pct {
          color: #74b9ff;
          font-weight: 600;
          font-size: 12px;
          min-width: 35px;
        }
        .poll-hint {
          margin-top: 10px;
          font-size: 12px;
          color: #74b9ff;
          text-align: center;
        }
        /* Chat Input */
        .chat-input-wrapper {
          padding: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(0, 0, 0, 0.25);
        }
        .chat-input {
          width: 100%;
          padding: 12px 14px;
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          background: rgba(255, 255, 255, 0.06);
          color: #fff;
          outline: none;
          transition: border 0.2s ease, background 0.2s ease;
        }
        .chat-input::placeholder {
          color: #bdbdbd;
        }
        .chat-input:focus {
          border-color: #74b9ff;
          background: rgba(255, 255, 255, 0.12);
        }
        /* Sticky CTA (mobile) */
        .sticky-cta {
          position: fixed;
          bottom: 16px;
          left: 16px;
          right: 16px;
          padding: 14px 18px;
          border-radius: 999px;
          border: none;
          font-weight: 800;
          font-size: 15px;
          background: linear-gradient(135deg, #ffd700, #ffed4e);
          color: #000;
          box-shadow: 0 12px 30px rgba(255, 215, 0, 0.35);
          z-index: 1001;
          display: none;
        }
        /* Footer */
        .site-footer {
          max-width: 1400px;
          margin: 20px auto 40px;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          opacity: 0.8;
          font-size: 13px;
        }
        .footer-links {
          display: flex;
          gap: 14px;
        }
        .footer-links a {
          color: #cfd8ff;
          text-decoration: none;
        }
        .footer-links a:hover {
          text-decoration: underline;
        }
        /* Responsive Design */
        @media (max-width: 1100px) {
          .container {
            grid-template-columns: 1fr;
          }
          .chat-column {
            height: 500px;
          }
          .video-headline {
            font-size: 24px;
          }
        }
        @media (max-width: 720px) {
          .container {
            margin: 72px auto 24px;
          }
          .sticky-cta {
            display: block;
          }
          .price-box {
            gap: 8px;
          }
          .new-price {
            font-size: 26px;
          }
          .cta-button {
            width: 100%;
          }
          .site-footer {
            flex-direction: column;
            align-items: flex-start;
          }
          .video-headline {
            font-size: 20px;
            padding: 0 10px;
          }
        }
      `}</style>
    </>
  );
};

export default LiveClass;
