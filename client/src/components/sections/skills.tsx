import { motion } from "framer-motion";
import SkillIcon from "@/components/skill-icon";

const skills = [
  { name: "React", icon: "SiReact" },
  { name: "TypeScript", icon: "SiTypescript" },
  { name: "Node.js", icon: "SiNodedotjs" },
  { name: "PostgreSQL", icon: "SiPostgresql" },
  { name: "Docker", icon: "SiDocker" },
  { name: "AWS", icon: "SiAmazonaws" },
  { name: "Python", icon: "SiPython" },
  { name: "JavaScript", icon: "SiJavascript" },
  { name: "PineScript", icon: "SiTradingview" }, 
  { name: "MetaQuotes", icon: "SiMt5" }, 
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Skills & Technologies
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {skills.map((skill, index) => (
            <SkillIcon key={index} {...skill} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}