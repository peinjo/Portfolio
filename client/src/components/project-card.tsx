import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export default function ProjectCard({ title, description, image, tags, link }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Card className="overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover"
          />
          <CardHeader>
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">{description}</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <Badge key={index} variant="secondary">{tag}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </a>
    </motion.div>
  );
}
