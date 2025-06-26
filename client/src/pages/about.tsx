import { useQuery } from "@tanstack/react-query";
import TestimonialCard from "@/components/testimonial-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Testimonial } from "@shared/schema";
import { Link } from "wouter";

export default function About() {
  const { data: testimonials, isLoading: testimonialsLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  const companyStats = {
    projectsCompleted: "2,500+",
    yearsExperience: "12",
    happyClients: "500+",
    printers: "25"
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-gray-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">About 3D Print Bureau</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Leading the future of additive manufacturing with over a decade of experience, 
              cutting-edge technology, and unwavering commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-secondary mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2012, 3D Print Bureau began as a small startup with a big vision: to democratize advanced manufacturing through 3D printing technology. What started as a two-person operation in a garage has grown into one of the UK's most trusted 3D printing service providers.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our journey has been marked by continuous innovation, strategic investments in cutting-edge technology, and an unwavering commitment to quality. Today, we serve clients across multiple industries, from aerospace giants to innovative startups, helping them bring their most ambitious projects to life.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At 3D Print Bureau, we believe that every idea deserves the opportunity to become reality. That's why we've built our reputation on delivering exceptional quality, rapid turnaround times, and innovative solutions that exceed expectations.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  ISO 9001 Certified
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  FDA Compliant
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  AS9100 Aerospace
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  CE Marking
                </Badge>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Our state-of-the-art facility" 
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

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600">Numbers that speak to our experience and success</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white p-8 rounded-xl shadow-sm">
              <div className="text-5xl font-bold text-primary mb-4">
                {companyStats.projectsCompleted}
              </div>
              <div className="text-gray-600 text-lg">Projects Completed</div>
              <div className="text-sm text-gray-500 mt-2">
                Across all industries and applications
              </div>
            </div>
            <div className="text-center bg-white p-8 rounded-xl shadow-sm">
              <div className="text-5xl font-bold text-primary mb-4">
                {companyStats.yearsExperience}
              </div>
              <div className="text-gray-600 text-lg">Years Experience</div>
              <div className="text-sm text-gray-500 mt-2">
                In additive manufacturing
              </div>
            </div>
            <div className="text-center bg-white p-8 rounded-xl shadow-sm">
              <div className="text-5xl font-bold text-primary mb-4">
                {companyStats.happyClients}
              </div>
              <div className="text-gray-600 text-lg">Happy Clients</div>
              <div className="text-sm text-gray-500 mt-2">
                From startups to Fortune 500
              </div>
            </div>
            <div className="text-center bg-white p-8 rounded-xl shadow-sm">
              <div className="text-5xl font-bold text-primary mb-4">
                {companyStats.printers}
              </div>
              <div className="text-gray-600 text-lg">3D Printers</div>
              <div className="text-sm text-gray-500 mt-2">
                Industrial-grade equipment
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Our Technology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We invest in the latest 3D printing technologies to ensure we can handle any project, 
              no matter how complex or demanding.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-secondary mb-4">SLA Technology</h3>
              <p className="text-gray-600 mb-4">
                High-resolution stereolithography for detailed prototypes and models with exceptional surface finish.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Resolution up to 0.025mm</li>
                <li>• Clear and colored resins</li>
                <li>• Biocompatible materials</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-secondary mb-4">SLS Technology</h3>
              <p className="text-gray-600 mb-4">
                Selective laser sintering for strong, functional parts without support material requirements.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Nylon and metal powders</li>
                <li>• Complex geometries</li>
                <li>• Production-ready parts</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-secondary mb-4">FDM Technology</h3>
              <p className="text-gray-600 mb-4">
                Fused deposition modeling for rapid prototyping and low-cost production parts.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Wide material selection</li>
                <li>• Large build volumes</li>
                <li>• Multi-color capabilities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">
              Trusted by industry leaders worldwide
            </p>
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

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Work with Us?</h2>
          <p className="text-xl mb-8 leading-relaxed">
            Join hundreds of satisfied clients who trust 3D Print Bureau with their most important projects. 
            Let's discuss how we can help bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Get a Quote
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
