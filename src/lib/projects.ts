export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  thumbnail: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "aura87-scrollytelling",
    title: "Aura87 Scrollytelling",
    subtitle: "Apple-style scroll-linked image sequence with 240-frame canvas animation.",
    description:
      "A high-performance scrollytelling landing page built for a premium mechanical keyboard brand. The core experience is a scroll-bound HTML5 canvas that renders a 240-frame teardown sequence — the keyboard explodes into a technical diagram and reassembles as the user scrolls. Every text overlay is precisely mapped to scroll progress using Framer Motion transforms, creating a cinematic product story that feels native to the browser.",
    techStack: ["Next.js 14", "Framer Motion", "HTML5 Canvas", "Tailwind CSS", "TypeScript"],
    thumbnail: "/keyboard-teardown/ezgif-frame-060.jpg",
    featured: true,
  },
  {
    id: "vajra-platform",
    title: "VAJRA Cyber Platform",
    subtitle: "India\u2019s first citizen-facing fraud intelligence dashboard.",
    description:
      "A comprehensive cybersecurity platform featuring an interactive SVG threat map of all 36 Indian states and union territories, real-time scam alert notifications, and a region-specific fraud intelligence database. Built with Angular and NgRx for complex state management, the platform includes live push notifications, a scam lookup engine, and bilingual translation support.",
    techStack: ["Angular", "NgRx", "TypeScript", "RxJS", "SVG", "i18n"],
    thumbnail: "/vajra_ai.png",
    githubUrl: "https://github.com/het2025",
    featured: true,
  },
  {
    id: "sentinelai",
    title: "SentinelAI Security Suite",
    subtitle: "AI-powered cybersecurity monitoring and threat detection system.",
    description:
      "A modular Python-based security assistant that performs real-time network monitoring, IP reputation tracking, event log analysis, and anomaly detection. Features automated firewall blocking, an alert system, and a rich terminal dashboard. Each module is independently testable and integrates through a central controller for comprehensive threat visibility.",
    techStack: ["Python", "psutil", "scapy", "Rich", "Requests"],
    thumbnail: "/keyboard-teardown/ezgif-frame-180.jpg",
    githubUrl: "https://github.com/het2025",
    featured: false,
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    subtitle: "Full-stack storefront with admin module and order management.",
    description:
      "A production-grade e-commerce application with a customer-facing storefront and a full admin panel. Features include restaurant management, order lifecycle tracking, user authentication, and MongoDB-backed data persistence. The admin module includes robust error handling, ObjectId validation middleware, and Mongoose 9.x compatibility.",
    techStack: ["Next.js", "Node.js", "MongoDB", "Mongoose", "Express", "JWT"],
    thumbnail: "/keyboard-teardown/ezgif-frame-030.jpg",
    githubUrl: "https://github.com/het2025",
    featured: false,
  },
  {
    id: "claude-artifacts-clone",
    title: "Claude Artifacts Clone",
    subtitle: "AI chatbot with live-preview code generation and vision capabilities.",
    description:
      "A high-fidelity clone of Claude\u2019s Artifacts feature built on the MERN stack. Includes a live-preview side panel for code generation with syntax highlighting, multi-modal vision capabilities for image and file attachments, and a polished chat interface with streaming responses. The artifacts panel supports HTML, CSS, and JavaScript preview in an isolated iframe sandbox.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "WebSocket"],
    thumbnail: "/keyboard-teardown/ezgif-frame-090.jpg",
    featured: false,
  },
  {
    id: "cybersecurity-ai-assistant",
    title: "Cybersecurity AI Assistant",
    subtitle: "Modular terminal-based security toolkit with real-time monitoring.",
    description:
      "An eight-module Python security assistant featuring real-time network monitoring, IP reputation analysis, log parsing, anomaly detection, automated alerts, firewall rule management, and a beautiful terminal dashboard built with Rich. Each module is designed for independent deployment while integrating seamlessly through a main controller script.",
    techStack: ["Python", "scapy", "Rich", "psutil", "SQLite"],
    thumbnail: "/keyboard-teardown/ezgif-frame-150.jpg",
    githubUrl: "https://github.com/het2025",
    featured: false,
  },
];
