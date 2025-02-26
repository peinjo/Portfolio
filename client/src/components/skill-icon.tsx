import { motion } from "framer-motion";
import * as SiIcons from "react-icons/si";
import { Card, CardContent } from "@/components/ui/card";

interface SkillIconProps {
  name: string;
  icon: string;
}

export default function SkillIcon({ name, icon }: SkillIconProps) {
  // Remove "Si" prefix if it exists to match the icon name in the library
  const iconName = icon.startsWith("Si") ? icon : `Si${icon}`;
  const Icon = (SiIcons as Record<string, React.ComponentType>)[iconName];

  if (!Icon) {
    console.warn(`Icon ${iconName} not found`);
    return null;
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="text-center">
        <CardContent className="pt-6">
          <Icon className="w-12 h-12 mx-auto mb-2" />
          <p className="text-sm font-medium">{name}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}