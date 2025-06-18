
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  Video, 
  FileText, 
  Headphones,
  MessageCircle,
  Download,
  ExternalLink,
  Play,
  Clock,
  Star,
  Users,
  Lightbulb
} from 'lucide-react';

const Recursos = () => {
  const resourceCategories = [
    {
      icon: BookOpen,
      title: "Guías y Tutoriales",
      description: "Aprende paso a paso",
      color: "from-blue-500 to-cyan-500",
      resources: [
        {
          title: "Guía Completa WhatsApp Business API",
          type: "PDF",
          duration: "45 min lectura",
          description: "Todo lo que necesitas saber para empezar"
        },
        {
          title: "Cómo Crear tu Primer BOT",
          type: "Tutorial",
          duration: "20 min",
          description: "Tutorial paso a paso con ejemplos prácticos"
        },
        {
          title: "Mejores Prácticas para CRM",
          type: "Guía",
          duration: "30 min lectura",
          description: "Optimiza la gestión de tus contactos"
        }
      ]
    },
    {
      icon: Video,
      title: "Videos y Webinars",
      description: "Contenido audiovisual",
      color: "from-purple-500 to-pink-500",
      resources: [
        {
          title: "Demo Completa de la Plataforma",
          type: "Video",
          duration: "15 min",
          description: "Conoce todas las funcionalidades en acción"
        },
        {
          title: "Webinar: Automatización Exitosa",
          type: "Webinar",
          duration: "60 min",
          description: "Casos reales de implementación exitosa"
        },
        {
          title: "Masterclass Marketing WhatsApp",
          type: "Curso",
          duration: "120 min",
          description: "Estrategias avanzadas de marketing digital"
        }
      ]
    },
    {
      icon: FileText,
      title: "Plantillas y Templates",
      description: "Recursos listos para usar",
      color: "from-green-500 to-emerald-500",
      resources: [
        {
          title: "50+ Templates de Mensajes",
          type: "Templates",
          duration: "Descarga instantánea",
          description: "Mensajes pre-aprobados para diferentes industrias"
        },
        {
          title: "Flujos de Automatización Listos",
          type: "Plantillas",
          duration: "Implementación 5 min",
          description: "Workflows probados para casos comunes"
        },
        {
          title: "Scripts de Ventas Efectivos",
          type: "Scripts",
          duration: "Uso inmediato",
          description: "Conversaciones que convierten leads en clientes"
        }
      ]
    },
    {
      icon: Headphones,
      title: "Soporte y Comunidad",
      description: "Ayuda cuando la necesites",
      color: "from-orange-500 to-red-500",
      resources: [
        {
          title: "Centro de Ayuda 24/7",
          type: "Soporte",
          duration: "Respuesta < 2h",
          description: "Asistencia técnica especializada"
        },
        {
          title: "Comunidad de Usuarios",
          type: "Foro",
          duration: "Acceso inmediato",
          description: "Conecta con otros usuarios y expertos"
        },
        {
          title: "Sesiones de Consultoría",
          type: "Consultoría",
          duration: "60 min",
          description: "Asesoramiento personalizado para tu negocio"
        }
      ]
    }
  ];

  const popularResources = [
    {
      title: "ROI Calculator WhatsApp BOT",
      description: "Calcula el retorno de inversión de implementar automatización",
      type: "Herramienta",
      rating: 4.9,
      downloads: "5,000+"
    },
    {
      title: "Checklist de Implementación",
      description: "Lista paso a paso para configurar tu primer BOT",
      type: "PDF",
      rating: 4.8,
      downloads: "3,200+"
    },
    {
      title: "Análisis de Competencia",
      description: "Template para analizar estrategias de WhatsApp de competidores",
      type: "Excel",
      rating: 4.7,
      downloads: "2,800+"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Centro de Recursos
          </h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Todo lo que necesitas para dominar WhatsApp Business y maximizar
            el potencial de tu negocio
          </p>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {resourceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="text-center mb-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {category.title}
                </h2>
                <p className="text-xl text-gray-600">
                  {category.description}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {category.resources.map((resource, resourceIndex) => (
                  <Card key={resourceIndex} className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg text-gray-900">
                        {resource.title}
                      </CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="bg-gray-100 px-2 py-1 rounded">
                          {resource.type}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {resource.duration}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        {resource.description}
                      </p>
                      <Button className="w-full" variant="outline">
                        <Download className="w-4 h-4 mr-2" />
                        Acceder Gratis
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Resources */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Recursos Más Populares
            </h2>
            <p className="text-xl text-gray-600">
              Los favoritos de nuestra comunidad
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {popularResources.map((resource, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg text-gray-900 mb-2">
                        {resource.title}
                      </CardTitle>
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-sm text-gray-600 ml-1">
                            {resource.rating}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500">
                          • {resource.downloads} descargas
                        </span>
                      </div>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                        {resource.type}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    {resource.description}
                  </p>
                  <Button className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Descargar Gratis
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Help Center CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
            <MessageCircle className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">
              ¿No Encuentras lo que Buscas?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Nuestro equipo de soporte está listo para ayudarte con cualquier pregunta
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Contactar Soporte
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-blue-600">
                <ExternalLink className="w-4 h-4 mr-2" />
                Centro de Ayuda
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recursos;
