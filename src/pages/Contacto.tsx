
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageSquare,
  Calendar,
  Users,
  Zap,
  CheckCircle,
  Send
} from 'lucide-react';

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const contactMethods = [
    {
      icon: MessageSquare,
      title: "WhatsApp Business",
      description: "Chatea con nosotros directamente",
      contact: "+1 (555) 123-4567",
      action: "Enviar Mensaje",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Phone,
      title: "Llamada Telefónica",
      description: "Habla con un experto ahora",
      contact: "+1 (555) 987-6543",
      action: "Llamar Ahora",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Mail,
      title: "Correo Electrónico",
      description: "Escríbenos tu consulta",
      contact: "hola@whatsappbusiness.com",
      action: "Enviar Email",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Calendar,
      title: "Agendar Demo",
      description: "Reserva una demostración personalizada",
      contact: "30 min - Gratuito",
      action: "Reservar Cita",
      color: "from-orange-500 to-red-500"
    }
  ];

  const officeInfo = [
    {
      icon: MapPin,
      title: "Oficina Principal",
      details: ["Av. Tecnología 123, Piso 15", "Ciudad Tech, TC 12345", "País Digital"]
    },
    {
      icon: Clock,
      title: "Horarios de Atención",
      details: ["Lunes a Viernes: 8:00 AM - 8:00 PM", "Sábados: 9:00 AM - 5:00 PM", "Domingos: Solo emergencias"]
    },
    {
      icon: Users,
      title: "Soporte Técnico",
      details: ["24/7 vía WhatsApp y Email", "Respuesta < 2 horas", "Soporte multiidioma"]
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Aquí iría la lógica para enviar el formulario
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Contáctanos
          </h1>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
            Estamos aquí para ayudarte a transformar tu negocio con WhatsApp Business.
            ¡Hablemos de tu proyecto!
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Múltiples Formas de Contacto
            </h2>
            <p className="text-xl text-gray-600">
              Elige la opción que más te convenga
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-3">
                  {method.description}
                </p>
                <p className="text-lg font-semibold text-gray-800 mb-4">
                  {method.contact}
                </p>
                <Button className="w-full">
                  {method.action}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl text-gray-900">
                  Envíanos un Mensaje
                </CardTitle>
                <CardDescription>
                  Completa el formulario y te contactaremos en menos de 24 horas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Empresa
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje *
                    </label>
                    <Textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows={4}
                      placeholder="Cuéntanos sobre tu proyecto o consulta..."
                    />
                  </div>

                  <Button type="submit" className="w-full text-lg">
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Office Information */}
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Información de Contacto
                </h2>
                <p className="text-lg text-gray-600">
                  Estamos disponibles para atenderte
                </p>
              </div>

              {officeInfo.map((info, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}

              {/* Quick Stats */}
              <Card className="p-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                <h3 className="text-xl font-bold mb-4">¿Por qué Elegirnos?</h3>
                <div className="space-y-3">
                  {[
                    "✅ Respuesta garantizada en < 24h",
                    "✅ Consultoría gratuita incluida",
                    "✅ Setup completo sin costo adicional",
                    "✅ Soporte técnico especializado"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <span className="text-green-100">{benefit}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              ¿Tienes Preguntas Frecuentes?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Visita nuestro centro de ayuda para respuestas inmediatas
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Ver Preguntas Frecuentes
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
