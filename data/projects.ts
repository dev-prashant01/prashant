export interface Project {
  id: number;
  name: string;
  description: string;
  tags: string[];
  gradient: string;
  icon: string;
  pLink?: string;
  githubLink?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "E-Commerce Platform",
    description:
      "Full-stack shopping experience with cart, JWT auth, Stripe payment integration, and a complete admin dashboard for inventory management.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    gradient: "from-[#0f2027] via-[#203a43] to-[#2c5364]",
    icon: "🛒",
    pLink: "#",
    githubLink: "#",
    featured: true,
  },
  {
    id: 2,
    name: "Real-Time Chat App",
    description:
      "Real-time messaging with Socket.IO, room support, typing indicators, emoji reactions, and persistent message history via MongoDB.",
    tags: ["React", "Socket.IO", "Node.js", "MongoDB"],
    gradient: "from-[#1a0533] via-[#2d1b69] to-[#11998e]",
    icon: "💬",
    pLink: "#",
    githubLink: "#",
    featured: true,
  },
  {
    id: 3,
    name: "Task Manager — Kanban",
    description:
      "Drag-and-drop Kanban board with JWT auth, user roles, deadline tracking, priority labels, and team collaboration features.",
    tags: ["Next.js", "Tailwind", "MongoDB", "Redux"],
    gradient: "from-[#0d1117] via-[#1b2838] to-[#2c1810]",
    icon: "📋",
    pLink: "#",
    githubLink: "#",
  },
  {
    id: 4,
    name: "Analytics Dashboard",
    description:
      "Data visualization dashboard with interactive charts, date range filters, CSV export, and a REST API serving aggregated metrics.",
    tags: ["React", "Express", "MySQL", "Chart.js"],
    gradient: "from-[#0a0a0a] via-[#1a1a2e] to-[#003d2e]",
    icon: "📊",
    pLink: "#",
    githubLink: "#",
  },
  {
    id: 5,
    name: "Auth Boilerplate",
    description:
      "Production-ready auth system: JWT + refresh tokens, Google OAuth, email verification, password reset, and role-based access control.",
    tags: ["Node.js", "Express", "JWT", "MongoDB"],
    gradient: "from-[#1a0a2e] via-[#2d1b3d] to-[#1a0a0a]",
    icon: "🔐",
    pLink: "#",
    githubLink: "#",
  },
  {
    id: 6,
    name: "Travel Blog CMS",
    description:
      "Content platform with a rich Markdown editor, Cloudinary image uploads, SEO meta generation, comments system, and tag filtering.",
    tags: ["Next.js", "Tailwind", "MongoDB", "Cloudinary"],
    gradient: "from-[#0f0c29] via-[#302b63] to-[#0f1c35]",
    icon: "🌍",
    pLink: "#",
    githubLink: "#",
  },
];
