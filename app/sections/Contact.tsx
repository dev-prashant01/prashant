"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [copied, setCopied] = useState(false);

  const email = "prashantsinghrajput56@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="border-t border-border py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-3 mb-4"
        >
          <span className="font-mono text-xs text-accent tracking-[0.2em] uppercase">
            04 — Contact
          </span>
          <span className="h-px w-20 bg-accent/40" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-sans font-extrabold tracking-tight mb-6"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 0.95 }}
            >
              Let&apos;s Build
              <br />
              <span className="text-accent">Something.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-mono text-sm text-muted leading-[1.8] mb-8"
            >
              Open to full-time roles, freelance projects, and interesting
              collaborations. Drop a message and let&apos;s talk.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <button
                onClick={handleCopy}
                className="group flex items-center gap-3 font-sans font-bold text-xl text-accent hover:opacity-70 transition-opacity duration-200"
              >
                {email}
                <span className="font-mono text-xs text-muted group-hover:text-accent transition-colors border border-border px-2 py-1">
                  {copied ? "Copied!" : "Copy"}
                </span>
              </button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="flex flex-col gap-4"
          >
            {[
              { Icon: FaGithub, label: "GitHub", href: "https://github.com/dev-prashant01", sub: "Check my repos" },
              // { Icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com", sub: "Connect professionally" },
              // { Icon: FaTwitter, label: "Intagram", href: "https://twitter.com", sub: "Say hi publicly" },
            ].map(({ Icon, label, href, sub }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-5 border border-border p-4 hover:border-teal transition-all duration-200 group"
              >
                <Icon
                  size={20}
                  className="text-muted group-hover:text-teal transition-colors duration-200 flex-shrink-0"
                />
                <div>
                  <div className="font-sans font-semibold text-sm text-[#e8e8e8] group-hover:text-teal transition-colors duration-200">
                    {label}
                  </div>
                  <div className="font-mono text-[10px] text-muted tracking-[0.05em]">
                    {sub}
                  </div>
                </div>
                <span className="ml-auto text-muted group-hover:text-teal transition-colors">
                  ↗
                </span>
              </a>
            ))}

            <a
              href="/prashant_resume.pdf"
              download
              className="flex items-center justify-center gap-2 font-mono text-xs tracking-[0.15em] uppercase border border-accent text-accent px-6 py-4 hover:bg-accent hover:text-[#0a0a0a] transition-all duration-200"
            >
              Download Resume ↓
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
