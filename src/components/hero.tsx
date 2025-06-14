"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, Mail, MapPin, Code } from "lucide-react";
import { FaNode } from "react-icons/fa";
import { AuroraText } from "@/components/magicui/aurora-text";
import {
  RiNextjsFill,
  RiReactjsFill,
  RiTailwindCssFill,
  RiTwitterXLine,
} from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-6 md:py-10">
      <div className="grid md:grid-cols-3 gap-10 items-center max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 md:col-span-2"
        >
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl  bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-700 font-bold">
              <AuroraText>Devaansh Dubey</AuroraText>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Software Engineer
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              <a href="mailto:haquedot@gmail.com">
                devaanshdubey2211@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>Noida, India</span>
            </div>
          </div>

          <p className="text-muted-foreground text-sm sm:text-base">
            A goal-oriented software developer with experience in building{" "}
            <br></br>full-stack web applications using modern technologies like
            React, Next.js, Node.js, and more. Passionate about creating
            seamless user experiences on the front end while ensuring robust and
            scalable logic on the backend.
          </p>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            <Link href="" target="_blank" download>
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
              href="https://leetcode.com/u/Devaanshdubey001/"
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
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square">
            {/* Animated border */}
            <motion.div
              className="absolute inset-0 rounded-xl"
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

            {/* Tech stack grid */}
            <div className="absolute inset-0 grid grid-cols-2 gap-2 sm:gap-4 p-2 sm:p-4">
              {/* React */}
              <motion.div
                className="rounded-xl p-2 sm:p-4 flex items-center justify-center bg-gradient-to-br from-blue-200 to-white dark:from-blue-900 dark:to-gray-800 shadow-md transition-all hover:shadow-purple-500/50"
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
                  className="text-4xl text-[#087ea4]"
                >
                  <RiReactjsFill />
                </motion.div>
              </motion.div>

              {/* Next.js */}
              <motion.div
                className="rounded-xl p-2 sm:p-4 flex items-center justify-center bg-gradient-to-br from-gray-200 to-white dark:from-gray-800 dark:to-gray-700 shadow-md transition-all hover:shadow-purple-500/50"
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
                <div className="text-4xl">
                  <RiNextjsFill />
                </div>
              </motion.div>

              {/* MongoDB */}
              <motion.div
                className="rounded-xl p-2 sm:p-4 flex items-center justify-center bg-gradient-to-br from-green-100 to-white dark:from-green-900 dark:to-gray-800 shadow-md transition-all hover:shadow-purple-500/50"
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
                  className="text-4xl text-green-600"
                >
                  <SiMongodb />
                </motion.div>
              </motion.div>

              {/* Tailwind */}
              <motion.div
                className="rounded-xl p-2 sm:p-4 flex items-center justify-center bg-gradient-to-br from-sky-100 to-white dark:from-sky-900 dark:to-gray-800 shadow-md transition-all hover:shadow-purple-500/50"
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
                <div className="text-4xl text-sky-500">
                  <RiTailwindCssFill />
                </div>
              </motion.div>
            </div>

            {/* Floating Badges */}
            {[
              {
                text: "ReactJs",
                top: "-top-3 sm:-top-5",
                left: "-left-3 sm:-left-5",
                delay: 0.1,
              },
              {
                text: "Tailwind CSS",
                bottom: "-bottom-3 sm:-bottom-5",
                right: "-right-3 sm:-right-5",
                delay: 0.1,
              },
              {
                text: "Next.js",
                top: "-top-3 sm:-top-5",
                right: "-right-3 sm:-right-5",
                delay: 0.1,
              },
              {
                text: "MongoDB",
                bottom: "-bottom-3 sm:-bottom-5",
                left: "-left-3 sm:-left-5",
                delay: 0.1,
              },
            ].map((badge, idx) => (
              <motion.div
                key={idx}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#a855f7",
                  color: "#ffffff",
                  boxShadow: "0 0 20px rgba(168, 85, 247, 0.5)",
                }}
                className={`absolute ${badge.top || ""} ${badge.bottom || ""} ${
                  badge.left || ""
                } ${badge.right || ""} 
          bg-background px-2 py-0.5 sm:px-3 sm:py-1 
          rounded-full text-xs sm:text-sm shadow-md border 
          transition-all duration-300 cursor-default`}
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
