//Responsive Nav
// Hamburger toggle
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".hamburger").addEventListener("click", () => {
      document.querySelector(".nav-list").classList.toggle("open");
    });
  });

  // Header goes opaque on scroll
  window.addEventListener("scroll", () => {
    document.querySelector("header").classList.toggle("scrolled", window.scrollY > 0);
  });


//Fade in on scroll
  document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".fade-in-section");

    const options = {
      root: null, // Uses the browser viewport as the container
      rootMargin: "0px", // No shrinking/expanding of the trigger area
      threshold: 0.15 // Triggers when 15% of the section is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        // Check if the section has entered the viewport
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          // Stop observing the section once it fades in (avoids repeating the animation)
          observer.unobserve(entry.target); 
        }
      });
    }, options);

    // Attach the observer to each section
    sections.forEach(section => {
      observer.observe(section);
    });
  });
