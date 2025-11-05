
import { useLanguage } from '@/contexts/LanguageContext';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  const { t } = useLanguage();

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex items-center gap-2">
        <img 
          src="/attached_assets/IMG_9791_1762342317626.jpeg" 
          alt="MyBaby Logo" 
          className="h-12 md:h-16 w-auto object-contain"
        />
      </div>
      <span className="text-[10px] text-muted-foreground mt-0.5">{t('madeInSaudi')}</span>
    </div>
  );
}
