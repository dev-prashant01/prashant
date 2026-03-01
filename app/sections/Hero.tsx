"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const phrases = [
  "MERN Stack Developer",
  "React Enthusiast",
  "Backend Engineer",
  "Problem Solver",
  "Ex-Mechanic 🔧",
];

function Typewriter() {
  const [text, setText] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[phraseIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting) {
      timeout = setTimeout(() => {
        setText(phrase.substring(0, charIdx + 1));
        setCharIdx((c) => c + 1);
        if (charIdx + 1 === phrase.length) {
          setTimeout(() => setDeleting(true), 1800);
        }
      }, 90);
    } else {
      timeout = setTimeout(() => {
        setText(phrase.substring(0, charIdx - 1));
        setCharIdx((c) => c - 1);
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setPhraseIdx((i) => (i + 1) % phrases.length);
        }
      }, 50);
    }
    return () => clearTimeout(timeout);
  }, [text, phraseIdx, charIdx, deleting]);

  return (
    <span className="font-mono text-sm sm:text-base text-[#b0b0b0]">
      {text}
      <span className="typewriter-cursor" />
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(#1e1e1e 1px, transparent 1px), linear-gradient(90deg, #1e1e1e 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-teal/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-5 h-px bg-teal" />
          <span className="font-mono text-xs text-teal tracking-[0.2em] uppercase">
            Available for work 
          </span>
          <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-sans font-extrabold leading-[0.9] tracking-tighter mb-6"
          style={{ fontSize: "clamp(3.5rem, 11vw, 9rem)" }}
        >
          Hi, I&apos;m
          <br />
          <span className="text-accent">Prashant</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <Typewriter />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="font-mono text-xs tracking-[0.1em] uppercase px-7 py-3 bg-accent text-[#0a0a0a] border border-accent hover:bg-transparent hover:text-accent transition-all duration-200"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="font-mono text-xs tracking-[0.1em] uppercase px-7 py-3 border border-border text-[#e8e8e8] hover:border-accent hover:text-accent transition-all duration-200"
          >
            Let&apos;s Connect
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap gap-2 mt-12"
        >
          {["MongoDB", "Express", "React", "Node.js"].map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs text-muted border border-border px-3 py-1 hover:border-accent hover:text-accent transition-all duration-200"
            >
              {tech}
            </span>
          ))}
          <span className="font-mono text-xs text-muted px-3 py-1">
            + more
          </span>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-10 left-6 font-mono text-[10px] text-muted tracking-[0.2em] uppercase hidden sm:flex items-center gap-3"
        style={{ writingMode: "vertical-rl" }}
      >
        Scroll
        <span
          className="w-px bg-gradient-to-b from-accent to-transparent animate-scroll-line"
          style={{ height: 60 }}
        />
      </motion.div>

      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2 font-mono text-[10px] text-[#1e1e1e]">
        {Array.from({ length: 20 }, (_, i) => (
          <span key={i}>{String(i + 1).padStart(2, "0")}</span>
        ))}
      </div>
    </section>
  );
}
