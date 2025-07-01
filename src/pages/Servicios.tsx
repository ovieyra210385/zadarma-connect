
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Bot, 
  Users, 
  MessageSquare, 
  Phone,
  Globe,
  Wifi,
  Check,
  ArrowRight,
  Shield,
  Zap,
  BarChart3,
  MessageCircle,
  Star
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Servicios = ()=>{
  const mainServices = [
    {
      icon: Bot,
      title: "BOT WhatsApp Inteligente",
      description: "Chatbot con IA avanzada que responde automáticamente a tus clientes las 24 horas del día",
      features: [
        "Respuestas automáticas inteligentes",
        "IA conversacional avanzada",
        "Soporte para múltiples idiomas",
        "Integración con bases de datos",
        "Entrenamiento personalizado",
        "Analytics de conversaciones"
      ],
      price: "Desde $49/mes",
      popular: true,
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "CRM WhatsApp Business",
      description: "Gestiona todos tus contactos, conversaciones y ventas desde una plataforma centralizada",
      features: [
        "Gestión completa de contactos",
        "Historial de conversaciones",
        "Etiquetas y segmentación",
        "Pipeline de ventas",
        "Reportes y métricas",
        "Integración con equipos"
      ],
      price: "Desde $79/mes",
      popular: true,
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: MessageSquare,
      title: "Campañas Masivas",
      description: "Envía mensajes promocionales y informativos a miles de contactos de forma segura",
      features: [
        "Envío masivo seguro",
        "Plantillas certificadas",
        "Programación avanzada",
        "Segmentación precisa",
        "A/B Testing",
        "Métricas de entrega"
      ],
      price: "Desde $99/mes",
      popular: false,
      color: "from-purple-500 to-pink-500"
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

  const benefits = [
    {
      icon: Shield,
      title: "API Oficial WhatsApp",
      description: "Integración certificada y 100% segura con Meta"
    },
    {
      icon: Zap,
      title: "Automatización 24/7",
      description: "Tu negocio nunca duerme con nuestros BOTs inteligentes"
    },
    {
      icon: BarChart3,
      title: "Analytics Avanzado",
      description: "Métricas detalladas para optimizar tu estrategia"
    },
    {
      icon: MessageCircle,
      title: "Implementación Rápida",
      description: "Tu BOT funcionando en menos de 24 horas"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">
              Servicios WhatsApp Business
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Automatiza tu <span className="text-green-600">WhatsApp Business</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre nuestros servicios especializados para transformar tu comunicación empresarial 
              con BOTs inteligentes, CRM avanzado y campañas automatizadas
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nuestros Servicios Principales
            </h2>
            <p className="text-xl text-gray-600">
              Soluciones completas para automatizar y optimizar tu WhatsApp Business
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <Card 
                key={index} 
                className={`relative p-8 hover:shadow-2xl transition-all duration-300 ${
                  service.popular ? 'ring-2 ring-green-500 scale-105' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-green-500 text-white hover:bg-green-500">
                      <Star className="w-4 h-4 mr-1" />
                      Más Popular
                    </Badge>
                  </div>
                )}
                
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <span className="text-3xl font-bold text-gray-900">{service.price}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    service.popular 
                      ? 'bg-green-500 hover:bg-green-600' 
                      : 'bg-gray-900 hover:bg-gray-800'
                  }`}
                >
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Listo para Automatizar tu WhatsApp Business?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Únete a miles de empresas que ya automatizan sus ventas con nuestros servicios
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Prueba Gratuita 30 Días
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 text-lg px-8">
              <MessageCircle className="mr-2 w-5 h-5" />
              Hablar con Experto
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicios;
