import React from 'react';
import { FileText, Mail } from 'lucide-react';
import { Link } from '../Link';

export function ActionButtons() {
  return (
<div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mx-auto md:mx-0 max-w-md">
      <a
        href=""
        className="flex justify-center items-center gap-2 px-4 py-2 rounded-md 
                   text-sm sm:text-base bg-pink-800 text-white hover:bg-pink-700 
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