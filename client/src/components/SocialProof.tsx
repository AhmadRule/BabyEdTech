import { Star, Users, Building2, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SocialProof() {
  const { language, formatNumber } = useLanguage();

  const stats = [
    {
      icon: Star,
      value: '4.9/5',
      labelEn: 'Average Rating',
      labelAr: 'متوسط التقييم',
      gradient: 'from-chart-1/20 to-chart-1/5'
    },
    {
      icon: Users,
      value: '500+',
      labelEn: 'Happy Nurseries',
      labelAr: 'حضانة سعيدة',
      gradient: 'from-chart-2/20 to-chart-2/5'
    },
    {
      icon: Building2,
      value: '10,000+',
      labelEn: 'Active Families',
      labelAr: 'عائلة نشطة',
      gradient: 'from-chart-4/20 to-chart-4/5'
    },
    {
      icon: Clock,
      value: '20hrs',
      labelEn: 'Saved Per Month',
      labelAr: 'موفرة شهرياً',
      gradient: 'from-chart-5/20 to-chart-5/5'
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-muted/30 to-muted/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`text-center p-6 rounded-2xl bg-gradient-to-br ${stat.gradient} hover-elevate`}
                data-testid={`stat-card-${index + 1}`}
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1" data-testid={`stat-value-${index + 1}`}>
                  {formatNumber(stat.value)}
                </div>
                <div className="text-sm text-muted-foreground" data-testid={`stat-label-${index + 1}`}>
                  {language === 'en' ? stat.labelEn : stat.labelAr}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-sm font-medium text-muted-foreground">{formatNumber('5,000+')} Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
