
import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  MessageSquare, 
  BarChart3, 
  Tags,
  Calendar,
  Filter,
  CheckCircle,
  ArrowRight,
  Database,
  Bell,
  FileText,
  Zap,
  Shield,
  Globe
} from 'lucide-react';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const CrmWhatsapp = () => {
  // Estado para contactos y carga
  const [contacts, setContacts] = useState([]);
  const [loadingContacts, setLoadingContacts] = useState(false);
  const [errorContacts, setErrorContacts] = useState('');
  const [newContact, setNewContact] = useState({ name: '', email: '', phone: '' });
  const [creating, setCreating] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  // Obtener contactos al cargar
  useEffect(() => {
    fetchContacts();
  }, []);

  async function fetchContacts() {
    setLoadingContacts(true);
    setErrorContacts('');
    const { data, error } = await supabase.from('contacts').select('*').order('created_at', { ascending: false });
    if (error) setErrorContacts(error.message);
    else setContacts(data || []);
    setLoadingContacts(false);
  }

  async function handleCreateContact(e) {
    e.preventDefault();
    setCreating(true);
    setSuccessMsg('');
    setErrorContacts('');
    const { name, email, phone } = newContact;
    if (!name || !email) {
      setErrorContacts('Nombre y email son obligatorios');
      setCreating(false);
      return;
    }
    const { error } = await supabase.from('contacts').insert([{ name, email, phone }]);
    if (error) setErrorContacts(error.message);
    else {
      setSuccessMsg('Contacto creado correctamente');
      setNewContact({ name: '', email: '', phone: '' });
      fetchContacts();
    }
    setCreating(false);
  }
  const crmFeatures = [
    {
      icon: Database,
      title: "Base de Datos Unificada",
      description: "Todos tus contactos organizados en un solo lugar con información completa",
      details: [
        "Perfil completo de cada contacto",
        "Historial de conversaciones",
        "Notas y comentarios internos",
        "Datos de comportamiento y preferencias"
      ]
    },
    {
      icon: MessageSquare,
      title: "Gestión de Conversaciones",
      description: "Maneja todas las conversaciones de WhatsApp desde una interfaz centralizada",
      details: [
        "Bandeja de entrada unificada",
        "Asignación automática de conversaciones",
        "Templates de respuestas rápidas",
        "Historial completo de mensajes"
      ]
    },
    {
      icon: Tags,
      title: "Etiquetado Inteligente",
      description: "Organiza y segmenta tus contactos con sistema de etiquetas avanzado",
      details: [
        "Etiquetas personalizables",
        "Auto-etiquetado por comportamiento",
        "Segmentación dinámica",
        "Filtros avanzados de búsqueda"
      ]
    },
    {
      icon: BarChart3,
      title: "Analytics y Reportes",
      description: "Métricas detalladas para optimizar tu estrategia de comunicación",
      details: [
        "Dashboard interactivo en tiempo real",
        "Métricas de engagement y conversión",
        "Reportes de rendimiento por agente",
        "Análisis de comportamiento del cliente"
      ]
    },
    {
      icon: Calendar,
      title: "Automatización de Seguimiento",
      description: "Nunca pierdas una oportunidad con recordatorios y seguimientos automáticos",
      details: [
        "Recordatorios automáticos",
        "Secuencias de seguimiento",
        "Notificaciones de actividad",
        "Agenda integrada"
      ]
    },
    {
      icon: Bell,
      title: "Notificaciones Inteligentes",
      description: "Mantente al día con alertas personalizadas y prioritarias",
      details: [
        "Alertas de mensajes importantes",
        "Notificaciones de leads calientes",
        "Recordatorios de tareas pendientes",
        "Escalamiento automático"
      ]
    }
  ];

  const workflows = [
    {
      title: "Captura de Leads",
      description: "Automatiza la captura y calificación de leads desde WhatsApp",
      steps: [
        "Cliente envía mensaje inicial",
        "CRM registra automáticamente el contacto",
        "BOT califica el lead con preguntas inteligentes",
        "Lead se asigna al agente correspondiente",
        "Seguimiento automático programado"
      ]
    },
    {
      title: "Proceso de Ventas",
      description: "Guía a tus clientes por todo el embudo de ventas",
      steps: [
        "Identificación de necesidades del cliente",
        "Presentación automatizada de productos",
        "Manejo de objeciones con templates",
        "Cierre de venta y procesamiento de pago",
        "Seguimiento post-venta automático"
      ]
    },
    {
      title: "Atención al Cliente",
      description: "Brinda soporte excepcional con historial completo",
      steps: [
        "Cliente contacta por soporte",
        "Agente ve historial completo instantly",
        "Resolución rápida con base de conocimiento",
        "Escalamiento si es necesario",
        "Seguimiento de satisfacción automático"
      ]
    }
  ];

  const integrations = [
    { name: "HubSpot", icon: Users, description: "Sincronización bidireccional de contactos" },
    { name: "Salesforce", icon: Database, description: "Integración completa con CRM existente" },
    { name: "Google Sheets", icon: FileText, description: "Exportación automática de datos" },
    { name: "Zapier", icon: Zap, description: "Conecta con 5000+ aplicaciones" },
    { name: "API REST", icon: Globe, description: "Integración personalizada con tu sistema" },
    { name: "Webhooks", icon: Bell, description: "Notificaciones en tiempo real" }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "/mes",
      description: "Perfecto para pequeños equipos",
      features: [
        "Hasta 2,500 contactos",
        "3 usuarios incluidos",
        "Gestión básica de conversaciones",
        "Reportes estándar",
        "Soporte por email"
      ],
      maxUsers: "3 usuarios",
      popular: false
    },
    {
      name: "Professional",
      price: "$399",
      period: "/mes",
      description: "Ideal para equipos de ventas",
      features: [
        "Hasta 10,000 contactos",
        "10 usuarios incluidos",
        "Automatización avanzada",
        "Analytics completo",
        "Integraciones ilimitadas",
        "Soporte prioritario"
      ],
      maxUsers: "10 usuarios",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/mes",
      description: "Para grandes organizaciones",
      features: [
        "Contactos ilimitados",
        "Usuarios ilimitados",
        "API completa",
        "White-label disponible",
        "Integraciones personalizadas",
        "Gerente de cuenta dedicado"
      ],
      maxUsers: "Usuarios ilimitados",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Soluciones WhatsApp Business */}
      <section className="pt-20 pb-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Soluciones WhatsApp Business</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Automatiza, gestiona y multiplica tus ventas con nuestras herramientas especializadas para WhatsApp Business</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* BOT WhatsApp Inteligente */}
            <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8 shadow group hover:shadow-lg transition">
              <span className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">Más Popular</span>
              <h3 className="text-2xl font-bold text-green-700 mb-2">BOT WhatsApp Inteligente</h3>
              <p className="text-gray-700 mb-4">Chatbot con IA que responde automáticamente a tus clientes las 24 horas</p>
              <ul className="mb-6 space-y-2 text-gray-600 text-sm">
                <li>Respuestas automáticas</li>
                <li>IA conversacional</li>
                <li>Múltiples idiomas</li>
                <li>Integración API</li>
              </ul>
              <Button className="w-full bg-green-500 hover:bg-green-600 text-white" onClick={() => window.location.href = '/bot'}>Empezar Ahora</Button>
            </div>
            {/* CRM WhatsApp Business */}
            <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8 shadow group hover:shadow-lg transition">
              <span className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">Más Popular</span>
              <h3 className="text-2xl font-bold text-green-700 mb-2">CRM WhatsApp Business</h3>
              <p className="text-gray-700 mb-4">Administra todos tus contactos y conversaciones desde una sola plataforma</p>
              <ul className="mb-6 space-y-2 text-gray-600 text-sm">
                <li>Gestión de contactos</li>
                <li>Historial completo</li>
                <li>Etiquetas y filtros</li>
                <li>Métricas detalladas</li>
              </ul>
              <Button className="w-full bg-green-500 hover:bg-green-600 text-white" onClick={() => window.location.href = '/crm-whatsapp'}>Empezar Ahora</Button>
            </div>
            {/* Campañas Masivas */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8 shadow group hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-green-700 mb-2">Campañas Masivas</h3>
              <p className="text-gray-700 mb-4">Envía mensajes promocionales y informativos a miles de contactos</p>
              <ul className="mb-6 space-y-2 text-gray-600 text-sm">
                <li>Envío masivo</li>
                <li>Plantillas certificadas</li>
                <li>Programación</li>
                <li>Segmentación</li>
              </ul>
              <Button className="w-full bg-green-500 hover:bg-green-600 text-white" onClick={() => window.location.href = '/campanas'}>Empezar Ahora</Button>
            </div>
            {/* PBX en la Nube */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-8 shadow group hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-blue-700 mb-2">PBX en la Nube</h3>
              <p className="text-gray-700 mb-4">Centralita virtual completa para empresas</p>
              <ul className="mb-6 space-y-2 text-gray-600 text-sm">
                <li>Llamadas ilimitadas</li>
                <li>Grabación automática</li>
                <li>Menús de voz</li>
                <li>Multi-idioma</li>
              </ul>
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white" onClick={() => window.location.href = '/pbx'}>Más Información</Button>
            </div>
            {/* Números Virtuales */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-8 shadow group hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-blue-700 mb-2">Números Virtuales</h3>
              <p className="text-gray-700 mb-4">Números de teléfono virtuales en más de 150 países</p>
              <ul className="mb-6 space-y-2 text-gray-600 text-sm">
                <li>Cobertura global</li>
                <li>Portabilidad</li>
                <li>Configuración rápida</li>
                <li>Tarifas competitivas</li>
              </ul>
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white" onClick={() => window.location.href = '/numeros'}>Más Información</Button>
            </div>
            {/* eSIM Empresarial */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-8 shadow group hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-blue-700 mb-2">eSIM Empresarial</h3>
              <p className="text-gray-700 mb-4">Conectividad móvil para equipos distribuidos globalmente</p>
              <ul className="mb-6 space-y-2 text-gray-600 text-sm">
                <li>Activación inmediata</li>
                <li>Cobertura mundial</li>
                <li>Planes flexibles</li>
                <li>Gestión centralizada</li>
              </ul>
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white" onClick={() => window.location.href = '/esim'}>Más Información</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ventajas de las Soluciones WhatsApp */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Por Qué Elegir Nuestras Soluciones WhatsApp?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Ventajas que nos hacen líderes en automatización de WhatsApp Business</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 mb-2">Automatización Total</h4>
              <p className="text-gray-700">BOT que maneja el 80% de consultas automáticamente</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 mb-2">API Oficial WhatsApp</h4>
              <p className="text-gray-700">Integración certificada y 100% segura</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 mb-2">Analytics Avanzado</h4>
              <p className="text-gray-700">Métricas detalladas de conversaciones y ventas</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 mb-2">Integración CRM</h4>
              <p className="text-gray-700">Conecta con tu sistema actual sin problemas</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 mb-2">Política de Privacidad y Manejo de Datos</h4>
              <p className="text-gray-700">Transparencia total en el manejo de información y comunicaciones</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 mb-2">Protección de Datos</h4>
              <ul className="text-gray-700 text-sm list-disc ml-5">
                <li>Cifrado end-to-end en todas las comunicaciones</li>
                <li>Almacenamiento seguro con protocolos ISO 27001</li>
                <li>Acceso restringido solo a personal autorizado</li>
                <li>Eliminación automática de datos según políticas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Privacidad y Cumplimiento */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Política de Privacidad y Cumplimiento</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Compromiso total con la protección de datos y la normativa vigente</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 shadow border-l-4 border-emerald-500">
              <h4 className="font-bold text-emerald-700 mb-2">Consentimiento y Uso</h4>
              <ul className="text-gray-700 text-sm list-disc ml-5">
                <li>Opt-in explícito para todas las comunicaciones</li>
                <li>Opción de unsubscribe en cada mensaje</li>
                <li>Uso limitado a fines comerciales autorizados</li>
                <li>Respeto total a preferencias del usuario</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow border-l-4 border-emerald-500">
              <h4 className="font-bold text-emerald-700 mb-2">Cumplimiento Normativo</h4>
              <ul className="text-gray-700 text-sm list-disc ml-5">
                <li>Conformidad con políticas de Meta/WhatsApp</li>
                <li>Cumplimiento GDPR y LGPD</li>
                <li>Auditorías regulares de seguridad</li>
                <li>Certificaciones de calidad vigentes</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow border-l-4 border-emerald-500">
              <h4 className="font-bold text-emerald-700 mb-2">Derechos del Usuario</h4>
              <ul className="text-gray-700 text-sm list-disc ml-5">
                <li>Acceso completo a datos personales</li>
                <li>Derecho de rectificación y eliminación</li>
                <li>Portabilidad de datos garantizada</li>
                <li>Soporte dedicado para consultas de privacidad</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 text-center">
            <h4 className="font-bold text-gray-900 mb-2">Contacto para Asuntos de Privacidad</h4>
            <p className="text-gray-700 mb-1">Para consultas sobre privacidad, manejo de datos o ejercer tus derechos:</p>
            <div className="flex flex-col items-center space-y-1 text-gray-700 text-sm">
              <span>📧 Email: <a href="mailto:contacto@hielolapolar.com" className="text-green-700 underline">contacto@hielolapolar.com</a></span>
              <span>📱 WhatsApp: +1 (555) PRIVACY</span>
              <span>🕐 Horario: 24/7 via BOT, soporte humano 9AM-6PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Automatización */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">¿Listo para Automatizar tu WhatsApp Business?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">Únete a miles de empresas que ya automatizan sus ventas con nuestro BOT y CRM para WhatsApp</p>
          <Button size="lg" variant="secondary" className="text-lg px-8">
            Crear BOT Gratis por 30 Días
          </Button>
        </div>
      </section>

      {/* Header */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-2 bg-green-500/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm border border-green-400/30 mb-6">
            <Users className="w-4 h-4 text-green-200" />
            <span className="text-green-100">CRM WhatsApp Completo</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            El CRM Definitivo para WhatsApp Business
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
            Gestiona todos tus contactos, conversaciones y ventas de WhatsApp 
            desde una plataforma centralizada y potente
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8">
              Probar Gratis 14 Días
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
              Solicitar Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Formulario y listado de contactos reales */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Contactos (Demo Real)</h2>
            <p className="text-gray-600">Gestiona tus contactos reales de Supabase aquí</p>
          </div>
          <form onSubmit={handleCreateContact} className="max-w-xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              className="border rounded px-3 py-2"
              placeholder="Nombre"
              value={newContact.name}
              onChange={e => setNewContact({ ...newContact, name: e.target.value })}
              required
            />
            <input
              className="border rounded px-3 py-2"
              placeholder="Email"
              type="email"
              value={newContact.email}
              onChange={e => setNewContact({ ...newContact, email: e.target.value })}
              required
            />
            <input
              className="border rounded px-3 py-2"
              placeholder="Teléfono"
              value={newContact.phone}
              onChange={e => setNewContact({ ...newContact, phone: e.target.value })}
            />
            <button
              type="submit"
              className="md:col-span-3 bg-green-600 text-white rounded px-6 py-2 mt-2 hover:bg-green-700 disabled:opacity-50"
              disabled={creating}
            >
              {creating ? 'Creando...' : 'Crear Contacto'}
            </button>
          </form>
          {successMsg && <div className="text-green-600 text-center mb-4">{successMsg}</div>}
          {errorContacts && <div className="text-red-600 text-center mb-4">{errorContacts}</div>}
          <div className="overflow-x-auto">
            {loadingContacts ? (
              <div className="text-center py-8">Cargando contactos...</div>
            ) : (
              <table className="min-w-full bg-white border rounded shadow">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b">Nombre</th>
                    <th className="py-2 px-4 border-b">Email</th>
                    <th className="py-2 px-4 border-b">Teléfono</th>
                    <th className="py-2 px-4 border-b">Creado</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((c, i) => (
                    <tr key={c.id || i} className="hover:bg-gray-50">
                      <td className="py-2 px-4 border-b">{c.name}</td>
                      <td className="py-2 px-4 border-b">{c.email}</td>
                      <td className="py-2 px-4 border-b">{c.phone}</td>
                      <td className="py-2 px-4 border-b">{c.created_at ? new Date(c.created_at).toLocaleString() : ''}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Funcionalidades del CRM
            </h2>
            <p className="text-xl text-gray-600">
              Todo lo que necesitas para gestionar tu negocio en WhatsApp
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {crmFeatures.map((feature, index) => (
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

      {/* Workflows */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Workflows Automatizados
            </h2>
            <p className="text-xl text-gray-600">
              Automatiza procesos completos de negocio
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {workflows.map((workflow, index) => (
              <Card key={index} className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 mb-2">
                    {workflow.title}
                  </CardTitle>
                  <CardDescription>
                    {workflow.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {workflow.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-start">
                        <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                          {stepIndex + 1}
                        </div>
                        <p className="text-sm text-gray-700">{step}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Integraciones Disponibles
            </h2>
            <p className="text-xl text-gray-600">
              Conecta con tus herramientas favoritas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((integration, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <integration.icon className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {integration.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {integration.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Planes del CRM WhatsApp
            </h2>
            <p className="text-xl text-gray-600">
              Escala según las necesidades de tu equipo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`p-6 text-center relative ${plan.popular ? 'border-2 border-green-500 shadow-xl scale-105' : 'hover:shadow-lg'} transition-all duration-300`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Más Popular
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-2">{plan.description}</p>
                  <p className="text-sm text-green-600 font-semibold mb-4">{plan.maxUsers}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-green-600">{plan.price}</span>
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
                  className={`w-full ${plan.popular ? 'bg-green-500 hover:bg-green-600' : ''}`}
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
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Listo para Potenciar tu CRM?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Únete a empresas líderes que ya gestionan sus clientes con nuestro CRM
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8">
            Crear mi CRM Ahora
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CrmWhatsapp;
