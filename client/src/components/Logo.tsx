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
          className="h-12 md:h-14 w-auto object-contain"
        />
        <span className="text-[10px] text-muted-foreground mt-0.5">{t('madeInSaudi')}</span>
      </div>
    );
  }

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex items-center gap-1.5">
        <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
          my
        </span>
        <span className="text-3xl md:text-4xl font-bold text-primary">
          BABY
        </span>
      </div>
      <span className="text-[10px] text-muted-foreground mt-0.5 text-center">{t('madeInSaudi')}</span>
    </div>
  );
}
