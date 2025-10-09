import Navigation from '../Navigation';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function NavigationExample() {
  return (
    <LanguageProvider>
      <Navigation />
    </LanguageProvider>
  );
}
