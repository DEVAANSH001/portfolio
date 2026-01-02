"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, Mail, MapPin, Code } from "lucide-react";
import { AuroraText } from "@/components/magicui/aurora-text";
import { RiNextjsFill, RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const roles = ["Software Developer"];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="relative py-12 md:py-24 overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 h-[300px] w-[300px]  rounded-full" />
      <div className="absolute bottom-0 left-0 -z-10 h-[300px] w-[300px  rounded-full" />

      <div className="grid md:grid-cols-3 gap-12 items-center max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8 md:col-span-2"
        >
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
              <AuroraText>Devaansh Dubey</AuroraText>
            </h1>
            <div className="h-8 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={roles[roleIndex]}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="text-xl sm:text-2xl font-medium text-muted-foreground flex items-center gap-3"
                >
                  <span className="h-[2px] w-8 bg-primary/50 rounded-full hidden sm:block" />
                  {roles[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
          <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
            <div className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="h-4 w-4" />
              <a href="mailto:devaanshdubey2211@gmail.com">
                devaanshdubey2211@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-red-500" />
              <span>Noida, India</span>
            </div>
          </div>
          <p className="text-muted-foreground text-lg md:text-xl">
            Passionate about creating seamless user experiences on the frontend
            while ensuring robust & scalable logic on the backend.
          </p>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            <Link href="/RESUME.pdf" target="_blank" download>
              <Button
                size="sm"
                className="text-xs sm:text-sm bg-blue-600 hover:bg-purple-600 text-white rounded-full px-4 py-2 transition-colors duration-500"
              >
                <Download className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                Resume
              </Button>
            </Link>

            <Link href="https://github.com/DEVAANSH001" target="_blank">
              <Button
                variant="outline"
                size="sm"
                className="text-xs sm:text-sm"
              >
                <Github className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </Link>
            <Link href="mailto:devaanshdubey2211@gmail.com" target="_blank">
              <Button
                variant="outline"
                size="sm"
                className="text-xs sm:text-sm"
              >
                <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </Link>
            <Link
              href="https://codolio.com/profile/Devaansh"
              target="_blank"
            >
              <Button
                variant="outline"
                size="sm"
                className="text-xs sm:text-sm"
              >
                <Code className="h-3 w-3 sm:h-4 sm:w-4 " />
              </Button>
            </Link>

            <Link
              href="https://www.linkedin.com/in/devaanshdubey001/"
              target="_blank"
            >
              <Button
                variant="outline"
                size="sm"
                className="text-xs sm:text-sm"
              >
                <Linkedin className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center h-48 md:h-auto"
        >
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square p-6">
            <motion.div
              className="absolute inset-6 rounded-xl -z-10"
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.02, 1.02, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="absolute inset-6 flex flex-col gap-3 sm:gap-4 -z-10">
              <div className="flex gap-3 sm:gap-4 flex-1">
                <motion.div
                  className="flex-1 rounded-xl p-3 sm:p-6 flex items-center justify-center bg-gradient-to-br from-blue-200 to-white dark:from-blue-900 dark:to-gray-800 shadow-md transition-all hover:shadow-purple-500/50"
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="text-5xl sm:text-6xl text-[#087ea4]"
                  >
                    <RiReactjsFill />
                  </motion.div>
                </motion.div>
                <motion.div
                  className="flex-1 rounded-xl p-3 sm:p-6 flex items-center justify-center bg-gradient-to-br from-gray-200 to-white dark:from-gray-800 dark:to-gray-700 shadow-md transition-all hover:shadow-purple-500/50"
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-5xl sm:text-6xl dark:text-white">
                    <RiNextjsFill />
                  </div>
                </motion.div>
              </div>

              <div className="flex gap-3 sm:gap-4 flex-1">
                <motion.div
                  className="flex-1 rounded-xl p-3 sm:p-6 flex items-center justify-center bg-gradient-to-br from-green-100 to-white dark:from-green-900 dark:to-gray-800 shadow-md transition-all hover:shadow-purple-500/50"
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-5xl sm:text-6xl text-green-600"
                  >
                    <SiMongodb />
                  </motion.div>
                </motion.div>
                <motion.div
                  className="flex-1 rounded-xl p-3 sm:p-6 flex items-center justify-center bg-gradient-to-br from-sky-100 to-white dark:from-sky-900 dark:to-gray-800 shadow-md transition-all hover:shadow-purple-500/50"
                  animate={{
                    boxShadow: [
                      "0 0 0 0px rgba(56, 189, 248, 0.2)",
                      "0 0 0 10px rgba(56, 189, 248, 0.15)",
                      "0 0 0 0px rgba(56, 189, 248, 0.2)",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-5xl sm:text-6xl text-sky-500">
                    <RiTailwindCssFill />
                  </div>
                </motion.div>
              </div>
            </div>
            {[
              {
                text: "ReactJs",
                top: "-top-2 sm:-top-3",
                left: "-left-2 sm:-left-3",
                delay: 0.1,
              },
              {
                text: "Tailwind CSS",
                bottom: "-bottom-2 sm:-bottom-3",
                right: "-right-2 sm:-right-3",
                delay: 0.1,
              },
              {
                text: "Next.js",
                top: "-top-2 sm:-top-3",
                right: "-right-2 sm:-right-3",
                delay: 0.1,
              },
              {
                text: "MongoDB",
                bottom: "-bottom-2 sm:-bottom-3",
                left: "-left-2 sm:-left-3",
                delay: 0.1,
              },
            ].map((badge, idx) => (
              <motion.div
                key={idx}
                whileHover={{
                  scale: 1.1,
                }}
                className={`absolute ${badge.top || ""} ${badge.bottom || ""} ${
                  badge.left || ""
                } ${badge.right || ""}
                  z-30 cursor-default rounded-full border-1 bg-background px-1 py-1 text-sm font-semibold shadow-lg
                  transition-all duration-300 sm:px-4 sm:py-1.5 sm:text-sm
                  border-gray-200 dark:border-gray-700
                  hover:bg-purple-600 hover:text-white hover:border-purple-400
                  hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]
                  dark:hover:bg-purple-500`}
                animate={{
                  ...(badge.left || badge.right
                    ? { x: [0, badge.left ? -5 : 5, 0] }
                    : { y: [0, badge.top ? -5 : 5, 0] }),
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: badge.delay,
                }}
              >
                {badge.text}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
