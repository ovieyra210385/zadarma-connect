import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Wifi, Settings, Users, Award, MessageCircle, ArrowRight, Check, Globe, Shield, Zap, BarChart3, Bot, MessageSquare, Lock, FileText, UserCheck } from 'lucide-react';
const Index = () => {
  const whatsappServices = [{
    icon: Bot,
    title: "BOT WhatsApp Inteligente",
    description: "Chatbot con IA que responde automáticamente a tus clientes las 24 horas",
    features: ["Respuestas automáticas", "IA conversacional", "Múltiples idiomas", "Integración API"],
    popular: true
  }, {
    icon: Users,
    title: "CRM WhatsApp Business",
    description: "Administra todos tus contactos y conversaciones desde una sola plataforma",
    features: ["Gestión de contactos", "Historial completo", "Etiquetas y filtros", "Métricas detalladas"],
    popular: true
  }, {
    icon: MessageSquare,
    title: "Campañas Masivas",
    description: "Envía mensajes promocionales y informativos a miles de contactos",
    features: ["Envío masivo", "Plantillas certificadas", "Programación", "Segmentación"]
  }];
  const additionalServices = [{
    icon: Phone,
    title: "PBX en la Nube",
    description: "Centralita virtual completa para empresas",
    features: ["Llamadas ilimitadas", "Grabación automática", "Menús de voz", "Multi-idioma"]
  }, {
    icon: Globe,
    title: "Números Virtuales",
    description: "Números de teléfono virtuales en más de 150 países",
    features: ["Cobertura global", "Portabilidad", "Configuración rápida", "Tarifas competitivas"]
  }, {
    icon: Wifi,
    title: "eSIM Empresarial",
    description: "Conectividad móvil para equipos distribuidos globalmente",
    features: ["Activación inmediata", "Cobertura mundial", "Planes flexibles", "Gestión centralizada"]
  }];
  const advantages = [{
    icon: Bot,
    title: "Automatización Total",
    description: "BOT que maneja el 80% de consultas automáticamente"
  }, {
    icon: Shield,
    title: "API Oficial WhatsApp",
    description: "Integración certificada y 100% segura"
  }, {
    icon: BarChart3,
    title: "Analytics Avanzado",
    description: "Métricas detalladas de conversaciones y ventas"
  }, {
    icon: Settings,
    title: "Integración CRM",
    description: "Conecta con tu sistema actual sin problemas"
  }];
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Compliance and Technology Provider Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Proveedor de Tecnología Especializado en Automatización con WhatsApp Business
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Somos un proveedor tecnológico certificado que desarrolla soluciones avanzadas 
              utilizando la API oficial de WhatsApp Business para empresas y organizaciones.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                API Oficial WhatsApp
              </h3>
              <p className="text-gray-600">
                Utilizamos exclusivamente la API oficial de WhatsApp Business, 
                garantizando total conformidad con las políticas de Meta.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <UserCheck className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Uso con Consentimiento
              </h3>
              <p className="text-gray-600">
                Toda interacción se realiza con consentimiento expreso del usuario, 
                respetando la privacidad y preferencias de comunicación.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Lock className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Confidencialidad Total
              </h3>
              <p className="text-gray-600">
                Mantenemos estricta confidencialidad y uso limitado 
                a fines operativos autorizados.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why WhatsApp Business API Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              ¿Por qué usamos la API de WhatsApp Business?
            </h2>
            
            <div className="bg-gray-50 rounded-2xl p-8 mb-8">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Utilizamos <strong>WhatsApp Business API</strong> como parte de nuestra estrategia tecnológica 
                para automatizar la atención al cliente, el registro de pedidos, el envío de notificaciones 
                y la mejora de la logística empresarial.
              </p>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Desarrollamos estas soluciones tecnológicas internamente, y también las implementamos 
                en colaboración con <strong>aliados comerciales</strong> que requieren automatización 
                de sus procesos de comunicación.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Toda la interacción con clientes se realiza mediante <strong>consentimiento expreso</strong>, 
                con estricta confidencialidad y uso limitado a fines operativos autorizados.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <div className="flex items-start">
                <Bot className="w-8 h-8 text-blue-600 mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Impulsado por "WhastBot33"
                  </h3>
                  <p className="text-gray-700">
                    Esta solución es impulsada por <strong>"WhastBot33"</strong>, 
                    una aplicación desarrollada e implementada por nuestro equipo 
                    especializado en atención automatizada, registrada oficialmente en Meta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
            {whatsappServices.map((service, index) => <Card key={index} className={`p-8 hover:shadow-xl transition-shadow duration-300 relative ${service.popular ? 'ring-2 ring-green-500' : ''}`}>
                {service.popular && <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Más Popular
                    </span>
                  </div>}
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
                  {service.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center text-gray-700">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      {feature}
                    </li>)}
                </ul>
                <Button className={`w-full ${service.popular ? 'bg-green-500 hover:bg-green-600' : ''}`}>
                  Empezar Ahora
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>)}
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
            {additionalServices.map((service, index) => <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
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
                  {service.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <Check className="w-4 h-4 text-blue-500 mr-2" />
                      {feature}
                    </li>)}
                </ul>
                <Button variant="outline" className="w-full">
                  Más Información
                </Button>
              </Card>)}
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
            {advantages.map((advantage, index) => <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <advantage.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-600">
                  {advantage.description}
                </p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Privacy and Data Policy Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <FileText className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Política de Privacidad y Manejo de Datos
              </h2>
              <p className="text-xl text-gray-600">
                Transparencia total en el manejo de información y comunicaciones
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Shield className="w-6 h-6 text-green-600 mr-2" />
                  Protección de Datos
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    Cifrado end-to-end en todas las comunicaciones
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    Almacenamiento seguro con protocolos ISO 27001
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    Acceso restringido solo a personal autorizado
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    Eliminación automática de datos según políticas
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <UserCheck className="w-6 h-6 text-blue-600 mr-2" />
                  Consentimiento y Uso
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-blue-500 mr-2 mt-0.5" />
                    Opt-in explícito para todas las comunicaciones
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-blue-500 mr-2 mt-0.5" />
                    Opción de unsubscribe en cada mensaje
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-blue-500 mr-2 mt-0.5" />
                    Uso limitado a fines comerciales autorizados
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-blue-500 mr-2 mt-0.5" />
                    Respeto total a preferencias del usuario
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Globe className="w-6 h-6 text-purple-600 mr-2" />
                  Cumplimiento Normativo
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-purple-500 mr-2 mt-0.5" />
                    Conformidad con políticas de Meta/WhatsApp
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-purple-500 mr-2 mt-0.5" />
                    Cumplimiento GDPR y LGPD
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-purple-500 mr-2 mt-0.5" />
                    Auditorías regulares de seguridad
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-purple-500 mr-2 mt-0.5" />
                    Certificaciones de calidad vigentes
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <MessageCircle className="w-6 h-6 text-orange-600 mr-2" />
                  Derechos del Usuario
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-orange-500 mr-2 mt-0.5" />
                    Acceso completo a datos personales
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-orange-500 mr-2 mt-0.5" />
                    Derecho de rectificación y eliminación
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-orange-500 mr-2 mt-0.5" />
                    Portabilidad de datos garantizada
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-orange-500 mr-2 mt-0.5" />
                    Soporte dedicado para consultas de privacidad
                  </li>
                </ul>
              </Card>
            </div>

            <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Contacto para Asuntos de Privacidad
              </h4>
              <p className="text-gray-700 mb-2">
                Para consultas sobre privacidad, manejo de datos o ejercer tus derechos:
              </p>
              <ul className="text-gray-700 space-y-1">
                <li>📧 Email: contacto@hielolapolar.com</li>
                <li>📱 WhatsApp: +1 (555) PRIVACY</li>
                <li>🕐 Horario: 24/7 via BOT, soporte humano 9AM-6PM</li>
              </ul>
            </div>
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
          <div className="grid md:grid-cols-5 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">WhatsApp Business Pro</span>
              </div>
              <p className="text-gray-400 mb-4">
                Proveedor tecnológico especializado en automatización con WhatsApp Business API.
              </p>
              <div className="text-sm text-gray-500">
                <p>App registrada: WhastBot33</p>
                <p>Certificado Meta Business</p>
              </div>
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
              <h4 className="font-bold mb-4">Legal y Privacidad</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Política de Privacidad</li>
                <li>Términos de Uso</li>
                <li>Manejo de Datos</li>
                <li>Derechos del Usuario</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>soporte@whatsapp-pro.com</li>
                <li>privacidad@whatsapp-pro.com</li>
                <li>+1 (555) WHATSAPP</li>
                <li>24/7 BOT Support</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 WhatsApp Business Pro. Proveedor tecnológico certificado. Todos los derechos reservados.</p>
            <p className="text-sm mt-2">WhastBot33 - App registrada en Meta Business Platform</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;