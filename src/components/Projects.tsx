import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
import { ProjectCard } from './ui/ProjectCard';
import {
  SiReact,
  SiNodedotjs,
  SiFirebase,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiPrisma,
  SiShadcnui,
  SiFramer,
  SiSocketdotio,
  SiStripe,
  SiAppwrite,
  SiExpress,
} from 'react-icons/si';

// Define reusable tech stack icons & colors
const techStacks = {
  react: { icon: SiReact, name: "React", color: '#00cfff' },
  express:  { icon: SiExpress, name: "Express.js",color: "#68a063"},
  
  node: { icon: SiNodedotjs, name: "Node.js", color: '#228b22' },
  firebase: { icon: SiFirebase, name: "Firebase", color: '#fbbf00' },
  tailwind: { icon: SiTailwindcss, name: "Tailwind CSS", color: '#06b6d4' },
  typescript: { icon: SiTypescript, name: "TypeScript", color: '#1f6feb' },
  next: { icon: SiNextdotjs, name: "Next.js", color: '#' },
  mongodb: { icon: SiMongodb, name: "MongoDB", color: '#10b981' },
  prisma: { icon: SiPrisma, name: "Prisma", color: '#186997' },
  shadcn: { icon: SiShadcnui, name: "ShadCN", color: '#6366f1' },
  framer: { icon: SiFramer, name: "Framer Motion", color: '#2563eb' },
  socket: { icon: SiSocketdotio, name: "Socket.io", color: '#' },
  stripe: { icon: SiStripe, name: "Stripe", color: '#5b4df1' },
  appwrite: { icon: SiAppwrite, name: "Appwrite", color: '#ff3d00' },
};

// Define projects data
const projects = [

  {
    title: 'FixMyHome',
    description: 'A platform that connects you with trusted technicians for all your home service needs — from plumbing to electrical and beyond. No more searching through random contacts or overpaying strangers. Just reliable help, right when you need it',
    image: '/assets/fixmyhome.png',
    // link: '',
    github: 'https://github.com/Sahana-Pixel/fixmyhome2',
    techStack: [
      techStacks.react,
      techStacks.tailwind,
      techStacks.typescript,
      
      

    ],
  },
  {
    title: 'Learnloop',
description: "LearnLoop is your all-in-one platform to find hackathon teams, connect with mentors, and study with peers. Whether you're preparing for competitions or learning together, it helps you collaborate, grow, and stay connected.",
    image: '/assets/studymode.png',
    github:'https://github.com/Sahana-Pixel/learnloop',
    techStack: [
      techStacks.react,
      techStacks.typescript,
      techStacks.tailwind,
      
     
    ],
  },
    {
    title: 'Streetdeal',
description: "Streetdeal is a smart marketplace where suppliers bid with the best prices, and vendors team up to buy in bulk, saving more together. Streetdeal helps you cut costs, increase margins, and build stronger supplier connections.",
    image: '/assets/streetdeal.png',
    github:'https://github.com/Sahana-Pixel/streetdeal',
    techStack: [
      techStacks.react,
      techStacks.typescript,
      techStacks.tailwind,
      techStacks.mongodb,
      techStacks.node,
      techStacks.express,
    ],
  },
 
];

export function Projects() {
  return (<SectionBackground>
    <section id="projects">
      <div className="container mx-auto px-8"> 
        <SectionTitle subtitle="From imagination to implementation ✨.">Projects</SectionTitle>
       

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

      </div>
    </section>
  </SectionBackground>
  );
}
