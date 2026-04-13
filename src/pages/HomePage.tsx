import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";
import TypingText from "@/components/ui/TypingText";

const roles = [
  "Full-Stack Developer",
  "MERN Stack Expert",
  "Backend Developer",
  "Open Source Contributor",
];

export default function HomePage() {
  return (
    <PageTransition>
      <div className="min-h-screen flex items-center section-padding pt-28">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <AnimatedSection>
              <p className="text-sm font-mono text-muted-foreground mb-4 tracking-wider">
                👋 Hello, I'm
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="text-5xl md:text-7xl font-black leading-tight mb-4">
                <span className="gradient-text">Syed F</span>
                <br />
                <span className="text-foreground">Yusuf</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="text-lg md:text-xl mb-6">
                {/* <TypewriterText /> */}
                <TypingText
                  words={[
                    "Full-Stack Developer",
                    "MERN Stack Specialist",
                    "Backend Developer",
                    "Building Scalable Web Apps",
                    "Solving Real-World Problems",
                    "Turning Ideas into Real Products",
                  ]}
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="text-muted-foreground max-w-md mb-8 leading-relaxed">
                I specialize in building scalable, user-centric web applications
                using the MERN stack. Over the past 2+ years, I’ve worked on
                real-world projects, including launching and managing my own web
                development startup, where I turned ideas into production-ready
                digital products.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="flex flex-wrap gap-4">
                <Link to="/projects">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:shadow-lg transition-shadow"
                  >
                    View Projects <ArrowRight size={18} />
                  </motion.button>
                </Link>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground font-semibold hover:bg-secondary transition-colors hover:glow"
                  >
                    Contact Me
                  </motion.button>
                </Link>
                {/* <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary text-secondary-foreground font-semibold hover:bg-muted transition-colors"
                >
                  <Download size={18} /> Resume
                </motion.button> */}
                <a
                  href="/s_f_yusuf_mern_stack_1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary text-secondary-foreground font-semibold hover:bg-muted transition-colors hover:glow"
                  >
                    <Download size={18} /> Resume
                  </motion.button>
                </a>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection
            delay={0.3}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <div className="w-72 h-72 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 animate-pulse-glow" />
              <div className="absolute inset-8 rounded-full glass-card glow flex items-center justify-center">
                {/* <span className="text-6xl font-black gradient-text font-mono">
                  &lt;/&gt;
                </span> */}
                <motion.img
                  src="/011.jpg"
                  alt="Syed Yusuf"
                  className="w-50 h-50 object-cover rounded-full border-4 border-primary/30 shadow-lg"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Stats strip */}
      <AnimatedSection>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 section-padding pt-0">
          {[
            { num: "2+", label: "Years Experience" },
            { num: "20+", label: "Projects Completed" },
            { num: "15+", label: "Technologies" },
            { num: "100%", label: "Client Satisfaction" },
          ].map((s) => (
            <div
              key={s.label}
              className="glass-card p-6 text-center glow hover:breathing-glow"
            >
              <div className="text-3xl font-black gradient-text mb-1">
                {s.num}
              </div>
              <div className="text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </PageTransition>
  );
}
