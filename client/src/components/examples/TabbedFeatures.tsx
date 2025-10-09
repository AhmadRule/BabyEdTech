import TabbedFeatures from '../TabbedFeatures';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function TabbedFeaturesExample() {
  return (
    <LanguageProvider>
      <TabbedFeatures />
    </LanguageProvider>
  );
}
