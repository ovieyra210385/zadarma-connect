
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Store, 
  Building, 
  GraduationCap, 
  Heart,
  Car,
  Utensils,
  Home,
  Briefcase,
  CheckCircle,
  ArrowRight,
  Users,
  MessageSquare,
  BarChart3
} from 'lucide-react';

const Soluciones = () => {
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

  const solutionTypes = [
    {
      icon: MessageSquare,
      title: "BOT de Atención al Cliente",
      description: "Resuelve el 80% de consultas automáticamente",
      price: "Desde $99/mes"
    },
    {
      icon: Users,
      title: "CRM WhatsApp Completo",
      description: "Gestiona todos tus contactos y conversaciones",
      price: "Desde $199/mes"
    },
    {
      icon: BarChart3,
      title: "Suite Marketing Digital",
      description: "Campañas masivas + Analytics avanzado",
      price: "Desde $299/mes"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Soluciones por Industria
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Descubre cómo empresas de tu sector están revolucionando
            su comunicación con WhatsApp Business
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <industry.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-gray-900 mb-2">
                        {industry.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        {industry.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {industry.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border-l-4 border-l-green-500">
                    <p className="text-sm font-medium text-green-800">
                      💡 Caso de Éxito: {industry.caseStudy}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Types */}
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
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {solution.description}
                </p>
                <div className="text-2xl font-bold text-blue-600 mb-4">
                  {solution.price}
                </div>
                <Button className="w-full">
                  Probar Gratis
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center">
            <Briefcase className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">
              ¿Tienes Necesidades Específicas?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Nuestro equipo de expertos puede crear una solución
              completamente personalizada para tu industria
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Solicitar Consulta Gratuita
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-purple-600">
                Ver Casos de Éxito
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Soluciones;
