import { CheckCircle2, BarChart3, Users, MapPin } from 'lucide-react';

export default function WhyChoose() {
  const reasons = [
    {
      icon: CheckCircle2,
      title: 'Estrategias personalizadas',
      description: 'Cada negocio es único. Diseñamos planes a medida que se adaptan a tus objetivos específicos y presupuesto.',
    },
    {
      icon: BarChart3,
      title: 'Enfoque en resultados medibles',
      description: 'Trabajamos con métricas claras y reportes transparentes. Tu inversión se traduce en crecimiento tangible.',
    },
    {
      icon: Users,
      title: 'Atención directa y cercana',
      description: 'Comunicación constante y soporte dedicado. Somos tu equipo de marketing, siempre disponibles para ti.',
    },
    {
      icon: MapPin,
      title: 'Experiencia en mercado local',
      description: 'Conocemos profundamente el mercado de Monterrey y el norte de México, lo que nos da una ventaja estratégica.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            ¿Por qué elegir <span className="text-[#004AAD]">Avantia</span>?
          </h2>
          <div className="w-24 h-1 bg-[#004AAD] mx-auto rounded-full" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nos diferenciamos por nuestro compromiso con tu éxito
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="flex gap-6 p-8 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-[#004AAD]/30 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms`, animationDuration: '700ms' }}
            >
              <div className="shrink-0">
                <div className="w-14 h-14 rounded-xl bg-[#004AAD]/10 flex items-center justify-center">
                  <reason.icon className="w-7 h-7 text-[#004AAD]" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
