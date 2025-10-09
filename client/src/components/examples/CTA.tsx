import CTA from '../CTA';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function CTAExample() {
  return (
    <LanguageProvider>
      <CTA />
    </LanguageProvider>
  );
}
