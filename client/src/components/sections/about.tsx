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
              I'm John Adeniyi, a passionate software developer and entrepreneur dedicated to creating innovative digital solutions. As the founder of Peinjo, I lead a team in developing cutting-edge mobile applications, expert advisors, and system designs.
            </p>
            <p className="text-lg mb-6">
              With experience as a full-stack developer at Mzienet Technologies, I specialize in crafting seamless, scalable, and high-performance applications. My expertise spans Python, JavaScript, and MetaQuotes languages, with a keen focus on optimization, security, and user experience.
            </p>
            <Button variant="outline">
              Download Resume <FileDown className="ml-2" />
            </Button>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Facts</h3>
            <ul className="space-y-2">
              <li>🚀 Founder of Peinjo</li>
              <li>💼 Full-Stack Developer at Mzienet Technologies</li>
              <li>🌟 Expert in Mobile Apps & Trading Systems</li>
              <li>📚 Continuous Learner & Innovator</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}