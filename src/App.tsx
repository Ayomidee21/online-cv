
import "./App.css";

const projects = [
  {
    number: "01",
    title: "FortisTrade",
    status: "In Development",
    category: "FINTECH",
    description:
      "Developing a fintech platform focused on Nigerian Exchange (NGX) market data, listed companies and market analysis, with simulated stock trading planned as the next stage.",
    technologies: "React · TypeScript · Express · Prisma · Neon PostgreSQL",
  },
  {
    number: "02",
    title: "Fortis Ticketing Platform",
    status: "In Development",
    category: "SOFTWARE DEVELOPMENT",
    description:
      "Building an event ticketing platform designed to support event discovery, user accounts, ticket management and event administration.",
    technologies: "React · TypeScript · Express · Prisma · SQLite",
  },
];

const skills = [
  "Python",
  "SQL",
  "Data Analysis & Reporting",
  "Network Troubleshooting",
  "Cybersecurity Fundamentals",
  "Git & GitHub",
  "VS Code",
  "Microsoft Teams & Zoom",
  "Excel",
  "Oracle SQL",
  "Google Data Studio",
  "Documentation",
  "Problem Solving",
  "Cross-team Communication",
  "Remote Collaboration",
];

const experience = [
  {
    role: "Graduate Trainee",
    company: "Unified Payment Services Limited",
    location: "Lagos, Nigeria",
    period: "Jan 2026 – Jul 2026",
    description:
      "Gained experience in the Channels Department, working with POS, web and transfer transactions, payment channels and transaction routing.",
  },
  {
    role: "NYSC Corps Member",
    company: "Unified Payment Services Limited",
    location: "Lagos, Nigeria",
    period: "Jan 2025 – Dec 2025",
    description:
      "Gained practical experience in a fintech environment while contributing to assigned departmental responsibilities.",
  },
  {
    role: "IT Intern",
    company: "Golden Securities Limited",
    location: "Lagos, Nigeria",
    period: "Oct 2024 – Jan 2025",
    description:
      "Developed practical workplace experience in a financial services organisation.",
  },
  {
    role: "IT Intern",
    company: "Unified Payment Services Limited",
    location: "Lagos, Nigeria",
    period: "Feb 2023 – Jul 2023",
    description:
      "Gained exposure to enterprise applications, technical troubleshooting, documentation and IT operations.",
  },
  {
    role: "IT Intern",
    company: "WCM Capital Limited",
    location: "Lagos, Nigeria",
    period: "Jul 2022 – Sep 2022",
    description:
      "Built foundational workplace experience in a financial services environment.",
  },
];

const education = [
  {
    period: "2021 – 2024",
    qualification: "B.Sc. Computer Science",
    institution: "Adeleke University, Osun State, Nigeria",
  },
  {
    period: "2014 – 2020",
    qualification: "Senior Secondary Education (SSCE)",
    institution: "Nigerian Navy Secondary School, Ogbomoso",
  },
  {
    period: "2007 – 2014",
    qualification: "First School Leaving Certificate",
    institution: "Gloryville Nursery & Primary School",
  },
];

function App() {
  const copyEmail = async () => {
    const email = "abdulayomide703@gmail.com";

    try {
      await navigator.clipboard.writeText(email);
      alert("Email address copied to clipboard!");
    } catch {
      alert(`Please copy this email address: ${email}`);
    }
  };

const copyPhone = async () => {
  const phone = "+234 9025618318";

  try {
    await navigator.clipboard.writeText(phone);
    alert("Phone number copied to clipboard!");
  } catch {
    alert(`Please copy this phone number: ${phone}`);
  }
};

  return (
    <>
      <nav className="navbar">
        <a className="logo" href="#home" aria-label="Back to home">
          AO<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact" className="nav-contact">
            Let's Connect <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">
              <span className="eyebrow-line" />
              COMPUTER SCIENCE GRADUATE
            </p>

            <h1>
              Abdul Oluwatobiloba
              <span> Ayomide.</span>
            </h1>

            <h2>Technology. Insight. Solutions.</h2>

            <p className="hero-role">
              Fintech Operations <span>·</span> IT Support{" "}
              <span>·</span> Cybersecurity <span>·</span> Data Analysis
            </p>

            <p className="intro">
              Computer Science graduate with practical experience in
              fintech operations, IT support, cybersecurity and data
              analysis. Interested in applying technology to solve
              real-world problems, improve processes and develop useful
              digital solutions.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                Explore My Projects <span aria-hidden="true">↗</span>
              </a>

              <a
                href="/my%20cv.pdf"
                download="Abdul-Oluwatobiloba-CV.pdf"
                className="download-button"
              >
                <span aria-hidden="true">↓</span> Download My CV
              </a>
            </div>

            <div className="quick-info">
              <span>Fintech</span>
              <span>Cybersecurity</span>
              <span>Data Analysis</span>
            </div>
          </div>

          <div className="portrait-wrapper">
            <div className="portrait-frame">
              <img
                src="/profile.png"
                alt="Portrait of Abdul Oluwatobiloba Ayomide"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
              <span className="portrait-accent" aria-hidden="true" />
            </div>

            <p className="portrait-caption">
              Learning, building and growing through technology.
            </p>
            <span className="portrait-index">LAGOS, NIGERIA</span>
          </div>

          <a className="scroll-cue" href="#about">
            DISCOVER MORE <span aria-hidden="true">↓</span>
          </a>
        </section>

        <section className="section" id="about">
          <p className="eyebrow">
            <span className="eyebrow-line" />
            A LITTLE ABOUT ME
          </p>

          <h2>Technology with purpose.</h2>

          <p className="section-intro">
            I hold a B.Sc. in Computer Science from Adeleke University
            and have gained practical experience across fintech
            operations, IT support, cybersecurity and data analysis
            through internships, NYSC service and graduate trainee
            experience. These opportunities have helped me strengthen
            my technical skills, understand business operations and
            contribute to team-based work. I am interested in using
            technology to solve practical problems, improve processes
            and build useful digital solutions. I continue to develop
            my skills in software development, data analysis and
            cybersecurity while seeking opportunities to learn,
            collaborate and grow professionally.
          </p>

          <div className="about-facts">
            <article className="fact-card">
              <span className="fact-number">01</span>
              <strong>Education</strong>
              <span>B.Sc. Computer Science</span>
            </article>

            <article className="fact-card">
              <span className="fact-number">02</span>
              <strong>Experience</strong>
              <span>Fintech, IT Support &amp; Technology</span>
            </article>

            <article className="fact-card">
              <span className="fact-number">03</span>
              <strong>Location</strong>
              <span>Lagos, Nigeria</span>
            </article>
          </div>
        </section>

        <section className="section shaded" id="experience">
          <p className="eyebrow">
            <span className="eyebrow-line" />
            MY CAREER JOURNEY
          </p>

          <h2>Professional Experience</h2>

          <p className="section-intro">
            My professional journey across financial services,
            payment operations and information technology.
          </p>

          <div className="timeline">
            {experience.map((job, index) => (
              <article
                className="timeline-item"
                key={`${job.company}-${job.period}-${job.role}`}
              >
                <div className="timeline-marker">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="timeline-content">
                  <p className="date">{job.period}</p>
                  <h3>{job.role}</h3>
                  <h4>{job.company}</h4>
                  <p className="location">{job.location}</p>
                  <p>{job.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="skills">
          <p className="eyebrow">
            <span className="eyebrow-line" />
            MY TOOLKIT
          </p>

          <h2>Skills &amp; Competencies</h2>

          <p className="section-intro">
            Technical knowledge and workplace skills developed
            through education, training and practical experience.
          </p>

          <div className="skill-grid">
            {skills.map((skill) => (
              <span className="skill-pill" key={skill}>
                <span aria-hidden="true">✦</span> {skill}
              </span>
            ))}
          </div>

          <h3 className="subheading">Certifications &amp; Courses</h3>

          <div className="cert-grid">
            <article className="cert-card">
              <span className="cert-icon">01</span>
              <div>
                <h3>Cybersecurity</h3>
                <p>NIIT Lagos</p>
              </div>
              <span className="card-arrow" aria-hidden="true">↗</span>
            </article>

            <article className="cert-card">
              <span className="cert-icon">02</span>
              <div>
                <h3>Data Analytics</h3>
                <p>Google · Coursera</p>
              </div>
              <span className="card-arrow" aria-hidden="true">↗</span>
            </article>

            <article className="cert-card">
              <span className="cert-icon">03</span>
              <div>
                <h3>Data Science</h3>
                <p>Google · Coursera</p>
              </div>
              <span className="card-arrow" aria-hidden="true">↗</span>
            </article>
          </div>
        </section>

        <section className="section shaded" id="projects">
          <p className="eyebrow">
            <span className="eyebrow-line" />
            SELECTED WORK
          </p>

          <h2>Projects I've Been Building</h2>

          <p className="section-intro">
            Practical projects reflecting my interest in fintech,
            software development and useful digital solutions.
          </p>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-banner">
                  <span className="project-category">
                    {project.category}
                  </span>
                  <span className="project-number">
                    {project.number}
                  </span>
                </div>

                <div className="project-body">
                  <div className="project-heading">
                    <h3>{project.title}</h3>
                    <span className="project-symbol" aria-hidden="true">
                      ↗
                    </span>
                  </div>

                  <p>{project.description}</p>

                  <p className="technologies">
                    {project.technologies}
                  </p>

                  <div className="project-links">
                    <span className="project-status">
                      <span className="status-dot" />
                      {project.status}
                    </span>
                    <span className="project-note">
                      Portfolio project
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="education">
          <p className="eyebrow">
            <span className="eyebrow-line" />
            MY ACADEMIC BACKGROUND
          </p>

          <h2>Education</h2>

          <div className="education-list">
            {education.map((item) => (
              <article
                className="education-card"
                key={item.qualification}
              >
                <span className="education-period">
                  {item.period}
                </span>

                <div>
                  <h3>{item.qualification}</h3>
                  <p>{item.institution}</p>
                </div>

                <span className="education-arrow" aria-hidden="true">
                  ↗
                </span>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-inner">
            <p className="eyebrow">
              <span className="eyebrow-line" />
              LET'S CONNECT
            </p>

            <h2>Good work starts with a conversation.</h2>

            <p className="contact-intro">
              Open to opportunities, meaningful collaborations and
              conversations about technology. I'd be glad to connect.
            </p>

            <div className="hero-buttons contact-buttons">
              <button
                type="button"
                className="primary-button contact-button"
                onClick={copyEmail}
              >
                Copy My Email <span aria-hidden="true">↗</span>
              </button>

              <button
  type="button"
  className="secondary-button"
  onClick={copyPhone}
>
  +234 9025618318
</button>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/Ayomidee21"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <a className="logo footer-logo" href="#home">
          AO<span>.</span>
        </a>

        <p>
          © {new Date().getFullYear()} Abdul Oluwatobiloba Ayomide
        </p>

        <a className="back-to-top" href="#home">
          Back to top ↑
        </a>
      </footer>
    </>
  );
}

export default App;
