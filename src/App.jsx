import { useEffect, useRef, useState } from "react";
import ThreeBackground from "./components/ThreeBackground";
import {
  FiArrowUp,
  FiBriefcase,
  FiCode,
  FiCpu,
  FiDatabase,
  FiFeather,
  FiFolder,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiShare2,
  FiTool,
  FiUsers,
  FiZap,
} from "react-icons/fi";
import { LuBrainCircuit } from "react-icons/lu";

const skills = {
  "Programlama Dilleri": ["Java", "C#"],
  Frontend: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Bootstrap", "jQuery"],
  Backend: [".NET MVC", "C#"],
  Veritabanı: ["MSSQL"],
  Araçlar: ["Git", "GitHub", "Visual Studio", "VS Code"],
};

const personalSkills = [
  {
    title: "Analitik Düşünme",
    text: "Karmaşık problemleri küçük, yönetilebilir parçalara ayırarak çözüyorum.",
    icon: <FiCpu />,
  },
  {
    title: "Problem Çözme",
    text: "Teknik engelleri sabırla analiz edip kalıcı ve sürdürülebilir çözümler üretiyorum.",
    icon: <FiTool />,
  },
  {
    title: "Hızlı Öğrenme",
    text: "Yeni teknolojilere ve araçlara kısa sürede adapte olabiliyorum.",
    icon: <FiZap />,
  },
  {
    title: "Takım Çalışması",
    text: "Ekip içinde uyumlu, açık iletişime önem veren bir geliştiriciyim.",
    icon: <FiUsers />,
  },
  {
    title: "İletişim",
    text: "Fikirlerimi net, yapıcı ve anlaşılır şekilde aktarırım.",
    icon: <FiMessageCircle />,
  },
  {
    title: "Yaratıcı Düşünme",
    text: "Standart kalıpların dışında, kullanıcı odaklı çözümler tasarlamayı seviyorum.",
    icon: <FiFeather />,
  },
];

const experiences = [
  {
    role: "Freelance Yazılım Geliştirici",
    place: "Uzaktan",
    period: "2024 - Günümüz",
    text: "Modern frontend teknolojileri ile UI odaklı projeler geliştirdim, GitHub portfolyomu aktif olarak büyüttüm. Ayrıca yapay zekâ destekli uygulamalar, akıllı otomasyon çözümleri ve kullanıcı ihtiyaçlarına göre özelleştirilmiş AI entegrasyonları üzerinde çalışıyorum.",
    stack: ["React", "Tailwind CSS", "Python", "LLM", "Prompt Engineering", "API Entegrasyonu"],
  },
  {
    role: "Frontend Developer",
    company: "ANTTECH Yazılım",
    place: "Antalya",
    period: "Kasım 2023 - Eylül 2024",
    text: "Kullanıcı deneyimine odaklanan responsive arayüzler geliştirdim ve ekip geliştirme süreçlerine aktif katkıda bulundum.",
    stack: ["HTML5", "CSS3", "SASS", "Bootstrap", "JavaScript"],
  },
  {
    role: "Software Developer",
    company: "VAV Technology",
    place: "Antalya",
    period: "2021 - 2023",
    text: "C# ve .NET MVC tabanlı projelerde backend, veritabanı ve arayüz geliştirme görevlerini üstlendim.",
    stack: ["C#", ".NET MVC", "MSSQL", "HTML", "CSS", "JavaScript"],
  },
];

const projects = [
  {
    title: "Doğalgaz Alarm Sistemi",
    description:
      "Arduino ve MQ-4 gaz sensörü kullanılarak metan gazı tespit eden ve eşik aşımında sesli-görsel uyarı veren sistem.",
    tags: ["Arduino", "MQ-4", "Sensör", "Alarm"],
  },
  {
    title: "Koçak Baklava Web Sitesi",
    description:
      "HTML, CSS, Bootstrap ve JavaScript ile geliştirilmiş modern, mobil uyumlu ve kullanıcı dostu kurumsal web sitesi.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  },
  {
    title: "Mağaza Stok Takip Sistemi",
    description:
      "C# WinForms ve MSSQL ile geliştirilen masaüstü stok takip uygulaması. CRUD işlemleri ve ürün yönetimi içerir.",
    tags: ["C#", "WinForms", "MSSQL", "ADO.NET"],
  },
];

const githubRepos = [
  {
    name: "fundamintemur",
    url: "https://github.com/fundamintemur",
    note: "Tüm açık kaynak ve portfolyo reposu.",
  },
];

const techMarquee = [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "C#",
  ".NET MVC",
  "MSSQL",
  "HTML5",
  "CSS3",
  "Bootstrap",
  "Git",
  "Python",
  "Prompt Engineering",
];

const navLinks = [
  { id: "about", label: "Hakkımda" },
  { id: "skills", label: "Yetenekler" },
  { id: "experience", label: "Deneyim" },
  { id: "projects", label: "Projeler" },
  { id: "contact", label: "İletişim" },
];

const stats = [
  { value: "3+", label: "Yıl Deneyim" },
  { value: `${projects.length}+`, label: "Proje" },
  { value: "12+", label: "Teknoloji" },
];

const getSkillIcon = (title) => {
  if (title === "Programlama Dilleri") return <FiCode />;
  if (title === "Frontend") return <FiCpu />;
  if (title === "Backend") return <FiBriefcase />;
  if (title === "Veritabanı") return <FiDatabase />;
  if (title === "Araçlar") return <FiTool />;
  return <FiCode />;
};

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
  const [ref, visible] = useReveal();
  return (
    <Tag ref={ref} className={`reveal ${visible ? "in-view" : ""} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="section">
      <Reveal className="section-head">
        <p className="section-subtitle">{subtitle}</p>
        <h2>{title}</h2>
      </Reveal>
      {children}
    </section>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTopBtn, setShowTopBtn] = useState(false);

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const sectionIds = ["home", ...navLinks.map((link) => link.id)];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (typeof IntersectionObserver === "undefined") return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight;
      setScrollProgress(height > 0 ? (scrollTop / height) * 100 : 0);
      setShowTopBtn(scrollTop > 500);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="page-wrap">
      <ThreeBackground />
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      <div className="page">
        <header className="hero" id="home">
          <nav className="nav">
            <a href="#home" className="brand">
              <span className="brand-mark">FM</span>
              Funda Mintemur
            </a>
            <button
              type="button"
              className={`hamburger ${isMenuOpen ? "active" : ""}`}
              aria-label="Menüyü aç/kapat"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <span />
              <span />
              <span />
            </button>
            <div className={`menu ${isMenuOpen ? "open" : ""}`}>
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={activeSection === link.id ? "active" : ""}
                  onClick={handleMenuItemClick}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          <div className="hero-grid">
            <div>
              <p className="badge">
                <span className="badge-dot" />
                Bilgisayar Mühendisi | Yazılım Geliştirici | Backend Developer | Frontend Developer
              </p>
              <h1>
                Merhaba, ben <span className="text-gradient">Funda Mintemur</span>
              </h1>
              <p className="lead">
                Modern, responsive ve kullanıcı dostu web uygulamaları geliştiriyorum.
                Temiz kod ve keyifli kullanıcı deneyimi benim için öncelikli.
              </p>
              <div className="hero-buttons">
                <a href="#projects" className="btn btn-primary">
                  Projeleri Gör
                </a>
                <a href="#contact" className="btn btn-secondary">
                  Benimle İletişime Geç
                </a>
              </div>

              <div className="hero-stats">
                {stats.map((stat) => (
                  <div key={stat.label} className="hero-stat">
                    <span className="hero-stat-value">{stat.value}</span>
                    <span className="hero-stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-card">
              <div className="hero-avatar">
                <span>FM</span>
              </div>
              <div className="hero-card-body">
                <p className="hero-card-name">Funda Mintemur</p>
                <p className="hero-card-role"> Bilgisayar Mühendisi | Backend Developer |Frontend Developer </p>
                <p className="hero-card-loc">
                  <FiMapPin className="inline-ico" />
                  Antalya, Türkiye
                </p>
                <span className="status-pill">
                  <span className="status-dot" />
                  Yeni projelere açık
                </span>
              </div>
            </div>
          </div>

          <div className="marquee">
            <div className="marquee-track">
              {[...techMarquee, ...techMarquee].map((tech, index) => (
                <span key={`${tech}-${index}`} className="marquee-item">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </header>

        <main>
          <Section id="about" title="Hakkımda" subtitle="Kısaca Ben">
            <Reveal className="card about-card">
              <p>
                Bilgisayar mühendisliği eğitimi ile yazılım geliştirme alanında güçlü bir temel
                oluşturdum. Çalışan kod yazmanın ötesinde, kullanıcıların keyifle kullanacağı
                çözümler üretmeye odaklanırım. Teknik problemleri sabırla analiz eder,
                sürdürülebilir çözümler geliştiririm.
              </p>
              <div className="about-highlights">
                <div className="about-highlight">
                  <FiCode />
                  <span>Clean Code prensipleri</span>
                </div>
                <div className="about-highlight">
                  <LuBrainCircuit />
                  <span>Kullanıcı deneyimi odaklı geliştirme</span>
                </div>
                <div className="about-highlight">
                  <FiCpu />
                  <span>Analitik düşünme &amp; problem çözme</span>
                </div>
                <div className="about-highlight">
                  <FiUsers />
                  <span>Takım çalışmasına yatkınlık</span>
                </div>
              </div>
            </Reveal>
          </Section>

          <Section id="skills" title="Teknik Yetenekler" subtitle="Neler Kullanıyorum">
            <div className="grid-two">
              {Object.entries(skills).map(([title, values], index) => (
                <Reveal
                  as="article"
                  key={title}
                  className="card"
                  style={{ transitionDelay: `${index * 60}ms` }}
                >
                  <span className="card-icon">{getSkillIcon(title)}</span>
                  <h3>{title}</h3>
                  <div className="chips">
                    {values.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="section-mini-head">
              <span className="card-icon">
                <LuBrainCircuit />
              </span>
              <h3>Kişisel Beceriler</h3>
            </Reveal>
            <div className="grid-three">
              {personalSkills.map((skill, index) => (
                <Reveal
                  as="article"
                  key={skill.title}
                  className="card personal-skill-card"
                  style={{ transitionDelay: `${index * 60}ms` }}
                >
                  <span className="card-icon">{skill.icon}</span>
                  <h3>{skill.title}</h3>
                  <p className="muted small">{skill.text}</p>
                </Reveal>
              ))}
            </div>
          </Section>

          <Section id="experience" title="İş Deneyimi" subtitle="Kariyer Yolculuğu">
            <div className="timeline">
              {experiences.map((exp, index) => (
                <Reveal
                  as="div"
                  key={`${exp.role}-${exp.period}`}
                  className="timeline-item"
                  style={{ transitionDelay: `${index * 90}ms` }}
                >
                  <div className="timeline-marker">
                    <span className="timeline-dot" />
                  </div>
                  <article className="card timeline-card">
                    <span className="card-icon">
                      <FiBriefcase />
                    </span>
                    <h3>
                      {exp.role}
                      {exp.company ? ` - ${exp.company}` : ""}
                    </h3>
                    <p className="muted">
                      {exp.place} | {exp.period}
                    </p>
                    <p>{exp.text}</p>
                    <div className="chips">
                      {exp.stack.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </Section>

          <Section id="projects" title="Projeler" subtitle="Öne Çıkan Çalışmalar">
            <div className="grid-three">
              {projects.map((project, index) => (
                <Reveal
                  as="article"
                  key={project.title}
                  className="card project-card"
                  style={{ transitionDelay: `${index * 70}ms` }}
                >
                  <div className="project-banner">
                    <FiFolder />
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="chips">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </Section>

          <Section id="github" title="GitHub Projeleri" subtitle="Kodlarımı İnceleyin">
            <div className="grid-two">
              {githubRepos.map((repo) => (
                <Reveal as="article" key={repo.name} className="card">
                  <span className="card-icon">
                    <FiGithub />
                  </span>
                  <h3>{repo.name}</h3>
                  <p>{repo.note}</p>
                  <a className="inline-link" href={repo.url} target="_blank" rel="noreferrer">
                    GitHub Profiline Git →
                  </a>
                </Reveal>
              ))}
            </div>
          </Section>

          <Section id="contact" title="İletişim" subtitle="Birlikte Çalışalım">
            <div className="grid-two">
              <Reveal as="article" className="card">
                <span className="card-icon">
                  <FiMail />
                </span>
                <h3>İletişim Bilgileri</h3>
                <ul className="contact-list">
                  <li className="contact-item">
                    <span className="contact-label">E-posta</span>
                    <a className="contact-link" href="mailto:mintemurfunda3@gmail.com">
                      mintemurfunda3@gmail.com
                    </a>
                  </li>
                  <li className="contact-item">
                    <span className="contact-label">
                      <FiMapPin className="inline-ico" />
                      Konum
                    </span>
                    <span className="contact-value">Antalya, Türkiye</span>
                  </li>
                </ul>
              </Reveal>

              <Reveal as="article" className="card" style={{ transitionDelay: "80ms" }}>
                <span className="card-icon">
                  <FiShare2 />
                </span>
                <h3>Sosyal Medya</h3>
                <ul className="contact-list">
                  <li className="contact-item">
                    <a
                      className="social-link"
                      href="https://github.com/fundamintemur"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FiGithub className="inline-ico" />
                      GitHub
                    </a>
                  </li>
                  <li className="contact-item">
                    <a
                      className="social-link"
                      href="https://www.linkedin.com/in/funda-mintemur-172036191/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FiLinkedin className="inline-ico" />
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </Reveal>
            </div>
          </Section>
        </main>

        <footer className="footer">
          <div className="footer-inner">
            <a href="#home" className="brand">
              <span className="brand-mark">FM</span>
              Funda Mintemur
            </a>
            <div className="footer-links">
              {navLinks.map((link) => (
                <a key={link.id} href={`#${link.id}`}>
                  {link.label}
                </a>
              ))}
            </div>
            <div className="footer-social">
              <a href="https://github.com/fundamintemur" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/funda-mintemur-172036191/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>
              <a href="mailto:mintemurfunda3@gmail.com" aria-label="E-posta">
                <FiMail />
              </a>
            </div>
          </div>
          <p className="footer-note">© {new Date().getFullYear()} Funda Mintemur. Tüm hakları saklıdır.</p>
        </footer>
      </div>

      <button
        type="button"
        className={`back-to-top ${showTopBtn ? "visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Yukarı çık"
      >
        <FiArrowUp />
      </button>
    </div>
  );
}

export default App;
