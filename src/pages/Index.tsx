
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Phone, 
  Wifi, 
  Settings, 
  Users, 
  Award, 
  MessageCircle,
  ArrowRight,
  Check,
  Globe,
  Shield,
  Zap,
  BarChart3
} from 'lucide-react';

const Index = () => {
  const services = [
    {
      icon: Phone,
      title: "PBX en la Nube",
      description: "Centralita virtual completa con todas las funcionalidades empresariales",
      features: ["Llamadas ilimitadas", "Grabación automática", "Menús de voz", "Multi-idioma"]
    },
    {
      icon: Zap,
      title: "Configuración Rápida",
      description: "Setup instantáneo para tu sistema telefónico empresarial",
      features: ["Setup en 5 minutos", "Sin hardware", "Configuración remota", "Soporte 24/7"]
    },
    {
      icon: Users,
      title: "Soluciones Empresariales",
      description: "Adaptado a empresas de todos los tamaños y sectores",
      features: ["Escalable", "Personalizable", "Integración CRM", "Multi-ubicación"]
    }
  ];

  const advantages = [
    {
      icon: Globe,
      title: "Presencia Global",
      description: "Números virtuales en más de 150 países"
    },
    {
      icon: Shield,
      title: "Seguridad Avanzada",
      description: "Encriptación de extremo a extremo"
    },
    {
      icon: BarChart3,
      title: "Análisis Detallado",
      description: "Estadísticas en tiempo real"
    },
    {
      icon: Settings,
      title: "Integración Total",
      description: "Compatible con CRM y sistemas empresariales"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluciones completas de telecomunicaciones para mantener tu empresa conectada
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full">
                  Saber Más
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ¿Por Qué Elegir Zadarma Connect?
            </h2>
            <p className="text-xl text-gray-600">
              Ventajas que nos hacen líderes en telecomunicaciones
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <advantage.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-600">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Listo para Transformar tu Comunicación?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Únete a miles de empresas que ya confían en Zadarma Connect para sus comunicaciones
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Prueba Gratuita por 30 Días
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8">
              Solicitar Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Zadarma Connect</span>
              </div>
              <p className="text-gray-400">
                Conectando empresas en todo el mundo con tecnología de vanguardia.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-400">
                <li>PBX en la Nube</li>
                <li>Números Virtuales</li>
                <li>Centro de Llamadas</li>
                <li>Integración CRM</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Soluciones</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Pequeñas Empresas</li>
                <li>Empresas Internacionales</li>
                <li>Tiendas Online</li>
                <li>Call Centers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>soporte@zadarma-connect.com</li>
                <li>+1 (555) 123-4567</li>
                <li>WhatsApp: +1 (555) 987-6543</li>
                <li>24/7 Support</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Zadarma Connect 3D. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
