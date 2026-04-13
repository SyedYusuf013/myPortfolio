import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";

const techStack = [
  { name: "React", icon: "⚛️", category: "Frontend" },
  { name: "Next.js", icon: "▲", category: "Frontend" },
  { name: "TypeScript", icon: "🔷", category: "Frontend" },
  { name: "Tailwind CSS", icon: "🎨", category: "Frontend" },
  { name: "Three.js", icon: "🎮", category: "Frontend" },
  { name: "Node.js", icon: "🟢", category: "Backend" },
  { name: "Express", icon: "🚂", category: "Backend" },
  { name: "Python", icon: "🐍", category: "Backend" },
  { name: "MongoDB", icon: "🍃", category: "Database" },
  { name: "PostgreSQL", icon: "🐘", category: "Database" },
  { name: "Redis", icon: "🔴", category: "Database" },
  { name: "Docker", icon: "🐳", category: "DevOps" },
  { name: "AWS", icon: "☁️", category: "DevOps" },
  { name: "Git", icon: "📦", category: "DevOps" },
  { name: "Figma", icon: "🖌️", category: "Design" },
];

const experience = [
  {
    role: "Senior Frontend Developer",
    company: "Tech Corp",
    period: "2024 – Present",
    desc: "Leading the frontend team, architecting scalable React applications, and mentoring junior developers.",
    highlights: ["Led migration to Next.js 14", "Reduced load time by 40%", "Mentored 5 developers"],
  },
  {
    role: "Full-Stack Developer",
    company: "StartupXYZ",
    period: "2023 – 2024",
    desc: "Built and maintained MERN stack applications serving 50K+ users with real-time features.",
    highlights: ["Built real-time dashboard", "Designed REST APIs", "Implemented CI/CD"],
  },
  {
    role: "Frontend Developer",
    company: "Creative Agency",
    period: "2022 – 2023",
    desc: "Created beautiful, responsive web interfaces for high-profile clients with pixel-perfect designs.",
    highlights: ["Delivered 20+ client projects", "A11y improvements", "Performance optimization"],
  },
];

const categories = [...new Set(techStack.map((t) => t.category))];

export default function ExperiencePage() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-28 section-padding">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <p className="text-sm font-mono text-primary mb-2">// experience</p>
            <h1 className="text-4xl md:text-5xl font-black mb-12">
              Experience & <span className="gradient-text">Tech Stack</span>
            </h1>
          </AnimatedSection>

          {/* Tech Stack Grid */}
          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-6">Technologies I Work With</h2>
          </AnimatedSection>
          {categories.map((cat) => (
            <div key={cat} className="mb-8">
              <AnimatedSection>
                <h3 className="text-sm font-mono text-muted-foreground mb-3">{cat}</h3>
              </AnimatedSection>
              <div className="flex flex-wrap gap-3">
                {techStack
                  .filter((t) => t.category === cat)
                  .map((t, i) => (
                    <AnimatedSection key={t.name} delay={i * 0.05}>
                      <motion.div
                        whileHover={{ scale: 1.1, y: -4 }}
                        className="glass-card px-4 py-3 flex items-center gap-2 cursor-default hover:glow transition-shadow"
                      >
                        <span className="text-lg">{t.icon}</span>
                        <span className="text-sm font-medium text-foreground">{t.name}</span>
                      </motion.div>
                    </AnimatedSection>
                  ))}
              </div>
            </div>
          ))}

          {/* Experience Timeline */}
          <AnimatedSection className="mt-20">
            <h2 className="text-2xl font-bold mb-8">Work Experience</h2>
          </AnimatedSection>
          <div className="space-y-6">
            {experience.map((exp, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ x: 8 }}
                  className="glass-card p-6 md:p-8 hover:glow transition-shadow duration-300 border-l-4 border-l-primary"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                      <p className="text-accent font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm font-mono text-muted-foreground mt-1 md:mt-0">{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{exp.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((h) => (
                      <span key={h} className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                        {h}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
