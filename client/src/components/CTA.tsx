import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar } from 'lucide-react';

export default function CTA() {
  const { language, t } = useLanguage();

  const handleScheduleDemo = () => {
    console.log('Schedule Demo clicked');
    window.location.href = 'mailto:info@mybabyapp.net?subject=Schedule a Demo';
  };

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-chart-1 to-primary p-8 md:p-16 text-center">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-20" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground" data-testid="text-cta-title">
              {language === 'en' ? t('ctaTitle') : t('ctaTitleAr')}
            </h2>

            <Button
              size="lg"
              variant="secondary"
              className="gap-2 text-lg px-8"
              onClick={handleScheduleDemo}
              data-testid="button-schedule-demo"
            >
              <Calendar className="h-5 w-5" />
              {language === 'en' ? t('scheduleDemo') : t('scheduleDemoAr')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
