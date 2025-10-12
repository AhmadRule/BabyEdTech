import { useQuery } from '@tanstack/react-query';
import { useLanguage } from '@/contexts/LanguageContext';
import type { ClientLogo } from '@shared/schema';

export default function ClientLogos() {
  const { language, t } = useLanguage();

  const { data: clientLogos, isLoading } = useQuery<ClientLogo[]>({
    queryKey: ['/api/client-logos'],
  });

  if (isLoading || !clientLogos || clientLogos.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2" data-testid="text-clients-title">
            {language === 'en' ? 'Trusted by Leading Nurseries' : 'موثوق به من قبل الحضانات الرائدة'}
          </h2>
          <p className="text-muted-foreground" data-testid="text-clients-subtitle">
            {language === 'en' 
              ? 'Join hundreds of nurseries across Saudi Arabia'
              : 'انضم إلى مئات الحضانات في جميع أنحاء المملكة العربية السعودية'
            }
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
          {clientLogos.map((logo) => (
            <div
              key={logo.id}
              className="flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              data-testid={`client-logo-${logo.id}`}
            >
              <img
                src={logo.logoPath}
                alt={logo.name}
                className="max-w-full max-h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
