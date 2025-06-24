
import React from 'react';
import { ArrowRight, Phone, Wifi, Globe, Shield, Bot, MessageSquare, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import NetworkVisualization from './NetworkVisualization';
import FloatingElements from './FloatingElements';

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
      {/* Enhanced 3D Background */}
      <div className="absolute inset-0 opacity-30">
        <NetworkVisualization />
      </div>
      
      {/* Additional Floating Elements */}
      <div className="absolute inset-0 opacity-20">
        <FloatingElements />
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-green-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-radial from-emerald-500/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-radial from-teal-500/10 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Geometric Patterns */}
      <div className="absolute top-20 right-20 opacity-10">
        <div className="w-32 h-32 border border-green-400 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
      </div>
      <div className="absolute bottom-32 left-20 opacity-10">
        <div className="w-24 h-24 border-2 border-emerald-400 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-16">
        <div className="grid lg:grid-cols-3 gap-12 items-center min-h-screen">
          {/* Left Column - Content */}
          <div className="lg:col-span-2 text-white space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-green-500/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm border border-green-400/30">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>WhatsApp Business API • BOT + CRM</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent animate-pulse">
                  WhatsApp
                </span>
                <br />
                <span className="text-white drop-shadow-2xl">Business Pro</span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-lg drop-shadow-lg">
                Transforma tu negocio con nuestro BOT inteligente y CRM integrado para WhatsApp Business. 
                Automatiza conversaciones, gestiona clientes y multiplica tus ventas.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-lg px-8 shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300">
                Crear mi BOT Gratis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 backdrop-blur-sm shadow-xl hover:shadow-white/10 transform hover:scale-105 transition-all duration-300">
                Ver Demo WhatsApp
              </Button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center backdrop-blur-sm bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="text-3xl font-bold text-green-400 animate-pulse">500K+</div>
                <div className="text-sm text-gray-400">Mensajes/día</div>
              </div>
              <div className="text-center backdrop-blur-sm bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="text-3xl font-bold text-emerald-400 animate-pulse" style={{ animationDelay: '0.5s' }}>95%</div>
                <div className="text-sm text-gray-400">Tasa apertura</div>
              </div>
              <div className="text-center backdrop-blur-sm bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="text-3xl font-bold text-teal-400 animate-pulse" style={{ animationDelay: '1s' }}>24/7</div>
                <div className="text-sm text-gray-400">Automatización</div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-4 pt-8">
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  className="p-4 bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10 group"
                  style={{ 
                    animationDelay: `${index * 0.2}s`,
                    transform: `translateZ(${index * 10}px)`
                  }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <feature.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-green-300 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-xs text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column - WhatsApp Business Iframe */}
          <div className="lg:col-span-1 flex justify-center items-center">
            <div className="relative">
              {/* Glowing Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-xl"></div>
              
              {/* Iframe Container */}
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-2xl">
                <div className="text-center mb-4">
                  <h3 className="text-white font-semibold text-lg mb-2">🚀 Prueba Nuestro BOT</h3>
                  <p className="text-gray-300 text-sm">Interactúa con nuestro WhatsApp Business</p>
                </div>
                
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <iframe
                    src="https://business.facebook.com/wa/manage/flows/1450515702809607/preview/?token=1e25d44f-bd2c-4a1f-8eee-42c48aee7045"
                    width="430"
                    height="840"
                    className="w-full max-w-[430px] h-[600px] lg:h-[700px] border-0 rounded-xl"
                    title="WhatsApp Business Bot Demo"
                  />
                </div>
                
                <div className="text-center mt-4">
                  <p className="text-green-300 text-sm font-medium">✨ Demo en Vivo ✨</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
