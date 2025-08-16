import { User2, Code2, Lightbulb } from "lucide-react";
import { GoGoal } from "react-icons/go";
import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";



const aboutData = [
  {
    title: "The Dev Behind the Screen",
    icon: User2,
    color: "from-pink-500 to-rose-400",
    points: [
      "Coding isn't just a skill — it's how I express creativity.",
      "From brainstorming to deploying, I love the entire journey",
      "I find joy in building things that solve real problems.",
    ],
  },
  {
    title: "What Fuels My Flow",
    icon: Code2,
    color: "from-fuchsia-500 to-purple-500",
    points: [
      "Nothing excites me more than turning ideas into interactive experiences.",
      "I enjoy writing clean, efficient code that feels almost poetic.",
      "Solving a tough bug feels better than winning a game 🧩.",
    ],
  },
  {
    title: "Driven by Vision",
    icon: GoGoal,
    color: "from-purple-500 to-indigo-500",
    points: [
      "I aim to craft digital tools that genuinely improve lives.",
      "Every project is a step toward becoming a thoughtful problem solver.",
      "Staying curious is my secret to continuous growth.",
    ],
  },
  {
    title: "What I Believe In",
    icon: Lightbulb,
    color: "from-pink-600 to-yellow-400",
    points: [
      "Great code is simple, elegant, and easy to maintain.",
      "Design and logic should always complement each other.",
      "Tech should feel empowering — not overwhelming 🌱",
    ],
  },
];



export function About() {
  return (
    <SectionBackground>
      <section id="about">
        <div className="container mx-auto px-6">
      <SectionTitle subtitle="I build cool stuff, learn new things daily, and sprinkle creativity like glitter ✨.">
  About Me
</SectionTitle>


          {/* Short Intro */}
          <div className="max-w-4xl mx-auto text-center mb-16">
{/* <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
  Hey there! <span className="animate-wave inline-block">👋</span> I'm{" "}
  <span className="text-pink-600 font-semibold">Sahana S Acharya</span>, a passionate developer who treats every line of code like art and every bug like a challenge worth solving. I bring ideas to life with clean logic, smooth UI, and just the right spark of creativity. Whether it’s backend flow or pixel-perfect design, I’m all in — focused, curious, and always building what matters.
</p> */}

            {/* <div className="mt-4 flex justify-center">
              <span className="text-sm bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-300 px-4 py-2 rounded-full shadow-md">
                🚀 Turning ideas into intuitive experiences
              </span>
            </div> */}
          </div>

          {/* Premium Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {aboutData.map(({ title, icon: Icon, color, points }, index) => (
              <div
                key={index}
                className="relative p-6 rounded-2xl bg-white/80 dark:bg-black/30 backdrop-blur-lg shadow-xl border border-white/30 dark:border-white/10 hover:-translate-y-1 transition-transform duration-300"
              >
                {/* Gradient Accent Line */}
                <div
                  className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${color} rounded-t-2xl`}
                />

                {/* Icon */}
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className={`bg-gradient-to-tr ${color} p-3 rounded-xl shadow-md`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {title}
                  </h3>
                </div>

                {/* Description */}
                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                  {points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
