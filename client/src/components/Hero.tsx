import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Sparkles, ArrowRight } from 'lucide-react';
import iphoneMockup1 from '@assets/stock_images/iphone_mockup_app_in_f76c2a08.jpg';
import iphoneMockup2 from '@assets/stock_images/iphone_mockup_app_in_0700dd30.jpg';
import techBg from '@assets/stock_images/abstract_technology__4f7c8289.jpg';

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
      
      <div 
        className="absolute inset-0 opacity-5 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${techBg})` }}
      />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-start space-y-6 md:space-y-8">
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

            <div className="space-y-3">
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0" data-testid="text-hero-subtext-en">
                {t('heroSubtextEn')}
              </p>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0" data-testid="text-hero-subtext-ar">
                {t('heroSubtextAr')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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

          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-chart-2/20 to-chart-4/20 blur-3xl opacity-50 rounded-full" />
            
            <div className="relative flex items-center justify-center gap-4">
              <div className="relative transform -rotate-6 hover:rotate-0 transition-transform duration-500 hover-elevate">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-chart-2/30 blur-xl rounded-3xl" />
                <img
                  src={iphoneMockup1}
                  alt="MyBaby App Interface"
                  className="relative h-[400px] md:h-[500px] w-auto object-contain drop-shadow-2xl rounded-3xl"
                  data-testid="img-hero-mockup-1"
                />
              </div>

              <div className="relative transform rotate-6 hover:rotate-0 transition-transform duration-500 hover-elevate hidden sm:block">
                <div className="absolute inset-0 bg-gradient-to-br from-chart-3/30 to-chart-4/30 blur-xl rounded-3xl" />
                <img
                  src={iphoneMockup2}
                  alt="MyBaby Parent Portal"
                  className="relative h-[350px] md:h-[450px] w-auto object-contain drop-shadow-2xl rounded-3xl"
                  data-testid="img-hero-mockup-2"
                />
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-chart-1/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-chart-3/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
