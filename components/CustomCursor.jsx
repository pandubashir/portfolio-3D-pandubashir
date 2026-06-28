"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const arrowRef = useRef(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let rafId;

    function onMouseMove(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }

    function onMouseEnterInteractive() {
      arrowRef.current?.classList.add("cursor-hover");
    }

    function onMouseLeaveInteractive() {
      arrowRef.current?.classList.remove("cursor-hover");
    }

    function animate() {
      if (arrowRef.current) {
        arrowRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
      rafId = requestAnimationFrame(animate);
    }

    const interactives = document.querySelectorAll("a, button, .tool-card, .project-card, .track-item, .nav-social-icon");
    interactives.forEach(el => {
      el.addEventListener("mouseenter", onMouseEnterInteractive);
      el.addEventListener("mouseleave", onMouseLeaveInteractive);
    });

    document.addEventListener("mousemove", onMouseMove);
    animate();

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
      interactives.forEach(el => {
        el.removeEventListener("mouseenter", onMouseEnterInteractive);
        el.removeEventListener("mouseleave", onMouseLeaveInteractive);
      });
    };
  }, []);

  return (
    <div ref={arrowRef} className="cursor-arrow">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2L20 9.5L12.5 12.5L9.5 20L2 2Z" />
      </svg>
    </div>
  );
}