
import React from 'react';
import { ArrowRight, Phone, Wifi, Globe, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import NetworkVisualization from './NetworkVisualization';

const HeroSection = () => {
  const features = [
    {
      icon: Phone,
      title: "PBX en la Nube",
      description: "Centralita virtual disponible 24/7"
    },
    {
      icon: Globe,
      title: "Conectividad Global",
      description: "Números virtuales en todo el mundo"
    },
    {
      icon: Wifi,
      title: "Configuración Rápida",
      description: "Setup en minutos, no horas"
    },
    {
      icon: Shield,
      title: "Seguridad Avanzada",
      description: "Protección empresarial garantizada"
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden">
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
              <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Conectado 24/7 • 99.9% Uptime</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Zadarma
                </span>
                <br />
                <span className="text-white">Connect 3D</span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-lg">
                Revoluciona tu comunicación empresarial con nuestra plataforma PBX 3D. 
                Conectividad inteligente que mantiene tu negocio funcionando las 24 horas.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-lg px-8">
                Prueba Gratuita
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 text-lg px-8">
                Ver Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">150+</div>
                <div className="text-sm text-gray-400">Países</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">10M+</div>
                <div className="text-sm text-gray-400">Llamadas/mes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">99.9%</div>
                <div className="text-sm text-gray-400">Uptime</div>
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
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
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
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
    </div>
  );
};

export default HeroSection;
