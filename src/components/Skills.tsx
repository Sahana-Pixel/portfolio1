import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";
import { SkillCard } from "./ui/SkillCard";
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact , SiTailwindcss, SiDjango, SiExpress, SiMongodb, SiCplusplus, SiGit, SiGithub, SiPostman, SiVite, SiVercel, SiDocker, SiNextdotjs } from "react-icons/si";
import {  FaPython, FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { IoLogoFirebase } from "react-icons/io5";

const skills = [
  { name: "HTML", icon: SiHtml5, color: "#e34f26", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS", icon: SiCss3, color: "#1572b6", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "JavaScript", icon: SiJavascript, color: "#ffd600", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6", url: "https://www.typescriptlang.org/" },
  { name: "React", icon: SiReact, color: "#61dafb", url: "https://react.dev/" },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "#38bdf8", url: "https://tailwindcss.com/" },
  { name: "Django", icon: SiDjango, color: "#166949ff", url: "https://www.djangoproject.com/" },
  { name: "Express.js", icon: SiExpress, color: "#68a063", url: "https://expressjs.com/" },
  { name: "MongoDB", icon: SiMongodb, color: "#47a248", url: "https://www.mongodb.com/" },
  { name: "Firebase", icon: IoLogoFirebase, color: "#ffca28", url: "https://firebase.google.com/" },
  { name: "C++", icon: SiCplusplus, color: "#00599c", url: "https://cplusplus.com/" },
  { name: "Java", icon: FaJava, color: "#f7b731", url: "https://www.java.com/" },
  { name: "Python", icon: FaPython, color: "#306998", url: "https://www.python.org/" },
  { name: "VS Code", icon: VscVscode, color: "#007acc", url: "https://code.visualstudio.com/" },
  { name: "Git", icon: SiGit, color: "#f34f29", url: "https://git-scm.com/" },
  { name: "GitHub", icon: SiGithub, color: "#fffdfdff ", url: "https://github.com/" },
  { name: "Postman", icon: SiPostman, color: "#ff6c37", url: "https://www.postman.com/" },
  { name: "Vite", icon: SiVite, color: "#646cff", url: "https://vitejs.dev/" },
  { name: "Vercel", icon: SiVercel, color: "#fffdfdff", url: "https://vercel.com/" },
  { name: "Docker", icon: SiDocker, color: "#0db7ed", url: "https://www.docker.com/" },
   { name: "Next.js", icon: SiNextdotjs, color: "#fffdfdff", url: "https://nextjs.org/" }, 
];

export function Skills() {
  return (
    <SectionBackground>
      <section id="skills">
        <div className="container mx-auto px-6">
<SectionTitle subtitle="The tech stack I've been collecting like Pokémon cards - gotta catch 'em all! 🎯">Skills</SectionTitle>
          <div className="max-w-6xl mx-auto grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6">
            {skills.map((tech) => (
              <SkillCard key={tech.name} name={tech.name} icon={tech.icon} color={tech.color} url={tech.url} />
            ))}
          </div>

        </div>
      </section>
    </SectionBackground>
  );
}