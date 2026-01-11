import React from 'react'
import TextType from '../UI/TextType'
import Image from 'next/image'

export default function about() {
  return (
    <section id="about" className="relative z-10">
        <div className="min-h-screen max-w-7xl w-full flex items-center justify-center px-5 sm:px-20 py-20 pt-30">
          <div>
            <p className="text-fuchsia-300 text-2xl font-mono mb-4">
              Hello, I'm
            </p>
            <h2 className="lg:text-9xl sm:text-5xl text-2xl font-semibold font-mono mb-6 text-emerald-400">
              Khushal Jangid
            </h2>
            <div className="text-xl text-slate-400 mb-6 max-w-xl">
              <span className="font-mono text-fuchsia-300 text-xl font-semibold">
                <TextType
                  text={[
                    "Full Stack Developer",
                    "Graphic Designer",
                    "Cloud Architect",
                  ]}
                  typingSpeed={60}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="_"
                />
              </span>
              <br />
              Crafting digital experiences with clean, modern code, elegant
              design, and exceptional problem-solving.
            </div>
            <div className="flex gap-4 items-center mb-8">
              <button
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-5 py-2 bg-emerald-400 text-slate-950 font-semibold rounded hover:bg-emerald-300 transition cursor-pointer"
              >
                Get in touch
              </button>
            </div>
            <div className="flex gap-3 flex-wrap">
              {[
                "Full Stack",
                "Cross-Platform Apps",
                "Web Design",
                "Cloud Architecture",
                "System Design",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs border border-slate-700 rounded-full text-slate-400 hover:text-emerald-400 hover:border-emerald-400 transition cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="absolute right-50 top-1/6 transform-scale-200 z-11 invisible lg:visible">
            <div className="w-72 h-72 flex items-center justify-center">
              <Image
                src="/portrait.png"
                alt="Profile"
                width={256}
                height={256}
              />
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto py-20">
          <h3 className="text-emerald-400 text-center text-sm font-semibold mb-8 uppercase">
            About me
          </h3>
          <p className="text-center text-slate-300 max-w-2xl mx-auto text-lg mb-8">
            Full Stack Developer with a passion for solving
            real-world problems through code. From ideation to deployment, I
            bring ideas to life. I'm focused on building scalable solutions
            with cutting-edge technology and delivering digital products.
          </p>

          {/* Achievements */}
          {/* <div className="mb-16">
            <h4 className="text-emerald-400 text-center text-sm font-semibold mb-6 uppercase">
              Achievements & Certifications
            </h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {[
                {
                  label: "Research Paper Published",
                  description: "Flutter app development (Dec, 2023)",
                  link: "https://pratibodh.org",
                },
                {
                  label: "StackOverflow Reputation",
                  description: "770+ Reputation (As of Jun, 2025)",
                  link: "https://stackoverflow.com/users/14458028/khushal",
                },
                {
                  label: "Open Source Contributor",
                  description: "90+ Stars on GitHub Repository",
                  link: "https://github.com/KhushalJangid/sync.io",
                },
              ].map((achievement, idx) => (
                <a
                  key={idx}
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 border border-slate-700 rounded-lg text-center hover:bg-slate-900 hover:border-emerald-400/50 transition group"
                >
                  <p className="text-emerald-400 font-semibold mb-2 group-hover:text-emerald-300 transition">
                    {achievement.label}
                  </p>
                  <p className="text-slate-400 text-sm">
                    {achievement.description}
                  </p>
                </a>
              ))}
            </div>
          </div> */}

          {/* Stats */}
          {/* <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                label: "3+ Internships",
                value: "Accenture, Multilipi, DocTunes",
              },
              {
                label: "3 Major Projects",
                value: "Renaissance, Codeware, StreamIt",
              },
              {
                label: "6+ Languages",
                value: "Python, Java, Dart, C++, Go, JS",
              },
              { label: "Cloud & DevOps", value: "AWS, Docker, Jenkins, CI/CD" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="p-6 border border-slate-700 rounded-lg text-center hover:bg-slate-900 transition"
              >
                <p className="text-emerald-400 font-semibold mb-2">
                  {stat.label}
                </p>
                <p className="text-slate-400 text-xs">{stat.value}</p>
              </div>
            ))}
          </div> */}
        </div>
      </section>
  )
}
