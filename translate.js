/**
 * Translation script for Mukhtar3oon website
 * Handles language switching between English and Arabic
 */

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
let currentLanguage = 'en';

// Define translatePage globally first
window.translatePage = function(lang) {
  setLanguage(lang);
};

// Get browser language or saved preference
function detectLanguage() {
  // Check if a language preference is stored
  const savedLanguage = localStorage.getItem('language');
  
  if (savedLanguage) {
    return savedLanguage;
  }
  
  // Check browser language
  const browserLang = navigator.language || navigator.userLanguage;
  
  // If browser language starts with 'ar', set to Arabic, otherwise English
  return browserLang.startsWith('ar') ? 'ar' : 'en';
}

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
let currentLanguage = 'en';

// Get browser language or saved preference
function detectLanguage() {
  // Check if a language preference is stored
  const savedLanguage = localStorage.getItem('language');
  
  if (savedLanguage) {
    return savedLanguage;
  }
  
  // Check browser language
  const browserLang = navigator.language || navigator.userLanguage;
  
  // If browser language starts with 'ar', set to Arabic, otherwise English
  return browserLang.startsWith('ar') ? 'ar' : 'en';
}

// Initialize page with correct language
function initLanguage() {
  currentLanguage = detectLanguage();
  setLanguage(currentLanguage);
}

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
  document.title = lang === 'ar' ? 'مختارعون - احجز الآن' : 'Mukhtar3oon - Book Now';
  
  // Update content with translations
  updatePageContent();
}

// Apply translations to page elements
function updatePageContent() {
  const langData = translations[currentLanguage];
  
  // Update form header
  const formHeader = document.querySelector('.form-header');
  if (formHeader) {
    const formTitle = formHeader.querySelector('h2');
    const formSubtitle = formHeader.querySelector('p');
    
    if (formTitle) formTitle.textContent = langData.formTitle;
    if (formSubtitle) formSubtitle.textContent = langData.formSubtitle;
  }
  
  // Update section titles
  const sectionTitles = document.querySelectorAll('.section-title');
  sectionTitles.forEach(title => {
    // Translate based on the content
    if (title.textContent.includes("Child's Name")) {
      title.textContent = langData.childName;
    } else if (title.textContent.includes("Phone Number")) {
      title.textContent = langData.phoneNumber;
    } else if (title.textContent.includes("Residential Area")) {
      title.textContent = langData.residentialArea;
    } else if (title.textContent.includes("Child's Age")) {
      title.textContent = langData.childAge;
    } else if (title.textContent.includes("Attendance Method")) {
      title.textContent = langData.attendanceMethod;
    } else if (title.textContent.includes("First Appointment")) {
      title.textContent = langData.firstAppointment;
    } else if (title.textContent.includes("Second Appointment")) {
      title.textContent = langData.secondAppointment;
    } else if (title.textContent.includes("Third Appointment")) {
      title.textContent = langData.thirdAppointment;
    } else if (title.textContent.includes("Preferred Time for First")) {
      title.textContent = langData.preferredTimeFirst;
    } else if (title.textContent.includes("Preferred Time for Second")) {
      title.textContent = langData.preferredTimeSecond;
    } else if (title.textContent.includes("Preferred Time for Third")) {
      title.textContent = langData.preferredTimeThird;
    }
  });
  
  // Update select options
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
  
  // Update radio button labels
  const radioLabels = document.querySelectorAll('.radio-option label');
  radioLabels.forEach(label => {
    // Attendance method
    if (label.getAttribute('for') === 'offline') {
      label.textContent = langData.offline;
    } else if (label.getAttribute('for') === 'online') {
      label.textContent = langData.online;
    }
    
    // Days
    else if (label.getAttribute('for').includes('_') && label.getAttribute('for').split('_')[1] === '1') {
      label.textContent = langData.sunday;
    } else if (label.getAttribute('for').includes('_') && label.getAttribute('for').split('_')[1] === '2') {
      label.textContent = langData.monday;
    } else if (label.getAttribute('for').includes('_') && label.getAttribute('for').split('_')[1] === '3') {
      label.textContent = langData.tuesday;
    } else if (label.getAttribute('for').includes('_') && label.getAttribute('for').split('_')[1] === '4') {
      label.textContent = langData.wednesday;
    } else if (label.getAttribute('for').includes('_') && label.getAttribute('for').split('_')[1] === '5') {
      label.textContent = langData.thursday;
    } else if (label.getAttribute('for').includes('_') && label.getAttribute('for').split('_')[1] === '6') {
      label.textContent = langData.friday;
    } else if (label.getAttribute('for').includes('_') && label.getAttribute('for').split('_')[1] === '7') {
      label.textContent = langData.saturday;
    }
    
    // Times
    else if (label.textContent.includes('10 AM')) {
      label.textContent = langData.time10am;
    } else if (label.textContent.includes('12 PM')) {
      label.textContent = langData.time12pm;
    } else if (label.textContent.includes('2 PM')) {
      label.textContent = langData.time2pm;
    } else if (label.textContent.includes('4 PM')) {
      label.textContent = langData.time4pm;
    } else if (label.textContent.includes('6 PM')) {
      label.textContent = langData.time6pm;
    } else if (label.textContent.includes('8 PM')) {
      label.textContent = langData.time8pm;
    }
  });
  
  // Update note text
  const noteElement = document.querySelector('.note p');
  if (noteElement) {
    noteElement.textContent = langData.note;
  }
  
  // Update button text
  const submitBtn = document.querySelector('.submit-btn');
  if (submitBtn) {
    submitBtn.textContent = langData.confirm;
  }
}

// Create language switcher
function createLanguageSwitcher() {
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

// Make translatePage function available globally
window.translatePage = function(lang) {
  setLanguage(lang);
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  createLanguageSwitcher();
  initLanguage();
  
  // Add language switcher styles
  const style = document.createElement('style');
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
});
    
    // Hero Section
    hero_title: "Mukhtar3oon: Sparking Innovation in Young Minds",
    hero_subtitle: "Interactive STEM education for children aged 6-16",
    get_started: "Get Started",
    learn_more: "Learn More",
    
    // Courses Section
    courses_title: "Our Courses",
    courses_subtitle: "Discover our engaging learning programs",
    robotics_title: "Robotics",
    robotics_desc: "Build and program robots with hands-on projects",
    coding_title: "Coding",
    coding_desc: "Learn programming concepts through fun activities",
    electronics_title: "Electronics",
    electronics_desc: "Explore electronic circuits and components",
    view_details: "View Details",
    
    // Why Us Section
    why_title: "Why Choose Mukhtar3oon?",
    why_subtitle: "Our commitment to quality education",
    reason1_title: "Hands-on Learning",
    reason1_desc: "Interactive projects that engage young minds",
    reason2_title: "Expert Instructors",
    reason2_desc: "Qualified teachers passionate about STEM",
    reason3_title: "Small Class Sizes",
    reason3_desc: "Personalized attention for each student",
    
    // Projects Section
    projects_title: "Student Achievements",
    projects_subtitle: "See what our students have created",
    project1_title: "Smart Home System",
    project1_desc: "A miniature smart home built by our robotics students",
    project2_title: "Mobile Game",
    project2_desc: "Original game designed by our coding students",
    project3_title: "Solar Tracker",
    project3_desc: "Electronic device that follows the sun's movement",
    
    // Pricing Section
    pricing_title: "Pricing Plans",
    pricing_subtitle: "Affordable options for all families",
    basic_plan: "Basic Plan",
    standard_plan: "Standard Plan",
    premium_plan: "Premium Plan",
    price_month: "/month",
    choose_plan: "Choose Plan",
    
    // FAQ Section
    faq_title: "Frequently Asked Questions",
    faq_subtitle: "Find answers to common questions",
    faq1_question: "What ages do you cater to?",
    faq1_answer: "Our programs are designed for children aged 6-16, with different levels for various age groups.",
    faq2_question: "Do you offer online classes?",
    faq2_answer: "Yes, we offer both in-person and online classes to accommodate different needs.",
    faq3_question: "How large are the class sizes?",
    faq3_answer: "We maintain small class sizes with a maximum of 10 students per instructor.",
    
    // Contact Section
    contact_title: "Contact Us",
    contact_subtitle: "Get in touch with our team",
    name_label: "Your Name",
    email_label: "Email Address",
    message_label: "Message",
    send_message: "Send Message",
    
    // Footer
    copyright: "© 2023 Mukhtar3oon. All rights reserved.",
    privacy_policy: "Privacy Policy",
    terms: "Terms of Service"
  },
  ar: {
    // Navigation
    nav_courses: "كورساتنا",
    nav_why: "لماذا مخترعون",
    nav_projects: "إنجازاتنا",
    nav_pricing: "الأسعار",
    nav_faq: "الأسئلة الشائعة",
    book_now: "احجز الان",
    
    // Hero Section
    hero_title: "مخترعون: نشعل شرارة الابتكار في عقول الشباب",
    hero_subtitle: "تعليم تفاعلي للعلوم والتكنولوجيا والهندسة والرياضيات للأطفال من سن 6-16",
    get_started: "ابدأ الآن",
    learn_more: "اكتشف المزيد",
    
    // Courses Section
    courses_title: "كورساتنا",
    courses_subtitle: "اكتشف برامجنا التعليمية الشيقة",
    robotics_title: "الروبوتات",
    robotics_desc: "بناء وبرمجة الروبوتات من خلال مشاريع عملية",
    coding_title: "البرمجة",
    coding_desc: "تعلم مفاهيم البرمجة من خلال أنشطة ممتعة",
    electronics_title: "الإلكترونيات",
    electronics_desc: "استكشاف الدوائر والمكونات الإلكترونية",
    view_details: "عرض التفاصيل",
    
    // Why Us Section
    why_title: "لماذا تختار مخترعون؟",
    why_subtitle: "التزامنا بالتعليم عالي الجودة",
    reason1_title: "التعلم العملي",
    reason1_desc: "مشاريع تفاعلية تجذب عقول الشباب",
    reason2_title: "معلمون خبراء",
    reason2_desc: "مدرسون مؤهلون شغوفون بالعلوم والتكنولوجيا",
    reason3_title: "فصول صغيرة",
    reason3_desc: "اهتمام شخصي لكل طالب",
    
    // Projects Section
    projects_title: "إنجازات الطلاب",
    projects_subtitle: "شاهد ما أبدعه طلابنا",
    project1_title: "نظام المنزل الذكي",
    project1_desc: "منزل ذكي مصغر بناه طلاب الروبوتات لدينا",
    project2_title: "لعبة للجوال",
    project2_desc: "لعبة أصلية صممها طلاب البرمجة لدينا",
    project3_title: "متتبع شمسي",
    project3_desc: "جهاز إلكتروني يتتبع حركة الشمس",
    
    // Pricing Section
    pricing_title: "خطط الأسعار",
    pricing_subtitle: "خيارات بأسعار معقولة لجميع العائلات",
    basic_plan: "الخطة الأساسية",
    standard_plan: "الخطة القياسية",
    premium_plan: "الخطة المميزة",
    price_month: "/شهر",
    choose_plan: "اختر الخطة",
    
    // FAQ Section
    faq_title: "الأسئلة الشائعة",
    faq_subtitle: "اعثر على إجابات للأسئلة الشائعة",
    faq1_question: "ما هي الأعمار التي تستهدفونها؟",
    faq1_answer: "برامجنا مصممة للأطفال من سن 6-16 عامًا، مع مستويات مختلفة لمختلف الفئات العمرية.",
    faq2_question: "هل تقدمون دروساً عبر الإنترنت؟",
    faq2_answer: "نعم، نقدم دروساً شخصية وعبر الإنترنت لتلبية الاحتياجات المختلفة.",
    faq3_question: "ما هو حجم الفصول الدراسية؟",
    faq3_answer: "نحافظ على فصول دراسية صغيرة بحد أقصى 10 طلاب لكل مدرّس.",
    
    // Contact Section
    contact_title: "اتصل بنا",
    contact_subtitle: "تواصل مع فريقنا",
    name_label: "الاسم",
    email_label: "البريد الإلكتروني",
    message_label: "الرسالة",
    send_message: "إرسال الرسالة",
    
    // Footer
    copyright: "© 2023 مخترعون. جميع الحقوق محفوظة.",
    privacy_policy: "سياسة الخصوصية",
    terms: "شروط الخدمة"
  }
};

// Simplified function to change the page language
function translatePage(lang) {
  // Set the HTML lang attribute and direction
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  
  // Get all elements with data-translate attribute
  const elements = document.querySelectorAll('[data-translate]');
  
  // Update each element with the appropriate translation
  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[lang] && translations[lang][key]) {
      // Special handling for different element types
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        // For input elements, update the placeholder or value as appropriate
        if (element.type === 'submit' || element.type === 'button') {
          element.value = translations[lang][key];
        } else {
          element.placeholder = translations[lang][key];
        }
      } else if (element.tagName === 'A') {
        // For anchor tags, preserve the href attribute
        const href = element.getAttribute('href');
        element.textContent = translations[lang][key];
        if (href) element.setAttribute('href', href);
      } else {
        // For other elements, simple text replacement
        element.textContent = translations[lang][key];
      }
    }
  });
/**
 * Translation script for Mukhtar3oon website
 * Handles language switching between English and Arabic
 */

// Language translations
const translations = {
  en: {
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
let currentLanguage = 'en';

// Get browser language or saved preference
function detectLanguage() {
  // Check if a language preference is stored
  const savedLanguage = localStorage.getItem('language');
  
  if (savedLanguage) {
    return savedLanguage;
  }
  
  // Check browser language
  const browserLang = navigator.language || navigator.userLanguage;
  
  // If browser language starts with 'ar', set to Arabic, otherwise English
  return browserLang.startsWith('ar') ? 'ar' : 'en';
}

// Initialize page with correct language
function initLanguage() {
  currentLanguage = detectLanguage();
  setLanguage(currentLanguage);
}

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
  document.title = lang === 'ar' ? 'مختارعون - احجز الآن' : 'Mukhtar3oon - Book Now';
  
  // Update content with translations
  updatePageContent();
}

// Apply translations to page elements
function updatePageContent() {
  const langData = translations[currentLanguage];
  
  // Update form header
  const formHeader = document.querySelector('.form-header');
  if (formHeader) {
    const formTitle = formHeader.querySelector('h2');
    const formSubtitle = formHeader.querySelector('p');
    
    if (formTitle) formTitle.textContent = langData.formTitle;
    if (formSubtitle) formSubtitle.textContent = langData.formSubtitle;
  }
  
  // Update section titles
  const sectionTitles = document.querySelectorAll('.section-title');
  sectionTitles.forEach(title => {
    // Translate based on the content
    if (title.textContent.includes("Child's Name")) {
      title.textContent = langData.childName;
    } else if (title.textContent.includes("Phone Number")) {
      title.textContent = langData.phoneNumber;
    } else if (title.textContent.includes("Residential Area")) {
      title.textContent = langData.residentialArea;
    } else if (title.textContent.includes("Child's Age")) {
      title.textContent = langData.childAge;
    } else if (title.textContent.includes("Attendance Method")) {
      title.textContent = langData.attendanceMethod;
    } else if (title.textContent.includes("First Appointment")) {
      title.textContent = langData.firstAppointment;
    } else if (title.textContent.includes("Second Appointment")) {
      title.textContent = langData.secondAppointment;
    } else if (title.textContent.includes("Third Appointment")) {
      title.textContent = langData.thirdAppointment;
    } else if (title.textContent.includes("Preferred Time for First")) {
      title.textContent = langData.preferredTimeFirst;
    } else if (title.textContent.includes("Preferred Time for Second")) {
      title.textContent = langData.preferredTimeSecond;
    } else if (title.textContent.includes("Preferred Time for Third")) {
      title.textContent = langData.preferredTimeThird;
    }
  });
  
  // Update select options
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
  
  // Update radio button labels
  const radioLabels = document.querySelectorAll('.radio-option label');
  radioLabels.forEach(label => {
    // Attendance method
    if (label.getAttribute('for') === 'offline') {
      label.textContent = langData.offline;
    } else if (label.getAttribute('for') === 'online') {
      label.textContent = langData.online;
    }
    
    // Days
    else if (label.getAttribute('for').includes('_') && label.getAttribute('for').split('_')[1] === '1') {
      label.textContent = langData.sunday;
    } else if (label.getAttribute('for').includes('_') && label.getAttribute('for').split('_')[1] === '2') {
      label.textContent = langData.monday;
    } else if (label.getAttribute('for').includes('_') && label.getAttribute('for').split('_')[1] === '3') {
      label.textContent = langData.tuesday;
    } else if (label.getAttribute('for').includes('_') && label.getAttribute('for').split('_')[1] === '4') {
      label.textContent = langData.wednesday;
    } else if (label.getAttribute('for').includes('_') && label.getAttribute('for').split('_')[1] === '5') {
      label.textContent = langData.thursday;
    } else if (label.getAttribute('for').includes('_') && label.getAttribute('for').split('_')[1] === '6') {
      label.textContent = langData.friday;
    } else if (label.getAttribute('for').includes('_') && label.getAttribute('for').split('_')[1] === '7') {
      label.textContent = langData.saturday;
    }
    
    // Times
    else if (label.textContent.includes('10 AM')) {
      label.textContent = langData.time10am;
    } else if (label.textContent.includes('12 PM')) {
      label.textContent = langData.time12pm;
    } else if (label.textContent.includes('2 PM')) {
      label.textContent = langData.time2pm;
    } else if (label.textContent.includes('4 PM')) {
      label.textContent = langData.time4pm;
    } else if (label.textContent.includes('6 PM')) {
      label.textContent = langData.time6pm;
    } else if (label.textContent.includes('8 PM')) {
      label.textContent = langData.time8pm;
    }
  });
  
  // Update note text
  const noteElement = document.querySelector('.note p');
  if (noteElement) {
    noteElement.textContent = langData.note;
  }
  
  // Update button text
  const submitBtn = document.querySelector('.submit-btn');
  if (submitBtn) {
    submitBtn.textContent = langData.confirm;
  }
}

// Create language switcher
function createLanguageSwitcher() {
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

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  createLanguageSwitcher();
  initLanguage();
  
  // Add language switcher styles
  const style = document.createElement('style');
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
});
  // Handle attributes like placeholders that need translation
  document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
    const key = element.getAttribute('data-translate-placeholder');
    if (translations[lang] && translations[lang][key]) {
      element.placeholder = translations[lang][key];
    }
  });
  
  // Save the language preference to localStorage
  localStorage.setItem('preferredLanguage', lang);
  
  // Update CSS for RTL/LTR specific styling
  if (lang === 'ar') {
    document.body.classList.add('rtl');
    document.body.classList.remove('ltr');
  } else {
    document.body.classList.add('ltr');
    document.body.classList.remove('rtl');
  }
}

// Initialize the page with the preferred language or default to Arabic
document.addEventListener('DOMContentLoaded', function() {
  // Apply the translations
  const savedLanguage = localStorage.getItem('preferredLanguage') || 'ar';
  translatePage(savedLanguage);
  
  // Update the language toggle button to show the correct state
  const langToggle = document.querySelector('[title="Change Language"]');
  if (langToggle) {
    langToggle.setAttribute('data-language', savedLanguage);
  }
});
