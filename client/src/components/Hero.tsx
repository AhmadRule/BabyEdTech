import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Sparkles, ArrowRight, CircuitBoard } from 'lucide-react';

export default function Hero() {
  const { t } = useLanguage();

  const handleGetDemo = () => {
    console.log('Get Demo clicked');
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" style={{ background: '#0183F1' }}>
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="absolute top-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-2 h-2 bg-white/40 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-[20%] right-[10%] w-1.5 h-1.5 bg-white/30 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-[30%] left-[15%] w-2 h-2 bg-white/40 rounded-full animate-ping" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-[15%] right-[20%] w-1.5 h-1.5 bg-white/30 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
        
        <CircuitBoard className="absolute top-[15%] right-[25%] w-12 h-12 text-white/10 animate-pulse" style={{ animationDelay: '0.3s' }} />
        <CircuitBoard className="absolute bottom-[25%] left-[20%] w-16 h-16 text-white/10 animate-pulse" style={{ animationDelay: '1.2s' }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <Sparkles className="h-5 w-5 text-white" />
            <span className="text-sm md:text-base font-medium text-white">EdTech for Saudi Nurseries</span>
          </div>

          <div className="space-y-2 px-4 py-6 bg-white/10 backdrop-blur-md rounded-3xl border-2 border-white/30 shadow-2xl max-w-4xl" data-testid="badge-made-in-saudi">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {t('madeInSaudiEn')}
            </div>
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white/90 leading-tight">
              {t('madeInSaudiAr')}
            </div>
          </div>
          
          <div className="space-y-6 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight" data-testid="text-hero-title-ar">
              {t('heroTitleAr')}
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white/90" data-testid="text-hero-title-en">
              {t('heroTitleEn')}
            </h2>
          </div>

          <div className="space-y-4 max-w-3xl">
            <p className="text-base md:text-lg text-white/80" data-testid="text-hero-subtext-en">
              {t('heroSubtextEn')}
            </p>
            <p className="text-base md:text-lg text-white/80" data-testid="text-hero-subtext-ar">
              {t('heroSubtextAr')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="gap-2 bg-white text-[#0183F1] hover:bg-white/90 font-semibold shadow-xl"
              onClick={handleGetDemo}
              data-testid="button-get-demo"
            >
              {t('getDemo')}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="gap-2 bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold"
              onClick={handleGetDemo}
              data-testid="button-try-free"
            >
              {t('tryFree')}
            </Button>
          </div>

          <div className="flex items-center gap-6 flex-wrap justify-center mt-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-white/90">Cloud-Based</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              <span className="text-sm text-white/90">Real-Time Sync</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              <span className="text-sm text-white/90">Secure & Private</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
