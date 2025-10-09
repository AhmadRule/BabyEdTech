import { useLanguage } from '@/contexts/LanguageContext';
import { FileText, MessageCircle, Users, BarChart3 } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function Features() {
  const { language, t } = useLanguage();

  const features = [
    {
      icon: FileText,
      titleKey: 'feature1Title',
      titleArKey: 'feature1TitleAr',
      descKey: 'feature1Desc',
      gradient: 'from-chart-1/10 to-chart-1/5',
      iconBg: 'bg-chart-1/20',
      iconColor: 'text-chart-1'
    },
    {
      icon: MessageCircle,
      titleKey: 'feature2Title',
      titleArKey: 'feature2TitleAr',
      descKey: 'feature2Desc',
      gradient: 'from-chart-2/10 to-chart-2/5',
      iconBg: 'bg-chart-2/20',
      iconColor: 'text-chart-2'
    },
    {
      icon: Users,
      titleKey: 'feature3Title',
      titleArKey: 'feature3TitleAr',
      descKey: 'feature3Desc',
      gradient: 'from-chart-3/10 to-chart-3/5',
      iconBg: 'bg-chart-3/20',
      iconColor: 'text-chart-3'
    },
    {
      icon: BarChart3,
      titleKey: 'feature4Title',
      titleArKey: 'feature4TitleAr',
      descKey: 'feature4Desc',
      gradient: 'from-chart-4/10 to-chart-4/5',
      iconBg: 'bg-chart-4/20',
      iconColor: 'text-chart-4'
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4" data-testid="text-features-title">
            {language === 'en' ? t('featuresTitle') : t('featuresTitleAr')}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className={`p-6 hover-elevate active-elevate-2 transition-all duration-300 bg-gradient-to-br ${feature.gradient}`}
                data-testid={`card-feature-${index + 1}`}
              >
                <div className={`w-14 h-14 ${feature.iconBg} rounded-2xl flex items-center justify-center mb-4`}>
                  <Icon className={`h-7 w-7 ${feature.iconColor}`} />
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2" data-testid={`text-feature-${index + 1}-title`}>
                  {t(language === 'en' ? feature.titleKey : feature.titleArKey)}
                </h3>
                
                <p className="text-sm text-muted-foreground" data-testid={`text-feature-${index + 1}-desc`}>
                  {t(feature.descKey)}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
