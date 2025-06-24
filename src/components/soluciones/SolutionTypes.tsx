
import React from 'react';
import SolutionTypeCard from './SolutionTypeCard';
import { MessageSquare, Users, BarChart3 } from 'lucide-react';

const SolutionTypes = () => {
  const solutionTypes = [
    {
      icon: MessageSquare,
      title: "BOT de Atención al Cliente",
      description: "Resuelve el 80% de consultas automáticamente",
      price: "Desde $99/mes",
      link: "/bot-atencion-cliente"
    },
    {
      icon: Users,
      title: "CRM WhatsApp Completo",
      description: "Gestiona todos tus contactos y conversaciones",
      price: "Desde $199/mes",
      link: "/crm-whatsapp"
    },
    {
      icon: BarChart3,
      title: "Suite Marketing Digital",
      description: "Campañas masivas + Analytics avanzado",
      price: "Desde $299/mes",
      link: "#"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Elige tu Solución Ideal
          </h2>
          <p className="text-xl text-gray-600">
            Planes diseñados para cada etapa de crecimiento
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutionTypes.map((solution, index) => (
            <SolutionTypeCard
              key={index}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
              price={solution.price}
              link={solution.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionTypes;
