import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { DollarSign, MessageSquare, TrendingUp, Shield, Clock, Users, Receipt, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function TabbedFeatures() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState('billing');

  const features = {
    billing: {
      icon: DollarSign,
      titleEn: 'Billing & Payments',
      titleAr: 'الفواتير والمدفوعات',
      descEn: 'Automated billing and secure online payments make it easy for families to pay on time.',
      descAr: 'الفواتير الآلية والمدفوعات الآمنة عبر الإنترنت تسهل على العائلات الدفع في الوقت المحدد.',
      features: [
        { iconComp: Clock, textEn: 'Automated recurring billing', textAr: 'فواتير متكررة تلقائية' },
        { iconComp: Shield, textEn: 'Secure payment processing', textAr: 'معالجة آمنة للمدفوعات' },
        { iconComp: TrendingUp, textEn: 'Real-time financial reports', textAr: 'تقارير مالية فورية' }
      ],
      color: 'chart-1'
    },
    communication: {
      icon: MessageSquare,
      titleEn: 'Communication Hub',
      titleAr: 'مركز التواصل',
      descEn: 'Stay connected with parents through instant messaging, photo sharing, and daily updates.',
      descAr: 'ابق على تواصل مع أولياء الأمور من خلال الرسائل الفورية ومشاركة الصور والتحديثات اليومية.',
      features: [
        { iconComp: MessageSquare, textEn: 'Instant messaging', textAr: 'رسائل فورية' },
        { iconComp: Users, textEn: 'Group announcements', textAr: 'إعلانات جماعية' },
        { iconComp: Shield, textEn: 'Translation to 130+ languages', textAr: 'ترجمة لأكثر من 130 لغة' }
      ],
      color: 'chart-2'
    },
    management: {
      icon: Users,
      titleEn: 'Staff Management',
      titleAr: 'إدارة الموظفات',
      descEn: 'Simplify staff scheduling, attendance tracking, and performance management.',
      descAr: 'بسّط جدولة الموظفات وتتبع الحضور وإدارة الأداء.',
      features: [
        { iconComp: Clock, textEn: 'Automated scheduling', textAr: 'جدولة تلقائية' },
        { iconComp: Users, textEn: 'Staff directory', textAr: 'دليل الموظفات' },
        { iconComp: TrendingUp, textEn: 'Performance tracking', textAr: 'تتبع الأداء' }
      ],
      color: 'chart-3'
    }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {language === 'en' ? 'Complete Nursery Management System' : 'نظام إدارة شامل للحضانات'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'en' 
              ? 'All the tools you need to run your nursery efficiently in one platform'
              : 'جميع الأدوات التي تحتاجها لإدارة حضانتك بكفاءة في منصة واحدة'
            }
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8" data-testid="tabs-features">
            {Object.entries(features).map(([key, feature]) => {
              const Icon = feature.icon;
              return (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="gap-2"
                  data-testid={`tab-${key}`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">
                    {language === 'en' ? feature.titleEn : feature.titleAr}
                  </span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {Object.entries(features).map(([key, feature]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <Card className={`p-8 md:p-12 bg-gradient-to-br from-${feature.color}/10 to-${feature.color}/5`}>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {language === 'en' ? feature.titleEn : feature.titleAr}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      {language === 'en' ? feature.descEn : feature.descAr}
                    </p>
                    <div className="space-y-4">
                      {feature.features.map((item, idx) => {
                        const ItemIcon = item.iconComp;
                        return (
                          <div key={idx} className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-lg bg-${feature.color}/20 flex items-center justify-center`}>
                              <ItemIcon className={`h-5 w-5 text-${feature.color}`} />
                            </div>
                            <span className="text-foreground font-medium">
                              {language === 'en' ? item.textEn : item.textAr}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="relative">
                    <div className={`aspect-square rounded-2xl bg-gradient-to-br from-${feature.color}/20 to-${feature.color}/5 p-8 flex items-center justify-center overflow-hidden`}>
                      {key === 'billing' ? (
                        <div className="w-full h-full relative">
                          {/* Animated Bills/Invoices */}
                          <div className="absolute top-[10%] left-[15%] w-[70%] bg-background rounded-xl shadow-xl p-4 border-2 border-green-500/30 animate-float" style={{ animationDelay: '0s' }}>
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-2">
                                <Receipt className="h-5 w-5 text-chart-1" />
                                <div className="text-sm font-semibold text-foreground">INV-2024-001</div>
                              </div>
                              <CheckCircle className="h-5 w-5 text-green-500" />
                            </div>
                            <div className="space-y-2">
                              <div className="h-2 bg-muted rounded w-3/4" />
                              <div className="h-2 bg-muted rounded w-1/2" />
                            </div>
                            <div className="mt-3 pt-3 border-t border-border">
                              <div className="text-lg font-bold text-green-600">$350.00</div>
                            </div>
                          </div>

                          <div className="absolute top-[35%] right-[10%] w-[65%] bg-background rounded-xl shadow-xl p-4 border-2 border-blue-500/30 animate-float-diagonal" style={{ animationDelay: '1s' }}>
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-2">
                                <Receipt className="h-5 w-5 text-chart-2" />
                                <div className="text-sm font-semibold text-foreground">INV-2024-002</div>
                              </div>
                              <CheckCircle className="h-5 w-5 text-blue-500" />
                            </div>
                            <div className="space-y-2">
                              <div className="h-2 bg-muted rounded w-2/3" />
                              <div className="h-2 bg-muted rounded w-1/2" />
                            </div>
                            <div className="mt-3 pt-3 border-t border-border">
                              <div className="text-lg font-bold text-blue-600">$280.00</div>
                            </div>
                          </div>

                          <div className="absolute bottom-[15%] left-[20%] w-[60%] bg-background rounded-xl shadow-xl p-4 border-2 border-amber-500/30 animate-float-slow" style={{ animationDelay: '2s' }}>
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-2">
                                <Receipt className="h-5 w-5 text-chart-4" />
                                <div className="text-sm font-semibold text-foreground">INV-2024-003</div>
                              </div>
                              <AlertCircle className="h-5 w-5 text-amber-500" />
                            </div>
                            <div className="space-y-2">
                              <div className="h-2 bg-muted rounded w-3/4" />
                              <div className="h-2 bg-muted rounded w-1/2" />
                            </div>
                            <div className="mt-3 pt-3 border-t border-border">
                              <div className="text-lg font-bold text-amber-600">$420.00</div>
                            </div>
                          </div>

                          {/* Floating coins/money icons */}
                          <DollarSign className="absolute top-[20%] right-[5%] h-8 w-8 text-green-500/30 animate-float-diagonal-reverse" style={{ animationDelay: '0.5s' }} />
                          <DollarSign className="absolute bottom-[25%] right-[15%] h-6 w-6 text-blue-500/30 animate-float" style={{ animationDelay: '1.5s' }} />
                        </div>
                      ) : (
                        <div className="w-full h-full bg-background rounded-xl shadow-lg p-6 flex flex-col gap-4">
                          <div className="h-8 bg-muted rounded-lg w-3/4" />
                          <div className="flex-1 bg-muted/50 rounded-lg" />
                          <div className="h-12 bg-muted rounded-lg" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
