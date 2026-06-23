import FadeIn from "./FadeIn";

const SKILLS = [
  { icon: "devicon-python-plain", label: "Python", type: "dev" },
  { icon: "devicon-flask-original", label: "Flask", type: "dev" },
  { emoji: "📦", label: "Joblib" },
  { icon: "devicon-sqlite-plain", label: "SQLite", type: "dev" },
  { emoji: "🤖", label: "Machine Learning" },
  { emoji: "📈", label: "SVM Model" },
  { icon: "devicon-html5-plain", label: "HTML/CSS", type: "dev" },
  { icon: "devicon-react-original", label: "React JS", type: "dev" },
  { icon: "devicon-javascript-plain", label: "JavaScript", type: "dev" },
  { icon: "devicon-numpy-plain", label: "NumPy", type: "dev" },
  { icon: "devicon-pandas-plain", label: "Pandas", type: "dev" },
  { emoji: "🔬", label: "Scikit-learn" },
  { emoji: "🧬", label: "Data Science" },
  { emoji: "📊", label: "Data Analysis" },
  { emoji: "⚙️", label: "Algorithm Design" },
  { emoji: "📉", label: "Power BI" },
  { emoji: "📋", label: "Tableau" },
];

function ToolCard({ skill, keyPrefix }) {
  return (
    <div className="tool-card">
      {skill.type === "dev" ? (
        <i className={skill.icon} />
      ) : (
        <span className="emoji-i">{skill.emoji}</span>
      )}
      <span>{skill.label}</span>
    </div>
  );
}

export default function Skills() {
  const doubled = [...SKILLS, ...SKILLS];

  return (
    <section className="skills-section" id="skills">
      <div style={{ textAlign: "center", marginBottom: 32, padding: "0 80px" }}>
        <FadeIn className="section-label">Expertise</FadeIn>
        <FadeIn as="h2" className="section-title" style={{ marginBottom: 0 }}>
          Tools &amp; Skills
        </FadeIn>
      </div>
      <div className="marquee-wrap">
        <div className="marquee-track">
          {doubled.map((skill, i) => (
            <ToolCard key={`${skill.label}-${i}`} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
