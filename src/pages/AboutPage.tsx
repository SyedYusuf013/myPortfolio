import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";

const skills = [
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript / JavaScript", level: 90 },
  { name: "Node.js / Express", level: 85 },
  { name: "MongoDB / MySQL", level: 80 },
  { name: "Tailwind / CSS", level: 92 },
  { name: "Three.js / WebGL", level: 70 },
  { name: "Docker / CI/CD", level: 65 },
  { name: "Python / Django", level: 60 },
];

const timeline = [
  {
    year: "2024",
    title: "Senior Developer",
    org: "Tech Corp",
    desc: "Leading frontend architecture and mentoring junior developers.",
  },
  {
    year: "2024",
    title: "Co-Founder & Full-Stack Developer",
    org: "Nextzen Software Solution",
    desc: "Built scalable MERN stack applications from scratch.",
  },
  {
    year: "2024",
    title: "B.Tech in Electronics and Communication Engineering",
    org: "Dr A.P.J Abdul Kalam Technical University",
    desc: "Created pixel-perfect UIs with React and animations.",
  },
  {
    year: "2019",
    title: "High School in Maths",
    org: "St. Dominic Savio's High School",
    desc: "Graduated with honors. Focus on web technologies.",
  },
];

function SkillBar({
  name,
  level,
  delay,
}: {
  name: string;
  level: number;
  delay: number;
}) {
  return (
    <AnimatedSection delay={delay} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium text-foreground">{name}</span>
        <span className="text-muted-foreground font-mono">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-secondary overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.3, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
        />
      </div>
    </AnimatedSection>
  );
}

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-28 section-padding">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            {/* <p className="text-sm font-mono text-primary mb-2">// about-me</p> */}
            <h1 className="text-4xl md:text-5xl font-black mb-6">
              About <span className="gradient-text">Me</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="glass-card p-8 mb-16">
              <p className="text-muted-foreground leading-relaxed text-lg">
                I'm a passionate full-stack developer with 2+ years of
                experience building modern web applications. I specialize in the
                MERN stack and love creating beautiful, performant user
                experiences. When I'm not coding, you'll find me contributing to
                open source, writing tech articles, or exploring the latest in
                web technologies.
                {/* I build scalable and user-focused web applications using the
                MERN stack. With 2+ years of experience and real-world projects,
                I turn ideas into fast, responsive, and impactful digital
                products. */}
              </p>
            </div>
          </AnimatedSection>

          {/* Skills */}
          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-8">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            {skills.map((s, i) => (
              <SkillBar
                key={s.name}
                name={s.name}
                level={s.level}
                delay={i * 0.05}
              />
            ))}
          </div>

          {/* Timeline */}
          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-8">
              Education & <span className="gradient-text">Experience</span>
            </h2>
          </AnimatedSection>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary to-accent" />
            {timeline.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div
                  className={`relative flex flex-col md:flex-row gap-4 mb-12 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="md:w-1/2" />
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background z-10 mt-6" />
                  <div className="md:w-1/2 ml-12 md:ml-0">
                    <div className="glass-card p-6 hover:glow transition-shadow duration-300">
                      <span className="text-xs font-mono text-primary">
                        {item.year}
                      </span>
                      <h3 className="font-bold text-lg text-foreground mt-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-accent font-medium">
                        {item.org}
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
