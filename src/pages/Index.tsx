
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
  BarChart3,
  Bot,
  MessageSquare
} from 'lucide-react';

const Index = () => {
  const whatsappServices = [
    {
      icon: Bot,
      title: "BOT WhatsApp Inteligente",
      description: "Chatbot con IA que responde automáticamente a tus clientes las 24 horas",
      features: ["Respuestas automáticas", "IA conversacional", "Múltiples idiomas", "Integración API"],
      popular: true
    },
    {
      icon: Users,
      title: "CRM WhatsApp Business",
      description: "Administra todos tus contactos y conversaciones desde una sola plataforma",
      features: ["Gestión de contactos", "Historial completo", "Etiquetas y filtros", "Métricas detalladas"],
      popular: true
    },
    {
      icon: MessageSquare,
      title: "Campañas Masivas",
      description: "Envía mensajes promocionales y informativos a miles de contactos",
      features: ["Envío masivo", "Plantillas certificadas", "Programación", "Segmentación"]
    }
  ];

  const additionalServices = [
    {
      icon: Phone,
      title: "PBX en la Nube",
      description: "Centralita virtual completa para empresas",
      features: ["Llamadas ilimitadas", "Grabación automática", "Menús de voz", "Multi-idioma"]
    },
    {
      icon: Globe,
      title: "Números Virtuales",
      description: "Números de teléfono virtuales en más de 150 países",
      features: ["Cobertura global", "Portabilidad", "Configuración rápida", "Tarifas competitivas"]
    },
    {
      icon: Wifi,
      title: "eSIM Empresarial",
      description: "Conectividad móvil para equipos distribuidos globalmente",
      features: ["Activación inmediata", "Cobertura mundial", "Planes flexibles", "Gestión centralizada"]
    }
  ];

  const advantages = [
    {
      icon: Bot,
      title: "Automatización Total",
      description: "BOT que maneja el 80% de consultas automáticamente"
    },
    {
      icon: Shield,
      title: "API Oficial WhatsApp",
      description: "Integración certificada y 100% segura"
    },
    {
      icon: BarChart3,
      title: "Analytics Avanzado",
      description: "Métricas detalladas de conversaciones y ventas"
    },
    {
      icon: Settings,
      title: "Integración CRM",
      description: "Conecta con tu sistema actual sin problemas"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />

      {/* WhatsApp Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Soluciones WhatsApp Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Automatiza, gestiona y multiplica tus ventas con nuestras herramientas especializadas para WhatsApp Business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whatsappServices.map((service, index) => (
              <Card key={index} className={`p-8 hover:shadow-xl transition-shadow duration-300 relative ${service.popular ? 'ring-2 ring-green-500' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Más Popular
                    </span>
                  </div>
                )}
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6">
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
                <Button className={`w-full ${service.popular ? 'bg-green-500 hover:bg-green-600' : ''}`}>
                  Empezar Ahora
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
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
              Servicios Adicionales de Telecomunicaciones
            </h2>
            <p className="text-xl text-gray-600">
              Completa tu infraestructura de comunicaciones empresariales
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-1 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <Check className="w-4 h-4 text-blue-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">
                  Más Información
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ¿Por Qué Elegir Nuestras Soluciones WhatsApp?
            </h2>
            <p className="text-xl text-gray-600">
              Ventajas que nos hacen líderes en automatización de WhatsApp Business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
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
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Listo para Automatizar tu WhatsApp Business?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Únete a miles de empresas que ya automatizan sus ventas con nuestro BOT y CRM para WhatsApp
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Crear BOT Gratis por 30 Días
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 text-lg px-8">
              Ver Demo en Vivo
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
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">WhatsApp Business Pro</span>
              </div>
              <p className="text-gray-400">
                Automatizando conversaciones y multiplicando ventas con IA avanzada.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">WhatsApp Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li>BOT Inteligente</li>
                <li>CRM WhatsApp</li>
                <li>Campañas Masivas</li>
                <li>API Integration</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Telecomunicaciones</h4>
              <ul className="space-y-2 text-gray-400">
                <li>PBX en la Nube</li>
                <li>Números Virtuales</li>
                <li>eSIM Empresarial</li>
                <li>VoIP Solutions</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>soporte@whatsapp-pro.com</li>
                <li>+1 (555) WHATSAPP</li>
                <li>WhatsApp: +1 (555) 987-6543</li>
                <li>24/7 BOT Support</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 WhatsApp Business Pro. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
