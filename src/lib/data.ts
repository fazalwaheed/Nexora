import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

export const SOCIAL = {
  linkedin: "https://www.linkedin.com/in/fazal-waheed-106a59394/",
  github: "https://github.com/fazalwaheed",
  whatsapp: "https://wa.me/+923439266684",
  email: "fazalwaheed1345@gmail.com",
  // fiverr: "https://fiverr.com/yourprofile",
  // upwork: "https://upwork.com/freelancers/yourprofile",
};

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

export const SKILLS = [
  "React", "Next.js", "TypeScript", "Node.js", "MongoDB", "PostgreSQL",
  "TailwindCSS", "Framer Motion", "Python", "TensorFlow", "OpenAI", "Figma",
];

export const STATS = [
  { value: 10, suffix: "+", label: "Projects Delivered" },
  { value: 15, suffix: "+", label: "Happy Clients" },
  { value: 2, suffix: "y", label: "Years Experience" },
  { value: 13, suffix: "+", label: "Tech Stack" },
];

export const SERVICES = [
  { icon: "Code2", title: "Web Development", desc: "Pixel-perfect, lightning-fast websites built with modern frameworks." },
  { icon: "Layers", title: "MERN Stack", desc: "Full-stack apps with MongoDB, Express, React and Node.js." },
  { icon: "Zap", title: "Next.js Development", desc: "SSR, SSG and edge-rendered apps optimized for scale." },
  { icon: "Brain", title: "AI / ML Solutions", desc: "Custom models, integrations and intelligent automations." },
  { icon: "MessageSquare", title: "Chatbot Development", desc: "GPT-powered assistants, customer support bots and agents." },
  { icon: "Palette", title: "UI / UX Design", desc: "Beautiful, accessible interfaces that convert and delight." },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Mental Health Support Chatbot",
    category: "AI/ML",
    image: p2,
    desc: "Fine-tuned conversational AI chatbot offering empathetic mental health support, trained on curated dialogue datasets.",
    tech: ["Python", "Transformers", "PyTorch", "NLP"],
    github: "https://github.com/fazalwaheed/Mental-Health-Support-Chatbot-Fine-Tuned-.git",
    demo: "https://github.com/fazalwaheed/Mental-Health-Support-Chatbot-Fine-Tuned-",
  },
  {
    id: 2,
    title: "Student Performance Early Warning System",
    category: "AI/ML",
    image: p6,
    desc: "Machine learning system that predicts at-risk students early, enabling timely academic interventions.",
    tech: ["Python", "scikit-learn", "Pandas", "ML"],
    github: "https://github.com/saadishaq2/Student-Performance-Early-Warning-System.git",
    demo: "https://github.com/saadishaq2/Student-Performance-Early-Warning-System",
  },
  {
    id: 3,
    title: "Health Chatbot",
    category: "AI/ML",
    image: p1,
    desc: "Intelligent healthcare assistant chatbot providing instant responses to common medical and wellness queries.",
    tech: ["Python", "NLP", "Flask", "AI"],
    github: "https://github.com/fazalwaheed/health_chatbot.git",
    demo: "https://github.com/fazalwaheed/health_chatbot",
  },
  {
    id: 4,
    title: "Adam & Co",
    category: "Web App",
    image: p3,
    desc: "Modern, responsive business website built with a clean component-based architecture and polished UI.",
    tech: ["React", "JavaScript", "TailwindCSS", "Vite"],
    github: "https://github.com/fazalwaheed/adam-co.git",
    demo: "https://github.com/fazalwaheed/adam-co",
  },
];

export const TESTIMONIALS = [
  { name: "Sarah Mitchell", role: "CEO, Lumora", quote: "Hands down the best developer we've worked with. Delivered a production-ready platform in 4 weeks." },
  { name: "David Chen", role: "Founder, Stackly", quote: "Exceptional craft and communication. The UI feels like Apple — every detail is intentional." },
  { name: "Aisha Rahman", role: "Product Lead, Northwind", quote: "Took our messy idea and shipped a beautiful, scalable product. Will hire again instantly." },
  { name: "Marco Rossi", role: "CTO, Verda Labs", quote: "Top 1% engineer. Owned the project end-to-end and exceeded every milestone." },
];
