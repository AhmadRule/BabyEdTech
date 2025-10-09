import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import avatar1 from '@assets/stock_images/professional_woman_a_f65f28c8.jpg';
import avatar2 from '@assets/stock_images/professional_man_ava_ac935556.jpg';
import avatar3 from '@assets/stock_images/professional_woman_a_1ec00f92.jpg';
import avatar4 from '@assets/stock_images/professional_woman_a_80b8a564.jpg';
import avatar5 from '@assets/stock_images/professional_man_ava_263e7d82.jpg';

export default function Testimonials() {
  const { language, t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "MyBaby has transformed how we communicate with parents. The daily reports feature saves us hours every week!",
      quoteAr: "غيّر تطبيق MyBaby طريقة تواصلنا مع أولياء الأمور. ميزة التقارير اليومية توفر لنا ساعات كل أسبوع!",
      name: "Sarah Al-Ahmad",
      nameAr: "سارة الأحمد",
      role: "Nursery Director",
      roleAr: "مديرة حضانة",
      avatar: avatar1
    },
    {
      quote: "As a parent, I love being able to see what my child is doing throughout the day. It gives me peace of mind.",
      quoteAr: "كأم، أحب أن أتمكن من رؤية ما يفعله طفلي طوال اليوم. هذا يمنحني راحة البال.",
      name: "Mohammed Al-Otaibi",
      nameAr: "محمد العتيبي",
      role: "Parent",
      roleAr: "ولي أمر",
      avatar: avatar2
    },
    {
      quote: "The analytics dashboard helps us make better decisions about our nursery operations. Highly recommended!",
      quoteAr: "لوحة التحليلات تساعدنا في اتخاذ قرارات أفضل بشأن عمليات الحضانة. أنصح به بشدة!",
      name: "Fatima Al-Rashid",
      nameAr: "فاطمة الراشد",
      role: "Educational Supervisor",
      roleAr: "مشرفة تعليمية",
      avatar: avatar3
    },
    {
      quote: "MyBaby made our transition to digital management seamless. The support team is amazing!",
      quoteAr: "جعل MyBaby انتقالنا إلى الإدارة الرقمية سلساً للغاية. فريق الدعم رائع!",
      name: "Noura Al-Dosari",
      nameAr: "نورة الدوسري",
      role: "Nursery Owner",
      roleAr: "مالكة حضانة",
      avatar: avatar4
    },
    {
      quote: "The teacher dashboard is intuitive and easy to use. Our entire team adapted to it quickly.",
      quoteAr: "لوحة المعلمات سهلة الاستخدام وبديهية. تكيف فريقنا بالكامل معها بسرعة.",
      name: "Ahmed Al-Mutairi",
      nameAr: "أحمد المطيري",
      role: "Head Teacher",
      roleAr: "معلم رئيسي",
      avatar: avatar5
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length]
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-chart-4/10 to-chart-3/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4" data-testid="text-testimonials-title">
            {language === 'en' ? t('testimonialsTitle') : t('testimonialsTitleAr')}
          </h2>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {visibleTestimonials.map((testimonial, idx) => (
              <Card
                key={currentIndex + idx}
                className="p-6 md:p-8 hover-elevate"
                data-testid={`card-testimonial-${idx + 1}`}
              >
                <Quote className="h-8 w-8 text-primary/40 mb-4" />
                
                <p className="text-base md:text-lg text-foreground mb-6 leading-relaxed" data-testid={`text-testimonial-${idx + 1}-quote`}>
                  {language === 'en' ? testimonial.quote : testimonial.quoteAr}
                </p>

                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground" data-testid={`text-testimonial-${idx + 1}-name`}>
                      {language === 'en' ? testimonial.name : testimonial.nameAr}
                    </p>
                    <p className="text-sm text-muted-foreground" data-testid={`text-testimonial-${idx + 1}-role`}>
                      {language === 'en' ? testimonial.role : testimonial.roleAr}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              data-testid="button-testimonial-prev"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentIndex ? 'bg-primary w-8' : 'bg-muted'
                  }`}
                  data-testid={`button-testimonial-dot-${idx + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              data-testid="button-testimonial-next"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
