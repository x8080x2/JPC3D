import { useQuery } from "@tanstack/react-query";
import Hero from "@/components/hero";
import ServiceCard from "@/components/service-card";
import PortfolioCard from "@/components/portfolio-card";
import TestimonialCard from "@/components/testimonial-card";
import ProjectModal from "@/components/project-modal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Service, Project, Testimonial } from "@shared/schema";
import { useState } from "react";
import { Link } from "wouter";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: services, isLoading: servicesLoading } = useQuery<Service[]>({
    queryKey: ["/api/services"],
  });

  const { data: projects, isLoading: projectsLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  const { data: testimonials, isLoading: testimonialsLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  const featuredProjects = projects?.filter(p => p.featured).slice(0, 6) || [];

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const companyStats = {
    projectsCompleted: "2,500+",
    yearsExperience: "12",
    happyClients: "500+",
    printers: "25"
  };

  return (
    <div className="pt-16">
      <Hero />
      
      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-secondary mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive 3D printing solutions for every industry and application
            </p>
          </div>
          
          {servicesLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-gray-200 animate-pulse rounded-xl h-64" />
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services?.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          )}
          
          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg" variant="outline">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Portfolio Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Explore our most impressive 3D printed projects across various industries
            </p>
          </div>

          {projectsLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-gray-200 animate-pulse rounded-xl h-80" />
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <PortfolioCard
                  key={project.id}
                  project={project}
                  onClick={() => handleProjectClick(project)}
                />
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link href="/portfolio">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                View Full Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold text-secondary mb-6">About 3D Printing Service</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With over a decade of experience in additive manufacturing, we've established ourselves as the premier 3D printing service provider for businesses across industries. Our state-of-the-art facility houses the latest in 3D printing technology, from precision SLA printers to industrial-grade FDM systems.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We pride ourselves on delivering exceptional quality, rapid turnaround times, and innovative solutions that help our clients bring their most ambitious projects to life. From concept to completion, we're your partners in transformation.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {companyStats.projectsCompleted}
                  </div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {companyStats.yearsExperience}
                  </div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {companyStats.happyClients}
                  </div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {companyStats.printers}
                  </div>
                  <div className="text-gray-600">3D Printers</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Badge variant="secondary" className="px-4 py-2">
                  ISO 9001 Certified
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  FDA Compliant
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  AS9100 Aerospace
                </Badge>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="State-of-the-art 3D printing facility" 
                className="rounded-xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-gray-600">Production</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Trusted by industry leaders worldwide</p>
          </div>

          {testimonialsLoading ? (
            <div className="grid md:grid-cols-3 gap-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-gray-200 animate-pulse rounded-xl h-64" />
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials?.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
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
