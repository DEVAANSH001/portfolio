"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { AuroraText } from "@/components/magicui/aurora-text";

const projects = [
  {
  logo: "/localhost_3000_.png",
  title: "InView AI",
  description:
    "A voice-based AI interview platform where users upload their resume and participate in mock interviews powered by Vapi AI.",
  image: "/localhost_3000_.png",
  tags: ["Next.js", "React", "Tailwind CSS", "Firebase", "Vercel", "Vapi AI"],
  demoUrl: "https://inview-ai.vercel.app/", 
  githubUrl: "https://github.com/DEVAANSH001/inview_ai", 
  
  features: [
    "Resume upload with real-time parsing",
    "Voice-to-voice mock interviews using Vapi AI",
    "Dynamic feedback and scoring",
    "Firebase for authentication and data storage",
    "Deployed on Vercel with responsive design",
  ],
},
 {
    logo: "/agentFlow.png",
    title: "AgentFlow",
    description:
  "Agentify is a AI agent builder platform that lets users visually design, run, and manage intelligent AI workflows using a drag-and-drop interface. Built with Next.js, Convex, and modern AI SDKs, it supports authentication, real-time data, security, and subscription-based monetization.",
    image: "/agentFlow.png",
    tags: [
  "Next.js",
  "React flow",
  "TypeScript",
  "Convex DB",
  "Clerk Auth",
  "ShadCN UI",
  "Tailwind CSS",
  "AI Agents",
  "React Flow",
  "Gemini",
  
],
    demoUrl: "https://agent-flow-dev.vercel.app/",
    githubUrl: "https://github.com/DEVAANSH001/AgentFlow",
    features: [
  "Visual drag-and-drop AI workflow builder using React Flow",
  "AI agent logic powered by Gemini SDKs",
  "Custom node and component system for agent workflows",
  "Preview, test, and publish agents for external use",
],
  },
  
  
  {
    logo: "/dsa_.png",
    title: "Dsavisualizer",
    description:
  "An interactive Data Structures and Algorithms visualizer that helps users understand core DSA concepts through step-by-step animations and real-time execution. Built to make learning algorithms intuitive and visual.",
    image: "/dsa_.png",
    tags: [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Data Structures",
  "Algorithms",
  "DSA Visualization",
  "Frontend",
],
    demoUrl: "https://dsavisualizerdev.vercel.app/",
    githubUrl: "https://github.com/DEVAANSH001/visualize-DSA",
    features: [
  "Interactive visualizations for core data structures and algorithms",
  "Step-by-step animation to demonstrate algorithm execution",
  "Clean and beginner-friendly UI for learning DSA concepts",
  "Built with React and Next.js for smooth client-side rendering",
  "Modular codebase allowing easy addition of new algorithms",
  "Responsive design for desktop and tablet screens",
],
  },
  
  {
    logo: "/Sc.png",
    title: "analytic_dashboard",
    description:
  "A ready-to-use analytics dashboard UI built with Next.js and ShadCN-UI, featuring modern layouts, reusable components, and responsive design for rapid product development.",
    image: "/Sc.png",
    tags: [
  "Next.js",
  "ShadCN UI",
  "React",
  "Tailwind CSS",
  "Dashboard UI",
  "Frontend",
],
    demoUrl: "https://analytic-dashboard-ui.vercel.app",
    githubUrl: "https://github.com/DEVAANSH001/analytic_dashboard",
    features: [
  "Modern analytics dashboard built using ShadCN-UI components",
  "Responsive layout optimized for desktop and mobile devices",
  "Reusable and customizable UI components",
  "Clean Next.js project structure for scalability",
  "Tailwind CSS for fast styling and consistent design",
]
  },
 
  
  
{
  logo: "/heart2.png",
  title: "Heart Disease Prediction",
  description:
    "A machine learning-based web app to predict heart disease using multiple models, visual comparison, and final deployment with Random Forest.",
  image: "/heart2.png",
  tags: ["Python", "Streamlit", "Scikit-learn", "Matplotlib", "Pandas"],
  demoUrl: "https://devaansh001-heart-disease-p-heart-disease-prediction-app-iqot7p.streamlit.app/",
  githubUrl: "https://github.com/DEVAANSH001/heart_disease_prediction-model", 
  features: [
    "Model comparison: KNN, SVM, Naive Bayes, Decision Tree, Linear & Random Forest",
    "Evaluation metrics: R², specificity, accuracy, F1 score",
    "Final model (Random Forest) deployed with 95% accuracy",
    "Interactive UI using Streamlit",
    "Visualization of model performance and predictions",
  ],
}
 
];
export default function Projects() {
  return (
    <section id="projects" className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
      
        <div>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-sm font-semibold uppercase tracking-wider text-primary mb-2  relative inline-block"
          >
            Featured Work
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary/60 to-purple-600/60 rounded-full"
            />
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-4xl sm:text-4xl font-extrabold tracking-tight"
          >
            <span className="text-blue-600 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-blue-200 dark:to-blue-600">
              Recent Projects
            </span>
          </motion.h2>
        </div>

        {/* Projects List */}
        <div className="grid gap-10 mt-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.08, 0.25) }}
              className="grid md:grid-cols-2 gap-6 border rounded-xl overflow-hidden group"
            >
              <div className="overflow-hidden relative h-[300px] md:h-full border-b md:border-b-0 md:border-r">
                <div className="absolute inset-0 overflow-y-auto [&::-webkit-scrollbar]:hidden scrollbar-thin scrollbar-thumb-transparent">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={1200}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                    className="w-full object-contain transition-transform duration-300 group-hover:scale-101"
                  />
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Key Features:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3 pt-2">
                  <Button size="sm">
                    <Link
                      href={project.demoUrl}
                      className="flex items-center"
                      target="_blank"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" /> Live
                    </Link>
                  </Button>
                  {project.githubUrl && (
                    <Button size="sm" variant="outline">
                      <Link
                        href={project.githubUrl}
                        className="flex items-center"
                        target="_blank"
                      >
                        <Github className="mr-2 h-4 w-4" /> Code
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mt-10 text-center"
        >
          {/* <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-2.5 rounded-lg text-sm font-medium bg-primary/10 text-primary 
                hover:bg-primary/20 transition-all duration-300 border border-primary/10 
                hover:border-primary/30 shadow-sm hover:shadow-md flex items-center gap-2 mx-auto"
            >
              View All Projects <BsArrowRight />
            </motion.button>
          </Link> */}
        </motion.div>
      </motion.div>
    </section>
  );
}
