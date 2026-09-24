export type Project = {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  repositoryUrl: string;
  featured: boolean;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  achievements: string[];
};

export const profile = {
  name: "Nikoo Asadnejad",
  title: "Senior Software Engineer",
  email: "nikoo.asadnejad.work@gmail.com",
  phone: "0989101330730",
  location: "Tehran, Iran",
  github: "https://github.com/Nikoo-Asadnejad",
  linkedin: "https://www.linkedin.com/in/nikoo-asadnejad-84611b180/",
  medium: "https://medium.com/@nikoo.asadnejad.work",
  portrait: "/assets/nikoo-asadnejad.jpeg",
  cv: "/assets/nikoo-asadnejad-cv.pdf",
  shortSummary:
    "I design reliable, high-performance software with C#, .NET, distributed systems, and modern architecture practices. I care about ownership, clear engineering decisions, and products that create meaningful business value.",
  summary: [
    "Senior Software Engineer with five years of experience designing and developing scalable, high-performance applications using C#, .NET, and modern software architecture principles in Agile and Scrum environments.",
    "I build distributed and business-critical platforms with microservices, Domain-Driven Design, CQRS, gRPC, RabbitMQ, Redis, MongoDB, SQL Server, and REST APIs. My work also covers system design, performance optimization, observability, and software architecture.",
    "Alongside the Microsoft ecosystem, I use foundational Python and Go knowledge for cloud-native and AI-related projects. I am especially interested in AI engineering, agentic systems, Kubernetes, observability, and intelligent automation.",
    "I am currently pursuing a Master's degree in Software Engineering, researching AI-driven autoscaling for Kubernetes and cloud-native environments.",
  ],
};

export const technologyHighlights = [
  { name: "C#", icon: "csharp" },
  { name: ".NET", icon: "dotnet" },
  { name: "SQL Server", icon: "sqlserver" },
  { name: "Entity Framework", icon: "entityframework" },
  { name: "RabbitMQ", icon: "rabbitmq" },
  { name: "Redis", icon: "redis" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "Elasticsearch", icon: "elasticsearch" },
  { name: "Docker", icon: "docker" },
  { name: "Kubernetes", icon: "kubernetes" },
  { name: "Python", icon: "python" },
  { name: "Go", icon: "go" },
  { name: "Git", icon: "git" },
  { name: "JavaScript", icon: "javascript" },
  { name: "Linux", icon: "linux" },
] as const;

export const projects: Project[] = [
  {
    slug: "notification-service",
    title: "NotificationService",
    description:
      "A microservice-based notification platform using asynchronous RabbitMQ communication. A central API dispatches requests to dedicated Email, SMS, and Push Notification services for scalable, reliable, and decoupled delivery.",
    technologies: ["C#", ".NET", "RabbitMQ", "Microservices"],
    repositoryUrl: "https://github.com/Nikoo-Asadnejad/NotificationService",
    featured: true,
  },
  {
    slug: "linkedin-post-creator-agent",
    title: "LinkedIn Post Creator Agent",
    description:
      "A multi-agent AI system built with Python, LangChain, and Ollama that researches topics and produces ready-to-publish LinkedIn posts with accompanying images through asynchronous parallel workflows.",
    technologies: ["Python", "LangChain", "Ollama", "Agentic AI"],
    repositoryUrl: "https://github.com/Nikoo-Asadnejad/post_creator_agent",
    featured: true,
  },
  {
    slug: "kibana-dashboard-generator",
    title: "Kibana Dashboard Generator",
    description:
      "An automated solution that reads Swagger/OpenAPI specifications and generates dedicated Kibana dashboards with endpoint-level HTTP status and operational metrics.",
    technologies: ["Python", "Kibana", "OpenAPI", "Observability"],
    repositoryUrl: "https://github.com/Nikoo-Asadnejad/kibana_dashboard_generator",
    featured: true,
  },
  {
    slug: "practical-bash-scripts",
    title: "Practical Bash Scripts",
    description:
      "A collection of practical Linux scripts for system maintenance, monitoring, automation, service checks, backups, and operational alerts.",
    technologies: ["Bash", "Linux", "Automation"],
    repositoryUrl: "https://github.com/Nikoo-Asadnejad/Practical_BashScripts",
    featured: false,
  },
  {
    slug: "code-reviewer",
    title: "CodeReviewer",
    description:
      "An AI-powered pull-request review system designed to automate code reviews across repositories, issue trackers, and multiple large language models.",
    technologies: ["C#", ".NET", "AI", "Code Review"],
    repositoryUrl: "https://github.com/Nikoo-Asadnejad/CodeReviewer",
    featured: false,
  },
  {
    slug: "observability",
    title: "Observability",
    description:
      "A lightweight, extensible C# library that adds health checks, metrics, tracing, and logging to .NET applications with minimal setup.",
    technologies: ["C#", ".NET", "OpenTelemetry", "Observability"],
    repositoryUrl: "https://github.com/Nikoo-Asadnejad/Observability",
    featured: false,
  },
  {
    slug: "manufacturing-system",
    title: "ManufacturingSystem",
    description:
      "A .NET 10 worker that models a manufacturing workflow driven by temperature and pressure measurements. It captures immutable sensor snapshots, evaluates workflow rules, and coordinates shared machine resources across eligible stages.",
    technologies: ["C#", ".NET 10", "Concurrency", "Dataflow"],
    repositoryUrl: "https://github.com/Nikoo-Asadnejad/ManufacturingSystem",
    featured: false,
  },
  {
    slug: "graceful-shutdown",
    title: "GracefulShutdown",
    description:
      "A lightweight .NET library for safely shutting down applications while allowing critical operations to complete, with support for draining and Kubernetes-aware application lifecycles.",
    technologies: ["C#", ".NET", "Kubernetes", "Graceful Shutdown"],
    repositoryUrl: "https://github.com/Nikoo-Asadnejad/GracefulShutdown",
    featured: false,
  },
  {
    slug: "product-service",
    title: "ProductService",
    description:
      "A sample product service that demonstrates Domain-Driven Design, CQRS, domain events, FluentValidation, and Clean Architecture for scalable and maintainable .NET applications.",
    technologies: ["C#", ".NET", "DDD", "CQRS"],
    repositoryUrl: "https://github.com/Nikoo-Asadnejad/ProductService",
    featured: false,
  },
  {
    slug: "linux-commands-cheat-sheet",
    title: "Linux Commands Cheat Sheet",
    description:
      "A practical reference for common Linux commands covering system navigation, files and permissions, process and service management, networking, SSH, package management, scheduling, and system monitoring.",
    technologies: ["Linux", "Shell", "System Administration", "LPIC"],
    repositoryUrl: "https://github.com/Nikoo-Asadnejad/Linux-Commands-Cheat-Sheet",
    featured: false,
  },
];

export const experiences: Experience[] = [
  {
    company: "Fly Today",
    role: "Senior Back-End Engineer",
    period: "Oct 2022 - Present",
    achievements: [
      "Own Train, Bus, Activities Booking, and Hotel Recommendation systems from requirements and architecture through delivery, monitoring, and maintenance.",
      "Design scalable systems with Clean Architecture, DDD, CQRS, microservices, SOA, modular monoliths, gRPC, RabbitMQ, SignalR, YARP, and Ocelot.",
      "Designed a financial ledger with Event Sourcing for transaction traceability, consistency, and auditability.",
      "Improved throughput with Redis, in-memory caching, asynchronous and parallel programming, SQL optimization, and MongoDB indexing.",
      "Implemented extensible wallet integrations and fuzzy and semantic hotel search using Elasticsearch.",
      "Improved reliability with OpenTelemetry, ELK, distributed tracing, metrics, health checks, Polly, retry policies, and distributed locking.",
      "Built CI/CD pipelines, containerized services with Docker, added unit and architecture tests, reviewed code, and mentored engineers.",
    ],
  },
  {
    company: "Kahkeshan Group of Companies | Karan",
    role: "Back-End Engineer",
    period: "Aug 2021 - Oct 2022",
    achievements: [
      "Developed features and refactored legacy APIs across a 12-microservice ASP.NET Core platform using SQL Server, Redis, and MongoDB.",
      "Deployed and maintained a web crawler and Telegram bots on Linux servers.",
      "Optimized search queries to deliver three-times-faster performance.",
      "Designed a multi-gateway payment service with the Factory pattern.",
      "Built a RabbitMQ and Quartz JobAlert service that matches resumes with relevant job advertisements.",
    ],
  },
  {
    company: "Kahkeshan Group of Companies | Karan",
    role: "Software Support and QA Specialist",
    period: "Sep 2018 - Oct 2022",
    achievements: [
      "Supported software quality and issue resolution for the Karan platform before progressing into backend engineering.",
    ],
  },
];


export const education = [
  {
    degree: "Master of Software Engineering",
    institution: "Azad University, Science and Research Branch",
    period: "2024 - Present",
  },
  {
    degree: "Bachelor of Software Engineering",
    institution: "Azad University, Tehran North Branch",
    period: "2018 - 2022",
  },
];

export const certifications = [
  { title: "Docker and Kubernetes", provider: "CanDo", issued: "Feb 2025", duration: "60h", topics: "Docker, Docker Swarm, Kubernetes" },
  { title: "LPIC-2", provider: "Arjang", issued: "Jul 2024", duration: "50h", topics: "Linux kernel, systemd, NGINX" },
  { title: "LPIC-1", provider: "CanDo", issued: "Apr 2024", duration: "45h", topics: "Linux commands, Bash scripts" },
  { title: "ASP.NET Core", provider: "Kahkeshan Noor", issued: "Nov 2021", duration: "140h", topics: ".NET Core, REST APIs" },
  { title: "MCSA Web Applications", provider: "Kahkeshan Noor", issued: "Aug 2020", duration: "20h", topics: "C#, .NET, ASP.NET, MVC" },
  { title: "Web Design", provider: "Tehran Institute of Technology", issued: "Apr 2019", duration: "80h", topics: "HTML, CSS, JavaScript, jQuery" },
];

export const skillGroups = [
  { title: "Architecture", skills: ["Software Architecture", "System Design", "Microservices", "Distributed Systems", "Clean Architecture", "DDD", "CQRS", "Event Sourcing", "Design Patterns", "SOLID"] },
  { title: "Backend", skills: ["C#", ".NET", "ASP.NET Core", "REST APIs", "gRPC", "SignalR", "GraphQL", "MVC", "WCF", "Entity Framework"] },
  { title: "Data & Messaging", skills: ["SQL Server", "MongoDB", "Redis", "Elasticsearch", "RabbitMQ"] },
  { title: "Platform & Quality", skills: ["Git", "CI/CD", "Docker", "Kubernetes", "Linux", "xUnit", "TDD", "Observability", "OpenTelemetry" , "ELK"] },
  { title: "Additional", skills: ["Python", "Go", "Bash", "HTML", "CSS", "JavaScript", "jQuery"] },
];
