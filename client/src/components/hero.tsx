import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-white animate-fade-in-up text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              Advanced <span className="text-accent">3D Printing</span> Solutions
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-200 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Transform your ideas into reality with our cutting-edge 3D printing technology. 
              From rapid prototyping to full production runs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link href="/portfolio">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-base sm:text-lg font-semibold px-6 sm:px-8 py-3 sm:py-4 h-auto w-full sm:w-auto"
                >
                  View Portfolio
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-white text-secondary hover:bg-gray-100 hover:text-secondary text-base sm:text-lg font-semibold px-6 sm:px-8 py-3 sm:py-4 h-auto border-2 border-white w-full sm:w-auto"
                >
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>

          <div className="hidden md:block lg:block animate-float mt-8 lg:mt-0">
            <img 
              src="https://images.unsplash.com/photo-1605647540924-852290f6b0d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Advanced 3D printer creating intricate objects" 
              className="rounded-xl shadow-2xl w-full h-auto max-w-md lg:max-w-none mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}