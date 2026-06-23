import FadeIn from "./FadeIn";

const EDUCATION = [
  {
    school: "Bachelor of Computer Science, Informatics Engineering — Esa Unggul University",
    year: "Sep 2021 – Aug 2025",
  },
  { school: "RevoU – Intro to Data Analytics", year: "November 2025" },
  { school: "Hacktiv8 – AI & Cybersecurity", year: "Aug 2024 – Dec 2024" },
];

const FOCUS_AREAS = [
  "Data Science & Analytics",
  "Machine Learning",
  "Web Development",
  "Digital Forensics",
  "Algorithm Design",
  "Data Visualization",
];

export default function About() {
  return (
    <section id="about">
      <FadeIn className="section-label">Who I Am</FadeIn>
      <FadeIn as="h2" className="section-title">
        About me.
      </FadeIn>
      <FadeIn as="p" className="about-text">
        Software Engineer with an interest in Data Science and Data Analysis. Passionate about
        building functional and user-oriented digital solutions while continuously improving
        technical skills. Interested in developing applications, working with data, and solving
        real-world problems through technology.
      </FadeIn>
      <FadeIn className="about-grid">
        <div className="glass glass-card">
          <div className="glass-card-title">🎓 Education</div>
          {EDUCATION.map((edu) => (
            <div className="edu-item" key={edu.school}>
              <div className="edu-dot" />
              <div>
                <div className="edu-school">{edu.school}</div>
                <div className="edu-year">{edu.year}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="glass glass-card">
          <div className="glass-card-title">⚡ Focus Areas</div>
          {FOCUS_AREAS.map((area) => (
            <div className="focus-item" key={area}>
              <div className="focus-dot" />
              <span className="focus-label">{area}</span>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
