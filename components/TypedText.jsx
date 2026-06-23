"use client";

import { useEffect, useState } from "react";

const WORDS = ["Machine Learning", "Data Science", "Data Analysis", "Software Engineering"];

export default function TypedText() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const currentWord = WORDS[wordIndex];
    let timeout;

    if (typing) {
      if (text.length < currentWord.length) {
        timeout = setTimeout(() => setText(currentWord.slice(0, text.length + 1)), 100);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), 50);
      } else {
        setWordIndex((i) => (i + 1) % WORDS.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, typing, wordIndex]);

  return (
    <h2 className="hero-subtitle">
      Enthusiast{" "}
      <span className="typed-text">{text}</span>
      <span className="cursor">|</span>
    </h2>
  );
}
