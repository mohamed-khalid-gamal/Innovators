// carousel.js - Ultra smooth and optimized auto-scrolling carousel

document.addEventListener("DOMContentLoaded", function () {
  const photosCarousel = document.querySelector("#projects .photos");
  const videosCarousel = document.querySelector(
    "#projects .videos .image-container",
  );

  const style = document.createElement("style");
  style.textContent = `
        .auto-scroll-container {
            overflow-x: scroll;
            overflow-y: hidden;
            white-space: nowrap;
            scroll-behavior: smooth;
            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none; /* IE and Edge */
            -webkit-overflow-scrolling: touch;
            transition: transform 0.3s ease;
            will-change: scroll-position;
            padding: 10px 0;
        }
        
        .auto-scroll-container::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera */
        }
        
        /* Optimize items for smoother rendering */
        #projects .photos img {
            display: inline-block;
            transform: translateZ(0); /* Hardware acceleration */
            backface-visibility: hidden;
            margin-right: 12px;
            vertical-align: middle;
            will-change: transform;
        }
        
        #projects .videos .image-container .video-card {
            display: inline-block;
            transform: translateZ(0); /* Hardware acceleration */
            backface-visibility: hidden;
            margin-right: 18px;
            vertical-align: middle;
            will-change: transform;
        }

        /* RTL specific styles */
        [dir="rtl"] .auto-scroll-container {
            direction: rtl;
        }
        
        [dir="rtl"] #projects .photos img,
        [dir="rtl"] #projects .videos .image-container .video-card {
            margin-right: 0;
            margin-left: 12px;
        }
    `;
  document.head.appendChild(style);

  [photosCarousel, videosCarousel].forEach((container) => {
    if (!container) return;
    container.classList.add("auto-scroll-container");
  });

  /**
   * Enhanced smooth auto scroll with optimized performance
   * @param {HTMLElement} container - The container to scroll
   * @param {number} interval - Time in ms between scrolls
   * @param {number} duration - Duration of each scroll animation in ms
   */
  function enhancedAutoScroll(container, interval = 2000, duration = 1200) {
    if (!container) return;

    let scrollInterval;
    let isScrolling = false;
    let userInteracting = false;
    let itemWidth = 0;
    let containerWidth = 0;
    const isRTL = document.documentElement.dir === 'rtl';

    function updateDimensions() {
      containerWidth = container.clientWidth;

      // Calculate average item width
      if (container.children.length > 0) {
        let totalWidth = 0;
        const children = Array.from(container.children);
        children.forEach((child) => {
          const style = window.getComputedStyle(child);
          const width =
            child.offsetWidth +
            parseInt(style.marginLeft || 0) +
            parseInt(style.marginRight || 0);
          totalWidth += width;
        });
        itemWidth = totalWidth / children.length;
      } else {
        itemWidth = 200; // Default fallback width
      }
    }

    // Initial dimensions
    updateDimensions();

    // Smooth scroll implementation using requestAnimationFrame
    function smoothScroll(target, duration) {
      const start = container.scrollLeft;
      const distance = target - start;
      let startTime = null;

      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        // Easing function for smoother motion (ease-out cubic)
        const easeOut = 1 - Math.pow(1 - progress, 3);

        container.scrollLeft = start + distance * easeOut;

        if (timeElapsed < duration && !userInteracting) {
          requestAnimationFrame(animation);
        } else {
          isScrolling = false;
          
          // Check if we've reached the end and need to loop back
          if (!userInteracting) {
            const maxScroll = container.scrollWidth - containerWidth;
            const currentPosition = container.scrollLeft;
            
            // If we're at the end (with small tolerance), loop back to beginning
            if (Math.abs(currentPosition - maxScroll) < 5) {
              setTimeout(() => {
                container.scrollLeft = 0;
              }, 50);
            }
          }
        }
      }

      isScrolling = true;
      requestAnimationFrame(animation);
    }

    // Function to scroll to next position
    function scrollNext() {
      if (isScrolling || userInteracting) return;

      const maxScroll = container.scrollWidth - containerWidth;
      const currentScroll = container.scrollLeft;
      
      if (isRTL) {
        // For RTL, scrollLeft behavior can vary across browsers
        // In standard RTL handling, most browsers use negative values or values decreasing from 0
        if (Math.abs(currentScroll) <= 1) { // Using abs to handle slight variations
          // If we're at the start, jump to the end
          container.scrollLeft = maxScroll;
          smoothScroll(maxScroll, duration);
        } else {
          // Normal scroll to previous position (moving right to left)
          smoothScroll(currentScroll + itemWidth, duration);
        }
      } else {
        // For LTR, we scroll towards the right (positive direction)
        if (currentScroll >= maxScroll - 5) { // Small tolerance for rounding errors
          // If we're near the end, jump to the start and animate to position 0
          container.scrollLeft = 0;
          smoothScroll(0, duration);
        } else {
          // Normal scroll to next position
          smoothScroll(currentScroll + itemWidth, duration);
        }
      }
    }

    // Clear any existing interval before setting a new one
    clearInterval(scrollInterval);
    
    // Start the interval
    scrollInterval = setInterval(scrollNext, interval);

    // Handle user interaction
    function pauseScrolling() {
      userInteracting = true;
      clearInterval(scrollInterval);
    }

    function resumeScrolling() {
      // Small delay before resuming
      setTimeout(() => {
        userInteracting = false;
        updateDimensions(); // Re-calculate in case window size changed
        clearInterval(scrollInterval); // Clear any existing interval
        scrollInterval = setInterval(scrollNext, interval);
      }, 1000);
    }

    // Add event listeners for user interaction
    container.addEventListener("mouseenter", pauseScrolling);
    container.addEventListener("mouseleave", resumeScrolling);
    container.addEventListener("touchstart", pauseScrolling, { passive: true });
    container.addEventListener("touchend", resumeScrolling);
    
    // Ensure we remove any duplicate event listeners
    function addEventListenerOnce(element, type, listener, options) {
      element.removeEventListener(type, listener);
      element.addEventListener(type, listener, options);
    }
    
    // Replace existing listeners with once-added versions
    addEventListenerOnce(container, "mouseenter", pauseScrolling);
    addEventListenerOnce(container, "mouseleave", resumeScrolling);
    addEventListenerOnce(container, "touchstart", pauseScrolling, { passive: true });
    addEventListenerOnce(container, "touchend", resumeScrolling);

    // Handle window resize with debounce
    let resizeTimeout;
    function handleResize() {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        updateDimensions();
      }, 250);
    }
    
    window.removeEventListener("resize", handleResize);
    window.addEventListener("resize", handleResize);

    // Start with initial scroll after a short delay
    setTimeout(scrollNext, 500);

    // Return controls
    return {
      pause: pauseScrolling,
      resume: resumeScrolling,
      updateSpeed: (newInterval) => {
        clearInterval(scrollInterval);
        interval = newInterval;
        if (!userInteracting) {
          scrollInterval = setInterval(scrollNext, interval);
        }
      },
    };
  }

  // Fix the inconsistency between comments and actual parameters
  enhancedAutoScroll(photosCarousel, 2000, 1200); // Photos: interval 2s, animation 1.2s
  enhancedAutoScroll(videosCarousel, 2000, 1200); // Videos: interval 2s, animation 1.2s

  function optimizeContent() {
    if (photosCarousel) {
      Array.from(photosCarousel.querySelectorAll("img")).forEach((img) => {
        img.loading = "eager";
        img.decoding = "async";
      });
    }

    if (videosCarousel) {
      Array.from(videosCarousel.querySelectorAll(".card-thumb img, img")).forEach(
        (img) => {
          // Ensure thumbnails load properly
          img.loading = "eager";
          img.decoding = "async";
        },
      );
    }
  }

  optimizeContent();

  window.addEventListener("load", optimizeContent);
});