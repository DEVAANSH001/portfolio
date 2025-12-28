"use client";

import { motion, Variants } from "framer-motion";
import { AuroraText } from "@/components/magicui/aurora-text";
import { FaBrain, FaCode, FaDatabase } from "react-icons/fa";
import {
  SiJavascript, SiTypescript, SiPython, SiReact, SiNextdotjs,
  SiNodedotjs, SiTailwindcss, SiTensorflow, SiNumpy, SiPandas,
  SiAmazon, SiDocker, SiMongodb, SiFastapi, SiOpenai, SiMysql,
  SiSupabase, SiVercel, SiFirebase, SiGooglecloud
} from "react-icons/si";
import { BsLightningChargeFill } from "react-icons/bs";
import React from "react";

const SKILLS = [
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "default" }, 
  { name: "Node.js", icon: SiNodedotjs, color: "#539E43" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
  { name: "NumPy", icon: SiNumpy, color: "#013243" },
  { name: "Pandas", icon: SiPandas, color: "#150458" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
  { name: "AWS", icon: SiAmazon, color: "#FF9900" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, 
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 10,
    },
  },
};

const SkillCard = React.memo(({ skill }: { skill: typeof SKILLS[0] }) => {
  const IconComponent = skill.icon;
  const isDefaultColor = skill.color === "default";
  
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        scale: 1.05,
        y: -5,
        transition: { duration: 0.2, ease: "easeOut" } 
      }}
      className="group relative flex flex-col items-center p-6 bg-accent/5 rounded-xl border border-transparent hover:border-primary/20 hover:bg-accent/10 transition-colors cursor-default"
    >
      <div 
        className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-background border shadow-sm group-hover:shadow-md transition-all duration-300"
        style={{ borderColor: isDefaultColor ? "" : `${skill.color}40`}}
      >
        <IconComponent
          className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
          style={{
            color: isDefaultColor ? "currentColor" : skill.color,
          }}
        />
      </div>
      <h3 className="text-lg font-semibold text-center">{skill.name}</h3>
    </motion.div>
  );
});
SkillCard.displayName = "SkillCard";

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full py-12 overflow-hidden">
      <div className="container px-4 mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary/70 via-purple-500 to-purple-800 py-7 text-left">
            <AuroraText>Skills & Technologies</AuroraText>
          </h2>

         
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
            {SKILLS.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaCode className="w-6 h-6 text-primary" />,
                title: "Web Development",
                desc: "Building responsive, accessible, and performant web applications with modern frameworks.",
              },
              {
                icon: <FaBrain className="w-6 h-6 text-primary" />,
                title: "Artificial Intelligence",
                desc: "Developing ML models and algorithms to solve real-world problems.",
              },
              {
                icon: <FaDatabase className="w-6 h-6 text-primary" />,
                title: "Data Engineering",
                desc: "Creating robust data pipelines and infra to support analytics & ML workloads.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                className="bg-accent/5 p-6 rounded-xl border border-border/50 hover:border-primary/30 hover:bg-accent/10 transition-colors cursor-default shadow-sm"
              >
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10 text-primary">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}