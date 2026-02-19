import { Target, Lightbulb, TrendingUp, Award } from 'lucide-react';

export default function About() {
  const values = [
    { icon: Target, label: 'Estrategia' },
    { icon: Lightbulb, label: 'Creatividad' },
    { icon: TrendingUp, label: 'Crecimiento' },
    { icon: Award, label: 'Resultados' },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Sobre <span className="text-[#004AAD]">Avantia</span>
            </h2>
            <div className="w-24 h-1 bg-[#004AAD] mx-auto rounded-full" />
          </div>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            Somos una agencia de marketing digital con sede en <strong className="text-[#004AAD]">Monterrey, Nuevo León</strong>, 
            especializada en transformar marcas y llevarlas al éxito digital. Combinamos estrategia, creatividad y tecnología 
            para generar resultados medibles que impulsan el crecimiento de tu negocio.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            Nuestro enfoque está centrado en entender las necesidades únicas de cada cliente y desarrollar soluciones 
            personalizadas que generen impacto real en el mercado digital.
          </p>

          {/* Values Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
            {values.map((value, index) => (
              <div
                key={value.label}
                className="flex flex-col items-center space-y-3 p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${300 + index * 100}ms`, animationDuration: '700ms' }}
              >
                <div className="w-14 h-14 rounded-full bg-[#004AAD]/10 flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-[#004AAD]" />
                </div>
                <span className="font-semibold text-gray-900">{value.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
