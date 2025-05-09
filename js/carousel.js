// carousel.js - Ultra smooth and optimized auto-scrolling carousel

document.addEventListener("DOMContentLoaded", function () {
  // Get the carousel containers
  const photosCarousel = document.querySelector("#projects .photos");
  const videosCarousel = document.querySelector(
    "#projects .videos .image-container",
  );

  // Add enhanced styling for smooth scrolling
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
    `;
  document.head.appendChild(style);

  // Apply styling to containers
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

    // Calculate dimensions
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
        }
      }

      isScrolling = true;
      requestAnimationFrame(animation);
    }

    // Function to scroll to next position
    function scrollNext() {
      if (isScrolling || userInteracting) return;

      const maxScroll = container.scrollWidth - containerWidth;
      const nextPosition = container.scrollLeft + itemWidth;

      // If near the end, smoothly loop back to start
      if (container.scrollLeft >= maxScroll - itemWidth) {
        // First complete the scroll to end with shorter duration
        smoothScroll(maxScroll, duration / 2);

        // Then after a short delay, quickly but smoothly jump back to start
        setTimeout(() => {
          container.scrollLeft = 0;
        }, duration / 2 + 50);
      } else {
        // Normal scroll to next position
        smoothScroll(nextPosition, duration);
      }
    }

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
        scrollInterval = setInterval(scrollNext, interval);
      }, 1000);
    }

    // Add event listeners for user interaction
    container.addEventListener("mouseenter", pauseScrolling);
    container.addEventListener("mouseleave", resumeScrolling);
    container.addEventListener("touchstart", pauseScrolling, { passive: true });
    container.addEventListener("touchend", resumeScrolling);

    // Handle window resize
    window.addEventListener("resize", () => {
      updateDimensions();
    });

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

  enhancedAutoScroll(photosCarousel, 1000, 600); // Photos: interval 2s, animation 1.2s
  enhancedAutoScroll(videosCarousel, 1000, 600); // Videos: interval 2s, animation 1.2s

  // Make sure all contents are properly visible
  function optimizeContent() {
    if (photosCarousel) {
      Array.from(photosCarousel.children).forEach((img) => {
        if (img.tagName === "IMG") {
          img.loading = "eager";
          img.decoding = "async";
        }
      });
    }

    if (videosCarousel) {
      Array.from(videosCarousel.querySelectorAll(".card-thumb img")).forEach(
        (img) => {
          // Ensure thumbnails load properly
          img.loading = "eager";
          img.decoding = "async";
        },
      );
    }
  }

  // Run optimization
  optimizeContent();

  // Ensure optimization runs after images load
  window.addEventListener("load", optimizeContent);
});
