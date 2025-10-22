
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Zap, Link2, BarChart, Shield } from 'lucide-react';

export default function IntegrationBenefits() {
  const { language } = useLanguage();

  const benefits = [
    {
      icon: Link2,
      titleEn: 'Seamless Integration',
      titleAr: 'تكامل سلس',
      descEn: 'All products work together seamlessly, sharing data in real-time',
      descAr: 'جميع المنتجات تعمل معاً بسلاسة، مع مشاركة البيانات في الوقت الفعلي',
      color: 'text-primary',
      bg: 'bg-primary/10'
    },
    {
      icon: Zap,
      titleEn: 'Increased Efficiency',
      titleAr: 'كفاءة متزايدة',
      descEn: 'Reduce administrative work by up to 70% with automated workflows',
      descAr: 'تقليل العمل الإداري بنسبة تصل إلى 70٪ مع سير العمل الآلي',
      color: 'text-[#EE7248]',
      bg: 'bg-[#EE7248]/10'
    },
    {
      icon: BarChart,
      titleEn: 'Unified Analytics',
      titleAr: 'تحليلات موحدة',
      descEn: 'Get comprehensive insights across operations, finance, and marketplace',
      descAr: 'احصل على رؤى شاملة عبر العمليات والمالية والسوق',
      color: 'text-[#2B885C]',
      bg: 'bg-[#2B885C]/10'
    },
    {
      icon: Shield,
      titleEn: 'Single Sign-On',
      titleAr: 'تسجيل دخول واحد',
      descEn: 'One login for all platforms with enterprise-grade security',
      descAr: 'تسجيل دخول واحد لجميع المنصات مع أمان على مستوى المؤسسات',
      color: 'text-chart-2',
      bg: 'bg-chart-2/10'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-chart-4/10 to-chart-3/10 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-80 h-80 bg-primary/8 rounded-full blur-3xl animate-float-diagonal" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-[#2B885C]/8 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {language === 'en' 
              ? 'Better Together' 
              : 'أفضل معاً'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'en'
              ? 'When you combine MyBaby products, you unlock powerful synergies'
              : 'عند دمج منتجات MyBaby، تحصل على تآزرات قوية'}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={idx}
                className="p-6 hover-elevate transition-all duration-300"
                data-testid={`integration-benefit-${idx + 1}`}
              >
                <div className={`w-12 h-12 ${benefit.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`h-6 w-6 ${benefit.color}`} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {language === 'en' ? benefit.titleEn : benefit.titleAr}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === 'en' ? benefit.descEn : benefit.descAr}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Visual Connection Diagram */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg className="w-full h-full max-w-4xl" viewBox="0 0 800 200">
              <defs>
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#00ADEF', stopOpacity: 0.3 }} />
                  <stop offset="50%" style={{ stopColor: '#2B885C', stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: '#EE7248', stopOpacity: 0.3 }} />
                </linearGradient>
              </defs>
              <line x1="100" y1="100" x2="700" y2="100" stroke="url(#connectionGradient)" strokeWidth="2" strokeDasharray="5,5" />
              <circle cx="100" cy="100" r="8" fill="#00ADEF" opacity="0.6" />
              <circle cx="400" cy="100" r="8" fill="#2B885C" opacity="0.6" />
              <circle cx="700" cy="100" r="8" fill="#EE7248" opacity="0.6" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
