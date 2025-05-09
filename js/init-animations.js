// init-animations.js - تفعيل الرسوم المتحركة عند تحميل الصفحة

// التأكد من تحميل الصفحة بالكامل قبل تفعيل الرسوم المتحركة
document.addEventListener("DOMContentLoaded", function () {
  // إضافة فئة 'loaded' إلى الجسم لتفعيل تأثير التلاشي عند التحميل
  setTimeout(function () {
    document.body.classList.add("loaded");
  }, 300);

  // تفعيل الرسوم المتحركة للعناصر المرئية عند التحميل
  const cards = document.querySelectorAll(".card");
  const titles = document.querySelectorAll(".header-title, .title");
  const iconWrappers = document.querySelectorAll(".icon-wrapper");
  const images = document.querySelectorAll("img:not(.card img)");
  const paragraphs = document.querySelectorAll("p");
  const buttons = document.querySelectorAll(
    ".btn1, .btn2, .i_btn button, .sidebar-btn",
  );
  const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
  const listItems = document.querySelectorAll("li");
  const sections = document.querySelectorAll("section");

  // تفعيل الرسوم المتحركة للبطاقات
  cards.forEach(function (card, index) {
    setTimeout(function () {
      card.classList.add("visible");
    }, 100 * index);
  });

  // تفعيل الرسوم المتحركة للعناوين
  titles.forEach(function (title) {
    title.classList.add("visible");
  });

  // تفعيل الرسوم المتحركة للأيقونات
  iconWrappers.forEach(function (icon, index) {
    setTimeout(function () {
      icon.classList.add("pulse");
    }, 150 * index);
  });

  // تفعيل الرسوم المتحركة للصور
  images.forEach(function (img, index) {
    setTimeout(function () {
      img.style.opacity = "0";
      img.style.transform = "translateY(20px)";
      img.style.transition =
        "opacity 0.8s ease-in-out, transform 0.8s ease-in-out";

      setTimeout(function () {
        img.style.opacity = "1";
        img.style.transform = "translateY(0)";
      }, 50);
    }, 100 * index);
  });

  // تفعيل الرسوم المتحركة للفقرات
  paragraphs.forEach(function (paragraph, index) {
    setTimeout(function () {
      paragraph.style.opacity = "0";
      paragraph.style.transform = "translateY(15px)";
      paragraph.style.transition =
        "opacity 0.6s ease-in-out, transform 0.6s ease-in-out";

      setTimeout(function () {
        paragraph.style.opacity = "1";
        paragraph.style.transform = "translateY(0)";
      }, 50);
    }, 80 * index);
  });

  // تفعيل الرسوم المتحركة للأزرار
  buttons.forEach(function (button, index) {
    setTimeout(function () {
      button.style.opacity = "0";
      button.style.transform = "scale(0.9)";
      button.style.transition =
        "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";

      setTimeout(function () {
        button.style.opacity = "1";
        button.style.transform = "scale(1)";
      }, 50);
    }, 120 * index);
  });

  // تفعيل الرسوم المتحركة للعناصر في القوائم
  listItems.forEach(function (item, index) {
    if (!item.closest(".card")) {
      // تجنب العناصر داخل البطاقات
      setTimeout(function () {
        item.style.opacity = "0";
        item.style.transform = "translateX(15px)";
        item.style.transition =
          "opacity 0.7s ease-in-out, transform 0.7s ease-in-out";

        setTimeout(function () {
          item.style.opacity = "1";
          item.style.transform = "translateX(0)";
        }, 50);
      }, 70 * index);
    }
  });

  // تفعيل الرسوم المتحركة للأقسام
  sections.forEach(function (section) {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition =
      "opacity 1s ease-in-out, transform 1s ease-in-out";
  });

  setTimeout(function () {
    sections.forEach(function (section, index) {
      setTimeout(function () {
        section.style.opacity = "1";
        section.style.transform = "translateY(0)";
      }, 200 * index);
    });
  }, 500);

  // إضافة مراقب التمرير لتفعيل الرسوم المتحركة عند التمرير
  const handleScroll = function () {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    // تفعيل الرسوم المتحركة للبطاقات عند ظهورها في نطاق الرؤية
    cards.forEach(function (card, index) {
      const elementPosition = card.getBoundingClientRect().top + scrollPosition;

      if (scrollPosition > elementPosition - windowHeight * 0.85) {
        setTimeout(function () {
          card.classList.add("visible");
        }, index * 100);
      }
    });

    // تفعيل الرسوم المتحركة للعناوين عند ظهورها في نطاق الرؤية
    titles.forEach(function (title) {
      const elementPosition =
        title.getBoundingClientRect().top + scrollPosition;

      if (scrollPosition > elementPosition - windowHeight * 0.85) {
        title.classList.add("visible");
      }
    });

    // تفعيل الرسوم المتحركة للأيقونات عند ظهورها في نطاق الرؤية
    iconWrappers.forEach(function (icon, index) {
      const elementPosition = icon.getBoundingClientRect().top + scrollPosition;

      if (scrollPosition > elementPosition - windowHeight * 0.9) {
        setTimeout(function () {
          icon.classList.add("pulse");
        }, index * 150);
      }
    });

    // تفعيل الرسوم المتحركة للصور عند ظهورها في نطاق الرؤية
    images.forEach(function (img, index) {
      const elementPosition = img.getBoundingClientRect().top + scrollPosition;

      if (scrollPosition > elementPosition - windowHeight * 0.85) {
        setTimeout(function () {
          img.style.opacity = "1";
          img.style.transform = "translateY(0)";
        }, index * 100);
      }
    });

    // تفعيل الرسوم المتحركة للفقرات عند ظهورها في نطاق الرؤية
    paragraphs.forEach(function (paragraph, index) {
      const elementPosition =
        paragraph.getBoundingClientRect().top + scrollPosition;

      if (scrollPosition > elementPosition - windowHeight * 0.85) {
        setTimeout(function () {
          paragraph.style.opacity = "1";
          paragraph.style.transform = "translateY(0)";
        }, index * 80);
      }
    });

    // تفعيل الرسوم المتحركة للأزرار عند ظهورها في نطاق الرؤية
    buttons.forEach(function (button, index) {
      const elementPosition =
        button.getBoundingClientRect().top + scrollPosition;

      if (scrollPosition > elementPosition - windowHeight * 0.85) {
        setTimeout(function () {
          button.style.opacity = "1";
          button.style.transform = "scale(1)";
        }, index * 120);
      }
    });

    // تفعيل الرسوم المتحركة لعناصر القوائم عند ظهورها في نطاق الرؤية
    listItems.forEach(function (item, index) {
      if (!item.closest(".card")) {
        // تجنب العناصر داخل البطاقات
        const elementPosition =
          item.getBoundingClientRect().top + scrollPosition;

        if (scrollPosition > elementPosition - windowHeight * 0.85) {
          setTimeout(function () {
            item.style.opacity = "1";
            item.style.transform = "translateX(0)";
          }, index * 70);
        }
      }
    });

    // تفعيل الرسوم المتحركة للأقسام عند ظهورها في نطاق الرؤية
    sections.forEach(function (section, index) {
      const elementPosition =
        section.getBoundingClientRect().top + scrollPosition;

      if (scrollPosition > elementPosition - windowHeight * 0.75) {
        setTimeout(function () {
          section.style.opacity = "1";
          section.style.transform = "translateY(0)";
        }, index * 200);
      }
    });
  };

  // إضافة مستمع حدث التمرير
  window.addEventListener("scroll", handleScroll);

  // تشغيل وظيفة التمرير مرة واحدة لتفعيل الرسوم المتحركة للعناصر المرئية بالفعل
  handleScroll();
});
