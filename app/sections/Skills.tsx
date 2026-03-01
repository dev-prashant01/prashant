"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/data/skills";

const categories = ["all", "frontend", "backend", "database", "tools"] as const;

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="border-t border-border py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-3 mb-4"
        >
          <span className="font-mono text-xs text-accent tracking-[0.2em] uppercase">
            02 — Skills
          </span>
          <span className="h-px w-20 bg-accent/40" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-sans font-extrabold tracking-tight mb-12"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1 }}
        >
          Tech Stack
        </motion.h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group relative border border-border p-4 flex flex-col items-center gap-2 hover:border-accent transition-all duration-200 overflow-hidden"
            >
              <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-[0.04] transition-opacity duration-200" />

              <span className="text-2xl group-hover:scale-110 transition-transform duration-200">
                {skill.icon}
              </span>
              <span className="font-mono text-[10px] text-muted tracking-[0.08em] uppercase group-hover:text-[#e8e8e8] transition-colors duration-200 text-center">
                {skill.name}
              </span>

              <div className="absolute bottom-0 left-0 h-[2px] bg-border w-full">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.04 }}
                  className="h-full bg-accent"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { letter: "M", name: "MongoDB", color: "text-green-400", desc: "Database" },
            { letter: "E", name: "Express", color: "text-gray-400", desc: "Framework" },
            { letter: "R", name: "React", color: "text-cyan-400", desc: "Frontend" },
            { letter: "N", name: "Node.js", color: "text-lime-400", desc: "Runtime" },
          ].map((item) => (
            <div
              key={item.letter}
              className="border border-border p-5 hover:border-teal transition-colors duration-200 group"
            >
              <div className={`font-sans font-extrabold text-4xl ${item.color} leading-none mb-1 group-hover:scale-105 transition-transform duration-200 inline-block`}>
                {item.letter}
              </div>
              <div className="font-sans font-bold text-sm text-[#e8e8e8]">
                {item.name}
              </div>
              {/* <div className="font-mono text-[10px] text-muted tracking-[0.1em] uppercase">
                {item.desc}
              </div> */}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
