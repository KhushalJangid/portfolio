import React from "react";
import {
  SiLeetcode,
  SiGithub,
  SiStackoverflow,
} from "@icons-pack/react-simple-icons";
import { LogoLinkedin, Phone, Email, Location } from "@carbon/icons-react";
import Link from "next/link";

export default function Contact() {
  const iconClass = "w-8 h-8 hover:text-emerald-400 transition";
  return (
    <footer
      id="contact"
      className="relative z-10 border-t border-slate-800 py-16 px-6 bg-slate-950"
    >
      <section className="w-full py-12">
        <div className="container py-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8">
            Connect With Me
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="space-y-4">
              <Link
                className="flex items-center space-x-2 hover:underline"
                href="tel:+919828126444"
              >
                <Phone className="w-6 h-6" />
                <span>+91 98281 26444</span>
              </Link>
              <Link
                className="flex items-center space-x-2 hover:underline"
                href="mailto:kjangid897@gmail.com"
              >
                <Email className="w-6 h-6" />
                <span>kjangid897@gmail.com</span>
              </Link>
              <Link
                className="flex items-center space-x-2 hover:underline"
                target="_blank"
                href="https://maps.app.goo.gl/Xv3QTRqizGDqeo659"
              >
                <Location className="w-6 h-6" />
                <span>Jaipur, Rajasthan, India</span>
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-4 w-full max-w-[300px]">
              {/* <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://leetcode.com/kjangid897"
              >
                <SiLeetcode className={iconClass} />
              </Link> */}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/kjangid"
              >
                <LogoLinkedin className={iconClass} />
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/KhushalJangid/"
              >
                <SiGithub className={iconClass} />
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://stackoverflow.com/users/14458028/khushal"
              >
                <SiStackoverflow className={iconClass} />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex items-center justify-between text-sm text-slate-400">
          <p>&copy; 2025 Khushal Jangid. All rights reserved.</p>
        </div>
      </section>
    </footer>
  );
}
