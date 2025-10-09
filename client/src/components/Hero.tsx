import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Sparkles, ArrowRight, Circle, Square, Triangle, CheckCircle, Users, Building2, Star } from 'lucide-react';
import childCenter from '@assets/stock_images/middle_eastern_child_c7117611.jpg';
import child1 from '@assets/stock_images/middle_eastern_child_9eb3a7e2.jpg';
import child2 from '@assets/stock_images/middle_eastern_child_cc9cde88.jpg';
import mother1 from '@assets/stock_images/arab_middle_eastern__5c938089.jpg';
import mother2 from '@assets/stock_images/arab_middle_eastern__7d4ba993.jpg';
import father1 from '@assets/stock_images/arab_middle_eastern__257100f6.jpg';
import father2 from '@assets/stock_images/arab_middle_eastern__26eedc02.jpg';

export default function Hero() {
  const { t, language, formatNumber } = useLanguage();

  const handleGetDemo = () => {
    console.log('Get Demo clicked');
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-chart-4/5 to-chart-3/5 -z-10" />
      
      {/* Decorative mesh gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,173,239,0.15),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(137,174,255,0.15),transparent_50%)] -z-10" />
      
      {/* Smooth Moving Graphics */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large floating circles */}
        <div className="absolute top-20 left-[10%] w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 right-[15%] w-80 h-80 bg-chart-2/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-40 right-[20%] w-48 h-48 bg-chart-4/10 rounded-full blur-2xl animate-float-diagonal" style={{ animationDelay: '1s' }} />
        
        {/* Happy Middle Eastern People - Circled Images */}
        <div className="absolute top-[15%] left-[5%] w-20 h-20 rounded-full overflow-hidden border-4 border-primary/30 shadow-xl animate-float-diagonal" style={{ animationDelay: '0.5s' }}>
          <img src={child1} alt="Happy children" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-[25%] right-[8%] w-24 h-24 rounded-full overflow-hidden border-4 border-chart-2/30 shadow-xl animate-float-diagonal-reverse" style={{ animationDelay: '1.5s' }}>
          <img src={mother1} alt="Happy mother" className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-[30%] left-[8%] w-20 h-20 rounded-full overflow-hidden border-4 border-chart-4/30 shadow-xl animate-float" style={{ animationDelay: '2.5s' }}>
          <img src={father1} alt="Happy father" className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-[20%] right-[10%] w-24 h-24 rounded-full overflow-hidden border-4 border-chart-3/30 shadow-xl animate-float-slow" style={{ animationDelay: '3s' }}>
          <img src={child2} alt="Happy children" className="w-full h-full object-cover" />
        </div>
        
        {/* Small floating shapes */}
        <Square className="absolute top-[40%] right-[15%] w-10 h-10 text-chart-2/15 animate-float-diagonal-reverse" style={{ animationDelay: '4s' }} />
        <Triangle className="absolute bottom-[45%] left-[18%] w-14 h-14 text-chart-4/15 animate-float" style={{ animationDelay: '5s' }} />
        
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
            <span className="text-sm font-medium text-primary">{t('edtechBadge')}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight max-w-4xl mx-auto" data-testid="text-hero-title">
            {t('heroTitle')}
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-hero-subtext">
            {t('heroSubtext')}
          </p>

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

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto mt-12">
            {/* Nurseries stat */}
            <div className="group relative bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border hover-elevate transition-all">
              <div className="absolute -top-3 -right-3 w-16 h-16 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-colors" />
              <Building2 className="h-8 w-8 text-primary mb-3" />
              <div className="text-3xl font-bold text-foreground mb-1" data-testid="stat-nurseries">
                {formatNumber('500+')}
              </div>
              <div className="text-sm text-muted-foreground">
                {t('nurseries')}
              </div>
            </div>

            {/* Parents stat */}
            <div className="group relative bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border hover-elevate transition-all">
              <div className="absolute -top-3 -right-3 w-16 h-16 bg-chart-2/10 rounded-full blur-xl group-hover:bg-chart-2/20 transition-colors" />
              <Users className="h-8 w-8 text-chart-2 mb-3" />
              <div className="text-3xl font-bold text-foreground mb-1" data-testid="stat-parents">
                {formatNumber('10,000+')}
              </div>
              <div className="text-sm text-muted-foreground">
                {t('happyParents')}
              </div>
            </div>

            {/* Rating stat */}
            <div className="group relative bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border hover-elevate transition-all">
              <div className="absolute -top-3 -right-3 w-16 h-16 bg-chart-4/10 rounded-full blur-xl group-hover:bg-chart-4/20 transition-colors" />
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <div className="text-3xl font-bold text-foreground mb-1" data-testid="stat-rating">
                {formatNumber('4.9')}
              </div>
              <div className="text-sm text-muted-foreground">
                {t('appStoreRating')}
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-8 max-w-3xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>{t('noCreditCard')}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>{t('freeTrial')}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>{t('support247')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
