import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fade-in-up">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Advanced <span className="text-accent">3D Printing</span> Solutions
            </h1>
            <p className="text-xl mb-8 text-gray-200 leading-relaxed">
              Transform your ideas into reality with our cutting-edge 3D printing technology. 
              From rapid prototyping to full production runs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/portfolio">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-lg font-semibold px-8 py-4 h-auto"
                >
                  View Portfolio
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-secondary text-lg font-semibold px-8 py-4 h-auto"
                >
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="hidden lg:block animate-float">
            <img 
              src="https://images.unsplash.com/photo-1605647540924-852290f6b0d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Advanced 3D printer creating intricate objects" 
              className="rounded-xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
