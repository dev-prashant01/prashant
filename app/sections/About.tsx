"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

function calculateYearsFromSep2024() {
  const start = new Date(2023, 8, 1);
  const today = new Date();
  let years = today.getFullYear() - start.getFullYear();

  const hasNotCompletedYear =
    today.getMonth() < start.getMonth() ||
    (today.getMonth() === start.getMonth() &&
      today.getDate() < start.getDate());

  if (hasNotCompletedYear) {
    years--;
  }

  return years;
};

const stats = [
  { num: calculateYearsFromSep2024() + "+", label: "Year Building" },
  { num: "10+", label: "Projects Shipped" },
  { num: "∞", label: "Things To Learn" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="border-t border-border py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="font-mono text-xs text-accent tracking-[0.2em] uppercase">
            01 — About
          </span>
          <span className="h-px w-20 bg-accent/40" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-sans font-extrabold tracking-tight mb-12"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1 }}
        >
          The Story
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-sm leading-[1.9] text-[#b0b0b0] border-l-2 border-b-2 border-accent p-6"
          >
            <p>
              I&apos;m Prashant, a former gearhead{" "}
              <strong className="text-accent">(Mechanical Engineer)</strong> and
              current coding enthusiast. While I loved the world of mechanics,
              the pull of creativity and user connection in web development
              proved too strong.
            </p>
            <br />
            <p>
              Now, I&apos;m leveraging my analytical mind and problem-solving
              skills to build intuitive and impactful web experiences. I&apos;m
              actively building projects showcasing my skills in{" "}
              <strong className="text-accent">Web Development</strong>. Excited
              to keep learning, collaborating, and contributing meaningful
              solutions.
            </p>
            <br />
            <p className="text-teal">
              Want to join the journey? Explore my portfolio and let&apos;s
              connect!
            </p>
          </motion.div>
          <div className="flex flex-col gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="relative border border-border p-6 group hover:border-teal transition-colors duration-200 overflow-hidden"
              >
                <span className="absolute left-0 top-0 w-[3px] h-full bg-teal" />
                <div className="font-sans font-extrabold text-4xl text-teal leading-none">
                  {stat.num}
                </div>
                <div className="font-mono text-xs text-muted tracking-[0.1em] uppercase mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
              className="border border-border p-4 font-mono text-xs text-muted bg-surface"
            >
              <span className="text-accent">const</span>{" "}
              <span className="text-teal">prashant</span>{" "}
              <span className="text-[#e8e8e8]">= {"{"}</span>
              <br />
              &nbsp;&nbsp;
              <span className="text-accent">role</span>
              <span className="text-[#e8e8e8]">: </span>
              <span className="text-teal">&quot;MERN Developer&quot;</span>
              <span className="text-[#e8e8e8]">,</span>
              <br />
              &nbsp;&nbsp;
              <span className="text-accent">from</span>
              <span className="text-[#e8e8e8]">: </span>
              <span className="text-teal">&quot;Mechanical → Web&quot;</span>
              <span className="text-[#e8e8e8]">,</span>
              <br />
              &nbsp;&nbsp;
              <span className="text-accent">open</span>
              <span className="text-[#e8e8e8]">: </span>
              <span className="text-accent">true</span>
              <br />
              <span className="text-[#e8e8e8]">{"}"}</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
