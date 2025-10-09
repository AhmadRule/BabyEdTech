import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Sparkles, ArrowRight, Circle, Square, Triangle } from 'lucide-react';

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
      
      {/* Smooth Moving Graphics */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large floating circles */}
        <div className="absolute top-20 left-[10%] w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 right-[15%] w-80 h-80 bg-chart-2/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-40 right-[20%] w-48 h-48 bg-chart-4/10 rounded-full blur-2xl animate-float-diagonal" style={{ animationDelay: '1s' }} />
        
        {/* Small floating shapes */}
        <Circle className="absolute top-[15%] left-[5%] w-12 h-12 text-primary/20 animate-float-diagonal" style={{ animationDelay: '0.5s' }} />
        <Square className="absolute top-[25%] right-[8%] w-10 h-10 text-chart-2/20 animate-float-diagonal-reverse" style={{ animationDelay: '1.5s' }} />
        <Triangle className="absolute bottom-[30%] left-[8%] w-14 h-14 text-chart-4/20 animate-float" style={{ animationDelay: '2.5s' }} />
        <Circle className="absolute bottom-[20%] right-[10%] w-16 h-16 text-primary/20 animate-float-slow" style={{ animationDelay: '3s' }} />
        
        {/* Sliding dots */}
        <div className="absolute top-[35%] left-0 w-3 h-3 bg-primary/30 rounded-full animate-slide-horizontal" />
        <div className="absolute top-[45%] right-0 w-3 h-3 bg-chart-2/30 rounded-full animate-slide-horizontal-reverse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-[35%] left-[5%] w-2.5 h-2.5 bg-chart-4/30 rounded-full animate-slide-horizontal" style={{ animationDelay: '2s' }} />
        
        {/* Rotating shapes */}
        <div className="absolute top-[60%] right-[25%] w-20 h-20 border-2 border-primary/20 rounded-lg animate-rotate-slow" />
        <div className="absolute bottom-[40%] left-[20%] w-16 h-16 border-2 border-chart-2/20 animate-rotate-slow" style={{ animationDelay: '5s' }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 relative z-10">
        <div className="text-center space-y-6 md:space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full backdrop-blur-sm">
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
