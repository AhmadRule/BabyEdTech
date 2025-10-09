import { useLanguage } from '@/contexts/LanguageContext';
import { Monitor, Smartphone, Tablet, Globe, Zap, Cloud } from 'lucide-react';

export default function PlatformShowcase() {
  const { language, formatNumber } = useLanguage();

  const platforms = [
    {
      icon: Smartphone,
      label: language === 'en' ? 'Mobile App' : 'تطبيق الجوال',
      color: 'text-primary',
      description: language === 'en' ? 'iOS & Android apps' : 'تطبيقات iOS و Android'
    },
    {
      icon: Tablet,
      label: language === 'en' ? 'Tablet' : 'التابلت',
      color: 'text-chart-2',
      description: language === 'en' ? 'Optimized for tablets' : 'محسّن للأجهزة اللوحية'
    },
    {
      icon: Monitor,
      label: language === 'en' ? 'Web Portal' : 'البوابة الإلكترونية',
      color: 'text-chart-3',
      description: language === 'en' ? 'Desktop & laptop access' : 'الوصول من الكمبيوتر المكتبي واللابتوب'
    },
    {
      icon: Globe,
      label: language === 'en' ? 'Cloud-Based' : 'سحابي',
      color: 'text-chart-4',
      description: language === 'en' ? 'Secure cloud storage' : 'تخزين سحابي آمن'
    }
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-chart-2/5 -z-10" />
      
      <div 
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.2) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, hsl(var(--chart-2) / 0.2) 0%, transparent 50%)
          `
        }}
      />
      
      {/* Smooth Moving Graphics */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating gradient orbs */}
        <div className="absolute top-20 right-[10%] w-80 h-80 bg-primary/8 rounded-full blur-3xl animate-float-diagonal" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-[15%] w-72 h-72 bg-chart-3/8 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '3s' }} />
        
        {/* Floating icons */}
        <Zap className="absolute top-[15%] left-[8%] w-16 h-16 text-primary/10 animate-float-diagonal-reverse" style={{ animationDelay: '0.8s' }} />
        <Cloud className="absolute bottom-[20%] right-[12%] w-20 h-20 text-chart-2/10 animate-float" style={{ animationDelay: '2s' }} />
        
        {/* Sliding elements */}
        <div className="absolute top-[50%] left-0 w-4 h-4 bg-primary/20 rounded-full animate-slide-horizontal" style={{ animationDelay: '1s' }} />
        <div className="absolute top-[65%] right-0 w-3 h-3 bg-chart-4/20 rounded-full animate-slide-horizontal-reverse" style={{ animationDelay: '2.5s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
            <span className="text-sm font-medium text-primary">
              {language === 'en' ? 'Multi-Platform Solution' : 'حل متعدد المنصات'}
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {language === 'en' 
              ? 'Access Anywhere, Anytime' 
              : 'الوصول من أي مكان، في أي وقت'}
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {language === 'en'
              ? 'Our cloud-based platform works seamlessly across all devices. Teachers, parents, and administrators can stay connected wherever they are.'
              : 'منصتنا السحابية تعمل بسلاسة على جميع الأجهزة. يمكن للمعلمين وأولياء الأمور والإداريين البقاء على اتصال أينما كانوا.'}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-background to-muted/20 rounded-xl p-6 border border-muted hover-elevate active-elevate-2 transition-all duration-300"
                data-testid={`platform-item-${index + 1}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative flex flex-col items-center gap-3 text-center">
                  <div className="w-14 h-14 bg-muted/50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className={`h-7 w-7 ${platform.color}`} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground mb-1">
                      {platform.label}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {platform.description}
                    </p>
                  </div>
                </div>

                <div className="absolute top-2 right-2 w-2 h-2 bg-primary/50 rounded-full animate-ping" />
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex items-center justify-center gap-4 p-4 bg-muted/30 rounded-lg border border-primary/10 max-w-md mx-auto">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-chart-2 border-2 border-background flex items-center justify-center text-white text-xs font-bold"
              >
                {i}
              </div>
            ))}
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground">
              {language === 'en' 
                ? `${formatNumber('1000+')} Nurseries Trust MyBaby` 
                : `${formatNumber('1000+')} حضانة تثق بـ MyBaby`}
            </p>
            <p className="text-xs text-muted-foreground">
              {language === 'en'
                ? 'Join the growing community'
                : 'انضم إلى المجتمع المتنامي'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
