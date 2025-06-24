
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Bot, 
  MessageSquare, 
  Clock, 
  Zap,
  CheckCircle,
  ArrowRight,
  Users,
  BarChart3,
  Shield,
  Globe,
  Smartphone,
  Settings
} from 'lucide-react';

const BotAtencionCliente = () => {
  const features = [
    {
      icon: Clock,
      title: "Disponibilidad 24/7",
      description: "Tu BOT nunca duerme, atiende a tus clientes las 24 horas del día, los 7 días de la semana"
    },
    {
      icon: MessageSquare,
      title: "Respuestas Instantáneas",
      description: "Responde automáticamente a consultas frecuentes en menos de 1 segundo"
    },
    {
      icon: Users,
      title: "Múltiples Conversaciones",
      description: "Maneja cientos de conversaciones simultáneas sin perder calidad"
    },
    {
      icon: Bot,
      title: "IA Avanzada",
      description: "Procesamiento de lenguaje natural que entiende el contexto y las emociones"
    },
    {
      icon: Zap,
      title: "Escalamiento Inteligente",
      description: "Transfiere automáticamente a agentes humanos cuando es necesario"
    },
    {
      icon: BarChart3,
      title: "Analytics en Tiempo Real",
      description: "Métricas detalladas de rendimiento y satisfacción del cliente"
    }
  ];

  const useCases = [
    {
      title: "Consultas de Productos",
      description: "Información detallada sobre catálogo, precios y disponibilidad",
      example: "Cliente: '¿Tienen iPhone 15 en stock?' → BOT: 'Sí, tenemos iPhone 15 disponible en todos los colores. Precio: $999. ¿Te interesa algún color específico?'"
    },
    {
      title: "Soporte Técnico",
      description: "Resolución de problemas comunes y guías paso a paso",
      example: "Cliente: 'Mi producto no funciona' → BOT: 'Te voy a ayudar. Por favor, dime qué producto tienes y describe el problema específico.'"
    },
    {
      title: "Estado de Pedidos",
      description: "Consultas automáticas sobre envíos y seguimiento",
      example: "Cliente: 'Estado de mi pedido #12345' → BOT: 'Tu pedido está en camino. Número de seguimiento: ABC123. Llegará mañana entre 2-6 PM.'"
    },
    {
      title: "Reservas y Citas",
      description: "Agendamiento automático integrado con tu calendario",
      example: "Cliente: 'Quiero una cita' → BOT: 'Perfecto. Tengo disponibilidad mañana a las 10 AM o 3 PM. ¿Cuál prefieres?'"
    }
  ];

  const pricingPlans = [
    {
      name: "Básico",
      price: "$99",
      period: "/mes",
      description: "Perfecto para pequeñas empresas",
      features: [
        "Hasta 1,000 conversaciones/mes",
        "Respuestas automáticas básicas",
        "Integración WhatsApp Business",
        "Soporte por email",
        "Dashboard básico"
      ],
      popular: false
    },
    {
      name: "Profesional",
      price: "$199",
      period: "/mes",
      description: "Ideal para empresas en crecimiento",
      features: [
        "Hasta 5,000 conversaciones/mes",
        "IA avanzada con NLP",
        "Escalamiento a agentes humanos",
        "Analytics detallado",
        "Integraciones con CRM",
        "Soporte prioritario 24/7"
      ],
      popular: true
    },
    {
      name: "Empresarial",
      price: "$399",
      period: "/mes",
      description: "Para grandes empresas",
      features: [
        "Conversaciones ilimitadas",
        "BOT personalizado 100%",
        "API completa",
        "Multiple agentes humanos",
        "Reportes avanzados",
        "Gerente de cuenta dedicado"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm border border-blue-400/30 mb-6">
            <Bot className="w-4 h-4 text-blue-200" />
            <span className="text-blue-100">BOT de Atención al Cliente</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            Automatiza tu Atención al Cliente
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Nuestro BOT inteligente resuelve el 80% de las consultas automáticamente,
            mejorando la satisfacción del cliente y reduciendo costos operativos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8">
              Probar Gratis 14 Días
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
              Ver Demo en Vivo
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Características Principales
            </h2>
            <p className="text-xl text-gray-600">
              Todo lo que necesitas para automatizar tu atención al cliente
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Casos de Uso Reales
            </h2>
            <p className="text-xl text-gray-600">
              Mira cómo nuestro BOT maneja diferentes situaciones
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">
                    {useCase.title}
                  </CardTitle>
                  <CardDescription>
                    {useCase.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-l-blue-500">
                    <p className="text-sm text-blue-800 font-mono">
                      {useCase.example}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Planes y Precios
            </h2>
            <p className="text-xl text-gray-600">
              Elige el plan perfecto para tu empresa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`p-6 text-center relative ${plan.popular ? 'border-2 border-blue-500 shadow-xl scale-105' : 'hover:shadow-lg'} transition-all duration-300`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Más Popular
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                    <span className="text-gray-500 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${plan.popular ? 'bg-blue-500 hover:bg-blue-600' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  Comenzar Prueba Gratis
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Listo para Automatizar tu Atención?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Únete a más de 1,000 empresas que ya automatizaron su atención al cliente
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8">
            Crear mi BOT Ahora
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default BotAtencionCliente;
