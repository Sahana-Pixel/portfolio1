import React from 'react';
import { FileText, Mail } from 'lucide-react';
import { Link } from '../Link';

export function ActionButtons() {
  return (
<div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mx-auto md:mx-0 max-w-md">
      <a
        href=""
        className="flex justify-center items-center gap-2 px-4 py-2 rounded-md 
                   text-sm sm:text-base bg-pink-600 text-white hover:bg-pink-700 
                   transition-transform duration-300 transform hover:scale-105 
                   w-full sm:w-auto"
      >
        <FileText className="w-5 h-5" />
        <span>View Resume</span>
      </a>

      <Link
        href="#contact"
        className="flex justify-center items-center gap-2 px-4 py-2 rounded-md 
                   text-sm sm:text-base text-pink-600 dark:text-pink-400 
                   border-2 border-pink-600 hover:bg-pink-50 dark:hover:bg-pink-900/10 
                   transition-transform duration-300 transform hover:scale-105 
                   w-full sm:w-auto"
      >
        <Mail className="w-5 h-5" />
        <span>Contact Me</span>
      </Link>
    </div>
  );
}
// import React from 'react';
// import { FileText, Mail } from 'lucide-react';
// import { Link } from '../Link';

// export function ActionButtons() {
//   return (
//     <div className="w-full max-w-md mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
//       {/* Resume Button */}
//       <a
//         href=""
//         className="flex items-center justify-center gap-3 px-5 py-3 rounded-xl backdrop-blur-md border 
//                    border-white/20 bg-white/10 dark:bg-white/5 text-sm font-medium 
//                    text-white dark:text-white hover:bg-white/20 hover:scale-105 
//                    transition-all duration-300 shadow-lg"
//       >
//         <FileText className="w-5 h-5" />
//         View Resume
//       </a>

//       {/* Contact Button */}
//       <Link
//         href="#contact"
//         className="flex items-center justify-center gap-3 px-5 py-3 rounded-xl backdrop-blur-md border 
//                    border-pink-500 bg-pink-500/10 text-sm font-medium text-pink-500 
//                    hover:bg-pink-500/20 hover:scale-105 transition-all duration-300 shadow-lg"
//       >
//         <Mail className="w-5 h-5" />
//         Contact Me
//       </Link>
//     </div>
//   );
// }
