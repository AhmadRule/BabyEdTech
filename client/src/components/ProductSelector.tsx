
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Check, Building2, TrendingUp, Users, Plus, Minus } from 'lucide-react';

interface Product {
  id: string;
  nameEn: string;
  nameAr: string;
  descEn: string;
  descAr: string;
  icon: any;
  color: string;
  gradient: string;
  features: string[];
  featuresAr: string[];
  popular?: boolean;
}

const products: Product[] = [
  {
    id: 'saas',
    nameEn: 'MyBaby SaaS',
    nameAr: 'MyBaby نظام الإدارة',
    descEn: 'Complete nursery management system for daily operations',
    descAr: 'نظام إدارة شامل للحضانات للعمليات اليومية',
    icon: Building2,
    color: 'text-primary',
    gradient: 'from-primary/10 to-primary/5',
    popular: true,
    features: [
      'Daily reports & updates',
      'Parent communication hub',
      'Attendance tracking',
      'Staff management',
      'Mobile & web access'
    ],
    featuresAr: [
      'تقارير وتحديثات يومية',
      'مركز التواصل مع أولياء الأمور',
      'تتبع الحضور',
      'إدارة الموظفين',
      'الوصول عبر الجوال والويب'
    ]
  },
  {
    id: 'mulak',
    nameEn: 'MyBaby مُـلاك',
    nameAr: 'MyBaby مُـلاك',
    descEn: 'Advanced financial ERP & analytics for kindergarten owners',
    descAr: 'نظام تخطيط موارد مالية متقدم وتحليلات لأصحاب الحضانات',
    icon: TrendingUp,
    color: 'text-[#2B885C]',
    gradient: 'from-[#2B885C]/10 to-[#2B885C]/5',
    features: [
      'Financial analytics dashboard',
      'Revenue & expense tracking',
      'Budget forecasting',
      'Multi-branch reporting',
      'Tax compliance tools'
    ],
    featuresAr: [
      'لوحة التحليلات المالية',
      'تتبع الإيرادات والمصروفات',
      'توقعات الميزانية',
      'تقارير متعددة الفروع',
      'أدوات الامتثال الضريبي'
    ]
  },
  {
    id: 'marketplace',
    nameEn: 'MyBaby Marketplace',
    nameAr: 'MyBaby سوق الحضانات',
    descEn: 'On-demand childcare marketplace connecting parents with verified providers',
    descAr: 'سوق رعاية أطفال عند الطلب يربط أولياء الأمور بمقدمي خدمات موثوقين',
    icon: Users,
    color: 'text-[#EE7248]',
    gradient: 'from-[#EE7248]/10 to-[#EE7248]/5',
    features: [
      'Browse verified providers',
      'Real-time booking',
      'Online payments',
      'Provider ratings & reviews',
      'Emergency backup care'
    ],
    featuresAr: [
      'تصفح مقدمي خدمات موثوقين',
      'حجز فوري',
      'دفع أونلاين',
      'تقييمات ومراجعات',
      'رعاية طوارئ احتياطية'
    ]
  }
];

export default function ProductSelector() {
  const { language, t } = useLanguage();
  const [cart, setCart] = useState<string[]>([]);

  const addToCart = (productId: string) => {
    if (!cart.includes(productId)) {
      setCart([...cart, productId]);
    }
  };

  const removeFromCart = (productId: string) => {
    setCart(cart.filter(id => id !== productId));
  };

  const isInCart = (productId: string) => cart.includes(productId);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#EE7248]/5 rounded-full blur-3xl animate-float-diagonal" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <ShoppingCart className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              {language === 'en' ? 'Choose Your Solutions' : 'اختر حلولك'}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {language === 'en' 
              ? '360° Childcare Ecosystem' 
              : 'نظام بيئي شامل لرعاية الأطفال'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {language === 'en'
              ? 'Select the products that fit your needs. Mix and match for a complete solution.'
              : 'اختر المنتجات التي تناسب احتياجاتك. اجمع بينها للحصول على حل متكامل.'}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {products.map((product) => {
            const Icon = product.icon;
            const inCart = isInCart(product.id);
            
            return (
              <Card
                key={product.id}
                className={`relative p-6 hover-elevate transition-all duration-300 bg-gradient-to-br ${product.gradient} border-2 ${
                  inCart ? 'border-primary shadow-xl' : 'border-transparent'
                }`}
                data-testid={`product-card-${product.id}`}
              >
                {product.popular && (
                  <Badge className="absolute -top-3 right-4 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white">
                    {language === 'en' ? 'Most Popular' : 'الأكثر شيوعاً'}
                  </Badge>
                )}

                <div className={`w-14 h-14 ${product.color.replace('text-', 'bg-')}/20 rounded-2xl flex items-center justify-center mb-4`}>
                  <Icon className={`h-7 w-7 ${product.color}`} />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">
                  {language === 'en' ? product.nameEn : product.nameAr}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {language === 'en' ? product.descEn : product.descAr}
                </p>

                <ul className="space-y-2 mb-6">
                  {(language === 'en' ? product.features : product.featuresAr).slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <Check className={`h-4 w-4 ${product.color} flex-shrink-0`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full gap-2 ${
                    inCart 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-background border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                  }`}
                  onClick={() => inCart ? removeFromCart(product.id) : addToCart(product.id)}
                  data-testid={`button-cart-${product.id}`}
                >
                  {inCart ? (
                    <>
                      <Minus className="h-4 w-4" />
                      {language === 'en' ? 'Remove' : 'إزالة'}
                    </>
                  ) : (
                    <>
                      <Plus className="h-4 w-4" />
                      {language === 'en' ? 'Add to Selection' : 'إضافة للاختيار'}
                    </>
                  )}
                </Button>
              </Card>
            );
          })}
        </div>

        {/* Cart Summary */}
        {cart.length > 0 && (
          <div className="max-w-2xl mx-auto">
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <ShoppingCart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    {language === 'en' ? 'Your Selection' : 'اختيارك'}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {cart.length} {language === 'en' ? 'product(s) selected' : 'منتج محدد'}
                  </p>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                {cart.map((productId) => {
                  const product = products.find(p => p.id === productId);
                  if (!product) return null;
                  const Icon = product.icon;
                  
                  return (
                    <div key={productId} className="flex items-center gap-3 p-3 bg-background rounded-lg">
                      <Icon className={`h-5 w-5 ${product.color}`} />
                      <span className="font-medium flex-1">
                        {language === 'en' ? product.nameEn : product.nameAr}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFromCart(productId)}
                        className="text-destructive hover:text-destructive"
                      >
                        {language === 'en' ? 'Remove' : 'إزالة'}
                      </Button>
                    </div>
                  );
                })}
              </div>

              <Button
                size="lg"
                className="w-full gap-2 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] hover:from-[#FF8C42] hover:to-[#FFAB00] text-white"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <ShoppingCart className="h-5 w-5" />
                {language === 'en' ? 'Request Demo for Selected Products' : 'طلب عرض توضيحي للمنتجات المحددة'}
              </Button>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
}
