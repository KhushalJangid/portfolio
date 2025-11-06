import { motion } from "motion/react";
import Link from "next/link";
import React from "react";

export default function Experience() {
  const experiences = [
    {
      year: "Oct 2025 - Present",
      title: "Associate Software Engineer",
      company: "Accenture",
      href: "https://www.accenture.com/in-en",
      description:
        "Working on the Accenture Digital Platforms team, building scalable, user-friendly Products for the clients.",
    },
    {
      year: "Feb 2025 - Jun 2025",
      title: "ASE Intern",
      company: "Accenture",
      href: "https://www.accenture.com/in-en",
    },
    {
      year: "Nov 2024 - Feb 2025",
      title: "Full-Stack Developer Intern",
      company: "Multilipi",
      href: "https://multilipi.com/",
    },
    {
      year: "Apr 2023 - Sept 2023",
      title: "Flutter Developer Intern",
      company: "Doctunes Audiotech",
      href: "https://doctunes.io/",
    },
  ];
  return (
    <section id="experience" className="relative z-10 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-emerald-400 text-center text-sm font-semibold mb-16 uppercase">
          My Experience
        </h3>
        <p className="text-center text-slate-400 mb-16">
          Full Stack Developer with 2+ years of experience building scalable,
          user-friendly Products
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-emerald-400 via-emerald-400 to-slate-700"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`flex gap-8 ${
                  idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className="w-1/2"></div>
                <div className="w-6 h-6 bg-emerald-400 rounded-full relative z-10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full"></div>
                </div>
                <div className="w-1/2 p-6 border border-slate-700 rounded-lg bg-slate-900/30 hover:bg-slate-900/50 transition">
                  <p className="text-emerald-400 text-sm font-semibold">
                    {exp.year}
                  </p>
                  <h4 className="text-lg font-bold mt-2">{exp.title}</h4>
                  <Link
                    href={exp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-fuchsia-300 font-bold text-sm text-decoration-underline hover:text-fuchsia-400 transition"
                  >
                    {exp.company}
                  </Link>
                  <p className="text-slate-400 text-sm">{exp.description}</p>
                  {/* <Link href={exp.href} className="text-emerald-400 text-sm">
                    View Project
                  </Link> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
