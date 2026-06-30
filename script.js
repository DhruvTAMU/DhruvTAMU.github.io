//Responsive Nav
  function myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }


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
