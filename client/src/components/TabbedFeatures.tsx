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
                                <div className="text-sm font-semibold text-foreground">
                                  {language === 'en' ? 'INV-2024-001' : 'فاتورة-2024-001'}
                                </div>
                              </div>
                              <CheckCircle className="h-5 w-5 text-green-500" />
                            </div>
                            <div className="space-y-2">
                              <div className="h-2 bg-muted rounded w-3/4" />
                              <div className="h-2 bg-muted rounded w-1/2" />
                            </div>
                            <div className="mt-3 pt-3 border-t border-border">
                              <div className="text-lg font-bold text-green-600">
                                {language === 'en' ? '$350.00' : '350.00 ر.س'}
                              </div>
                            </div>
                          </div>

                          <div className="absolute top-[35%] right-[10%] w-[65%] bg-background rounded-xl shadow-xl p-4 border-2 border-blue-500/30 animate-float-diagonal" style={{ animationDelay: '1s' }}>
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-2">
                                <Receipt className="h-5 w-5 text-chart-2" />
                                <div className="text-sm font-semibold text-foreground">
                                  {language === 'en' ? 'INV-2024-002' : 'فاتورة-2024-002'}
                                </div>
                              </div>
                              <CheckCircle className="h-5 w-5 text-blue-500" />
                            </div>
                            <div className="space-y-2">
                              <div className="h-2 bg-muted rounded w-2/3" />
                              <div className="h-2 bg-muted rounded w-1/2" />
                            </div>
                            <div className="mt-3 pt-3 border-t border-border">
                              <div className="text-lg font-bold text-blue-600">
                                {language === 'en' ? '$280.00' : '280.00 ر.س'}
                              </div>
                            </div>
                          </div>

                          <div className="absolute bottom-[15%] left-[20%] w-[60%] bg-background rounded-xl shadow-xl p-4 border-2 border-amber-500/30 animate-float-slow" style={{ animationDelay: '2s' }}>
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-2">
                                <Receipt className="h-5 w-5 text-chart-4" />
                                <div className="text-sm font-semibold text-foreground">
                                  {language === 'en' ? 'INV-2024-003' : 'فاتورة-2024-003'}
                                </div>
                              </div>
                              <AlertCircle className="h-5 w-5 text-amber-500" />
                            </div>
                            <div className="space-y-2">
                              <div className="h-2 bg-muted rounded w-3/4" />
                              <div className="h-2 bg-muted rounded w-1/2" />
                            </div>
                            <div className="mt-3 pt-3 border-t border-border">
                              <div className="text-lg font-bold text-amber-600">
                                {language === 'en' ? '$420.00' : '420.00 ر.س'}
                              </div>
                            </div>
                          </div>

                          {/* Floating coins/money icons */}
                          <DollarSign className="absolute top-[20%] right-[5%] h-8 w-8 text-green-500/30 animate-float-diagonal-reverse" style={{ animationDelay: '0.5s' }} />
                          <DollarSign className="absolute bottom-[25%] right-[15%] h-6 w-6 text-blue-500/30 animate-float" style={{ animationDelay: '1.5s' }} />
                        </div>
                      ) : key === 'communication' ? (
                        <div className="w-full h-full relative">
                          {/* Animated Message Bubbles */}
                          <div className="absolute top-[10%] left-[10%] max-w-[70%] bg-primary/10 rounded-2xl rounded-tl-none p-3 shadow-lg animate-float" style={{ animationDelay: '0s' }}>
                            <div className="flex items-center gap-2 mb-2">
                              <Users className="h-4 w-4 text-primary" />
                              <span className="text-xs font-semibold text-primary">
                                {language === 'en' ? 'Ms. Sarah' : 'المعلمة سارة'}
                              </span>
                            </div>
                            <p className="text-sm text-foreground">
                              {language === 'en' ? 'Ahmed had a great day!' : 'أحمد قضى يوم رائع!'}
                            </p>
                          </div>

                          <div className="absolute top-[35%] right-[10%] max-w-[65%] bg-chart-2/10 rounded-2xl rounded-tr-none p-3 shadow-lg animate-float-diagonal" style={{ animationDelay: '1s' }}>
                            <div className="flex items-center gap-2 mb-2">
                              <MessageSquare className="h-4 w-4 text-chart-2" />
                              <span className="text-xs font-semibold text-chart-2">
                                {language === 'en' ? 'Parent' : 'ولي الأمر'}
                              </span>
                            </div>
                            <p className="text-sm text-foreground">
                              {language === 'en' ? 'Thank you for the update!' : 'شكراً على التحديث!'}
                            </p>
                          </div>

                          <div className="absolute bottom-[15%] left-[15%] max-w-[60%] bg-chart-4/10 rounded-2xl rounded-tl-none p-3 shadow-lg animate-float-slow" style={{ animationDelay: '2s' }}>
                            <div className="flex items-center gap-2 mb-2">
                              <Shield className="h-4 w-4 text-chart-4" />
                              <span className="text-xs font-semibold text-chart-4">
                                {language === 'en' ? 'Auto-Translated' : 'ترجمة تلقائية'}
                              </span>
                            </div>
                            <p className="text-sm text-foreground">
                              {language === 'en' ? 'See you tomorrow! 👋' : 'نراكم غداً! 👋'}
                            </p>
                          </div>

                          {/* Floating message icons */}
                          <MessageSquare className="absolute top-[25%] right-[5%] h-8 w-8 text-primary/20 animate-float-diagonal-reverse" style={{ animationDelay: '0.5s' }} />
                          <MessageSquare className="absolute bottom-[30%] right-[20%] h-6 w-6 text-chart-2/20 animate-float" style={{ animationDelay: '1.5s' }} />
                        </div>
                      ) : key === 'management' ? (
                        <div className="w-full h-full relative">
                          {/* Animated Staff Cards/Schedule */}
                          <div className="absolute top-[10%] left-[12%] w-[75%] bg-background rounded-xl shadow-xl p-3 border-2 border-chart-3/30 animate-float" style={{ animationDelay: '0s' }}>
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-10 h-10 rounded-full bg-chart-3/20 flex items-center justify-center">
                                <Users className="h-5 w-5 text-chart-3" />
                              </div>
                              <div className="flex-1">
                                <div className="h-3 bg-muted rounded w-2/3 mb-1" />
                                <div className="h-2 bg-muted/60 rounded w-1/3" />
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <div className="flex-1 h-6 bg-chart-3/10 rounded flex items-center justify-center">
                                <Clock className="h-3 w-3 text-chart-3" />
                              </div>
                              <div className="flex-1 h-6 bg-green-500/10 rounded flex items-center justify-center">
                                <CheckCircle className="h-3 w-3 text-green-600" />
                              </div>
                            </div>
                          </div>

                          <div className="absolute top-[40%] right-[8%] w-[70%] bg-background rounded-xl shadow-xl p-3 border-2 border-blue-500/30 animate-float-diagonal" style={{ animationDelay: '1s' }}>
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                                <Users className="h-5 w-5 text-blue-600" />
                              </div>
                              <div className="flex-1">
                                <div className="h-3 bg-muted rounded w-1/2 mb-1" />
                                <div className="h-2 bg-muted/60 rounded w-1/4" />
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <div className="flex-1 h-6 bg-blue-500/10 rounded flex items-center justify-center">
                                <Clock className="h-3 w-3 text-blue-600" />
                              </div>
                              <div className="flex-1 h-6 bg-amber-500/10 rounded flex items-center justify-center">
                                <AlertCircle className="h-3 w-3 text-amber-600" />
                              </div>
                            </div>
                          </div>

                          <div className="absolute bottom-[12%] left-[18%] w-[65%] bg-background rounded-xl shadow-xl p-3 border-2 border-primary/30 animate-float-slow" style={{ animationDelay: '2s' }}>
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                                <Users className="h-5 w-5 text-primary" />
                              </div>
                              <div className="flex-1">
                                <div className="h-3 bg-muted rounded w-3/5 mb-1" />
                                <div className="h-2 bg-muted/60 rounded w-2/5" />
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <div className="flex-1 h-6 bg-primary/10 rounded flex items-center justify-center">
                                <TrendingUp className="h-3 w-3 text-primary" />
                              </div>
                              <div className="flex-1 h-6 bg-green-500/10 rounded flex items-center justify-center">
                                <CheckCircle className="h-3 w-3 text-green-600" />
                              </div>
                            </div>
                          </div>

                          {/* Floating staff icons */}
                          <Users className="absolute top-[22%] right-[3%] h-8 w-8 text-chart-3/20 animate-float-diagonal-reverse" style={{ animationDelay: '0.5s' }} />
                          <Clock className="absolute bottom-[28%] right-[15%] h-6 w-6 text-primary/20 animate-float" style={{ animationDelay: '1.5s' }} />
                        </div>
                      ) : null}
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
