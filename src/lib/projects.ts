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
    id: "vajra-platform",
    title: "VAJRA Cyber Platform",
    subtitle: "India's first citizen-facing fraud intelligence dashboard.",
    description:
      "A comprehensive cybersecurity platform featuring an interactive SVG threat map of all 36 Indian states and union territories, real-time scam alert notifications, and a region-specific fraud intelligence database. Built with Angular and NgRx for complex state management, the platform includes live push notifications, a scam lookup engine, and bilingual translation support.",
    techStack: ["Angular", "NgRx", "TypeScript", "RxJS", "SVG", "i18n"],
    thumbnail: "/vajra_ai.png",
    githubUrl: "https://github.com/het2025",
    featured: true,
  },
  {
    id: "quickbite-platform",
    title: "QuickBite Food Platform",
    subtitle: "Swiggy/Zomato-scale MERN food ordering ecosystem with 4 portals.",
    description:
      "A large-scale food ordering platform with 4 separate portals: Admin, Restaurant, Delivery, and Customer. Architected a microservices-inspired system with 4 independent backends for modular scalability. Features real-time order tracking with Socket.IO, JWT + Bcrypt authentication, Progressive Web App (PWA) support, smooth animations with Framer Motion and GSAP, and payout management for restaurants and delivery personnel. Deployed on Microsoft Azure Static Web Apps with XSS security headers.",
    techStack: ["React.js", "Node.js", "MongoDB", "Socket.IO", "Azure", "Framer Motion", "GSAP", "JWT"],
    thumbnail: "/keyboard-teardown/ezgif-frame-030.jpg",
    githubUrl: "https://github.com/het2025",
    featured: true,
  },
  {
    id: "aura87-scrollytelling",
    title: "Aura87 Scrollytelling",
    subtitle: "Apple-style scroll-linked image sequence with 240-frame canvas animation.",
    description:
      "A high-performance scrollytelling landing page built for a premium mechanical keyboard brand. The core experience is a scroll-bound HTML5 canvas that renders a 240-frame teardown sequence — the keyboard explodes into a technical diagram and reassembles as the user scrolls. Every text overlay is precisely mapped to scroll progress using Framer Motion transforms, creating a cinematic product story that feels native to the browser.",
    techStack: ["Next.js 14", "Framer Motion", "HTML5 Canvas", "Tailwind CSS", "TypeScript"],
    thumbnail: "/keyboard-teardown/ezgif-frame-060.jpg",
    featured: false,
  },
  {
    id: "cysafeclick",
    title: "CySafeClick",
    subtitle: "AI-powered cyber safety awareness platform for India — in Hindi & English.",
    description:
      "An Angular-powered cybersecurity awareness platform designed for Indian citizens. Teaches users about scams, phishing, and password safety in both Hindi and English. Features a phishing-link checker, direct reporting guidance for cybercrime helplines (1930), and contextual scam education for a multilingual audience.",
    techStack: ["Angular", "Node.js", "TypeScript", "i18n", "AI"],
    thumbnail: "/keyboard-teardown/ezgif-frame-090.jpg",
    githubUrl: "https://github.com/het2025",
    featured: false,
  },
  {
    id: "visionai-biometric",
    title: "VisionAI Biometric Intelligence",
    subtitle: "Desktop face detection & biometric analysis with real-time camera feed.",
    description:
      "A Python desktop application built with PyQt6 for real-time face detection and biometric analysis. Performs mask analysis, identity registration, and multi-threaded processing using a live camera feed. Data is stored locally for privacy, making it suitable for offline environments with sensitive biometric information.",
    techStack: ["Python", "PyQt6", "OpenCV", "Multi-threading"],
    thumbnail: "/keyboard-teardown/ezgif-frame-120.jpg",
    githubUrl: "https://github.com/het2025",
    featured: false,
  },
  {
    id: "ai-chat-platform",
    title: "AI Chat Platform",
    subtitle: "Multi-LLM chat interface with voice support and streaming responses.",
    description:
      "A full-stack AI chat platform that connects multiple Large Language Models in one unified interface. Features voice input/output support, multi-model orchestration, streaming responses, and a modern polished UI. Built with TypeScript for a type-safe, maintainable architecture.",
    techStack: ["TypeScript", "JavaScript", "React", "Node.js", "WebSocket"],
    thumbnail: "/keyboard-teardown/ezgif-frame-150.jpg",
    githubUrl: "https://github.com/het2025",
    featured: false,
  },
  {
    id: "port-scanner",
    title: "Port Scanner",
    subtitle: "Multithreaded Python tool for TCP port scanning and security reconnaissance.",
    description:
      "A Python-based network security tool for TCP port scanning, service detection, and banner grabbing. Uses multi-threading for performance and is designed for network analysis and security reconnaissance. One of my first hands-on cybersecurity projects, demonstrating understanding of low-level networking and security concepts.",
    techStack: ["Python", "Socket", "Multi-threading", "Networking"],
    thumbnail: "/keyboard-teardown/ezgif-frame-180.jpg",
    githubUrl: "https://github.com/het2025",
    featured: false,
  },
  {
    id: "sentinelai",
    title: "SentinelAI Security Suite",
    subtitle: "AI-powered cybersecurity monitoring and threat detection system.",
    description:
      "A modular Python-based security assistant that performs real-time network monitoring, IP reputation tracking, event log analysis, and anomaly detection. Features automated firewall blocking, an alert system, and a rich terminal dashboard. Each module is independently testable and integrates through a central controller for comprehensive threat visibility.",
    techStack: ["Python", "psutil", "scapy", "Rich", "SQLite"],
    thumbnail: "/keyboard-teardown/ezgif-frame-210.jpg",
    githubUrl: "https://github.com/het2025",
    featured: false,
  },
];
