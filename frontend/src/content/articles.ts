export type Article = {
  title: string;
  abstract: string;
  published: string;
  url: string;
  featured: boolean;
};

export const articles: Article[] = [
  {
    title: "Understanding LangChain: From Workflows to Intelligent Agents",
    abstract:
      "A practical introduction to AI agents, ReAct, tool calling, and guardrails—and how they let LangChain applications make decisions beyond predefined workflows.",
    published: "Jul 25, 2026",
    url: "https://medium.com/@nikoo.asadnejad.work/understanding-langchain-from-workflows-to-intelligent-agents-8593a2bdbe81",
    featured: false,
  },
  {
    title: "Understanding LangChain: Building Intelligent Workflows",
    abstract:
      "How sequential, parallel, conditional, branching, and dynamic chains connect LangChain building blocks into structured AI workflows.",
    published: "Jul 24, 2026",
    url: "https://medium.com/@nikoo.asadnejad.work/understanding-langchain-building-intelligent-workflows-765354005151",
    featured: false,
  },
  {
    title: "Understanding LangChain: The Building Blocks of Modern AI Applications",
    abstract:
      "An accessible guide to the chat models, messages, runnables, output parsers, callbacks, and middleware behind modern LangChain applications.",
    published: "Jul 24, 2026",
    url: "https://medium.com/@nikoo.asadnejad.work/understanding-langchain-the-building-blocks-of-modern-ai-applications-df56924076e4",
    featured: false,
  },
  {
    title: "Understanding Event Sourcing: Events, Aggregates, Streams, and Projections",
    abstract:
      "Part two of the Event Sourcing series explains immutable events, aggregate rules, event streams, rehydration, snapshots, and query-ready projections.",
    published: "Jun 18, 2026",
    url: "https://medium.com/@nikoo.asadnejad.work/understanding-event-sourcing-events-aggregates-streams-and-projections-5c69665d9bbd",
    featured: false,
  },
  {
    title: "Why CRUD Isn’t Enough: An Introduction to Event Sourcing",
    abstract:
      "An introduction to the limits of current-state CRUD storage and how immutable event histories improve auditability, temporal analysis, and business workflows.",
    published: "Jun 18, 2026",
    url: "https://medium.com/@nikoo.asadnejad.work/why-crud-isnt-enough-an-introduction-to-event-sourcing-e62b32786ab6",
    featured: false,
  },
  {
    title: "Stop Guessing Why Your API Is Slow: A Practical Guide to Observability with OpenTelemetry",
    abstract:
      "A practical guide to using logs, metrics, traces, and OpenTelemetry to investigate slow APIs with evidence instead of guesswork.",
    published: "Jun 11, 2026",
    url: "https://medium.com/@nikoo.asadnejad.work/stop-guessing-why-your-api-is-slow-a-practical-guide-to-observability-with-opentelemetry-d3a43ce6795b",
    featured: false,
  },
  {
    title: "C# Multithreading and Asynchronous Programming: Interview Questions Every .NET Developer Should Know",
    abstract:
      "A focused review of advanced C# multithreading and asynchronous programming concepts through the questions .NET engineers commonly face in interviews.",
    published: "Jun 5, 2026",
    url: "https://medium.com/@nikoo.asadnejad.work/c-multithreading-and-asynchronous-programming-interview-questions-every-net-developer-should-know-d371311320d8",
    featured: false,
  },
  {
    title: "Inside Modern AI Search: RAG, Embeddings, Vector Databases, and Similarity Algorithms",
    abstract:
      "A tour of modern retrieval systems covering embeddings, dense and sparse vectors, hybrid search, similarity metrics, vector databases, and the RAG pipeline.",
    published: "Jun 4, 2026",
    url: "https://medium.com/@nikoo.asadnejad.work/inside-modern-ai-search-rag-embeddings-vector-databases-and-similarity-algorithms-b282342e0286",
    featured: true,
  },
  {
    title: "OWASP Top 10 (2026): The Most Critical Web Application Security Risks Every Developer Should Understand",
    abstract:
      "A developer-focused explanation of the OWASP Top 10 security risks, why each category matters, and practical ways to reduce exposure in modern applications.",
    published: "Jun 2, 2026",
    url: "https://medium.com/@nikoo.asadnejad.work/owasp-top-10-2026-the-most-critical-web-application-security-risks-every-developer-should-d41531188c9a",
    featured: true,
  },
  {
    title: "AI vs. Machine Learning vs. Neural Networks vs. Deep Learning",
    abstract:
      "Clear explanations of how AI, machine learning, neural networks, and deep learning relate to one another, including the algorithms and architectures behind them.",
    published: "Nov 24, 2025",
    url: "https://medium.com/@nikoo.asadnejad.work/ai-vs-machine-learning-vs-neural-networks-vs-deep-learning-bc709468f863",
    featured: true,
  },
  {
    title: "Understanding the Model Context Protocol (MCP): How AI Apps Connect to the World",
    abstract:
      "How MCP hosts, clients, servers, data layers, and transports give AI applications a standardized way to use external tools, data, and actions.",
    published: "Nov 13, 2025",
    url: "https://medium.com/@nikoo.asadnejad.work/understanding-the-model-context-protocol-mcp-how-ai-apps-connect-to-the-world-1d62690c2ec9",
    featured: true,
  },
  {
    title: "From Monoliths to Societies: Understanding Agent-Oriented Software Engineering (AOSE)",
    abstract:
      "An introduction to software systems built as societies of autonomous, goal-oriented agents that communicate, coordinate, and adapt to changing environments.",
    published: "Sep 10, 2025",
    url: "https://medium.com/@nikoo.asadnejad.work/from-monoliths-to-societies-understanding-agent-oriented-software-engineering-aose-6552d52c3514",
    featured: false,
  },
  {
    title: "The Ultimate Guide to Deployment Strategies: Blue-Green, Canary, Rolling, and Beyond",
    abstract:
      "A comparison of recreate, rolling, blue-green, canary, shadow, A/B, feature-flag, and progressive deployment strategies and their tradeoffs.",
    published: "Sep 1, 2025",
    url: "https://medium.com/@nikoo.asadnejad.work/the-ultimate-guide-to-deployment-strategies-blue-green-canary-rolling-and-beyond-a5b916aed693",
    featured: false,
  },
  {
    title: "Cracking the Code: Why You Should Finally Learn Design Patterns",
    abstract:
      "Why recurring design problems deserve reusable solutions, and how design patterns help developers replace boilerplate with clearer, more maintainable structures.",
    published: "Jul 5, 2025",
    url: "https://medium.com/@nikoo.asadnejad.work/cracking-the-code-why-you-should-finally-learn-design-patterns-e604b830bae9",
    featured: false,
  },
  {
    title: "Managing the Secure Software Development Life Cycle: Bridging Methodologies and Management",
    abstract:
      "A management-oriented look at integrating security across planning, design, implementation, testing, deployment, and maintenance in the software lifecycle.",
    published: "Jun 4, 2025",
    url: "https://medium.com/@nikoo.asadnejad.work/managing-the-secure-software-development-life-cycle-bridging-methodologies-and-management-3360ce472588",
    featured: false,
  },
  {
    title: "Domain-Driven Design (DDD): A Practical Guide for Developers Who Want to Build Real Business Software",
    abstract:
      "A jargon-light guide to domains, subdomains, ubiquitous language, bounded contexts, and modeling software around real business rules.",
    published: "May 9, 2025",
    url: "https://medium.com/@nikoo.asadnejad.work/domain-driven-design-ddd-a-practical-guide-for-developers-who-want-to-build-real-business-6baaf0d11941",
    featured: false,
  },
  {
    title: "How Generative AI and Large Language Models Are Transforming Software",
    abstract:
      "An introduction to generative AI and LLM foundations—from tokens, transformers, and attention to sampling and context management—and their impact on software products.",
    published: "May 2, 2025",
    url: "https://medium.com/@nikoo.asadnejad.work/how-generative-ai-and-large-language-models-are-transforming-software-5e06c74b420b",
    featured: false,
  },
  {
    title: "Understanding ACID Principles in DBMS",
    abstract:
      "A clear explanation of atomicity, consistency, isolation, and durability and how these guarantees protect data integrity and reliability in transactional systems.",
    published: "Mar 6, 2025",
    url: "https://medium.com/@nikoo.asadnejad.work/understanding-acid-principles-in-dbms-9435e81070b4",
    featured: false,
  },
  {
    title: "The Ultimate Guide to Kubernetes Tools: Management, Monitoring, and Security",
    abstract:
      "A survey of tools that simplify Kubernetes cluster management, deployment, monitoring, networking, and security, with guidance on where each fits.",
    published: "Feb 27, 2025",
    url: "https://medium.com/@nikoo.asadnejad.work/the-ultimate-guide-to-kubernetes-tools-management-monitoring-and-security-83ab519c7a29",
    featured: false,
  },
  {
    title: "Essential Concepts Every Software Engineer Must Know",
    abstract:
      "A broad guide to the fundamental data structures, algorithms, architecture practices, quality principles, and tools engineers use to build maintainable systems.",
    published: "Feb 21, 2025",
    url: "https://medium.com/@nikoo.asadnejad.work/essential-concepts-every-software-engineer-must-know-43a9cf6b7ef2",
    featured: false,
  },
  {
    title: "Understanding Kubernetes Horizontal Pod Autoscaler (HPA)",
    abstract:
      "How Kubernetes HPA responds to changing demand, the metrics and configuration it relies on, and the role it plays in efficient application scaling.",
    published: "Feb 21, 2025",
    url: "https://medium.com/@nikoo.asadnejad.work/understanding-kubernetes-horizontal-pod-autoscaler-hpa-be134344706e",
    featured: false,
  },
  {
    title: "Unleashing Kubernetes: Deploying Scalable and Resilient Stateless Applications",
    abstract:
      "A practical introduction to deploying stateless workloads on Kubernetes for repeatable releases, horizontal scaling, and resilient operation.",
    published: "Feb 1, 2025",
    url: "https://medium.com/@nikoo.asadnejad.work/unleashing-kubernetes-deploying-scalable-and-resilient-stateless-applications-24075643cfae",
    featured: false,
  },
  {
    title: "Kubernetes Architecture: An In-Depth Exploration",
    abstract:
      "A detailed walkthrough of Kubernetes architecture and the control-plane and worker-node components that coordinate deployment, scaling, and cluster management.",
    published: "Jan 14, 2025",
    url: "https://medium.com/@nikoo.asadnejad.work/kubernetes-architecture-an-in-depth-exploration-4c625c65fa36",
    featured: false,
  },
  {
    title: "Common Pitfalls in .NET Development and How to Avoid Them",
    abstract:
      "A review of common .NET mistakes that undermine performance, reliability, and maintainability, with practical guidance for avoiding them.",
    published: "Jan 10, 2025",
    url: "https://medium.com/@nikoo.asadnejad.work/common-pitfalls-in-net-development-and-how-to-avoid-them-91854cb6a014",
    featured: false,
  },
  {
    title: "Data Structures in C#",
    abstract:
      "A practical comparison of core and concurrent C# data structures, their performance characteristics, and the workloads each collection best supports.",
    published: "Jan 3, 2025",
    url: "https://medium.com/@nikoo.asadnejad.work/data-structures-in-c-f88c310227af",
    featured: false,
  },
  {
    title: "Microservices at Scale: Docker Swarm’s Load Balancing and Raft Consensus Mechanisms",
    abstract:
      "How Docker Swarm uses service discovery, load balancing, and Raft consensus to coordinate scalable, fault-tolerant microservice deployments.",
    published: "Jan 3, 2025",
    url: "https://medium.com/@nikoo.asadnejad.work/microservices-at-scale-docker-swarms-load-balancing-and-raft-consensus-mechanisms-6a90af924e98",
    featured: false,
  },
  {
    title: "Cloud Computing vs. Serverless Computing",
    abstract:
      "A comparison of traditional cloud and serverless models across infrastructure control, scaling, operational effort, cost, and suitable workloads.",
    published: "Dec 27, 2024",
    url: "https://medium.com/@nikoo.asadnejad.work/cloud-computing-vs-serverless-computing-1acf8324b5eb",
    featured: false,
  },
  {
    title: "Cloud Computing and Its Ontology",
    abstract:
      "An overview of cloud computing concepts and the vocabulary that connects service models, deployment models, resources, providers, and consumers.",
    published: "Dec 27, 2024",
    url: "https://medium.com/@nikoo.asadnejad.work/cloud-computing-and-its-ontology-fe64dc1adea3",
    featured: false,
  },
  {
    title: "C# Multithreading and Concurrency: A Comprehensive Overview",
    abstract:
      "A foundation in C# concurrency and multithreading, explaining how applications coordinate multiple operations while staying responsive and correct.",
    published: "Nov 21, 2024",
    url: "https://medium.com/@nikoo.asadnejad.work/c-multithreading-and-concurrency-a-comprehensive-overview-08b0734a7a0e",
    featured: false,
  },
  {
    title: "Message Queues: Operational Models, Features, and Comparative Analysis",
    abstract:
      "A comparison of message-queue models and features for reliable, decoupled communication between independently deployable microservices.",
    published: "Nov 21, 2024",
    url: "https://medium.com/@nikoo.asadnejad.work/message-queues-operational-models-features-and-comparative-analysis-e5b0299cc47b",
    featured: false,
  },
];
