import { ChevronRight } from "@carbon/icons-react";
import {
  SiTypescript,
  SiNextdotjs,
  SiPython,
  SiFlutter,
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
  SiFigma,
  // SiJava,
  SiJavascript,
  SiHtml5,
  // SiCss3,
  SiFlask,
  // SiAws,
  SiBootstrap,
  SiPandas,
  SiNumpy,
  SiDiagramsdotnet,
} from "@icons-pack/react-simple-icons";
import { SiReact, SiTailwindcss } from "@icons-pack/react-simple-icons";
import {
  Gui,
  BareMetalServer,
  Db2Database,
  NetworkPublic,
  ColorPalette,
  Code,
  CloudApp,
} from "@carbon/icons-react";
import React from "react";
import LogoLoop from "../UI/LogoLoop";
import { useIsMobile } from "@/hooks/use-mobile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAws, faJava } from "@fortawesome/free-brands-svg-icons";

export default function Skills() {
  const isMobile = useIsMobile();
  const logoSize = isMobile ? 40 : 64;
  const techLogos = [
    // Languages
    {
      node: <SiPython size={logoSize} />,
      title: "Python",
      href: "https://python.org",
    },
    {
      node: <FontAwesomeIcon icon={faJava} />,
      title: "Java",
      href: "https://java.com",
    },
    {
      node: <SiDjango size={logoSize} />,
      title: "Django",
      href: "https://djangoproject.com",
    },
    {
      node: <SiJavascript size={logoSize} />,
      title: "JavaScript",
      href: "https://javascript.com",
    },
    {
      node: <SiCplusplus size={logoSize} />,
      title: "C++",
      href: "https://cplusplus.com",
    },
    {
      node: <SiGo size={logoSize} />,
      title: "Go",
      href: "https://go.dev",
    },
    {
      node: <SiTypescript size={logoSize} />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },
    {
      node: <SiHtml5 size={logoSize} />,
      title: "HTML5",
      href: "https://html5.org",
    },
    {
      node: <SiLinux size={logoSize} />,
      title: "Linux",
      href: "https://linux.org",
    },
    // Frameworks
    {
      node: <SiDjango size={logoSize} />,
      title: "Django",
      href: "https://djangoproject.com",
    },
    {
      node: <SiFlask size={logoSize} />,
      title: "Flask",
      href: "https://flask.palletsprojects.com",
    },
    {
      node: <SiFlutter size={logoSize} />,
      title: "Flutter",
      href: "https://flutter.dev",
    },
    {
      node: <SiSpringboot size={logoSize} />,
      title: "Spring Boot",
      href: "https://spring.io",
    },
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
      node: <SiBootstrap size={logoSize} />,
      title: "Bootstrap",
      href: "https://getbootstrap.com",
    },
    {
      node: <SiTailwindcss size={logoSize} />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
    // Data Science
    {
      node: <SiPandas size={logoSize} />,
      title: "Pandas",
      href: "https://pandas.pydata.org",
    },
    {
      node: <SiNumpy size={logoSize} />,
      title: "NumPy",
      href: "https://numpy.org",
    },
    // Databases
    {
      node: <SiPostgresql size={logoSize} />,
      title: "PostgreSQL",
      href: "https://postgresql.com",
    },
    {
      node: <SiMysql size={logoSize} />,
      title: "MySQL",
      href: "https://mysql.com",
    },
    // DevOps & Tools
    {
      node: <SiDocker size={logoSize} />,
      title: "Docker",
      href: "https://docker.com",
    },
    {
      node: <SiJenkins size={logoSize} />,
      title: "Jenkins",
      href: "https://jenkins.io",
    },
    {
      node: <FontAwesomeIcon icon={faAws} />,
      title: "AWS",
      href: "https://aws.amazon.com",
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
      node: <SiFigma size={logoSize} />,
      title: "Figma",
      href: "https://figma.com",
    },
  ];
  const services = [
    {
      title: "Backend Development",
      description: "Robust server-side solutions for complex applications",
      icon: (
        <Code className="w-8 h-8 mb-4 group-hover:text-emerald-400 transition" />
      ),
      items: [
        <>
          <SiDjango className="text-lg h-4 w-4 mr-2" /> Django
        </>,
        <>
          <SiSpringboot className="text-lg h-4 w-4 mr-2" /> Spring Boot
        </>,
        <>
          <SiGo className="text-lg h-4 w-4 mr-2" /> Go
        </>,
      ],
    },
    {
      title: "Frontend Development",
      description: "Pixel-perfect interfaces with seamless interactions",
      icon: (
        <ColorPalette className="w-8 h-8 mb-4 group-hover:text-emerald-400 transition" />
      ),
      items: [
        <>
          <SiHtml5 className="text-lg h-4 w-4 mr-2" /> HTML5, CSS3
        </>,
        <>
          <SiReact className="text-lg h-4 w-4 mr-2" /> React, Next.js
        </>,
        <>
          <SiFlutter className="text-lg h-4 w-4 mr-2" /> Flutter
        </>,
        <>
          <SiFigma className="text-lg h-4 w-4 mr-2" /> Figma
        </>,
      ],
    },
    {
      title: "Database Design",
      description:
        "Normalized and optimized Database Schema for Relational Databases",
      icon: (
        <Db2Database className="w-8 h-8 mb-4 group-hover:text-emerald-400 transition" />
      ),
      items: [
        <>
          <SiDiagramsdotnet className="text-lg h-4 w-4 mr-2" /> Diagrams.net
        </>,
        <>
          <SiPostgresql className="text-lg h-4 w-4 mr-2" /> PostgreSQL
        </>,
        <>
          <SiMysql className="text-lg h-4 w-4 mr-2" /> MySQL
        </>,
      ],
    },
    {
      title: "Cloud Deployment",
      description:
        "Deploy  applications to the cloud for scalability, cost efficiency and reliability",
      icon: (
        <CloudApp className="w-8 h-8 mb-4 group-hover:text-emerald-400 transition" />
      ),
      items: [
        <>
          <FontAwesomeIcon icon={faAws} className="text-lg h-4 w-4 mr-2" /> AWS
        </>,
        <>
          <SiDocker className="text-lg h-4 w-4 mr-2" /> Docker, Jenkins
        </>,
        <>
          <SiLinux className="text-lg h-4 w-4 mr-2" /> Linux
        </>,
        <>
          <SiGit className="text-lg h-4 w-4 mr-2" /> Git
        </>,
      ],
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
          hoverColor="emerald-400" //#00d492 // rgba(0, 212, 146, 0.3)
          // hoverColor="fuchsia-400" // rgba(244, 168, 255, 0.3) // #f4a8ff
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
              {service.icon}
              <h4 className="font-bold mb-2 group-hover:text-emerald-400 transition">
                {service.title}
              </h4>
              <p className="text-sm text-slate-400">{service.description}</p>
              <ul className="list-none space-y-2 mt-2">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
