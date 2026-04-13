import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "Full-stack e-commerce app with cart, auth, payments and admin dashboard.",
    longDesc: "A comprehensive e-commerce platform built with React, Node.js, MongoDB, and Stripe integration. Features include product search, filtering, user authentication, shopping cart, order management, and an admin panel for inventory control.",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind"],
    github: "#",
    live: "#",
    image: "🛒",
  },
  {
    title: "AI Chat Application",
    desc: "Real-time chat app with AI-powered responses and markdown support.",
    longDesc: "A modern chat application featuring real-time messaging via WebSockets, AI-powered chatbot responses using OpenAI API, markdown rendering, file sharing, and user presence indicators.",
    tech: ["Next.js", "OpenAI", "Socket.io", "PostgreSQL"],
    github: "#",
    live: "#",
    image: "🤖",
  },
  {
    title: "Task Management App",
    desc: "Kanban-style project management tool with drag-and-drop and real-time sync.",
    longDesc: "A productivity tool inspired by Trello and Notion, featuring drag-and-drop boards, real-time collaboration, labels, due dates, file attachments, and team management capabilities.",
    tech: ["React", "Firebase", "DnD Kit", "Framer Motion"],
    github: "#",
    live: "#",
    image: "📋",
  },
  {
    title: "Social Media Dashboard",
    desc: "Analytics dashboard with real-time data visualization and reporting.",
    longDesc: "A comprehensive social media analytics dashboard with interactive charts, engagement metrics, audience demographics, and automated reporting. Built with performance optimization for handling large datasets.",
    tech: ["React", "D3.js", "Express", "Redis"],
    github: "#",
    live: "#",
    image: "📊",
  },
  {
    title: "Portfolio Generator",
    desc: "No-code portfolio builder with templates, themes and custom domains.",
    longDesc: "A SaaS platform that lets developers create stunning portfolios without coding. Features drag-and-drop builder, multiple themes, custom domain support, SEO optimization, and analytics integration.",
    tech: ["Next.js", "Prisma", "AWS S3", "Vercel"],
    github: "#",
    live: "#",
    image: "🎨",
  },
  {
    title: "DevOps Monitor",
    desc: "Real-time infrastructure monitoring tool with alerting and logs.",
    longDesc: "An infrastructure monitoring solution with real-time metrics dashboards, automated alerting, log aggregation, and incident management. Supports multiple cloud providers and containerized environments.",
    tech: ["React", "Go", "Docker", "Prometheus"],
    github: "#",
    live: "#",
    image: "🔧",
  },
];

interface Project {
  title: string;
  desc: string;
  longDesc: string;
  tech: string[];
  github: string;
  live: string;
  image: string;
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="glass-card glow max-w-lg w-full p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-4">
          <div className="text-4xl">{project.image}</div>
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-secondary text-muted-foreground">
            <X size={20} />
          </button>
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">{project.longDesc}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary border border-primary/20">
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a href={project.github} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-muted transition-colors text-sm font-medium">
            <Github size={16} /> Source Code
          </a>
          <a href={project.live} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium">
            <ExternalLink size={16} /> Live Demo
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsPage() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <PageTransition>
      <div className="min-h-screen pt-28 section-padding">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <p className="text-sm font-mono text-primary mb-2">// my-work</p>
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-muted-foreground mb-12 max-w-lg">
              A collection of projects that showcase my skills in building modern, scalable web applications.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  onClick={() => setSelected(p)}
                  className="glass-card p-6 cursor-pointer group hover:glow transition-shadow duration-300 h-full flex flex-col"
                >
                  <div className="text-4xl mb-4">{p.image}</div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.slice(0, 3).map((t) => (
                      <span key={t} className="px-2 py-0.5 text-[10px] font-mono rounded-full bg-secondary text-muted-foreground">
                        {t}
                      </span>
                    ))}
                    {p.tech.length > 3 && (
                      <span className="px-2 py-0.5 text-[10px] font-mono rounded-full bg-secondary text-muted-foreground">
                        +{p.tech.length - 3}
                      </span>
                    )}
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </PageTransition>
  );
}
