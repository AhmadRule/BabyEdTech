import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone } from 'lucide-react';
import { SiInstagram, SiLinkedin } from 'react-icons/si';
import Logo from './Logo';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-muted/30 border-t">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-8">
          <div>
            <Logo className="mb-4" data-testid="text-footer-logo" />
            <p className="text-sm text-muted-foreground">
              The all-in-one platform for nurseries and kindergartens
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-about">
                  {t('footerAbout')}
                </a>
              </li>
              <li>
                <a href="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-features">
                  {t('footerFeatures')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-pricing">
                  {t('footerPricing')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-contact">
                  {t('footerContact')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <a 
                href="mailto:info@mybabyapp.net" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-footer-email"
              >
                <Mail className="h-4 w-4" />
                info@mybabyapp.net
              </a>
              <a 
                href="tel:+966543324707" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-footer-phone"
              >
                <Phone className="h-4 w-4" />
                +966 54 332 4707
              </a>
              
              <div className="flex gap-4 pt-2">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-instagram"
                >
                  <SiInstagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-linkedin"
                >
                  <SiLinkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t pt-8">
          <p className="text-center text-sm text-muted-foreground" data-testid="text-footer-copyright">
            {t('footerCopyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
