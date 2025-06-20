import Hero from "@/components/hero"
import Experience from "@/components/Experience"
import Skills from "@/components/skills"
// import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl space-y-20 py-10">
      <Hero />
      <Experience />
      <Skills />
       {/* <Projects/> */}
       <Contact />
       <Footer />
    </div>
  )
}
