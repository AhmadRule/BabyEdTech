import Features from '../Features';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function FeaturesExample() {
  return (
    <LanguageProvider>
      <Features />
    </LanguageProvider>
  );
}
