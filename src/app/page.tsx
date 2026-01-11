"use client";

import Navbar from "@/components/UI/navbar";
import Particles from "@/components/UI/Particles";
import Contact from "@/components/Sections/contact";
import Skills from "@/components/Sections/skills";
import Experience from "@/components/Sections/experience";
import Projects from "@/components/Sections/projects";
import About from "@/components/Sections/about";
export default function Portfolio() {
  return (
    <main className="dark min-h-screen bg-slate-950 text-white overflow-x-hidden relative">
      {/* Particles Background */}
      <div className="fixed inset-0 z-0">
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
      <About />

      {/* skills Section */}
      <Skills />

      {/* Experience Timeline */}
      <Experience />

      {/* Projects Section */}
      <Projects />

      <Contact />
    </main>
  );
}
