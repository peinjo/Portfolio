import { motion } from "framer-motion";
import Nav from "@/components/layout/nav";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Contact from "@/components/sections/contact";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </motion.main>
      <Footer />
    </div>
  );
}
