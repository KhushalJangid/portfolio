import { Play, Launch } from "@carbon/icons-react";
import Link from "next/link";
import SpotlightCard from "../UI/SpotlightCard";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      image: "/screenshots/ren.jpg",
      title: "Renaissance 24",
      year: "Mar 2024",
      description:
        "An e-ticketing system developed for Renaissance'24 at JECRC. Compared to traditional ticketing systems, this system saved up-to 60% time and 20% cost.",
      link: "#",
      highlights: ["Django", "Flutter", "AWS Cloud"],
    },
    {
      image: "/screenshots/codeware.png",
      title: "Codeware",
      year: "Sept 2022",
      description:
        "An online IDE with features like Cloud Sync, Syntax highlighting, File upload/download and Code Compilation with an integrated terminal.",
      // tags: ["Django", "Websockets", "HTML/CSS/JS", "Linux", "Docker"],
      link: "#",
      highlights: ["Django", "React", "Websockets", "Docker"],
    },
    {
      image: "/screenshots/streamit.png",
      title: "StreamIt",
      year: "June 2024",
      description:
      "A Streaming platform made in Django that converts Mp4 videos into HLS Format using FFMPEG and uses Flutter application to decrypt and play encrypted HLS (.m3u8) files.",
      // tags: ["Django", "Celery", "Redis", "FFMPEG", "Flutter", "HLS"],
      link: "#",
      highlights: ["Django", "Celery", "FFMPEG", "Flutter"],
    },
    {
      image: "/screenshots/spendifi.png",
      title: "Spendifi",
      year: "June 2024",
      description:
        "A simple and elegant expense tracker app built with Flutter and Firebase, with features like recording expenses, income, and categories, setting budgets, and date import/export",
      // tags: ["Django", "Celery", "Redis", "FFMPEG", "Flutter", "HLS"],
      link: "#",
      highlights: ["Flutter", "Firebase", "BLoC"],
    },
    {
      image: "/screenshots/sync.io.png",
      title: "Sync.io",
      year: "June 2024",
      description:
"A simple and easy to use HTTP based file sharing server to aid platform independent wireless file sharing between multiple devices ",
      // tags: ["Django", "Celery", "Redis", "FFMPEG", "Flutter", "HLS"],
      link: "#",
      highlights: ["Go", "Gin", "Docker"],
    },
  ];
  return (
    <section id="projects" className="relative z-10 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-emerald-400 text-center text-sm font-semibold mb-4 uppercase">
          Featured Projects
        </h3>
        <p className="text-center text-slate-400 max-w-2xl mx-auto mb-12">
          A collection of full stack projects built with clean code, modern
          tech, and a focus on performance and scalability.
        </p>

        {/* Project Details */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20 mx-10">
          {projects.map((project, idx) => (
            <SpotlightCard
              key={idx}
              className="flex flex-col group bg-slate-900/20 rounded-sm"
              spotlightColor="rgba(0, 212, 146, 0.2)"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={100}
                height={100}
                className="w-full"
              />
              <div className="flex flex-col p-4 flex-1">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-bold mb-1 text-lg group-hover:text-emerald-400 transition">
                      {project.title}
                    </h4>
                    <p className="text-emerald-400 text-xs font-semibold">
                      {project.year}
                    </p>
                  </div>
                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-emerald-400 transition"
                    >
                      <Launch size={20} />
                    </Link>
                  )}
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-auto">
                  {project.description}
                </p>
                {project.highlights && (
                  <div className="flex gap-2 flex-wrap my-4">
                    {project.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-2 py-1 text-xs bg-emerald-400/10 border border-emerald-400/30 rounded text-emerald-400"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                )}
                {/* <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-slate-800 border border-slate-700 rounded text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div> */}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
