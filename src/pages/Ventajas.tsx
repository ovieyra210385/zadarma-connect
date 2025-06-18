
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Users,
  Zap,
  Shield,
  BarChart3,
  Smartphone,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const Ventajas = () => {
  const advantages = [
    {
      icon: TrendingUp,
      title: "Incrementa Ventas hasta 300%",
      description: "Convierte más leads con automatización inteligente",
      stats: "300% más conversiones",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Clock,
      title: "Ahorra 40 Horas Semanales",
      description: "Automatiza respuestas y gestión de clientes",
      stats: "40h/semana ahorradas",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: DollarSign,
      title: "Reduce Costos Operativos 60%",
      description: "Menor necesidad de personal de atención",
      stats: "60% menos costos",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Atiende Miles de Clientes",
      description: "Escalabilidad ilimitada sin contratar personal",
      stats: "∞ clientes simultáneos",
      color: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    {
      category: "Eficiencia Operativa",
      items: [
        "Respuestas instantáneas 24/7",
        "Gestión automatizada de leads",
        "Seguimiento personalizado de clientes",
        "Reportes automáticos de rendimiento"
      ]
    },
    {
      category: "Experiencia del Cliente",
      items: [
        "Atención inmediata sin esperas",
        "Respuestas personalizadas",
        "Historial completo de interacciones",
        "Escalamiento fluido a humanos"
      ]
    },
    {
      category: "Crecimiento del Negocio",
      items: [
        "Campañas masivas segmentadas",
        "Nurturing automático de leads",
        "Cross-selling y up-selling inteligente",
        "Análisis predictivo de comportamiento"
      ]
    },
    {
      category: "Ventaja Competitiva",
      items: [
        "Tecnología de vanguardia",
        "Integración nativa con WhatsApp",
        "Cumplimiento de políticas WhatsApp",
        "Soporte técnico especializado"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Ventajas Competitivas
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Descubre por qué miles de empresas eligen nuestra plataforma
            para transformar su comunicación empresarial
          </p>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-r ${advantage.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <advantage.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {advantage.description}
                </p>
                <div className={`text-2xl font-bold bg-gradient-to-r ${advantage.color} bg-clip-text text-transparent`}>
                  {advantage.stats}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Beneficios Detallados
            </h2>
            <p className="text-xl text-gray-600">
              Cada funcionalidad está diseñada para maximizar tu ROI
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-gray-900 flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    {benefit.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {benefit.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-gray-700">
                        <ArrowRight className="w-4 h-4 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Calcula tu ROI Potencial
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Empresas similares a la tuya han visto estos resultados
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">500%</div>
                <div className="text-green-100">ROI Promedio</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">3 meses</div>
                <div className="text-green-100">Tiempo de recuperación</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-green-100">Satisfacción del cliente</div>
              </div>
            </div>
            
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Calcular mi ROI Personalizado
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ventajas;
