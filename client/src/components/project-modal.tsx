import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Project } from "@shared/schema";
import { X, Download } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [selectedImage, setSelectedImage] = useState<string>("");

  if (!project) return null;

  // Set initial selected image when project changes
  const currentImage = selectedImage || project.imageUrl;
  
  // Get all images (main image + gallery images)
  const allImages = [project.imageUrl, ...(project.galleryImages || [])];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "light_signs":
        return "bg-yellow-100 text-yellow-800";
      case "laser_designs":
        return "bg-blue-100 text-blue-800";
      case "vase_designs":
        return "bg-green-100 text-green-800";
      default:
        return "bg-purple-100 text-purple-800";
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "light_signs":
        return "Light Signs";
      case "laser_designs":
        return "Laser Designs";
      case "vase_designs":
        return "Vase Designs";
      default:
        return category;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-secondary pr-8">
            {project.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid lg:grid-cols-2 gap-8 mt-6">
          <div>
            <img 
              src={currentImage} 
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            {allImages.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {allImages.map((imageUrl, index) => (
                  <img 
                    key={index}
                    src={imageUrl} 
                    alt={`${project.title} view ${index + 1}`} 
                    className={`w-full h-20 object-cover rounded cursor-pointer transition-opacity ${
                      currentImage === imageUrl ? 'opacity-100 ring-2 ring-primary' : 'opacity-60 hover:opacity-100'
                    }`}
                    onClick={() => setSelectedImage(imageUrl)}
                  />
                ))}
              </div>
            )}
          </div>
          
          <div>
            <div className="mb-6">
              <Badge className={`mb-3 ${getCategoryColor(project.category)}`}>
                {getCategoryLabel(project.category)}
              </Badge>
              <p className="text-gray-600 leading-relaxed">
                {project.description}
              </p>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-secondary mb-2">Specifications</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li><strong>Material:</strong> {project.material}</li>
                  <li><strong>Technology:</strong> {project.technology}</li>
                  <li><strong>Resolution:</strong> {project.resolution}</li>
                  <li><strong>Timeline:</strong> {project.timeline}</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-secondary mb-2">Challenges & Solutions</h4>
                <p className="text-sm text-gray-600">
                  {project.challenges}
                </p>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 flex-1">
                  Request Similar Quote
                </Button>
              </Link>
              <Button variant="outline" className="flex-1">
                <Download className="h-4 w-4 mr-2" />
                Download Specs
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
