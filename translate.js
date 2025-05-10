/**
 * Translation script for Mukhtar3oon website
 * Handles language switching between English and Arabic
 */

// Define translations for multiple languages
const translations = {
  en: {
    // Navigation
    nav_courses: "Our Courses",
    nav_why: "Why Mukhtar3oon",
    nav_projects: "Our Achievements",
    nav_pricing: "Pricing",
    nav_faq: "FAQ",
    book_now: "Book Now",
    
    // Form header
    formTitle: "Start Your Child's Educational Journey Today",
    formSubtitle: "Fill out the form below, and our team will contact you to confirm your booking and provide details",
    
    // Form fields
    childName: "Child's Name",
    phoneNumber: "Phone Number",
    residentialArea: "Residential Area",
    childAge: "Child's Age",
    selectAge: "Select Age",
    age68: "6-8 years",
    age911: "9-11 years",
    age1214: "12-14 years",
    age1517: "15-17 years",
    
    // Attendance
    attendanceMethod: "Attendance Method",
    offline: "Offline (Attending at the academy location)",
    online: "Online (Via internet)",
    
    // Appointments
    note: "Attendance is once a week at a fixed time. For your convenience, please select 3 suitable times so we can choose the best one for you.",
    firstAppointment: "First Appointment",
    secondAppointment: "Second Appointment",
    thirdAppointment: "Third Appointment",
    preferredTimeFirst: "Preferred Time for First Appointment",
    preferredTimeSecond: "Preferred Time for Second Appointment",
    preferredTimeThird: "Preferred Time for Third Appointment",
    
    // Days
    sunday: "Sunday",
    monday: "Monday",
    tuesday: "Tuesday",
    wednesday: "Wednesday",
    thursday: "Thursday",
    friday: "Friday",
    saturday: "Saturday",
    
    // Times
    time10am: "10 AM",
    time12pm: "12 PM",
    time2pm: "2 PM",
    time4pm: "4 PM",
    time6pm: "6 PM",
    time8pm: "8 PM",
    
    // Button
    confirm: "Confirm"
  },
  ar: {
    // Navigation
    nav_courses: "دوراتنا",
    nav_why: "لماذا مختارعون",
    nav_projects: "إنجازاتنا",
    nav_pricing: "الأسعار",
    nav_faq: "الأسئلة الشائعة",
    book_now: "احجز الآن",
    
    // Form header
    formTitle: "ابدأ رحلة طفلك التعليمية اليوم",
    formSubtitle: "املأ النموذج أدناه، وسيتواصل فريقنا معك لتأكيد حجزك وتقديم التفاصيل",
    
    // Form fields
    childName: "اسم الطفل",
    phoneNumber: "رقم الهاتف",
    residentialArea: "منطقة السكن",
    childAge: "عمر الطفل",
    selectAge: "اختر العمر",
    age68: "6-8 سنوات",
    age911: "9-11 سنة",
    age1214: "12-14 سنة",
    age1517: "15-17 سنة",
    
    // Attendance
    attendanceMethod: "طريقة الحضور",
    offline: "حضوري (في موقع الأكاديمية)",
    online: "عبر الإنترنت",
    
    // Appointments
    note: "الحضور مرة واحدة في الأسبوع في وقت ثابت. للتسهيل عليك، يرجى اختيار 3 أوقات مناسبة حتى نتمكن من اختيار الأفضل لك.",
    firstAppointment: "الموعد الأول",
    secondAppointment: "الموعد الثاني",
    thirdAppointment: "الموعد الثالث",
    preferredTimeFirst: "الوقت المفضل للموعد الأول",
    preferredTimeSecond: "الوقت المفضل للموعد الثاني",
    preferredTimeThird: "الوقت المفضل للموعد الثالث",
    
    // Days
    sunday: "الأحد",
    monday: "الإثنين",
    tuesday: "الثلاثاء",
    wednesday: "الأربعاء",
    thursday: "الخميس",
    friday: "الجمعة",
    saturday: "السبت",
    
    // Times
    time10am: "10 صباحًا",
    time12pm: "12 ظهرًا",
    time2pm: "2 مساءً",
    time4pm: "4 مساءً",
    time6pm: "6 مساءً",
    time8pm: "8 مساءً",
    // Button
    confirm: "تأكيد"
  }
};

// Default language
let currentLanguage = 'ar';

// Define translatePage globally first
window.translatePage = function(lang) {
  // Store the selected language
  localStorage.setItem('language', lang);
  
  // Set document direction
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;
  
  // Update language button
  const langButton = document.querySelector('.fa-language');
  if (langButton) {
    langButton.setAttribute('data-language', lang);
  }
  
  // Apply translations
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  // Update placeholders
  const placeholders = document.querySelectorAll('[data-translate-placeholder]');
  placeholders.forEach(element => {
    const key = element.getAttribute('data-translate-placeholder');
    if (translations[lang] && translations[lang][key]) {
      element.placeholder = translations[lang][key];
    }
  });
};

// Get browser language or saved preference
function detectLanguage() {
  // Check if a language preference is stored
  const savedLanguage = localStorage.getItem('language');
  
  if (savedLanguage) {
    return savedLanguage;
  }
  
  // Default to Arabic
  return 'ar';
}

// Preserve language when navigating to book.html
window.preserveLanguage = function(link) {
  // Get current language
  const currentLang = localStorage.getItem('language') || 'ar';
  
  // Add language parameter to URL
  const url = new URL(link.href);
  url.searchParams.set('lang', currentLang);
  link.href = url.toString();
  
  return true;
};

// Set the language and update page content
function setLanguage(lang) {
  if (lang !== 'en' && lang !== 'ar') {
    console.error('Unsupported language:', lang);
    return;
  }
  
  currentLanguage = lang;
  localStorage.setItem('language', lang);
  
  // Apply language-specific CSS
  document.body.classList.remove('lang-en', 'lang-ar');
  document.body.classList.add(`lang-${lang}`);
  
  // Update direction based on language
  document.body.style.direction = lang === 'ar' ? 'rtl' : 'ltr';
  
  // Update CSS links
  const cssLinks = document.querySelectorAll('link[rel="stylesheet"]');
  cssLinks.forEach(link => {
    if (link.href.includes('/ltr.css') || link.href.includes('/rtl.css')) {
      const newFileName = lang === 'ar' ? 'rtl.css' : 'ltr.css';
      link.href = link.href.replace(/(ltr|rtl)\.css/, newFileName);
    }
  });
  
  // Update page title
  if (document.title.includes('Mukhtar3oon') || document.title.includes('مختارعون')) {
    document.title = lang === 'ar' ? 'مختارعون - احجز الآن' : 'Mukhtar3oon - Book Now';
  }
  
  // Update content with translations
  updatePageContent();
  
  // Update language switcher if it exists
  updateLanguageSwitcher();
}

// Apply translations to page elements
function updatePageContent() {
  const langData = translations[currentLanguage];
  
  // Update form header if exists
  const formHeader = document.querySelector('.form-header');
  if (formHeader) {
    const formTitle = formHeader.querySelector('h2');
    const formSubtitle = formHeader.querySelector('p');
    
    if (formTitle) formTitle.textContent = langData.formTitle;
    if (formSubtitle) formSubtitle.textContent = langData.formSubtitle;
  }
  
  // Update navigation links if they exist
  const navLinks = document.querySelectorAll('nav a, .nav-link');
  navLinks.forEach(link => {
    const text = link.textContent.trim();
    if (text === 'Our Courses' || text === 'دوراتنا') {
      link.textContent = langData.nav_courses;
    } else if (text === 'Why Mukhtar3oon' || text === 'لماذا مختارعون') {
      link.textContent = langData.nav_why;
    } else if (text === 'Our Achievements' || text === 'إنجازاتنا') {
      link.textContent = langData.nav_projects;
    } else if (text === 'Pricing' || text === 'الأسعار') {
      link.textContent = langData.nav_pricing;
    } else if (text === 'FAQ' || text === 'الأسئلة الشائعة') {
      link.textContent = langData.nav_faq;
    } else if (text === 'Book Now' || text === 'احجز الآن') {
      link.textContent = langData.book_now;
    }
  });
  
  // Update section titles if they exist
  const sectionTitles = document.querySelectorAll('.section-title');
  sectionTitles.forEach(title => {
    const text = title.textContent.trim();
    // Translate based on the content
    if (text.includes("Child's Name") || text === 'اسم الطفل') {
      title.textContent = langData.childName;
    } else if (text.includes("Phone Number") || text === 'رقم الهاتف') {
      title.textContent = langData.phoneNumber;
    } else if (text.includes("Residential Area") || text === 'منطقة السكن') {
      title.textContent = langData.residentialArea;
    } else if (text.includes("Child's Age") || text === 'عمر الطفل') {
      title.textContent = langData.childAge;
    } else if (text.includes("Attendance Method") || text === 'طريقة الحضور') {
      title.textContent = langData.attendanceMethod;
    } else if (text.includes("First Appointment") || text === 'الموعد الأول') {
      title.textContent = langData.firstAppointment;
    } else if (text.includes("Second Appointment") || text === 'الموعد الثاني') {
      title.textContent = langData.secondAppointment;
    } else if (text.includes("Third Appointment") || text === 'الموعد الثالث') {
      title.textContent = langData.thirdAppointment;
    } else if (text.includes("Preferred Time for First") || text === 'الوقت المفضل للموعد الأول') {
      title.textContent = langData.preferredTimeFirst;
    } else if (text.includes("Preferred Time for Second") || text === 'الوقت المفضل للموعد الثاني') {
      title.textContent = langData.preferredTimeSecond;
    } else if (text.includes("Preferred Time for Third") || text === 'الوقت المفضل للموعد الثالث') {
      title.textContent = langData.preferredTimeThird;
    }
  });
  
  // Update select options if they exist
  const ageSelect = document.querySelector('select.form-control');
  if (ageSelect) {
    const options = ageSelect.querySelectorAll('option');
    options.forEach(option => {
      if (option.value === '') {
        option.textContent = langData.selectAge;
      } else if (option.value === '6-8') {
        option.textContent = langData.age68;
      } else if (option.value === '9-11') {
        option.textContent = langData.age911;
      } else if (option.value === '12-14') {
        option.textContent = langData.age1214;
      } else if (option.value === '15-17') {
        option.textContent = langData.age1517;
      }
    });
  }
  
  // Update radio button labels if they exist
  const radioLabels = document.querySelectorAll('.radio-option label');
  radioLabels.forEach(label => {
    const forAttr = label.getAttribute('for');
    // Attendance method
    if (forAttr === 'offline') {
      label.textContent = langData.offline;
    } else if (forAttr === 'online') {
      label.textContent = langData.online;
    }
    
    // Days
    else if (forAttr && forAttr.includes('_')) {
      const parts = forAttr.split('_');
      if (parts[1] === '1') {
        label.textContent = langData.sunday;
      } else if (parts[1] === '2') {
        label.textContent = langData.monday;
      } else if (parts[1] === '3') {
        label.textContent = langData.tuesday;
      } else if (parts[1] === '4') {
        label.textContent = langData.wednesday;
      } else if (parts[1] === '5') {
        label.textContent = langData.thursday;
      } else if (parts[1] === '6') {
        label.textContent = langData.friday;
      } else if (parts[1] === '7') {
        label.textContent = langData.saturday;
      }
    }
    
    // Times
    const text = label.textContent.trim();
    if (text.includes('10 AM') || text.includes('10 صباحًا')) {
      label.textContent = langData.time10am;
    } else if (text.includes('12 PM') || text.includes('12 ظهرًا')) {
      label.textContent = langData.time12pm;
    } else if (text.includes('2 PM') || text.includes('2 مساءً')) {
      label.textContent = langData.time2pm;
    } else if (text.includes('4 PM') || text.includes('4 مساءً')) {
      label.textContent = langData.time4pm;
    } else if (text.includes('6 PM') || text.includes('6 مساءً')) {
      label.textContent = langData.time6pm;
    } else if (text.includes('8 PM') || text.includes('8 مساءً')) {
      label.textContent = langData.time8pm;
    }
  });
  
  // Update note text if exists
  const noteElement = document.querySelector('.note p');
  if (noteElement) {
    noteElement.textContent = langData.note;
  }
  
  // Update button text if exists
  const submitBtn = document.querySelector('.submit-btn');
  if (submitBtn) {
    submitBtn.textContent = langData.confirm;
  }
}

// Create language switcher
function createLanguageSwitcher() {
  // Check if switcher already exists
  if (document.querySelector('.language-switcher')) {
    return;
  }
  
  const switcher = document.createElement('div');
  switcher.className = 'language-switcher';
  switcher.innerHTML = `
    <button class="lang-btn" data-lang="en">English</button>
    <button class="lang-btn" data-lang="ar">العربية</button>
  `;
  
  document.body.insertBefore(switcher, document.body.firstChild);
  
  // Add click event listeners
  const langButtons = switcher.querySelectorAll('.lang-btn');
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.getAttribute('data-lang'));
    });
  });
  
  // Add language switcher styles
  if (!document.getElementById('lang-switcher-styles')) {
    const style = document.createElement('style');
    style.id = 'lang-switcher-styles';
    style.textContent = `
      .language-switcher {
        position: fixed;
        top: 10px;
        right: 10px;
        z-index: 1000;
        display: flex;
        gap: 5px;
      }
      
      .lang-btn {
        padding: 8px 12px;
        border: 1px solid #ddd;
        background-color: white;
        border-radius: 4px;
        cursor: pointer;
        font-family: 'Poppins', sans-serif;
        transition: all 0.3s ease;
      }
      
      .lang-btn:hover {
        background-color: #f0f0f0;
      }
      
      .lang-btn.active {
        background-color: #4a6cbd;
        color: white;
        border-color: #4a6cbd;
      }
      
      /* RTL support for switcher */
      .lang-ar .language-switcher {
        right: auto;
        left: 10px;
      }
    `;
    document.head.appendChild(style);
  }
  
  // Highlight current language
  updateLanguageSwitcher();
}

// Update language switcher to highlight the current language
function updateLanguageSwitcher() {
  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(btn => {
    if (btn.getAttribute('data-lang') === currentLanguage) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// Initialize language based on browser or stored preference
function initLanguage() {
  currentLanguage = detectLanguage();
  setLanguage(currentLanguage);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  createLanguageSwitcher();
  initLanguage();
});

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
  const currentLang = detectLanguage();
  translatePage(currentLang);
  
  // Update language button state
  const langButton = document.querySelector('.fa-language');
  if (langButton) {
    langButton.setAttribute('data-language', currentLang);
  }
});
