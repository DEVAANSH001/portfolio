"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { AuroraText } from "@/components/magicui/aurora-text"
import Link from "next/link"
import { cn } from "@/lib/utils"

import { FaGithub, FaLinkedin, FaTwitter, FaBrain, FaCode, FaDatabase, FaLaptopCode, FaServer, FaGraduationCap, FaRobot } from "react-icons/fa"
import { 
  SiJavascript, 
  SiTypescript, 
  SiPython, 
  SiPytorch, 
  SiTensorflow, 
  SiMongodb, 
  SiReact,
  SiFastapi,
  SiOpenai,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiAmazon,
  SiDocker,
  SiKaggle,
  SiGooglecloud,
  SiNumpy,
  SiPandas
} from "react-icons/si"

import { BsGraphUp, BsLightningChargeFill, BsArrowRight } from "react-icons/bs"


const SKILLS = [
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#dynamic" },
  { name: "Node.js", icon: SiNodedotjs, color: "#539E43" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
  { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
  { name: "NumPy", icon: SiNumpy, color: "#013243" },
  { name: "Pandas", icon: SiPandas, color: "#150458" },
  { name: "Matplotlib", icon: FaDatabase, color: "#11557C" },
  { name: "AWS", icon: SiAmazon, color: "#FF9900" },
  { name: "GCP", icon: SiGooglecloud, color: "#4285F4" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "GNNs", icon: BsGraphUp, color: "#3B82F6" },
  { name: "PyGeometric", icon: BsGraphUp, color: "#4B0082" },
  { name: "Diffusion", icon: BsLightningChargeFill, color: "#9333EA" },
  { name: "GANs", icon: FaBrain, color: "#10B981" },
  { name: "RL", icon: FaRobot, color: "#F59E0B" },
  { name: "LLMs", icon: SiOpenai, color: "#00A67E" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688" },
];



function SkillCard({ skill, index }: { skill: typeof SKILLS[0], index: number }) {
  const ref = useRef(null)
  
  // Create a safe icon component with fallback
  const IconComponent = skill.icon || FaCode
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        delay: index * 0.05, 
        duration: 0.5,
        ease: "easeOut"
      }}
      className="group relative flex flex-col items-center p-6 bg-accent/5 backdrop-blur-sm rounded-xl hover:bg-accent/10 transition-colors"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ 
          delay: index * 0.05 + 0.2, 
          type: "spring", 
          stiffness: 100 
        }}
        className="relative w-16 h-16 mb-4"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-full blur-xl group-hover:blur-2xl transition-all" />
        <div className="relative flex items-center justify-center w-full h-full bg-background rounded-full">
          <IconComponent className="w-8 h-8" style={{ color: skill.color }} />
        </div>
      </motion.div>
      <h3 className="text-lg font-semibold text-center">{skill.name}</h3>
    </motion.div>
  )
}




export default function SkillsSection() {
  return (
    <section id="skills" className="w-full py-7">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary/70 via-purple-500 to-purple-800 py-7">
            <AuroraText >Skills & Technologies</AuroraText>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {SKILLS.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="bg-accent/5 p-6 rounded-xl">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10">
                <FaCode className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Web Development</h3>
              <p className="text-muted-foreground">
                Building responsive, accessible, and performant web applications
                with modern frameworks and tools.
              </p>
            </div>

            <div className="bg-accent/5 p-6 rounded-xl">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10">
                <FaBrain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                Artificial Intelligence
              </h3>
              <p className="text-muted-foreground">
                Developing machine learning models and algorithms to solve
                complex real-world problems.
              </p>
            </div>

            <div className="bg-accent/5 p-6 rounded-xl">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10">
                <FaDatabase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Data Engineering</h3>
              <p className="text-muted-foreground">
                Creating robust data pipelines and infrastructure to support
                analytics and machine learning workloads.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
