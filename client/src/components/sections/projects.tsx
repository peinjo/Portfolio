import { motion } from "framer-motion";
import ProjectCard from "@/components/project-card";

const projects = [
  {
    title: "AI-Powered Tax Management Platform",
    description: "Comprehensive tax calculation, audit, reporting, and transfer pricing platform with AI-driven tax review and suggestions",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
    tags: ["Python", "AI/ML", "React", "Node.js"],
    link: "#"
  },
  {
    title: "Crypto Trading Application",
    description: "Advanced cryptocurrency trading platform with real-time analytics and automated trading strategies",
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d",
    tags: ["React", "Node.js", "Websockets", "Crypto APIs"],
    link: "#"
  },
  {
    title: "Trading Indicators Collection",
    description: "Suite of custom trading indicators for market analysis and automated trading signals",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
    tags: ["PineScript", "MetaQuotes", "Technical Analysis"],
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}