
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, LucideIcon } from 'lucide-react';

interface IndustryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  caseStudy: string;
}

const IndustryCard = ({ icon: Icon, title, description, features, caseStudy }: IndustryCardProps) => {
  return (
    <Card className="p-6 hover:shadow-xl transition-all duration-300 group">
      <CardHeader className="pb-4">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <CardTitle className="text-xl text-gray-900 mb-2">
              {title}
            </CardTitle>
            <CardDescription className="text-gray-600">
              {description}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 mb-4">
          {features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-start text-gray-700">
              <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border-l-4 border-l-green-500">
          <p className="text-sm font-medium text-green-800">
            💡 Caso de Éxito: {caseStudy}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default IndustryCard;
