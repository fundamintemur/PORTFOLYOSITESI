import { useState } from "react";
import ThreeBackground from "./components/ThreeBackground";
import {
  FiCode,
  FiCpu,
  FiDatabase,
  FiBriefcase,
  FiFolder,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiShare2,
  FiTool,
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
  "Analitik düşünme",
  "Güçlü problem çözme",
  "Hızlı öğrenme",
  "Takım çalışması",
  "İletişim becerileri",
  "Yaratıcı düşünme",
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

const getSkillIcon = (title) => {
  if (title === "Programlama Dilleri") return <FiCode />;
  if (title === "Frontend") return <FiCpu />;
  if (title === "Backend") return <FiBriefcase />;
  if (title === "Veritabanı") return <FiDatabase />;
  if (title === "Araçlar") return <FiTool />;
  return <FiCode />;
};

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="section">
      <div className="section-head">
        <p className="section-subtitle">{subtitle}</p>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="page-wrap">
      <ThreeBackground />
      <div className="page">
      <header className="hero" id="home">
        <nav className="nav">
          <a href="#home" className="brand">
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
            <a href="#about" onClick={handleMenuItemClick}>
              Hakkımda
            </a>
            <a href="#skills" onClick={handleMenuItemClick}>
              Yetenekler
            </a>
            <a href="#experience" onClick={handleMenuItemClick}>
              Deneyim
            </a>
            <a href="#projects" onClick={handleMenuItemClick}>
              Projeler
            </a>
            <a href="#contact" onClick={handleMenuItemClick}>
              İletişim
            </a>
          </div>
        </nav>

        <div className="hero-grid">
          <div>
            <p className="badge">Bilgisayar Mühendisi | Frontend Developer</p>
            <h1>Merhaba, ben Funda Mintemur</h1>
            <p className="lead">
              Modern, responsive ve kullanıcı dostu web uygulamaları geliştiriyorum.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                Projeleri Gör
              </a>
              <a href="#contact" className="btn btn-secondary">
                Benimle İletişime Geç
              </a>
            </div>
          </div>

          <div className="hero-card">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80"
              alt="Yazılım geliştirme temalı masa görüntüsü"
              loading="lazy"
            />
            <p>Antalya, Türkiye</p>
          </div>
        </div>
      </header>

      <main>
        <Section id="about" title="Hakkımda" subtitle="Kısaca Ben">
          <p className="card">
            Bilgisayar mühendisliği eğitimi ile yazılım geliştirme alanında güçlü bir temel
            oluşturdum. Çalışan kod yazmanın ötesinde, kullanıcıların keyifle kullanacağı
            çözümler üretmeye odaklanırım. Teknik problemleri sabırla analiz eder, sürdürülebilir
            çözümler geliştiririm.
          </p>
        </Section>

        <Section id="skills" title="Teknik Yetenekler" subtitle="Neler Kullanıyorum">
          <div className="grid-two">
            {Object.entries(skills).map(([title, values]) => (
              <article key={title} className="card">
                <span className="card-icon">
                  {getSkillIcon(title)}
                </span>
                <h3>{title}</h3>
                <div className="chips">
                  {values.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <article className="card">
            <span className="card-icon">
              <LuBrainCircuit />
            </span>
            <h3>Kişisel Beceriler</h3>
            <div className="chips">
              {personalSkills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        </Section>

        <Section id="experience" title="İş Deneyimi" subtitle="Kariyer Yolculuğu">
          <div className="timeline">
            {experiences.map((exp) => (
              <article key={`${exp.role}-${exp.period}`} className="card">
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
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projeler" subtitle="Öne Çıkan Çalışmalar">
          <div className="grid-three">
            {projects.map((project) => (
              <article key={project.title} className="card">
                <span className="card-icon">
                  <FiFolder />
                </span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="chips">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="github" title="GitHub Projeleri" subtitle="Kodlarımı İnceleyin">
          <div className="grid-two">
            {githubRepos.map((repo) => (
              <article key={repo.name} className="card">
                <span className="card-icon">
                  <FiGithub />
                </span>
                <h3>{repo.name}</h3>
                <p>{repo.note}</p>
                <a className="inline-link" href={repo.url} target="_blank" rel="noreferrer">
                  GitHub Profiline Git
                </a>
              </article>
            ))}
          </div>
        </Section>

        <Section id="contact" title="İletişim" subtitle="Birlikte Çalışalım">
          <div className="grid-two">
            <article className="card">
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
            </article>

            <article className="card">
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
            </article>
          </div>
        </Section>
      </main>
      </div>
    </div>
  );
}

export default App;
