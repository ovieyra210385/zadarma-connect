
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Phone, 
  Zap, 
  Users, 
  Settings,
  Check,
  ArrowRight,
  Cloud,
  Headphones,
  BarChart3
} from 'lucide-react';

const Servicios = ()=>{
  const services = [
    {
      icon: Phone,
      title: "PBX en la Nube",
      description: "Centralita virtual completa con funcionalidades empresariales avanzadas",
      features: [
        "Llamadas ilimitadas nacionales e internacionales",
        "Grabación automática de todas las llamadas",
        "Menús de voz personalizables y multi-idioma",
        "Transferencia de llamadas inteligente",
        "Buzón de voz con transcripción automática",
        "Conferencias de hasta 100 participantes"
      ],
      price: "Desde $29/mes"
    },
    {
      icon: Zap,
      title: "Configuración Rápida",
      description: "Setup instantáneo para tu sistema telefónico sin complicaciones",
      features: [
        "Configuración completa en menos de 5 minutos",
        "Sin necesidad de hardware adicional",
        "Configuración remota por nuestros expertos",
        "Migración automática de números existentes",
        "Interfaz intuitiva y fácil de usar",
        "Soporte técnico 24/7 incluido"
      ],
      price: "Instalación gratuita"
    },
    {
      icon: Users,
      title: "Soluciones Empresariales",
      description: "Adaptado a empresas de todos los tamaños y necesidades específicas",
      features: [
        "Escalable desde 1 hasta 10,000+ usuarios",
        "Personalización completa según tu negocio",
        "Integración nativa con CRM populares",
        "Gestión multi-ubicación centralizada",
        "Perfiles de usuario con permisos específicos",
        "API completa para desarrolladores"
      ],
      price: "Consulta personalizada"
    },
    {
      icon: Settings,
      title: "Centro de Llamadas",
      description: "Solución completa para call centers con herramientas profesionales",
      features: [
        "Sistema de colas inteligente",
        "Distribución automática de llamadas (ACD)",
        "Grabación y monitoreo en tiempo real",
        "Reportes detallados y dashboards",
        "Integración con sistemas de tickets",
        "Supervisión y coaching de agentes"
      ],
      price: "Desde $15/agente"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Nuestros Servicios
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Soluciones completas de telecomunicaciones diseñadas para impulsar 
            la comunicación de tu empresa al siguiente nivel
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-gray-700">
                          <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-blue-600">
                        {service.price}
                      </span>
                      <Button>
                        Más Información
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Servicios Adicionales
            </h2>
            <p className="text-xl text-gray-600">
              Complementa tu solución con estos servicios especializados
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Cloud className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Números Virtuales
              </h3>
              <p className="text-gray-600 mb-4">
                Números locales en más de 150 países para expandir tu presencia global
              </p>
              <Button variant="outline" className="w-full">
                Explorar Países
              </Button>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Headphones className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Soporte Premium
              </h3>
              <p className="text-gray-600 mb-4">
                Soporte técnico prioritario con tiempo de respuesta garantizado
              </p>
              <Button variant="outline" className="w-full">
                Ver Planes
              </Button>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <BarChart3 className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Análisis Avanzado
              </h3>
              <p className="text-gray-600 mb-4">
                Reportes detallados y análisis de patrones de comunicación
              </p>
              <Button variant="outline" className="w-full">
                Ver Demo
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Necesitas una Solución Personalizada?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Nuestros expertos pueden diseñar una solución específica para tu empresa
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8">
            Solicitar Consulta Gratuita
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Servicios;
