import React, { useEffect, useMemo, useRef, useState } from "react";

const LiveClass: React.FC = () => {
  // ====== STATE ======
  const [userInteracted, setUserInteracted] = useState(false);
  const [ctaActivated, setCtaActivated] = useState(false);
  const [viewerCount, setViewerCount] = useState(847);
  const [onlineCount, setOnlineCount] = useState(187);
  const [preCtaActive, setPreCtaActive] = useState(false);
  const [spots, setSpots] = useState(20);
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  // ====== POLL (adapted to senior dogs/cats health) ======
  const pollBase = useMemo(
    () => ({
      question: "What's your senior pet’s biggest challenge?",
      options: [
        "Arthritis & joint pain",
        "Low energy / depressed mood",
        "Digestive issues / picky eating",
        "Overweight / slow metabolism",
      ],
      baseVotes: [142, 238, 187, 93],
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
      preCta: 540000, // 9 min (pre-CTA heads-up)
      showCta: 600000, // 10 min -> CTA appears
      pollAtMs: 360000, // 6 min
    }),
    []
  );

  // ====== VTURB SMARTPLAYER (use the snippet and keep it INSIDE the player box) ======
  useEffect(() => {
    // place required performance mark script into <head>
    const perf = document.createElement("script");
    perf.innerHTML =
      "!function(i,n){i._plt=i._plt||(n&&n.timeOrigin?n.timeOrigin+n.now():Date.now())}(window,performance);";
    document.head.appendChild(perf);

    // load the VTurb player script into <head>
    const s = document.createElement("script");
    s.src =
      "https://scripts.converteai.net/ec09afc3-b6c2-4de5-b556-85edb9ced296/players/68b1fa656fe4730e992a26b4/v4/player.js";
    s.async = true;
    document.head.appendChild(s);

    return () => {
      // keep scripts if SPA navigation — no cleanup necessary
    };
  }, []);

  // ====== CHAT MESSAGES (realistic, focused on senior pet health & arthritis) ======
  const chatMessagesPhase1 = useMemo(
    () => [
      { delay: 2000, author: "John", text: "Hey folks, first time here 👋 (US/NY)", admin: false },
      { delay: 4500, author: "Mia", text: "My 13yo cat has arthritis—hoping for real tips 🙏", admin: false },
      {
        delay: 7000,
        author: "🌟 Moderator",
        text: "Welcome! We’ll start with gentle, vet-safe routines for seniors.",
        admin: true,
      },
      {
        delay: 15000,
        author: "Alex",
        text: "Switching off ultra-processed kibble helped my 12yo dog’s joints a lot.",
        admin: false,
      },
      { delay: 28000, author: "Chris", text: "Anyone tried omega-3 for stiffness? Worth it?", admin: false },
      {
        delay: 42000,
        author: "🌟 Moderator",
        text: "High-quality omega-3s can support joints. We'll cover dosages & food ideas.",
        admin: true,
      },
      {
        delay: 58000,
        author: "Taylor",
        text: "Ramps by the couch stopped my dog from jumping & hurting himself.",
        admin: false,
      },
      {
        delay: 90000,
        author: "Priya",
        text: "Short, low-impact walks helped my senior lab more than long ones.",
        admin: false,
      },
      {
        delay: 93000,
        author: "🌟 Moderator",
        text: "Exactly—micro-walks + warm-ups reduce flare-ups.",
        admin: true,
      },
      { delay: 120000, author: "Ben", text: "I’m curious about additives in kibble…", admin: false },
      {
        delay: 123000,
        author: "🌟 Moderator",
        text: "We’ll show how the pet food industry profits off ultra-processed formulas.",
        admin: true,
      },
      { delay: 180000, author: "Lena", text: "Hydration & bone broth boosted my cat’s appetite and mood.", admin: false },
      {
        delay: 183000,
        author: "🌟 Moderator",
        text: "Great! Gentle hydration strategies coming up shortly.",
        admin: true,
      },
      { delay: 240000, author: "Mark", text: "My vet ok’d turmeric paste—less limping now.", admin: false },
      { delay: 300000, author: "Sam", text: "Can seniors do light mobility exercises?", admin: false },
      {
        delay: 303000,
        author: "🌟 Moderator",
        text: "Yes—range-of-motion moves + soft flooring. We’ll demo today.",
        admin: true,
      },
      { delay: 360000, author: "Ava", text: "Subscribing—need a plan for my 11yo beagle asap.", admin: false },
      { delay: 420000, author: "Noah", text: "I stopped free-feeding kibble; energy is back already.", admin: false },
      { delay: 480000, author: "Bella", text: "Looking forward to natural anti-inflammatory tips!", admin: false },
      { delay: 540000, author: "Ethan", text: "Does fresh food really make seniors more playful?", admin: false },
      {
        delay: 543000,
        author: "🌟 Moderator",
        text: "Wait for the case studies—we’ll show results in under 7 days.",
        admin: true,
      },
      { delay: 590000, author: "Zoe", text: "So excited to try this for my arthritic shepherd.", admin: false },
    ],
    []
  );

  const chatMessagesPhase2 = useMemo(
    () => [
      { delay: 1000, author: "Ryan", text: "The guide just unlocked! 🎯", admin: false },
      {
        delay: 3000,
        author: "🌟 Moderator",
        text: "Limited spots for the Senior Pet Longevity plan—US only.",
        admin: true,
      },
      {
        delay: 6000,
        author: "Vanessa",
        text: "Price is fair if it helps my 15yo cat move again.",
        admin: false,
      },
      { delay: 8000, author: "Carla", text: "Purchased! The arthritis checklist is gold.", admin: false },
      { delay: 11000, author: "Bruno", text: "Cheaper than my last vet co-pay 😅", admin: false },
      { delay: 14000, author: "Carlos", text: "Got my spot—see you inside!", admin: false },
      { delay: 18000, author: "🌟 Moderator", text: "7-day guarantee for everyone here live.", admin: true },
      { delay: 25000, author: "Paula", text: "Joined! Starting the mobility routine tonight.", admin: false },
      { delay: 32000, author: "Rob", text: "Spots are actually going down 👀", admin: false },
      { delay: 40000, author: "Ana", text: "Payment approved instantly", admin: false },
      { delay: 48000, author: "Lucas", text: "Is this price only for live viewers?", admin: false },
      { delay: 51000, author: "🌟 Moderator", text: "Yes—live-only pricing, US time zone.", admin: true },
      { delay: 65000, author: "Thiago", text: "Processing payment…", admin: false },
      { delay: 80000, author: "Pri", text: "Exactly what my senior terrier needed.", admin: false },
      { delay: 95000, author: "Edu", text: "Not missing this.", admin: false },
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
    if (msgs.length > 50) msgs[0].remove();
  };

  // ====== POLL IN CHAT ======
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
              ${
                userVoted
                  ? `
                <div class="poll-result">
                  <div class="poll-bar">
                    <div class="poll-fill" style="width: ${pct}%"></div>
                  </div>
                  <span class="poll-pct">${pct}%</span>
                </div>
              `
                  : ""
              }
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

  // ====== INIT CHAT ======
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
  }, [pollVisible]); // eslint-disable-line

  // ====== USER INTERACTION FLAG ======
  useEffect(() => {
    const handler = () => !userInteracted && setUserInteracted(true);
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [userInteracted]);

  // ====== VIEWERS & ONLINE COUNTS ======
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

  // ====== PRE-CTA ======
  useEffect(() => {
    const t = window.setTimeout(() => setPreCtaActive(true), TIMING.preCta);
    timersRef.current.push(t);
    return () => window.clearTimeout(t);
  }, [TIMING.preCta]);

  // ====== CTA ACTIVATE ======
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
    intervalsRef.current.push(slowReduction);
  };

  useEffect(() => {
    const t = window.setTimeout(activateCTA, TIMING.showCta);
    timersRef.current.push(t);
    return () => window.clearTimeout(t);
  }, [TIMING.showCta]); // eslint-disable-line

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
    window.open("https://pay.hotmart.com/seu-link", "_blank");
  };

  return (
    <>
      <div className={`top-bar ${ctaActivated ? "urgent" : ""}`}>
        {ctaActivated
          ? "🔥 OFFER UNLOCKED! Last discounted spots"
          : "📚 Senior Pet Longevity — Watch the tips"}
      </div>

      <div className="container">
        <div className="video-column">
          {/* HEADLINE CENTERED ABOVE THE VIDEO */}
          <h1 className="video-headline">
            Discover how to support your pet's health and happiness at any age
          </h1>

          {/* VIDEO (VTurb SmartPlayer INSIDE this wrapper) */}
          <div className="video-wrapper">
            <div className="live-indicator" aria-live="polite">
              <span className="live-dot" aria-hidden />
              LIVE
            </div>

            <div className="viewer-counter" aria-live="polite">
              <span role="img" aria-label="views">
                👁
              </span>
              {viewerCount.toLocaleString("en-US")}
            </div>

            <div className="video-player">
              {/* <-- The player renders RIGHT HERE inside the box --> */}
              <vturb-smartplayer
                id="vid-68b1fa656fe4730e992a26b4"
                style={{ display: "block", margin: "0 auto", width: "100%", height: "100%" }}
              ></vturb-smartplayer>
            </div>

            <div className="exclusive-tag">🔒 Exclusive content — Unlisted</div>
          </div>

          {/* PRE-CTA */}
          {preCtaActive && !ctaActivated && (
            <div className="pre-cta">
              <h3>🎯 Heads up!</h3>
              <p>In the next minutes we’ll unlock something special…</p>
            </div>
          )}

          {/* MAIN CTA */}
          {ctaActivated && (
            <div className="cta-box" role="region" aria-label="Offer">
              <h2>🎁 OFFER UNLOCKED!</h2>
              <p className="cta-subtitle">Exclusive for those here live (United States)</p>

              <div className="price-box" aria-live="polite">
                <span className="old-price">Was $497</span>
                <span className="new-price">Now $97</span>
                <span className="installments">or 12 payments of $9.70</span>
              </div>

              <button className="cta-button" onClick={handleCtaClick} aria-label="Secure my spot now">
                SECURE MY SPOT NOW
              </button>

              <div className="spots-counter" aria-live="polite">
                <span>⚠️ Only</span>
                <span className={`spots-number ${spots <= 5 ? "urgent" : ""}`}>{spots}</span>
                <span>discounted spots left</span>
              </div>
            </div>
          )}
        </div>

        {/* CHAT */}
        <div className="chat-column">
          <div className="chat-header">
            <h3>💬 Live Chat</h3>
            <div className="online-counter" aria-live="polite">
              <span className="online-dot" aria-hidden />
              {onlineCount} online (US)
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
                      appendChat(
                        "🌟 Moderator",
                        "Great question! Keep watching—we’ll cover that in today’s tips.",
                        true
                      );
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
          Secure spot for $97
        </button>
      )}

      {/* FOOTER */}
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Your Brand. All rights reserved — United States.</p>
        <nav className="footer-links">
          <a
            href="#"
            aria-label="Terms of Use"
            onClick={(e) => {
              e.preventDefault();
              setShowTerms(true);
            }}
          >
            Terms
          </a>
          <a
            href="#"
            aria-label="Privacy Policy"
            onClick={(e) => {
              e.preventDefault();
              setShowPrivacy(true);
            }}
          >
            Privacy
          </a>
          <a href="#" aria-label="Support">
            Support
          </a>
        </nav>
      </footer>

      {/* TERMS MODAL */}
      {showTerms && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="Terms of Use">
          <div className="modal">
            <h2>Terms of Use</h2>
            <div className="modal-body">
              <p>
                This content is for educational purposes and is not a substitute for professional veterinary
                advice. Always consult a licensed veterinarian before making diet or health changes for your
                pet, especially seniors or pets with existing conditions.
              </p>
              <p>
                By using this site, you agree not to rely solely on the information provided here and you assume
                all risks associated with applying any suggestions. We do not guarantee specific results. Pricing
                and availability may change without notice.
              </p>
              <p>
                Any references to pet food industry practices are opinions based on analysis of ultra-processed
                formulas and common additives. We encourage responsible, vet-guided care.
              </p>
              <p>
                This site may promote products or programs. If you purchase through provided links, we may receive
                compensation. All trademarks belong to their respective owners.
              </p>
              <button className="modal-close" onClick={() => setShowTerms(false)} aria-label="Close">
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PRIVACY MODAL */}
      {showPrivacy && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="Privacy Policy">
          <div className="modal">
            <h2>Privacy Policy</h2>
            <div className="modal-body">
              <p>
                We respect your privacy. We collect basic information you voluntarily provide (like name and email)
                to deliver content, offers, and support. We may use cookies or similar technologies to improve the
                user experience and measure performance.
              </p>
              <p>
                We may share data with service providers strictly to operate the site (e.g., video hosting via
                VTurb/Converteai, checkout via Hotmart). We do not sell your personal information. You can request
                access or deletion of your data by contacting Support.
              </p>
              <p>
                Third-party tools may place cookies and collect usage data in accordance with their own policies. By
                using this site, you consent to such processing consistent with US privacy standards and Facebook
                policies.
              </p>
              <button className="modal-close" onClick={() => setShowPrivacy(false)} aria-label="Close">
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: linear-gradient(135deg, #0f0f1e 0%, #1a1a2e 100%);
          color: #fff; min-height: 100vh;
        }
        .top-bar {
          position: fixed; top: 0; left: 0; right: 0;
          background: rgba(20, 20, 35, 0.95); backdrop-filter: blur(10px);
          padding: 14px; text-align: center; font-size: 14px; font-weight: 600; z-index: 1000;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1); transition: all .3s ease;
        }
        .top-bar.urgent { background: linear-gradient(90deg, #ff6b6b, #ff8787); animation: urgentPulse 2s infinite; }
        @keyframes urgentPulse { 0%,100%{opacity:1;} 50%{opacity:.9;} }

        .container {
          max-width: 1400px; margin: 80px auto 40px; padding: 0 20px;
          display: grid; grid-template-columns: 1fr 400px; gap: 30px;
        }

        /* Headline */
        .video-headline {
          text-align: center; margin-bottom: 14px; font-size: 22px; font-weight: 800;
          letter-spacing: .2px;
        }

        /* Video */
        .video-wrapper {
          position: relative; background: #000; border-radius: 20px; overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,.5);
        }
        .live-indicator {
          position: absolute; top: 20px; left: 20px; background: #ff4757;
          padding: 8px 16px; border-radius: 20px; font-size: 13px; font-weight: 600;
          display: flex; align-items: center; gap: 8px; z-index: 10; animation: livePulse 2s infinite;
        }
        @keyframes livePulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(255,71,87,.7); }
          50% { box-shadow: 0 0 0 10px rgba(255,71,87,0); }
        }
        .live-dot { width: 8px; height: 8px; background: white; border-radius: 50%; animation: dotPulse 1.5s infinite; }
        @keyframes dotPulse { 0%,100% {opacity:1;} 50% {opacity:.5;} }

        .viewer-counter {
          position: absolute; top: 20px; right: 20px; background: rgba(0,0,0,.7);
          backdrop-filter: blur(10px); padding: 8px 16px; border-radius: 20px; font-size: 14px; font-weight: 600;
          display: flex; align-items: center; gap: 8px; z-index: 10;
        }
        .video-player {
          position: relative; padding-bottom: 56.25%; height: 0; background: #000;
        }
        .video-player vturb-smartplayer,
        .video-player .vturb-embed,
        .video-player iframe,
        .video-player video {
          position: absolute; top: 0; left: 0; width: 100%; height: 100%;
        }

        .exclusive-tag {
          position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%);
          background: rgba(255,215,0,.15); backdrop-filter: blur(10px);
          border: 1px solid rgba(255,215,0,.3); padding: 8px 20px; border-radius: 20px;
          font-size: 12px; color: #ffd700;
        }

        /* Pre-CTA */
        .pre-cta {
          margin-top: 20px; padding: 20px; background: linear-gradient(135deg, rgba(255,215,0,.1), rgba(255,215,0,.05));
          border: 1px solid rgba(255,215,0,.3); border-radius: 16px; text-align: center; animation: fadeIn .5s ease;
        }
        .pre-cta h3 { color: #ffd700; margin-bottom: 8px; }

        /* CTA Box */
        .cta-box {
          margin-top: 20px; padding: 30px; background: linear-gradient(135deg, #1e1e35, #2a2a45);
          border-radius: 20px; text-align: center; animation: slideUp .5s ease; box-shadow: 0 10px 40px rgba(0,0,0,.3);
        }
        @keyframes slideUp { from{opacity:0; transform:translateY(20px);} to{opacity:1; transform:translateY(0);} }
        .cta-box h2 { color: #ffd700; margin-bottom: 10px; font-size: 24px; }
        .cta-subtitle { color: #aaa; margin-bottom: 20px; }
        .price-box { display: flex; align-items: center; justify-content: center; gap: 15px; margin-bottom: 25px; }
        .old-price { color: #777; text-decoration: line-through; font-size: 18px; }
        .new-price { color: #ffd700; font-size: 32px; font-weight: bold; }
        .installments { color: #aaa; font-size: 14px; }
        .cta-button {
          background: linear-gradient(135deg, #ffd700, #ffed4e); color: #000; border: none;
          padding: 18px 40px; border-radius: 50px; font-size: 16px; font-weight: bold; cursor: pointer;
          transition: all .3s ease; box-shadow: 0 10px 30px rgba(255,215,0,.3);
        }
        .cta-button:hover { transform: translateY(-2px); box-shadow: 0 15px 40px rgba(255,215,0,.4); }
        .spots-counter {
          margin-top: 20px; padding: 15px; background: rgba(255,0,0,.1); border: 1px solid rgba(255,0,0,.3);
          border-radius: 12px; display: flex; align-items: center; justify-content: center; gap: 10px;
        }
        .spots-number { font-size: 28px; font-weight: bold; color: #ffd700; animation: spotsPulse 2s infinite; }
        .spots-number.urgent { color: #ff4757; animation: urgentSpotsPulse .5s infinite; }
        @keyframes spotsPulse { 0%,100%{transform:scale(1);} 50%{transform:scale(1.1);} }
        @keyframes urgentSpotsPulse { 0%,100%{transform:scale(1);} 50%{transform:scale(1.2);} }

        /* Chat */
        .chat-column {
          background: linear-gradient(135deg, #1a1a2e, #252540); border-radius: 20px; overflow: hidden;
          display: flex; flex-direction: column; height: 700px; box-shadow: 0 10px 40px rgba(0,0,0,.3);
        }
        .chat-header {
          padding: 20px; background: rgba(0,0,0,.2); border-bottom: 1px solid rgba(255,255,255,.1);
          display: flex; justify-content: space-between; align-items: center;
        }
        .chat-header h3 { font-size: 16px; font-weight: 600; }
        .online-counter { display: flex; align-items: center; gap: 8px; color: #4cd137; font-size: 14px; font-weight: 600; }
        .online-dot { width: 8px; height: 8px; background: #4cd137; border-radius: 50%; animation: dotPulse 2s infinite; }
        .chat-messages { flex: 1; overflow-y: auto; padding: 20px; display: flex; flex-direction: column; gap: 12px; }
        .chat-messages::-webkit-scrollbar { width: 6px; }
        .chat-messages::-webkit-scrollbar-thumb { background: rgba(255,255,255,.2); border-radius: 3px; }
        .chat-message { animation: messageSlide .3s ease; }
        @keyframes messageSlide { from{opacity:0; transform:translateX(-10px);} to{opacity:1; transform:translateX(0);} }
        .message-author { font-size: 13px; font-weight: 600; color: #74b9ff; margin-bottom: 4px; }
        .message-admin .message-author { color: #ffd700; }
        .message-text { font-size: 14px; color: #e0e0e0; line-height: 1.4; }

        /* Poll */
        .poll-container {
          background: linear-gradient(135deg, rgba(74,185,255,.1), rgba(74,185,255,.05));
          border: 1px solid rgba(74,185,255,.3); border-radius: 12px; padding: 16px; margin: 10px 0;
        }
        .poll-header { color: #74b9ff; font-weight: 600; font-size: 12px; margin-bottom: 10px; }
        .poll-question { font-size: 15px; font-weight: 600; margin-bottom: 12px; color: #fff; }
        .poll-options { display: flex; flex-direction: column; gap: 8px; }
        .poll-option {
          background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.1);
          border-radius: 8px; padding: 10px; cursor: pointer; transition: all .2s ease;
          color: #e0e0e0; font-size: 14px; text-align: left;
        }
        .poll-option:hover { background: rgba(255,255,255,.1); transform: translateX(5px); }
        .poll-result { display: flex; align-items: center; gap: 10px; margin-top: 8px; }
        .poll-bar { flex: 1; height: 6px; background: rgba(255,255,255,.1); border-radius: 3px; overflow: hidden; }
        .poll-fill { height: 100%; background: linear-gradient(90deg, #74b9ff, #54a0ff); transition: width .5s ease; }
        .poll-pct { color: #74b9ff; font-weight: 600; font-size: 12px; min-width: 35px; }
        .poll-hint { margin-top: 10px; font-size: 12px; color: #74b9ff; text-align: center; }

        /* Chat input */
        .chat-input-wrapper { padding: 12px; border-top: 1px solid rgba(255,255,255,.1); background: rgba(0,0,0,.25); }
        .chat-input {
          width: 100%; padding: 12px 14px; border-radius: 10px; border: 1px solid rgba(255,255,255,.15);
          background: rgba(255,255,255,.06); color: #fff; outline: none; transition: border .2s ease, background .2s ease;
        }
        .chat-input::placeholder { color: #bdbdbd; }
        .chat-input:focus { border-color: #74b9ff; background: rgba(255,255,255,.12); }

        /* Sticky CTA (mobile) */
        .sticky-cta {
          position: fixed; bottom: 16px; left: 16px; right: 16px;
          padding: 14px 18px; border-radius: 999px; border: none; font-weight: 800; font-size: 15px;
          background: linear-gradient(135deg, #ffd700, #ffed4e); color: #000;
          box-shadow: 0 12px 30px rgba(255,215,0,.35); z-index: 1001; display: none;
        }

        /* Footer */
        .site-footer {
          max-width: 1400px; margin: 20px auto 40px; padding: 0 20px;
          display: flex; align-items: center; justify-content: space-between; gap: 16px; opacity: .8; font-size: 13px;
        }
        .footer-links { display: flex; gap: 14px; }
        .footer-links a { color: #cfd8ff; text-decoration: none; }
        .footer-links a:hover { text-decoration: underline; }

        /* Modal */
        .modal-overlay {
          position: fixed; inset: 0; background: rgba(0,0,0,.6);
          display: flex; align-items: center; justify-content: center; z-index: 2000;
        }
        .modal {
          width: min(680px, 92vw); background: #131329; border: 1px solid rgba(255,255,255,.12);
          border-radius: 16px; padding: 24px; box-shadow: 0 30px 80px rgba(0,0,0,.5);
        }
        .modal h2 { margin-bottom: 10px; color: #ffd700; }
        .modal-body { color: #e9e9f3; line-height: 1.6; display: grid; gap: 12px; }
        .modal-close { margin-top: 14px; padding: 10px 16px; border-radius: 10px; border: none; cursor: pointer; background: #ffd700; color: #000; font-weight: 700; }

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
          .site-footer { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </>
  );
};

export default LiveClass;
