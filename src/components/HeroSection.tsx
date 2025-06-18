
import React from 'react';
import { ArrowRight, Phone, Wifi, Globe, Shield, Bot, MessageSquare, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import NetworkVisualization from './NetworkVisualization';

const HeroSection = () => {
  const features = [
    {
      icon: Bot,
      title: "WhatsApp BOT Inteligente",
      description: "Automatiza respuestas 24/7 con IA avanzada"
    },
    {
      icon: Users,
      title: "CRM WhatsApp Business",
      description: "Gestiona todos tus clientes desde una plataforma"
    },
    {
      icon: MessageSquare,
      title: "Campañas Masivas",
      description: "Envía mensajes personalizados a miles de contactos"
    },
    {
      icon: Shield,
      title: "API Oficial WhatsApp",
      description: "Integración certificada y completamente segura"
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-20">
        <NetworkVisualization />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Column - Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-green-500/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>WhatsApp Business API • BOT + CRM</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  WhatsApp
                </span>
                <br />
                <span className="text-white">Business Pro</span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-lg">
                Transforma tu negocio con nuestro BOT inteligente y CRM integrado para WhatsApp Business. 
                Automatiza conversaciones, gestiona clientes y multiplica tus ventas.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-lg px-8">
                Crear mi BOT Gratis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 text-lg px-8">
                Ver Demo WhatsApp
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">500K+</div>
                <div className="text-sm text-gray-400">Mensajes/día</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400">95%</div>
                <div className="text-sm text-gray-400">Tasa apertura</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400">24/7</div>
                <div className="text-sm text-gray-400">Automatización</div>
              </div>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 animate-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-green-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-emerald-500/10 rounded-full blur-xl animate-pulse"></div>
    </div>
  );
};

export default HeroSection;
