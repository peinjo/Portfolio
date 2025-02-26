import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ui/theme-toggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xl font-bold"
        >
          Portfolio
        </button>

        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="text-sm hover:text-primary transition-colors"
            >
              {link.label}
            </button>
          ))}
          <ThemeToggle />
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {isOpen && (
        <motion.div
          className="md:hidden p-4 border-t bg-background"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => {
                scrollToSection(link.href);
                setIsOpen(false);
              }}
              className="block w-full text-left py-2 text-sm hover:text-primary transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2">
            <ThemeToggle />
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}