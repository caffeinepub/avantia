import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'avantia-app';

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Avantia</h3>
            <p className="text-gray-400">Agencia de Marketing Digital</p>
            <p className="text-gray-400">Monterrey, Nuevo León, México</p>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-400 text-sm flex items-center justify-center gap-2 flex-wrap">
              © {currentYear} Avantia. Todos los derechos reservados.
            </p>
            <p className="text-gray-500 text-sm mt-3 flex items-center justify-center gap-2 flex-wrap">
              Built with <Heart className="h-4 w-4 text-red-500 fill-red-500 inline" /> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#004AAD] hover:text-[#0066DD] transition-colors underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
