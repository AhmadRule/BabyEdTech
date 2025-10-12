import { useLanguage } from '@/contexts/LanguageContext';
import { Users, GraduationCap, Building2, Heart, Check } from 'lucide-react';

export default function StakeholderValue() {
  const { t, language } = useLanguage();

  const stakeholders = [
    {
      id: 'parents',
      icon: Users,
      title: t('stakeholderParents'),
      benefits: [
        t('stakeholderParentsBenefit1'),
        t('stakeholderParentsBenefit2'),
        t('stakeholderParentsBenefit3'),
        t('stakeholderParentsBenefit4')
      ],
      color: 'from-[#00ADEF] to-[#89AEFF]',
      position: 'top-left'
    },
    {
      id: 'teachers',
      icon: GraduationCap,
      title: t('stakeholderTeachers'),
      benefits: [
        t('stakeholderTeachersBenefit1'),
        t('stakeholderTeachersBenefit2'),
        t('stakeholderTeachersBenefit3'),
        t('stakeholderTeachersBenefit4')
      ],
      color: 'from-[#EE7248] to-[#F4AEDF]',
      position: 'top-right'
    },
    {
      id: 'admins',
      icon: Building2,
      title: t('stakeholderAdmins'),
      benefits: [
        t('stakeholderAdminsBenefit1'),
        t('stakeholderAdminsBenefit2'),
        t('stakeholderAdminsBenefit3'),
        t('stakeholderAdminsBenefit4')
      ],
      color: 'from-[#2B885C] to-[#DFFC8E]',
      position: 'bottom-left'
    },
    {
      id: 'children',
      icon: Heart,
      title: t('stakeholderChildren'),
      benefits: [
        t('stakeholderChildrenBenefit1'),
        t('stakeholderChildrenBenefit2'),
        t('stakeholderChildrenBenefit3'),
        t('stakeholderChildrenBenefit4')
      ],
      color: 'from-[#F4AEDF] to-[#89AEFF]',
      position: 'bottom-right'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#00ADEF]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#EE7248]/10 rounded-full blur-3xl animate-float-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('stakeholderTitle')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('stakeholderSubtitle')}
          </p>
        </div>

        {/* Stakeholder Diagram */}
        <div className="relative max-w-6xl mx-auto">
          {/* Central Hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            {/* Animated Glow Ring */}
            <div className="absolute inset-0 -m-4 rounded-full bg-gradient-to-br from-[#00ADEF]/30 to-[#89AEFF]/30 animate-ping" style={{ animationDuration: '3s' }}></div>
            
            {/* Rotating Border Ring */}
            <div className="absolute inset-0 -m-2 rounded-full border-2 border-dashed border-[#00ADEF]/40 animate-rotate-slow"></div>
            
            {/* Main Hub Circle */}
            <div 
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-[#00ADEF] to-[#89AEFF] flex items-center justify-center shadow-2xl animate-float-slow"
              data-testid="stakeholder-hub"
            >
              {/* Inner Glow */}
              <div className="absolute inset-2 rounded-full bg-white/10 animate-pulse" style={{ animationDuration: '2s' }}></div>
              
              <div className="text-center relative z-10">
                <div className="text-white text-2xl md:text-3xl font-bold">MyBaby</div>
                <div className="text-white/80 text-xs md:text-sm">{t('stakeholderPlatform')}</div>
              </div>
            </div>
          </div>

          {/* Connecting Lines - Hidden on mobile */}
          <svg className="absolute inset-0 w-full h-full hidden md:block pointer-events-none" style={{ zIndex: 1 }}>
            {language === 'ar' ? (
              <>
                {/* RTL: Lines mirrored for Arabic */}
                <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="#00ADEF" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" />
                <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="#EE7248" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" />
                <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="#2B885C" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" />
                <line x1="50%" y1="50%" x2="20%" y2="80%" stroke="#F4AEDF" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" />
              </>
            ) : (
              <>
                {/* LTR: Lines for English */}
                <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="#00ADEF" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" />
                <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="#EE7248" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" />
                <line x1="50%" y1="50%" x2="20%" y2="80%" stroke="#2B885C" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" />
                <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="#F4AEDF" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" />
              </>
            )}
          </svg>

          {/* Stakeholder Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 pt-48 md:pt-0">
            {stakeholders.map((stakeholder) => {
              const Icon = stakeholder.icon;
              return (
                <div
                  key={stakeholder.id}
                  className={`relative ${
                    stakeholder.position === 'top-left' ? 'md:mt-0' :
                    stakeholder.position === 'top-right' ? 'md:mt-0' :
                    stakeholder.position === 'bottom-left' ? 'md:mt-64' :
                    'md:mt-64'
                  }`}
                  data-testid={`stakeholder-card-${stakeholder.id}`}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stakeholder.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      {stakeholder.title}
                    </h3>

                    {/* Benefits */}
                    <ul className="space-y-2">
                      {stakeholder.benefits.map((benefit, index) => (
                        <li 
                          key={index} 
                          className={`flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300 ${
                            language === 'ar' ? 'flex-row-reverse text-right' : ''
                          }`}
                        >
                          <Check className={`w-5 h-5 text-[#00ADEF] flex-shrink-0 mt-0.5 ${
                            language === 'ar' ? 'ml-2' : 'mr-2'
                          }`} />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {language === 'ar' 
              ? 'تحسين الكفاءة والتواصل لكل جهة معنية' 
              : 'Improving efficiency and communication for every stakeholder'
            }
          </p>
        </div>
      </div>
    </section>
  );
}
