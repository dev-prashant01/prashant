"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projects } from "@/data/projects";

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="border-t border-border py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-3 mb-4"
        >
          <span className="font-mono text-xs text-accent tracking-[0.2em] uppercase">
            03 — Work
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
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group border border-border bg-surface hover:border-accent transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col"
            >
              {/* Project image / gradient */}
              <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                <span className="text-5xl z-10 group-hover:scale-110 group-hover:animate-float transition-transform duration-300">
                  {project.icon}
                </span>

                {/* Grid overlay */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                  }}
                />

                {project.featured && (
                  <span className="absolute top-3 right-3 font-mono text-[9px] tracking-[0.15em] uppercase bg-accent text-[#0a0a0a] px-2 py-1">
                    Featured
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="font-mono text-[10px] text-accent tracking-[0.2em] mb-2">
                  // PROJECT_{String(project.id).padStart(2, "0")}
                </div>

                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="font-sans font-bold text-[#e8e8e8] text-base leading-tight">
                    {project.name}
                  </h3>
                  <div className="flex gap-2 flex-shrink-0">
                    {project.githubLink && (
                      <Link
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted hover:text-teal transition-colors duration-200"
                      >
                        <FaGithub size={14} />
                      </Link>
                    )}
                    {project.pLink && (
                      <Link
                        href={project.pLink}
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted hover:text-accent transition-colors duration-200"
                      >
                        <FaExternalLinkAlt size={12} />
                      </Link>
                    )}
                  </div>
                </div>

                <p className="font-mono text-xs text-muted leading-[1.7] flex-1 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[9px] tracking-[0.08em] uppercase border border-border text-muted px-2 py-1 group-hover:border-accent/30 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs tracking-[0.15em] uppercase text-muted hover:text-teal border border-border hover:border-teal px-8 py-3 transition-all duration-200 inline-block"
          >
            View All on GitHub ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}
