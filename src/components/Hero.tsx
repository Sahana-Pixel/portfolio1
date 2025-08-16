import {  Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { TypeWriter } from './ui/TypeWriter';
// import { SocialLinks } from './hero/SocialLinks';
import { ContactInfo } from './hero/ContactInfo';
import { ActionButtons } from './hero/ActionButtons';

export function Hero() {
  const roles = [
    'Full-Stack Developer',
    'Creative Thinker',
    'Problem Solver',
    'UI/UX Enthusiast',
  ];

  return (
    <section
  id="home"
  className="min-h-screen flex items-center justify-center bg-gray-300 dark:bg-black text-black dark:text-white 
             relative overflow-hidden px-4 shadow-lg shadow-gray-700 dark:shadow-none"
>

      {/* Animated Gradient Blob Backgrounds */}
      <div className="absolute top-[-4rem] left-[-4rem] w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-[-4rem] right-[-4rem] w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

<div className="relative z-10 max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-16 py-24 md:pl-24">
        {/* Left Section - Text */}
      <motion.div
  initial={{ x: -50, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 1 }}
  // className="flex flex-col gap-6 items-center md:items-start text-center md:text-left order-2 md:order-1 w-full"
className="flex flex-col gap-6 text-center md:text-left order-2 md:order-1 w-full"

>

          <div className="inline-flex items-center gap-2 text-pink-600 dark:text-pink-400 text-sm font-medium px-4 py-2 bg-pink-100 dark:bg-pink-800/20 rounded-full w-fit mx-auto md:mx-0">
            <Sparkles className="w-4 h-4" />
            Welcome to My World
          </div>

<h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug flex flex-wrap items-center gap-2" > <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-700 via-pink-500 to-pink-400 animate-text-shine"> Hey there! </span> <span className="inline-block text-3xl" role="img" aria-label="woman technologist" > 👩‍💻 </span> <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-800 via-pink-500 to-pink-800"> I'm Sahana S Acharya </span> </h1>



          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto md:mx-0">
            I love building web applications that blend design and functionality.
            <br />
            I'm a <TypeWriter words={roles} delay={100} />
          </p>

          <ContactInfo />
          <ActionButtons />
          {/* <SocialLinks /> */}
        </motion.div>

        {/* Right Section - Image + Floating Card */}
        <motion.div
  initial={{ y: 50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 1 }}
  className="relative w-full flex justify-center order-1 md:order-2"
>
  <img
    src="/assets/profile.avif"
    alt="Sahana S Acharya"
    className="w-56 h-56 sm:w-72 sm:h-72 rounded-full  shadow-[0_0_35px_rgba(236,72,153,0.4)] hover:scale-105 transition duration-500 object-cover"
/>
</motion.div>

      </div>
    </section>
  );
}
