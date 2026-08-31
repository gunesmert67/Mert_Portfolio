import { MilestoneTypes } from '@/types';

/**
 * Professional work experience and educational background timeline data.
 */
export const ExperienceData = [
  {
    id: 1,
    type: MilestoneTypes.Work,
    date: {
      en: 'February 2026 - Present',
      tr: 'Şubat 2026 - Halen',
    },
    title: {
      en: 'Product & Technology Manager',
      tr: 'Ürün & Teknoloji Yöneticisi',
    },
    img: '/company-logo/alkom.svg',
    organization: {
      en: 'Alkom Technology',
      tr: 'Alkom Teknoloji',
    },
    location: {
      en: 'Istanbul, Turkey',
      tr: 'İstanbul, Türkiye',
    },
    description: {
      en: [
        'China-based supplier research and sourcing.',
        'Product analysis and technical evaluation.',
        'Market research in industrial technologies.',
        'Website and digital infrastructure development.',
        'Managing product positioning and pricing strategies.',
      ],
      tr: [
        'Çin merkezli tedarikçi araştırması ve kaynak bulma operasyonları.',
        'Ürün analizi ve kapsamlı teknik değerlendirme.',
        'Endüstriyel teknolojiler alanında pazar araştırması.',
        'Web sitesi ve dijital altyapı geliştirme süreçleri.',
        'Ürün konumlandırma ve fiyatlandırma stratejilerinin yönetimi.',
      ],
    },
    technologies: [
      'Product Management',
      'Technical Sourcing',
      'Market Research',
      'Digital Infrastructure',
      'Pricing Strategy',
    ],
  },
  {
    id: 2,
    type: MilestoneTypes.Education,
    date: {
      en: 'September 2025 - February 2027',
      tr: 'Eylül 2025 - Şubat 2027',
    },
    title: {
      en: "Management Information Systems • Master's Degree",
      tr: 'Yönetim Bilişim Sistemleri • Yüksek Lisans',
    },
    img: '/company-logo/marmara.png',
    organization: {
      en: 'Marmara University',
      tr: 'Marmara Üniversitesi',
    },
    location: {
      en: 'Istanbul, Turkey',
      tr: 'İstanbul, Türkiye',
    },
    gpa: 3.95,
    description: {
      en: [
        'Specializing in AI-powered business development and modern application development.',
        'Focusing on advanced topics in data analytics, generative AI, and enterprise information systems.',
      ],
      tr: [
        'Yapay zeka destekli iş geliştirme ve modern uygulama geliştirme üzerine uzmanlaşıyorum.',
        'Veri analitiği, üretken yapay zeka ve kurumsal bilgi sistemlerinde ileri düzey konulara odaklanıyorum.',
      ],
    },
    technologies: [
      'AI',
      'Data Analytics',
      'Business Intelligence',
      'Enterprise Systems',
    ],
  },
  {
    id: 3,
    type: MilestoneTypes.Work,
    date: {
      en: 'August 2025 - August 2026',
      tr: 'Ağustos 2025 - Ağustos 2026',
    },
    title: {
      en: 'Technical Support Engineer',
      tr: 'Teknik Destek Mühendisi',
    },
    img: '/company-logo/dhe.webp',
    organization: {
      en: 'DHE Industrial',
      tr: 'DHE Endüstriyel',
    },
    location: {
      en: 'Istanbul, Turkey',
      tr: 'İstanbul, Türkiye',
    },
    description: {
      en: [
        'Developed data-driven dashboards and reporting solutions to increase visibility into business and operational performance.',
        'Automated repetitive operational processes using AI-based solutions, reducing manual workload and boosting efficiency.',
        'Conducted root cause analysis (RCA) to identify process improvement opportunities and support data-driven decision-making.',
      ],
      tr: [
        'İşletme ve operasyonel performansa ilişkin görünürlüğü artırmak için veri odaklı gösterge panelleri ve raporlama çözümleri geliştirdim.',
        'Yapay zeka tabanlı çözümler kullanarak tekrarlayan operasyonel süreçleri otomatikleştirdim, manuel iş yükünü azalttım ve verimliliği artırdım.',
        'Süreç iyileştirme fırsatlarını belirlemek ve veri odaklı karar vermeyi desteklemek için kök neden analizi (RCA) gerçekleştirdim.',
      ],
    },
    technologies: [
      'Enterprise Resource Planning (ERP)',
      'Process Improvement',
      'Pre-Sales Support',
      'Data Analysis',
      'AI Automation',
    ],
  },
  {
    id: 4,
    type: MilestoneTypes.Work,
    date: {
      en: 'August 2023 - March 2025',
      tr: 'Ağustos 2023 - Mart 2025',
    },
    title: {
      en: 'Operations & Service Engineer',
      tr: 'Operasyon & Servis Mühendisi',
    },
    img: '/company-logo/tepe.jpg',
    organization: {
      en: 'Tepe Analitik',
      tr: 'Tepe Analitik',
    },
    location: {
      en: 'Istanbul, Turkey',
      tr: 'İstanbul, Türkiye',
    },
    description: {
      en: [
        'Managed end-to-end installation, maintenance, and operational processes for laboratory equipment.',
        'Ensured process standardization and operational continuity across diverse customer environments.',
        'Coordinated with international teams to execute remote diagnostics and problem-solving processes.',
      ],
      tr: [
        'Laboratuvar cihazlarının kurulum, bakım ve operasyonel süreçlerini uçtan uca yönettim.',
        'Farklı müşteri ortamlarında süreç standardizasyonu ve operasyonel süreklilik sağladım.',
        'Uluslararası ekiplerle koordineli çalışarak uzaktan teşhis ve problem çözme süreçlerini yürüttüm.',
      ],
    },
    technologies: [
      'Laboratory Systems',
      'Process Standardization',
      'Remote Diagnostics',
      'Customer Service',
      'Technical Reporting',
    ],
  },
  {
    id: 5,
    type: MilestoneTypes.Education,
    date: {
      en: 'September 2018 - July 2023',
      tr: 'Eylül 2018 - Temmuz 2023',
    },
    title: {
      en: "Mechatronics Engineering • Bachelor's Degree",
      tr: 'Mekatronik Mühendisliği • Lisans',
    },
    img: '/company-logo/ticaret.png',
    organization: {
      en: 'Ticaret University',
      tr: 'Ticaret Üniversitesi',
    },
    location: {
      en: 'Istanbul, Turkey',
      tr: 'İstanbul, Türkiye',
    },
    gpa: 3.1,
    description: {
      en: [
        'Full scholarship (100%) for academic excellence.',
        'Mechanical Team Leader at Pulsar Electromobile – Teknofest Efficiency Challenge.',
        'Combined mechanical, electronic, and software engineering disciplines.',
      ],
      tr: [
        'Akademik başarı bursu (%100) ile tamamladım.',
        'Pulsar Electromobile – Teknofest Efficiency Challenge (Mekanik Ekip Lideri).',
        'Mekanik, elektronik ve yazılım mühendisliği disiplinlerini birleştiren projelerde yer aldım.',
      ],
    },
    technologies: [
      'Mechatronics',
      'Robotics',
      'Control Systems',
      'Embedded Systems',
      'Python',
      'MATLAB',
    ],
  },
];
