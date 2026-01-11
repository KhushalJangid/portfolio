import React from "react";
import {
  SiLeetcode,
  SiGithub,
  SiStackoverflow,
} from "@icons-pack/react-simple-icons";
import { LogoLinkedin, Phone, Email, Location } from "@carbon/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Contact() {
  const iconClass = "w-8 h-8 hover:text-emerald-400 transition";
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  }

  return (
    <footer
      id="contact"
      className="relative z-10 border-t border-slate-800 py-16 px-6 bg-slate-950"
    >
      <section className="w-full py-12">
        <div className="container py-6">
          <motion.h2 
            className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Connect With Me
          </motion.h2>
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div 
              className="space-y-4"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  className="flex items-center space-x-2 hover:underline"
                  href="tel:+919828126444"
                >
                  <Phone className="w-6 h-6" />
                  <span>+91 98281 26444</span>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  className="flex items-center space-x-2 hover:underline"
                  href="mailto:kjangid897@gmail.com"
                >
                  <Email className="w-6 h-6" />
                  <span>kjangid897@gmail.com</span>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  className="flex items-center space-x-2 hover:underline"
                  target="_blank"
                  href="https://maps.app.goo.gl/Xv3QTRqizGDqeo659"
                >
                  <Location className="w-6 h-6" />
                  <span>Jaipur, Rajasthan, India</span>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div 
              className="grid grid-cols-3 gap-4 w-full max-w-[300px]"
              variants={containerVariants}
            >
              {/* <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://leetcode.com/kjangid897"
              >
                <SiLeetcode className={iconClass} />
              </Link> */}
              {[
                { href: "https://www.linkedin.com/in/kjangid", icon: LogoLinkedin },
                { href: "https://github.com/KhushalJangid/", icon: SiGithub },
                { href: "https://stackoverflow.com/users/14458028/khushal", icon: SiStackoverflow },
              ].map((social, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={iconVariants}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={social.href}
                  >
                    <social.icon className={iconClass} />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
        <motion.div 
          className="border-t border-slate-800 pt-8 flex items-center justify-between text-sm text-slate-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p>&copy; 2025 Khushal Jangid. All rights reserved.</p>
        </motion.div>
      </section>
    </footer>
  );
}
