import { Github, Linkedin, Twitter, Mail, Instagram } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/SyedYusuf013", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/syed-yusuf-859a82220/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/yusufsyed37573", label: "Twitter" },
  { icon: Instagram, href: "https://www.instagram.com/syedfyusuf09/", label: "Instagram" },
  { icon: Mail, href: "mailto:syedfayequeuddinyusuf@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-8 section-padding">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} <span className="gradient-text font-semibold">&lt;Syed Yusuf /&gt;</span> — Built with passion
        </p>
        <div className="flex gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
            >
              <s.icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
