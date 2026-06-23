"use client";

import { useEffect, useRef, useState } from "react";

export default function FadeIn({ children, as: Tag = "div", className = "", style }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`fade-in ${visible ? "visible" : ""} ${className}`} style={style}>
      {children}
    </Tag>
  );
}
