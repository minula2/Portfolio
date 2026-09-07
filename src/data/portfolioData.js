export const portfolioData = {
  personal: {
    name: "Minula",
    fullName: "Minula",
    role: "Full-Stack Developer",
    status: "Seeking Software Engineering / Full-Stack Internship",
    availability: "Available for Immediate / Summer Internship",
    avatar: "/profile.jpg",
    email: "minularox@gmail.com",
    github: "https://github.com/minula2",
    repoUrl: "https://github.com/minula2/Portfolio",
    linkedin: "https://linkedin.com/in/minula",
    location: "Colombo, Sri Lanka",
    bio: "Undergraduate Software Engineering student passionate about crafting performant full-stack systems, clean RESTful APIs, and intuitive user experiences. Driven to learn fast and contribute to high-impact teams.",
    quickStats: [
      { label: "Status", value: "Undergraduate (Yr 3)" },
      { label: "Specialization", value: "Software Engineering" },
      { label: "Completed Projects", value: "8+ Projects" },
      { label: "Core Stack", value: "React • Node • MERN" }
    ]
  },
  
  about: {
    headline: "Undergraduate engineer passionate about building scalable web applications and clean code architectures.",
    paragraphs: [
      "I am an undergraduate student currently specializing in Software Engineering. My passion lies in crafting end-to-end web applications that combine intuitive, responsive user interfaces with resilient, well-documented backend services.",
      "Through university coursework and collaborative engineering assignments, I have built practical experience working across the complete software development lifecycle — from database schema design and RESTful API architecture to automated testing with Playwright and modern frontend development.",
      "I am actively seeking a Software Engineering / Full-Stack Developer internship where I can collaborate with experienced mentors, solve real-world problems, and deliver meaningful software."
    ],
    highlights: [
      {
        title: "Full-Stack Web Development",
        desc: "Hands-on experience building end-to-end applications using the MERN stack (MongoDB, Express, React, Node.js) and Java/Spring Boot."
      },
      {
        title: "Collaborative Academic Leadership",
        desc: "Led university group projects (PAF Smart Campus) implementing Git branching conventions, sprint tasks, and peer code reviews."
      },
      {
        title: "Automated QA & Testing",
        desc: "Experience writing end-to-end automated test suites with Playwright for web applications and user input conversion engines."
      },
      {
        title: "Rapid Learning & Adaptability",
        desc: "Fast learner who readily embraces modern developer tooling, cloud hosting platforms (Vercel, Docker), and emerging web technologies."
      }
    ]
  },

  skills: {
    categories: [
      {
        id: "frontend",
        name: "Frontend Development",
        description: "Building responsive, modern, and accessible user interfaces.",
        items: [
          { name: "React.js", level: "Advanced", tag: "Library" },
          { name: "JavaScript (ES6+)", level: "Advanced", tag: "Core Language" },
          { name: "HTML5 & CSS3", level: "Expert", tag: "Web Standard" },
          { name: "Responsive Design", level: "Advanced", tag: "UI/UX" },
          { name: "Vite & Tooling", level: "Advanced", tag: "Build Tool" },
          { name: "CSS Modules & Flexbox", level: "Advanced", tag: "Layout" }
        ]
      },
      {
        id: "backend",
        name: "Backend & REST APIs",
        description: "Architecting modular server-side logic and secure API endpoints.",
        items: [
          { name: "Node.js", level: "Advanced", tag: "Runtime" },
          { name: "Express.js", level: "Advanced", tag: "Framework" },
          { name: "Java", level: "Intermediate", tag: "Language" },
          { name: "Spring Boot", level: "Intermediate", tag: "Framework" },
          { name: "RESTful Architecture", level: "Advanced", tag: "API Design" },
          { name: "Authentication & JWT", level: "Intermediate", tag: "Security" }
        ]
      },
      {
        id: "database",
        name: "Databases & Storage",
        description: "Data modeling, schema design, and query optimization.",
        items: [
          { name: "MongoDB", level: "Advanced", tag: "NoSQL" },
          { name: "Mongoose ODM", level: "Advanced", tag: "Data Modeling" },
          { name: "PostgreSQL", level: "Intermediate", tag: "Relational SQL" },
          { name: "MySQL", level: "Intermediate", tag: "Relational SQL" },
          { name: "Database Schema Design", level: "Advanced", tag: "Architecture" }
        ]
      },
      {
        id: "devops",
        name: "Testing & DevOps Tools",
        description: "Automated testing, version control, and cloud deployment pipelines.",
        items: [
          { name: "Playwright E2E Testing", level: "Advanced", tag: "QA & Testing" },
          { name: "Git & GitHub", level: "Advanced", tag: "Version Control" },
          { name: "Vercel Cloud Hosting", level: "Advanced", tag: "Deployment" },
          { name: "Postman API Testing", level: "Advanced", tag: "API Tool" },
          { name: "Docker Basics", level: "Learning", tag: "Containers" },
          { name: "Agile & Scrum Sprints", level: "Intermediate", tag: "Process" }
        ]
      }
    ]
  },

  projects: [
    {
      id: "smart-campus",
      title: "Smart Campus Management Platform",
      category: "University PAF Group Project",
      badge: "Team Project (PAF 2026)",
      summary: "A comprehensive university campus resource management and facility scheduling web platform developed as an IT3030 PAF (Practical Application Framework) project.",
      keyFeatures: [
        "Constructed dynamic frontend interface for facility reservations and asset condition tracking.",
        "Implemented secure Node.js/Express backend API with role-based permissions.",
        "Integrated MongoDB database with schema validation and transactional updates.",
        "Collaborated using Git branch workflows, pull request reviews, and sprint milestones."
      ],
      tags: ["React", "Node.js", "Express", "MongoDB", "REST APIs", "PAF 2026"],
      githubUrl: "https://github.com/minindumadhawa/it3030-paf-2026-smart-campus-group47",
      liveDemo: "https://github.com/minindumadhawa/it3030-paf-2026-smart-campus-group47",
      accent: "blue"
    },
    {
      id: "careerpath",
      title: "CareerPath - Student Career Roadmap Platform",
      category: "Full-Stack Web App",
      badge: "Featured Repository",
      summary: "An interactive guidance web application designed to help undergraduate students explore career specializations, track skill requirements, and map learning paths.",
      keyFeatures: [
        "Modular JavaScript & React frontend with responsive path navigation.",
        "Structured catalog of industry software engineering roles and prerequisite tech stacks.",
        "Clean component hierarchy with persistent state and bookmarking."
      ],
      tags: ["JavaScript", "React", "Node.js", "UI/UX", "Career Guidance"],
      githubUrl: "https://github.com/minula2/CareerPath",
      liveDemo: "https://github.com/minula2/CareerPath",
      accent: "lime"
    },
    {
      id: "mern-crud",
      title: "Enterprise MERN CRUD Application",
      category: "Full-Stack Architecture",
      badge: "MERN Stack Project",
      summary: "A robust full-stack data management application demonstrating production-grade CRUD operations, REST API routing, and reactive client state management.",
      keyFeatures: [
        "Full Create, Read, Update, and Delete lifecycles connected to a cloud MongoDB database.",
        "Express.js REST API with input validation, error handling middleware, and CORS security.",
        "Interactive React user interface with optimistic updates and instant feedback notifications."
      ],
      tags: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs"],
      githubUrl: "https://github.com/minula2/MERN_CRUD",
      liveDemo: "https://github.com/minula2/MERN_CRUD",
      accent: "emerald"
    },
    {
      id: "singlish-playwright",
      title: "Singlish Playwright Automated Testing Suite",
      category: "QA & Software Testing (ITPM)",
      badge: "Automated Testing",
      summary: "End-to-end automated testing framework engineered with Playwright for Singlish phonetics conversion and transliteration verification as part of ITPM coursework.",
      keyFeatures: [
        "Designed comprehensive E2E test suites covering edge cases, character mappings, and UI assertions.",
        "Implemented headless automated browser test executions with detailed execution reports.",
        "Maintained high test coverage adhering to software quality assurance standards."
      ],
      tags: ["Playwright", "JavaScript", "Automation Testing", "E2E", "ITPM"],
      githubUrl: "https://github.com/minula2/singlish-playwright-itpm",
      liveDemo: "https://github.com/minula2/singlish-playwright-itpm",
      accent: "purple"
    },
    {
      id: "fitflow-tracker",
      title: "FitFlow - Health & Activity Routine Companion",
      category: "HCI Lab Project",
      badge: "HCI University Exercise",
      summary: "A user-centered health and habit tracking web concept developed for IT3060 Human-Computer Interaction, focusing on accessibility, micro-interactions, and visual feedback.",
      keyFeatures: [
        "Conducted heuristic evaluations and user task flows to minimize cognitive friction.",
        "Interactive activity logging with streak progress counters and motivational visual cues.",
        "Responsive, high-contrast mobile-friendly layout tested for accessibility compliance."
      ],
      tags: ["React", "JavaScript", "HCI Principles", "UI/UX Design", "Heuristic Analysis"],
      githubUrl: "https://github.com/minula2/Portfolio",
      liveDemo: "https://github.com/minula2/Portfolio",
      accent: "dark"
    }
  ],

  education: [
    {
      degree: "BSc (Hons) in Information Technology / Software Engineering",
      institution: "Faculty of Computing",
      status: "Undergraduate Student (Year 3)",
      period: "2023 - Present",
      description: "Rigorous academic training covering computer science fundamentals, full-stack development, software quality engineering, and collaborative team delivery.",
      coursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming (OOP)",
        "Database Management Systems (DBMS)",
        "Web Application Development & Frameworks (PAF)",
        "IT Project Management & Testing (ITPM)",
        "Human-Computer Interaction (HCI)"
      ],
      highlights: [
        "Successfully completed team software development project (PAF Smart Campus) with distinction.",
        "Strong foundation in algorithmic problem-solving and clean architectural patterns."
      ]
    },
    {
      degree: "G.C.E. Advanced Level (A/L) - Physical Science Stream",
      institution: "Secondary Education",
      status: "Completed",
      period: "Graduated",
      description: "Completed rigorous physical science curriculum developing logical deduction and mathematical problem-solving skills.",
      coursework: ["Combined Mathematics", "Physics", "Chemistry"],
      highlights: ["Strong foundation in logical reasoning and analytical thinking."]
    }
  ],

  experience: [
    {
      role: "Full-Stack Developer (Academic Group Lead)",
      organization: "Smart Campus PAF Engineering Project (Group 47)",
      period: "2024 - 2026",
      type: "Academic & Practical Experience",
      responsibilities: [
        "Collaborated with student engineers to build an integrated campus management platform using React and Node.js.",
        "Implemented RESTful endpoints and integrated database persistence with MongoDB.",
        "Established team Git collaboration workflow (branch naming, pull requests, and code merges).",
        "Participated in sprint standups, feature demonstrations, and academic milestone evaluations."
      ]
    },
    {
      role: "Undergraduate Software Engineering Student & Builder",
      organization: "Personal & Academic Development",
      period: "2023 - Present",
      type: "Continuous Learning",
      responsibilities: [
        "Developed multiple full-stack applications (CareerPath, MERN CRUD, FitFlow) to deepen practical software skills.",
        "Engineered automated test suites using Playwright for regression and end-to-end verification.",
        "Actively seeking an internship opportunity to apply my skills to real production software engineering challenges."
      ]
    }
  ]
};
