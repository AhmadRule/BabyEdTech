import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
  formatNumber: (num: string | number) => string;
}

const translations = {
  en: {
    home: 'Home',
    features: 'Features',
    forSchools: 'For Schools',
    forParents: 'For Parents',
    contactUs: 'Contact Us',
    heroTitleAr: 'الحضانة بجوالك',
    heroTitleEn: 'Your Nursery, In Your Pocket.',
    heroSubtextEn: 'The all-in-one app and ERP for kindergartens — connecting schools, parents, and teachers.',
    heroSubtextAr: 'تطبيق شامل لإدارة الحضانات والروضات، يربط بين المدرسة والوالدين والمعلمات.',
    getDemo: 'Get a Demo',
    tryFree: 'جرّب مجاناً',
    featuresTitle: 'Everything You Need to Manage Your Nursery',
    featuresTitleAr: 'كل ما تحتاجه لإدارة حضانتك',
    feature1Title: 'Daily Updates & Reports',
    feature1TitleAr: 'التقارير اليومية',
    feature1Desc: 'Share daily activities, meals, and milestones with parents instantly.',
    feature2Title: 'Parent Communication Hub',
    feature2TitleAr: 'التواصل مع أولياء الأمور',
    feature2Desc: 'Stay connected with parents through secure messaging and notifications.',
    feature3Title: 'Teacher Management Dashboard',
    feature3TitleAr: 'إدارة المعلمات',
    feature3Desc: 'Empower your team with easy-to-use tools for classroom management.',
    feature4Title: 'Smart ERP Analytics',
    feature4TitleAr: 'نظام تحليلي ذكي',
    feature4Desc: 'Make data-driven decisions with comprehensive insights and reports.',
    testimonialsTitle: 'Trusted by Nurseries Across Saudi Arabia',
    testimonialsTitleAr: 'موثوق به من قبل الحضانات في جميع أنحاء السعودية',
    ctaTitle: 'Join hundreds of nurseries transforming their communication today.',
    ctaTitleAr: 'انضم إلى مئات الحضانات التي بدأت التحول الرقمي اليوم.',
    scheduleDemo: 'Schedule a Demo',
    scheduleDemoAr: 'احجز عرض توضيحي',
    footerAbout: 'About',
    footerFeatures: 'Features',
    footerPricing: 'Pricing',
    footerContact: 'Contact',
    footerCopyright: '© 2025 MyBaby | Made with 💙 in Saudi Arabia',
    madeInSaudiEn: 'Made with 💙 in Saudi Arabia',
    madeInSaudiAr: 'صُنع بـ 💙 في السعودية'
  },
  ar: {
    home: 'الرئيسية',
    features: 'المميزات',
    forSchools: 'للمدارس',
    forParents: 'لأولياء الأمور',
    contactUs: 'اتصل بنا',
    heroTitleAr: 'الحضانة بجوالك',
    heroTitleEn: 'Your Nursery, In Your Pocket.',
    heroSubtextEn: 'The all-in-one app and ERP for kindergartens — connecting schools, parents, and teachers.',
    heroSubtextAr: 'تطبيق شامل لإدارة الحضانات والروضات، يربط بين المدرسة والوالدين والمعلمات.',
    getDemo: 'احصل على عرض توضيحي',
    tryFree: 'جرّب مجاناً',
    featuresTitle: 'كل ما تحتاجه لإدارة حضانتك',
    featuresTitleAr: 'كل ما تحتاجه لإدارة حضانتك',
    feature1Title: 'التقارير اليومية',
    feature1TitleAr: 'التقارير اليومية',
    feature1Desc: 'شارك الأنشطة اليومية والوجبات والإنجازات مع أولياء الأمور على الفور.',
    feature2Title: 'التواصل مع أولياء الأمور',
    feature2TitleAr: 'التواصل مع أولياء الأمور',
    feature2Desc: 'ابقَ على اتصال مع أولياء الأمور من خلال الرسائل الآمنة والإشعارات.',
    feature3Title: 'إدارة المعلمات',
    feature3TitleAr: 'إدارة المعلمات',
    feature3Desc: 'امنح فريقك أدوات سهلة الاستخدام لإدارة الفصول الدراسية.',
    feature4Title: 'نظام تحليلي ذكي',
    feature4TitleAr: 'نظام تحليلي ذكي',
    feature4Desc: 'اتخذ قرارات مبنية على البيانات من خلال رؤى وتقارير شاملة.',
    testimonialsTitle: 'موثوق به من قبل الحضانات في جميع أنحاء السعودية',
    testimonialsTitleAr: 'موثوق به من قبل الحضانات في جميع أنحاء السعودية',
    ctaTitle: 'انضم إلى مئات الحضانات التي بدأت التحول الرقمي اليوم.',
    ctaTitleAr: 'انضم إلى مئات الحضانات التي بدأت التحول الرقمي اليوم.',
    scheduleDemo: 'احجز عرض توضيحي',
    scheduleDemoAr: 'احجز عرض توضيحي',
    footerAbout: 'من نحن',
    footerFeatures: 'المميزات',
    footerPricing: 'الأسعار',
    footerContact: 'اتصل بنا',
    footerCopyright: '© 2025 MyBaby | صنع بـ 💙 في السعودية',
    madeInSaudiEn: 'Made with 💙 in Saudi Arabia',
    madeInSaudiAr: 'صُنع بـ 💙 في السعودية'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.style.fontFamily = language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif';
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  const formatNumber = (num: string | number): string => {
    return toEnglishNumbers(num);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, formatNumber }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function toEnglishNumbers(str: string | number): string {
  const arabicToEnglish: { [key: string]: string } = {
    '٠': '0', '١': '1', '٢': '2', '٣': '3', '٤': '4',
    '٥': '5', '٦': '6', '٧': '7', '٨': '8', '٩': '9'
  };
  
  return String(str).replace(/[٠-٩]/g, (d) => arabicToEnglish[d]);
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
