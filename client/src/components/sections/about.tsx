import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div>
            <p className="text-lg mb-4">
              I'm a passionate software engineer with expertise in modern web technologies.
              I specialize in building scalable applications using React, Node.js, and cutting-edge tools.
            </p>
            <p className="text-lg mb-6">
              With a strong foundation in both frontend and backend development,
              I create seamless user experiences while ensuring robust, maintainable codebases.
            </p>
            <Button variant="outline">
              Download Resume <FileDown className="ml-2" />
            </Button>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Facts</h3>
            <ul className="space-y-2">
              <li>🎓 Computer Science Graduate</li>
              <li>💼 5+ Years Professional Experience</li>
              <li>🌟 Open Source Contributor</li>
              <li>📚 Continuous Learner</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
