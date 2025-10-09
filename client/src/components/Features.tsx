import { useLanguage } from '@/contexts/LanguageContext';
import { FileText, MessageCircle, Users, BarChart3, Hexagon, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function Features() {
  const { language, t } = useLanguage();

  const features = [
    {
      icon: FileText,
      titleKey: 'feature1Title',
      descKey: 'feature1Desc',
      gradient: 'from-chart-1/10 to-chart-1/5',
      iconBg: 'bg-chart-1/20',
      iconColor: 'text-chart-1'
    },
    {
      icon: MessageCircle,
      titleKey: 'feature2Title',
      descKey: 'feature2Desc',
      gradient: 'from-chart-2/10 to-chart-2/5',
      iconBg: 'bg-chart-2/20',
      iconColor: 'text-chart-2'
    },
    {
      icon: Users,
      titleKey: 'feature3Title',
      descKey: 'feature3Desc',
      gradient: 'from-chart-3/10 to-chart-3/5',
      iconBg: 'bg-chart-3/20',
      iconColor: 'text-chart-3'
    },
    {
      icon: BarChart3,
      titleKey: 'feature4Title',
      descKey: 'feature4Desc',
      gradient: 'from-chart-4/10 to-chart-4/5',
      iconBg: 'bg-chart-4/20',
      iconColor: 'text-chart-4'
    }
  ];

  return (
    <section id="features" className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background -z-10" />
      
      <div 
        className="absolute inset-0 -z-10 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--primary) / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Smooth Moving Graphics */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large floating blobs */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-chart-2/5 rounded-full blur-3xl animate-float-diagonal" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-chart-4/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        
        {/* Floating shapes */}
        <Hexagon className="absolute top-[20%] right-[15%] w-16 h-16 text-primary/15 animate-float-diagonal-reverse" style={{ animationDelay: '0.5s' }} />
        <Star className="absolute top-[40%] left-[12%] w-12 h-12 text-chart-2/15 animate-float-slow" style={{ animationDelay: '1.5s' }} />
        <Hexagon className="absolute bottom-[25%] right-[20%] w-14 h-14 text-chart-4/15 animate-float" style={{ animationDelay: '2.5s' }} />
        
        {/* Rotating decorative elements */}
        <div className="absolute top-[15%] left-[20%] w-24 h-24 border-2 border-primary/10 rounded-full animate-rotate-slow" />
        <div className="absolute bottom-[30%] right-[25%] w-20 h-20 border-2 border-chart-2/10 animate-rotate-slow" style={{ animationDelay: '8s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary">{t('poweredByTech')}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4" data-testid="text-features-title">
            {t('featuresTitle')}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className={`relative p-6 hover-elevate active-elevate-2 transition-all duration-300 bg-gradient-to-br ${feature.gradient} border-2 border-transparent hover:border-${feature.iconColor.replace('text-', 'border-')}/20 overflow-visible`}
                data-testid={`card-feature-${index + 1}`}
              >
                <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-xl" />
                
                <div className={`relative w-14 h-14 ${feature.iconBg} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                  <Icon className={`h-7 w-7 ${feature.iconColor}`} />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent" />
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2" data-testid={`text-feature-${index + 1}-title`}>
                  {t(feature.titleKey)}
                </h3>
                
                <p className="text-sm text-muted-foreground" data-testid={`text-feature-${index + 1}-desc`}>
                  {t(feature.descKey)}
                </p>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
