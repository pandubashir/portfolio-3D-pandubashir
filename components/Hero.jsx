"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import TypedText from "./TypedText";


function MagneticBtn({ children, href, className, target, rel }) {
  const ref = useRef(null);

  function handleMouseMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * 0.28;
    const dy = (e.clientY - cy) * 0.28;
    el.style.transform = `translate(${dx}px, ${dy}px)`;
  }

  function handleMouseLeave() {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  }

  return (
    <a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: "transform 0.4s cubic-bezier(0.23,1,0.32,1), box-shadow 0.3s, background 0.3s" }}
    >
      {children}
    </a>
  );
}

export default function Hero() {
  const imgRef = useRef(null);

  useEffect(() => {
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;
    let rafId;

    function handleMouseMove(e) {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      targetX = (e.clientX - cx) / cx;
      targetY = (e.clientY - cy) / cy;
    }

    function handleTouchMove(e) {
      const touch = e.touches[0];
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      targetX = (touch.clientX - cx) / cx;
      targetY = (touch.clientY - cy) / cy;
    }

    function handleMouseLeave() {
      targetX = 0;
      targetY = 0;
    }

    function animate() {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;
      if (imgRef.current) {
        imgRef.current.style.transform = `translate(${currentX * 10}px, ${currentY * 6}px) scale(1.02)`;
      }
      rafId = requestAnimationFrame(animate);
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
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
          <MagneticBtn
            href="https://www.linkedin.com/in/pandu-bashir-alamin-a357a8331/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Get In Touch →
          </MagneticBtn>
          <MagneticBtn href="#projects" className="btn btn-ghost">
            Browse Projects
          </MagneticBtn>
        </div>
      </div>

      <div className="hero-image-wrapper">
        
        <div className="hero-image-glow" />
        <img
          ref={imgRef}
          className="hero-profile-img"
          src="/poto-pandu.png"
          alt="Pandu Bashir Alamin"
        />
      </div>
    </section>
  );
}