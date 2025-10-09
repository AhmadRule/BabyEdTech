import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar, Sparkle, Rocket } from 'lucide-react';

export default function CTA() {
  const { language, t } = useLanguage();

  const handleScheduleDemo = () => {
    console.log('Schedule Demo clicked');
    window.location.href = 'mailto:info@mybabyapp.net?subject=Schedule a Demo';
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-chart-2/5 -z-10" />
      
      <div 
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(45deg, hsl(var(--primary) / 0.1) 25%, transparent 25%),
            linear-gradient(-45deg, hsl(var(--primary) / 0.1) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, hsl(var(--primary) / 0.1) 75%),
            linear-gradient(-45deg, transparent 75%, hsl(var(--primary) / 0.1) 75%)
          `,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px'
        }}
      />

      {/* Smooth Moving Graphics */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large floating orbs */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-chart-2/10 rounded-full blur-3xl animate-float-diagonal" style={{ animationDelay: '1.5s' }} />
        
        {/* Floating icons */}
        <Sparkle className="absolute top-[20%] right-[15%] w-14 h-14 text-primary/15 animate-float-diagonal-reverse" style={{ animationDelay: '0.7s' }} />
        <Rocket className="absolute bottom-[25%] left-[12%] w-16 h-16 text-chart-2/15 animate-float" style={{ animationDelay: '2s' }} />
        
        {/* Sliding dots */}
        <div className="absolute top-[40%] left-0 w-3 h-3 bg-primary/25 rounded-full animate-slide-horizontal" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-[35%] right-0 w-3 h-3 bg-chart-2/25 rounded-full animate-slide-horizontal-reverse" style={{ animationDelay: '1.8s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-chart-1 to-primary p-8 md:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-20" />
          
          <div className="absolute top-4 right-4 w-2 h-2 bg-white/40 rounded-full animate-ping" />
          <div className="absolute top-8 left-8 w-1.5 h-1.5 bg-white/30 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-6 right-12 w-2 h-2 bg-white/40 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground" data-testid="text-cta-title">
              {t('ctaTitle')}
            </h2>

            <Button
              size="lg"
              variant="secondary"
              className="gap-2 text-lg px-8 shadow-xl hover:shadow-2xl transition-all"
              onClick={handleScheduleDemo}
              data-testid="button-schedule-demo"
            >
              <Calendar className="h-5 w-5" />
              {t('scheduleDemo')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
