const DATA = {
  name: "Muhammad Balawal Safdar",
  initials: "MBS",
  url: "https://dillion.io",
  location: "Montreal, CA",
  locationLink: "https://www.google.com/maps/place/montreal",
  description:
    "CS student and builder, creating real projects across software and hardware.",
  summary:
    "I've always loved exploring electronics and software. Over the past few years, I've built projects, taken part in hackathons, and connected with others at networking events. These experiences have helped me sharpen my technical skills, sparked my interest in startups and creativity, and inspired me to turn ideas into real-world solutions. I enjoy challenging myself with new technologies, collaborating with like-minded people, and constantly finding ways to grow as a builder",
  avatarUrl: "/me.png",
  skills: [
    "C#",
    "Python",
    "TypeScript",
    "JavaScript",
    "SQL",
    "NoSQL",
    "Kotlin",
    "Bash",
    "ASP.NET Core",
    "React Native",
    "Next.js",
    "Node.js",
    "Express.js",
    "FastAPI",
    "Flask",
    "MongoDB",
    "PostgreSQL",
    "SQL Server",
    "Supabase",
    "Git",
    "JIRA",
    "Agile",
    "Postman",
    "CI/CD",
    "GitHub Actions",
    "AWS S3",
    "Azure",
    "Docker",
    "Microsoft 365",
    "Figma",
    "AutoCAD",
  ],
  navbar: [
    { href: "/", icon: "HomeIcon", label: "Home" },
    { href: "/blog", icon: "NotebookIcon", label: "Blog" },
  ],
  contact: {
    email: "muhammadbalawalsafdar@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/muhammadbalawal",
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/muhammadbalawal/",
        navbar: true,
      },
      Devpost: {
        name: "Devpost",
        url: "https://devpost.com/muhammadbalawal",
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Desnine",
      href: "https://desnine.com",
      badges: [],
      location: "Remote",
      title: "Developer Intern",
      logoUrl: "/Desnine-logo.png",
      start: "July 2025",
      end: "Current",
      description:
        "Collaborated on projects spanning branding, web development, digital design, and AI-driven automation. Developed skills in designing cohesive brand identities, optimizing websites for SEO, and creating digital assets for diverse industries.",
    },
    {
      company: "Solaire Canada Solar",
      href: "https://solairecanada.com",
      badges: [],
      location: "Pointe-Claire, CA",
      title: "Project Developer Intern",
      logoUrl: "/SolaireLogo.png",
      start: "June 2024",
      end: "September 2024",
      description:
        "Conducted comprehensive data collection and analysis on businesses in Montreal's West Island, collaborating with municipal Clean Technologies Departments to present findings. Designed and modeled solar panel systems using AutoCAD and SolidWorks, demonstrating to businesses the potential electricity savings achievable through solar energy adoption. Developed an informative and user-friendly landing page utilizing Figma, HTML, CSS, and JavaScript, enabling visitors to access detailed information about our services and the benefits of solar energy.",
    },
    {
      company: "Party Surprise",
      href: "https://partysurprise.ca",
      badges: [],
      location: "Vaudreuil-Dorion, CA",
      title: "Team Member",
      logoUrl: "/partysurpriseLogo.jpg",
      start: "March 2024",
      end: "June 2024",
      description:
        "Collaborated with a team to update and maintain the website using WordPress, ensuring an engaging and up-to-date online presence. Captured high-quality images and managed social media platforms to enhance brand visibility and audience engagement. Implemented SEO strategies to improve search engine rankings, driving more organic traffic to the store's website.",
    },
  ],
  education: [
    {
      school: "John Abbott College",
      href: "https://johnabbott.qc.ca",
      degree: "DEC Computer Science",
      logoUrl: "/JAClogo.png",
      start: "2023",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "Security Project - 67zip",
      href: "https://github.com/muhammadbalawal/Security_Project",
      githubUrl: "https://github.com/muhammadbalawal/Security_Project",
      dates: "2024",
      active: true,
      description:
        "A file compression tool with Windows context menu integration that provides standard zip compression and extraction functionality. Built as a security research project demonstrating ransomware behavior analysis, featuring AES-256 encryption, Windows registry integration, and a professional distribution website. Includes both encryption and decryption capabilities for educational security research purposes.",
      technologies: [
        "Python",
        "PyInstaller",
        "Cryptography",
        "AES-256",
        "Windows Registry",
        "HTML/CSS",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/muhammadbalawal/Security_Project",
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "MenuPlus",
      href: "https://github.com/muhammadbalawal/MenuPlus",
      githubUrl: "https://github.com/muhammadbalawal/MenuPlus",
      dates: "2024 - 2025",
      active: true,
      description:
        "An intelligent Android menu helper app that uses AI-powered analysis to provide personalized menu recommendations based on dietary profiles. Features OCR text extraction from menu images, AI-powered analysis with safety ratings (RED/YELLOW/GREEN), menu translation, and personalized recommendations. Built with Clean Architecture, MVVM pattern, and modern Android technologies including Jetpack Compose, Supabase, Firebase AI (Gemini), and Google Cloud Vision API.",
      technologies: [
        "Kotlin",
        "Jetpack Compose",
        "Material 3",
        "MVVM Architecture",
        "Supabase",
        "Firebase AI (Gemini)",
        "Google Cloud Vision API",
        "Hilt",
        "Retrofit",
        "StateFlow",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/muhammadbalawal/MenuPlus",
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "WPM - Pet Management System",
      href: "https://github.com/muhammadbalawal/Wpm",
      githubUrl: "https://github.com/muhammadbalawal/Wpm",
      dates: "2024",
      active: true,
      description:
        "A microservices-based application for managing pets and veterinary consultations built with ASP.NET Core 8.0. Demonstrates modern microservices architecture patterns including service-to-service communication, resilience handling with Polly retry policies, and in-memory caching strategies. The system consists of two independent services: Management API for pet/breed CRUD operations and Clinic service for veterinary consultations with HTTP resilience and caching.",
      technologies: [
        ".NET 8.0",
        "ASP.NET Core Web API",
        "Entity Framework Core",
        "Microservices Architecture",
        "Polly (HTTP Resilience)",
        "Docker",
        "C#",
        "Swagger/OpenAPI",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/muhammadbalawal/Wpm",
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "LeadIQ Pro (Gehl)",
      href: "https://github.com/muhammadbalawal/gehl",
      githubUrl: "https://github.com/muhammadbalawal/gehl",
      dates: "2024",
      active: true,
      description:
        "A comprehensive CRM platform designed for marketing agencies and sales teams making cold calls to local businesses. Features automated lead research, AI-powered call transcription and note-taking, integrated power dialer with Twilio, Google Maps lead scraping via Chrome extension, smart follow-up scheduling, and real-time analytics dashboard. Built with Next.js 14, TypeScript, Supabase, and integrates with OpenAI GPT-4, Twilio Voice API, and various third-party services.",
      technologies: [
        "Next.js 14",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "Twilio Voice API",
        "OpenAI GPT-4",
        "WebRTC",
        "Chrome Extension",
        "React Native",
        "Zustand",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/muhammadbalawal/gehl",
        },
        {
          type: "Live Demo",
          href: "https://gehl.vercel.app",
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "UdeMHacks 2025",
      dates: "March 2025",
      location: "Montreal, CA",
      description:
        "EyeCrop combines AI and smart hardware to protect homegrown fruits from birds and rodents in realtime. With a web app for remote monitoring and data tracking, it makes sustainable gardening simple and accessible.",
      image: "/udemhacks.png",
      mlh: "",
      links: [
        {
          type: "Devpost",
          title: "Devpost",
          href: "https://devpost.com/software/eyecrop",
          text: "Devpost",
        },
      ],
    },
    {
      title: "BagelHacks",
      dates: "March 2025",
      location: "Montreal, CA",
      description:
        "InterAce transforms the interview prep experience by simulating real-time conversations with AI interviewers, complete with facial expressions, lip-sync, and technical coding challenges. Built with cutting edge tools like Three.js, LiveKit, and FastAPI, it offers detailed performance insights to help users land their dream tech job.",
      image: "/bagelhacks.png",
      mlh: "",
      links: [
        {
          type: "Devpost",
          title: "Devpost",
          href: "https://devpost.com/software/interace",
          text: "Devpost",
        },
      ],
    },
    {
      title: "MariHacks 8.0",
      dates: "April 2025",
      location: "Montreal, CA",
      description:
        "Echo activates when emergency calls go unanswered, using AI to gather critical information, geolocate the caller, and send real-time reports to first responders. It earned an Honourable Mention in the AI Challenge at MariHacks 8.0 for its potential to save lives in high-stakes situations.",
      image: "/marihacks.png",
      mlh: "",
      links: [
        {
          type: "Devpost",
          title: "Devpost",
          href: "https://devpost.com/software/echo-yql8zg",
          text: "Devpost",
        },
      ],
    },
    {
      title: "JACHacks",
      dates: "April 2025",
      location: "Montreal, CA",
      description:
        "Sentinel is an end-to-end accident response platform that uses TensorFlow, Gemini AI, and Twilio to detect crashes from live traffic camera feeds, generate structured reports, and instantly notify emergency services all within seconds. It won first place overall at JACHacks 2025 for its potential to save lives using only existing city infrastructure.",
      image: "/jachacks.png",
      mlh: "",
      links: [
        {
          type: "Devpost",
          title: "Devpost",
          href: "https://devpost.com/software/sentintel",
          text: "Devpost",
        },
      ],
    },
    {
      title: "MiniDawsHacks.25",
      dates: "May 2025",
      location: "Montreal, CA",
      description:
        "Synapse is a powerful Chrome extension that leverages advanced AI to semantically analyze and search through YouTube video transcripts, allowing users to instantly navigate and jump directly to the exact moments they need—making research and learning faster and more efficient; this innovative tool was proudly awarded an Honourable Mention at miniDawsHacks 25 for its impact and technical excellence",
      image: "/minidaws.jpg",
      mlh: "",
      links: [
        {
          type: "Devpost",
          title: "Devpost",
          href: "https://devpost.com/software/synapse-3r7pje",
          text: "Devpost",
        },
      ],
    },
  ],
};
