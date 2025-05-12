// Store translations for both pages
const translations = {
  'index': {
    'ar': {
      'title': 'المخترعون',
      'nav_courses': 'كورساتنا',
      'nav_why': 'لماذا مخترعون',
      'nav_projects': 'إنجازاتنا',
      'nav_pricing': 'الأسعار',
      'nav_faq': 'الأسئلة الشائعة',
      'book_now': 'احجز الان',
      'hero_title_1': 'رحلة',
      'hero_title_2': 'الإكتشاف',
      'hero_title_3': 'تبدأ من هنا',
      'list_item_1': 'برامج تعليمية مصممة للأطفال لصقل مهاراتهم',
      'list_item_2': 'نمزج بين التعلم و المتعة من خلال مشاريع عملية تنمي التفكير و الإبداع',
      'list_item_3': 'معنا, لا يتعلم الطفل فحسب, بل يصنع شيئا يعبر به عن ذاته',
      'contact_us': 'تواصل معنا',
      'discover_platform': 'اكتشف منصة التعلم الإلكتروني',
      'courses_title': 'كورساتنا',
      'courses_desc': 'مجموعة من البرامج التعليمية الممتعة التي تنمي مهارات طفلك وتفتح له أبواب المستقبل',
      'course1_title': 'الروبوتات والذكاء الاصطناعي',
      'course1_desc1': 'يتعلم الأطفال تجميع الروبوتات التعليمية بأجزاء مختلفة واستخدام أدوات برمجة بسيطة',
      'course1_desc2': 'يستخدم خوارزميات الذكاء الاصطناعي مثل التعلم الآلي واتخاذ القرارات',
      'course1_desc3': 'نظريات مبسطة وسهلة الفهم',
      'course1_desc4': 'ينخرط في التفكير المنطقي والتحليل العملي من خلال مشاريع عملية خطوة بخطوة واستكشاف',
      'course2_title': 'تصميم وتطوير المواقع الإلكترونية',
      'course2_desc1': 'يتعلم الأطفال كيفية إنشاء مواقع ويب ذات استخدامات مختلفة',
      'course2_desc2': 'برمجة بسيطة في HTML، CSS، والمزيد',
      'course2_desc3': 'يكتسب عملياً هيكل الموقع وكيفية تصميمها بفعالية وجاذبية',
      'course2_desc4': 'يمارس مشاريع عملية ويطبق المحتوى من خلال تطبيقات ومشاريع فعلية',
      'course3_title': 'تصميم الجرافيك',
      'course3_desc1': 'يكتشف الأطفال أساسيات التصميم الفني من خلال برامج الجرافيك والفنون الرقمية',
      'course3_desc2': 'يستخدم أدوات تصميم احترافية مبسطة للمبتدئين لإنتاج صور ورسومات جذابة',
      'course3_desc3': 'يتعلم تقنيات الألوان وتأثيرات الصور ويطور مهارات للتعبير عن الأفكار باحترافية وفنية',
      'course4_title': 'برمجة تطبيقات الهاتف',
      'course4_desc1': 'يتعلم الأطفال كيفية بناء تطبيقات بسيطة باستخدام أدوات سهلة الاستخدام ومناسبة لأعمارهم',
      'course4_desc2': 'يحدد مكونات التطبيق ويتفاعل مع وظائف التطبيق بطريقة عملية وتفاعلية',
      'course4_desc3': 'يطور فكرة الحلول من المشكلة إلى المنتج، مما يعزز مهاراتهم التكنولوجية والابتكارية',
      'course5_title': 'بايثون (Python)',
      'course5_desc1': 'يتعلم الأطفال بايثون ببساطة وأوامرها، حيث إنها من أشهر لغات البرمجة عالميا',
      'course5_desc2': 'يطبق ما يتعلمه في مشاريع برمجية منظمة لبناء مهارات التفكير',
      'course5_desc3': 'يؤسس أساسا قويا في البرمجة لتعلم لغات وأدوات أكثر تقدما في المستقبل',
      'why_title': 'لماذا تختار "مخترعون" لأطفالك؟',
      'why_desc': 'لأننا لا نعلم فقط… بل نطلق طاقات الأطفال ليفكروا، ويبتكروا، ويصنعوا مستقبلهم بأيديهم',
      'why_item1_title': 'التعلم العملي من اليوم الأول',
      'why_item1_desc': 'نساعد الطفل على إنجاز مشروع حقيقي بيديه، و ليس مجرد الملاحظة.',
      'why_item2_title': 'محتوى مناسب للعمر',
      'why_item2_desc': 'برامج تعليمية مصممة خصيصاً لسنه واهتماماته، دون تعقيد.',
      'why_item3_title': 'تفاعل مباشر مع المعلمين',
      'why_item3_desc': 'تتيح الدروس المباشرة للطفل المشاركة و طرح الأسئلة و الإجابة عليها.',
      'why_item4_title': 'نتائج واضحة وإنجاز حقيقي',
      'why_item4_desc': 'ينتهي كل كورس بمشروع عملي و شهادة معتمدة.',
      'why_item5_title': 'بيئة تعليمية آمنة ومحفزة',
      'why_item5_desc': 'تجربة تعليمية ممتعة و داعمة تشجع على الابتكار.',
      'projects_title': 'أفكار تتحول لإنجازات',
      'projects_desc': 'من فكرة بسيطة إلى مشروع حقيقي، هنا نحتفل بإبداعات الطلاب التي أصبحت واقعا ملموسا',
      'testimonials_title': 'أصوات النجاح طلابنا يحكون قصتهم',
      'analysis_branches': 'فروع في مصر',
      'analysis_satisfaction': 'معدل رضا الطلاب',
      'analysis_parents': 'أولياء أمور راضون',
      'analysis_graduated': 'طالب متخرج',
      'journey_title': 'رحلة تعلم طفلك معنا',
      'journey_desc': 'مع كل تجربة جديدة، نزرع في طفلك حب التعلم وشغف الاكتشاف',
      'plan_step1_title': 'حضور أسبوعي مرن',
      'plan_step1_desc': 'حصّة واحدة أسبوعياً، سواء أونلاين أو حضورياً.',
      'plan_step2_title': 'تطبيق عملي أثناء الحصة',
      'plan_step2_desc': 'ينجز الطفل مشروعاً بسيطاً خلال كل حصة لترسيخ المعلومات.',
      'plan_step3_title': 'فيديوهات مراجعة ومتابعة',
      'plan_step3_desc': 'نوفر مواد مسجلة للمراجعة و التعلم الإضافي طوال الأسبوع.',
      'plan_step4_title': 'مشروع تخرج في نهاية البرنامج',
      'plan_step4_desc': 'ينجز الطفل مشروعاً نهائياً يلخص فيه كل ما تعلمه و يعرضه بكل فخر.',
      'quote': '"نؤمن أن كل خطوة في رحلتنا مع طفلك هي بداية لحلم جديد يكبر معه"',
      'partners_title': 'مع شركائنا نفتح لأطفالكم أبواب المستقبل',
      'pricing_title': 'استثمر في مهارات طفلك مع أفضل الخيارات',
      'features_title': 'كل الخطط تشمل:',
      'feature_item1': 'حضور في مجموعات صغيرة (بحد أقصى ٧ طلاب)',
      'feature_item2': 'مهام عملية في كل حصة',
      'feature_item3': 'فيديوهات تعليمية مدى الحياة',
      'feature_item4': 'متابعة فردية من خلال الواجبات',
      'feature_item5': 'لا توجد رسوم إضافية على المعدات',
      'feature_item6': 'شهادة معتمدة عند الانتهاء من كل مستوى',
      'feature_item7': 'دعم فني مستمر للرد على أسئلة الأطفال',
      'feature_item8': 'بيئة تعليمية ممتعة و محفزة على الإبداع',
      'plan_beginner_title': 'الخطة المبتدئة',
      'plan_beginner_desc': 'مثالية لبداية قوية: يكتسب طفلك مهارات أساسية ويبدأ مشاريعه العملية الأولى بثقة',
      'plan_intermediate_title': 'الخطة المتوسطة',
      'plan_intermediate_desc': 'قفزة نوعية في مهاراته: يتعمق طفلك ويُنفذ مشاريع أكثر تقدماً تؤهله للمرحلة التالية',
      'plan_advanced_title': 'الخطة المتقدمة',
      'plan_advanced_badge': 'الأكثر تميزا',
      'plan_advanced_desc': 'رحلة نحو الاحتراف: يصل طفلك لمستوى متقدم، بمهارات عملية قادرة على إحداث فرق حقيقي',
      'faq_title': 'كل اللي محتاج تعرفه قبل بداية رحلة طفلك معنا',
      'faq_q1': 'هل يوجد تطبيق عملي للمناهج؟',
      'faq_a1': 'نعم بالتأكيد! في مخترعون نعتمد كليا على التعلم التجريبي، ويوجد في كل محاضرة مشروعين على الأقل',
      'faq_q2': 'كيف اقوم بالحجز؟',
      'faq_a2': 'يمكنك التواصل معنا على الأرقام الموضحة بالموقع، او الحجز عن طريق زر \'احجز الآن\'، او عن طريق الواتساب',
      'faq_q3': 'ما هي طرق الحضور المتاحة؟',
      'faq_a3': 'لدينا 4 أنواع من الحضور (حضور فعلي في أحد الفروع – حضور أونلاين – حضور مدمج بين الأونلاين والفروع – شراء كورسات مسجلة على منصة التعلم الإلكتروني)',
      'faq_q4': 'اين توجد فروعكم؟',
      'faq_a4': 'لدينا فروع في محافظات (القاهرة – الإسكندرية – الغردقة) و لدينا أكثر من فرع و أكثر من مدرسة لذلك يفضل من العميل تحديد منطقته السكنية، و نحن سوف نختار له أقرب مكان لضمان راحتك',
      'faq_q5': 'ما هي المواعيد؟',
      'faq_a5': 'عند التسجيل سوف يقوم الكادر المتخصص بالتواصل معك لتحديد أنسب ميعاد لك',
      'faq_q6': 'هل يمكنني تجربة الأكاديمية قبل البدء؟',
      'faq_a6': 'نعم بالتأكيد، نحن في مخترعون واثقون من رضا عملائنا، لذلك نتيح حضور المحاضرة الأولى مجانًا',
      'contact_form_title': 'سجل اهتمامك وابدأ رحلة طفلك',
      'form_name_ph': 'الاسم',
      'form_email_ph': 'البريد الإلكتروني',
      'form_message_ph': 'اكتب رسالتك',
      'form_submit_btn': 'أرسل رسالتك',
      'footer_slogan': 'نصنع مستقبل المبدعين',
      'footer_desc': 'نؤمن بقدرات كل طفل و نصنع معه بداية جديدة نحو المستقبل',
      'footer_courses_heading': 'كورساتنا',
      'footer_course1': 'الروبوتات والذكاء الاصطناعي',
      'footer_course2': 'تصميم وتطوير المواقع الإلكترونية',
      'footer_course3': 'تصميم الجرافيك',
      'footer_course4': 'برمجة تطبيقات الهاتف',
      'footer_course5': 'بايثون',
      'footer_discover_platform': 'اكتشف منصة التعلم الإلكتروني',
      'footer_copyright': '© 2018 - 2025 أكاديمية مخترعون، كل الحقوق محفوظة'
    },
    'en': {
      'title': 'Mokhtareon',
      'nav_courses': 'Our Courses',
      'nav_why': 'Why Mokhtareon',
      'nav_projects': 'Our Achievements',
      'nav_pricing': 'Pricing',
      'nav_faq': 'FAQ',
      'book_now': 'Book Now',
      'hero_title_1': 'The Journey of',
      'hero_title_2': 'Discovery',
      'hero_title_3': 'Starts Here',
      'list_item_1': 'Educational programs designed for children to develop their skills',
      'list_item_2': 'We combine learning and fun through practical projects that develop thinking and creativity',
      'list_item_3': 'With us, children don\'t just learn, they create something that expresses themselves',
      'contact_us': 'Contact Us',
      'discover_platform': 'Discover E-Learning Platform',
      'courses_title': 'Our Courses',
      'courses_desc': 'A collection of fun educational programs that develop your child\'s skills and open doors to the future',
      'course1_title': 'Robotics and Artificial Intelligence',
      'course1_desc1': 'Children learn to assemble educational robots with different parts and use simple programming tools',
      'course1_desc2': 'Uses artificial intelligence algorithms such as machine learning and decision making',
      'course1_desc3': 'Simplified and easy-to-understand theories',
      'course1_desc4': 'Engages in logical thinking and practical analysis through step-by-step practical projects and exploration',
      'course2_title': 'Website Design and Development',
      'course2_desc1': 'Children learn how to create websites with different uses',
      'course2_desc2': 'Simple programming in HTML, CSS, and more',
      'course2_desc3': 'Practically acquires website structure and how to design them effectively and attractively',
      'course2_desc4': 'Practices practical projects and applies content through actual applications and projects',
      'course3_title': 'Graphic Design',
      'course3_desc1': 'Children discover the basics of artistic design through graphic programs and digital arts',
      'course3_desc2': 'Uses simplified professional design tools for beginners to produce attractive images and graphics',
      'course3_desc3': 'Learns color techniques and image effects and develops skills to express ideas professionally and artistically',
      'course4_title': 'Mobile App Programming',
      'course4_desc1': 'Children learn how to build simple applications using beginner-friendly tools suitable for their age',
      'course4_desc2': 'Identifies application components and interacts with application functions in a practical and interactive way',
      'course4_desc3': 'Develops the idea of solutions from problem to product, enhancing their technological and innovative skills',
      'course5_title': 'Python',
      'course5_desc1': 'Children learn Python simply and its commands, as it is one of the most popular programming languages globally',
      'course5_desc2': 'Applies what they learn in organized programming projects to build thinking skills',
      'course5_desc3': 'Establishes a strong foundation in programming to learn more advanced languages and tools in the future',
      'why_title': 'Why Choose "Mokhtareon" for Your Children?',
      'why_desc': 'Because we don\'t just teach... we unleash children\'s potential to think, innovate, and create their future with their own hands',
      'why_item1_title': 'Practical learning from day one',
      'why_item1_desc': 'We help the child to carry out a real project with their own hands, not just observing.',
      'why_item2_title': 'Age-appropriate content',
      'why_item2_desc': 'Educational programs tailored to his age and interests, without complexity.',
      'why_item3_title': 'Live interaction with teachers',
      'why_item3_desc': 'Live lessons allow children to participate, ask, and answer questions.',
      'why_item4_title': 'Clear results and real achievement',
      'why_item4_desc': 'Each course ends with a practical project and a certified certificate.',
      'why_item5_title': 'Safe and stimulating learning environment',
      'why_item5_desc': 'A fun and supportive learning experience that encourages innovation.',
      'projects_title': 'Ideas Turned Into Achievements',
      'projects_desc': 'From a simple idea to a real project, here we celebrate student creations that have become tangible reality',
      'testimonials_title': 'Voices of Success: Our Students Tell Their Stories',
      'analysis_branches': 'branches in Egypt',
      'analysis_satisfaction': 'student satisfaction rate',
      'analysis_parents': 'satisfied parents',
      'analysis_graduated': 'graduated student',
      'journey_title': 'Your Child\'s Learning Journey With Us',
      'journey_desc': 'With every new experience, we instill a love of learning and passion for discovery in your child',
      'plan_step1_title': 'Flexible weekly attendance',
      'plan_step1_desc': 'One session per week, either online or in-person.',
      'plan_step2_title': 'Practical application during the session',
      'plan_step2_desc': 'The child completes a simple project during each session to reinforce information.',
      'plan_step3_title': 'Review and continuation videos',
      'plan_step3_desc': 'We provide recorded materials for review and further learning throughout the week.',
      'plan_step4_title': 'Graduation project at the end of the program',
      'plan_step4_desc': 'The child completes a final project summarizing everything they have learned and presents it proudly.',
      'quote': '"We believe that every step in our journey with your child is the beginning of a new dream that grows with them"',
      'partners_title': 'With our partners, we open the doors of the future for your children',
      'pricing_title': 'Invest in your child\'s skills with the best options',
      'features_title': 'All plans include:',
      'feature_item1': 'Small group attendance (maximum 7 students)',
      'feature_item2': 'Practical tasks in each session',
      'feature_item3': 'Lifetime educational videos',
      'feature_item4': 'Individual follow-up through assignments',
      'feature_item5': 'No additional equipment fees',
      'feature_item6': 'Certified certificate upon completion of each level',
      'feature_item7': 'Continuous technical support to answer children\'s questions',
      'feature_item8': 'A fun and stimulating learning environment for creativity',
      'plan_beginner_title': 'Beginner Plan',
      'plan_beginner_desc': 'Ideal for a strong start: your child gains basic skills and confidently begins their first practical projects',
      'plan_intermediate_title': 'Intermediate Plan',
      'plan_intermediate_desc': 'A qualitative leap in their skills: your child delves deeper and executes more advanced projects qualifying them for the next stage',
      'plan_advanced_title': 'Advanced Plan',
      'plan_advanced_badge': 'Most Popular',
      'plan_advanced_desc': 'A journey towards professionalism: your child reaches an advanced level, with practical skills capable of making a real difference',
      'faq_title': 'Everything you need to know before starting your child\'s journey with us',
      'faq_q1': 'Is there practical application of the curricula?',
      'faq_a1': 'Yes, absolutely! At Mokhtareon, we rely entirely on experiential learning, and there are at least two projects in each lecture',
      'faq_q2': 'How do I book?',
      'faq_a2': 'You can contact us at the numbers listed on the website, or book via the "Book Now" button, or via WhatsApp',
      'faq_q3': 'What are the available attendance methods?',
      'faq_a3': 'We have 4 types of attendance (in-person at one of our branches – online attendance – blended attendance between online and branches – purchasing recorded courses on the e-learning platform)',
      'faq_q4': 'Where are your branches?',
      'faq_a4': 'We have branches in governorates (Cairo – Alexandria – Hurghada) and we have more than one branch and more than one school, so it is preferable for the client to specify their residential area, and we will choose the closest area to ensure your comfort',
      'faq_q5': 'What are the timings?',
      'faq_a5': 'Upon registration, the specialized staff will contact you to determine the most suitable time for you',
      'faq_q6': 'Can I try the academy before starting?',
      'faq_a6': 'Yes, absolutely, we at Mokhtareon are confident in our customers\' satisfaction, so we allow attending the first lecture for free',
      'contact_form_title': 'Register your interest and start your child\'s journey',
      'form_name_ph': 'Name',
      'form_email_ph': 'Email Address',
      'form_message_ph': 'Write your message',
      'form_submit_btn': 'Send your message',
      'footer_slogan': 'We Create the Future of Innovators',
      'footer_desc': 'We believe in every child\'s abilities and create with them a new beginning towards the future',
      'footer_courses_heading': 'Our Courses',
      'footer_course1': 'Robotics and Artificial Intelligence',
      'footer_course2': 'Website Design and Development',
      'footer_course3': 'Graphic Design',
      'footer_course4': 'Mobile App Programming',
      'footer_course5': 'Python',
      'footer_discover_platform': 'Discover E-Learning Platform',
      'footer_copyright': '© 2018 - 2025 Mokhtareon Academy, All Rights Reserved'
    }
  },
  'book': {
    'ar': {
      'page_title': 'احجز الآن - المخترعون',
      'main_heading': 'احجز مكان طفلك معنا',
      'sub_heading': 'اختر المسار المناسب وابدأ رحلة طفلك نحو عالم التكنولوجيا والابتكار',
      'form_title': 'استمارة الحجز',
      'child_name_ph': 'اسم الطفل',
      'child_age_ph': 'عمر الطفل',
      'parent_name_ph': 'اسم ولي الأمر',
      'parent_phone_ph': 'رقم الهاتف',
      'parent_email_ph': 'البريد الإلكتروني',
      'course_select': 'اختر الكورس',
      'course_option_default': 'اختر الكورس',
      'course_option1': 'الروبوتات والذكاء الاصطناعي',
      'course_option2': 'تصميم وتطوير المواقع الإلكترونية',
      'course_option3': 'تصميم الجرافيك',
      'course_option4': 'برمجة تطبيقات الهاتف',
      'course_option5': 'بايثون',
      'location_ph': 'موقع الحضور',
      'submit_button': 'تأكيد الحجز',
      'contact_heading': 'تواصل معنا',
      'address': 'العنوان',
      'phone': 'الهاتف',
      'email': 'البريد الإلكتروني',
      'back_home': 'العودة للرئيسية'
    },
    'en': {
      'page_title': 'Book Now - Mokhtareon',
      'main_heading': 'Book Your Child\'s Place With Us',
      'sub_heading': 'Choose the right path and start your child\'s journey into the world of technology and innovation',
      'form_title': 'Booking Form',
      'child_name_ph': 'Child\'s Name',
      'child_age_ph': 'Child\'s Age',
      'parent_name_ph': 'Parent\'s Name',
      'parent_phone_ph': 'Phone Number',
      'parent_email_ph': 'Email Address',
      'course_select': 'Select Course',
      'course_option_default': 'Select Course',
      'course_option1': 'Robotics and Artificial Intelligence',
      'course_option2': 'Website Design and Development',
      'course_option3': 'Graphic Design',
      'course_option4': 'Mobile App Programming',
      'course_option5': 'Python',
      'location_ph': 'Attendance Location',
      'submit_button': 'Confirm Booking',
      'contact_heading': 'Contact Us',
      'address': 'Address',
      'phone': 'Phone',
      'email': 'Email',
      'back_home': 'Back to Home'
    }
  }
};

function getCurrentPage() {
  const path = window.location.pathname;
  if (path.includes('book.html')) {
    return 'book';
  }
  return 'index';
}

// Function to translate the page
function translatePage(lang) {
  console.log('Translating page to:', lang);
  const currentPage = getCurrentPage();
  console.log('Current page:', currentPage);
  
  // Store the new language in localStorage immediately
  localStorage.setItem('preferredLanguage', lang);
  
  // Update language indicator
  const langIndicator = document.getElementById('lang-indicator');
  if (langIndicator) {
    langIndicator.textContent = lang === 'ar' ? 'E' : 'AR';
  }
  
  const elements = document.querySelectorAll('[data-translate], [data-translate-placeholder]');
  console.log('Found elements to translate:', elements.length);
  
  if (!translations[currentPage] || !translations[currentPage][lang]) {
    console.error('Translation not found for page or language:', currentPage, lang);
    return;
  }

  elements.forEach(element => {
    const contentKey = element.getAttribute('data-translate');
    const placeholderKey = element.getAttribute('data-translate-placeholder');
    
    if (contentKey) {
      const translation = translations[currentPage][lang][contentKey];
      if (translation) {
        element.innerHTML = translation;
      } else {
        console.warn('No translation found for content key:', contentKey);
      }
    }

    if (placeholderKey) {
      const translation = translations[currentPage][lang][placeholderKey];
      if (translation) {
        element.placeholder = translation;
      } else {
        console.warn('No translation found for placeholder key:', placeholderKey);
      }
    }
  });
  
  // Set direction based on language
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  
  // Add or update the direction style
  let directionStyle = document.getElementById('direction-style');
  if (!directionStyle) {
    directionStyle = document.createElement('style');
    directionStyle.id = 'direction-style';
    document.head.appendChild(directionStyle);
  }
  directionStyle.textContent = `* { direction: ${lang === 'ar' ? 'rtl' : 'ltr'} !important; }`;
  
  // Update the language icon's data-language attribute
  const languageIcon = document.querySelector('.fa-solid.fa-language');
  if (languageIcon) {
    languageIcon.setAttribute('data-language', lang);
  }
  
  // Visual indicator that translation happened
  // const indicator = document.createElement('div');
  // indicator.textContent = 'Language changed to ' + (lang === 'ar' ? 'Arabic' : 'English');
  // indicator.style.position = 'fixed';
  // indicator.style.top = '10px';
  // indicator.style.left = '50%';
  // indicator.style.transform = 'translateX(-50%)';
  // indicator.style.backgroundColor = 'rgba(0,0,0,0.7)';
  // indicator.style.color = 'white';
  // indicator.style.padding = '10px 20px';
  // indicator.style.borderRadius = '5px';
  // indicator.style.zIndex = '9999';
  // document.body.appendChild(indicator);
  
  // setTimeout(() => {
  //   indicator.style.opacity = '0';
  //   indicator.style.transition = 'opacity 0.5s';
  //   setTimeout(() => {
  //     document.body.removeChild(indicator);
  //   }, 500);
  // }, 2000);

  // // Explicitly set the 'translated' class based on language
  const sec1Element = document.querySelector('.sec1');
  if (sec1Element) {
    const shouldTranslate = (lang === 'ar');
    sec1Element.classList.toggle('translated', shouldTranslate);
  }
}

// Make translatePage function globally available
window.translatePage = translatePage;

// Initialize language on page load and hook up the toggle button
document.addEventListener('DOMContentLoaded', () => {
  const languageIcon = document.querySelector('.fa-solid.fa-language');

  // Determine saved or default language
  const savedLanguage = localStorage.getItem('preferredLanguage') || 'ar';
  translatePage(savedLanguage);

  if (languageIcon) {
    // Update icon attribute and styles
    languageIcon.setAttribute('data-language', savedLanguage);
    languageIcon.style.cursor = 'pointer';
    languageIcon.style.fontSize = '1.5rem';
    languageIcon.style.padding = '8px';
    languageIcon.style.color = '#007bff';

    // On-click, switch between Arabic and English
    languageIcon.addEventListener('click', () => {
      const current = document.documentElement.lang;
      const nextLang = current === 'ar' ? 'en' : 'ar';
      translatePage(nextLang);
    });
  }
});
