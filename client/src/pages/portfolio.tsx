import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import PortfolioCard from "@/components/portfolio-card";
import ProjectModal from "@/components/project-modal";
import { Button } from "@/components/ui/button";
import { Project } from "@shared/schema";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  const filterButtons = [
    { id: "all", label: "All Projects" },
    { id: "prototyping", label: "Prototyping" },
    { id: "industrial", label: "Industrial" },
    { id: "medical", label: "Medical" },
    { id: "automotive", label: "Automotive" },
  ];

  const filteredProjects = projects?.filter(project => 
    activeFilter === "all" || project.category === activeFilter
  ) || [];

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-gray-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Explore our diverse range of 3D printed projects across various industries. 
              Each project showcases our commitment to quality, innovation, and precision.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filterButtons.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "filter-btn active"
                    : "filter-btn"
                }`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </Button>
            ))}
          </div>

          {/* Portfolio Grid */}
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-gray-200 animate-pulse rounded-xl h-80" />
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProjects.map((project) => (
                <PortfolioCard
                  key={project.id}
                  project={project}
                  onClick={() => handleProjectClick(project)}
                />
              ))}
            </div>
          )}

          {filteredProjects.length === 0 && !isLoading && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-xl">No projects found for the selected category.</p>
            </div>
          )}
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
