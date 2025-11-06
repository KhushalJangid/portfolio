import { ChevronRight } from "@carbon/icons-react";
import {
  SiTypescript,
  SiNextdotjs,
  SiPython,
  SiFlutter,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiCplusplus,
  SiDjango,
  SiGo,
  SiSpringboot,
  SiDocker,
  SiLinux,
  SiGit,
  SiJenkins,
  SiFigma
} from "@icons-pack/react-simple-icons";
import { SiReact, SiTailwindcss } from "@icons-pack/react-simple-icons";
import React from "react";
import LogoLoop from "../UI/LogoLoop";

export default function Skills() {
  const logoSize = 72;
  const techLogos = [
    {
      node: <SiPython size={logoSize} />,
      title: "Python",
      href: "https://python.org",
    },
    {
      node: <SiDjango size={logoSize} />,
      title: "Django",
      href: "https://djangoproject.com",
    },
    {
      node: <SiFlutter size={logoSize} />,
      title: "Flutter",
      href: "https://flutter.dev",
    },
    {
      node: <SiGo size={logoSize} />,
      title: "Go",
      href: "https://go.dev",
    },
    {
      node: <SiSpringboot size={logoSize} />,
      title: "Spring Boot",
      href: "https://spring.io",
    },
    {
      node: <SiDocker size={logoSize} />,
      title: "Docker",
      href: "https://docker.com",
    },
    {
      node: <SiLinux size={logoSize} />,
      title: "Linux",
      href: "https://linux.org",
    },
    {
      node: <SiGit size={logoSize} />,
      title: "Git",
      href: "https://git-scm.com",
    },
    {
      node: <SiJenkins size={logoSize} />,
      title: "Jenkins",
      href: "https://jenkins.io",
    },
    {
      node: <SiFigma size={logoSize} />,
      title: "Figma",
      href: "https://figma.com",
    },
    {node: <SiCplusplus size={logoSize} />, title: "C++", href: "https://cplusplus.com"},
    // {node: <SiJava size={logoSize} />, title: "Java", href: "https://java.com"},
    {node: <SiPostgresql size={logoSize} />, title: "PostgreSQL", href: "https://postgresql.com"},
    {
      node: <SiReact size={logoSize} />,
      title: "React",
      href: "https://react.dev",
    },
    {
      node: <SiNextdotjs size={logoSize} />,
      title: "Next.js",
      href: "https://nextjs.org",
    },
    {
      node: <SiTypescript size={logoSize} />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },
    {
      node: <SiTailwindcss size={logoSize} />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
  ];
  const services = [
    {
      title: "Custom Development",
      description: "Tailored solutions built with the latest technologies",
      icon: "💻",
    },
    {
      title: "Backend Development",
      description: "Robust server-side solutions for complex applications",
      icon: "⚙️",
    },
    {
      title: "UI/UX Development",
      description: "Pixel-perfect interfaces with seamless interactions",
      icon: "✨",
    },
    {
      title: "Performance Optimization",
      description: "Speed up your applications and improve user experience",
      icon: "⚡",
    },
  ];
  return (
    <section id="skills" className="relative z-10 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-emerald-400 text-center text-sm font-semibold mb-4 uppercase">
          What I Offer
        </h3>
        <p className="text-center text-slate-300 text-lg">
          Find the right web development package with modern, scalable tech -
          frontend to backend.
        </p>
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={logoSize}
          gap={40}
          pauseOnHover
          scaleOnHover
          hoverColor="emerald-400" //#00d492
          // hoverColor="fuchsia-400"
          fadeOut
          fadeOutColor="#020618"
          ariaLabel="Tech Stack"
          className="my-16"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-6 border border-slate-700 rounded-lg hover:border-emerald-400 hover:bg-slate-900/50 transition cursor-pointer group"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h4 className="font-bold mb-2 group-hover:text-emerald-400 transition">
                {service.title}
              </h4>
              <p className="text-sm text-slate-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
