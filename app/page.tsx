"use client";

import Image from "next/image";
import { useState } from "react";

const CTA_LINK =
  "https://mancekt.com/yayforms-estetica/?country=BR&fbp=fb.1.1782168737044.50069969987360136&ct=trescoroas&st=rs&zp=95660&client_ip=2804%3A30c%3A130b%3A8101%3A344f%3Aa531%3Acb33%3Ab15d";

function DividerDown() {
  return (
    <div className="diagonal-divider">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="divider-svg" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0,0 L 1440,0 L 1440,10 L 936,10 L 648,100 L 0,100 Z" fill="#f3f3f3" />
        <path d="M 0,120 L 1440,120 L 1440,10 L 936,10 L 648,100 L 0,100 Z" fill="#ffffff" />
        <path d="M 0,100 L 648,100 L 936,10 L 1440,10" stroke="#e0e0e0" strokeWidth="2.5" fill="none" />
        <path d="M 0,92 L 646,92 L 934,2 L 1440,2" stroke="#f0f0f0" strokeWidth="1" fill="none" />
      </svg>
    </div>
  );
}

function DividerToLight() {
  return (
    <div className="diagonal-divider">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="divider-svg" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0,0 L 1440,0 L 1440,10 L 936,10 L 648,100 L 0,100 Z" fill="#ffffff" />
        <path d="M 0,120 L 1440,120 L 1440,10 L 936,10 L 648,100 L 0,100 Z" fill="#f3f3f3" />
        <path d="M 0,100 L 648,100 L 936,10 L 1440,10" stroke="#e0e0e0" strokeWidth="2.5" fill="none" />
        <path d="M 0,92 L 646,92 L 934,2 L 1440,2" stroke="#f0f0f0" strokeWidth="1" fill="none" />
      </svg>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <a href="#" className="logo-link">
          <Image src="/assets/logo.png" alt="Mancekt Logo" width={32} height={32} className="logo-img" />
          <span className="logo-text">Mancekt</span>
        </a>
        <a href={CTA_LINK} className="nav-btn-conversar">
          Quero conversar
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-grid-container">
        <div className="hero-content">
          <div className="hero-meta-tag">
            <span className="meta-label">Para escritórios e representantes de consórcio que dependem de indicação</span>
          </div>

          <h1 className="hero-title">
            Seu escritório está no setor que bateu recorde em 2025.
            <span className="hero-title-sub">
              O problema nunca foi mercado. <span className="gradient-text">É&nbsp;qualificação de lead.</span>
            </span>
          </h1>

          <p className="hero-subtitle">
            Os clientes certos para fechar consórcio precisam chegar até você. Não até o seu concorrente.
            Enquanto você espera indicação, tem representante fechando cota que podia ser sua.{" "}
            <strong>A Mancekt constrói o sistema que muda isso.</strong>
          </p>

          <div className="hero-ctas">
            <a href={CTA_LINK} className="btn-primary" style={{ whiteSpace: "nowrap" }}>
              Quero ter controle sobre minhas vendas
            </a>
            <span className="cta-secondary-text">Diagnóstico gratuito em menos de 5 minutos</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="image-wrapper">
            <Image
              src="/assets/hero-consultor.png"
              alt="Consultor de consórcio"
              fill
              className="hero-aesthetic-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stats-header">
          <div className="section-pill">O Mercado</div>
          <h2 className="stats-main-title">O único mercado que bate recorde mesmo com juros altos</h2>
          <p className="stats-intro">
            Enquanto outros setores encolhem, o consórcio avança. O setor bateu recorde em 2025: R$500 bilhões em
            créditos comercializados e 12,7 milhões de participantes ativos, o maior número da história.
          </p>
          <p className="stats-intro">
            Cresceu 32% em créditos comercializados no último ano. O segmento de imóveis, o de maior ticket médio e
            maior comissão, cresceu 48,4%. E a projeção é que o setor ultrapasse R$1 trilhão em créditos até 2029.
          </p>
        </div>

        <div className="stats-group-mancekt">
          <div className="mancekt-stat-col">
            <span className="mancekt-stat-val">5,16M</span>
            <span className="mancekt-stat-lbl">cotas vendidas em 2025,<br />alta de 15%</span>
          </div>
          <div className="mancekt-stat-col">
            <span className="mancekt-stat-val">R$500bi</span>
            <span className="mancekt-stat-lbl">em créditos comercializados,<br />alta de 32%</span>
          </div>
          <div className="mancekt-stat-col">
            <span className="mancekt-stat-val">12,7M</span>
            <span className="mancekt-stat-lbl">participantes ativos,<br />recorde histórico</span>
          </div>
          <div className="mancekt-stat-col">
            <span className="mancekt-stat-val">R$1tri</span>
            <span className="mancekt-stat-lbl">projeção de créditos<br />até 2029</span>
          </div>
        </div>

        <div className="stats-transition">
          <p>Mas se o mercado é tão bom assim, por que sua comissão não reflete isso?</p>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const cards = [
    {
      title: "A ilusão da indicação",
      text: "Depender do boca a boca é aceitar que o crescimento do seu escritório está nas mãos dos outros. Networking não escala e não é previsível.",
    },
    {
      title: "Desperdício de tempo comercial",
      text: "Seu vendedor perde a manhã respondendo curioso que só quer saber a taxa, sem perfil, urgência ou condição real de fechar cota.",
    },
    {
      title: "O funil furado de curiosos",
      text: "A maioria dos contatos que chegam por anúncio genérico de consórcio é de curioso que pergunta preço e some, queimando verba e gerando frustração comercial.",
    },
    {
      title: "Falta de aprendizado do sistema",
      text: "Sem uma triagem qualificada na entrada, o algoritmo não aprende quem são seus clientes reais e continua gastando seu dinheiro com o público errado.",
    },
  ];

  return (
    <section className="problem-section">
      <div className="problem-container">
        <div className="problem-header">
          <div className="section-badge">O Problema Real</div>
          <h2 className="problem-main-title">Por que esperar indicação não está enchendo sua carteira de cotas?</h2>
          <p>
            Você prospecta quando a agenda está vazia e para quando está cheia. O resultado é uma comissão instável,
            um mês bom e dois meses ruins, enquanto o mercado inteiro cresce ao seu redor.
          </p>
        </div>

        <div className="problem-grid-symmetrical">
          {cards.map((c) => (
            <div key={c.title} className="why-card">
              <h4>
                <span>❌</span> {c.title}
              </h4>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solution() {
  const leads = [
    { name: "Ricardo M.", details: "Consórcio de Imóvel · R$ 450.000", score: "940", scoreClass: "high" },
    { name: "Fernanda A.", details: "Consórcio de Veículo · R$ 90.000", score: "890", scoreClass: "high" },
    { name: "João P.", details: "Consórcio de Imóvel · R$ 620.000", score: "970", scoreClass: "exceptional" },
    { name: "Marina S.", details: "Consórcio de Veículo · R$ 110.000", score: "910", scoreClass: "high" },
  ];

  return (
    <section className="solution-section">
      <div className="solution-container">
        <div className="solution-grid">
          <div>
            <div className="solution-badge">A Solução</div>
            <h2 className="solution-title">Conheça o sistema de marketing inteligente para consórcio</h2>
            <p className="solution-p">
              É o sistema proprietário da Mancekt que une tráfego pago, inteligência artificial e automação para
              entregar ao seu comercial apenas quem tem real potencial de fechar cota.
            </p>
            <p className="solution-p highlight-p">
              Antes de qualquer lead chegar ao seu WhatsApp, ele responde algumas perguntas rápidas. Nossa IA estuda
              cada resposta e faz o trabalho que hoje consome horas da sua equipe: separa quem é cliente de verdade
              de quem é curioso.
            </p>
            <p className="solution-p" style={{ marginBottom: 12 }}>
              <strong>Na prática, três coisas acontecem:</strong>
            </p>
            <ul className="solution-list">
              <li>
                <strong>1. Prioridade Total:</strong> o lead pronto para fechar cota cai no WhatsApp da sua equipe na
                hora. Ele quer fechar, e você atende antes do concorrente.
              </li>
              <li>
                <strong>2. Nutrição Inteligente:</strong> o lead interessado mas ainda em dúvida recebe conteúdo
                automático que quebra as objeções dele, até estar pronto. Ele não some, ele volta.
              </li>
              <li>
                <strong>3. Filtro de Curiosos:</strong> quem só quer saber a taxa nem chega a tocar na sua equipe.
                Seu vendedor para de perder tempo com quem nunca ia fechar.
              </li>
            </ul>
            <div>
              <a href={CTA_LINK} className="btn-primary">
                Quero ter controle sobre minhas vendas
              </a>
            </div>
          </div>

          <div className="solution-visual-col">
            <div className="macbook-container">
              <Image
                src="/assets/macbook-realistic.png"
                alt="Mockup MacBook Pro"
                width={800}
                height={520}
                className="macbook-frame-img"
              />
              <div className="macbook-inner-screen">
                <div className="macbook-screen-content">
                  <div className="dash-header">
                    <div className="dash-logo">Mancekt Intelligence</div>
                    <div className="dash-status">
                      <span className="status-dot pulsing" /> 7 novos leads qualificados hoje
                    </div>
                  </div>
                  <div className="dash-leads-list">
                    {leads.map((l) => (
                      <div key={l.name} className="dash-lead-card">
                        <div>
                          <div className="lead-name">{l.name}</div>
                          <div className="lead-details">{l.details}</div>
                        </div>
                        <div className="lead-score">
                          <span className="score-label">Score</span>
                          <span className={`score-value ${l.scoreClass}`}>{l.score}</span>
                        </div>
                        <div className="lead-status">Pronto p/ fechar</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const cards = [
    {
      title: "1. Anúncio Certo",
      text: "Nada de anúncio genérico caçando clique barato. Criamos campanhas que falam direto com quem já quer fechar cota de imóvel ou veículo.",
      icon: (
        <svg viewBox="0 0 24 24" width="52" height="52" stroke="url(#g1)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="6"></circle>
          <circle cx="12" cy="12" r="2"></circle>
          <defs>
            <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7b0099" />
              <stop offset="100%" stopColor="#e60073" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      title: "2. Filtro Inteligente",
      text: "Antes de cair no WhatsApp, o lead responde perguntas rápidas. Nossa IA lê perfil, comportamento e sinais de compra em segundos.",
      icon: (
        <svg viewBox="0 0 24 24" width="52" height="52" stroke="url(#g2)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"></path>
          <defs>
            <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7b0099" />
              <stop offset="100%" stopColor="#e60073" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      title: "3. Lead de Bandeja",
      text: "Pronto para fechar, precisa de nutrição ou fora do perfil. Automático. Chega organizado no seu painel com o próximo passo indicado.",
      icon: (
        <svg viewBox="0 0 24 24" width="52" height="52" stroke="url(#g3)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
          <polyline points="9 16 11 18 15 14"></polyline>
          <defs>
            <linearGradient id="g3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7b0099" />
              <stop offset="100%" stopColor="#e60073" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      title: "4. Efeito Aprendizado",
      text: "Nossa IA estuda os dados do seu escritório para ensinar o próprio anúncio a buscar quem tem o mesmo perfil de quem fecha cota com você.",
      icon: (
        <svg viewBox="0 0 24 24" width="52" height="52" stroke="url(#g4)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="5" r="3"></circle>
          <circle cx="5" cy="19" r="3"></circle>
          <circle cx="19" cy="19" r="3"></circle>
          <line x1="8.5" y1="16.5" x2="10.5" y2="7.5"></line>
          <line x1="15.5" y1="16.5" x2="13.5" y2="7.5"></line>
          <line x1="8" y1="19" x2="16" y2="19"></line>
          <defs>
            <linearGradient id="g4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7b0099" />
              <stop offset="100%" stopColor="#e60073" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
  ];

  return (
    <section className="process-section">
      <div className="process-container">
        <div className="process-header">
          <div className="section-badge">Como Funciona</div>
          <h2 className="process-title">Imagine seu WhatsApp só recebendo lead pronto pra fechar cota</h2>
          <p className="process-subtitle">
            A maioria das soluções de marketing entrega conversa barata e curioso. O que diferencia o sistema da
            Mancekt é o processo inteligente que filtra e qualifica antes de chegar no seu comercial.
          </p>
        </div>

        <div className="process-grid">
          {cards.map((c, i) => (
            <>
              <div key={c.title} className="process-card">
                <div className="process-card-visual">{c.icon}</div>
                <div className="process-card-info">
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </div>
              </div>
              {i < cards.length - 1 && (
                <div key={`arrow-${i}`} className="process-trail-arrow">
                  <ArrowIcon />
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

function Learning() {
  return (
    <section className="learning-section">
      <div className="learning-container">
        <div className="learning-grid">
          <div className="learning-card">
            <div className="learning-badge">A Inteligência</div>
            <h3>O sistema aprende com o tempo</h3>
            <p>
              Cada lead que passa pelo sistema gera dados. Com o tempo, a inteligência artificial passa a reconhecer
              com precisão quem fecha consórcio com você, em que momento e por qual razão. Isso não pertence a
              nenhuma plataforma. Pertence ao seu escritório.
            </p>
          </div>
          <div className="learning-card">
            <div className="learning-badge">Ativo Comercial</div>
            <h3>Um ativo único do seu negócio</h3>
            <p>
              O sistema é construído em cima do comportamento de compra do seu cliente de consórcio específico. Não
              é um modelo pronto tirado de uma prateleira. Não dá pra copiar do escritório vizinho. E vai valendo
              mais a cada dia que opera.
            </p>
          </div>
        </div>
        <div className="learning-cta">
          <a href={CTA_LINK} className="btn-primary">
            Quero conhecer o sistema
          </a>
        </div>
      </div>
    </section>
  );
}

function Performance() {
  return (
    <section className="performance-section">
      <div className="performance-container">
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <div className="section-badge">Mancekt vs Mercado</div>
          <h2 style={{ fontSize: 30, fontWeight: 700, color: "var(--text-dark)", letterSpacing: "-0.02em" }}>
            O impacto direto na comissão do seu escritório
          </h2>
          <p style={{ fontSize: 16, color: "var(--text-gray)", maxWidth: 600, margin: "15px auto 0", lineHeight: 1.6 }}>
            Comparativo real entre a captação tradicional (indicação e anúncio genérico) e o sistema de marketing
            inteligente da Mancekt.
          </p>
        </div>

        <div className="charts-grid">
          <div className="chart-card">
            <h3>Custo por Lead Qualificado (CAC)</h3>
            <div className="bar-row">
              <div className="bar-label-row">
                <span style={{ color: "var(--text-gray)", fontWeight: 500 }}>Indicação / Anúncio Genérico</span>
                <span style={{ color: "#d32f2f", fontWeight: 600 }}>R$ 48</span>
              </div>
              <div className="bar-track">
                <div className="bar-fill" style={{ background: "linear-gradient(90deg, #ff5252, #ff1744)", width: "100%" }} />
              </div>
            </div>
            <div className="bar-row">
              <div className="bar-label-row">
                <span style={{ color: "var(--text-dark)", fontWeight: 600 }}>Sistema Mancekt</span>
                <span style={{ color: "#7b0099", fontWeight: 700 }}>R$ 12</span>
              </div>
              <div className="bar-track">
                <div className="bar-fill" style={{ background: "var(--grad)", width: "25%" }} />
              </div>
            </div>
            <p className="note">
              No modelo tradicional você paga por cliques e curiosos no WhatsApp. Com o sistema Mancekt, o filtro
              inteligente reduz o custo do comercial concentrando o tempo apenas em quem realmente pode fechar cota.
            </p>
          </div>

          <div className="chart-card">
            <h3>Aproveitamento Comercial (% de Cotas Fechadas)</h3>
            <div className="bar-row">
              <div className="bar-label-row">
                <span style={{ color: "var(--text-gray)", fontWeight: 500 }}>Padrão do Mercado</span>
                <span style={{ color: "var(--text-gray)", fontWeight: 600 }}>7% de conversão</span>
              </div>
              <div className="bar-track">
                <div className="bar-fill" style={{ background: "#bdbdbd", width: "25%" }} />
              </div>
            </div>
            <div className="bar-row">
              <div className="bar-label-row">
                <span style={{ color: "var(--text-dark)", fontWeight: 600 }}>Com Filtro e Qualificação Mancekt</span>
                <span style={{ color: "#7b0099", fontWeight: 700 }}>28% de conversão</span>
              </div>
              <div className="bar-track">
                <div className="bar-fill" style={{ background: "var(--grad)", width: "100%" }} />
              </div>
            </div>
            <p className="note">
              A maioria dos escritórios perde venda porque o vendedor demora a responder ou o lead é frio. O sistema
              Mancekt entrega lead quente, qualificado e pronto para fechar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Evolution() {
  return (
    <section className="evolution-section">
      <div className="evolution-container">
        <div className="evolution-header">
          <div className="section-badge">O Processo</div>
          <h2 className="evolution-title">Como construímos e evoluímos sua máquina de vendas.</h2>
        </div>
        <div className="evolution-grid">
          <div className="evo-column">
            <div className="evo-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="9" y1="3" x2="9" y2="21"></line>
                <line x1="15" y1="3" x2="15" y2="21"></line>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="3" y1="15" x2="21" y2="15"></line>
              </svg>
            </div>
            <h3>1. Construção</h3>
            <p>
              Levantamos o seu perfil de cliente ideal, definimos quais sinais mostram que alguém está pronto para
              fechar cota, mapeamos a jornada do primeiro contato até a venda e configuramos o sistema. Tudo baseado
              em dados. <strong>Investimento único nesta etapa.</strong>
            </p>
          </div>
          <div className="evo-column">
            <div className="evo-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M23 6l-9.5 9.5-5-5L1 18"></path>
                <polyline points="17 6 23 6 23 12"></polyline>
              </svg>
            </div>
            <h3>2. Evolução contínua</h3>
            <p>
              Com o sistema no ar, acompanhamos, ajustamos e melhoramos diariamente. A inteligência artificial
              analisa o comportamento dos leads em tempo real, a gente interpreta os dados e calibra a estratégia.
              Quanto mais opera, mais preciso fica. <strong>Valor fixo mensal.</strong>
            </p>
          </div>
        </div>
        <div className="evolution-cta">
          <a href={CTA_LINK} className="btn-primary">
            Quero construir meu sistema
          </a>
        </div>
      </div>
    </section>
  );
}

function WhyMancekt() {
  const items = [
    {
      emoji: "💼",
      title: "Seu comercial volta a vender",
      text: "Chega de vendedor gastando o dia respondendo \"quanto é a taxa?\" para quem nunca ia fechar. Ele só fala com quem tem real chance de assinar a cota.",
    },
    {
      emoji: "🎯",
      title: "Para de queimar verba com curioso",
      text: "Nossa IA estuda os dados do seu escritório e direciona cada real do seu anúncio para quem tem perfil de fechar consórcio, ficando mais certeira semana após semana.",
    },
    {
      emoji: "⚡",
      title: "Nenhum lead bom esfria na fila",
      text: "Do clique no anúncio até o WhatsApp da sua equipe, tudo acontece em segundos, de forma automática. Enquanto o concorrente demora horas para responder, você já fechou.",
    },
    {
      emoji: "📊",
      title: "Você enxerga o que importa",
      text: "Nada de relatório cheio de clique e impressão. Você vê o número que paga suas contas: quantos leads com perfil entraram esse mês e quanto custou cada um.",
    },
  ];

  return (
    <section className="cases-section">
      <div className="cases-container">
        <div className="cases-header">
          <div className="section-badge">Por Que a Mancekt</div>
          <h2>Escritório de indicação te entrega conversa. Nós entregamos cota fechada.</h2>
          <p>Qualquer agência consegue encher seu WhatsApp. A pergunta é: de quê?</p>
        </div>

        <div className="why-mancekt-grid">
          {items.map((it) => (
            <div key={it.title} className="why-card">
              <h4>
                <span>{it.emoji}</span> {it.title}
              </h4>
              <p>{it.text}</p>
            </div>
          ))}
        </div>

        <div className="cases-footer">
          <p>Enquanto outras agências comemoram lead barato, a gente comemora uma coisa: cota fechada.</p>
          <a href={CTA_LINK} className="btn-primary">
            Quero o mesmo para o meu escritório
          </a>
        </div>
      </div>
    </section>
  );
}

function Investment() {
  const items = [
    "Condição comercial de fundador (quem entra depois paga mais pelo mesmo sistema)",
    "Implementação acompanhada pessoalmente pela nossa equipe estratégica",
    "Prioridade vitalícia em toda evolução do sistema",
    "Mapeamento do perfil do seu cliente ideal e jornada do anúncio ao WhatsApp",
    "Filtro inteligente com inteligência artificial",
    "Campanha de tráfego ativa e monitoramento diário",
  ];

  return (
    <section className="investment-section">
      <div className="investment-container">
        <div className="investment-grid">
          <div className="investment-content">
            <div className="section-badge">Investimento Seguro</div>
            <h2>Antes de falar em investimento, faz uma conta rápida.</h2>
            <p className="investment-intro">
              Quantas cotas você deixou de fechar esse mês por falta de lead qualificado? Multiplica isso pela sua
              comissão média. Esse número, que aparece todo mês e nunca entra na planilha, é o custo real de
              continuar sem sistema. O investimento na Mancekt existe pra eliminar esse custo de vez.
            </p>
            <p className="investment-intro" style={{ fontWeight: 500, color: "var(--text-dark)" }}>
              Não trabalhamos com dois escritórios concorrentes na mesma região. Cada região tem uma única vaga.
              Quem entra primeiro, fecha a porta.
            </p>

            <ul className="investment-list">
              {items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>

            <div className="investment-pricing-box" style={{ textAlign: "center" }}>
              <h4>Vaga Exclusiva por Região</h4>
              <p>Construção única + acompanhamento mensal fixo. Sem contrato de 12 meses. Sem taxa de cancelamento.</p>
              <a href={CTA_LINK} className="btn-primary">
                Quero garantir a vaga da minha região
              </a>
            </div>
          </div>

          <div className="guarantee-box">
            <div className="guarantee-badge">Garantia Incondicional</div>
            <h3>Garantia de 30 Dias</h3>
            <p>
              E se em 30 dias de sistema no ar você não enxergar clareza total sobre quem está entrando, em que
              etapa está e o que falta pra fechar, a gente devolve o valor do primeiro mês. Sem burocracia. Sem
              questionamento.
            </p>
            <p className="guarantee-highlight">
              Você não está apostando no sistema. Está apostando no crescimento do seu escritório, e a gente assume
              o risco junto.
            </p>

            <div className="guarantee-fomo">
              <h4>Pense no cenário daqui a 6 meses...</h4>
              <p>
                O mercado de consórcio vai continuar batendo recorde. Os clientes bons da sua região vão continuar
                clicando em anúncio. A única pergunta é: no WhatsApp de quem eles vão cair? No seu, ou no do
                escritório que se candidatou antes de você?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Diagnostic() {
  return (
    <section className="diagnostic-section">
      <div className="diagnostic-container">
        <div className="diagnostic-content">
          <div className="section-badge">Diagnóstico Grátis</div>
          <h2>Antes de qualquer decisão, entenda onde está o gargalo do seu escritório hoje.</h2>
          <p>
            Responda algumas perguntas rápidas sobre o seu processo atual de geração de clientes de consórcio e a
            gente te mostra, sem custo e sem compromisso, onde estão as maiores oportunidades de melhoria.
          </p>
          <a href={CTA_LINK} className="btn-primary">
            Quero meu diagnóstico gratuito
          </a>
        </div>
      </div>
    </section>
  );
}

const FAQ_ITEMS = [
  {
    q: "1. Isso funciona para consórcio de imóvel e de veículo?",
    a: "Sim. O sistema é desenhado para qualquer modalidade de consórcio, imóvel, veículo, pesados e afins. Quanto maior o ticket, maior o impacto da qualificação.",
  },
  {
    q: "2. Já tenho uma agência de tráfego. Faz sentido?",
    a: "Depende. Se sua agenda está cheia de clientes com perfil, não. Se seu WhatsApp está cheio de curiosos, sim. O problema que resolvemos não é atrair gente. É atrair a gente certa.",
  },
  {
    q: "3. Preciso ter uma equipe de vendas para contratar?",
    a: "Não. O sistema entrega os leads qualificados e prontos para conversa comercial direto no WhatsApp da sua equipe, com todo o contexto. Você pode começar sozinho.",
  },
  {
    q: "4. Funciona pra representante autônomo ou só pra escritório grande?",
    a: "Funciona pros dois. O que muda é o volume de leads que o sistema entrega, ajustado ao seu ritmo de atendimento.",
  },
  {
    q: "5. Em quanto tempo vejo resultado?",
    a: "A fase de construção leva entre 2 e 3 semanas. As primeiras semanas são de calibragem: o sistema aprende o perfil do seu cliente ideal. Os primeiros leads já chegam na primeira semana de operação.",
  },
  {
    q: "6. Qual a diferença de contratar a Mancekt e um gestor de tráfego?",
    a: "Um gestor de tráfego cuida da campanha. A Mancekt cuida do processo inteiro: qualificação dos leads, automação, dashboards de controle, jornada estruturada e acompanhamento diário.",
  },
  {
    q: "7. E se eu não tiver resultados no primeiro mês?",
    a: "Se em 30 dias você não enxergar clareza total sobre quem está entrando, em que etapa está e o que falta para fechar, a gente devolve o valor do primeiro mês. Sem burocracia. Sem questionamento.",
  },
  {
    q: "8. Quantos escritórios vocês atendem ao mesmo tempo?",
    a: "Trabalhamos com uma única vaga por região. Não por limitação de capacidade, mas porque cada sistema precisa de atenção real pra funcionar de verdade.",
  },
  {
    q: "9. Qual o investimento?",
    a: "O modelo é construção única mais acompanhamento mensal fixo. O valor varia de acordo com o tamanho e volume do seu escritório. A conversa inicial serve pra apresentar uma proposta específica pra você.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-section-title">Perguntas Frequentes</h2>
        <div className="faq-list">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={item.q}
              className={`faq-item${open === i ? " active" : ""}`}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="faq-question">
                <h3>{item.q}</h3>
                <span className="faq-toggle">+</span>
              </div>
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="closing-section">
      <div className="closing-container">
        <h2>Daqui a 6 meses, um escritório da sua região vai estar com a carteira cheia. A pergunta é se vai ser o seu.</h2>
        <p style={{ marginBottom: 20 }}>
          O mercado de consórcio vai continuar batendo recorde até 2029. Isso é fato. Os clientes bons vão aparecer.
          Isso também é fato. O que não está decidido é para onde eles vão.
        </p>
        <p style={{ marginBottom: 30, fontSize: 16, color: "var(--text-gray)", lineHeight: 1.6 }}>
          Toda semana que passa, algum escritório da sua região profissionaliza a captação enquanto os outros seguem
          no boca a boca e na indicação. E quando o cliente bom cria o hábito de fechar com o concorrente, ele não
          volta. Ele indica os amigos pra lá. Você pode fechar esta página e continuar como está. Ou pode gastar 5
          minutos agora e descobrir se a vaga da sua região ainda está aberta.
        </p>
        <a href={CTA_LINK} className="btn-primary">
          Verificar se minha região ainda está disponível
        </a>
        <span className="cta-secondary-text" style={{ textAlign: "center", paddingLeft: 0, marginTop: 12 }}>
          Diagnóstico gratuito. Menos de 5 minutos. Um escritório por região, sem exceção.
        </span>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© 2026 Mancekt. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="hero-wrapper">
      <Header />
      <Hero />
      <DividerDown />
      <Stats />
      <Problem />
      <Solution />
      <DividerToLight />
      <HowItWorks />
      <Learning />
      <DividerDown />
      <Performance />
      <Evolution />
      <WhyMancekt />
      <Investment />
      <Diagnostic />
      <FAQ />
      <Closing />
      <Footer />
    </main>
  );
}
