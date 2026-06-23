export default function Navbar() {
  return (
    <header className="topnav">
      <div className="nav-logo">
        Pandu Bashir Alamin<span>.</span>
      </div>
      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>
      <div className="nav-social">
        <a
          href="https://www.linkedin.com/in/pandu-bashir-alamin-a357a8331/"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-social-icon"
          title="LinkedIn"
        >
          in
        </a>
        <a href="mailto:pandubashir@gmail.com" className="nav-social-icon" title="Email">
          ✉
        </a>
      </div>
    </header>
  );
}
