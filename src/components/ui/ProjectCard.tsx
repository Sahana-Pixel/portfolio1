import { SiGithub } from "react-icons/si";
import { FaGlobe } from "react-icons/fa";
import { IconType } from 'react-icons';

interface TechStackItem {
  icon: IconType;
  name: string;
  color?: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
  github?: string;
  techStack: TechStackItem[];
}

export function ProjectCard({ title, description, image, link, github, techStack }: ProjectCardProps) {
  return (
    <div className="group relative">
      <div className="relative bg-white dark:bg-black border border-gray-300 dark:border-gray-700 hover:border-grey-500 dark:hover:border-white rounded-2xl shadow-lg overflow-hidden transition duration-300 hover:shadow-grey-500/10">

        {/* Image */}
        <div className="relative overflow-hidden p-4 pb-0">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img
              src={image}
              alt={`Screenshot of ${title}`}
              className="w-full h-full object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </a>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title + Icons */}
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
            <div className="flex gap-3">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                >
                  <SiGithub className="w-6 h-6" />
                </a>
              )}
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                >
                  <FaGlobe className="w-6 h-6" />
                </a>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">
            {description}
          </p>

          {/* Tech Stack Icons with Tooltip */}
          <div className="flex flex-wrap gap-3 mt-4">
            {techStack.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="relative">
                  <div className="peer p-2 rounded-lg bg-gray-200 dark:bg-gray-800">
                    <Icon className="w-6 h-6" color={item.color} />
                  </div>
                  {/* Tooltip */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-700 text-white text-xs rounded px-2 py-1 
                        opacity-0 peer-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                    {item.name}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}


// import { SiGithub } from "react-icons/si";
// import { FaGlobe } from "react-icons/fa";
// import { IconType } from "react-icons";

// interface TechStackItem {
//   icon: IconType;
//   name: string;
//   color?: string;
// }

// interface ProjectCardProps {
//   title: string;
//   description: string;
//   image: string;
//   link?: string;
//   github?: string;
//   techStack: TechStackItem[];
// }

// export function ProjectCard({ title, description, image, link, github, techStack }: ProjectCardProps) {
//   return (
//     <div className="group relative rounded-2xl overflow-hidden shadow-lg bg-white/40 dark:bg-gray-900/40 border border-gray-300 dark:border-gray-700 backdrop-blur-md transition-all duration-300 hover:shadow-xl">

//       {/* Image */}
//       <div className="relative overflow-hidden">
//         <img
//           src={image}
//           alt={`Screenshot of ${title}`}
//           className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
//         />
//         <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-gray-800/80 to-transparent p-4">
//           <h3 className="text-white text-lg font-semibold">{title}</h3>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="p-5 flex flex-col gap-4 text-gray-800 dark:text-gray-200">
//         <p className="text-sm sm:text-base leading-relaxed">{description}</p>

//         {/* Tech Stack */}
//         <div className="flex flex-wrap gap-3 mt-2">
//           {techStack.map(({ icon: Icon, name, color }, i) => (
//             <div key={i} className="relative group">
//               <div className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:scale-105 transition-transform">
//                 <Icon className="w-5 h-5" color={color || "#666"} />
//               </div>
//               {/* <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
//                 {name}
//               </div> */}
//             </div>
//           ))}
//         </div>

//         {/* Links */}
//         <div className="flex gap-3 mt-4">
//           {github && (
//             <a
//               href={github}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-2 rounded-full border border-gray-400 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
//             >
//               <SiGithub className="w-5 h-5" />
//             </a>
//           )}
//           {link && (
//             <a
//               href={link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-2 rounded-full border border-gray-400 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
//             >
//               <FaGlobe className="w-5 h-5" />
//             </a>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

