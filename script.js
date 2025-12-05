// Populate the page with data from data.js
document.addEventListener("DOMContentLoaded", () => {
  populateHero();
  populateSkills();
  populateWork();
  populateEducation();
  populateProjects();
  populateHackathons();
  populateContact();
  initNavbar();
});

function populateHero() {
  document.getElementById("location").textContent = DATA.location;
  document.getElementById("name").textContent = DATA.name;
  document.getElementById("description").textContent = DATA.description;
  document.getElementById("summary").textContent = DATA.summary;

  // Social links
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
  DATA.work.forEach((job) => {
    const item = document.createElement("div");
    item.className = "timeline-item";
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
  DATA.education.forEach((edu) => {
    const item = document.createElement("div");
    item.className = "timeline-item";
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
  DATA.projects.forEach((project) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
            <div class="project-header">
                <h3>${project.title}</h3>
                <a href="${
                  project.href
                }" target="_blank" rel="noopener noreferrer" class="project-link">
                    ${getIconSVG("external-link")}
                </a>
            </div>
            <p class="project-date">${project.dates}</p>
            <p class="project-description">${project.description}</p>
            <div class="project-technologies">
                ${project.technologies
                  .map((tech) => `<span class="tech-tag">${tech}</span>`)
                  .join("")}
            </div>
        `;
    projectsGrid.appendChild(card);
  });
}

function populateHackathons() {
  const hackathonsList = document.getElementById("hackathons-list");
  DATA.hackathons.forEach((hackathon) => {
    const card = document.createElement("div");
    card.className = "hackathon-card";
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
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
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
