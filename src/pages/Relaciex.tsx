import React, { useEffect, useMemo, useRef, useState } from "react";

const LiveClass: React.FC = () => {
  // ====== STATE ======
  const [userInteracted, setUserInteracted] = useState(false);
  const [ctaActivated, setCtaActivated] = useState(false);
  const [viewerCount, setViewerCount] = useState(847);
  const [onlineCount, setOnlineCount] = useState(187);
  const [preCtaActive, setPreCtaActive] = useState(false);
  const [spots, setSpots] = useState(20);
  const [region, setRegion] = useState<string>("United States • Unknown Time");
  const [termsOpen, setTermsOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  // ====== HELPERS ======
  const usTzMap: Record<string, string> = {
    "America/New_York": "United States • Eastern Time",
    "America/Detroit": "United States • Eastern Time",
    "America/Kentucky/Louisville": "United States • Eastern Time",
    "America/Kentucky/Monticello": "United States • Eastern Time",
    "America/Indiana/Indianapolis": "United States • Eastern Time",
    "America/Chicago": "United States • Central Time",
    "America/Indiana/Knox": "United States • Central Time",
    "America/Menominee": "United States • Central Time",
    "America/North_Dakota/Center": "United States • Central Time",
    "America/Denver": "United States • Mountain Time",
    "America/Phoenix": "United States • Mountain Time (AZ)",
    "America/Los_Angeles": "United States • Pacific Time",
    "America/Anchorage": "United States • Alaska Time",
    "Pacific/Honolulu": "United States • Hawaii Time"
  };

  // ====== POLL ======
  const pollBase = useMemo(
    () => ({
      question: "What’s your biggest challenge with your senior pet?",
      options: [
        "Arthritis pain & stiffness",
        "Low energy / sleeps all day",
        "Picky appetite / digestion",
        "Mobility (stairs, couch, car)"
      ],
      baseVotes: [142, 238, 187, 93]
    }),
    []
  );
  const [pollVisible, setPollVisible] = useState(false);
  const [userVoted, setUserVoted] = useState(false);
  const [tallies, setTallies] = useState<number[]>(pollBase.baseVotes);

  // ====== REFS ======
  const chatContainerRef = useRef<HTMLDivElement | null>(null);
  const timersRef = useRef<number[]>([]);
  const intervalsRef = useRef<number[]>([]);

  // ====== TIMING (CTA after 10 minutes) ======
  const TIMING = useMemo(
    () => ({
      preCta: 540000, // 9 min teaser
      showCta: 600000, // 10 min CTA visible
      pollAtMs: 300000 // 5 min
    }),
    []
  );

  // ====== CHAT MESSAGES (Phase 1 – before CTA) ======
  const chatMessagesPhase1 = useMemo(
    () => [
      { delay: 2000, author: "John", text: "Hey everyone, first time here 👋", admin: false },
      { delay: 4500, author: "Sarah", text: "I’m here for my 13-year-old lab with arthritis", admin: false },
      { delay: 7000, author: "🌟 Moderator", text: "Welcome! We’re starting with big tips for senior dogs & cats 🐾", admin: true },
      { delay: 15000, author: "Mike", text: "My vet bills are insane lately… need help", admin: false },
      { delay: 28000, author: "Olivia", text: "Cutting out ultra-processed kibble was huge for my cat’s energy", admin: false },
      { delay: 42000, author: "Emma", text: "Does fish oil help joints for older dogs?", admin: false },
      { delay: 61000, author: "🌟 Moderator", text: "Omega-3s can help. We’ll cover dosing & safety tips shortly", admin: true },
      { delay: 90000, author: "Chris", text: "Any tips for stairs? My beagle struggles", admin: false },
      { delay: 93000, author: "🌟 Moderator", text: "Ramps + short, frequent walks on soft ground = great start", admin: true },
      { delay: 120000, author: "Laura", text: "Switching bowls higher reduced my cat’s neck strain", admin: false },
      { delay: 180000, author: "Ben", text: "Warm bed + joint supplement helped mobility here", admin: false },
      { delay: 210000, author: "🌟 Moderator", text: "Love it. Hydration + gentle movement daily makes a difference", admin: true },
      { delay: 240000, author: "Sophia", text: "How do I spot bad ingredients in kibble?", admin: false },
      { delay: 300000, author: "🌟 Moderator", text: "Watch for artificial colors/preservatives & vague “meat by-products”", admin: true },
      { delay: 360000, author: "Ava", text: "My 16-yo cat is more alert after ditching treats w/ dyes", admin: false },
      { delay: 420000, author: "Noah", text: "Short walks + massage helped stiffness a lot", admin: false },
      { delay: 480000, author: "Mia", text: "Adding bone broth boosted appetite for my senior pup", admin: false },
      { delay: 540000, author: "🌟 Moderator", text: "Keep notes on energy, stools, and mood—helps track progress!", admin: true },
      { delay: 570000, author: "Ethan", text: "Ready for the checklist you mentioned!", admin: false }
    ],
    []
  );

  // ====== CHAT MESSAGES (Phase 2 – after CTA) ======
  const chatMessagesPhase2 = useMemo(
    () => [
      { delay: 1000, author: "Grace", text: "Offer unlocked! 🙌", admin: false },
      { delay: 3000, author: "🌟 Moderator", text: "Limited spots—this is for serious pet parents only", admin: true },
      { delay: 6000, author: "Zoe", text: "Is there a senior cat plan too?", admin: false },
      { delay: 8000, author: "🌟 Moderator", text: "Yes—specific for older cats with arthritis & kidney-friendly tips", admin: true },
      { delay: 12000, author: "Liam", text: "Just grabbed my spot for my 12-yo husky!", admin: false },
      { delay: 16000, author: "Aiden", text: "Does it include ingredient checklists?", admin: false },
      { delay: 19000, author: "🌟 Moderator", text: "Yes—labels decoded + safe swaps & simple meal upgrades", admin: true },
      { delay: 26000, author: "Chloe", text: "Paid. My old girl deserves this 🐶💛", admin: false },
      { delay: 34000, author: "Mason", text: "This costs less than one vet visit… worth it", admin: false },
      { delay: 46000, author: "Ella", text: "Adding omega-3 + turmeric worked for us (ask your vet!)", admin: false },
      { delay: 60000, author: "Jackson", text: "Got it! Let’s help our seniors live better", admin: false }
    ],
    []
  );

  // ====== CHAT APPEND ======
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
    if (msgs.length > 60) msgs[0].remove();
  };

  // ====== INSERT POLL ======
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
        ${pollBase.options
          .map((opt, idx) => {
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
          })
          .join("")}
      </div>
      ${
        !userVoted
          ? '<div class="poll-hint">👆 Tap to vote</div>'
          : '<div class="poll-hint">✅ Thanks for voting!</div>'
      }
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

          pollWrap.remove();
          insertPollIntoChat();
        });
      });
    }
  };

  // ====== INIT ======
  useEffect(() => {
    // Region (US + Time Zone label)
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
      if (usTzMap[tz]) setRegion(usTzMap[tz]);
      else setRegion("United States");
    } catch {
      setRegion("United States");
    }

    // Inject VTurb assets into <head>
    const head = document.head;

    // Inline perf script
    const perfScript = document.createElement("script");
    perfScript.text = "!function(i,n){i._plt=i._plt||(n&&n.timeOrigin?n.timeOrigin+n.now():Date.now())}(window,performance);";
    head.appendChild(perfScript);

    // Preloads
    const preload1 = document.createElement("link");
    preload1.rel = "preload";
    preload1.as = "script";
    preload1.href = "https://scripts.converteai.net/ec09afc3-b6c2-4de5-b556-85edb9ced296/players/68b1fa656fe4730e992a26b4/v4/player.js";
    head.appendChild(preload1);

    const preload2 = document.createElement("link");
    preload2.rel = "preload";
    preload2.as = "script";
    preload2.href = "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js";
    head.appendChild(preload2);

    const preload3 = document.createElement("link");
    preload3.rel = "preload";
    preload3.as = "fetch";
    preload3.href = "https://cdn.converteai.net/ec09afc3-b6c2-4de5-b556-85edb9ced296/68b1fa572a3de119c45bca76/main.m3u8";
    head.appendChild(preload3);

    // DNS Prefetch
    ["https://cdn.converteai.net", "https://scripts.converteai.net", "https://images.converteai.net", "https://api.vturb.com.br"].forEach((url) => {
      const link = document.createElement("link");
      link.rel = "dns-prefetch";
      link.href = url;
      head.appendChild(link);
    });

    // Load player script after the container exists
    const s = document.createElement("script");
    s.src = "https://scripts.converteai.net/ec09afc3-b6c2-4de5-b556-85edb9ced296/players/68b1fa656fe4730e992a26b4/v4/player.js";
    s.async = true;
    // Slight delay to ensure container render
    const loadId = window.setTimeout(() => {
      head.appendChild(s);
    }, 400);
    timersRef.current.push(loadId);

    return () => {
      // Optional: not strictly removing nodes to avoid conflicts if component remounts.
    };
  }, []);

  // ====== CHAT INIT ======
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
  }, []); // eslint-disable-line

  useEffect(() => {
    if (pollVisible) insertPollIntoChat();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pollVisible]);

  // ====== USER INTERACTION ======
  useEffect(() => {
    const handler = () => !userInteracted && setUserInteracted(true);
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [userInteracted]);

  // ====== COUNTERS ======
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
    intervalsRef.current.push(viewerInterval as unknown as number, onlineInterval as unknown as number);
    return () => {
      window.clearInterval(viewerInterval);
      window.clearInterval(onlineInterval);
    };
  }, [ctaActivated]);

  // ====== PRE-CTA ======
  useEffect(() => {
    const t = window.setTimeout(() => setPreCtaActive(true), TIMING.preCta);
    timersRef.current.push(t);
    return () => window.clearTimeout(t);
  }, [TIMING.preCta]);

  // ====== CTA ACTIVATE (10 MIN) ======
  const activateCTA = () => {
    if (ctaActivated) return;
    setCtaActivated(true);
    chatMessagesPhase2.forEach((m) => {
      const t = window.setTimeout(() => appendChat(m.author, m.text, m.admin), m.delay);
      timersRef.current.push(t);
    });

    const reduceSpots = () => {
      setSpots((s) => {
        if (s <= 2) return s;
        const reduction = s > 10 ? Math.floor(Math.random() * 3) + 2 : 1;
        return Math.max(2, s - reduction);
      });
    };
    [3000, 8000, 15000, 25000, 40000, 60000].forEach((ms) => {
      const t = window.setTimeout(reduceSpots, ms);
      timersRef.current.push(t);
    });
    const slowReduction = window.setInterval(reduceSpots, 45000);
    intervalsRef.current.push(slowReduction as unknown as number);
  };

  useEffect(() => {
    const t = window.setTimeout(activateCTA, TIMING.showCta);
    timersRef.current.push(t);
    return () => window.clearTimeout(t);
  }, [TIMING.showCta]);

  // ====== CLEANUP ======
  useEffect(() => {
    return () => {
      timersRef.current.forEach((t) => window.clearTimeout(t));
      intervalsRef.current.forEach((i) => window.clearInterval(i));
    };
  }, []);

  // ====== CTA CLICK ======
  const handleCtaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open("https://www.your-checkout.com/offer", "_blank");
  };

  return (
    <>
      <div className={`top-bar ${ctaActivated ? "urgent" : ""}`}>
        <div className="top-left">
          <span className="flag">🇺🇸</span> {region}
        </div>
        <div className="top-center">
          {ctaActivated ? "🔥 OFFER UNLOCKED! Last discounted spots" : "🐾 Senior Pet Longevity Class — Stay focused"}
        </div>
        <div className="top-right">
          <span className="disclaimer">Educational content — not veterinary advice</span>
        </div>
      </div>

      <div className="container">
        <div className="video-column">
          {/* Video */}
          <div className="video-wrapper">
            <div className="live-indicator" aria-live="polite">
              <span className="live-dot" aria-hidden />
              LIVE
            </div>

            <div className="viewer-counter" aria-live="polite">
              <span role="img" aria-label="views">👁</span>
              {viewerCount.toLocaleString("en-US")}
            </div>

            <div className="video-player">
              {/* VTurb container */}
              <div
                id="vid_68b1fa656fe4730e992a26b4"
                className="vturb-player"
                style={{ position: "relative", paddingTop: "56.25%", width: "100%" }}
              />
            </div>

            <div className="exclusive-tag">🔒 Exclusive content — Unlisted</div>
          </div>

          {/* Pre-CTA */}
          {preCtaActive && !ctaActivated && (
            <div className="pre-cta">
              <h3>🎯 Heads up!</h3>
              <p>In a few minutes, we’ll unlock a special plan for senior dogs & cats with arthritis.</p>
            </div>
          )}

          {/* CTA */}
          {ctaActivated && (
            <div className="cta-box" role="region" aria-label="Offer">
              <h2>🎁 SPECIAL OFFER UNLOCKED</h2>
              <p className="cta-subtitle">For live viewers only — tailored senior pet plan</p>

              <div className="price-box" aria-live="polite">
                <span className="old-price">Was $197</span>
                <span className="new-price">Now $97</span>
                <span className="installments">or 4× $24.25</span>
              </div>
              <button className="cta-button" onClick={handleCtaClick} aria-label="Get my spot now">
                GET MY SPOT NOW
              </button>
              <div className="spots-counter" aria-live="polite">
                <span>⚠️ Only</span>
                <span className={`spots-number ${spots <= 5 ? "urgent" : ""}`}>{spots}</span>
                <span>discounted spots left</span>
              </div>

              <ul className="cta-bullets">
                <li>✔ Arthritis-friendly diet upgrades for dogs & cats</li>
                <li>✔ Label red-flags (additives, artificial colors, vague meats)</li>
                <li>✔ Mobility checklist: ramps, short walks, warm bed</li>
                <li>✔ Vet-friendly supplement guide (omega-3, joint support)</li>
              </ul>
            </div>
          )}

          {/* Content under video */}
          <section className="copy-section">
            <h2>Did you know nutrition is the #1 factor that determines how your senior pet will age?</h2>
            <p>
              Most pet parents don’t notice the small daily diet mistakes that drain energy, worsen joint discomfort, and
              can lead to very high vet bills. The pet food industry loves ultra-processed formulas—packed with additives
              that keep shelves full, not pets healthy.
            </p>
            <p>
              The good news? There’s a simple, safer way to upgrade meals today. In this presentation, you’ll learn how to
              spot toxic red-flags in kibble, what to add for joint comfort and energy, and how to help your best friend age
              better—with more comfort, mobility, and joy.
            </p>
          </section>
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
              placeholder="Type your question…"
              className="chat-input"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  const input = e.currentTarget as HTMLInputElement;
                  if (input.value.trim()) {
                    appendChat("You", input.value);
                    input.value = "";

                    setTimeout(() => {
                      appendChat("🌟 Moderator", "Great question! We’ll cover that shortly—stay with us.", true);
                    }, 1500);
                  }
                }
              }}
            />
          </div>
        </div>
      </div>

      {/* Sticky mini-CTA (mobile) */}
      {ctaActivated && (
        <button className="sticky-cta" onClick={handleCtaClick} aria-label="Get my spot">
          Get my spot for $97
        </button>
      )}

      {/* Legal & Footer */}
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Your Brand. All rights reserved.</p>
        <nav className="footer-links">
          <button onClick={() => setTermsOpen(true)} aria-label="Terms of Use">Terms</button>
          <button onClick={() => setPrivacyOpen(true)} aria-label="Privacy Policy">Privacy</button>
          <a href="#" aria-label="Support">Support</a>
        </nav>
      </footer>

      {/* Terms Modal */}
      {termsOpen && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="Terms of Use">
          <div className="modal">
            <h2>Terms of Use</h2>
            <div className="modal-body">
              <p>
                This website provides educational information about nutrition and lifestyle ideas for senior dogs and cats.
                It is not a substitute for professional veterinary care. Always consult your veterinarian before changing
                your pet’s diet, medications, or activity level. Individual results vary and are not guaranteed.
              </p>
              <p>
                By using this site and purchasing any product or program, you agree not to rely solely on the information
                provided here for diagnosing or treating your pet. You also agree to our refund, billing, and access terms
                presented at checkout.
              </p>
              <p>
                This site is not a part of Facebook™ or Meta Platforms, Inc. Additionally, this site is NOT endorsed by
                Facebook™ in any way. FACEBOOK™ is a trademark of Meta Platforms, Inc.
              </p>
            </div>
            <div className="modal-actions">
              <button onClick={() => setTermsOpen(false)} className="close-btn">Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Modal */}
      {privacyOpen && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="Privacy Policy">
          <div className="modal">
            <h2>Privacy Policy</h2>
            <div className="modal-body">
              <p>
                We respect your privacy. If you provide your name, email, or payment information, we use it to deliver the
                content you requested, process your order, and send service updates. We do not sell your personal data.
              </p>
              <p>
                We may use cookies or similar technologies to remember preferences, analyze site performance, and improve
                your experience. You can manage cookies in your browser settings. If you click third-party links (including
                checkout providers), their policies apply.
              </p>
              <p>
                For data requests or deletion, contact Support. If you are located in the United States, your data may be
                processed in the U.S. and other countries as needed to provide our services.
              </p>
            </div>
            <div className="modal-actions">
              <button onClick={() => setPrivacyOpen(false)} className="close-btn">Close</button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: linear-gradient(135deg, #0f0f1e 0%, #1a1a2e 100%);
          color: #fff;
          min-height: 100vh;
        }
        .top-bar {
          position: fixed; top: 0; left: 0; right: 0;
          background: rgba(20, 20, 35, 0.95);
          backdrop-filter: blur(10px);
          padding: 10px 16px;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          font-size: 13px; font-weight: 600;
          z-index: 1000;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        .top-bar.urgent {
          background: linear-gradient(90deg, #ff6b6b, #ff8787);
          animation: urgentPulse 2s infinite;
        }
        .top-left { justify-self: start; opacity: 0.95; display: flex; gap: 6px; align-items: center; }
        .top-center { justify-self: center; text-align: center; }
        .top-right { justify-self: end; font-weight: 500; opacity: 0.85; }
        .flag { font-size: 16px; }
        .disclaimer { font-size: 12px; }

        @keyframes urgentPulse { 0%,100%{opacity:1} 50%{opacity:0.9} }

        .container {
          max-width: 1400px;
          margin: 80px auto 40px;
          padding: 0 20px;
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 30px;
        }

        /* Video */
        .video-wrapper {
          position: relative;
          background: #000;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        }
        .live-indicator {
          position: absolute; top: 20px; left: 20px;
          background: #ff4757;
          padding: 8px 16px; border-radius: 20px;
          font-size: 13px; font-weight: 600;
          display: flex; align-items: center; gap: 8px;
          z-index: 10;
          animation: livePulse 2s infinite;
        }
        @keyframes livePulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(255,71,87,0.7); }
          50% { box-shadow: 0 0 0 10px rgba(255,71,87,0); }
        }
        .live-dot { width: 8px; height: 8px; background: white; border-radius: 50%; animation: dotPulse 1.5s infinite; }
        @keyframes dotPulse { 0%,100%{opacity:1} 50%{opacity:0.5} }

        .viewer-counter {
          position: absolute; top: 20px; right: 20px;
          background: rgba(0,0,0,0.7);
          backdrop-filter: blur(10px);
          padding: 8px 16px; border-radius: 20px;
          font-size: 14px; font-weight: 600;
          display: flex; align-items: center; gap: 8px;
          z-index: 10;
        }
        .video-player { position: relative; padding-bottom: 56.25%; height: 0; background: #000; }
        .vturb-player > iframe, .vturb-player > video {
          position: absolute !important; top: 0; left: 0; width: 100% !important; height: 100% !important;
        }
        .exclusive-tag {
          position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%);
          background: rgba(255,215,0,0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,215,0,0.3);
          padding: 8px 20px; border-radius: 20px;
          font-size: 12px; color: #ffd700;
        }

        /* Pre-CTA */
        .pre-cta {
          margin-top: 20px; padding: 20px;
          background: linear-gradient(135deg, rgba(255,215,0,0.1), rgba(255,215,0,0.05));
          border: 1px solid rgba(255,215,0,0.3);
          border-radius: 16px; text-align: center;
          animation: fadeIn 0.5s ease;
        }
        .pre-cta h3 { color: #ffd700; margin-bottom: 8px; }

        /* CTA Box */
        .cta-box {
          margin-top: 20px; padding: 30px;
          background: linear-gradient(135deg, #1e1e35, #2a2a45);
          border-radius: 20px; text-align: center;
          animation: slideUp 0.5s ease;
          box-shadow: 0 10px 40px rgba(0,0,0,0.3);
        }
        @keyframes slideUp { from{opacity:0; transform:translateY(20px)} to{opacity:1; transform:translateY(0)} }
        .cta-box h2 { color: #ffd700; margin-bottom: 10px; font-size: 24px; }
        .cta-subtitle { color: #aaa; margin-bottom: 20px; }
        .price-box { display: flex; align-items: center; justify-content: center; gap: 15px; margin-bottom: 25px; }
        .old-price { color: #777; text-decoration: line-through; font-size: 18px; }
        .new-price { color: #ffd700; font-size: 32px; font-weight: bold; }
        .installments { color: #aaa; font-size: 14px; }
        .cta-button {
          background: linear-gradient(135deg, #ffd700, #ffed4e);
          color: #000; border: none; padding: 18px 40px; border-radius: 50px;
          font-size: 16px; font-weight: bold; cursor: pointer; transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(255,215,0,0.3);
        }
        .cta-button:hover { transform: translateY(-2px); box-shadow: 0 15px 40px rgba(255,215,0,0.4); }
        .spots-counter {
          margin-top: 20px; padding: 15px;
          background: rgba(255,0,0,0.1); border: 1px solid rgba(255,0,0,0.3); border-radius: 12px;
          display: flex; align-items: center; justify-content: center; gap: 10px;
        }
        .spots-number { font-size: 28px; font-weight: bold; color: #ffd700; animation: spotsPulse 2s infinite; }
        .spots-number.urgent { color: #ff4757; animation: urgentSpotsPulse 0.5s infinite; }
        @keyframes spotsPulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.1)} }
        @keyframes urgentSpotsPulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.2)} }

        .copy-section { margin-top: 28px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 20px; }
        .copy-section h2 { margin-bottom: 10px; font-size: 22px; }
        .copy-section p { color: #e4e4e4; margin-bottom: 10px; line-height: 1.6; }

        /* Chat */
        .chat-column {
          background: linear-gradient(135deg, #1a1a2e, #252540);
          border-radius: 20px; overflow: hidden; display: flex; flex-direction: column; height: 700px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.3);
        }
        .chat-header {
          padding: 20px; background: rgba(0,0,0,0.2);
          border-bottom: 1px solid rgba(255,255,255,0.1);
          display: flex; justify-content: space-between; align-items: center;
        }
        .chat-header h3 { font-size: 16px; font-weight: 600; }
        .online-counter { display: flex; align-items: center; gap: 8px; color: #4cd137; font-size: 14px; font-weight: 600; }
        .online-dot { width: 8px; height: 8px; background: #4cd137; border-radius: 50%; animation: dotPulse 2s infinite; }

        .chat-messages { flex: 1; overflow-y: auto; padding: 20px; display: flex; flex-direction: column; gap: 12px; }
        .chat-messages::-webkit-scrollbar { width: 6px; }
        .chat-messages::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); border-radius: 3px; }
        .chat-message { animation: messageSlide 0.3s ease; }
        @keyframes messageSlide { from{opacity:0; transform:translateX(-10px)} to{opacity:1; transform:translateX(0)} }
        .message-author { font-size: 13px; font-weight: 600; color: #74b9ff; margin-bottom: 4px; }
        .message-admin .message-author { color: #ffd700; }
        .message-text { font-size: 14px; color: #e0e0e0; line-height: 1.4; }

        /* Poll */
        .poll-container {
          background: linear-gradient(135deg, rgba(74,185,255,0.1), rgba(74,185,255,0.05));
          border: 1px solid rgba(74,185,255,0.3);
          border-radius: 12px; padding: 16px; margin: 10px 0;
        }
        .poll-header { color: #74b9ff; font-weight: 600; font-size: 12px; margin-bottom: 10px; }
        .poll-question { font-size: 15px; font-weight: 600; margin-bottom: 12px; color: #fff; }
        .poll-options { display: flex; flex-direction: column; gap: 8px; }
        .poll-option {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px; padding: 10px; cursor: pointer; transition: all 0.2s ease;
          color: #e0e0e0; font-size: 14px; text-align: left;
        }
        .poll-option:hover { background: rgba(255,255,255,0.1); transform: translateX(5px); }
        .poll-result { display: flex; align-items: center; gap: 10px; margin-top: 8px; }
        .poll-bar { flex: 1; height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px; overflow: hidden; }
        .poll-fill { height: 100%; background: linear-gradient(90deg, #74b9ff, #54a0ff); transition: width 0.5s ease; }
        .poll-pct { color: #74b9ff; font-weight: 600; font-size: 12px; min-width: 35px; }
        .poll-hint { margin-top: 10px; font-size: 12px; color: #74b9ff; text-align: center; }

        /* Chat Input */
        .chat-input-wrapper { padding: 12px; border-top: 1px solid rgba(255,255,255,0.1); background: rgba(0,0,0,0.25); }
        .chat-input {
          width: 100%; padding: 12px 14px; border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.06); color: #fff; outline: none;
          transition: border 0.2s ease, background 0.2s ease;
        }
        .chat-input::placeholder { color: #bdbdbd; }
        .chat-input:focus { border-color: #74b9ff; background: rgba(255,255,255,0.12); }

        /* Sticky CTA (mobile) */
        .sticky-cta {
          position: fixed; bottom: 16px; left: 16px; right: 16px;
          padding: 14px 18px; border-radius: 999px; border: none;
          font-weight: 800; font-size: 15px;
          background: linear-gradient(135deg, #ffd700, #ffed4e);
          color: #000; box-shadow: 0 12px 30px rgba(255,215,0,0.35);
          z-index: 1001; display: none;
        }

        /* Footer */
        .site-footer {
          max-width: 1400px;
          margin: 20px auto 40px; padding: 0 20px;
          display: flex; align-items: center; justify-content: space-between; gap: 16px; opacity: 0.85; font-size: 13px;
        }
        .footer-links { display: flex; gap: 14px; }
        .footer-links a, .footer-links button {
          color: #cfd8ff; text-decoration: none; background: none; border: none; cursor: pointer; font: inherit;
        }
        .footer-links a:hover, .footer-links button:hover { text-decoration: underline; }

        /* Modals */
        .modal-overlay {
          position: fixed; inset: 0; background: rgba(0,0,0,0.6);
          display: flex; align-items: center; justify-content: center; padding: 20px; z-index: 1002;
        }
        .modal {
          background: #17172b; border: 1px solid rgba(255,255,255,0.1);
          border-radius: 14px; max-width: 720px; width: 100%;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
          padding: 20px;
        }
        .modal h2 { margin-bottom: 12px; }
        .modal-body { color: #e4e4e4; line-height: 1.6; display: grid; gap: 10px; }
        .modal-actions { margin-top: 16px; display: flex; justify-content: flex-end; }
        .close-btn {
          padding: 10px 16px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.06); color: #fff; cursor: pointer;
        }

        /* Responsive */
        @media (max-width: 1100px) {
          .container { grid-template-columns: 1fr; }
          .chat-column { height: 500px; }
        }
        @media (max-width: 720px) {
          .container { margin: 72px auto 24px; }
          .sticky-cta { display: block; }
          .price-box { gap: 8px; }
          .new-price { font-size: 26px; }
          .cta-button { width: 100%; }
          .site-footer { flex-direction: column; align-items: flex-start; gap: 8px; }
          .top-bar { grid-template-columns: 1fr; gap: 6px; text-align: center; }
          .top-left, .top-right { justify-self: center; }
        }
      `}</style>
    </>
  );
};

export default LiveClass;
