import { motion } from "framer-motion";
import ProjectCard from "@/components/project-card";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management",
    image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8",
    tags: ["React", "Node.js", "PostgreSQL"],
    link: "#"
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time data visualization platform for business metrics",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    tags: ["TypeScript", "D3.js", "Express"],
    link: "#"
  },
  {
    title: "Social Media App",
    description: "Feature-rich social platform with real-time messaging",
    image: "https://images.unsplash.com/photo-1739514984003-330f7c1d2007",
    tags: ["React Native", "Firebase", "Redux"],
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
