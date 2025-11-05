import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import ProductSelector from '@/components/ProductSelector';
import ProductDemo from '@/components/ProductDemo';
import Features from '@/components/Features';
import PlatformShowcase from '@/components/PlatformShowcase';
import TabbedFeatures from '@/components/TabbedFeatures';
import IntegrationBenefits from '@/components/IntegrationBenefits';
import Testimonials from '@/components/Testimonials';
import ClientLogos from '@/components/ClientLogos';
import CTA from '@/components/CTA';
import StakeholderValue from '@/components/StakeholderValue';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import AIChatbot from '@/components/AIChatbot';
import { ShoppingCart, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const { language } = useLanguage();
  const [cartItems, setCartItems] = useState<string[]>([]);
  const [showCart, setShowCart] = useState(false);

  // Listen for cart updates from ProductSelector
  useEffect(() => {
    const handleStorageChange = () => {
      const storedCart = localStorage.getItem('mybaby-cart');
      if (storedCart) {
        setCartItems(JSON.parse(storedCart));
      }
    };

    window.addEventListener('storage', handleStorageChange);
    handleStorageChange();

    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const productNames: Record<string, { en: string; ar: string }> = {
    saas: { en: 'MyBaby SaaS', ar: 'MyBaby نظام الإدارة' },
    mulak: { en: 'MyBaby مُـلاك', ar: 'MyBaby مُـلاك' },
    marketplace: { en: 'MyBaby Marketplace', ar: 'MyBaby سوق الحضانات' }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <SocialProof />
      <ProductSelector />
      <ProductDemo />
      <IntegrationBenefits />
      <Features />
      <PlatformShowcase />
      <TabbedFeatures />
      <Testimonials />
      <ClientLogos />
      <CTA />
      <StakeholderValue />
      <ContactForm selectedProducts={cartItems} />
      <Footer />

      {/* Floating Cart Button */}
      {cartItems.length > 0 && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            size="lg"
            className="rounded-full h-14 w-14 p-0 shadow-2xl bg-gradient-to-r from-[#FF6B35] to-[#F7931E] hover:from-[#FF8C42] hover:to-[#FFAB00] relative"
            onClick={() => setShowCart(!showCart)}
            data-testid="button-floating-cart"
          >
            <ShoppingCart className="h-6 w-6" />
            <span className="absolute -top-2 -right-2 bg-white text-primary rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shadow-lg">
              {cartItems.length}
            </span>
          </Button>

          {/* Cart Popup */}
          {showCart && (
            <div className="absolute bottom-16 right-0 w-80 bg-background border-2 border-primary/20 rounded-2xl shadow-2xl p-4 animate-in slide-in-from-bottom-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg">
                  {language === 'en' ? 'Your Selection' : 'اختيارك'}
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowCart(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-2 mb-4">
                {cartItems.map((item) => (
                  <div key={item} className="p-2 bg-muted rounded-lg text-sm">
                    {language === 'en' ? productNames[item]?.en : productNames[item]?.ar}
                  </div>
                ))}
              </div>

              <Button
                className="w-full bg-primary"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                  setShowCart(false);
                }}
              >
                {language === 'en' ? 'Request Demo' : 'طلب عرض توضيحي'}
              </Button>
            </div>
          )}
        </div>
      )}

      {/* AI Chatbot */}
      {/* <AIChatbot /> */}
    </div>
  );
}