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
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary">
                Precision Meets Innovation
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                With over {companyStats.yearsExperience} years of experience in additive manufacturing, 
                we've helped countless businesses bring their ideas to life. Our state-of-the-art 
                facility houses {companyStats.printers} industrial-grade 3D printers, capable of 
                working with a wide range of materials and technologies.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                From concept to completion, we provide comprehensive 3D printing solutions that 
                meet the highest standards of quality and precision. Our team of experts works 
                closely with each client to ensure optimal results for every project.
              </p>
              <Link href="/about">
                <Button size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="State-of-the-art 3D printing facility" 
                className="rounded-xl shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white p-4 sm:p-6 rounded-lg shadow-lg">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">
                  {companyStats.happyClients}+
                </div>
                <div className="text-sm sm:text-base text-gray-600">Happy Clients</div>
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

      {/* Stats */}
          <div className="mt-12 sm:mt-16">
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-secondary mb-3 sm:mb-4">Our Track Record</h3>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                Numbers that speak to our commitment to excellence and client satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 text-center">
              <div className="bg-gray-50 p-6 sm:p-8 rounded-xl">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">
                  {companyStats.yearsExperience}
                </div>
                <div className="text-sm sm:text-base text-gray-600">Years Experience</div>
              </div>
              <div className="bg-gray-50 p-6 sm:p-8 rounded-xl">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">
                  {companyStats.happyClients}
                </div>
                <div className="text-sm sm:text-base text-gray-600">Happy Clients</div>
              </div>
              <div className="bg-gray-50 p-6 sm:p-8 rounded-xl">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">
                  {companyStats.printers}
                </div>
                <div className="text-sm sm:text-base text-gray-600">3D Printers</div>
              </div>
            </div>
          </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}