import { useLanguage } from '@/contexts/LanguageContext';
import { Monitor, Smartphone, Tablet, Globe } from 'lucide-react';
import tabletMockup from '@assets/stock_images/modern_tablet_device_eb1cfaac.jpg';

export default function PlatformShowcase() {
  const { language, t } = useLanguage();

  const platforms = [
    {
      icon: Smartphone,
      label: language === 'en' ? 'Mobile App' : 'تطبيق الجوال',
      color: 'text-primary'
    },
    {
      icon: Tablet,
      label: language === 'en' ? 'Tablet' : 'التابلت',
      color: 'text-chart-2'
    },
    {
      icon: Monitor,
      label: language === 'en' ? 'Web Portal' : 'البوابة الإلكترونية',
      color: 'text-chart-3'
    },
    {
      icon: Globe,
      label: language === 'en' ? 'Cloud-Based' : 'سحابي',
      color: 'text-chart-4'
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

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-chart-2/20 blur-3xl rounded-full" />
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-chart-2/20 to-chart-3/20 rounded-2xl blur-2xl" />
              <div className="relative bg-gradient-to-br from-background/80 to-muted/40 backdrop-blur-sm rounded-2xl p-4 border border-primary/10">
                <img
                  src={tabletMockup}
                  alt="MyBaby Platform Dashboard"
                  className="w-full h-auto rounded-lg shadow-2xl"
                  data-testid="img-platform-showcase"
                />
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-chart-2/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }} />
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                </div>
                <span className="text-sm font-medium text-primary">
                  {language === 'en' ? 'Multi-Platform Solution' : 'حل متعدد المنصات'}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                {language === 'en' 
                  ? 'Access Anywhere, Anytime' 
                  : 'الوصول من أي مكان، في أي وقت'}
              </h2>
              
              <p className="text-lg text-muted-foreground">
                {language === 'en'
                  ? 'Our cloud-based platform works seamlessly across all devices. Teachers, parents, and administrators can stay connected wherever they are.'
                  : 'منصتنا السحابية تعمل بسلاسة على جميع الأجهزة. يمكن للمعلمين وأولياء الأمور والإداريين البقاء على اتصال أينما كانوا.'}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
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
                      <div className="w-12 h-12 bg-muted/50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className={`h-6 w-6 ${platform.color}`} />
                      </div>
                      <span className="text-sm font-medium text-foreground">
                        {platform.label}
                      </span>
                    </div>

                    <div className="absolute top-2 right-2 w-2 h-2 bg-primary/50 rounded-full animate-ping" />
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg border border-primary/10">
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
                    ? '1000+ Nurseries Trust MyBaby' 
                    : '1000+ حضانة تثق بـ MyBaby'}
                </p>
                <p className="text-xs text-muted-foreground">
                  {language === 'en'
                    ? 'Join the growing community'
                    : 'انضم إلى المجتمع المتنامي'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
