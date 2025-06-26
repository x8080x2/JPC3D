import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Project } from "@shared/schema";
import { Search } from "lucide-react";

interface PortfolioCardProps {
  project: Project;
  onClick: () => void;
}

export default function PortfolioCard({ project, onClick }: PortfolioCardProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "industrial":
        return "bg-primary/10 text-primary";
      case "prototyping":
        return "bg-accent/10 text-accent";
      case "medical":
        return "bg-green-100 text-green-800";
      case "automotive":
        return "bg-red-100 text-red-800";
      default:
        return "bg-purple-100 text-purple-800";
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "industrial":
        return "Industrial Parts";
      case "prototyping":
        return "Rapid Prototyping";
      case "medical":
        return "Medical Device";
      case "automotive":
        return "Automotive";
      default:
        return category;
    }
  };

  return (
    <Card 
      className="portfolio-card bg-white shadow-lg overflow-hidden cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Search className="text-white text-2xl" />
        </div>
      </div>
      
      <CardContent className="p-6">
        <Badge className={`mb-3 ${getCategoryColor(project.category)}`}>
          {getCategoryLabel(project.category)}
        </Badge>
        <h3 className="text-lg font-bold text-secondary mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2">
          {project.description}
        </p>
      </CardContent>
    </Card>
  );
}
