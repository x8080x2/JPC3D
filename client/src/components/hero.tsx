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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 leading-tight text-left font-extrabold">
              JPC <span className="text-accent">3D Services</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-semibold text-[#000]">
              High-quality 3D printing and laser engraving for individuals, businesses, and creators. 
              Fast turnaround times with personalized service and affordable pricing.
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

          <div className="hidden md:block lg:block animate-float mt-8 lg:mt-0 relative">
            {/* Floating particles effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-bounce" style={{animationDelay: '0s'}}></div>
              <div className="absolute top-20 right-20 w-1 h-1 bg-purple-400 rounded-full opacity-40 animate-bounce" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-20 left-16 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-50 animate-bounce" style={{animationDelay: '2s'}}></div>
              <div className="absolute bottom-32 right-12 w-1 h-1 bg-blue-300 rounded-full opacity-60 animate-bounce" style={{animationDelay: '3s'}}></div>
              <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-indigo-400 rounded-full opacity-30 animate-pulse" style={{animationDelay: '4s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}