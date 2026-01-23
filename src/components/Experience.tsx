"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { AuroraText } from "@/components/magicui/aurora-text";
import { useRef } from "react";

const EXPERIENCE = [
  {
    role: "Backend Developer Intern",
    company: "Raahi",
    period: "July 2025 – August 2025",
    description:
      "Built a full-stack ride-sharing platform serving 500+ active users using Next.js, Firebase, and TailwindCSS. Implemented secure Firebase authentication with OTP verification, restricting access to verified college email IDs. Developed core backend features including ride matching, fare calculation, booking confirmations, and real-time chat between riders and drivers. Integrated Google Maps API for live route visualization and location tracking.",
    skills: [
      "Next.js",
      "Firebase",
      "Firebase Authentication",
      "Realtime Chat",
      "Google Maps API",
      "Tailwind CSS",
    ],
  },
  {
    role: "Backend Developer Intern",
    company: "Zonomo",
    period: "May 2025 – July 2025",
    description:
      "Developed backend features for a customer service booking platform, enabling appointment scheduling and management. Implemented a real-time bargaining system allowing dynamic price negotiations between customers and service providers. Built real-time chat functionality to support seamless communication and booking coordination.",
    skills: [
      "Node.js",
      "Backend Systems",
      "Real-time Communication",
      "Scheduling Systems",
      "Negotiation Logic",
    ],
  },
];


function ExperienceCard({ experience }: { experience: (typeof EXPERIENCE)[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="relative pl-12 pb-16"
    >
      <div className="mb-1 text-xl font-bold">{experience.role}</div>
      <div className="mb-2 flex items-center gap-2">
        <span className="font-medium text-primary">{experience.company}</span>
        <span className="text-sm text-muted-foreground">• {experience.period}</span>
      </div>
      <p className="mb-4 text-muted-foreground max-w-2xl text-pretty leading-relaxed">
        {experience.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {experience.skills.map((skill) => (
          <span 
            key={skill} 
            className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 60%", "end 80%"], 
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const positionY = useTransform(smoothProgress, (value) => `${value * 100}%`);

  return (
    <section id="experience" className="w-full py-24 bg-background overflow-hidden">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <AuroraText className="text-4xl font-bold text-left">
            Professional Journey
          </AuroraText>
        </motion.div>

        <div className="max-w-4xl mx-auto relative" ref={containerRef}>
          
          <div className="absolute left-0 top-2 h-full w-full pointer-events-none">
            <div className="absolute left-[4px] h-full w-[2px] -translate-x-1/2 bg-muted/20" />

    
            <motion.div
              style={{ scaleY: smoothProgress, originY: 0 }}
              className="absolute left-[4px] h-full w-[2px] -translate-x-1/2 bg-primary z-0"
            />
     <motion.div
              style={{ top: positionY }}
              className="absolute left-[4px] z-20 -translate-x-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center"
            >
          
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-40"></span>
              
              <span className="relative inline-flex h-3 w-3 rounded-full bg-primary shadow-[0_0_15px_rgba(59,130,246,0.8)]"></span>
            </motion.div>
          </div>

          <div className="relative z-10 ml-4">
            {EXPERIENCE.map((exp) => (
              <ExperienceCard key={exp.company} experience={exp} />
            ))}

            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-12 pt-4"
            >
              <div className="flex items-center mb-3">
                <FaGraduationCap className="mr-3 text-2xl text-primary/80" />
                <h3 className="text-2xl font-bold text-foreground">Education</h3>
              </div>
              
              <div className="mb-2">
                <p className="text-lg font-semibold">Bennett University</p>
                <p className="text-muted-foreground">B.Tech in Computer Science & Engineering</p>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground mt-3">
                <span className="font-mono">2023 – 2027</span>
                <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-xs">
                  CGPA: 8.45
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}