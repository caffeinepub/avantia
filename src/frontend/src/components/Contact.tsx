import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Send, MessageCircle } from 'lucide-react';
import { SiFacebook, SiInstagram, SiLinkedin } from 'react-icons/si';

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    whatsapp: '',
    email: '',
    mensaje: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
      setFormData({ nombre: '', empresa: '', whatsapp: '', email: '', mensaje: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hola, me gustaría obtener más información sobre sus servicios.');
    window.open(`https://wa.me/5218124070421?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Hablemos de tu <span className="text-[#004AAD]">proyecto</span>
          </h2>
          <div className="w-24 h-1 bg-[#004AAD] mx-auto rounded-full" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos listos para ayudarte a alcanzar tus objetivos digitales
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-gray-200 animate-in fade-in slide-in-from-left-4 duration-700">
              <CardHeader>
                <CardTitle className="text-2xl">Envíanos un mensaje</CardTitle>
                <CardDescription>
                  Completa el formulario y nos pondremos en contacto contigo lo antes posible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre completo *</Label>
                      <Input
                        id="nombre"
                        placeholder="Tu nombre"
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        required
                        className="border-gray-300 focus:border-[#004AAD] focus:ring-[#004AAD]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="empresa">Empresa</Label>
                      <Input
                        id="empresa"
                        placeholder="Nombre de tu empresa"
                        value={formData.empresa}
                        onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                        className="border-gray-300 focus:border-[#004AAD] focus:ring-[#004AAD]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="whatsapp">WhatsApp *</Label>
                      <Input
                        id="whatsapp"
                        type="tel"
                        placeholder="+52 81 2407 0421"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        required
                        className="border-gray-300 focus:border-[#004AAD] focus:ring-[#004AAD]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="tu@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="border-gray-300 focus:border-[#004AAD] focus:ring-[#004AAD]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mensaje">Mensaje *</Label>
                    <Textarea
                      id="mensaje"
                      placeholder="Cuéntanos sobre tu proyecto y cómo podemos ayudarte..."
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      required
                      rows={5}
                      className="border-gray-300 focus:border-[#004AAD] focus:ring-[#004AAD] resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-[#004AAD] hover:bg-[#003A8C] text-white font-semibold transition-all duration-300 hover:scale-[1.02]"
                  >
                    {isSubmitting ? (
                      'Enviando...'
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Enviar mensaje
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-700">
            {/* WhatsApp Card */}
            <Card className="shadow-lg border-[#004AAD]/20 bg-gradient-to-br from-[#004AAD] to-[#0066DD] text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <MessageCircle className="h-6 w-6" />
                  WhatsApp Directo
                </CardTitle>
                <CardDescription className="text-white/90">
                  Respuesta inmediata por WhatsApp
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={handleWhatsAppClick}
                  variant="secondary"
                  size="lg"
                  className="w-full bg-white text-[#004AAD] hover:bg-white/90 font-semibold"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chatear ahora
                </Button>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <Card className="shadow-lg border-gray-200">
              <CardHeader>
                <CardTitle>Información de contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#004AAD] mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Ubicación</p>
                    <p className="text-gray-600">Monterrey, Nuevo León, México</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-[#004AAD] mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Teléfono</p>
                    <p className="text-gray-600">+52 81 2407 0421</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-[#004AAD] mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">contacto@avantia.mx</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="shadow-lg border-gray-200">
              <CardHeader>
                <CardTitle>Síguenos en redes</CardTitle>
                <CardDescription>Grupo Avantia</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-[#004AAD]/10 hover:bg-[#004AAD] text-[#004AAD] hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <SiFacebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/grupoavantia/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-[#004AAD]/10 hover:bg-[#004AAD] text-[#004AAD] hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <SiInstagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-[#004AAD]/10 hover:bg-[#004AAD] text-[#004AAD] hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <SiLinkedin className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
