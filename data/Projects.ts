import { ProjectCategories } from '@/types';

/**
 * Detailed portfolio projects spanning AI, Robotics, and Web development.
 */
export const projectsData = [
  {
    id: 1,
    category: ProjectCategories.AI_Data,
    src: '/project-img/voice-assistant.webp',
    title: {
      en: 'Offline Voice Assistant (RAG)',
      tr: 'Çevrimdışı Sesli Asistan (RAG)',
    },
    description: {
      en: 'Developed a fully on-prem, internet-independent voice assistant enabling spoken interaction with large document collections.',
      tr: 'Büyük belge koleksiyonlarıyla sesli etkileşimi sağlayan, tamamen on-prem (yerel), internetten bağımsız bir sesli asistan geliştirdim.',
    },
    sourceUrl: null,
    youtubeUrl: null,
    githubUrl: null,
    startDate: '2025-12-01',
    endDate: null,
    technologyStack: [
      'Python',
      'OpenAI Whisper v3',
      'Qwen 2.5',
      'Qdrant',
      'RAG Architecture',
      'Vector Databases',
      'Speech Processing',
    ],
    features: {
      en: [
        'Integrated OpenAI Whisper v3 for real-time speech-to-text and Qwen 2.5 for local LLM inference.',
        'Built a Qdrant-based vector search layer to achieve low-latency, real-time semantic querying.',
        'Designed an enterprise-ready RAG architecture focused on privacy, performance, and offline reliability.',
      ],
      tr: [
        'Gerçek zamanlı konuşmadan yazıya (STT) için OpenAI Whisper v3 ve yerel LLM çıkarımı için Qwen 2.5 entegrasyonu.',
        'Düşük gecikmeli, gerçek zamanlı anlamsal sorgulama için Qdrant tabanlı vektör arama katmanı.',
        'Gizlilik, performans ve çevrimdışı güvenilirlik odaklı kurumsal kullanıma hazır RAG mimarisi.',
      ],
    },
    challenges: {
      en: [
        'Optimizing local LLM inference speed for real-time conversational experience.',
        'Building a robust vector search pipeline that handles diverse document formats.',
        'Balancing model accuracy with hardware resource constraints for on-prem deployment.',
      ],
      tr: [
        'Gerçek zamanlı konuşma deneyimi için yerel LLM çıkarım hızını optimize etmek.',
        'Farklı belge formatlarını işleyebilen sağlam bir vektör arama hattı oluşturmak.',
        'Yerel dağıtım için donanım kaynak kısıtlamaları ile model doğruluğunu dengelemek.',
      ],
    },
    accomplishments: {
      en: [
        'Designed and deployed a fully air-gapped AI assistant for enterprise use cases.',
        'Achieved sub-second query response times with Qdrant vector similarity search.',
        'Eliminated cloud dependency while maintaining production-grade NLP performance.',
      ],
      tr: [
        'Kurumsal kullanım durumları için tamamen kapalı devre (air-gapped) bir yapay zeka asistanı tasarlayıp devreye aldım.',
        'Qdrant vektör benzerlik araması ile saniye altı sorgu yanıt sürelerine ulaştım.',
        'Üretim sınıfı NLP performansını korurken bulut bağımlılığını ortadan kaldırdım.',
      ],
    },
  },
  {
    id: 2,
    category: ProjectCategories.AI_Data,
    src: '/project-img/email-automation.webp',
    title: {
      en: 'AI Workflow Automation (n8n)',
      tr: 'AI İş Akışı Otomasyonu (n8n)',
    },
    description: {
      en: 'Designed an automated system to classify incoming emails using LLM-based content analysis with n8n integration.',
      tr: 'E-postaları ve iş süreçlerini yapay zeka ile otomatize eden n8n iş akışları tasarladım.',
    },
    sourceUrl: null,
    youtubeUrl: null,
    githubUrl: null,
    startDate: '2025-10-01',
    endDate: '2025-12-01',
    technologyStack: [
      'n8n',
      'LLM Integration',
      'OpenAI API',
      'Low-Code Automation',
      'Python',
    ],
    features: {
      en: [
        'Implemented real-time Telegram alerts for critical notifications to reduce response latency.',
        'Built a feedback-driven automation loop to continuously improve classification accuracy.',
        'Reduced cognitive load and improved decision-making efficiency in daily operations.',
      ],
      tr: [
        'Yanıt gecikmesini azaltmak için kritik bildirimlerde gerçek zamanlı Telegram uyarıları uyguladım.',
        'Sınıflandırma doğruluğunu sürekli iyileştirmek için geri bildirim odaklı bir otomasyon döngüsü kurdum.',
        'Günlük operasyonlarda bilişsel yükü azalttım ve karar verme verimliliğini artırdım.',
      ],
    },
    challenges: {
      en: [
        'Ensuring accurate email categorization across diverse content types.',
        'Building a reliable feedback loop that genuinely improves classification over time.',
        'Minimizing false positives in critical notification routing.',
      ],
      tr: [
        'Çeşitli içerik türlerinde doğru e-posta kategorizasyonunu sağlamak.',
        'Zamanla sınıflandırmayı gerçekten iyileştiren güvenilir bir geri bildirim döngüsü oluşturmak.',
        'Kritik bildirim yönlendirmesinde yanlış pozitifleri en aza indirmek.',
      ],
    },
    accomplishments: {
      en: [
        'Reduced information overload by automating email triage for the entire team.',
        'Optimized decision-making and attention management through intelligent routing.',
        'Built a fully no-code/low-code automation pipeline accessible to non-technical users.',
      ],
      tr: [
        'Tüm ekip için e-posta tasnifini otomatikleştirerek bilgi aşırı yükünü azalttım.',
        'Akıllı yönlendirme ile karar verme ve dikkat yönetimini optimize ettim.',
        'Teknik olmayan kullanıcıların da erişebileceği tam bir no-code/low-code otomasyon hattı kurdum.',
      ],
    },
  },
  {
    id: 3,
    category: ProjectCategories.AI_Data,
    src: '/project-img/stable-diffusion.webp',
    title: {
      en: 'Stable Diffusion – Custom LoRA Training',
      tr: 'Stable Diffusion – Özel LoRA Eğitimi',
    },
    description: {
      en: 'Trained custom LoRA models on Stable Diffusion to enable consistent, brand-oriented visual generation.',
      tr: 'Tutarlı, marka odaklı görsel üretim sağlamak için Stable Diffusion üzerinde özel LoRA modelleri eğittim.',
    },
    sourceUrl: null,
    youtubeUrl: null,
    githubUrl: null,
    startDate: '2025-08-01',
    endDate: '2025-09-01',
    technologyStack: [
      'Stable Diffusion',
      'LoRA',
      'Python',
      'Generative AI',
      'Prompt Engineering',
    ],
    features: {
      en: [
        'Established a repeatable image generation pipeline optimized for quality and stylistic consistency.',
        'Fine-tuned parameters for high-fidelity brand asset creation.',
        'Streamlined creative workflows by automating on-demand imagery.',
      ],
      tr: [
        'Kalite ve stil tutarlılığı için optimize edilmiş, tekrarlanabilir bir görüntü üretim hattı kurdum.',
        'Yüksek sadakatli marka varlığı oluşturmak için parametreleri ince ayarladım.',
        'Talep üzerine görsel üretimini otomatikleştirerek yaratıcı iş akışlarını hızlandırdım.',
      ],
    },
    challenges: {
      en: [
        'Fine-tuning LoRA weights to achieve consistent style across diverse prompts.',
        'Managing GPU memory and training time for efficient model iteration.',
        'Balancing creative flexibility with brand consistency requirements.',
      ],
      tr: [
        'Çeşitli istemlerde (prompts) tutarlı stil elde etmek için LoRA ağırlıklarının ince ayarı.',
        'Verimli model iterasyonu için GPU belleği ve eğitim süresini yönetmek.',
        'Marka tutarlılığı gereksinimleri ile yaratıcı esnekliği dengelemek.',
      ],
    },
    accomplishments: {
      en: [
        'Successfully trained multiple LoRA models producing production-ready visuals.',
        'Reduced visual content creation time by automating the generation pipeline.',
        'Achieved consistent brand identity across AI-generated imagery.',
      ],
      tr: [
        'Üretime hazır görseller üreten çoklu LoRA modellerini başarıyla eğittim.',
        'Oluşturma hattını otomatikleştirerek görsel içerik oluşturma süresini azalttım.',
        'Yapay zeka tarafından oluşturulan görüntülerde tutarlı marka kimliği sağladım.',
      ],
    },
  },
  {
    id: 4,
    category: ProjectCategories.Robotics,
    src: '/project-img/smart-home.webp',
    title: {
      en: 'End-to-End Smart Home Architecture',
      tr: 'Uçtan Uca Akıllı Ev Mimarisi',
    },
    description: {
      en: 'Architected an autonomous smart home ecosystem managing 20+ IoT nodes.',
      tr: "20'den fazla IoT düğümünü yöneten otonom bir akıllı ev ekosistemi tasarladım.",
    },
    sourceUrl: null,
    youtubeUrl: null,
    githubUrl: null,
    startDate: '2025-09-01',
    endDate: null,
    technologyStack: [
      'IoT',
      'Home Assistant',
      'Networking',
      'System Architecture',
      'Automation',
    ],
    features: {
      en: [
        'Achieved 99.9% system uptime by resolving IP conflicts and applying network traffic segmentation (IP zoning).',
        'Designed the system with scalability, fault isolation, and operational stability in mind.',
        'Integrated diverse IoT devices into a unified, centralized control dashboard.',
      ],
      tr: [
        'IP çakışmalarını çözerek ve ağ trafiği segmentasyonu (IP zoning) uygulayarak %99.9 sistem çalışma süresi elde ettim.',
        'Sistemi ölçeklenebilirlik, hata izolasyonu ve operasyonel kararlılık odağıyla tasarladım.',
        'Farklı IoT cihazlarını birleşik, merkezi bir kontrol panelinde entegre ettim.',
      ],
    },
    challenges: {
      en: [
        'Managing network congestion and interference among numerous IoT devices.',
        'Ensuring secure local access without relying on cloud services.',
        'Standardizing communication across different IoT protocols (Zigbee, WiFi, etc.).',
      ],
      tr: [
        'Çok sayıda IoT cihazı arasındaki ağ sıkışıklığını ve paraziti yönetmek.',
        'Bulut hizmetlerine güvenmeden güvenli yerel erişim sağlamak.',
        'Farklı IoT protokolleri (Zigbee, WiFi vb.) arasında iletişimi standartlaştırmak.',
      ],
    },
    accomplishments: {
      en: [
        'Built a robust, self-healing smart home network with minimal downtime.',
        'Eliminated cloud dependency for core home automation functions.',
        'Created a scalable foundation for adding future IoT nodes seamlessly.',
      ],
      tr: [
        'Minimum kesinti süresine sahip, sağlam ve kendi kendini onaran bir akıllı ev ağı kurdum.',
        'Temel ev otomasyonu işlevleri için bulut bağımlılığını ortadan kaldırdım.',
        'Gelecekteki IoT düğümlerini sorunsuz bir şekilde eklemek için ölçeklenebilir bir temel oluşturdum.',
      ],
    },
  },
  {
    id: 9,
    category: ProjectCategories.Web,
    src: '/project-img/travel.webp',
    title: {
      en: 'Interactive 3D Travel Log',
      tr: 'İnteraktif 3D Seyahat Günlüğü',
    },
    description: {
      en: 'A fully interactive 3D globe simulation built with React Three Fiber, visualizing travel routes with shader-powered immersive experiences.',
      tr: 'React Three Fiber ile geliştirilmiş, tamamen interaktif 3D dünya simülasyonu. Seyahat rotalarımı görselleştiren, shader teknolojileriyle güçlendirilmiş bir deneyim.',
    },
    sourceUrl: 'https://dunya.mertgunes.com',
    youtubeUrl: null,
    githubUrl: null,
    startDate: '2025-01-01',
    endDate: null,
    technologyStack: [
      'React Three Fiber',
      'Drei',
      'GLSL Shaders',
      'Next.js',
      'Framer Motion',
    ],
    features: {
      en: [
        'Real-time 3D globe rendering with custom GLSL shaders for atmospheric and ocean effects.',
        'Interactive country selection with smooth camera animations and zoom transitions.',
        'Detailed city-level venue gallery with photo carousels and visit timeline.',
      ],
      tr: [
        "Atmosfer ve okyanus efektleri için özel GLSL shader'ları ile gerçek zamanlı 3D küre render.",
        'Akıcı kamera animasyonları ve zoom geçişleriyle interaktif ülke seçimi.',
        'Fotoğraf karuselleri ve ziyaret zaman çizelgesi ile detaylı şehir düzeyinde mekan galerisi.',
      ],
    },
    challenges: {
      en: [
        'Achieving smooth 60fps performance with complex shader calculations on the globe.',
        'Implementing seamless transitions between globe view and detailed map views.',
        'Optimizing Three.js scene for mobile devices with limited GPU resources.',
      ],
      tr: [
        'Küre üzerinde karmaşık shader hesaplamalarıyla akıcı 60fps performans sağlamak.',
        'Küre görünümü ile detaylı harita görünümleri arasında kesintisiz geçişler uygulamak.',
        'Three.js sahnesini sınırlı GPU kaynaklı mobil cihazlar için optimize etmek.',
      ],
    },
    accomplishments: {
      en: [
        'Built a production-ready 3D travel visualization that runs smoothly across all devices.',
        'Created a unique, immersive way to showcase travel experiences beyond traditional photo galleries.',
        'Achieved sub-second load times with optimized asset loading and code splitting.',
      ],
      tr: [
        'Tüm cihazlarda akıcı çalışan, üretime hazır bir 3D seyahat görselleştirmesi oluşturdum.',
        'Geleneksel fotoğraf galerilerinin ötesinde seyahat deneyimlerini sergilemek için benzersiz, sürükleyici bir yol yarattım.',
        'Optimize edilmiş asset yükleme ve kod bölme ile saniye altı yükleme süreleri elde ettim.',
      ],
    },
  },
  {
    id: 5,
    category: ProjectCategories.Web,
    src: '/project-img/industrial-dashboard.webp',
    title: {
      en: 'Industrial Dashboard',
      tr: 'Endüstriyel Dashboard',
    },
    description: {
      en: 'A real-time data visualization dashboard tracking factory service performance metrics.',
      tr: 'Fabrika servis performansını gerçek zamanlı takip eden veri görselleştirme paneli.',
    },
    sourceUrl: 'https://mertgunes.me',
    youtubeUrl: null,
    githubUrl: null,
    startDate: '2025-08-01',
    endDate: '2025-10-01',
    technologyStack: [
      'Python',
      'Streamlit',
      'Pandas',
      'Data Analysis',
      'Visualization',
    ],
    features: {
      en: [
        'Real-time tracking of critical service KPIs and operational metrics.',
        'Interactive data filtering and drill-down capabilities for root cause analysis.',
        'Automated data ingestion from diverse industrial data sources.',
      ],
      tr: [
        "Kritik servis KPI'larının ve operasyonel metriklerin gerçek zamanlı takibi.",
        'Kök neden analizi için interaktif veri filtreleme ve detaylandırma yetenekleri.',
        'Çeşitli endüstriyel veri kaynaklarından otomatik veri alımı.',
      ],
    },
    challenges: {
      en: [
        'Handling large datasets efficiently within a web-based dashboard.',
        'Ensuring data accuracy and consistency across different reporting periods.',
        'Designing an intuitive UI for non-technical operational staff.',
      ],
      tr: [
        'Web tabanlı bir panel içinde büyük veri setlerini verimli bir şekilde işlemek.',
        'Farklı raporlama dönemleri arasında veri doğruluğunu ve tutarlılığını sağlamak.',
        'Teknik olmayan operasyonel personel için sezgisel bir arayüz tasarlamak.',
      ],
    },
    accomplishments: {
      en: [
        'Improved operational visibility by providing instant access to key performance data.',
        'Reduced reporting time from days to minutes through automation.',
        'Empowered management to make data-driven decisions faster.',
      ],
      tr: [
        'Temel performans verilerine anında erişim sağlayarak operasyonel görünürlüğü artırdım.',
        'Otomasyon sayesinde raporlama süresini günlerden dakikalara indirdim.',
        'Yönetimin daha hızlı, veri odaklı kararlar almasını sağladım.',
      ],
    },
  },
  {
    id: 6,
    category: ProjectCategories.Robotics,
    src: '/project-img/fabarm.webp',
    title: {
      en: 'FabArm: 5-DOF Robotic Arm',
      tr: 'FabArm: 5 Eksenli Robot Kol',
    },
    description: {
      en: 'Designed and prototyped a 5-DOF robotic arm mounted on an autonomous mecanum-wheel platform.',
      tr: 'Otonom mekanum tekerlekli platform üzerine monte edilen 5 serbestlik dereceli (5-DOF) bir robot kol tasarladım ve prototipini ürettim.',
    },
    sourceUrl: null,
    youtubeUrl: null,
    githubUrl: null,
    startDate: '2022-09-01',
    endDate: '2023-06-01',
    technologyStack: [
      'Robotics',
      'C++',
      'SolidWorks',
      'Embedded Systems',
      'Control Systems',
    ],
    features: {
      en: [
        'Integrated SolidWorks mechanical design with C++-based control logic for motion and coordination.',
        'Implemented inverse kinematics for precise end-effector positioning.',
        'Designed a custom autonomous mecanum-wheel base for omnidirectional mobility.',
      ],
      tr: [
        'Hareket ve koordinasyon için SolidWorks mekanik tasarımını C++ tabanlı kontrol mantığıyla entegre ettim.',
        'Hassas uç işlevci konumlandırması için ters kinematik uyguladım.',
        'Çok yönlü hareket kabiliyeti için özel bir otonom mekanum tekerlekli taban tasarladım.',
      ],
    },
    challenges: {
      en: [
        'Synchronizing the 5-DOF arm movements with the mobile platform.',
        'Calculating real-time kinematics on limited embedded hardware.',
        'Optimizing power distribution between the arm and the drive train.',
      ],
      tr: [
        '5 eksenli kol hareketlerini mobil platformla senkronize etmek.',
        'Sınırlı gömülü donanım üzerinde gerçek zamanlı kinematik hesaplamak.',
        'Kol ve güç aktarım organları arasındaki güç dağıtımını optimize etmek.',
      ],
    },
    accomplishments: {
      en: [
        'Successfully built a functional prototype demonstrating autonomous pick-and-place capabilities.',
        'Showcased the project at Ticaret University engineering exhibition.',
        'Bridged mechanical design and software control for a complex mechatronic system.',
      ],
      tr: [
        'Otonom alma-bırakma yeteneklerini gösteren işlevsel bir prototipi başarıyla inşa ettim.',
        'Projeyi Ticaret Üniversitesi mühendislik sergisinde sergiledim.',
        'Karmaşık bir mekatronik sistem için mekanik tasarım ve yazılım kontrolünü birleştirdim.',
      ],
    },
  },
  {
    id: 7,
    category: ProjectCategories.Robotics,
    src: '/project-img/pulsar.webp',
    title: {
      en: 'Pulsar Electromobile',
      tr: 'Pulsar Elektromobil',
    },
    description: {
      en: 'Led the mechanical design team for Teknofest Efficiency Challenge, engineering a highly efficient electric vehicle.',
      tr: 'Teknofest Efficiency Challenge için mekanik tasarım ekibine liderlik ederek yüksek verimli bir elektrikli araç mühendisliği yaptım.',
    },
    sourceUrl: null,
    youtubeUrl: null,
    githubUrl: null,
    startDate: '2022-09-01',
    endDate: '2023-03-01',
    technologyStack: [
      'Mechanical Design',
      'SolidWorks',
      'Carbon Fiber',
      'Team Leadership',
      'Automotive Engineering',
    ],
    features: {
      en: [
        'Led the mechanical design team and engineered a carbon-fiber chassis.',
        'Achieved ~40% weight reduction, directly contributing to energy efficiency and competition performance.',
        'Optimized aerodynamic profile to minimize drag coefficient.',
      ],
      tr: [
        'Mekanik tasarım ekibine liderlik ettim ve karbon fiber şasi mühendisliğini üstlendim.',
        '~%40 ağırlık azaltımı sağlayarak enerji verimliliğine ve yarışma performansına doğrudan katkıda bulundum.',
        'Hava sürtünme katsayısını en aza indirmek için aerodinamik profili optimize ettim.',
      ],
    },
    challenges: {
      en: [
        'Manufacturing a complex carbon-fiber chassis with limited resources.',
        'Balancing structural integrity with extreme weight reduction goals.',
        'Coordinating a multidisciplinary team under strict competition deadlines.',
      ],
      tr: [
        'Sınırlı kaynaklarla karmaşık bir karbon fiber şasi üretmek.',
        'Yapısal bütünlüğü aşırı ağırlık azaltma hedefleriyle dengelemek.',
        'Sıkı yarışma teslim tarihleri altında çok disiplinli bir ekibi koordine etmek.',
      ],
    },
    accomplishments: {
      en: [
        'Competed in Teknofest Efficiency Challenge with a competitive vehicle.',
        'Successfully reduced vehicle weight significantly compared to previous iterations.',
        'Gained hands-on experience in automotive project management and composite manufacturing.',
      ],
      tr: [
        "Teknofest Efficiency Challenge'da rekabetçi bir araçla yarıştım.",
        'Aracın ağırlığını önceki iterasyonlara göre önemli ölçüde azaltmayı başardım.',
        'Otomotiv proje yönetimi ve kompozit üretiminde uygulamalı deneyim kazandım.',
      ],
    },
  },
  {
    id: 8,
    category: ProjectCategories.Web,
    src: '/project-img/scifi-portfolio.webp',
    title: {
      en: 'Personal Portfolio Website',
      tr: 'Kişisel Portföy Web Sitesi',
    },
    description: {
      en: 'A professional, minimalist portfolio website built with Next.js and Framer Motion — featuring a technical, engineering-inspired background and a clean, architectural design system.',
      tr: 'Next.js ve Framer Motion ile oluşturulmuş profesyonel ve minimalist bir portföy web sitesi — teknik, mühendislik odaklı bir arka plan ve temiz, mimari bir tasarım sistemi sunuyor.',
    },
    sourceUrl: 'https://scifi.mertgunes.com/',
    youtubeUrl: null,
    githubUrl: null,
    startDate: '2025-02-01',
    endDate: null,
    technologyStack: [
      'Next.js',
      'TypeScript',
      'Framer Motion',
      'Tailwind CSS',
      'Vercel',
    ],
    features: {
      en: [
        'Dynamic engineering-inspired technical background.',
        'Professional, high-contrast typography and layout.',
        'Fully responsive and performance-optimized design.',
      ],
      tr: [
        'Dinamik, mühendislikten ilham alan teknik arka plan.',
        'Profesyonel, yüksek kontrastlı tipografi ve yerleşim.',
        'Tamamen duyarlı ve performans odaklı tasarım.',
      ],
    },
    challenges: {
      en: [
        'Designing a minimal yet engaging technical aesthetic.',
        'Ensuring consistency across diverse content sections.',
      ],
      tr: [
        'Minimal ancak etkileyici bir teknik estetik tasarlamak.',
        'Farklı içerik bölümleri arasında tutarlılık sağlamak.',
      ],
    },
    accomplishments: {
      en: [
        'Established a strong professional brand identity.',
        'Achieved high accessibility and performance standards.',
      ],
      tr: [
        'Güçlü bir profesyonel marka kimliği oluşturuldu.',
        'Yüksek erişilebilirlik ve performans standartlarına ulaşıldı.',
      ],
    },
  },
];
