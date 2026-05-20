import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";

const projects = {
  personalProjects: [
    {
      title: "My 3D Portfolio",
      desc: "A futuristic and fully responsive developer portfolio featuring 3D visuals, smooth animations, interactive UI, and modern frontend design.",
      longDesc:
        "A modern 3D portfolio website built to showcase projects, experience, skills, and frontend creativity using immersive UI design and smooth user interactions. Developed with React, Tailwind CSS, Framer Motion, and Three.js to create animated sections, interactive elements, glassmorphism effects, responsive layouts, and engaging user experience across all devices. Features include animated transitions, project showcase modals, dynamic tech stack sections, responsive navigation, and performance-optimized frontend architecture.",

      tech: [
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "Three.js",
        "TypeScript",
        "Vite",
      ],

      github: "https://github.com/SyedYusuf013",
      live: "https://syed-portfolio-website.onrender.com/",
      // image: "👨‍💼",
      image: "/project_img/3d_portfolio1.png",
      type: "Personal Project",
    },

    {
      title: "Code Master v2",
      desc: "A modern coding learning platform with authentication, protected routes, topic-wise learning structure, and responsive UI.",
      longDesc:
        "A complete MERN-stack based learning platform designed for developers to learn frontend and backend technologies in a structured way. Features include JWT authentication, protected routes, responsive layouts, dynamic topic rendering, difficulty-based content organization, search functionality, and clean UI/UX optimized for both desktop and mobile devices.",

      tech: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT"],

      github: "https://github.com/SyedYusuf013",
      live: "https://www.codemster.com/",
      // image: "💻",
      image: "/project_img/code_master.png",
      type: "Personal Project",
    },

    {
      title: "Apna Notes",
      desc: "A MERN-based notes and tutorial platform with authentication and protected dashboard features.",

      longDesc:
        "A full-stack tutorial and notes platform where users can securely create accounts, log in, and access protected dashboard features. Includes JWT authentication, route protection, dynamic note rendering, responsive design, search functionality, and optimized frontend performance using React and Tailwind CSS.",

      tech: ["React", "Tailwind CSS", "Node.js", "MongoDB", "JWT"],

      github: "https://github.com/SyedYusuf013",
      live: "https://apna-tutorial.vercel.app/",
      // image: "📝",
      image: "/project_img/apna_code.png",
      type: "Personal Project",
    },

    {
      title: "Book Store",
      desc: "An online bookstore platform with authentication, category browsing, and responsive UI.",

      longDesc:
        "A MERN-stack bookstore application featuring user authentication, protected routes, dynamic product listings, category filtering, responsive layouts, and modern UI design. Built with focus on scalability, user experience, and reusable frontend components.",

      tech: ["React", "Express", "MongoDB", "Tailwind CSS"],

      github: "https://github.com/SyedYusuf013",
      live: "https://syed-book-store.vercel.app/",
      // image: "📚",
      image: "/project_img/book_store.png",
      type: "Personal Project",
    },

    {
      title: "Prescripto",
      desc: "A doctor appointment booking platform with authentication and appointment management.",

      longDesc:
        "A responsive healthcare appointment platform where users can browse doctors, book appointments, manage schedules, and interact through a modern and user-friendly interface. Includes authentication, protected routes, responsive layouts, and backend API integration.",

      tech: ["React", "Node.js", "MongoDB", "JWT"],

      github: "https://github.com/SyedYusuf013",
      live: "https://doctor-frontend-psi.vercel.app/",
      // image: "🩺",
      image: "/project_img/dr1.png",
      type: "Personal Project",
    },

    {
      title: "Employee Management System",
      desc: "Frontend employee task management system with local state persistence and task workflow handling.",

      longDesc:
        "A task management and employee workflow application featuring task assignment, task status management, dynamic UI rendering, reusable React components, and local storage-based persistence for maintaining application state.",

      tech: ["React", "Tailwind CSS", "Context API"],

      github: "https://github.com/SyedYusuf013",
      live: "https://syed-employee-management-system.vercel.app/",
      // image: "👨‍💼",
      image: "/project_img/ems1.png",
      type: "Personal Project",
    },

    {
      title: "Food Ordering Website",
      desc: "Responsive food ordering frontend application with category filtering and modern UI.",

      longDesc:
        "A modern food delivery and ordering frontend application built with React featuring responsive layouts, category filtering, reusable UI components, smooth user experience, and optimized mobile responsiveness.",

      tech: ["React", "Tailwind CSS", "JavaScript"],

      github: "https://github.com/SyedYusuf013",
      live: "https://food-ordering-ed4o.onrender.com/",
      // image: "🍔",
      image: "/project_img/fd1.png",
      type: "Personal Project",
    },

    {
      title: "Space World",
      desc: "A futuristic animated space-themed landing page with smooth transitions and interactive UI.",

      longDesc:
        "A visually engaging and animation-rich landing page inspired by futuristic space themes. Built using React, Tailwind CSS, and Framer Motion with focus on UI animations, responsiveness, and interactive user experience.",

      tech: ["React", "Tailwind CSS", "Framer Motion"],

      github: "https://github.com/SyedYusuf013",
      live: "https://sfyspace.netlify.app/",
      // image: "🚀",
      image: "/project_img/space.jpg",
      type: "Personal Project",
    },
  ],

  companyProjects: [
    {
      title: "Nextzen Software Solution",
      desc: "Official company website showcasing services, projects, and digital solutions.",

      longDesc:
        "Designed and developed the official company portfolio website for Nextzen Software Solution featuring responsive layouts, modern UI/UX, service showcase sections, animations, contact integrations, and scalable frontend architecture.",

      tech: ["React", "Tailwind CSS", "Framer Motion"],

      github: "",
      live: "https://www.nextzensoftware.com/",
      // image: "🏢",
      image: "/project_img/nxtzen.png",
      type: "Company Project",
    },
  ],

  clientProjects: [
    {
      title: "Bait-Al-Tahzeeb",
      desc: "Client-based business website built with responsive UI and custom design implementation.",

      longDesc:
        "A professional business website developed for a client with responsive layouts, modern UI design, custom sections, optimized frontend performance, and mobile-friendly user experience.",

      tech: ["React", "Tailwind CSS", "JavaScript"],

      github: "",
      live: "https://www.baitaltahzeeb.com/",
      // image: "🌐",
      image: "/project_img/bt.png",
      type: "Client Project",
    },
  ],

  companyWorkProjects: [
    // {
    //   title: "Linksly.io",
    //   desc: "Worked on scalable frontend architecture and backend integrations in an Agile Scrum environment.",

    //   longDesc:
    //     "Contributed to the development of Linksly.io using Next.js, Node.js, Express, and MongoDB. Worked on reusable frontend components, API integrations, JWT authentication, performance optimization, and Agile-based collaborative development workflows.",

    //   tech: ["Next.js", "Node.js", "MongoDB", "JWT"],

    //   github: "",
    //   live: "",
    //   // image: "🔗",
    //   image: "/project_img/3d_portfolio.png",
    //   type: "Company Work",
    // },

    {
      title: "Tiny Trolly",
      desc: "Contributed to the development and enhancement of a Shopify-based e-commerce platform with custom UI, responsive layouts, and storefront optimization.",

      longDesc:
        "Worked as a Software Developer Intern on the Tiny Trolly e-commerce platform, contributing to frontend customization, responsive Shopify theme development, UI enhancements, and performance optimization. Implemented modern storefront sections, improved mobile responsiveness, integrated Shopify apps and product catalog features, and collaborated on optimizing overall customer shopping experience and website usability.",

      tech: [
        "Shopify",
        "Liquid",
        "JavaScript",
        "HTML",
        "CSS",
        "Responsive Design",
      ],

      github: "",
      live: "https://www.tinytrolly.com",
      // image: "🛍️",
      image: "/project_img/tt.png",
      type: "Company Work",
    },
  ],
};
interface Project {
  title: string;
  desc: string;
  longDesc: string;
  tech: string[];
  github?: string;
  live?: string;
  image: string;
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
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
        {/* <div className="flex justify-between items-start mb-4">
          <div className="text-4xl">{project.image}</div>
          <button
            type="button"
            aria-label="Close modal"
            title="Close"
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-secondary text-muted-foreground"
          >
            <X size={20} />
          </button>
        </div> */}

        <h3 className="text-2xl font-bold text-foreground mb-2">
          {project.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          {project.longDesc}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              {t}
            </span>
          ))}
        </div>
        {/* <div className="flex gap-3">
          <a
            href={project.github}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-muted transition-colors text-sm font-medium"
          >
            <Github size={16} /> Source Code
          </a>
          <a
            href={project.live}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium"
          >
            <ExternalLink size={16} /> Live Demo
          </a>
        </div> */}
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-muted transition-colors text-sm font-medium"
            >
              <Github size={16} />
              Source Code
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-all text-sm font-medium"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
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
              A collection of projects that showcase my skills in building
              modern, scalable web applications.
            </p>
          </AnimatedSection>

          {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[10px] font-mono rounded-full bg-secondary text-muted-foreground"
                      >
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
          </div> */}
          {Object.entries(projects).map(([section, items]) => (
            <div key={section} className="mb-16">
              <AnimatedSection>
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
                  {/* {section === "personalProjects" && "Personal Projects"}

                  {section === "companyProjects" && "Own Company Projects"}

                  {section === "clientProjects" && "Client Projects"}

                  {section === "companyWorkProjects" && "Company Work Projects"} */}

                  {section === "personalProjects" && (
                    <>
                      Personal <span className="gradient-text">Projects</span>
                    </>
                  )}

                  {section === "companyProjects" && (
                    <>
                      Own Company{" "}
                      <span className="gradient-text">Projects</span>
                    </>
                  )}

                  {section === "clientProjects" && (
                    <>
                      Client <span className="gradient-text">Projects</span>
                    </>
                  )}

                  {section === "companyWorkProjects" && (
                    <>
                      Company Work{" "}
                      <span className="gradient-text">Projects</span>
                    </>
                  )}
                </h2>
              </AnimatedSection>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((p, i) => (
                  <AnimatedSection key={p.title} delay={i * 0.08}>
                    <motion.div
                      whileHover={{ y: -8, scale: 1.02 }}
                      onClick={() => setSelected(p)}
                      // className="glass-card p-6 cursor-pointer group hover:glow transition-shadow duration-300 h-full flex flex-col"
                      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b1220]/80 backdrop-blur-md cursor-pointer h-[420px]"
                    >
                      {/* <div className="flex items-center justify-between mb-4">
                        <div className="text-4xl">{p.image}</div>

                        <span className="text-[10px] px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                          {p.type}
                        </span>
                      </div> */}

                      {/* Project Image */}
                      <div className="absolute inset-0">
                        <img
                          src={p.image}
                          alt={p.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />
                      </div>

                      {/* Card Content */}
                      <div className="relative z-10 flex flex-col justify-end h-full p-6">
                        {/* Badges */}
                        <div className="flex items-center gap-2 mb-4 flex-wrap">
                          <span className="text-[10px] px-2 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 backdrop-blur-sm">
                            {p.type}
                          </span>

                          {(p.type === "Company Work" ||
                            p.type === "Client Project") && (
                            <span className="text-[10px] px-2 py-1 rounded-full bg-orange-500/20 text-orange-300 border border-orange-400/20 backdrop-blur-sm">
                              Production Project
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-white mb-3">
                          {p.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-gray-300 leading-relaxed mb-4 line-clamp-3 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500">
                          {p.desc}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2">
                          {p.tech.slice(0, 3).map((t) => (
                            <span
                              key={t}
                              className="px-2 py-1 text-[10px] font-mono rounded-full bg-white/10 text-gray-200 backdrop-blur-sm"
                            >
                              {t}
                            </span>
                          ))}

                          {p.tech.length > 3 && (
                            <span className="px-2 py-1 text-[10px] font-mono rounded-full bg-white/10 text-gray-200 backdrop-blur-sm">
                              +{p.tech.length - 3}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* <div className="flex items-center justify-between mb-4">
                        <div className="text-4xl">{p.image}</div>
                        <img src={p.image} />

                        <div className="flex flex-col items-end gap-2">
                          <span className="text-[10px] px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                            {p.type}
                          </span>

                          {(p.type === "Company Work" ||
                            p.type === "Client Project") && (
                            <span className="text-[10px] px-2 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20">
                              Production Project
                            </span>
                          )}
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {p.title}
                      </h3>

                      <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">
                        {p.desc}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {p.tech.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 text-[10px] font-mono rounded-full bg-secondary text-muted-foreground"
                          >
                            {t}
                          </span>
                        ))}

                        {p.tech.length > 3 && (
                          <span className="px-2 py-0.5 text-[10px] font-mono rounded-full bg-secondary text-muted-foreground">
                            +{p.tech.length - 3}
                          </span>
                        )}
                      </div> */}
                    </motion.div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
