import { Card, CardContent } from "@/components/ui/card";
import { Service } from "@shared/schema";
import { 
  Rocket, 
  Factory, 
  Compass, 
  Wrench, 
  Microscope, 
  Zap,
  LucideIcon
} from "lucide-react";

interface ServiceCardProps {
  service: Service;
}

const iconMap: Record<string, LucideIcon> = {
  rocket: Rocket,
  factory: Factory,
  "drafting-compass": Compass,
  tools: Wrench,
  microscope: Microscope,
  zap: Zap,
};

export default function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = iconMap[service.icon] || Rocket;

  return (
    <Card className="service-card bg-white p-8 shadow-lg h-full">
      <CardContent className="p-0">
        <div className="text-primary text-4xl mb-4">
          <IconComponent className="h-10 w-10" />
        </div>
        <h3 className="text-2xl font-bold text-secondary mb-4">
          {service.title}
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          {service.description}
        </p>
        <ul className="text-sm text-gray-500 space-y-2">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        {service.price && (
          <div className="mt-6 pt-4 border-t">
            <span className="text-lg font-semibold text-primary">
              {service.price}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
