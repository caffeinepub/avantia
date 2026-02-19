import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';

export default function CTASection() {
  const handleClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 md:py-28 bg-[#004AAD] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Es momento de hacer crecer tu marca
          </h2>
          
          <p className="text-xl md:text-2xl text-white/95 max-w-2xl mx-auto leading-relaxed">
            Agenda una asesoría gratuita y descubre cómo podemos transformar tu presencia digital
          </p>

          <div className="pt-4">
            <Button
              size="lg"
              onClick={handleClick}
              className="bg-white text-[#004AAD] hover:bg-white/95 text-xl px-10 py-7 h-auto font-bold shadow-2xl hover:shadow-white/30 transition-all duration-300 hover:scale-105"
            >
              <Calendar className="mr-3 h-6 w-6" />
              Agenda tu asesoría
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </div>

          <p className="text-white/80 text-sm pt-4">
            Sin compromiso • Respuesta en menos de 24 horas
          </p>
        </div>
      </div>
    </section>
  );
}
