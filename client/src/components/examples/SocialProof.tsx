import SocialProof from '../SocialProof';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function SocialProofExample() {
  return (
    <LanguageProvider>
      <SocialProof />
    </LanguageProvider>
  );
}
