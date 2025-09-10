import React, { useState, useEffect } from 'react';
import '../index.css';

const SpanishMemoryLanding: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [modal, setModal] = useState<string | null>(null);
  const [spots, setSpots] = useState(37);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpots((prev) => (prev > 20 ? prev - 1 : prev));
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const showModal = (type: string) => {
    setModal(type);
  };

  const closeModal = () => {
    setModal(null);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <div className="fixed inset-0 bg-gradient-to-b from-black to-[#0A0A0A] z-[-1]">
        <div className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%] bg-[radial-gradient(circle_at_20%_50%,rgba(0,255,136,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_50%,rgba(255,0,85,0.05)_0%,transparent_50%)] animate-[rotate_20s_linear_infinite]" />
      </div>

      <div className="bg-[#FF0055] text-white text-center font-bold py-4 sticky top-0 z-50 animate-[slideDown_0.5s_ease-out]">
        ⚡ OFERTA LIMITADA: 50% OFF nos primeiros 100 assinantes! Restam apenas <span>{spots}</span> vagas
      </div>

      <section className="min-h-screen flex items-center justify-center p-5">
        <div className="max-w-[1200px] text-center">
          <div className="inline-block px-5 py-2 bg-gradient-to-r from-[#00FF88] to-[#00CC6A] rounded-full font-semibold text-[#0A0A0A] mb-8 animate-[pulse_2s_infinite]">
            🔥 NOVA TECNOLOGIA IA 2025
          </div>
          <h1 className="text-[clamp(32px,8vw,72px)] font-black leading-tight mb-5 bg-gradient-to-r from-white to-[#00FF88] bg-clip-text text-transparent">
            Pare de Perder Matches<br />Por Não Saber o Que Dizer
          </h1>
          <p className="text-[clamp(18px,3vw,24px)] text-[#B0B0B0] mb-10 max-w-[600px] mx-auto">
            A <span className="text-[#00FF88] font-bold">Inteligência Artificial</span> que analisa suas conversas e te diz{' '}
            <span className="text-[#00FF88] font-bold">exatamente</span> o que responder para despertar interesse e marcar encontros reais
          </p>
          <div className="flex justify-center gap-10 mb-10 flex-wrap">
            <div className="text-center animate-[fadeInUp_0.6s_ease-out]">
              <div className="text-4xl font-black text-[#00FF88]">93%</div>
              <div className="text-sm text-[#B0B0B0]">Taxa de Resposta</div>
            </div>
            <div className="text-center animate-[fadeInUp_0.6s_ease-out]">
              <div className="text-4xl font-black text-[#00FF88]">4.8x</div>
              <div className="text-sm text-[#B0B0B0]">Mais Encontros</div>
            </div>
            <div className="text-center animate-[fadeInUp_0.6s_ease-out]">
              <div className="text-4xl font-black text-[#00FF88]">2.847</div>
              <div className="text-sm text-[#B0B0B0]">Usuários Ativos</div>
            </div>
          </div>
          <a
            href="#pricing"
            className="inline-block px-12 py-4 bg-gradient-to-r from-[#00FF88] to-[#00CC6A] text-[#0A0A0A] font-bold text-lg rounded-full shadow-[0_10px_30px_rgba(0,255,136,0.3)] hover:shadow-[0_15px_40px_rgba(0,255,136,0.4)] hover:-translate-y-1 transition-all relative overflow-hidden group"
          >
            QUERO COMEÇAR AGORA
            <div className="absolute top-0 left-[-100%] w-full h-full bg-[rgba(255,255,255,0.2)] group-hover:left-full transition-[left_0.5s_ease]" />
          </a>
          <p className="mt-5 text-sm text-[#B0B0B0]">
            ⚡ Acesso imediato via WhatsApp • Cancele quando quiser • Garantia de 7 dias
          </p>
        </div>
      </section>

      <section className="py-20 bg-[rgba(0,255,136,0.03)]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[clamp(28px,5vw,48px)] font-black text-center mb-16">
            <span className="text-[#25D366]">WhatsApp</span> - Simples e Direto
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8">
            {[
              { icon: '📱', title: '1. Adicione nosso Número', desc: 'Salve nosso WhatsApp e envie "COMEÇAR" para ativar sua conta' },
              { icon: '📸', title: '2. Envie o Print', desc: 'Tire print da conversa travada e envie para nossa IA analisar' },
              { icon: '⚡', title: '3. Receba em 30 Segundos', desc: 'IA analisa e envia 3 opções de resposta com explicação' },
              { icon: '🔥', title: '4. Copie e Cole', desc: 'Escolha a melhor resposta, personalize se quiser e envie' },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center mx-auto mb-5 text-4xl">
                  {step.icon}
                </div>
                <h3 className="text-[#00FF88] mb-4">{step.title}</h3>
                <p className="text-[#B0B0B0]">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-16 p-8 bg-[rgba(37,211,102,0.1)] rounded-[20px] border-2 border-[#25D366]">
            <p className="text-2xl font-bold text-[#25D366] mb-5">💬 Tudo pelo WhatsApp, Sem Complicação!</p>
            <p className="text-[#B0B0B0] mb-8">
              Sem app para baixar, sem login complicado. É só adicionar nosso número e começar a usar!
            </p>
            <a
              href="#pricing"
              className="inline-block px-12 py-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-[#0A0A0A] font-bold text-lg rounded-full shadow-[0_10px_30px_rgba(0,255,136,0.3)] hover:shadow-[0_15px_40px_rgba(0,255,136,0.4)] hover:-translate-y-1 transition-all"
            >
              ATIVAR AGORA NO WHATSAPP
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[rgba(10,10,10,0.5)] backdrop-blur-[10px]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[clamp(28px,5vw,48px)] font-black text-center mb-16">Como Funciona na Prática</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-10">
            {[
              {
                step: '1',
                header: '😰 Ela Responde e Você Trava',
                messages: [
                  { type: 'other', text: 'Oi! Vi que você também curte trilhas 😊' },
                  { type: 'user', text: 'Oi! Sim, adoro! E você...' },
                  { type: 'other', text: 'Fiz a trilha da Pedra Bonita semana passada! Foi incrível 🏔️' },
                  { type: 'center', text: '🤔 "E agora? O que eu respondo?"', className: 'text-[#B0B0B0]' },
                ],
              },
              {
                step: '2',
                header: '🤖 Envia Print para Nossa IA',
                messages: [
                  {
                    type: 'ai-suggestion',
                    text: '💡 <strong>IA Analisando:</strong><br> • Ela demonstrou interesse genuíno<br> • Abriu espaço para conexão emocional<br> • Momento perfeito para criar tensão',
                  },
                  {
                    type: 'ai-suggestion',
                    text: '✨ <strong>Resposta Sugerida:</strong><br> "Pedra Bonita é demais! A vista lá de cima vale cada gota de suor haha. Você foi no nascer ou pôr do sol? Porque tenho uma teoria sobre qual é melhor... 😏"',
                    className: 'bg-[rgba(0,255,136,0.2)]',
                  },
                ],
              },
              {
                step: '3',
                header: '🔥 Resultado Imediato',
                messages: [
                  {
                    type: 'user',
                    text: 'Pedra Bonita é demais! A vista lá de cima vale cada gota de suor haha. Você foi no nascer ou pôr do sol? Porque tenho uma teoria sobre qual é melhor... 😏',
                  },
                  { type: 'other', text: 'Hahaha agora fiquei curiosa! Fui no pôr do sol... qual é sua teoria? 👀' },
                  { type: 'other', text: 'Aliás, você parece conhecer várias trilhas legais por aqui...' },
                  { type: 'center', text: '✅ Conversa fluindo naturalmente!', className: 'text-[#00FF88]' },
                ],
              },
            ].map((demo, index) => (
              <div
                key={index}
                className="bg-[rgba(20,20,20,0.95)] p-8 rounded-[20px] border border-[rgba(0,255,136,0.2)] hover:border-[#00FF88] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,255,136,0.2)] transition-all relative"
              >
                <div className="absolute top-5 right-5 w-10 h-10 bg-gradient-to-r from-[#00FF88] to-[#00CC6A] rounded-full flex items-center justify-center font-bold text-[#0A0A0A]">
                  {demo.step}
                </div>
                <div className="text-lg font-bold text-[#00FF88] mb-5">{demo.header}</div>
                <div className="bg-[rgba(0,0,0,0.5)] rounded-[15px] p-5 min-h-[200px]">
                  {demo.messages.map((msg, i) => (
                    <div
                      key={i}
                      className={`mb-4 animate-[messageSlide_0.5s_ease-out] ${
                        msg.type === 'user' ? 'text-right' : msg.type === 'center' ? 'text-center' : ''
                      } ${msg.className || ''}`}
                      dangerouslySetInnerHTML={
                        msg.type.includes('ai-suggestion') ? { __html: msg.text } : undefined
                      }
                    >
                      {msg.type.includes('ai-suggestion') ? null : (
                        <div
                          className={`inline-block px-4 py-3 rounded-[20px] max-w-[80%] ${
                            msg.type === 'user'
                              ? 'bg-gradient-to-r from-[#00FF88] to-[#00CC6A] text-[#0A0A0A] font-semibold'
                              : msg.type === 'other'
                              ? 'bg-[rgba(255,255,255,0.1)] text-white'
                              : ''
                          }`}
                        >
                          {msg.text}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[rgba(0,0,0,0.8)]">
        <h2 className="text-[clamp(28px,5vw,48px)] font-black text-center mb-16">Recursos Que Vão Mudar Seu Jogo</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 max-w-[1200px] mx-auto">
          {[
            { icon: '🎯', title: 'Análise de Bio Inteligente', desc: 'Nossa IA analisa a bio dela e sugere a primeira mensagem perfeita baseada nos interesses em comum' },
            { icon: '💬', title: 'Ressuscitador de Match', desc: 'Aquela conversa que morreu? A IA cria mensagens irresistíveis para reengajar matches parados' },
            { icon: '🔥', title: 'Modo Escalada', desc: 'Aumenta gradualmente a tensão romântica de forma natural, sem parecer invasivo ou desesperado' },
            { icon: '📊', title: 'Detector de Interesse', desc: 'Analisa os padrões de resposta e te diz se ela está realmente interessada ou apenas sendo educada' },
            { icon: '⏰', title: 'Timing Perfeito', desc: 'Sugere o momento exato para pedir o número, chamar pra sair ou avançar na conversa' },
            { icon: '🎭', title: 'Personalidade Adaptável', desc: 'Se adapta ao seu estilo de conversa mantendo sua autenticidade enquanto otimiza resultados' },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-[rgba(20,20,20,0.95)] p-8 rounded-[20px] border border-[rgba(0,255,136,0.2)] hover:border-[#00FF88] hover:-translate-y-1 transition-all relative"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00FF88] to-[#00CC6A]" />
              <div className="text-5xl mb-5">{feature.icon}</div>
              <div className="text-xl font-bold text-[#00FF88] mb-4">{feature.title}</div>
              <div className="text-[#B0B0B0] leading-relaxed">{feature.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-[rgba(10,10,10,0.5)]">
        <h2 className="text-[clamp(28px,5vw,48px)] font-black text-center mb-16">Resultados Reais de Quem Já Usa</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-8 max-w-[1200px] mx-auto">
          {[
            {
              text: 'Finalmente algo que funciona de verdade. A IA analisa o contexto e sugere respostas que fazem sentido. Minhas conversas fluem muito melhor agora.',
              author: 'Rafael C.',
              detail: 'São Paulo • 28 anos',
              initials: 'RC',
            },
            {
              text: 'Sou tímido e sempre tive dificuldade em manter conversas. Com as sugestões da IA, consigo me expressar melhor e as conversas fluem naturalmente.',
              author: 'Lucas M.',
              detail: 'Rio de Janeiro • 24 anos',
              initials: 'LM',
            },
            {
              text: 'O detector de interesse é GENIAL! Parei de perder tempo com quem não estava afim. Agora foco só nas conversas que vão dar resultado.',
              author: 'Thiago H.',
              detail: 'Belo Horizonte • 31 anos',
              initials: 'TH',
            },
            {
              text: 'Tinha vários matches parados há meses sem saber como retomar. As sugestões da IA me ajudaram a reativar várias conversas!',
              author: 'Pedro S.',
              detail: 'Curitiba • 26 anos',
              initials: 'PS',
            },
            {
              text: 'Estava cético no início, mas as sugestões são realmente inteligentes. A IA entende o contexto e sugere respostas que fazem sentido.',
              author: 'André F.',
              detail: 'Porto Alegre • 29 anos',
              initials: 'AF',
            },
            {
              text: 'É como ter um amigo expert sempre disponível. As dicas são práticas e me ajudam a manter conversas interessantes.',
              author: 'Gabriel B.',
              detail: 'Brasília • 27 anos',
              initials: 'GB',
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-[rgba(20,20,20,0.95)] p-8 rounded-[20px] border border-[rgba(0,255,136,0.2)] relative"
            >
              <div className="absolute top-3 left-5 text-6xl text-[#00FF88] opacity-30">"</div>
              <div className="text-yellow-400 mb-5">⭐⭐⭐⭐⭐</div>
              <div className="italic leading-relaxed mb-5">{testimonial.text}</div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#00FF88] to-[#00CC6A] rounded-full flex items-center justify-center font-bold text-[#0A0A0A]">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-bold text-[#00FF88]">{testimonial.author}</div>
                  <div className="text-sm text-[#B0B0B0]">{testimonial.detail}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-[rgba(0,0,0,0.9)]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[clamp(28px,5vw,48px)] font-black text-center mb-16">Por Que Somos Diferentes</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10">
            {[
              {
                title: '❌ Cursos e Coaching',
                items: [
                  'Teoria genérica que não funciona',
                  'Demora semanas para ver resultado',
                  'Custa R$2000+ em média',
                  'Você fica na dúvida na hora H',
                  'Técnicas ultrapassadas',
                ],
                color: '#FF0055',
                bg: 'rgba(255,0,85,0.1)',
                border: 'rgba(255,0,85,0.3)',
              },
              {
                title: '✅ MandaEssa.ai',
                items: [
                  'IA analisa SUA conversa específica',
                  'Resposta em 30 segundos',
                  'A partir de R$39,90/mês',
                  'Sugestões em tempo real',
                  'Atualizada constantemente',
                ],
                color: '#00FF88',
                bg: 'rgba(0,255,136,0.1)',
                border: '#00FF88',
                className: 'scale-105 shadow-[0_20px_40px_rgba(0,255,136,0.2)]',
              },
              {
                title: '❌ Templates Prontos',
                items: [
                  'Todo mundo usa os mesmos',
                  'Não se adapta ao contexto',
                  'Parece robótico e forçado',
                  'Ela percebe que é copy/paste',
                  'Zero personalização',
                ],
                color: '#FF0055',
                bg: 'rgba(255,0,85,0.1)',
                border: 'rgba(255,0,85,0.3)',
              },
            ].map((comp, index) => (
              <div
                key={index}
                className={`p-8 rounded-[20px] border-2 ${comp.className || ''}`}
                style={{ background: comp.bg, borderColor: comp.border }}
              >
                <h3 className="mb-5" style={{ color: comp.color }}>
                  {comp.title}
                </h3>
                <ul className="list-none text-[#B0B0B0]">
                  {comp.items.map((item, i) => (
                    <li key={i} className="py-2">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[rgba(0,0,0,0.8)]" id="pricing">
        <h2 className="text-[clamp(28px,5vw,48px)] font-black text-center mb-16">Escolha Seu Plano</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 max-w-[1000px] mx-auto">
          {[
            {
              name: 'Básico',
              price: 'R$ 39,90/mês',
              features: [
                '20 análises por mês',
                'Sugestões básicas de resposta',
                'Detector de interesse',
                'Suporte via WhatsApp',
                'Atualizações mensais',
              ],
              link: 'https://pay.kiwify.com.br/8FUUpEG',
              button: 'COMEÇAR AGORA',
            },
            {
              name: 'Pro',
              price: 'R$ 97/mês',
              features: [
                '50 análises por mês',
                'Modo Escalada ativado',
                'Ressuscitador de matches',
                'Análise de bio avançada',
                'Templates exclusivos',
                'Suporte prioritário 24/7',
              ],
              link: 'https://pay.kiwify.com.br/0pegT9S',
              button: 'QUERO ESTE',
              featured: true,
            },
            {
              name: 'Premium',
              price: 'R$ 247/mês',
              features: [
                'Análises ILIMITADAS',
                'Todos os recursos Pro',
                'IA personalizada pro seu estilo',
                'Modo Expert ativado',
                'Consultoria 1-1 mensal',
                'Grupo VIP exclusivo',
              ],
              link: 'https://pay.kiwify.com.br/TL2Ixa1',
              button: 'ACESSO VIP',
            },
          ].map((plan, index) => (
            <div
              key={index}
              className={`bg-[rgba(20,20,20,0.95)] p-10 rounded-[20px] border border-[rgba(0,255,136,0.2)] relative transition-all ${
                plan.featured ? 'border-[#00FF88] scale-105 shadow-[0_20px_40px_rgba(0,255,136,0.3)]' : ''
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#00FF88] to-[#00CC6A] text-[#0A0A0A] px-5 py-1 rounded-full text-xs font-bold">
                  MAIS POPULAR
                </div>
              )}
              <div className="text-2xl font-bold text-[#00FF88] mb-2">{plan.name}</div>
              <div className="text-5xl font-black mb-2">
                {plan.price.split('/')[0]}<small className="text-base text-[#B0B0B0] font-normal">/{plan.price.split('/')[1]}</small>
              </div>
              <ul className="list-none my-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="py-2 border-b border-[rgba(255,255,255,0.1)] flex items-center gap-2">
                    <span className="text-[#00FF88] font-bold">✓</span> {feature}
                  </li>
                ))}
              </ul>
              <a
                href={plan.link}
                className="block w-full text-center px-12 py-4 bg-gradient-to-r from-[#00FF88] to-[#00CC6A] text-[#0A0A0A] font-bold text-lg rounded-full hover:shadow-[0_15px_40px_rgba(0,255,136,0.4)] hover:-translate-y-1 transition-all"
              >
                {plan.button}
              </a>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-2xl font-bold text-[#00FF88] mb-5">🔥 Oferta Especial: Plano Vitalício</p>
          <p className="text-lg text-[#B0B0B0] mb-8">Pague uma vez e use para sempre! Economia de mais de 70%</p>
          <div className="inline-block p-8 bg-[rgba(20,20,20,0.95)] rounded-[20px] border-2 border-[#00FF88]">
            <div className="text-xl line-through text-[#B0B0B0]">De R$ 997</div>
            <div className="text-5xl font-black text-[#00FF88]">R$ 297</div>
            <div className="text-base text-[#B0B0B0] mb-5">Pagamento único • Acesso vitalício</div>
            <a
              href="https://pay.kiwify.com.br/0pegT9S"
              className="inline-block px-12 py-4 bg-gradient-to-r from-[#00FF88] to-[#00CC6A] text-[#0A0A0A] font-bold text-lg rounded-full hover:shadow-[0_15px_40px_rgba(0,255,136,0.4)] hover:-translate-y-1 transition-all"
            >
              GARANTIR VITALÍCIO
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[rgba(0,255,136,0.05)] to-[rgba(0,0,0,0.9)]">
        <div className="max-w-[800px] mx-auto text-center">
          <div className="bg-[rgba(20,20,20,0.95)] p-12 rounded-[30px] border-4 border-[#00FF88]">
            <h2 className="text-5xl text-[#00FF88] mb-8">🛡️ Garantia Total</h2>
            <p className="text-2xl font-bold mb-5">7 Dias de Garantia Incondicional</p>
            <p className="text-lg text-[#B0B0B0] mb-8">
              Se em 7 dias você não tiver resultados melhores nas suas conversas, devolvemos 100% do seu dinheiro. Sem
              perguntas, sem burocracia.
            </p>
            <div className="flex justify-center gap-10 flex-wrap">
              {[
                { number: '100%', label: 'Reembolso' },
                { number: '0', label: 'Risco' },
                { number: '7', label: 'Dias' },
              ].map((item, index) => (
                <div key={index}>
                  <div className="text-4xl font-black text-[#00FF88]">{item.number}</div>
                  <div className="text-[#B0B0B0]">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[rgba(0,255,136,0.03)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8 text-center">
            {[
              { number: '2.847', label: 'Usuários Ativos' },
              { number: '47.329', label: 'Conversas Salvas' },
              { number: '93%', label: 'Taxa de Sucesso' },
              { number: '4.9⭐', label: 'Avaliação Média' },
              { number: '24/7', label: 'Disponível' },
              { number: '30s', label: 'Tempo de Resposta' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-5xl font-black text-[#00FF88]">{stat.number}</div>
                <div className="text-[#B0B0B0]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <h2 className="text-[clamp(28px,5vw,48px)] font-black text-center mb-16">Perguntas Frequentes</h2>
        <div className="max-w-[800px] mx-auto">
          {[
            {
              question: 'É realmente uma IA ou são pessoas respondendo?',
              answer:
                'É 100% Inteligência Artificial treinada com milhões de conversas bem-sucedidas. Funciona 24/7 instantaneamente, analisando contexto, tom, timing e criando respostas personalizadas em segundos.',
            },
            {
              question: 'Como funciona o envio das conversas?',
              answer:
                'Super simples! Você tira um print da conversa no app de namoro, envia para nosso WhatsApp e em menos de 30 segundos recebe várias sugestões de resposta com explicação do porquê funcionam.',
            },
            {
              question: 'Funciona para WhatsApp e Instagram também?',
              answer:
                'Sim! Nossa IA analisa conversas de qualquer plataforma: Tinder, Bumble, Happn, WhatsApp, Instagram, Telegram. Se é conversa com intenção romântica, a IA te ajuda.',
            },
            {
              question: 'Vou parecer falso usando as respostas?',
              answer:
                'Não! A IA aprende seu estilo de conversa e adapta as sugestões para soar natural como você. Além disso, você pode personalizar antes de enviar. É como ter um amigo expert te dando dicas, não um roteiro engessado.',
            },
            {
              question: 'E se eu não gostar? Posso cancelar?',
              answer:
                'Claro! Você pode cancelar a qualquer momento direto pelo WhatsApp, sem burocracia. Mas temos 97% de retenção - a maioria dos usuários renovam porque os resultados são reais.',
            },
            {
              question: 'Quanto tempo leva para ver resultados?',
              answer:
                'Logo na primeira conversa você já vai notar a diferença. A maioria dos usuários relata melhora significativa nas respostas já no primeiro dia de uso. Com uma semana, você estará dominando as conversas.',
            },
            {
              question: 'Preciso baixar algum app?',
              answer:
                'Não! Tudo funciona 100% pelo WhatsApp. Você adiciona nosso número, ativa sua conta e já pode começar a enviar prints para receber sugestões. Simples assim!',
            },
            {
              question: 'As respostas são personalizadas ou genéricas?',
              answer:
                'Totalmente personalizadas! Nossa IA analisa o contexto específico da SUA conversa, o tom, o histórico, e cria respostas únicas que fazem sentido naquele momento exato.',
            },
          ].map((faq, index) => (
            <div
              key={index}
              className={`bg-[rgba(20,20,20,0.95)] rounded-[15px] mb-5 border border-[rgba(0,255,136,0.2)] overflow-hidden ${
                activeFaq === index ? 'active' : ''
              }`}
            >
              <div
                className="p-6 cursor-pointer font-bold flex justify-between items-center hover:bg-[rgba(0,255,136,0.05)] transition-all"
                onClick={() => toggleFaq(index)}
              >
                {faq.question}
                <span className={`text-lg transition-transform ${activeFaq === index ? 'rotate-45' : ''}`}>+</span>
              </div>
              <div
                className="overflow-hidden transition-all duration-300 text-[#B0B0B0]"
                style={{ maxHeight: activeFaq === index ? '300px' : '0', padding: activeFaq === index ? '0 25px 25px' : '0 25px' }}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-[rgba(0,255,136,0.1)] to-[rgba(255,0,85,0.05)]">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-[clamp(32px,6vw,56px)] font-black mb-8">
            Chega de Perder Oportunidades<br />
            <span className="text-[#00FF88]">Comece a Converter Matches em Encontros</span>
          </h2>
          <p className="text-xl text-[#B0B0B0] mb-10">
            Junte-se a mais de 2.800 homens que já transformaram sua vida amorosa com o poder da IA
          </p>
          <div className="bg-[rgba(0,255,136,0.1)] border-2 border-[#00FF88] rounded-[20px] p-8 mb-10">
            <p className="text-lg font-bold text-[#00FF88] mb-4">⚡ BÔNUS EXCLUSIVO HOJE</p>
            <ul className="list-none text-left max-w-[500px] mx-auto">
              {[
                '✅ E-book "100 Aberturas que Nunca Falham"',
                '✅ Acesso ao Grupo VIP no Telegram',
                '✅ 10 Análises Extras no Primeiro Mês',
                '✅ Garantia de 7 Dias ou Seu Dinheiro de Volta',
              ].map((bonus, index) => (
                <li key={index} className="py-2">
                  {bonus}
                </li>
              ))}
            </ul>
          </div>
          <a
            href="https://pay.kiwify.com.br/0pegT9S"
            className="inline-block px-16 py-5 bg-gradient-to-r from-[#00FF88] to-[#00CC6A] text-[#0A0A0A] font-bold text-xl rounded-full hover:shadow-[0_15px_40px_rgba(0,255,136,0.4)] hover:-translate-y-1 transition-all"
          >
            QUERO ACESSO IMEDIATO
          </a>
          <p className="mt-5 text-sm text-[#B0B0B0]">
            🔒 Pagamento 100% seguro • 🚀 Acesso liberado em 2 minutos • 💬 Tudo via WhatsApp
          </p>
        </div>
      </section>

      <footer className="py-10 bg-[#0A0A0A] border-t border-[rgba(0,255,136,0.2)]">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="flex justify-center gap-8 mb-5 flex-wrap">
            {[
              { text: 'Termos de Uso', onClick: () => showModal('terms') },
              { text: 'Política de Privacidade', onClick: () => showModal('privacy') },
              { text: 'Suporte', href: 'mailto:suporte@mandaessa.ai' },
              { text: 'Contato', href: 'https://wa.me/558588395773' },
            ].map((link, index) => (
              <a
                key={index}
                href={link.href || '#'}
                onClick={link.onClick ? (e) => { e.preventDefault(); link.onClick(); } : undefined}
                className="text-[#B0B0B0] text-sm hover:text-[#00FF88] transition-colors"
              >
                {link.text}
              </a>
            ))}
          </div>
          <p className="text-sm text-[#B0B0B0]">© 2025 MandaEssa.ai - Todos os direitos reservados</p>
          <div className="mt-8 pt-8 border-t border-[rgba(255,255,255,0.1)] text-[#666] text-xs leading-relaxed">
            <p>
              <strong>Aviso Legal:</strong> Os resultados podem variar de pessoa para pessoa. O MandaEssa.ai é uma ferramenta
              de assistência para comunicação e não garante resultados específicos em relacionamentos. Nosso serviço oferece
              sugestões baseadas em inteligência artificial para melhorar suas habilidades de conversação. O sucesso depende de
              diversos fatores incluindo seu perfil, fotos, e compatibilidade com os matches. Este produto não deve ser usado
              para fins inadequados, assédio ou qualquer forma de comunicação não consensual. Ao usar nosso serviço, você
              concorda em respeitar todas as pessoas com quem interage e usar as sugestões de forma ética e respeitosa. Não
              nos responsabilizamos por uso indevido da ferramenta. Para mais informações, consulte nossos Termos de Uso
              completos.
            </p>
            <p className="mt-4">
              <strong>Política de Reembolso:</strong> Oferecemos garantia de 7 dias. Se não ficar satisfeito, devolvemos 100%
              do seu dinheiro.
            </p>
            <p className="mt-4 text-[#555]">
              Este site não é afiliado ao Facebook, Instagram, WhatsApp ou qualquer plataforma de namoro mencionada. Todos os
              nomes de produtos, logos e marcas pertencem aos seus respectivos proprietários.
            </p>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/558588395773?text=Quero%20saber%20mais%20sobre%20o%20MandaEssa.ai"
        className="fixed bottom-8 right-8 bg-[#25D366] w-16 h-16 rounded-full flex items-center justify-center text-white text-3xl shadow-[0_10px_30px_rgba(37,211,102,0.5)] hover:scale-110 transition-all animate-[whatsappPulse_2s_infinite] z-[1000]"
      >
        💬
      </a>

      {modal === 'terms' && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.9)] z-[10000] overflow-y-auto">
          <div className="max-w-[800px] mx-auto my-12 bg-[rgba(20,20,20,0.95)] p-10 rounded-[20px]">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-[#00FF88] text-3xl">Termos de Uso</h2>
              <span className="cursor-pointer text-3xl text-[#B0B0B0]" onClick={closeModal}>
                &times;
              </span>
            </div>
            <div className="text-[#B0B0B0] leading-relaxed">
              <h3 className="text-lg font-bold">1. Aceitação dos Termos</h3>
              <p>Ao utilizar o MandaEssa.ai, você concorda com estes Termos de Uso. Se não concordar, não utilize nossos serviços.</p>
              <h3 className="text-lg font-bold mt-4">2. Descrição do Serviço</h3>
              <p>
                O MandaEssa.ai é um serviço de inteligência artificial que fornece sugestões de conversação para melhorar suas
                habilidades de comunicação em contextos românticos.
              </p>
              <h3 className="text-lg font-bold mt-4">3. Uso Apropriado</h3>
              <p>Você concorda em usar o serviço de forma ética e respeitosa. É proibido usar para:</p>
              <ul className="list-disc pl-5">
                <li>Assédio ou comportamento inadequado</li>
                <li>Enganar ou manipular outras pessoas</li>
                <li>Violar leis locais ou direitos de terceiros</li>
                <li>Compartilhar conteúdo ofensivo ou ilegal</li>
              </ul>
              <h3 className="text-lg font-bold mt-4">4. Privacidade e Dados</h3>
              <p>Respeitamos sua privacidade. Não armazenamos conversas pessoais. Prints enviados são processados e deletados automaticamente.</p>
              <h3 className="text-lg font-bold mt-4">5. Pagamento e Reembolso</h3>
              <p>Oferecemos garantia de 7 dias. Cancelamentos podem ser feitos a qualquer momento via WhatsApp.</p>
              <h3 className="text-lg font-bold mt-4">6. Limitação de Responsabilidade</h3>
              <p>
                O MandaEssa.ai não se responsabiliza por resultados específicos ou pelo uso indevido do serviço. O sucesso depende de fatores individuais.
              </p>
            </div>
          </div>
        </div>
      )}

      {modal === 'privacy' && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.9)] z-[10000] overflow-y-auto">
          <div className="max-w-[800px] mx-auto my-12 bg-[rgba(20,20,20,0.95)] p-10 rounded-[20px]">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-[#00FF88] text-3xl">Política de Privacidade</h2>
              <span className="cursor-pointer text-3xl text-[#B0B0B0]" onClick={closeModal}>
                &times;
              </span>
            </div>
            <div className="text-[#B0B0B0] leading-relaxed">
              <h3 className="text-lg font-bold">1. Coleta de Dados</h3>
              <p>
                Coletamos apenas os dados necessários para fornecer o serviço, como prints de conversas enviados pelo usuário,
                que são processados e deletados automaticamente.
              </p>
              <h3 className="text-lg font-bold mt-4">2. Uso dos Dados</h3>
              <p>Os dados são usados exclusivamente para gerar sugestões de respostas e melhorar o serviço. Não compartilhamos seus dados com terceiros.</p>
              <h3 className="text-lg font-bold mt-4">3. Segurança</h3>
              <p>
                Empregamos medidas de segurança robustas para proteger seus dados durante o processamento. Todas as interações
                são criptografadas.
              </p>
              <h3 className="text-lg font-bold mt-4">4. Seus Direitos</h3>
              <p>Você tem o direito de acessar, corrigir ou solicitar a exclusão de seus dados a qualquer momento.</p>
              <h3 className="text-lg font-bold mt-4">5. Contato</h3>
              <p>
                Para dúvidas sobre privacidade, entre em contato via{' '}
                <a href="mailto:suporte@mandaessa.ai" className="text-[#00FF88]">
                  suporte@mandaessa.ai
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpanishMemoryLanding;
