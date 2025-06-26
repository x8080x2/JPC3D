import { Card, CardContent } from "@/components/ui/card";
import { Testimonial } from "@shared/schema";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="bg-white p-8 shadow-lg h-full">
      <CardContent className="p-0">
        <div className="flex text-accent mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-current" />
          ))}
        </div>
        <p className="text-gray-600 mb-6 italic leading-relaxed">
          "{testimonial.content}"
        </p>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4">
            {testimonial.avatar || testimonial.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <div className="font-semibold text-secondary">
              {testimonial.name}
            </div>
            <div className="text-sm text-gray-500">
              {testimonial.company}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
