import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Services() {
  const services = [
    {
      title: 'Gestión de Redes Sociales',
      description: 'Construimos y gestionamos tu presencia digital con contenido estratégico que conecta con tu audiencia y genera engagement real.',
      icon: '/assets/generated/icon-social-media.dim_128x128.png',
    },
    {
      title: 'Publicidad Digital',
      description: 'Campañas optimizadas en Meta Ads y Google Ads que maximizan tu ROI y convierten visitantes en clientes reales.',
      icon: '/assets/generated/icon-digital-ads.dim_128x128.png',
    },
    {
      title: 'Branding y Diseño',
      description: 'Creamos identidades visuales memorables que diferencian tu marca y comunican tu propuesta de valor de forma impactante.',
      icon: '/assets/generated/icon-branding.dim_128x128.png',
    },
    {
      title: 'Desarrollo Web',
      description: 'Sitios web modernos, rápidos y optimizados para conversión que transforman visitantes en oportunidades de negocio.',
      icon: '/assets/generated/icon-web-dev.dim_128x128.png',
    },
    {
      title: 'Estrategias de Marketing Digital',
      description: 'Planes integrales personalizados que alinean todos los canales digitales para alcanzar tus objetivos de crecimiento.',
      icon: '/assets/generated/icon-marketing-strategy.dim_128x128.png',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Nuestros <span className="text-[#004AAD]">Servicios</span>
          </h2>
          <div className="w-24 h-1 bg-[#004AAD] mx-auto rounded-full" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Soluciones integrales de marketing digital diseñadas para impulsar tu marca
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-gray-200 hover:border-[#004AAD]/30 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms`, animationDuration: '700ms' }}
            >
              <CardHeader className="space-y-4">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-[#004AAD]/10 flex items-center justify-center group-hover:bg-[#004AAD]/20 transition-colors duration-300">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <CardTitle className="text-xl text-center group-hover:text-[#004AAD] transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
