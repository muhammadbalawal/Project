document.addEventListener("DOMContentLoaded", () => {
  populateHero();
  populateSkills();
  populateWork();
  populateEducation();
  populateProjects();
  populateHackathons();
  populateContact();
  initNavbar();
  initSmoothCursor();
  initScrollProgress();
  initAOS();
  initGSAPAnimations();
  setTimeout(() => {
    initParticles();
  }, 100);
  initTiltEffects();
  initTypedAnimation();
  initMagneticButtons();
});

function populateHero() {
  document.getElementById("location").textContent = DATA.location;
  document.getElementById("name").textContent = DATA.name;
  document.getElementById("description").textContent = DATA.description;
  document.getElementById("summary").textContent = DATA.summary;

  const socialLinksContainer = document.getElementById("social-links");
  const socials = [
    { url: DATA.contact.social.GitHub.url, icon: "github" },
    { url: DATA.contact.social.LinkedIn.url, icon: "linkedin" },
    { url: `mailto:${DATA.contact.email}`, icon: "mail" },
  ];

  socials.forEach((social) => {
    const link = document.createElement("a");
    link.href = social.url;
    link.className = "social-link";
    if (social.icon !== "mail") {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
    link.innerHTML = getIconSVG(social.icon);
    socialLinksContainer.appendChild(link);
  });
}

function populateSkills() {
  const skillsGrid = document.getElementById("skills-grid");
  DATA.skills.forEach((skill) => {
    const skillTag = document.createElement("span");
    skillTag.className = "skill-tag";
    skillTag.textContent = skill;
    skillsGrid.appendChild(skillTag);
  });
}

function populateWork() {
  const workTimeline = document.getElementById("work-timeline");
  DATA.work.forEach((job, index) => {
    const item = document.createElement("div");
    item.className = "timeline-item";
    item.setAttribute("data-aos", "fade-right");
    item.setAttribute("data-aos-delay", index * 150);
    item.setAttribute("data-aos-duration", "800");
    item.innerHTML = `
            <div class="timeline-header">
                <div class="timeline-title">
                    <h3>${job.title}</h3>
                    <p>${job.company}</p>
                </div>
                <div class="timeline-meta">
                    <div class="timeline-meta-item">
                        ${getIconSVG("calendar")}
                        <span>${job.start} - ${job.end}</span>
                    </div>
                    <div class="timeline-meta-item" style="margin-top: 0.25rem;">
                        ${getIconSVG("map-pin")}
                        <span>${job.location}</span>
                    </div>
                </div>
            </div>
            <p class="timeline-description">${job.description}</p>
        `;
    workTimeline.appendChild(item);
  });
}

function populateEducation() {
  const educationTimeline = document.getElementById("education-timeline");
  DATA.education.forEach((edu, index) => {
    const item = document.createElement("div");
    item.className = "timeline-item";
    item.setAttribute("data-aos", "fade-right");
    item.setAttribute("data-aos-delay", index * 150);
    item.setAttribute("data-aos-duration", "800");
    item.innerHTML = `
            <div class="timeline-header">
                <div class="timeline-title">
                    <h3>${edu.school}</h3>
                    <p>${edu.degree}</p>
                </div>
                <div class="timeline-meta">
                    <div class="timeline-meta-item">
                        ${getIconSVG("calendar")}
                        <span>${edu.start} - ${edu.end}</span>
                    </div>
                </div>
            </div>
        `;
    educationTimeline.appendChild(item);
  });
}

function populateProjects() {
  const projectsGrid = document.getElementById("projects-grid");
  DATA.projects.forEach((project, index) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.setAttribute("data-aos", "zoom-in");
    card.setAttribute("data-aos-delay", index * 200);
    card.setAttribute("data-aos-duration", "800");
      const githubLink = project.githubUrl 
        ? `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="github-button">
            ${getIconSVG("github")}
            <span>View on GitHub</span>
          </a>`
        : '';
      
      const externalLink = project.href && project.href !== project.githubUrl
        ? `<a href="${project.href}" target="_blank" rel="noopener noreferrer" class="project-link" title="View Project">
            ${getIconSVG("external-link")}
          </a>`
        : '';
      
      card.innerHTML = `
            <div class="project-header">
                <h3>${project.title}</h3>
                ${externalLink ? `<div style="display: flex; gap: 0.5rem;">${externalLink}</div>` : ''}
            </div>
            <p class="project-date">${project.dates}</p>
            <p class="project-description">${project.description}</p>
            <div class="project-technologies">
                ${project.technologies
                  .map((tech) => `<span class="tech-tag">${tech}</span>`)
                  .join("")}
            </div>
            ${githubLink}
        `;
    projectsGrid.appendChild(card);
  });
}

function populateHackathons() {
  const hackathonsList = document.getElementById("hackathons-list");
  DATA.hackathons.forEach((hackathon, index) => {
    const card = document.createElement("div");
    card.className = "hackathon-card";
    card.setAttribute("data-aos", "fade-left");
    card.setAttribute("data-aos-delay", index * 100);
    card.setAttribute("data-aos-duration", "700");
    card.innerHTML = `
            <div class="hackathon-header">
                <div class="hackathon-title">
                    <h3>${hackathon.title}</h3>
                    <div class="hackathon-meta">
                        <div class="hackathon-meta-item">
                            ${getIconSVG("calendar")}
                            <span>${hackathon.dates}</span>
                        </div>
                        <div class="hackathon-meta-item">
                            ${getIconSVG("map-pin")}
                            <span>${hackathon.location}</span>
                        </div>
                    </div>
                </div>
                <a href="${
                  hackathon.links[0].href
                }" target="_blank" rel="noopener noreferrer" class="project-link">
                    ${getIconSVG("external-link")}
                </a>
            </div>
            <p class="hackathon-description">${hackathon.description}</p>
        `;
    hackathonsList.appendChild(card);
  });
}

function populateContact() {
  document.getElementById("email-btn").href = `mailto:${DATA.contact.email}`;
  document.getElementById(
    "footer-text"
  ).textContent = `© 2025 ${DATA.name}. Built with passion.`;
}

function initNavbar() {
  const navbar = document.getElementById("navbar");
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  let lastScroll = 0;
  
  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    
    if (currentScroll > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
    
    lastScroll = currentScroll;
  });

  if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener("click", () => {
      mobileMenuToggle.classList.toggle("active");
      navLinks.classList.toggle("active");
      document.body.style.overflow = navLinks.classList.contains("active") ? "hidden" : "";
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenuToggle.classList.remove("active");
        navLinks.classList.remove("active");
        document.body.style.overflow = "";
      });
    });

    document.addEventListener("click", (e) => {
      if (!navLinks.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        mobileMenuToggle.classList.remove("active");
        navLinks.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  }
}

function initSmoothCursor() {
  const cursor = document.querySelector(".cursor");
  const cursorFollower = document.querySelector(".cursor-follower");
  let mouseX = 0;
  let mouseY = 0;
  let followerX = 0;
  let followerY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";
  });

  function animateFollower() {
    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;
    
    cursorFollower.style.left = followerX + "px";
    cursorFollower.style.top = followerY + "px";
    
    requestAnimationFrame(animateFollower);
  }
  animateFollower();

  const hoverElements = document.querySelectorAll("a, button, .project-card, .hackathon-card, .skill-tag, .btn-primary");
  hoverElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.classList.add("cursor-hover");
      cursorFollower.classList.add("cursor-follower-hover");
    });
    el.addEventListener("mouseleave", () => {
      cursor.classList.remove("cursor-hover");
      cursorFollower.classList.remove("cursor-follower-hover");
    });
  });
}

function initAOS() {
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 600,
      easing: "ease-out-cubic",
      once: true,
      offset: 250,
      delay: 0,
      disable: "mobile",
      startEvent: "DOMContentLoaded",
      initClassName: false,
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 10,
      throttleDelay: 50,
    });
    
    setTimeout(() => {
      AOS.refresh();
    }, 100);
    
    setTimeout(() => {
      document.querySelectorAll("[data-aos]").forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight + 250 && rect.bottom > -250;
        if (isInViewport) {
          el.classList.add("aos-animate");
        }
      });
    }, 50);
  }
}

function initGSAPAnimations() {
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.refresh();

    gsap.utils.toArray(".timeline-item").forEach((item, index) => {
      const rect = item.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight + 200 && rect.bottom > -200;
      
      if (!isInViewport) {
        gsap.set(item, { opacity: 0, x: -50 });
      } else {
        gsap.set(item, { opacity: 1, x: 0 });
      }
      
      gsap.to(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 95%",
          toggleActions: "play none none none",
          once: true,
        },
        x: 0,
        opacity: 1,
        duration: 0.5,
        delay: index * 0.05,
        ease: "power2.out",
        immediateRender: false,
      });
    });

    gsap.utils.toArray(".project-card").forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight + 200 && rect.bottom > -200;
      
      if (!isInViewport) {
        gsap.set(card, { opacity: 0, scale: 0.9, rotation: 2 });
      } else {
        gsap.set(card, { opacity: 1, scale: 1, rotation: 0 });
      }
      
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 95%",
          toggleActions: "play none none none",
          once: true,
        },
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 0.5,
        delay: index * 0.08,
        ease: "power2.out",
        immediateRender: false,
      });
    });

    gsap.utils.toArray(".hackathon-card").forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight + 200 && rect.bottom > -200;
      
      if (!isInViewport) {
        gsap.set(card, { opacity: 0, x: 50 });
      } else {
        gsap.set(card, { opacity: 1, x: 0 });
      }
      
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 95%",
          toggleActions: "play none none none",
          once: true,
        },
        x: 0,
        opacity: 1,
        duration: 0.5,
        delay: index * 0.05,
        ease: "power2.out",
        immediateRender: false,
      });
    });
    
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    gsap.to("body", {
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
      },
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const offsetTop = target.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
}

function initScrollProgress() {
  const progressBar = document.querySelector(".scroll-progress");
  if (progressBar) {
    window.addEventListener("scroll", () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      progressBar.style.width = scrolled + "%";
    });
  }
}

function initParticles() {
  if (typeof particlesJS !== "undefined") {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 120,
          density: {
            enable: true,
            value_area: 600,
          },
        },
        color: {
          value: ["#3b82f6", "#2563eb", "#60a5fa", "#93c5fd"],
        },
        shape: {
          type: "circle",
          stroke: {
            width: 1,
            color: "#3b82f6",
          },
        },
        opacity: {
          value: 0.6,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.3,
            sync: false,
          },
        },
        size: {
          value: 4,
          random: true,
          anim: {
            enable: true,
            speed: 3,
            size_min: 2,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 180,
          color: "#3b82f6",
          opacity: 0.5,
          width: 1.5,
        },
        move: {
          enable: true,
          speed: 3,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 50,
            duration: 2,
            opacity: 10,
            speed: 3,
          },
          repulse: {
            distance: 250,
            duration: 0.4,
          },
          push: {
            particles_nb: 6,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    });
  }
}

function initTiltEffects() {
  if (typeof VanillaTilt !== "undefined") {
    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach((card) => {
      VanillaTilt.init(card, {
        max: 15,
        speed: 1000,
        glare: true,
        "max-glare": 0.2,
        scale: 1.02,
      });
    });

    const hackathonCards = document.querySelectorAll(".hackathon-card");
    hackathonCards.forEach((card) => {
      VanillaTilt.init(card, {
        max: 10,
        speed: 1000,
        glare: true,
        "max-glare": 0.15,
        scale: 1.01,
      });
    });

  }
}

function initTypedAnimation() {
  if (typeof Typed !== "undefined") {
    const descriptionElement = document.getElementById("description");
    if (descriptionElement && DATA.description) {
      const originalText = descriptionElement.textContent;
      descriptionElement.textContent = "";
      
      new Typed(descriptionElement, {
        strings: [originalText],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1000,
        showCursor: true,
        cursorChar: "|",
        loop: false,
      });
    }
  }
}

function initMagneticButtons() {
  const magneticElements = document.querySelectorAll(
    ".btn-primary, .social-link, .project-link, .nav-links a"
  );

  magneticElements.forEach((element) => {
    element.addEventListener("mousemove", function (e) {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const moveX = x * 0.3;
      const moveY = y * 0.3;

      element.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    element.addEventListener("mouseleave", function () {
      element.style.transform = "translate(0, 0)";
    });
  });
}

function getIconSVG(name) {
  const icons = {
    github:
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
    linkedin:
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>',
    calendar:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>',
    "map-pin":
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
    "external-link":
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>',
  };
  return icons[name] || "";
}
