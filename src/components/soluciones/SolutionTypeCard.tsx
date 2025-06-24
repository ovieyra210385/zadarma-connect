
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface SolutionTypeCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  price: string;
  link: string;
}

const SolutionTypeCard = ({ icon: Icon, title, description, price, link }: SolutionTypeCardProps) => {
  return (
    <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">
        {title}
      </h3>
      <p className="text-gray-600 mb-4">
        {description}
      </p>
      <div className="text-2xl font-bold text-blue-600 mb-4">
        {price}
      </div>
      {link && link !== '#' ? (
        <Link to={link}>
          <Button className="w-full">
            Ver Detalles
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      ) : (
        <Button className="w-full">
          Próximamente
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      )}
    </Card>
  );
};

export default SolutionTypeCard;
