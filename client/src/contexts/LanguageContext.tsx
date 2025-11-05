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
    edtechBadge: 'EdTech for Saudi Nurseries',
    heroTitle1: 'Smart Management = More Time',
    heroTitle2: '',
    heroTagline: 'Your Nursery, In Your Pocket.',
    heroSubtext: 'The all-in-one app and ERP for kindergartens — connecting schools, parents, and teachers.',
    getDemo: 'Get a Demo',
    tryFree: 'Try Free',
    joinFree: 'Join Free',
    poweredByTech: 'Powered by Technology',
    customerStories: 'Customer Success Stories',
    nurseries: 'Nurseries',
    happyParents: 'Happy Parents',
    appStoreRating: 'App Store Rating',
    noCreditCard: 'No Credit Card Required',
    freeTrial: 'Free 30-Day Trial',
    support247: '24/7 Support',
    featuresTitle: 'Everything You Need to Manage Your Nursery',
    feature1Title: 'Daily Updates & Reports',
    feature1Desc: 'Share daily activities, meals, and milestones with parents instantly.',
    feature2Title: 'Parent Communication Hub',
    feature2Desc: 'Stay connected with parents through secure messaging and notifications.',
    feature3Title: 'Teacher Management Dashboard',
    feature3Desc: 'Empower your team with easy-to-use tools for classroom management.',
    feature4Title: 'Smart ERP Analytics',
    feature4Desc: 'Make data-driven decisions with comprehensive insights and reports.',
    testimonialsTitle: 'Trusted by Nurseries Across Saudi Arabia',
    ctaTitle: 'Join hundreds of nurseries transforming their communication today.',
    scheduleDemo: 'Schedule a Demo',
    footerAbout: 'About',
    footerFeatures: 'Features',
    footerPricing: 'Pricing',
    footerContact: 'Contact',
    footerCopyright: '© 2025 MyBaby | Made with 💙 in Saudi Arabia',
    madeInSaudi: 'Made with 💙 in Saudi Arabia',
    contactTitle: 'Request a Demo',
    contactSubtitle: 'Fill out the form below and our team will get back to you within 24 hours',
    contactName: 'Your Name',
    contactEmail: 'Email Address',
    contactPhone: 'Phone Number',
    contactNursery: 'Nursery Name',
    contactMessage: 'Message (Optional)',
    contactSubmit: 'Submit Request',
    contactSuccess: 'Thank you! We\'ll contact you soon.',
    contactError: 'Something went wrong. Please try again.',
    stakeholderTitle: 'One Platform, Everyone Connected',
    stakeholderSubtitle: 'See how MyBaby brings value to every stakeholder in your nursery ecosystem',
    stakeholderPlatform: 'Platform',
    stakeholderParents: 'Parents',
    stakeholderParentsBenefit1: 'Real-time updates on child activities',
    stakeholderParentsBenefit2: 'Easy online fee payments',
    stakeholderParentsBenefit3: 'Direct messaging with teachers',
    stakeholderParentsBenefit4: 'Digital daily reports & photos',
    stakeholderTeachers: 'Teachers',
    stakeholderTeachersBenefit1: 'Simplified attendance tracking',
    stakeholderTeachersBenefit2: 'Quick activity logging',
    stakeholderTeachersBenefit3: 'Parent communication tools',
    stakeholderTeachersBenefit4: 'Classroom management dashboard',
    stakeholderAdmins: 'Administrators',
    stakeholderAdminsBenefit1: 'Automated billing & invoices',
    stakeholderAdminsBenefit2: 'Staff performance analytics',
    stakeholderAdminsBenefit3: 'Enrollment management',
    stakeholderAdminsBenefit4: 'Financial reports & insights',
    stakeholderChildren: 'Better Care',
    stakeholderChildrenBenefit1: 'Coordinated care through shared info',
    stakeholderChildrenBenefit2: 'Consistent routines & schedules',
    stakeholderChildrenBenefit3: 'Better health & safety tracking',
    stakeholderChildrenBenefit4: 'Enhanced learning experiences'
  },
  ar: {
    home: 'الرئيسية',
    features: 'المميزات',
    forSchools: 'للمدارس',
    forParents: 'لأولياء الأمور',
    contactUs: 'اتصل بنا',
    edtechBadge: 'تقنية تعليمية للحضانات السعودية',
    heroTitle1: 'إدارة ذكية = وقت أكثر',
    heroTitle2: '',
    heroTagline: 'الحضانة بجوالك',
    heroSubtext: 'تطبيق شامل لإدارة الحضانات والروضات، يربط بين المدرسة والوالدين والمعلمات.',
    getDemo: 'احصل على عرض توضيحي',
    tryFree: 'جرّب مجاناً',
    joinFree: 'انضم مجاناً',
    poweredByTech: 'مدعوم بالتقنية',
    customerStories: 'قصص نجاح العملاء',
    nurseries: 'حضانة',
    happyParents: 'ولي أمر سعيد',
    appStoreRating: 'تقييم التطبيق',
    noCreditCard: 'بدون بطاقة ائتمان',
    freeTrial: 'تجربة مجانية 30 يوم',
    support247: 'دعم على مدار الساعة',
    featuresTitle: 'كل ما تحتاجه لإدارة حضانتك',
    feature1Title: 'التقارير اليومية',
    feature1Desc: 'شارك الأنشطة اليومية والوجبات والإنجازات مع أولياء الأمور على الفور.',
    feature2Title: 'التواصل مع أولياء الأمور',
    feature2Desc: 'ابقَ على اتصال مع أولياء الأمور من خلال الرسائل الآمنة والإشعارات.',
    feature3Title: 'إدارة المعلمات',
    feature3Desc: 'امنح فريقك أدوات سهلة الاستخدام لإدارة الفصول الدراسية.',
    feature4Title: 'نظام تحليلي ذكي',
    feature4Desc: 'اتخذ قرارات مبنية على البيانات من خلال رؤى وتقارير شاملة.',
    testimonialsTitle: 'موثوق به من قبل الحضانات في جميع أنحاء السعودية',
    ctaTitle: 'انضم إلى مئات الحضانات التي بدأت التحول الرقمي اليوم.',
    scheduleDemo: 'احجز عرض توضيحي',
    footerAbout: 'من نحن',
    footerFeatures: 'المميزات',
    footerPricing: 'الأسعار',
    footerContact: 'اتصل بنا',
    footerCopyright: '© 2025 MyBaby | صنع بـ 💙 في السعودية',
    madeInSaudi: 'صنع بـ 💙 في السعودية',
    contactTitle: 'اطلب عرض توضيحي',
    contactSubtitle: 'املأ النموذج أدناه وسيتواصل معك فريقنا خلال 24 ساعة',
    contactName: 'الاسم',
    contactEmail: 'البريد الإلكتروني',
    contactPhone: 'رقم الجوال',
    contactNursery: 'اسم الحضانة',
    contactMessage: 'رسالة (اختياري)',
    contactSubmit: 'إرسال الطلب',
    contactSuccess: 'شكراً لك! سنتواصل معك قريباً.',
    contactError: 'حدث خطأ ما. يرجى المحاولة مرة أخرى.',
    stakeholderTitle: 'منصة واحدة، الجميع متصل',
    stakeholderSubtitle: 'اكتشف كيف يقدم MyBaby قيمة لكل جهة معنية في نظام الحضانة',
    stakeholderPlatform: 'المنصة',
    stakeholderParents: 'أولياء الأمور',
    stakeholderParentsBenefit1: 'تحديثات فورية عن أنشطة الطفل',
    stakeholderParentsBenefit2: 'دفع الرسوم أونلاين بسهولة',
    stakeholderParentsBenefit3: 'تواصل مباشر مع المعلمات',
    stakeholderParentsBenefit4: 'تقارير وصور يومية رقمية',
    stakeholderTeachers: 'المعلمات',
    stakeholderTeachersBenefit1: 'تتبع الحضور بسهولة',
    stakeholderTeachersBenefit2: 'تسجيل الأنشطة بسرعة',
    stakeholderTeachersBenefit3: 'أدوات التواصل مع أولياء الأمور',
    stakeholderTeachersBenefit4: 'لوحة إدارة الفصل الدراسي',
    stakeholderAdmins: 'الإدارة',
    stakeholderAdminsBenefit1: 'فواتير تلقائية',
    stakeholderAdminsBenefit2: 'تحليلات أداء الموظفين',
    stakeholderAdminsBenefit3: 'إدارة التسجيل',
    stakeholderAdminsBenefit4: 'تقارير ورؤى مالية',
    stakeholderChildren: 'رعاية أفضل',
    stakeholderChildrenBenefit1: 'رعاية منسقة من خلال مشاركة المعلومات',
    stakeholderChildrenBenefit2: 'روتين وجداول متسقة',
    stakeholderChildrenBenefit3: 'تتبع أفضل للصحة والسلامة',
    stakeholderChildrenBenefit4: 'تجارب تعليمية محسّنة'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('mybaby-language');
    return (savedLanguage === 'en' || savedLanguage === 'ar') ? savedLanguage : 'ar';
  });

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.style.fontFamily = language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif';
    localStorage.setItem('mybaby-language', language);
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
