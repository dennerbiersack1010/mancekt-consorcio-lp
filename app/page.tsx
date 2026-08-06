"use client";

import Image from "next/image";
import { useState } from "react";

const CTA_LINK =
  "https://mancekt.com/yayforms-estetica/?country=BR&fbp=fb.1.1782168737044.50069969987360136&ct=trescoroas&st=rs&zp=95660&client_ip=2804%3A30c%3A130b%3A8101%3A344f%3Aa531%3Acb33%3Ab15d";

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
      <div className="container">
        <div className="hero-content">
          <div className="hero-meta-tag">
            <span className="meta-num">2025</span>
            <span className="meta-label">R$500 bi em créditos comercializados · 12,7M participantes ativos</span>
          </div>
          <h1 className="hero-title">
            Sistema de Marketing Inteligente para <span className="gradient-text">Escritórios de Consórcio</span>
          </h1>
          <p className="hero-subtitle">
            Os clientes certos para fechar consórcio precisam chegar até você. Não até o seu concorrente.
            Enquanto você espera indicação, tem representante de consórcio na sua cidade fechando cota que
            podia ser sua. <strong>A Mancekt constrói o sistema que muda isso.</strong>
          </p>
          <div className="hero-ctas">
            <a href={CTA_LINK} className="btn-primary btn-primary-lg">
              Quero ter controle sobre minhas vendas
            </a>
          </div>
          <ul className="hero-feature-list">
            <li>100% baseado em dados do seu escritório</li>
            <li>Diário acompanhamento e ajustes contínuos</li>
            <li>IA qualificação inteligente de cada lead</li>
            <li>Único sistema construído para o seu negócio de consórcio</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const cards = [
    {
      title: "Comissão instável",
      text: "Um mês bom e dois meses ruins. Você nunca sabe qual vem a seguir.",
    },
    {
      title: "Mercado batendo recorde",
      text: "32% de crescimento em créditos comercializados no último ano. Enquanto isso, outro escritório está fechando as cotas que você deixou passar.",
    },
    {
      title: "Indicação não escala",
      text: "Networking não é previsível. Depender do boca a boca é aceitar que o crescimento do seu escritório está nas mãos dos outros.",
    },
    {
      title: "O custo que não entra na planilha",
      text: "Quantas cotas você deixou de fechar esse mês por falta de lead qualificado? Multiplica pela comissão média.",
      dark: true,
    },
  ];

  return (
    <section className="problem-section">
      <div className="container">
        <span className="section-badge">O problema</span>
        <h2 className="section-title">
          Sem um sistema estruturado, você está sempre começando do zero.
          <br />E o concorrente que já tem sistema não está.
        </h2>
        <p className="problem-p">
          Cada mês é uma corrida: de onde vão vir as próximas cotas fechadas? Você prospecta quando a
          agenda está vazia e para de prospectar quando está cheia.
        </p>
        <div className="problem-cards">
          {cards.map((c) => (
            <div key={c.title} className={`problem-card${c.dark ? " dark" : ""}`}>
              <h3>{c.title}</h3>
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
    { name: "Ricardo M.", details: "Imóvel · Ticket alto", status: "Pronto p/ fechar" },
    { name: "Fernanda A.", details: "Veículo · Ticket médio", status: "Qualificado" },
    { name: "João P.", details: "Imóvel · Ticket alto", status: "Pronto p/ fechar" },
  ];

  return (
    <section className="solution-section">
      <div className="container">
        <div className="solution-grid">
          <div>
            <span className="section-badge">A solução</span>
            <h2 className="section-title">
              O que separa quem fecha todo mês de quem vive de maré é ter controle.
            </h2>
            <p className="problem-p">
              Não adianta gerar volume de lead genérico de consórcio. Lead sem qualificação é vendedor
              perdendo tempo, é reunião que não vai pra frente, é WhatsApp que você manda e nunca mais
              recebe resposta.
            </p>
            <p className="highlight-p">
              Na Mancekt, a gente entrega um sistema de marketing inteligente construído para escritório
              e vendedor de consórcio: atração, qualificação e leads prontos para a conversa comercial.
            </p>
            <a href={CTA_LINK} className="btn-primary btn-primary-lg solution-cta-group">
              Quero ter controle sobre minhas vendas
            </a>
          </div>
          <div className="dashboard-mock">
            <div className="dash-header">
              <span className="dash-logo">Painel de Leads</span>
              <span className="dash-status">
                <span className="status-dot" /> Segunda-feira
              </span>
            </div>
            <div className="dash-stats-row">
              <div className="dash-stat">
                <div className="dash-stat-val">247</div>
                <div className="dash-stat-delta">↑ 34%</div>
                <div className="dash-stat-lbl">Leads esse mês</div>
              </div>
              <div className="dash-stat">
                <div className="dash-stat-val">89</div>
                <div className="dash-stat-delta">↑ 18%</div>
                <div className="dash-stat-lbl">Qualificados</div>
              </div>
              <div className="dash-stat">
                <div className="dash-stat-val">23</div>
                <div className="dash-stat-delta">↑ 41%</div>
                <div className="dash-stat-lbl">Prontos p/ fechar</div>
              </div>
            </div>
            <div className="dash-leads-list">
              {leads.map((l) => (
                <div key={l.name} className="dash-lead-card">
                  <div>
                    <div className="lead-name">{l.name}</div>
                    <div className="lead-details">{l.details}</div>
                  </div>
                  <span className="lead-status">{l.status}</span>
                </div>
              ))}
            </div>
            <div className="dash-footer-line">Atualizado agora · Sistema operando</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { title: "Lead entra", text: "Visitante acessa a campanha e preenche o formulário de qualificação." },
    { title: "IA analisa", text: "Inteligência artificial lê o perfil, comportamento e sinais de compra em tempo real." },
    { title: "Sistema classifica", text: "Pronto para fechar, precisa de nutrição ou fora do perfil. Automático." },
    { title: "Chega organizado", text: "Você e seu time recebem o lead no painel com perfil completo e o próximo passo indicado." },
  ];

  return (
    <section className="process-section">
      <div className="container">
        <div className="section-title-center">
          <span className="section-badge">Como funciona</span>
          <h2 className="section-title">O que acontece depois do clique.</h2>
          <p className="section-subtitle">
            A maioria dos escritórios de consórcio ainda faz o básico: posta anúncio, espera mensagem,
            atende quem chamou primeiro. O sistema da Mancekt separa quem só está curioso de quem já
            está pronto pra fechar.
          </p>
        </div>
        <div className="process-grid">
          {steps.map((s, i) => (
            <div key={s.title} className="process-card">
              <div className="process-step-num">0{i + 1}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
        <div className="system-learns">
          <div className="system-learns-card">
            <h3>O sistema aprende com o tempo</h3>
            <p>
              Cada lead que passa pelo sistema gera dados. Com o tempo, a inteligência artificial passa a
              reconhecer com precisão quem fecha consórcio com você, em que momento e por qual razão.
              Isso não pertence a nenhuma plataforma. Pertence ao seu escritório.
            </p>
          </div>
          <div className="system-learns-card">
            <h3>Um ativo único do seu negócio</h3>
            <p>
              O sistema é construído em cima do comportamento de compra do seu cliente específico. Não é
              um modelo pronto tirado de uma prateleira. Não dá pra copiar do escritório vizinho.
            </p>
          </div>
        </div>
        <div className="cases-cta-wrap" style={{ marginTop: 50 }}>
          <a href={CTA_LINK} className="btn-primary btn-primary-lg learning-cta">
            Quero conhecer o sistema
          </a>
        </div>
      </div>
    </section>
  );
}

function Phases() {
  return (
    <section className="phases-section">
      <div className="container">
        <span className="section-badge">As duas fases</span>
        <h2 className="section-title">Da construção à evolução contínua.</h2>
        <div className="phases-grid">
          <div className="phase-card">
            <div className="phase-num">01 · CONSTRUÇÃO</div>
            <h3>Construção</h3>
            <p>
              Levantamos o seu perfil de cliente ideal, definimos quais sinais mostram que alguém está
              pronto para fechar cota, mapeamos a jornada do primeiro contato até a venda e configuramos
              o sistema que filtra, classifica e entrega cada lead no momento certo. Tudo baseado em
              dados. Investimento único nessa etapa.
            </p>
          </div>
          <div className="phase-card">
            <div className="phase-num">02 · EVOLUÇÃO CONTÍNUA</div>
            <h3>Evolução contínua</h3>
            <p>
              Com o sistema no ar, a gente acompanha, ajusta e melhora diariamente. A inteligência
              artificial analisa o comportamento dos seus leads em tempo real, a gente interpreta os
              dados e calibra a estratégia. Quanto mais o sistema opera, mais preciso ele fica.
            </p>
          </div>
        </div>
        <div className="cases-cta-wrap" style={{ marginTop: 50 }}>
          <a href={CTA_LINK} className="btn-primary btn-primary-lg evolution-cta">
            Quero construir meu sistema
          </a>
        </div>
      </div>
    </section>
  );
}

function Results() {
  const months = [
    { m: "Jan", h: 20 },
    { m: "Fev", h: 30 },
    { m: "Mar", h: 45 },
    { m: "Abr", h: 65 },
    { m: "Mai", h: 85 },
    { m: "Jun", h: 100 },
  ];

  return (
    <section className="cases-section">
      <div className="container">
        <div className="section-title-center">
          <span className="section-badge">Resultado real</span>
          <h2 className="section-title">
            Não é promessa. É o que já aconteceu, com um escritório igual ao seu.
          </h2>
        </div>
        <p className="cases-intro">
          Um empresário do setor de consórcio chegou até a Mancekt exatamente como você chegou até aqui:
          dependendo de indicação, sem controle sobre os leads, sem saber quais valiam o tempo do time
          comercial. O sistema não mudou o produto. Não mudou o time. Mudou o processo de como os
          clientes certos chegam até eles em vez de chegar até o concorrente.
        </p>
        <div className="cases-stats-row">
          <div className="case-stat-box">
            <div className="stat-number">10x</div>
            <p>de crescimento no faturamento após o sistema entrar em operação</p>
          </div>
          <div className="case-stat-box">
            <div className="stat-number">4x</div>
            <p>de redução no custo por lead qualificado</p>
          </div>
        </div>
        <div className="chart-mock">
          <div className="chart-mock-label">Faturamento mensal · Sistema no ar</div>
          <div className="chart-bars">
            {months.map((m) => (
              <div key={m.m} className="chart-bar" style={{ height: `${m.h}%` }} />
            ))}
          </div>
          <div className="chart-labels">
            {months.map((m) => (
              <div key={m.m} className="chart-bar-label">
                {m.m}
              </div>
            ))}
          </div>
        </div>
        <div className="cases-cta-wrap cases-footer">
          <a href={CTA_LINK} className="btn-primary btn-primary-lg">
            Quero o mesmo para o meu escritório
          </a>
        </div>
      </div>
    </section>
  );
}

function WhyMancekt() {
  return (
    <section className="why-section">
      <div className="container">
        <div className="why-grid">
          <div>
            <span className="section-badge">Por que a Mancekt</span>
            <h2 className="section-title">
              Um ativo que vale mais a cada dia que opera. E que o escritório do lado ainda não tem.
            </h2>
            <p className="why-p">
              O sistema que a gente constrói não é um modelo pronto tirado de uma prateleira. É
              construído em cima do comportamento de compra do seu cliente de consórcio: como ele
              pesquisa, o que considera antes de decidir e em que momento está pronto para fechar.
            </p>
            <p className="why-p">
              Com o tempo, o sistema passa a conhecer o perfil exato de quem fecha consórcio com você.
              Isso não é replicável. Não dá pra copiar. É um ativo único do seu escritório.
            </p>
            <p className="highlight-p">
              Trabalhamos com um número limitado de escritórios por vez, justamente para garantir que
              cada sistema receba a atenção estratégica que precisa para funcionar de verdade.
            </p>
          </div>
          <div className="system-overview-box">
            <div className="overview-label">Visão geral do sistema</div>
            <div className="overview-stats">
              <div>
                <div className="overview-stat-val">R$148k</div>
                <div className="overview-stat-delta">↑ 10x desde o início</div>
                <div className="overview-stat-lbl">Faturamento gerado</div>
              </div>
              <div>
                <div className="overview-stat-val">R$12</div>
                <div className="overview-stat-delta">↓ 4x de redução</div>
                <div className="overview-stat-lbl">Custo por lead</div>
              </div>
            </div>
            <div className="funnel-row">
              <span>Leads captados</span>
              <span>1.240</span>
            </div>
            <div className="funnel-row">
              <span>Qualificados pela IA</span>
              <span>487</span>
            </div>
            <div className="funnel-row">
              <span>Prontos para fechar</span>
              <span>156</span>
            </div>
            <div className="funnel-row">
              <span>Convertidos em clientes</span>
              <span>89</span>
            </div>
            <div className="overview-footer">
              <span className="status-dot" /> Dados em tempo real · IA operando
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Market() {
  const items = [
    "5,16 milhões de cotas vendidas em 2025, alta de 15% sobre 2024",
    "R$500 bilhões em créditos comercializados, alta de 32%",
    "12,7 milhões de participantes ativos, recorde histórico",
    "R$719 bilhões em ativos administrados via consórcio, 6,1% do PIB",
    "Imóveis cresceu 48,4% em créditos no último ano, o segmento de maior ticket médio",
    "Projeção: o setor deve ultrapassar R$1 trilhão em créditos até 2029",
  ];

  return (
    <section className="market-section">
      <div className="container">
        <span className="section-badge">O mercado em números</span>
        <h2 className="section-title">O mercado de consórcio em números. E onde você está nele.</h2>
        <ul className="market-list">
          {items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
        <p className="market-p">
          Esse mercado inteiro está crescendo. A pergunta que importa é: sua carteira de clientes está
          crescendo no mesmo ritmo, ou você está deixando esse crescimento passar por fora do seu
          escritório?
        </p>
        <p className="market-p">
          A maioria dos escritórios e representantes ainda vende do jeito de 2018: post no Instagram,
          espera mensagem, atende quem chegou primeiro, sem CRM, sem qualificação, sem dado nenhum sobre
          por que um cliente fecha e outro não.
        </p>
      </div>
    </section>
  );
}

function Investment() {
  const items = [
    "Mapeamento do seu cliente ideal e do comportamento de compra",
    "Estratégia de atração baseada em dados do mercado de consórcio",
    "Jornada do cliente do primeiro contato até a venda",
    "Inteligência artificial para filtrar, classificar e qualificar cada lead",
    "Campanha de tráfego ativa e gerenciada",
    "Dashboards de controle em tempo real",
    "Acompanhamento diário com ajustes estratégicos contínuos",
  ];

  return (
    <section className="investment-section">
      <div className="container">
        <div className="investment-grid">
          <div>
            <span className="section-badge">O investimento</span>
            <h2 className="section-title">Antes de falar em investimento, faz uma conta rápida.</h2>
            <p className="investment-intro">
              Quantas cotas você deixou de fechar esse mês por falta de lead qualificado, num mercado que
              cresceu 15% e bateu recorde de participantes ativos? Multiplica isso pela sua comissão
              média. O investimento na Mancekt existe pra eliminar esse custo de vez.
            </p>
            <ul className="investment-list">
              {items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
            <a href={CTA_LINK} className="btn-primary">
              Quero ter controle sobre minhas vendas
            </a>
          </div>
          <div>
            <div className="investment-pricing-box" style={{ marginBottom: 30 }}>
              <h4>Construção única + acompanhamento mensal fixo</h4>
              <p>Sem contrato de 12 meses. Sem taxa de cancelamento. Você fica porque funciona.</p>
            </div>
            <div className="guarantee-box">
              <span className="guarantee-badge">Garantia incondicional</span>
              <h3>30 dias de clareza total ou seu dinheiro de volta.</h3>
              <p>
                Se em 30 dias de sistema no ar você não enxergar clareza total sobre quem está entrando,
                em que etapa está e o que falta para fechar, a gente devolve o valor do primeiro mês.
              </p>
              <p className="guarantee-highlight">
                Sem burocracia. Sem questionamento. A gente assume o risco junto.
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
      <div className="container">
        <div className="diagnostic-content">
          <span className="section-badge">Gratuito</span>
          <h2 className="section-title">
            Antes de qualquer decisão, entenda onde está o gargalo do seu escritório hoje.
          </h2>
          <p>
            Responde algumas perguntas rápidas sobre o seu processo atual de geração de clientes de
            consórcio e a gente te mostra, sem custo e sem compromisso, onde estão as maiores
            oportunidades de melhoria.
          </p>
          <a href={CTA_LINK} className="btn-primary btn-primary-lg">
            Quero meu diagnóstico gratuito
          </a>
        </div>
      </div>
    </section>
  );
}

const FAQ_ITEMS = [
  {
    q: "O que exatamente vocês entregam?",
    a: "Um sistema completo de geração e qualificação de clientes de consórcio, construído em cima do seu escritório. Isso inclui a estratégia, a automação, a campanha de tráfego, os dashboards de controle e o acompanhamento diário.",
  },
  {
    q: "Quanto tempo leva para o sistema estar funcionando?",
    a: "A fase de construção leva entre 2 e 3 semanas. Os primeiros leads já chegam na primeira semana de operação.",
  },
  {
    q: "Preciso ter uma equipe de vendas para contratar?",
    a: "Não. O sistema entrega os leads qualificados e prontos para conversa comercial. Você pode começar sozinho. Se tiver vendedores, o resultado escala ainda mais rápido.",
  },
  {
    q: "Funciona pra representante autônomo ou só pra escritório grande?",
    a: "Funciona pros dois. O que muda é o volume de leads que o sistema entrega, ajustado ao seu ritmo de atendimento.",
  },
  {
    q: "Como funciona o acompanhamento diário?",
    a: "Monitoramos os dados do sistema todos os dias: volume de leads, qualidade do perfil, taxa de conversão por etapa e desempenho da campanha. Quando algo precisa de ajuste, a gente ajusta.",
  },
  {
    q: "Qual a diferença de contratar a Mancekt e contratar um gestor de tráfego?",
    a: "Um gestor de tráfego cuida da campanha. A Mancekt cuida do processo inteiro: qualificação dos leads, automação, dashboards de controle, jornada estruturada e acompanhamento diário.",
  },
  {
    q: "E se eu não tiver resultados no primeiro mês?",
    a: "Se em 30 dias você não enxergar clareza total sobre quem está entrando, em que etapa está e o que falta para fechar, a gente devolve o valor do primeiro mês. Sem burocracia. Sem questionamento.",
  },
  {
    q: "Quantos escritórios vocês atendem ao mesmo tempo?",
    a: "Trabalhamos com um número limitado por vez. Não por limitação de capacidade, mas porque cada sistema precisa de atenção real pra funcionar.",
  },
  {
    q: "Qual o investimento?",
    a: "O modelo é construção única mais acompanhamento mensal fixo. O valor varia de acordo com o tamanho e volume do seu escritório. A conversa inicial serve pra apresentar uma proposta específica pra você.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-container">
          <h2 className="section-title section-title-center">Perguntas frequentes</h2>
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
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="closing-section">
      <div className="closing-container">
        <h2>
          Se você chegou até aqui, o mercado de consórcio já bateu recorde histórico e o escritório do
          lado pode já estar se movendo.
        </h2>
        <p>
          A única pergunta é: quantas cotas a mais você vai deixar passar dependendo de sorte e
          indicação, enquanto quem tem sistema fecha todo dia?
        </p>
        <a href={CTA_LINK} className="btn-primary btn-primary-lg">
          Quero ter controle sobre minhas vendas
        </a>
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
    <main>
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Phases />
      <Results />
      <WhyMancekt />
      <Market />
      <Investment />
      <Diagnostic />
      <FAQ />
      <Closing />
      <Footer />
    </main>
  );
}
