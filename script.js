/* 
  Ali Haidar — Creative Director Portfolio
  Purpose: Subtle interaction, clarity, and polish
  Philosophy: Content first, interaction second
*/

document.addEventListener("DOMContentLoaded", () => {

  /* ============================
     1. Smooth Anchor Navigation
  ============================ */
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      const targetId = link.getAttribute("href");
      const targetEl = document.querySelector(targetId);

      if (targetEl) {
        e.preventDefault();
        const offset = 90; // height of fixed nav
        const top =
          targetEl.getBoundingClientRect().top +
          window.pageYOffset -
          offset;

        window.scrollTo({
          top,
          behavior: "smooth"
        });
      }
    });
  });

  /* ============================
     2. Reveal on Scroll
     (Projects, cards, highlights)
  ============================ */
  const revealElements = document.querySelectorAll(
    ".project, .hero-card, .about-highlight"
  );

  const revealOnScroll = () => {
    const triggerPoint = window.innerHeight * 0.85;

    revealElements.forEach(el => {
      const elTop = el.getBoundingClientRect().top;

      if (elTop < triggerPoint) {
        el.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // run on load

  /* ============================
     3. Hide / Show Navigation
     (Professional, non-distracting)
  ============================ */
  const nav = document.querySelector(".nav");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY && window.scrollY > 150) {
      nav.style.transform = "translateY(-100%)";
    } else {
      nav.style.transform = "translateY(0)";
    }
    lastScrollY = window.scrollY;
  });

  /* ============================
     4. Active Section Indicator
     (Optional but refined)
  ============================ */
  const sections = document.querySelectorAll("section[id]");
  const navItems = document.querySelectorAll(".nav-links a");

  const setActiveNav = () => {
    let currentSection = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        currentSection = section.getAttribute("id");
      }
    });

    navItems.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", setActiveNav);

  /* ============================
     5. Subtle Hover Intent (Projects)
     (Adds tactility, not noise)
  ============================ */
  const projects = document.querySelectorAll(".project");

  projects.forEach(project => {
    project.addEventListener("mouseenter", () => {
      project.style.transform = "translateY(-4px)";
    });

    project.addEventListener("mouseleave", () => {
      project.style.transform = "translateY(0)";
    });
  });

});