import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";
import {
  JavaScriptIcon,
  PythonIcon,
  HTMLIcon,
  CssIcon,
  ReactIcon,
  TailwindIcon,
  TypeScriptIcon,
  NodeIcon,
  MongoDBIcon,
  ExpressIcon,
  CppIcon,
  MySqlIcon,
  PostgreeIcon,
  MaterialUiIcon,
  ThreeJSIcon,
  RestAPIIcon,
  JWTIcon,
  NextJSIcon,
  BcryptIcon,
  FastAPIIcon,
  DockerIcon,
  GitIcon,
  GitHubIcon,
  ShopifyIcon,
  JiraIcon,
} from "@/components/ui/icons";

const techStack = [
  {
    name: "Python",
    icon: <PythonIcon className="w-6 h-6" />,
    category: "Programming Language",
  },
  // {
  //   name: "Cpp",
  //   icon: <CppIcon className="w-6 h-6" />,
  //   category: "Programming Language",
  // },

  // { name: "C#", icon: "🐍", category: "Programming Language" },
  {
    name: "HTML",
    icon: <HTMLIcon className="w-6 h-6" />,
    category: "Frontend",
  },
  {
    name: "CSS",
    icon: <CssIcon className="w-6 h-6" />,
    category: "Frontend",
  },
  {
    name: "JavaScript",
    icon: <JavaScriptIcon className="w-6 h-6" />,
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: <TypeScriptIcon className="w-6 h-6" />,
    category: "Frontend",
  },
  {
    name: "React",
    icon: <ReactIcon className="w-6 h-6" />,
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    icon: <TailwindIcon className="w-6 h-6" />,
    category: "Frontend",
  },
  // {
  //   name: "Material UI",
  //   icon: <MaterialUiIcon className="w-6 h-6" />,
  //   category: "Frontend",
  // },
  {
    name: "Node.js",
    icon: <NodeIcon className="w-6 h-6" />,
    category: "Backend",
  },
  {
    name: "MongoDB",
    icon: <MongoDBIcon className="w-6 h-6" />,
    category: "Database",
  },
  {
    name: "MySQL",
    icon: <MySqlIcon className="w-6 h-6" />,
    category: "Database",
  },
  // {
  //   name: "Postgree",
  //   icon: <PostgreeIcon className="w-6 h-6" />,
  //   category: "Database",
  // },
  {
    name: "Express",
    icon: <ExpressIcon className="w-6 h-6" />,
    category: "Backend",
  },
  // { name: "Three.js", icon: SiThreedotjs, category: "Frontend" },
  {
    name: "Three.js",
    icon: <ThreeJSIcon className="w-6 h-6" />,
    category: "Frontend",
  },
  // { name: "Restful API", icon: SiApifox, category: "Backend" },
  {
    name: "Restful API",
    icon: <RestAPIIcon className="w-6 h-6" />,
    category: "Backend",
  },
  // { name: "JWT Authentication", icon: SiJsonwebtokens, category: "Backend" },
  {
    name: "JWT Auth",
    icon: <JWTIcon className="w-6 h-6" />,
    category: "Backend",
  },
  // { name: "Next.js", icon: SiNextdotjs, category: "Backend" },
  {
    name: "Next.js",
    icon: <NextJSIcon className="w-6 h-6" />,
    category: "Backend",
  },
  // { name: "Bcrypt", icon: SiAssemblyscript, category: "Backend" },
  {
    name: "Bcrypt",
    icon: <BcryptIcon className="w-6 h-6" />,
    category: "Backend",
  },
  // { name: "FastAPI", icon: SiFastapi, category: "Backend" },
  {
    name: "FastAPI",
    icon: <FastAPIIcon className="w-6 h-6" />,
    category: "Backend",
  },
  // { name: "Docker", icon: "🐳", category: "DevOps" },
  // {
  //   name: "Docker",
  //   icon: <DockerIcon className="w-6 h-6" />,
  //   category: "DevOps",
  // },
  // { name: "Git", icon: SiGit, category: "Tools & Platforms" },
  {
    name: "Git",
    icon: <GitIcon className="w-6 h-6" />,
    category: "Tools & Platforms",
  },
  // { name: "GitHub", icon: SiGithub, category: "Tools & Platforms" },
  {
    name: "GitHub",
    icon: <GitHubIcon className="w-6 h-6" />,
    category: "Tools & Platforms",
  },
  // { name: "Jira", icon: SiJira, category: "Tools & Platforms" },
  {
    name: "Jira",
    icon: <JiraIcon className="w-6 h-6" />,
    category: "Tools & Platforms",
  },
  // { name: "Shopify", icon: SiShopify, category: "Tools & Platforms" },
  {
    name: "Shopify",
    icon: <ShopifyIcon className="w-6 h-6" />,
    category: "Tools & Platforms",
  },
  // { name: "AWS", icon: SiAew, category: "DevOps" },
  // { name: "Linux", icon: SiAew, category: "DevOps" },
];

const experience = [
  {
    role: "Software Engineer",
    company: "Arclogiq Software Pvt. Ltd.",
    period: "Oct '25 – Present",
    location: "Noida, India",

    // desc: "Working on Linksly.io using Next.js, Node.js, Express, and MongoDB in an Agile Scrum environment, focusing on scalable frontend architecture, backend integrations, and performance optimization.",
    desc: "Currently working on Linksly.io, a scalable web platform built using Next.js, Node.js, Express, and MongoDB within an Agile Scrum environment. Responsible for developing reusable frontend components, integrating backend APIs, optimizing application performance, and improving overall user experience while collaborating closely with developers, designers, and project stakeholders.",

    // highlights: [
    //   "Built reusable and responsive UI components using React, TypeScript, and Tailwind CSS.",
    //   "Optimized server-side rendering and frontend performance in Next.js applications.",
    //   "Implemented JWT authentication and secured backend API routes.",
    //   "Integrated RESTful APIs and managed MongoDB data flow efficiently.",
    //   "Collaborated in Agile sprint planning, bug tracking, and task management using Jira.",
    //   "Worked closely with cross-functional teams to improve user experience and application scalability.",
    // ],
    highlights: [
      "Built reusable and scalable UI components using React, TypeScript, and Tailwind CSS.",
      "Implemented JWT authentication and secured backend API routes.",
      "Optimized SSR performance and integrated RESTful APIs with MongoDB.",
      "Collaborated in Agile sprint planning and bug tracking using Jira.",
    ],
  },

  {
    role: "Software Developer Intern",
    company: "Tiny Trolly",
    period: "Apr '25 – Sep '25",
    location: "Noida, India",

    // desc: "Contributed to the development and enhancement of a Shopify-based e-commerce platform, focusing on custom themes, performance optimization, and store functionality.",
    desc: "Worked on enhancing and maintaining a Shopify-based e-commerce platform by developing custom themes, improving storefront responsiveness, integrating third-party apps and payment gateways, and optimizing user experience and website performance across multiple devices.",

    // highlights: [
    //   "Developed and customized Shopify themes and Liquid templates.",
    //   "Integrated product catalog systems, payment gateways, and Shopify applications.",
    //   "Enhanced responsiveness and cross-device user experience.",
    //   "Optimized page loading speed and frontend performance.",
    //   "Worked on UI customization and improved customer shopping experience.",
    // ],
    highlights: [
      "Customized Shopify themes and Liquid templates.",
      "Integrated payment gateways and Shopify applications.",
      "Improved responsiveness and optimized storefront performance.",
    ],
  },

  {
    role: "Co-Founder & Full Stack Developer",
    company: "Nextzen Software Solution",
    period: "Jan '24 – Mar '25",
    location: "New Delhi, India",

    // desc: "Founded and developed full-stack web applications for clients using the MERN stack, handling everything from UI design to backend architecture and deployment.",
    desc: "Co-founded and developed multiple full-stack client projects using the MERN stack, handling frontend development, backend architecture, API integrations, authentication systems, database management, deployment, and client communication from planning to final delivery.",

    // highlights: [
    //   "Built complete web applications from planning and development to deployment.",
    //   "Designed clean, responsive, and modern user interfaces using React.js and Tailwind CSS.",
    //   "Developed secure authentication systems using JWT and bcrypt.",
    //   "Created RESTful APIs using Node.js and Express.js.",
    //   "Integrated MongoDB databases for scalable data management.",
    //   "Worked directly with clients to gather requirements and deliver tailored solutions.",
    //   "Managed multiple projects simultaneously while ensuring performance and maintainability.",
    // ],
    highlights: [
      "Developed full-stack MERN applications from planning to deployment.",
      "Built secure authentication systems using JWT and bcrypt.",
      "Created responsive UI designs with React.js and Tailwind CSS.",
      "Developed scalable RESTful APIs using Node.js and Express.js.",
    ],
  },
];

const categories = [...new Set(techStack.map((t) => t.category))];

export default function ExperiencePage() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-28 section-padding">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            {/* <p className="text-sm font-mono text-primary mb-2">// experience</p> */}
            <h1 className="text-4xl md:text-5xl font-black mb-12">
              Experience & <span className="gradient-text">Tech Stack</span>
            </h1>
          </AnimatedSection>

          {/* Tech Stack Grid */}
          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-6">
              Technologies I Work With
            </h2>
          </AnimatedSection>
          {categories.map((cat) => (
            <div key={cat} className="mb-8">
              <AnimatedSection>
                <h3 className="text-sm font-mono text-muted-foreground mb-3">
                  {cat}
                </h3>
              </AnimatedSection>
              <div className="flex flex-wrap gap-3">
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> */}
                {techStack
                  .filter((t) => t.category === cat)
                  .map((t, i) => (
                    <AnimatedSection key={t.name} delay={i * 0.05}>
                      <motion.div
                        whileHover={{
                          scale: 1.1,
                          y: -4,
                        }}
                        className="glass-card px-4 py-3 flex items-center gap-2 cursor-default hover:glow transition-shadow"
                      >
                        <div className="flex items-center justify-center text-lg">
                          {t.icon}
                        </div>

                        <span className="text-sm font-medium text-foreground">
                          {t.name}
                        </span>
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
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-accent font-medium">{exp.company}</p>
                    </div>
                    {/* <span className="text-sm font-mono text-muted-foreground mt-1 md:mt-0">
                      {exp.period}
                    </span>
                    <br/>
                    <span className="text-sm font-mono text-muted-foreground mt-1 md:mt-0">
                      {exp.location}
                    </span> */}
                    {/* <div className="text-right mt-1 md:mt-0">
                      <p className="text-sm font-mono text-muted-foreground">
                        {exp.period}
                      </p>

                      <p className="text-xs text-muted-foreground/60 mt-1">
                        {exp.location}
                      </p>
                    </div> */}
                    <div className="md:text-right flex flex-col md:items-end">
                      <p className="text-sm font-mono text-muted-foreground">
                        {exp.period}
                      </p>

                      <div className="flex items-center gap-1 text-muted-foreground/60 mt-1">
                        <MapPin className="w-3 h-3" />

                        <p className="text-xs">{exp.location}</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{exp.desc}</p>
                  {/* <div className="flex flex-wrap gap-2"> */}
                  <ul className="space-y-3 mt-5">
                    {exp.highlights.map((h) => (
                      // <span
                      //   key={h}
                      //   className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      // >
                      //   {h}
                      // </span>
                      <li
                        key={h}
                        className="flex items-start gap-3 text-gray-300 leading-relaxed px-3 py-1 text-xs rounded-3xl md:rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        <span className="text-primary text-lg mb-[1px]">▹</span>

                        <span className="text-sm md:text-[15px] my-1">{h}</span>
                      </li>
                    ))}
                  </ul>
                  {/* </div> */}
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
