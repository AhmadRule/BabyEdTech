
import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Building2, TrendingUp, Users, MousePointer2 } from 'lucide-react';

export default function ProductDemo() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState('saas');

  const products = [
    {
      id: 'saas',
      nameEn: 'MyBaby SaaS',
      nameAr: 'MyBaby نظام الإدارة',
      icon: Building2,
      color: '#00ADEF'
    },
    {
      id: 'mulak',
      nameEn: 'MyBaby مُـلاك',
      nameAr: 'MyBaby مُـلاك',
      icon: TrendingUp,
      color: '#2B885C'
    },
    {
      id: 'marketplace',
      nameEn: 'MyBaby Marketplace',
      nameAr: 'MyBaby سوق الحضانات',
      icon: Users,
      color: '#EE7248'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#EE7248]/5 rounded-full blur-3xl animate-float-diagonal" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <MousePointer2 className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">
              {language === 'en' ? 'See It In Action' : 'شاهده أثناء العمل'}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {language === 'en' 
              ? 'Experience The Platform' 
              : 'اختبر المنصة'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {language === 'en'
              ? 'Watch how each product streamlines workflows and delivers real results'
              : 'شاهد كيف يبسط كل منتج سير العمل ويحقق نتائج حقيقية'}
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <TabsTrigger
                  key={product.id}
                  value={product.id}
                  className="flex items-center gap-2"
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">
                    {language === 'en' ? product.nameEn : product.nameAr}
                  </span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          <TabsContent value="saas">
            <SaaSDemo color="#00ADEF" language={language} />
          </TabsContent>

          <TabsContent value="mulak">
            <MulakDemo color="#2B885C" language={language} />
          </TabsContent>

          <TabsContent value="marketplace">
            <MarketplaceDemo color="#EE7248" language={language} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

// MyBaby SaaS Demo
function SaaSDemo({ color, language }: { color: string; language: string }) {
  return (
    <div className="relative max-w-5xl mx-auto">
      <Card className="p-8 bg-gradient-to-br from-background to-muted/30 border-2 overflow-hidden">
        {/* Animated Cursor */}
        <div className="absolute top-12 left-12 w-6 h-6 z-50 animate-[cursor-move-saas_8s_ease-in-out_infinite]">
          <MousePointer2 className="h-6 w-6 text-primary drop-shadow-lg" fill={color} />
        </div>

        {/* Screen 1: Dashboard */}
        <div className="relative h-[500px] bg-white rounded-lg shadow-xl overflow-hidden animate-[fade-in_1s_ease-out]">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-primary/80 p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Building2 className="h-6 w-6 text-white" />
              <span className="text-white font-bold">MyBaby Dashboard</span>
            </div>
            <div className="flex gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full" />
            </div>
          </div>

          {/* Stats Cards */}
          <div className="p-6 grid grid-cols-4 gap-4">
            {[
              { label: language === 'en' ? 'Attendance' : 'الحضور', value: '24', delay: '1s' },
              { label: language === 'en' ? 'Activities' : 'الأنشطة', value: '8', delay: '1.5s' },
              { label: language === 'en' ? 'Meals' : 'الوجبات', value: '12', delay: '2s' },
              { label: language === 'en' ? 'Reports' : 'التقارير', value: '6', delay: '2.5s' }
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-muted to-muted/50 p-4 rounded-lg animate-[slide-up_0.5s_ease-out_forwards] opacity-0"
                style={{ animationDelay: stat.delay }}
              >
                <div className="text-3xl font-bold text-foreground animate-[count-up_1s_ease-out]">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Daily Report Form - appears at 3s */}
          <div
            className="absolute top-32 left-1/2 -translate-x-1/2 w-96 bg-white rounded-lg shadow-2xl p-6 border-2 border-primary/20 animate-[modal-appear_0.5s_ease-out_3s_forwards] opacity-0"
          >
            <h3 className="font-bold mb-4 text-foreground">
              {language === 'en' ? 'Daily Report' : 'التقرير اليومي'}
            </h3>
            <div className="space-y-3">
              <div className="h-8 bg-muted rounded animate-[fill-bar_0.5s_ease-out_3.5s_forwards] w-0" />
              <div className="h-8 bg-muted rounded animate-[fill-bar_0.5s_ease-out_4s_forwards] w-0" />
              <div className="h-8 bg-muted rounded animate-[fill-bar_0.5s_ease-out_4.5s_forwards] w-0" />
            </div>
            <div
              className="mt-4 h-10 bg-primary rounded flex items-center justify-center text-white font-medium animate-[pulse_0.5s_ease-out_5s]"
            >
              {language === 'en' ? 'Send to Parents' : 'إرسال لأولياء الأمور'}
            </div>
          </div>

          {/* Notification sent - appears at 5.5s */}
          <div
            className="absolute bottom-6 right-6 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg animate-[notification-slide_0.5s_ease-out_5.5s_forwards] translate-x-full"
          >
            ✓ {language === 'en' ? 'Notification sent!' : 'تم إرسال الإشعار!'}
          </div>
        </div>
      </Card>
    </div>
  );
}

// MyBaby مُـلاك Demo
function MulakDemo({ color, language }: { color: string; language: string }) {
  return (
    <div className="relative max-w-5xl mx-auto">
      <Card className="p-8 bg-gradient-to-br from-background to-muted/30 border-2 overflow-hidden">
        {/* Animated Cursor */}
        <div className="absolute top-12 left-12 w-6 h-6 z-50 animate-[cursor-move-mulak_8s_ease-in-out_infinite]">
          <MousePointer2 className="h-6 w-6 text-[#2B885C] drop-shadow-lg" fill={color} />
        </div>

        <div className="relative h-[500px] bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#2B885C] to-[#2B885C]/80 p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-white" />
              <span className="text-white font-bold">MyBaby مُـلاك</span>
            </div>
          </div>

          {/* Financial Dashboard */}
          <div className="p-6">
            <div className="grid grid-cols-2 gap-6 mb-6">
              {/* Revenue Chart */}
              <div className="animate-[slide-up_0.5s_ease-out_1s_forwards] opacity-0">
                <h3 className="font-bold mb-3 text-sm text-muted-foreground">
                  {language === 'en' ? 'Monthly Revenue' : 'الإيرادات الشهرية'}
                </h3>
                <div className="flex items-end gap-2 h-32">
                  {[60, 75, 85, 70, 95, 88].map((height, idx) => (
                    <div
                      key={idx}
                      className="flex-1 bg-gradient-to-t from-[#2B885C] to-[#2B885C]/60 rounded-t animate-[grow-bar_0.5s_ease-out_forwards] h-0"
                      style={{
                        animationDelay: `${1.5 + idx * 0.2}s`,
                        maxHeight: `${height}%`
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Budget Tracker */}
              <div className="animate-[slide-up_0.5s_ease-out_1.5s_forwards] opacity-0">
                <h3 className="font-bold mb-3 text-sm text-muted-foreground">
                  {language === 'en' ? 'Budget Usage' : 'استخدام الميزانية'}
                </h3>
                <div className="space-y-3">
                  {[
                    { label: language === 'en' ? 'Salaries' : 'الرواتب', value: 85 },
                    { label: language === 'en' ? 'Operations' : 'العمليات', value: 65 },
                    { label: language === 'en' ? 'Marketing' : 'التسويق', value: 40 }
                  ].map((item, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-xs mb-1">
                        <span>{item.label}</span>
                        <span className="font-bold">{item.value}%</span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#2B885C] to-[#2B885C]/60 animate-[fill-progress_1s_ease-out_forwards] w-0"
                          style={{ 
                            animationDelay: `${2 + idx * 0.3}s`,
                            maxWidth: `${item.value}%`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Multi-branch Report */}
            <div
              className="bg-gradient-to-br from-muted to-muted/50 p-4 rounded-lg animate-[slide-up_0.5s_ease-out_4s_forwards] opacity-0"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-sm">
                  {language === 'en' ? 'Branch Performance' : 'أداء الفروع'}
                </h3>
                <div className="text-xs text-muted-foreground">3 {language === 'en' ? 'Branches' : 'فروع'}</div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {['Branch A', 'Branch B', 'Branch C'].map((branch, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-3 rounded text-center animate-[card-flip_0.5s_ease-out_forwards]"
                    style={{ animationDelay: `${4.5 + idx * 0.2}s` }}
                  >
                    <div className="text-2xl font-bold text-[#2B885C]">
                      {idx === 0 ? '98%' : idx === 1 ? '95%' : '92%'}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">{branch}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Export button click */}
            <div
              className="absolute bottom-6 right-6 animate-[pulse_0.5s_ease-out_6s]"
            >
              <div className="bg-[#2B885C] text-white px-6 py-3 rounded-lg font-medium shadow-lg">
                {language === 'en' ? 'Export Report' : 'تصدير التقرير'}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

// MyBaby Marketplace Demo
function MarketplaceDemo({ color, language }: { color: string; language: string }) {
  return (
    <div className="relative max-w-5xl mx-auto">
      <Card className="p-8 bg-gradient-to-br from-background to-muted/30 border-2 overflow-hidden">
        {/* Animated Cursor */}
        <div className="absolute top-12 left-12 w-6 h-6 z-50 animate-[cursor-move-marketplace_8s_ease-in-out_infinite]">
          <MousePointer2 className="h-6 w-6 text-[#EE7248] drop-shadow-lg" fill={color} />
        </div>

        <div className="relative h-[500px] bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#EE7248] to-[#EE7248]/80 p-4">
            <div className="flex items-center gap-2">
              <Users className="h-6 w-6 text-white" />
              <span className="text-white font-bold">MyBaby Marketplace</span>
            </div>
          </div>

          {/* Provider Cards - scrolling */}
          <div className="p-6">
            <h3 className="font-bold mb-4">
              {language === 'en' ? 'Verified Providers Near You' : 'مقدمو خدمات موثوقون بالقرب منك'}
            </h3>
            <div className="grid grid-cols-3 gap-4 animate-[scroll-cards_2s_ease-out_1s_forwards]">
              {[
                { name: 'Al-Noor Nursery', rating: 4.9, slots: 5 },
                { name: 'Little Stars', rating: 4.8, slots: 3 },
                { name: 'Happy Kids', rating: 4.7, slots: 8 }
              ].map((provider, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-muted to-muted/50 p-4 rounded-lg animate-[card-appear_0.5s_ease-out_forwards] opacity-0"
                  style={{ animationDelay: `${1 + idx * 0.3}s` }}
                >
                  <div className="w-full h-24 bg-gradient-to-br from-[#EE7248]/20 to-[#EE7248]/10 rounded mb-3" />
                  <h4 className="font-bold text-sm mb-2">{provider.name}</h4>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-yellow-500">★</span>
                    <span className="font-bold">{provider.rating}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">{provider.slots} {language === 'en' ? 'slots' : 'أماكن'}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Provider Details Modal */}
            <div
              className="absolute top-28 left-1/2 -translate-x-1/2 w-[450px] bg-white rounded-lg shadow-2xl p-6 border-2 border-[#EE7248]/20 animate-[modal-appear_0.5s_ease-out_3s_forwards] opacity-0"
            >
              <h3 className="font-bold text-lg mb-4">Al-Noor Nursery</h3>
              
              {/* Calendar */}
              <div className="mb-4">
                <div className="text-sm font-medium mb-2">
                  {language === 'en' ? 'Select Date' : 'اختر التاريخ'}
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {Array.from({ length: 7 }).map((_, idx) => (
                    <div
                      key={idx}
                      className={`aspect-square flex items-center justify-center rounded text-sm ${
                        idx === 3 ? 'bg-[#EE7248] text-white animate-[select-date_0.3s_ease-out_4s]' : 'bg-muted'
                      }`}
                    >
                      {idx + 15}
                    </div>
                  ))}
                </div>
              </div>

              {/* Booking confirmation */}
              <div
                className="bg-gradient-to-r from-[#EE7248] to-[#EE7248]/80 text-white p-4 rounded-lg animate-[pulse_0.5s_ease-out_5s]"
              >
                <div className="font-bold mb-2">
                  {language === 'en' ? 'Confirm Booking' : 'تأكيد الحجز'}
                </div>
                <div className="text-sm opacity-90">
                  {language === 'en' ? 'Oct 18, 2025 • 8:00 AM - 4:00 PM' : '18 أكتوبر 2025 • 8:00 ص - 4:00 م'}
                </div>
              </div>
            </div>

            {/* Success checkmark */}
            <div
              className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg animate-[notification-slide_0.5s_ease-out_6s_forwards] translate-y-full flex items-center gap-2"
            >
              <span className="text-2xl">✓</span>
              <span className="font-bold">
                {language === 'en' ? 'Booking Confirmed!' : 'تم تأكيد الحجز!'}
              </span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
