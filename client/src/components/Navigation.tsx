import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Logo from './Logo';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { key: 'home', href: '#home' },
    { key: 'features', href: '#features' },
    { key: 'forSchools', href: '#schools' },
    { key: 'forParents', href: '#parents' },
    { key: 'contactUs', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Logo data-testid="logo-mybaby" />

          <div className="hidden md:flex items-center gap-8">
            {menuItems.map(item => (
              <a
                key={item.key}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                data-testid={`link-${item.key.toLowerCase()}`}
              >
                {t(item.key)}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              data-testid="button-language-toggle"
            >
              <Globe className="h-5 w-5" />
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t" data-testid="mobile-menu">
          <div className="px-4 py-6 space-y-4">
            {menuItems.map(item => (
              <a
                key={item.key}
                href={item.href}
                className="block text-base font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid={`link-mobile-${item.key.toLowerCase()}`}
              >
                {t(item.key)}
              </a>
            ))}
            <Button
              variant="outline"
              className="w-full gap-2"
              onClick={() => {
                toggleLanguage();
                setIsMobileMenuOpen(false);
              }}
              data-testid="button-mobile-language"
            >
              <Globe className="h-4 w-4" />
              {language === 'en' ? 'العربية' : 'English'}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
