export const internships = [
  {
    id: "sem8-quickbite",
    semester: "Final Semester (Sem 8)",
    role: "Full Stack Developer Intern",
    company: "Parul University",
    duration: "Dec 2025 – Apr 2026",
    months: "4 Months",
    project: "QuickBite – Full Ecosystem Food Ordering Platform (MERN Stack)",
    description:
      "A large-scale food ordering platform similar to Swiggy/Zomato with 4 separate portals: Admin, Restaurant, Delivery, and Customer.",
    highlights: [
      "Architected a microservices-inspired system with 4 independent backends for modular scalability and easier debugging.",
      "Built real-time order tracking using Socket.IO, enabling live communication between customers, restaurants, and delivery partners.",
      "Implemented secure JWT-based authentication and Bcrypt password hashing across all portals.",
      "Developed Progressive Web App (PWA) support via Vite PWA plugin, making the Customer Portal installable on mobile devices.",
      "Integrated smooth UI animations using Framer Motion and GSAP for a premium user experience.",
      "Deployed on Microsoft Azure using Azure Static Web Apps with custom routing configuration and XSS security headers.",
    ],
    techStack: ["React.js (Vite)", "Node.js", "Express.js", "MongoDB", "Socket.IO", "JWT", "Bcrypt", "Framer Motion", "GSAP", "Azure"],
    letters: [
      {
        label: "Offer Letter",
        file: "/documents/internship/FINAL SEM INTERNSHIP (1).jpg",
      },
      {
        label: "Completion Certificate",
        file: "/documents/internship/FINAL SEM INTERNSHIP (2).jpg",
      },
    ],
    color: "from-accent-violet to-accent-cyan",
  },
  {
    id: "sem6-ecommerce",
    semester: "Semester 6",
    role: "Full Stack Developer Intern",
    company: "Parul University",
    duration: "Dec 2024 – Apr 2025",
    months: "4 Months",
    project: "Clothing E-Commerce Website (PHP)",
    description:
      "Developed a full-featured clothing e-commerce website with secure backend, RESTful APIs, and relational database management.",
    highlights: [
      "Developed and implemented backend routes and RESTful API endpoints for product, cart, and order management.",
      "Built secure user authentication system including login, registration, and session management using PHP.",
      "Designed and managed relational database schema using MySQL for products, users, and orders.",
      "Integrated server-side form validation and implemented input sanitization to prevent SQL injection.",
    ],
    techStack: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "Bootstrap", "Apache (XAMPP)"],
    letters: [
      {
        label: "Offer Letter",
        file: "/documents/internship/SEM 6 INTERNSHIP (1).jpeg",
      },
      {
        label: "Completion Certificate",
        file: "/documents/internship/SEM 6 INTERNSHIP (2).jpeg",
      },
    ],
    color: "from-emerald-500 to-cyan-400",
  },
];

export type Internship = (typeof internships)[number];
