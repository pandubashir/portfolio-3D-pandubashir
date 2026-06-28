"use client";

import { useRef } from "react";

function MagneticEl({ children, className, href, title, target, rel, onClick }) {
  const ref = useRef(null);

  function handleMouseMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * 0.35;
    const dy = (e.clientY - cy) * 0.35;
    el.style.transform = `translate(${dx}px, ${dy}px)`;
  }

  function handleMouseLeave() {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  }

  return (
    <a
      ref={ref}
      href={href}
      title={title}
      target={target}
      rel={rel}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ transition: "transform 0.3s cubic-bezier(0.23,1,0.32,1), background 0.3s, border-color 0.3s, color 0.3s", display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      {children}
    </a>
  );
}

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
        <MagneticEl
          href="https://www.linkedin.com/in/pandu-bashir-alamin-a357a8331/"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-social-icon"
          title="LinkedIn"
        >
          in
        </MagneticEl>
        <MagneticEl
          href="mailto:pandubashir@gmail.com"
          className="nav-social-icon"
          title="Email"
        >
          ✉
        </MagneticEl>
      </div>
    </header>
  );
}

