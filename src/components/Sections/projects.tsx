import { Play } from '@carbon/icons-react';
import React from 'react'

export default function Projects() {
    const projects = [
        {
          title: "Dashboard Development",
          description: "Built custom dashboards with clean UI and powerful backend",
          tags: ["React", "Node.js", "PostgreSQL"],
        },
        {
          title: "Backend Development",
          description: "Complex server architecture and database optimization",
          tags: ["Node.js", "AWS", "PostgreSQL"],
        },
      ];
  return (
    <section id="projects" className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-emerald-400 text-center text-sm font-semibold mb-4 uppercase">
            Real Work, Real Results
          </h3>
          <p className="text-center text-slate-400 max-w-2xl mx-auto mb-12">
            A collection of full stack projects built with clean code, modern
            tech, and a focus on performance and usability.
          </p>

          {/* Project tags */}
          <div className="flex gap-2 justify-center mb-12 flex-wrap">
            {[
              "Web Design",
              "Branding",
              "Development",
              "UI / UX",
              "Strategy",
            ].map((tag) => (
              <button
                key={tag}
                className="px-4 py-2 text-xs border border-slate-700 rounded-full hover:border-emerald-400 hover:text-emerald-400 transition"
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="p-6 border border-slate-700 rounded-lg bg-slate-900/20 hover:bg-slate-900/40 transition"
              >
                <h4 className="font-bold mb-2 text-lg">{project.title}</h4>
                <p className="text-slate-400 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-slate-800 border border-slate-700 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}
