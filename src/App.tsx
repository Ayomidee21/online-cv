
import "./App.css";

const projects = [
  {
    number: "01",
    title: "FortisTrade",
    status: "In View",
    description:
      "Developing a fintech platform focused on Nigerian Exchange (NGX) market data, listed companies and market analysis, with simulated stock trading planned as the next stage.",
    technologies: "React · TypeScript · Express · Prisma · Neon PostgreSQL",
  },
  {
    number: "02",
    title: "Fortis Ticketing Platform",
    status: "In View",
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

function App() {
  return (
    <>
      <nav className="navbar">
        <a className="logo" href="#home">
          AO.
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact" className="nav-contact">
            Contact
          </a>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">WELCOME TO MY PORTFOLIO</p>

            <h1>
              Abdul Oluwatobiloba
              <span> Ayomide.</span>
            </h1>

            <h2>
              Computer Science Graduate | Fintech &amp; IT Professional
            </h2>

            <p className="intro">
              Computer Science graduate with practical experience in
              fintech operations, IT support, cybersecurity and data
              analysis. Interested in applying technology to solve
              real-world problems, improve processes and develop useful
              digital solutions.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                Explore My Projects ↗
              </a>

              <a
                href="/my%20cv.pdf"
                download="Abdul-Oluwatobiloba-CV.pdf"
                className="download-button"
              >
                Download My CV
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
              <div className="portrait-placeholder">
                <span>YOUR PHOTO</span>
                <small>Add your picture as public/profile.png</small>
              </div>
            </div>
            <p className="portrait-caption">
              Learning, building and growing through technology.
            </p>
          </div>
        </section>

        <section className="section" id="about">
          <p className="eyebrow">A LITTLE ABOUT ME</p>
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
            <div>
              <strong>Education</strong>
              <span>B.Sc. Computer Science</span>
            </div>
            <div>
              <strong>Experience</strong>
              <span>Fintech, IT Support &amp; Technology</span>
            </div>
            <div>
              <strong>Based In</strong>
              <span>Lagos, Nigeria</span>
            </div>
          </div>
        </section>

        <section className="section shaded" id="experience">
          <p className="eyebrow">MY CAREER JOURNEY</p>
          <h2>Professional Experience</h2>

          <div className="timeline">
            {experience.map((job) => (
              <article
                className="timeline-item"
                key={`${job.company}-${job.period}-${job.role}`}
              >
                <p className="date">{job.period}</p>
                <h3>{job.role}</h3>
                <h4>{job.company}</h4>
                <p className="location">{job.location}</p>
                <p>{job.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="skills">
          <p className="eyebrow">MY TOOLKIT</p>
          <h2>Skills &amp; Competencies</h2>

          <div className="skill-grid">
            {skills.map((skill) => (
              <span className="skill-pill" key={skill}>
                {skill}
              </span>
            ))}
          </div>

          <h3 className="subheading">Certifications &amp; Courses</h3>

          <div className="cert-grid">
            <article className="cert-card">
              <span className="cert-icon">01</span>
              <h3>Cybersecurity</h3>
              <p>NIIT Lagos</p>
            </article>

            <article className="cert-card">
              <span className="cert-icon">02</span>
              <h3>Data Analytics</h3>
              <p>Google · Coursera</p>
            </article>

            <article className="cert-card">
              <span className="cert-icon">03</span>
              <h3>Data Science</h3>
              <p>Google · Coursera</p>
            </article>
          </div>
        </section>

        <section className="section shaded" id="projects">
          <p className="eyebrow">SELECTED WORK</p>
          <h2>Projects I've Been Building</h2>

          <p className="section-intro">
            These projects reflect my interest in fintech, software
            development and building practical digital solutions.
          </p>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-symbol">↗</span>
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className="technologies">{project.technologies}</p>

                <div className="project-links">
                  <span className="project-status">{project.status}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="education">
          <p className="eyebrow">MY ACADEMIC BACKGROUND</p>
          <h2>Education</h2>

          <div className="education-list">
            <article>
              <span>2021 – 2024</span>
              <div>
                <h3>B.Sc. Computer Science</h3>
                <p>Adeleke University, Osun State, Nigeria</p>
              </div>
            </article>

            <article>
              <span>2014 – 2020</span>
              <div>
                <h3>Senior Secondary Education (SSCE)</h3>
                <p>Nigerian Navy Secondary School, Ogbomoso</p>
              </div>
            </article>

            <article>
              <span>2007 – 2014</span>
              <div>
                <h3>First School Leaving Certificate</h3>
                <p>Gloryville Nursery &amp; Primary School</p>
              </div>
            </article>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <p className="eyebrow">LET'S CONNECT</p>
          <h2>Open to opportunities and new ideas.</h2>

          <p>
            Interested in my experience or have an opportunity to discuss?
            Feel free to reach out.
          </p>

          <div className="hero-buttons contact-buttons">
            <button
  type="button"
  className="contact-button"
  onClick={() => {
    navigator.clipboard.writeText("abdulayomide703@gmail.com")
      .then(() => {
        alert("Email address copied to clipboard!");
      })
      .catch(() => {
        alert("Could not copy automatically. Email: abdulayomide703@gmail.com");
      });
  }}
>
  Email Me
</button>

            <a
              className="secondary-button"
              href="tel:+2349025618318"
            >
              +234 902 561 8318
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/Ayomidee21"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </section>
      </main>

      <footer>
        <a className="logo footer-logo" href="#home">
          AO.
        </a>
        <p>© {new Date().getFullYear()} Abdul Oluwatobiloba Ayomide</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}

export default App;
