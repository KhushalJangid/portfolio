"use client";


import {ChevronRight} from "@carbon/icons-react";
import Image from "next/image";
import Navbar from "@/components/UI/navbar";
import Particles from "@/components/UI/Particles";
import TextType from "@/components/UI/TextType";
import Contact from "@/components/Sections/contact";
import Skills from "@/components/Sections/skills";
import Experience from "@/components/Sections/experience";
import Projects from "@/components/Sections/projects";
export default function Portfolio() {
  // const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

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



  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-x-hidden relative">
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
      <section
        id="about"
        className="relative z-10"
      >
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
      <Skills />
      

      {/* Experience Timeline */}
      <Experience />

      {/* Projects Section */}
      <Projects />

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
        <Contact />
      </footer>
    </main>
  );
}
