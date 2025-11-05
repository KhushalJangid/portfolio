"use client";

import { useState } from "react";
// import { ChevronRight, Play, LinkedinIcon } from "lucide-react";
import {ChevronRight, Play, LogoLinkedin} from "@carbon/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/navbar";
import LiquidEther from "@/components/LiquidEther";
import { SiLeetcode, SiLinkerd, SiGithub, SiStackoverflow } from "@icons-pack/react-simple-icons";
import Particles from "@/components/Particles";
import TextType from "@/components/TextType";
export default function Portfolio() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const experiences = [
    {
      year: "Oct 2025 - Present",
      title: "Associate Software Engineer",
      company: "Accenture",
    },
    { year: "Feb 2025 - Jun 2025", title: "ASE Intern", company: "Accenture" },
    {
      year: "Nov 2024 - Feb 2025",
      title: "Full-Stack Developer Intern",
      company: "Multilipi",
    },
    {
      year: "Apr 2023 - Sept 2023",
      title: "Flutter Developer Intern",
      company: "Doctunes Audiotech",
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

  const testimonials = [
    {
      text: "Working with this team has been an amazing experience. They brought our vision to life with incredible attention to detail and delivered ahead of schedule.",
      author: "Sarah Johnson",
      role: "CEO, Tech Startup",
      avatar: "SJ",
    },
    {
      text: "The quality of work is exceptional. They understood our requirements perfectly and delivered a solution that exceeded our expectations in every way.",
      author: "Mike Chen",
      role: "Product Manager, Digital Agency",
      avatar: "MC",
    },
  ];

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
    <main className="min-h-screen bg-slate-950 text-white overflow-x-hidden relative">
      {/* LiquidEther Background */}
      <div className="fixed inset-0 z-0">
        {/* <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
          className="w-full h-full"
        /> */}
        <Particles
          particleColors={["#f4a8ff"]}
          particleCount={300}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      {/* Header */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section
        id="about"
        className="relative z-10 min-h-screen flex items-center justify-center px-20 py-20"
      >
        <div className="max-w-7xl w-full">
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
              <button className="px-5 py-2 bg-emerald-400 text-slate-950 font-semibold rounded hover:bg-emerald-300 transition">
                Get in touch
              </button>
              <button className="p-2 border border-slate-700 rounded hover:bg-slate-800 transition">
                <ChevronRight size={20} />
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
          <div className="absolute right-50 top-1/4 transform-scale-200 z-11 invisible lg:visible">
            <div className="w-72 h-72 flex items-center justify-center">
              {/* <div className="w-64 h-64 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full flex items-center justify-center text-4xl"> */}
              <Image
                src="/portrait.png"
                alt="Profile"
                width={256}
                height={256}
              />
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-emerald-400 text-center text-sm font-semibold mb-8 uppercase">
            About me
          </h3>
          <p className="text-center text-slate-300 max-w-2xl mx-auto text-lg mb-16">
            I'm a self-taught Full Stack Developer with a passion for solving
            real-world problems through code. From ideation to deployment, I
            bring 💡 ideas to life. I'm focused on building scalable solutions
            with cutting-edge technology and delivering digital products.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "10+ Years in Web Development", value: "" },
              { label: "Clients Across 45+ Countries", value: "" },
              { label: "100+ Client Retention Rate", value: "" },
              { label: "5+ Successful Team Projects", value: "" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="p-6 border border-slate-700 rounded-lg text-center hover:bg-slate-900 transition"
              >
                <p className="text-emerald-400 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* skills Section */}
      <section id="skills" className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-emerald-400 text-center text-sm font-semibold mb-4 uppercase">
            What I Offer
          </h3>
          <p className="text-center text-slate-300 text-lg mb-16">
            Find the right web development package with modern, scalable tech -
            frontend to backend.
          </p>

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

          <div className="grid sm:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="p-6 border border-slate-700 rounded-lg hover:border-emerald-400 bg-slate-900/20 hover:bg-slate-900/40 transition cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="font-bold group-hover:text-emerald-400 transition">
                    Service {item}
                  </h4>
                  <ChevronRight
                    className="text-slate-500 group-hover:text-emerald-400 transition"
                    size={20}
                  />
                </div>
                <p className="text-sm text-slate-400">
                  High-quality service with professional delivery
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-emerald-400 text-center text-sm font-semibold mb-16 uppercase">
            My Experience
          </h3>
          <p className="text-center text-slate-400 mb-16">
            Full Stack Developer with 12+ years of experience building scalable,
            user-friendly web apps
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-400 via-emerald-400 to-slate-700"></div>

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
                    <p className="text-slate-400 text-sm">{exp.company}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
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

          {/* Project Showcase */}
          <div className="relative mb-8 group">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden aspect-video flex items-center justify-center border border-slate-700">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-emerald-500/10"></div>
              <button className="w-16 h-16 bg-emerald-400/20 border border-emerald-400 rounded-full flex items-center justify-center hover:bg-emerald-400/30 transition group-hover:scale-110 transition">
                <Play
                  size={32}
                  className="text-emerald-400 ml-1"
                  fill="currentColor"
                />
              </button>
            </div>
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

      {/* Testimonials Section */}
      {/* <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-emerald-400 text-center text-sm font-semibold mb-4 uppercase">
            Success Stories from Happy Clients
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="p-6 border border-slate-700 rounded-lg bg-slate-900/30 hover:bg-slate-900/50 transition"
              >
                <p className="text-slate-300 mb-6">{testimonial.text}</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-emerald-400/20 rounded-full flex items-center justify-center text-sm font-bold text-emerald-400">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-xs text-slate-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      {/* Footer */}
      <footer
        id="contact"
        className="relative z-10 border-t border-slate-800 py-16 px-6 bg-slate-950"
      >
        {/* <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="font-bold mb-4">B Stock Studios</h4>
              <p className="text-sm text-slate-400">
                Creating digital experiences with modern tech and a focus on
                performance.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-emerald-400 transition">
                    Web Design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition">
                    Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition">
                    Consulting
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-emerald-400 transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-emerald-400 transition">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex items-center justify-between text-sm text-slate-400">
            <p>&copy; 2025 Khushal Jangid. All rights reserved.</p>
          </div>
        </div> */}
        <section
          id="connect"
          className="w-full py-12 md:py-24 lg:py-32 border-t border-t-border"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8">
              Connect With Me
            </h2>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div className="space-y-4">
                <a
                  className="flex items-center space-x-2 hover:underline"
                  href="tel:+919352653929"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-phone w-5 h-5"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>+91 9352653929</span>
                </a>
                <a
                  className="flex items-center space-x-2 hover:underline"
                  href="mailto:satyam1308mishra@gmail.com"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-mail w-5 h-5"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <span>satyam1308mishra@gmail.com</span>
                </a>
                <a
                  className="flex items-center space-x-2 hover:underline"
                  target="_blank"
                  href="https://maps.app.goo.gl/Xv3QTRqizGDqeo659"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-map-pin w-5 h-5"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>Jaipur, Rajasthan, India</span>
                </a>
              </div>
              <div className="grid grid-cols-3 gap-4 w-full max-w-[300px]">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://leetcode.com/satyam_mishra13"
                >
                    <SiLeetcode />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/mishra-satyam"
                >
                    <LogoLinkedin/>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/satyam-mishra-pce"
                >
                    <SiGithub/>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://stackoverflow.com/users/17881188/satyam-mishra"
                >
                    <SiStackoverflow/>
                </a>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </main>
  );
}
