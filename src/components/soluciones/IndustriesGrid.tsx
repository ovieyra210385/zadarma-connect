
import React from 'react';
import IndustryCard from './IndustryCard';
import { 
  Store, 
  Building, 
  GraduationCap, 
  Heart,
  Car,
  Utensils
} from 'lucide-react';

const IndustriesGrid = () => {
  const industries = [
    {
      icon: Store,
      title: "E-commerce & Retail",
      description: "Automatiza ventas, soporte y seguimiento de pedidos",
      features: [
        "Catálogo de productos automatizado",
        "Procesamiento de pedidos 24/7",
        "Notificaciones de envío automáticas",
        "Recuperación de carritos abandonados"
      ],
      caseStudy: "Tienda online aumentó ventas 250% en 3 meses"
    },
    {
      icon: Building,
      title: "Inmobiliarias",
      description: "Genera leads y califica prospectos automáticamente",
      features: [
        "Captura de leads desde anuncios",
        "Calificación automática de prospectos",
        "Agendamiento de visitas inteligente",
        "Seguimiento post-venta automatizado"
      ],
      caseStudy: "Inmobiliaria cerró 40% más ventas con automatización"
    },
    {
      icon: GraduationCap,
      title: "Educación",
      description: "Mejora la comunicación con estudiantes y padres",
      features: [
        "Recordatorios de clases automáticos",
        "Entrega de calificaciones personalizada",
        "Comunicación con padres de familia",
        "Promoción de cursos y programas"
      ],
      caseStudy: "Instituto aumentó inscripciones 180% con WhatsApp"
    },
    {
      icon: Heart,
      title: "Salud & Bienestar",
      description: "Optimiza citas médicas y seguimiento de pacientes",
      features: [
        "Agendamiento de citas automático",
        "Recordatorios de medicamentos",
        "Seguimiento post-consulta",
        "Campañas de salud preventiva"
      ],
      caseStudy: "Clínica redujo ausencias 60% con recordatorios"
    },
    {
      icon: Car,
      title: "Automotriz",
      description: "Soporte técnico y ventas de vehículos y repuestos",
      features: [
        "Cotizaciones automáticas de repuestos",
        "Agendamiento de mantenimiento",
        "Promociones de vehículos nuevos",
        "Soporte técnico especializado"
      ],
      caseStudy: "Concesionario incrementó ventas 200% con BOT"
    },
    {
      icon: Utensils,
      title: "Restaurantes",
      description: "Toma pedidos y reservas de forma automatizada",
      features: [
        "Menú digital interactivo",
        "Procesamiento de pedidos automático",
        "Sistema de reservas inteligente",
        "Promociones personalizadas"
      ],
      caseStudy: "Restaurante aumentó pedidos 300% con automatización"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <IndustryCard
              key={index}
              icon={industry.icon}
              title={industry.title}
              description={industry.description}
              features={industry.features}
              caseStudy={industry.caseStudy}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesGrid;
