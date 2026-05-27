import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";

const skills = [
  { name: "React / Next.js", level: 95 },
  { name: "JavaScript / TypeScript", level: 90 },
  { name: "Node.js / Express", level: 92 },
  { name: "Restful API / FastAPI", level: 80 },
  { name: "MongoDB / MySQL", level: 85 },
  { name: "Tailwind / CSS", level: 92 },
  { name: "Python", level: 80 },
  { name: "Git / GitHub", level: 85 },
  { name: "Three.js", level: 60 },
  { name: "Shopify", level: 80 },
];

const timeline = [
  {
    year: "Oct'25 - Present",
    title: "Software Engineer",
    org: "ArclogiQ Softwares Pvt. Ltd.",
    desc: "Working on scalable web applications using Next.js, Node.js, Express, and MongoDB while contributing to frontend optimization, backend APIs, and Agile-based development workflows.",
  },

  {
    year: "Apr'25 - Sep'25",
    title: "Software Developer Intern",
    org: "Tiny Trolly",
    desc: "Developed and customized Shopify-based e-commerce solutions, improved website performance, and enhanced user experience across multiple storefront features.",
  },

  {
    year: "Jan'24 - Mar'25",
    title: "Co-Founder & Full-Stack Developer",
    org: "Nextzen Software Solution",
    desc: "Founded and managed a web development startup, building full-stack MERN applications, REST APIs, authentication systems, and responsive user-focused digital products for clients.",
  },

  {
    year: "2024",
    title: "B.Tech in Electronics and Communication Engineering",
    org: "Dr. A.P.J Abdul Kalam Technical University",
    desc: "Completed undergraduate studies while building strong technical, analytical, and problem-solving skills, alongside hands-on experience in software and web development.",
  },

  {
    year: "Jul'23 - Aug'23",
    title: "Virtual Internship in Web Development",
    org: "Bharat Intern",
    desc: "Worked on practical web development projects using modern frontend technologies, strengthening skills in responsive design, JavaScript, and application development.",
  },

  {
    year: "2019",
    title: "High School (Mathematics)",
    org: "St. Dominic Savio's High School",
    desc: "Built a strong academic foundation in mathematics, analytical thinking, and problem-solving skills.",
  },

  // {
  //   year: "Oct'25 - Present",
  //   title: "Software Developer",
  //   org: "ArclogiQ Softwares",
  //   desc: "Leading frontend architecture and mentoring junior developers.",
  // },
  // {
  //   year: "May'25 - Sep'25",
  //   title: "Software Developer Intern",
  //   org: "Tiny Trolly",
  //   desc: "Leading frontend architecture and mentoring junior developers.",
  // },
  // {
  //   year: "Jan'24 - Present",
  //   title: "Co-Founder & Full-Stack Developer",
  //   org: "Nextzen Software Solution",
  //   desc: "Built scalable MERN stack applications from scratch.",
  // },
  // {
  //   year: "2024",
  //   title: "B.Tech in Electronics and Communication Engineering",
  //   org: "Dr A.P.J Abdul Kalam Technical University",
  //   desc: "Created pixel-perfect UIs with React and animations.",
  // },
  // {
  //   year: "Jul'23 - Aug'23",
  //   title: "Virtual Internship in Web Development",
  //   org: "Bharat Intern",
  //   desc: "Created pixel-perfect UIs with React and animations.",
  // },
  // {
  //   year: "2019",
  //   title: "High School in Maths",
  //   org: "St. Dominic Savio's High School",
  //   desc: "Built a strong academic foundation in mathematics, problem-solving, and logical reasoning.",
  // },
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
            <p className="text-sm font-mono text-primary mb-2">// about-me</p>
            <h1 className="text-4xl md:text-5xl font-black mb-6">
              About <span className="gradient-text">Me</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="glass-card p-8 mb-16">
              <p className="text-muted-foreground leading-relaxed text-lg">
                <span className="text-foreground/60 font-semibold">
                  Full-Stack Developer
                </span>{" "}
                with 2+ years of experience building and deploying scalable web
                applications. Proficient in{" "}
                <span className="text-foreground/60 font-semibold">
                  React.js, Node.js, MongoDB, Express.js, and REST APIs,
                </span>{" "}
                with hands-on experience leading a web development startup and
                delivering responsive, user-focused solutions. Skilled in
                end-to-end application development, problem-solving, and modern
                web technologies.
                {/* I'm a passionate full-stack developer with 2+ years of
                experience building modern web applications. I specialize in the
                MERN stack and love creating beautiful, performant user
                experiences. When I'm not coding, you'll find me contributing to
                open source, writing tech articles, or exploring the latest in
                web technologies. */}
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
