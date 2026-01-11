import { motion } from "motion/react";
import Link from "next/link";
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Timeline, TimelineEntry } from "../UI/timeline";

export default function Experience() {
  const isMobile = useIsMobile();
  const experiences = [
    {
      year: "Oct 2025 - Present",
      title: "Associate Software Engineer",
      company: "Accenture",
      location: "Gurugram, Haryana",
      href: "https://www.accenture.com/in-en",
      description:
        "Working on internal tools for Accenture employees to manage their assets and access IT services.",
      technologies: ["Java", "Spring Boot", "React"],
    },
    {
      year: "Feb 2025 - Jun 2025",
      title: "ASE Intern",
      company: "Accenture",
      location: "Gurugram, Haryana",
      href: "https://www.accenture.com/in-en",
      description:
        "Developed a Custom Jenkins Client that simplifies testing of Java project along with Test history visualization.",
      technologies: ["Java", "Maven", "Jenkins", "Spring Boot"],
    },
    {
      year: "Nov 2024 - Feb 2025",
      title: "Full-stack Developer Intern",
      company: "Multilipi Technologies",
      location: "Jaipur, Rajasthan",
      href: "https://multilipi.com/",
      description:
        "Developed the back-end application for translation of PDFs, Web pages and Text using AI. Configured and deployed Bhashini's Translation models on Azure Kubernetes Service.",
      technologies: ["Django", "Azure Cloud", "Networking", "Linux"],
    },
    {
      year: "Apr 2023 - Oct 2023",
      title: "Flutter Developer Intern",
      company: "DocTunes Audiotech Pvt. Ltd.",
      location: "Jaipur, Rajasthan",
      href: "https://doctunes.io/",
      description:
        "Contributed in developing an app for translating and converting documents into Speech using Azure TTS and Google Cloud Vision.",
      technologies: ["Flutter", "Firebase", "BLoC", "Azure Cloud"],
    },
  ];
  return (
    <section id="experience" className="relative z-10 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-emerald-400 text-center text-sm font-semibold mb-16 uppercase">
          My Experience
        </h3>
        <p className="text-center text-slate-400 mb-16">
          Full Stack Developer with experience building scalable applications,
          from mobile apps to cloud-deployed web services
        </p>
        {!isMobile && (
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
                    isMobile
                      ? "flex-col"
                      : idx % 2 === 0
                      ? "flex-row"
                      : "flex-row-reverse"
                  }`}
                >
                  <div className="w-1/2"></div>
                  <div className="w-5 h-5 bg-emerald-400 rounded-full relative z-10 flex items-center justify-center">
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
                    {exp.location && (
                      <p className="text-slate-500 text-xs mt-1">
                        {exp.location}
                      </p>
                    )}
                    <p className="text-slate-400 text-sm mt-3">
                      {exp.description}
                    </p>
                    {exp.technologies && (
                      <div className="flex gap-2 flex-wrap mt-4">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs bg-slate-800 border border-slate-700 rounded text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
        {isMobile && (
          <div className="relative">
            <div className="space-y-12">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`flex gap-8 flex-row`}
                >
                  {/* <div className="w-1/2"></div>
                  <div className="w-5 h-5 bg-emerald-400 rounded-full relative z-10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full"></div>
                  </div> */}
                  <div className="w-full p-6 border border-slate-700 rounded-lg bg-slate-900/30 hover:bg-slate-900/50 transition">
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
                    {exp.location && (
                      <p className="text-slate-500 text-xs mt-1">
                        {exp.location}
                      </p>
                    )}
                    <p className="text-slate-400 text-sm mt-3">
                      {exp.description}
                    </p>
                    {exp.technologies && (
                      <div className="flex gap-2 flex-wrap mt-4">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs bg-slate-800 border border-slate-700 rounded text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
