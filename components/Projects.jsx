import FadeIn from "./FadeIn";

export default function Projects() {
  return (
    <section id="projects">
      <FadeIn className="section-label">Work</FadeIn>
      <FadeIn as="h2" className="section-title">
        My Best Creations.
      </FadeIn>
      <FadeIn as="div">
        <a
          href="https://klasifikasistuntingapp-upikbl6mkjbfbbwxbxhxli.streamlit.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
        >
          <div
            className="project-orb"
            style={{ width: 300, height: 300, background: "rgba(139,92,246,0.15)", top: -80, right: -80 }}
          />
          <div
            className="project-orb"
            style={{ width: 200, height: 200, background: "rgba(99,102,241,0.1)", bottom: -40, left: "20%" }}
          />
          <div className="project-tags">
            <span style={{ fontSize: "2rem" }}>🧬</span>
            <span className="project-tag">Machine Learning</span>
            <span className="project-tag">Flask</span>
            <span className="project-tag">SQLite</span>
            <span className="project-tag">SVM</span>
          </div>
          <h3 className="project-title">Child Growth Classification App</h3>
          <p className="project-desc">
            A web-based application built with Flask and SQLite that utilizes Support Vector
            Machine (SVM) models via joblib to classify and track child development metrics.
          </p>
          <div className="project-link">
            <span>View Project</span>
            <div className="project-link-arrow">→</div>
          </div>
        </a>
      </FadeIn>

      <FadeIn as="div">
        <a
          href="https://huggingface.co/spaces/p4nduu/garbage-classification"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
        >
          <div
            className="project-orb"
            style={{ width: 300, height: 300, background: "rgba(139,92,246,0.15)", top: -80, right: -80 }}
          />
          <div
            className="project-orb"
            style={{ width: 200, height: 200, background: "rgba(99,102,241,0.1)", bottom: -40, left: "20%" }}
          />
          <div className="project-tags">
            <span style={{ fontSize: "2rem" }}>♻️</span>
            <span className="project-tag">Deep Learning</span>
            <span className="project-tag">Computer Vision</span>
            <span className="project-tag">Gradio</span>
            <span className="project-tag">HuggingFace</span>
          </div>
          <h3 className="project-title">Garbage Classification App</h3>
          <p className="project-desc">
            A computer vision app deployed on Hugging Face Spaces that classifies
            images of trash into cardboard, glass, metal, paper, plastic, or
            general waste in real time.
          </p>
          <div className="project-link">
            <span>View Project</span>
            <div className="project-link-arrow">→</div>
          </div>
        </a>
      </FadeIn>
    </section>
  );
}