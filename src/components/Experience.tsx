"use client";

import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { AuroraText } from "@/components/magicui/aurora-text";

const EXPERIENCE = [
  {
    role: "Backend Engineer",
    company: "Raahi",
    period: "June 11, 2025 – Present",
    description:
      "Worked on improving Raahi’s website by replacing the old version made with HTML, CSS, and JavaScript with a new version using Next.js 15 and TailwindCSS. Set up user sign-up and login using Firebase, making sure only students with college email IDs can access it. Also created a new landing page to give the site a modern look. Integrated Google Maps API to support ride booking features, helping students see routes and plan their rides more easily.",
    
    skills: [
     "Next.js 15",
      "Firebase Authentication",
      "TailwindCSS",
      "Frontend ",
      "Google Maps API",
      "Ride Booking Integration", 
    ],
  },
  {
    role: "Backend Engineer",
    company: "Zonomo",
    period: "May 15, 2025 – June 15, 2025",
    description:
    "build AI-first voice appointment system leveraging Vapi's agentic voice capabilities. Integrated voice-to-voice conversational flows directly into the core platform, enabling users to seamlessly book and manage appointments. Additionally implemented a secure payment processing pipeline via razerpay, enhancing transactional reliability and improving user conversion flow across the product lifecycle.",
    skills: [
      "Node.js",
      "Vapi AI Integration",
      "Voice AI",
      "Stripe Payment Gateway",
      "Appointment Scheduling Systems",
      
    ],
  },
  {
    role: "Data Analytics Intern",
    company: "Imarticus Learning",
    period: "June 2025 – july 2025 ",
    description:
      'Gaining hands-on experience with SQL, Python, Power-BI, and Tableau through real-world projects such as banking customer behavior analysis, pizza sales intelligence, and delivery performance dashboards.',
    skills: [
      "SQL",
      "Python",
      "Power BI",
      "Tableau",
      "Exploratory Data Analysis",
    ],
  },
];


function ExperienceCard({
  experience,
  index,
}: {
  experience: (typeof EXPERIENCE)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
        ease: "easeOut",
      }}
      className="relative pl-8 pb-8 before:absolute before:left-0 before:top-2 before:h-3 before:w-3 before:rounded-full before:bg-primary after:absolute after:left-[5px] after:top-[22px] after:h-[calc(100%-22px)] after:w-0.5 after:bg-primary/30 last:after:hidden"
    >
      <div className="mb-1 text-xl font-bold">{experience.role}</div>
      <div className="mb-2 flex items-center gap-2">
        <span className="font-medium text-primary">{experience.company}</span>
        <span className="text-sm text-muted-foreground">
          • {experience.period}
        </span>
      </div>
      <p className="mb-3 text-muted-foreground">{experience.description}</p>
      <div className="flex flex-wrap gap-2">
        {experience.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="w-full py-20">
      <div className="container px-4">
       
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <AuroraText className="text-4xl font-bold text-left">
            Professional Journey
          </AuroraText>
        </motion.div>

        {/* Centered content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative">
            {EXPERIENCE.map((exp, index) => (
              <ExperienceCard
                key={exp.company}
                experience={exp}
                index={index}
              />
            ))}

           
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="relative pl-8 pb-8 before:absolute before:left-0 before:top-2 before:h-3 before:w-3 before:rounded-full before:bg-primary"
            >
              <div className="flex items-center mb-2">
                <FaGraduationCap className="mr-2 text-xl text-primary" />
                <h3 className="text-xl font-bold">Education</h3>
              </div>

              <div className="mb-1">
                <p className="text-lg font-semibold text-foreground">
                  Bennett University
                </p>
                <p className="text-sm text-muted-foreground">
                  B.Tech in Computer Science & Engineering
                </p>
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>2023 – 2027</span>
                <span className="inline-block px-2 py-0.5 rounded-full bg-accent/10 text-accent-foreground font-medium">
                  CGPA: 8.33
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
