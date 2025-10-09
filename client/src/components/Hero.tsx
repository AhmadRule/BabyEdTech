import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Hero() {
  const { t } = useLanguage();

  const handleGetDemo = () => {
    console.log('Get Demo clicked');
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-chart-4/5 to-chart-3/5 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="text-center space-y-6 md:space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">EdTech for Saudi Nurseries</span>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight" data-testid="text-hero-title-ar">
              {t('heroTitleAr')}
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground" data-testid="text-hero-title-en">
              {t('heroTitleEn')}
            </h2>
          </div>

          <div className="space-y-3 max-w-3xl mx-auto">
            <p className="text-base md:text-lg text-muted-foreground" data-testid="text-hero-subtext-en">
              {t('heroSubtextEn')}
            </p>
            <p className="text-base md:text-lg text-muted-foreground" data-testid="text-hero-subtext-ar">
              {t('heroSubtextAr')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="gap-2"
              onClick={handleGetDemo}
              data-testid="button-get-demo"
            >
              {t('getDemo')}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={handleGetDemo}
              data-testid="button-try-free"
            >
              {t('tryFree')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
