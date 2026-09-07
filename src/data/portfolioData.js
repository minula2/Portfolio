export const portfolioData = {
  personal: {
    name: "Minula",
    fullName: "Minula",
    role: "Aspiring Full-Stack Developer",
    status: "Seeking Full-Stack / Software Engineering Internship",
    availability: "Available for Immediate / Summer Internship",
    email: "minularox@gmail.com",
    github: "https://github.com/minula2",
    repoUrl: "https://github.com/minula2/Portfolio",
    linkedin: "https://linkedin.com/in/minula",
    location: "Colombo, Sri Lanka",
    bio: "Undergraduate student passionate about building performant web applications, clean RESTful architectures, and intuitive user experiences. Eager to contribute to high-impact engineering teams through an internship.",
    quickStats: [
      { label: "Status", value: "Undergraduate" },
      { label: "Focus", value: "Full-Stack Dev" },
      { label: "Projects Completed", value: "8+" },
      { label: "Core Stacks", value: "React • Node • Java" }
    ]
  },
  
  about: {
    headline: "Undergraduate student with a drive for full-stack craftsmanship and continuous learning.",
    paragraphs: [
      "I am an undergraduate student currently specializing in Software Engineering and Information Technology. My journey revolves around bridging the gap between elegant, user-centric frontends and robust, scalable backend architectures.",
      "Throughout my academic degree and personal projects, I have developed a strong foundation in Object-Oriented Programming (OOP), Data Structures & Algorithms, Database Design, and modern web application development.",
      "I am actively seeking an internship opportunity where I can collaborate with seasoned software engineers, tackle real-world architectural challenges, and deliver high-quality software."
    ],
    highlights: [
      {
        title: "Full-Stack Architecture",
        desc: "Comfortable building from React frontends down to Node.js / Spring Boot APIs and SQL/NoSQL databases."
      },
      {
        title: "Rapid Adaptability",
        desc: "Fast learner who quickly adopts new programming languages, frameworks, and modern developer tooling."
      },
      {
        title: "Clean Code & Best Practices",
        desc: "Committed to modular structure, readable documentation, Git version control, and unit testing principles."
      },
      {
        title: "Collaborative Mindset",
        desc: "Experienced with Agile teamwork, sprint deadlines, code reviews, and cross-functional communication."
      }
    ]
  },

  skills: {
    categories: [
      {
        id: "frontend",
        name: "Frontend Development",
        description: "Crafting fast, accessible, and responsive user interfaces.",
        items: [
          { name: "React.js", level: "Advanced", tag: "Library" },
          { name: "JavaScript (ES6+)", level: "Advanced", tag: "Language" },
          { name: "HTML5 / CSS3", level: "Expert", tag: "Core Web" },
          { name: "Responsive UI Design", level: "Advanced", tag: "Design" },
          { name: "Vite & Tooling", level: "Intermediate", tag: "Build Tool" },
          { name: "Tailwind / Vanilla CSS", level: "Advanced", tag: "Styling" }
        ]
      },
      {
        id: "backend",
        name: "Backend & APIs",
        description: "Designing reliable server-side services and secure endpoints.",
        items: [
          { name: "Node.js", level: "Advanced", tag: "Runtime" },
          { name: "Express.js", level: "Advanced", tag: "Framework" },
          { name: "Java", level: "Intermediate", tag: "Language" },
          { name: "Spring Boot", level: "Intermediate", tag: "Framework" },
          { name: "RESTful API Design", level: "Advanced", tag: "Architecture" },
          { name: "JWT & Authentication", level: "Intermediate", tag: "Security" }
        ]
      },
      {
        id: "database",
        name: "Databases & Storage",
        description: "Data modeling, optimization, and reliable storage solutions.",
        items: [
          { name: "PostgreSQL", level: "Intermediate", tag: "SQL" },
          { name: "MySQL", level: "Intermediate", tag: "SQL" },
          { name: "MongoDB", level: "Advanced", tag: "NoSQL" },
          { name: "Relational Schema Design", level: "Advanced", tag: "Modeling" },
          { name: "Query Optimization", level: "Intermediate", tag: "Performance" }
        ]
      },
      {
        id: "devops",
        name: "DevOps & Tools",
        description: "Streamlined deployment, collaboration, and development workflow.",
        items: [
          { name: "Git & GitHub", level: "Advanced", tag: "VCS" },
          { name: "Vercel / Cloud Hosting", level: "Advanced", tag: "Deployment" },
          { name: "Postman API Testing", level: "Advanced", tag: "Testing" },
          { name: "Docker Basics", level: "Learning", tag: "Containers" },
          { name: "npm / Package Managers", level: "Advanced", tag: "Tooling" },
          { name: "Agile / Scrum Methodologies", level: "Intermediate", tag: "Workflow" }
        ]
      }
    ]
  },

  projects: [
    {
      id: "smart-campus",
      title: "Smart Campus Management Platform",
      category: "Full-Stack Web App",
      badge: "Group Project Lead",
      summary: "An integrated web application designed for university campus facility tracking, classroom resource scheduling, and real-time maintenance reporting.",
      keyFeatures: [
        "Built dynamic dashboard with role-based access control (Admin, Lecturer, Student).",
        "Implemented RESTful endpoints in Node.js/Express with JWT session handling.",
        "Integrated interactive analytics and facility status tracking.",
        "Engineered relational database schema with PostgreSQL for resource allocation."
      ],
      tags: ["React", "Node.js", "Express", "PostgreSQL", "REST APIs", "JWT"],
      githubUrl: "https://github.com/minula2/Portfolio",
      liveDemo: "#",
      accent: "cyan"
    },
    {
      id: "ecommerce-engine",
      title: "Full-Stack E-Commerce & Order System",
      category: "Backend & Web App",
      badge: "Featured Project",
      summary: "A modern full-stack web storefront and merchant administration portal with cart management, inventory tracking, and payment pipeline emulation.",
      keyFeatures: [
        "Constructed modular frontend with state management for cart and catalog filtering.",
        "Designed Spring Boot / Java REST backend managing product catalogs and orders.",
        "Implemented secure checkout workflow with validation and transaction receipts.",
        "Containerized development environment using Docker for reproducible testing."
      ],
      tags: ["React", "Java", "Spring Boot", "MySQL", "Docker", "REST API"],
      githubUrl: "https://github.com/minula2/Portfolio",
      liveDemo: "#",
      accent: "purple"
    },
    {
      id: "fitflow-tracker",
      title: "FitFlow - Health & Activity Companion",
      category: "HCI & Frontend",
      badge: "Academic Exercise",
      summary: "Human-Computer Interaction focused fitness and routine companion prioritizing accessibility, quick logging, and visual habit metrics.",
      keyFeatures: [
        "Conducted heuristic evaluations and iterative user-centered prototyping.",
        "Implemented interactive charts and streak indicators for fitness motivation.",
        "Responsive, mobile-first design with accessible contrast and touch targets."
      ],
      tags: ["React", "JavaScript", "CSS3", "UI/UX Design", "HCI"],
      githubUrl: "https://github.com/minula2/Portfolio",
      liveDemo: "#",
      accent: "emerald"
    },
    {
      id: "dev-collab",
      title: "DevSync - Real-Time Code Collaboration",
      category: "Full-Stack System",
      badge: "Personal Project",
      summary: "A lightweight collaborative workspace prototype allowing developers to share code snippets, annotate in real-time, and run quick tests.",
      keyFeatures: [
        "Integrated WebSocket connection for real-time document synchronization.",
        "Created custom syntax-highlighted code editor with theme toggling.",
        "MongoDB storage for persistent user rooms, snippets, and revision history."
      ],
      tags: ["React", "Node.js", "WebSockets", "MongoDB", "Tailwind/CSS"],
      githubUrl: "https://github.com/minula2/Portfolio",
      liveDemo: "#",
      accent: "blue"
    }
  ],

  education: [
    {
      degree: "BSc (Hons) in Information Technology / Software Engineering",
      institution: "Faculty of Computing",
      status: "Undergraduate Student (Year 3)",
      period: "2023 - Present",
      description: "Focusing on core software engineering principles, distributed systems, web architectures, and collaborative engineering practices.",
      coursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming (OOP - Java/C++)",
        "Database Management Systems (DBMS)",
        "Web Application Development & Frameworks",
        "Software Architecture & Design Patterns",
        "Human-Computer Interaction (HCI)"
      ],
      highlights: [
        "Active participant in academic hackathons and tech symposiums.",
        "Completed hands-on software development lab projects and group assignments with distinction."
      ]
    },
    {
      degree: "High School Advanced Level (A/L) - Physical Sciences",
      institution: "Secondary Education",
      status: "Completed",
      period: "Graduated",
      description: "Completed rigorous curriculum in Combined Mathematics, Physics, and Chemistry.",
      coursework: ["Combined Mathematics", "Physics", "Chemistry"],
      highlights: ["Developed strong analytical, problem-solving, and logical deduction skills."]
    }
  ],

  experience: [
    {
      role: "Full-Stack Developer (Academic Project Lead)",
      organization: "Smart Campus PAF Engineering Initiative",
      period: "2024 - Present",
      type: "Academic & Practical Experience",
      responsibilities: [
        "Led a team of 4 engineering students in designing and deploying a multi-tier web application for campus operations.",
        "Architected RESTful API endpoints and integrated relational database schemas with data integrity constraints.",
        "Established Git workflow guidelines (feature branching, pull requests, and standard merge conventions) across the team.",
        "Delivered project milestones on schedule, meeting software quality and security guidelines."
      ]
    },
    {
      role: "Undergraduate Software Engineering Student & Open Source Learner",
      organization: "Personal & Academic Development",
      period: "2023 - Present",
      type: "Continuous Learning",
      responsibilities: [
        "Built 8+ full-stack and frontend projects experimenting with React, Node.js, Spring Boot, and modern cloud deployment.",
        "Actively practicing algorithm problem-solving to strengthen data structure intuition and edge-case handling.",
        "Regularly contributing code to personal GitHub repositories with clear documentation and README walkthroughs."
      ]
    }
  ]
};
