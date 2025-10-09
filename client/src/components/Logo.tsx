import { useQuery } from '@tanstack/react-query';
import { useLanguage } from '@/contexts/LanguageContext';

interface LogoProps {
  className?: string;
}

interface LogoData {
  hasCustomLogo: boolean;
  logoUrl: string | null;
}

export default function Logo({ className = "" }: LogoProps) {
  const { data: logoData } = useQuery<LogoData>({
    queryKey: ['/api/logo'],
  });
  const { t } = useLanguage();

  if (logoData?.hasCustomLogo && logoData.logoUrl) {
    return (
      <div className={`flex flex-col ${className}`}>
        <img 
          src={logoData.logoUrl} 
          alt="MyBaby Logo" 
          className="h-10 md:h-12 w-auto object-contain"
        />
        <span className="text-[10px] text-muted-foreground mt-0.5">{t('madeInSaudi')}</span>
      </div>
    );
  }

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex items-center gap-2">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="18" fill="#00ADEF" fillOpacity="0.1"/>
          <circle cx="20" cy="20" r="14" fill="#00ADEF"/>
          <path d="M20 10C15 10 12 13 12 17C12 21 15 24 20 28C25 24 28 21 28 17C28 13 25 10 20 10Z" fill="white"/>
          <circle cx="20" cy="17" r="3" fill="#00ADEF"/>
        </svg>
        <span className="text-2xl md:text-3xl font-bold text-primary">MyBaby</span>
      </div>
      <span className="text-[10px] text-muted-foreground mt-0.5">{t('madeInSaudi')}</span>
    </div>
  );
}
