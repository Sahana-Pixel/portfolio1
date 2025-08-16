import React from "react";

interface SectionBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionBackground({ children, className = "" }: SectionBackgroundProps) {
  return (
    <div
      className={`relative overflow-hidden py-16 
        bg-gradient-to-br from-pink-100 via-fuchsia-100 to-purple-100 
        dark:from-black dark:via-gray-1000/80 dark:to-slate-950/60 
        ${className}`}
    >
      {/* Pink Shadow Blob Top Left */}
      <div className="absolute top-[-5rem] left-[-5rem] w-96 h-96  rounded-full blur-3xl opacity-30 animate-blob z-0"></div>

      {/* Purple Shadow Blob Bottom Right */}
      <div className="absolute bottom-[-5rem] right-[-5rem] w-96 h-96  rounded-full blur-3xl opacity-30 animate-blob animation-delay-2000 z-0"></div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
