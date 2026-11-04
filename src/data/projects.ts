export interface Project {
  slug: string;
  name: string;
  desc: string;
  year: string;
  role: string;
  team: string;
  timeline: string;
  tools: string[];
}

// Edit each project's overview here. Replace the "Add…" placeholders with your details.
export const projects: Project[] = [
  {
    slug: "hexagon-builder",
    name: "NASA ARES Hexagon Builders",
    desc: "An interactive web activity for subject matter experts (SMEs), teachers, students, and anyone interested in sharing their career, career aspiration, or any topic they wish.",
    year: "2026",
    role: "Science Engagement Intern / Sole Developer",
    team: "Me + 2 Science Mentors",
    timeline: "May 2026 - Ongoing",
    tools: ["React", "JavaScript", "Tailwind", "Node", "Adobe Suite"],
  },
  {
    slug: "panda-pos",
    name: "Panda Express: Full-Stack Point of Sale System",
    desc: "Research and development of a full stack web application focused on providing an accessible kiosk experience for Panda Express restaurants.",
    year: "2024",
    role: "Full Stack Developer",
    team: "Team of 5",
    timeline: "August 2024 - December 2024",
    tools: ["Express", "EJS", "Bootstrap", "Node", "PostgreSQL"],
  },
  {
    slug: "pet-nest",
    name: "Pet Nest",
    desc: "Case study for a mobile household pet feeding management system meant to improve pet diet health through easier communication.",
    year: "2025 - 2026",
    role: "Researcher, Designer",
    team: "Solo",
    timeline: "October 2025 - January 2026",
    tools: ["Figma", "User Research", "Design Thinking"],
  },
  {
    slug: "viasat",
    name: "Viasat Account Management Mobile Application",
    desc: "Creating a seamless mobile experience that empowers Viasat customers to monitor usage, manage Wi-Fi plans, and access account information on the go.",
    year: "2026",
    role: "Full Stack Developer",
    team: "Team of 5",
    timeline: "August 2026 - Ongoing",
    tools: ["React Native", "Expo", "TypeScript", "GraphQL", "Figma", "Codex"],
  },
  {
    slug: "graphics",
    name: "Graphic Design",
    desc: "Graphic design work created as Philippine Student Association Co-Graphics Chair from May 2025 to May 2026.",
    year: "2025 - 2026",
    role: "Co-Graphics Chair",
    team: "Me + a co-chair",
    timeline: "May 2025 - May 2026",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Procreate"],
  },
]
