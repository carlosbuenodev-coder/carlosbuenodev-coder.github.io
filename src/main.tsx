import { StrictMode, useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight, Braces, BriefcaseBusiness, Code2, Database, GitBranch, Github,
  Globe, GraduationCap, Guitar, Linkedin, Menu, Server, X, Zap,
} from 'lucide-react';
import './style.css';

const github = 'https://github.com/carlosbuenodev-coder';
const linkedin = 'https://www.linkedin.com/in/carlosbueno-dev';

const navigation = [
  ['inicio', 'Início'],
  ['sobre', 'Sobre'],
  ['tecnologias', 'Tecnologias'],
  ['projetos', 'Projetos'],
  ['formacao', 'Formação'],
  ['contato', 'Contato'],
] as const;

const technologies = [
  { name: 'Back-end', icon: Server, description: 'Desenvolvimento de APIs REST', tools: ['C#', '.NET 10', 'ASP.NET Core'] },
  { name: 'Dados', icon: Database, description: 'Modelagem e consultas relacionais', tools: ['SQL', 'MySQL', 'Entity Framework Core'] },
  { name: 'Front-end', icon: Braces, description: 'Interfaces para projetos web', tools: ['React', 'TypeScript', 'Vite'] },
  { name: 'Versionamento', icon: GitBranch, description: 'Controle de versões e repositórios', tools: ['Git', 'GitHub'] },
];

const projects = [
  {
    slug: 'gestaofinanceiraempresarial',
    name: 'Sistema de Gestão Financeira Empresarial',
    category: 'Em desenvolvimento',
    description: 'API REST de gestão financeira em C# com ASP.NET Core e MySQL. O front-end está em desenvolvimento com React e TypeScript.',
    tools: ['C#', '.NET 10', 'ASP.NET Core', 'MySQL', 'React', 'TypeScript'],
    icon: Server,
  },
  {
    slug: 'SQL-Sales-Analytics',
    name: 'SQL Sales Analytics',
    category: 'Projeto de estudo',
    description: 'Modelagem relacional e consultas SQL para explorar dados de vendas no MySQL.',
    tools: ['SQL', 'MySQL', 'Modelagem relacional'],
    icon: Database,
  },
  {
    slug: 'priscilla-alvarez-landing-page',
    name: 'Landing page Priscilla Alvarez',
    category: 'Projeto web',
    description: 'Página de apresentação para serviços de estética, desenvolvida com React, TypeScript e Vite.',
    tools: ['React', 'TypeScript', 'Vite'],
    icon: Globe,
  },
];

function Tags({ tools }: { tools: string[] }) {
  return <ul className="tags">{tools.map(tool => <li key={tool}>{tool}</li>)}</ul>;
}

function Header() {
  const [active, setActive] = useState<string>('inicio');
  const [menuOpen, setMenuOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const sections = navigation.map(([id]) => document.getElementById(id)).reverse();
    let frame = 0;

    function update() {
      frame = 0;
      const readingLine = Math.min(window.innerHeight * 0.4, 220);
      const atBottom = Math.ceil(window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight;
      const section = atBottom && window.scrollY > 0
        ? sections[0]
        : sections.find(item => item && item.getBoundingClientRect().top <= readingLine);
      setActive(section?.id ?? 'inicio');
    }

    function scheduleUpdate() {
      if (!frame) frame = window.requestAnimationFrame(update);
    }

    update();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
    };
  }, []);

  return (
    <header
      className="site-header"
      onBlur={event => {
        if (!event.currentTarget.contains(event.relatedTarget)) setMenuOpen(false);
      }}
      onKeyDown={event => {
        if (event.key === 'Escape' && menuOpen) {
          setMenuOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      <div className="nav">
        <a className="brand" href="#inicio" onClick={() => setMenuOpen(false)}>
          <Zap size={19} aria-hidden="true" /> Carlos <span>Bueno</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          ref={toggle}
          aria-expanded={menuOpen}
          aria-controls="navigation"
          onClick={() => setMenuOpen(open => !open)}
        >
          {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          Menu
        </button>
        <nav id="navigation" aria-label="Navegação principal" data-open={menuOpen}>
          {navigation.map(([id, label]) => (
            <a
              key={id}
              href={'#' + id}
              aria-current={active === id ? 'location' : undefined}
              onClick={() => {
                if (menuOpen) document.getElementById(id)?.focus({ preventScroll: true });
                setMenuOpen(false);
              }}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Projects() {
  return (
    <section className="section" id="projetos" tabIndex={-1} aria-labelledby="projetos-titulo">
      <h2 id="projetos-titulo">Projetos em destaque</h2>
      <div className="projects">
        {projects.map(({ slug, name, category, description, tools, icon: Icon }) => (
          <article className="project panel" key={slug}>
            <div className="project-type">
              <Icon size={23} aria-hidden="true" />
              <span className="eyebrow">{category}</span>
            </div>
            <h3>{name}</h3>
            <p>{description}</p>
            <Tags tools={tools} />
            <a className="project-link" href={github + '/' + slug} aria-label={'Ver repositório de ' + name}>
              <Github size={17} aria-hidden="true" /> Ver repositório <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function App() {
  const main = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!main.current || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('entered');
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.15 });

    main.current.querySelectorAll('h2, .cyber-note h3, .project').forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <Header />
      <main id="conteudo" tabIndex={-1} ref={main}>
        <section className="hero section" id="inicio" tabIndex={-1} aria-labelledby="inicio-titulo">
          <div className="banner-frame">
            <img
              className="banner"
              src="/cyber-metal-banner.png"
              width="2172"
              height="724"
              fetchPriority="high"
              alt="Carlos Bueno em um banner Cyber Metal com guitarra e circuitos"
            />
          </div>
          <div className="hero-content">
            <div>
              <p className="eyebrow">Carlos Bueno · Desenvolvedor back-end em formação</p>
              <h1 id="inicio-titulo">Desenvolvimento <span>Back-end C#/.NET</span></h1>
              <p className="hero-summary">Desenvolvo projetos em C#, .NET, SQL e APIs REST. Minha experiência com sistemas empresariais e ERP ajuda a entender os processos que o software precisa atender.</p>
              <div className="actions">
                <a className="button primary" href="#projetos">Explorar projetos <ArrowUpRight size={18} aria-hidden="true" /></a>
                <a className="button secondary" href={github}><Github size={18} aria-hidden="true" /> GitHub</a>
              </div>
            </div>
            <aside className="hero-experience">
              <BriefcaseBusiness size={23} aria-hidden="true" />
              <strong>20+ anos</strong>
              <span>em sistemas empresariais e ERP</span>
            </aside>
          </div>
        </section>

        <section className="section" id="sobre" tabIndex={-1} aria-labelledby="sobre-titulo">
          <h2 id="sobre-titulo">Sobre mim</h2>
          <div className="panel about">
            <div>
              <p>Sou estudante de Análise e Desenvolvimento de Sistemas, com foco em <strong>desenvolvimento back-end com C#/.NET e bancos de dados relacionais</strong>.</p>
              <p>Minha trajetória inclui implantação e parametrização de ERP, integrações e processos de negócio. Hoje aplico essa experiência a projetos de software, da compreensão das regras de negócio à modelagem de dados e ao desenvolvimento de APIs.</p>
            </div>
          </div>
        </section>

        <section className="section" id="tecnologias" tabIndex={-1} aria-labelledby="tecnologias-titulo">
          <h2 id="tecnologias-titulo">Tecnologias e ferramentas</h2>
          <div className="stack">
            {technologies.map(({ name, icon: Icon, description, tools }) => (
              <article className="tech panel" key={name}>
                <Icon size={23} aria-hidden="true" />
                <h3>{name}</h3>
                <p>{description}</p>
                <Tags tools={tools} />
              </article>
            ))}
          </div>
        </section>

        <Projects />

        <section className="section" id="formacao" tabIndex={-1} aria-labelledby="formacao-titulo">
          <h2 id="formacao-titulo">Formação e experiência</h2>
          <div className="credentials">
            <article className="panel credential">
              <GraduationCap size={25} aria-hidden="true" />
              <div>
                <h3>Formação acadêmica</h3>
                <p>Graduação em andamento em Análise e Desenvolvimento de Sistemas.</p>
                <p>Graduação em Ciências Contábeis.</p>
              </div>
            </article>
            <article className="panel credential">
              <BriefcaseBusiness size={24} aria-hidden="true" />
              <div>
                <h3>Sistemas empresariais</h3>
                <p>Mais de 20 anos de experiência em sistemas empresariais, com atuação em ERP, integrações e processos de negócio.</p>
              </div>
            </article>
          </div>
          <aside className="panel cyber-note" aria-labelledby="cyber-metal-titulo">
            <Guitar size={24} aria-hidden="true" />
            <div>
              <h3 id="cyber-metal-titulo">Cyber Metal</h3>
              <p>Tecnologia e rock fazem parte da minha identidade. O estilo Cyber Metal combina minha paixão pelo desenvolvimento de software com a energia do rock clássico e do heavy metal.</p>
              <p>Entre códigos, projetos e novas tecnologias, o ROCK N' ROLL faz parte da trilha sonora. 🤘</p>
            </div>
          </aside>
        </section>

        <section className="section contact" id="contato" tabIndex={-1} aria-labelledby="contato-titulo">
          <div className="panel contact-panel">
            <h2 id="contato-titulo">Vamos conversar?</h2>
            <p>Estou aberto a conexões e oportunidades em desenvolvimento de software.</p>
            <div className="actions">
              <a className="button primary" href={linkedin}><Linkedin size={18} aria-hidden="true" /> LinkedIn <ArrowUpRight size={17} aria-hidden="true" /></a>
              <a className="button secondary" href={github}><Github size={18} aria-hidden="true" /> GitHub <ArrowUpRight size={17} aria-hidden="true" /></a>
            </div>
          </div>
        </section>
      </main>
      <footer><Code2 size={17} aria-hidden="true" /> © {new Date().getFullYear()} Carlos Bueno</footer>
    </>
  );
}

const root = document.getElementById('root');
if (root) createRoot(root).render(<StrictMode><App /></StrictMode>);
