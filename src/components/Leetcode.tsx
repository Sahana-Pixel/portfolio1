import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
import { SiLeetcode } from "react-icons/si";

export function Leetcode() {
  return (
    <SectionBackground>
      <section id="leetcode">
        <div className="container mx-auto max-w-6xl px-8">
          <SectionTitle subtitle="From class notes to complexity analysis, DSA is where I level up daily.">
            Leetcode Progress
          </SectionTitle>

          {/* Leetcode Section */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Leetcode Activity Image */}
            <div className="relative w-full h-[18rem] md:h-[25rem] overflow-hidden">
              <img
                src="https://leetcard.jacoblin.cool/sahana_pixel?theme=dark&font=Inter&ext=heatmap"
                title="Leetcode Activity"
                className="absolute w-full h-full rounded-xl shadow-md"
              />
            </div>

            {/* Leetcode Journey Text */}
            <div>
  <h3 className="text-center text-2xl font-bold text-pink-600 dark:text-pink-400 mb-4">
    My LeetCode Journey
  </h3>

  <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-4">
    LeetCode started off as a curiosity and quickly turned into a daily challenge I look forward to. 
    It’s not just about solving problems it's about sharpening logic, building consistency, and pushing limits one question at a time.
  </p>

  <p className="text-center text-lg text-gray-700 dark:text-gray-300">
    From brute-force beginnings to optimized solutions, every problem teaches me something new. 
    Whether it’s arrays, recursion, or DP I treat each bug like a puzzle waiting to be cracked 💡.
  </p>

  {/* LeetCode Profile Button */}
  <div className="mt-6 flex justify-center">
    <a
      href="https://leetcode.com/sahana_pixel/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 bg-pink-800 text-white px-4 py-2 rounded-lg hover:bg-pink-700 hover:scale-105 transition-all"
    >
      <SiLeetcode className="w-5 h-5" /> View My LeetCode
    </a>
  </div>
</div>

          </div>



        </div>
      </section>
    </SectionBackground>
  );
}
