/**
 * Portfolio content
 * Update this file whenever your profile, experience or projects change.
 */

export const profile = {
  name: "Sumit Keshniya",
  handle: "sumitkeshniya",
  role: "Backend Software Engineer",
  domain: "sumitkeshniya.in",
  tagline:
    "I build reliable backend systems, REST APIs, cloud integrations and production-ready services with Java and Spring Boot.",
  availability: "Open to Backend Java / Spring Boot roles",
  email: "sumitkeshniya@gmail.com",
  github: "https://github.com/Sumitkeshniya",
  linkedin: "https://www.linkedin.com/in/sumit-keshniya-3a805a271/",
  resumeUrl: "https://drive.google.com/file/d/15mb3t-m8uuuhyq-EEgV4aArFWHWSNFmv/view?usp=drive_link/resume.pdf",

  about: [
    "I am a backend-focused software engineer with experience building production applications using Java, Spring Boot, Python and cloud platforms. I enjoy turning complex requirements into clean APIs, scalable services and maintainable systems.",
    "My work spans backend development, database design, cloud integrations and automation across AWS, Azure and GCP. I care about clear API contracts, efficient database queries, reliable background processing and code that is easy to maintain.",
  ],
};

// Shown in the hero terminal as the JSON response.
export const terminal = {
  stack: ["Java", "Spring Boot", "Python", "AWS", "Azure", "GCP"],
  focus: "Backend systems, APIs, cloud integrations",
  location: "India · Remote-friendly",
};

export const metrics = [
  {
    value: 1.5,
    decimals: 1,
    suffix: "+",
    label: "years of software development experience",
  },
  {
    value: 3,
    decimals: 0,
    suffix: "",
    label: "cloud platforms: AWS, Azure, GCP",
  },
  {
    value: 40,
    decimals: 0,
    suffix: "+",
    label: "REST APIs and backend endpoints",
  },
  {
    value: 3,
    decimals: 0,
    suffix: "",
    label: "production applications / platforms",
  },
];

export const principles = [
  {
    title: "Clean API design",
    body:
      "I prefer clear API contracts, structured responses and predictable error handling so backend services remain easy to consume and maintain.",
  },
  {
    title: "Production first",
    body:
      "I think beyond the happy path — database performance, authentication, logging, retries, background jobs and deployment all matter in production.",
  },
  {
    title: "Solve the root problem",
    body:
      "I focus on understanding the actual requirement before adding complexity, keeping implementations practical, maintainable and easy to evolve.",
  },
];

export const stack: Record<string, string[]> = {
  languages: ["Java", "Python", "TypeScript", "SQL"],
  frameworks: [
    "Spring Boot",
    "Spring Security",
    "Hibernate / JPA",
    "FastAPI",
    "Next.js",
  ],
  data: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Kafka"],
  cloud: [
    "AWS",
    "Azure",
    "GCP",
    "Docker",
    "Jenkins",
    "GitHub Actions",
  ],
  practices: [
    "REST API Design",
    "Microservices",
    "JWT / Security",
    "JUnit",
    "CI/CD",
    "Database Optimization",
    "Observability",
  ],
};

export const experience = [
  {
    hash: "e41b9a7",
    head: true,
    role: "Software Engineer",
    company: "ZionitAi Software Pvt Ltd",
    period: "Dec 2024 to present",
    points: [
      "Managing and building two SaaS products, GoodHealth and a Multi-Cloud Monitoring platform, working across backend, frontend and cloud integrations.",
      "Worked as the Lead Developer for GoodHealth, taking ownership of backend architecture, feature development, integrations and production deployments.",
      "Optimized SQL queries, database operations and resolved N+1 issues, reducing API response time by approximately 35%.",
      "Integrated Razorpay payment gateway with webhook-based payment status handling for secure and reliable transaction processing.",
      "Built and integrated a WhatsApp chatbot to automate appointment booking and improve the user booking experience.",
      "Built CI/CD pipelines using GitHub Actions, reducing manual deployment effort by approximately 60% and accelerating release cycles.",
      "Developed and integrated AWS, Azure and GCP cloud services for resource discovery, cost monitoring, security alerts and infrastructure inventory.",
      "Implemented Grafana-based monitoring dashboards to visualize application and infrastructure metrics, enabling easier performance monitoring and operational troubleshooting.",
      "Developed Python/FastAPI services for cloud automation and monitoring workflows alongside Java and Spring Boot backend services.",
    ],
    tags: [
      "Java",
      "Spring Boot",
      "Hibernate",
      "MySQL",
      "Python",
      "FastAPI",
      "Next.js",
      "React",
      "AWS",
      "Azure",
      "GCP",
      "Grafana",
      "GitHub Actions",
    ],
  },
  {
    hash: "7c02d5f",
    head: false,
    role: "Software Developer Intern",
    company: "Genesis Technologies Services",
    period: "Jun 2024 to Oct 2024",
    points: [
      "Worked on a Flight Booking System application using JavaScript, TypeScript, Next.js, NestJS and Spring Boot.",
      "Developed new features, resolved application bugs and improved backend stability and API performance.",
      "Contributed to UI/UX improvements and responsive frontend development using Next.js and TypeScript.",
      "Handled database operations including indexing, triggers, debugging and query optimization.",
    ],
    tags: [
      "JavaScript",
      "TypeScript",
      "Next.js",
      "NestJS",
      "Spring Boot",
      "SQL",
    ],
  },
  {
    hash: "0000001",
    head: false,
    role: "B.Tech, Information Technology",
    company: "Swami Vivekanand College of Engineering, Indore",
    period: "Graduated 2024",
    points: [
      "Built a foundation in data structures, databases, operating systems, computer networks and software engineering.",
    ],
    tags: ["Java", "SQL", "DSA", "DBMS"],
  },
];


export const featured = {
  name: "cloud-monitor",
  title: "Cloud Monitor",
  summary:
    "Multi-cloud monitoring platform for AWS, Azure and GCP resources, costs and security.",
  problem:
    "Managing resources across multiple cloud providers requires switching between different consoles, APIs and data models.",
  built:
    "Built cloud-provider integrations that discover infrastructure resources, collect cost information, retrieve security findings and normalize provider-specific data into a common backend model.",
  result:
    "A unified platform for viewing cloud infrastructure, resource details, costs, security information and operational data across AWS, Azure and GCP.",
  stack: [
    "Python",
    "FastAPI",
    "SQLModel",
    "AWS",
    "Azure",
    "GCP",
    "Docker",
  ],
  github: "https://github.com/your-username/cloud-monitor",
  live: "",
};

export const projects = [
  {
    name: "GoodHealth",
    description:
      "Doctor-patient appointment booking platform with timezone-aware scheduling, payments, authentication and video consultations.",
    stack: [
      "Java",
      "Spring Boot",
      "Hibernate",
      "MySQL",
      "Next.js",
      "JWT",
      "Razorpay",
      "Whereby",
    ],
    href: "https://github.com/your-username/goodhealth",
  },
  {
    name: "Cloud Monitor",
    description:
      "Multi-cloud monitoring platform that brings AWS, Azure and GCP resources, costs and security information into a unified system.",
    stack: [
      "Python",
      "FastAPI",
      "SQLModel",
      "AWS",
      "Azure",
      "GCP",
      "Docker",
    ],
    href: "https://github.com/your-username/cloud-monitor",
  },
  {
    name: "ZioTeams",
    description:
      "Business management platform covering HR, CRM, attendance, tasks, leave and vendor management.",
    stack: [
      "Java",
      "Spring Boot",
      "Hibernate",
      "MySQL",
      "React",
    ],
    href: "https://github.com/your-username/zioteams",
  },

];