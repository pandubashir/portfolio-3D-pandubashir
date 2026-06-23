"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import TypedText from "./TypedText";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

export default function Hero() {
  const imgRef = useRef(null);

  useEffect(() => {
    let targetX = 0,
      targetY = 0,
      currentX = 0,
      currentY = 0;
    let rafId;

    function handleMouseMove(e) {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      targetX = (e.clientX - cx) / cx;
      targetY = (e.clientY - cy) / cy;
    }

    function animate() {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;
      if (imgRef.current) {
        imgRef.current.style.transform = `scale(1.05) translate(${currentX * 12}px, ${currentY * 8}px)`;
      }
      rafId = requestAnimationFrame(animate);
    }

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Open for opportunities
        </div>
        <p className="hero-greeting">Hey, I&apos;m Pandu 👋</p>
        <h1 className="hero-title">
          Software
          <br />
          <span className="grad">Engineer</span>
        </h1>
        <p className="hero-tagline">Where Robust Logic Meets, Seamless Execution.</p>
        <TypedText />
        <p className="hero-desc">
          A Software Engineer passionate about Data Science, Data Analysis, and building
          functional systems you can rely on. Currently exploring machine learning, web
          development, and digital forensics.
        </p>
        <div className="hero-btns">
          <a
            href="https://www.linkedin.com/in/pandu-bashir-alamin-a357a8331/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Get In Touch →
          </a>
          <a href="#projects" className="btn btn-ghost">
            Browse Projects
          </a>
        </div>
      </div>

      <div className="hero-image-wrapper">
        <HeroScene />
        <div className="hero-image-glow" />
        {/* Replace the src below with your actual photo, e.g. /poto-pandu.jpg in /public */}
        <img
          ref={imgRef}
          className="hero-profile-img"
          src="/poto-pandu.jpg"
          alt="Pandu Bashir Alamin"
        />
      </div>
    </section>
  );
}
