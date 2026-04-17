export const caseStudies = [
  {
    slug: "laravel-modernization",
    title: "Zero-Downtime Laravel Modernization",
    subtitle:
      "Migrated a large-scale production SaaS platform from Laravel 5.4 to Laravel 12 without downtime, serving 2M+ users.",
  
    link: null, // no public link
  
    // heroImage: "/images/laravel/hero.png",
  
    // visuals: [
    //   {
    //     title: "Migration Strategy (Multi-Version Upgrade)",
    //     image: "/images/laravel/flow.png",
    //   },
    //   {
    //     title: "System Architecture During Migration",
    //     image: "/images/laravel/architecture.png",
    //   },
    // ],
  
    problem: [
      "Legacy Laravel 5.4 system running on outdated PHP version.",
      "High-risk upgrade due to large active user base (2M+ users).",
      "Direct upgrade was not feasible due to breaking changes across versions.",
    ],
  
    solution: [
      "Designed a step-by-step upgrade strategy across multiple Laravel versions.",
      "Incrementally upgraded PHP, dependencies, and codebase in controlled phases.",
      "Maintained production stability throughout the migration process.",
    ],
  
    architecture: [
      "Laravel 5.4 → 6 → 8 → 10 → 12 upgrade path",
      "PHP upgrades aligned with framework compatibility",
      "Refactoring of deprecated libraries and APIs",
      "Environment isolation for safe testing and rollout",
      "Zero-downtime deployment strategy",
    ],
  
    features: [
      "Incremental framework migration strategy",
      "Backward compatibility handling",
      "Dependency and package upgrades",
      "Database and API stability maintenance",
      "Continuous deployment without downtime",
    ],
  
    challenges: [
      "Handling breaking changes across multiple Laravel versions",
      "Maintaining system uptime during migration",
      "Ensuring data consistency and system integrity",
      "Refactoring legacy code without introducing regressions",
    ],
  
    outcome: [
      "Migrated system serving 2M+ users with zero downtime",
      "Reduced technical debt significantly",
      "Improved performance and scalability",
      "Enabled future feature development on modern stack",
    ],
  
    tech: [
      "Laravel",
      "PHP",
      "MySQL",
      "Nginx",
      "AWS",
    ],
  },
  {
    slug: "drafter-ai",
    title: "Drafter AI",
    subtitle:
      "AI-powered legal drafting platform using LLMs and scalable backend systems.",
    link: "https://www.drafterai.in/",

    heroImage: "/images/drafter-ai/hero.png",

    visuals: [
      {
        title: "Upload Document",
        image: "/images/drafter-ai/upload.png",
      },
      {
        title: "Reivew Suggestions",
        image: "/images/drafter-ai/suggestions.png",
      },
    ],

    problem: [
      "Legal drafting is time-consuming and requires expert knowledge.",
      "Businesses needed faster and scalable document generation.",
    ],

    solution: [
      "Built AI-powered drafting system using OpenAI.",
      "Implemented queue-based architecture for scalability.",
    ],

    architecture: [
      "Next.js frontend (SSR optimized)",
      "Node.js backend with queue processing",
      "MongoDB database",
      "OpenAI integration",
    ],

    features: [
      "Automated document generation",
      "Queue-based processing",
      "AI-powered structuring",
      "Responsive UI",
    ],

    challenges: [
      "Handling long AI tasks without blocking UI",
      "Optimizing prompts for accuracy",
    ],

    outcome: [
      "Reduced manual drafting effort",
      "Delivered scalable AI system",
    ],

    tech: ["Next.js", "Node.js", "MongoDB", "OpenAI", "Queue"],
  },

  {
    slug: "prodcure",
    title: "Prodcure",
    subtitle:
      "Procurement marketplace with AI-powered vendor discovery and workflow automation.",
    link: "https://www.prodcure.com/",

    heroImage: "/images/prodcure/hero.png",

    visuals: [
      {
        title: "Dashboard & Workflow",
        image: "/images/prodcure/products.png",
      },
      {
        title: "Vendor Discovery",
        image: "/images/prodcure/vendors.png",
      },
    ],

    problem: [
      "Procurement workflows were manual and inefficient.",
      "Vendor discovery lacked intelligence and structure.",
    ],

    solution: [
      "Built full SaaS procurement platform.",
      "Integrated AI-based vendor discovery and search.",
    ],

    architecture: [
      "Next.js frontend",
      "Node.js + Express backend",
      "MongoDB database",
      "LLM-based recommendation engine",
    ],

    features: [
      "Vendor discovery with AI",
      "Procurement workflow management",
      "Document handling system",
      "Scalable SaaS design",
    ],

    challenges: [
      "Designing flexible data models",
      "Ensuring relevant AI outputs",
      "Optimizing performance for heavy workflows",
    ],

    outcome: [
      "Improved procurement efficiency",
      "Reduced manual work",
      "Scalable system for growth",
    ],

    tech: ["Next.js", "Node.js", "Express", "MongoDB", "OpenAI"],
  },
  {
    slug: "web3-genesis",
    title: "Genesis Web3 Vesting Platform",
    subtitle:
      "A Web3-based token vesting platform with whitelist validation, contribution flow, and task-based early vesting.",
  
    link: "https://genesis.spad.xyz/",
  
    heroImage: "/images/genesis/hero.png",
  
    visuals: [
      {
        title: "Whitelist & Wallet Connect",
        image: "/images/genesis/wallet.png",
      },
      {
        title: "Contribution Flow",
        image: "/images/genesis/contribution.png",
      },
      {
        title: "Vesting Dashboard",
        image: "/images/genesis/vesting.png",
      },
    ],
  
    problem: [
      "Early-stage token launches require controlled access to investors.",
      "Managing vesting schedules and early unlock conditions is complex.",
      "Ensuring trust and transparency in token distribution is critical.",
    ],
  
    solution: [
      "Built a Web3 platform to manage whitelist, contributions, and vesting.",
      "Integrated wallet authentication and X (Twitter) account validation.",
      "Implemented smart contract-based token vesting with UI tracking.",
    ],
  
    architecture: [
      "Frontend: Next.js for responsive dApp UI",
      "Backend: Node.js for whitelist and validation logic",
      "Blockchain: Smart contracts for token vesting",
      "Wallet Integration: Web3 wallet connect flow",
      "Task System: Off-chain validation for early vest unlock",
    ],
  
    features: [
      "Wallet connect and user authentication",
      "Whitelist request and approval system",
      "Token contribution flow",
      "Linear vesting schedule tracking",
      "Task-based early vest unlock mechanism",
      "Real-time user dashboard",
    ],
  
    challenges: [
      "Synchronizing on-chain and off-chain data accurately",
      "Designing secure and fair vesting logic",
      "Handling wallet connection edge cases and UX issues",
      "Ensuring transparency in token distribution",
    ],
  
    outcome: [
      "Delivered a fully functional token vesting platform",
      "Enabled secure and transparent token distribution",
      "Improved user trust with clear vesting visibility",
    ],
  
    tech: [
      "Next.js",
      "Node.js",
      "Solidity",
      "Web3.js",
      "Smart Contracts",
    ],
  }
];