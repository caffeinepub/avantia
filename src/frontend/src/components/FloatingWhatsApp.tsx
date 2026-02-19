import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FloatingWhatsApp() {
  const handleClick = () => {
    const message = encodeURIComponent('Hola, me gustaría obtener más información sobre sus servicios.');
    window.open(`https://wa.me/5218124070421?text=${message}`, '_blank');
  };

  return (
    <Button
      onClick={handleClick}
      size="lg"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-2xl hover:shadow-[#25D366]/50 transition-all duration-300 hover:scale-110 p-0 animate-in fade-in slide-in-from-bottom-4"
      style={{ animationDuration: '700ms' }}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
    </Button>
  );
}
