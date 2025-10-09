import Testimonials from '../Testimonials';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function TestimonialsExample() {
  return (
    <LanguageProvider>
      <Testimonials />
    </LanguageProvider>
  );
}
