import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Bot, 
  MessageSquare, 
  Zap, 
  Settings, 
  BarChart3,
  Users,
  Phone,
  Image,
  Sparkles,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const BotWhatsapp = () => {
  const [activeSection, setActiveSection] = useState('setup');

  const sidebarItems = [
    { id: 'setup', icon: Bot, label: 'Configurar BOT', active: true },
    { id: 'generator', icon: Image, label: 'Generador de Imágenes' },
    { id: 'whatsapp', icon: MessageSquare, label: 'WhatsApp', highlight: true },
    { id: 'analytics', icon: BarChart3, label: 'Analytics' },
    { id: 'contacts', icon: Users, label: 'Contactos' },
    { id: 'settings', icon: Settings, label: 'Configuración' }
  ];

  const quickActions = [
    {
      icon: Zap,
      title: 'Entrenar tu BOT',
      description: 'Configura respuestas automáticas inteligentes',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: MessageSquare,
      title: 'Plantillas de Respuesta',
      description: 'Crea respuestas predefinidas para casos comunes',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: BarChart3,
      title: 'Ver Analytics',
      description: 'Analiza el rendimiento de tu BOT',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Phone,
      title: 'Integrar PBX',
      description: 'Conecta tu BOT con tu centralita telefónica',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const features = [
    'Respuestas automáticas 24/7',
    'IA conversacional avanzada',
    'Integración con CRM',
    'Analytics en tiempo real',
    'Soporte multiidioma',
    'Entrenamiento personalizado'
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <div className="w-80 bg-card border-r border-border p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Bot className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">BOT WhatsApp</h1>
            <p className="text-sm text-muted-foreground">Inteligencia Artificial</p>
          </div>
        </div>

        <nav className="space-y-2">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                activeSection === item.id
                  ? 'bg-primary text-primary-foreground'
                  : item.highlight
                  ? 'bg-accent text-accent-foreground hover:bg-accent/80'
                  : 'hover:bg-muted'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
              {item.highlight && (
                <Badge className="ml-auto bg-primary">Nuevo</Badge>
              )}
            </button>
          ))}
        </nav>

        <div className="mt-8 p-4 bg-muted rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Estado del BOT</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-muted-foreground">Activo y funcionando</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Configura tu BOT de WhatsApp
            </h2>
            <p className="text-xl text-muted-foreground">
              Conecta tu cuenta de WhatsApp y obtén acceso a tu BOT inteligente también
            </p>
          </div>

          {/* Connection Status */}
          <Card className="p-6 mb-8 border-2 border-dashed border-muted-foreground/20">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Vincula tu cuenta de WhatsApp</h3>
              <p className="text-muted-foreground mb-6">
                Escanea el código QR para conectar tu WhatsApp Business y comenzar a usar el BOT
              </p>
              <Button size="lg" className="mb-4">
                <ArrowRight className="mr-2 w-5 h-5" />
                Conectar WhatsApp
              </Button>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4" />
                Conexión segura y cifrada
              </div>
            </div>
          </Card>

          {/* Quick Actions Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {quickActions.map((action, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center mb-4`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {action.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {action.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Features List */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Características del BOT</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BotWhatsapp;
