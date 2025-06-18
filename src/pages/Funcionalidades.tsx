
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Bot, 
  MessageSquare, 
  Users, 
  BarChart3,
  Zap,
  Shield,
  Clock,
  Globe,
  Settings,
  Smartphone,
  CheckCircle
} from 'lucide-react';

const Funcionalidades = () => {
  const features = [
    {
      icon: Bot,
      title: "BOT Inteligente 24/7",
      description: "Automatización completa de conversaciones",
      details: [
        "Respuestas automáticas personalizables",
        "Procesamiento de lenguaje natural",
        "Aprendizaje automático continuo",
        "Integración con bases de conocimiento",
        "Escalamiento a agentes humanos"
      ]
    },
    {
      icon: Users,
      title: "CRM WhatsApp Business",
      description: "Gestión centralizada de clientes",
      details: [
        "Base de datos unificada de contactos",
        "Historial completo de conversaciones",
        "Etiquetado y segmentación avanzada",
        "Seguimiento de leads automático",
        "Reportes de actividad detallados"
      ]
    },
    {
      icon: MessageSquare,
      title: "Campañas Masivas",
      description: "Envío de mensajes a gran escala",
      details: [
        "Templates pre-aprobados por WhatsApp",
        "Personalización dinámica de mensajes",
        "Programación de envíos",
        "Segmentación de audiencias",
        "Tracking de entregas y aperturas"
      ]
    },
    {
      icon: BarChart3,
      title: "Analytics Avanzado",
      description: "Métricas y reportes en tiempo real",
      details: [
        "Dashboard interactivo",
        "Métricas de engagement",
        "Análisis de conversiones",
        "ROI de campañas",
        "Exportación de datos"
      ]
    },
    {
      icon: Zap,
      title: "Automatización de Flujos",
      description: "Workflows inteligentes personalizados",
      details: [
        "Constructor visual de flujos",
        "Condiciones lógicas avanzadas",
        "Integraciones con APIs externas",
        "Triggers automáticos",
        "Testing A/B de flujos"
      ]
    },
    {
      icon: Shield,
      title: "Seguridad Empresarial",
      description: "Protección y cumplimiento normativo",
      details: [
        "Cifrado end-to-end",
        "Cumplimiento GDPR",
        "Backup automático",
        "Control de acceso por roles",
        "Auditoría de actividades"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Funcionalidades Avanzadas
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Descubre todas las capacidades de nuestra plataforma WhatsApp Business
            diseñadas para potenciar tu negocio
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-l-green-500">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-900">
                        {feature.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        {feature.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Integraciones Disponibles
            </h2>
            <p className="text-xl text-gray-600">
              Conecta con tus herramientas favoritas
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "Zapier", icon: Settings },
              { name: "Google Sheets", icon: BarChart3 },
              { name: "HubSpot", icon: Users },
              { name: "Salesforce", icon: Globe }
            ].map((integration, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <integration.icon className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900">
                  {integration.name}
                </h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Listo para Automatizar tu WhatsApp?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Comienza tu prueba gratuita y descubre el poder de la automatización
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8">
            Crear mi BOT Gratis
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Funcionalidades;
