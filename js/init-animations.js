// init-animations.js - تفعيل الرسوم المتحركة عند تحميل الصفحة

// التأكد من تحميل الصفحة بالكامل قبل تفعيل الرسوم المتحركة
document.addEventListener('DOMContentLoaded', function() {
    // إضافة فئة 'loaded' إلى الجسم لتفعيل تأثير التلاشي عند التحميل
    setTimeout(function() {
        document.body.classList.add('loaded');
    }, 300);
    
    // تفعيل الرسوم المتحركة للعناصر المرئية عند التحميل
    const cards = document.querySelectorAll('.card');
    const titles = document.querySelectorAll('.header-title, .title');
    const iconWrappers = document.querySelectorAll('.icon-wrapper');
    
    // تفعيل الرسوم المتحركة للبطاقات
    cards.forEach(function(card, index) {
        setTimeout(function() {
            card.classList.add('visible');
        }, 100 * index);
    });
    
    // تفعيل الرسوم المتحركة للعناوين
    titles.forEach(function(title) {
        title.classList.add('visible');
    });
    
    // تفعيل الرسوم المتحركة للأيقونات
    iconWrappers.forEach(function(icon, index) {
        setTimeout(function() {
            icon.classList.add('pulse');
        }, 150 * index);
    });
    
    // إضافة مراقب التمرير لتفعيل الرسوم المتحركة عند التمرير
    const handleScroll = function() {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        
        // تفعيل الرسوم المتحركة للبطاقات عند ظهورها في نطاق الرؤية
        cards.forEach(function(card, index) {
            const elementPosition = card.getBoundingClientRect().top + scrollPosition;
            
            if (scrollPosition > elementPosition - windowHeight * 0.85) {
                setTimeout(function() {
                    card.classList.add('visible');
                }, index * 100);
            }
        });
        
        // تفعيل الرسوم المتحركة للعناوين عند ظهورها في نطاق الرؤية
        titles.forEach(function(title) {
            const elementPosition = title.getBoundingClientRect().top + scrollPosition;
            
            if (scrollPosition > elementPosition - windowHeight * 0.85) {
                title.classList.add('visible');
            }
        });
        
        // تفعيل الرسوم المتحركة للأيقونات عند ظهورها في نطاق الرؤية
        iconWrappers.forEach(function(icon, index) {
            const elementPosition = icon.getBoundingClientRect().top + scrollPosition;
            
            if (scrollPosition > elementPosition - windowHeight * 0.9) {
                setTimeout(function() {
                    icon.classList.add('pulse');
                }, index * 150);
            }
        });
    };
    
    // إضافة مستمع حدث التمرير
    window.addEventListener('scroll', handleScroll);
    
    // تشغيل وظيفة التمرير مرة واحدة لتفعيل الرسوم المتحركة للعناصر المرئية بالفعل
    handleScroll();
});