import { GraduationCap, Calendar, Award } from "lucide-react";
import React from "react";

interface EducationCardProps {
  degree: string;
  institution: string;
  period: string;
  score: string;
  isLast?: boolean;   // ← pass true for the final item
}

export function EducationCard({
  degree,
  institution,
  period,
  score,
  isLast = false,
}: EducationCardProps) {
  return (
    <div className="relative flex gap-8">
      {/* Dot + line column */}
      <div className="relative">
        {/* Dot */}
        <span className="block w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-pink-500 shadow-md" />

        {/* Vertical line — hidden on last card */}
        {!isLast && (
          <span className="absolute left-1/2 -translate-x-1/2 top-4 bottom-0 w-px
                           bg-gradient-to-b from-blue-300 to-pink-300" />
        )}
      </div>

      {/* Card body */}
      <div className="flex-1 bg-white/80 dark:bg-white/5 backdrop-blur-md
                      border border-gray-200 dark:border-gray-700 rounded-xl
                      p-5 sm:p-6 shadow-md hover:shadow-lg transition-transform
                      duration-300 hover:scale-[1.02]">
        {/* Header row */}
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
            {degree}
          </h3>
          <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        </div>

        <p className="text-pink-600 dark:text-pink-400 font-medium mb-3">
          {institution}
        </p>

        {/* Details */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-700 dark:text-gray-300">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" /> {period}
          </span>
          <span className="flex items-center gap-1">
            <Award className="w-4 h-4" /> Score: {score}
          </span>
        </div>
      </div>
    </div>
  );
}
