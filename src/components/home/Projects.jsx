import { Github, Globe } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "🧋 Shake Hub",
      desc: "A full-stack milkshake ordering platform with a smooth UI built using React, Tailwind CSS, and Framer Motion. The backend in Node.js, Express, and MongoDB handles authentication, product management, and orders efficiently.",
      tech: ["React", "Tailwind CSS", "Framer Motion", "Node.js", "MongoDB", "Express"],
      live: "https://shakehub.netlify.app/",
      github: "https://github.com/zaheerali684/shake-hub-frontend",
      thumbnail: "/images/shake.png",
    },
    {
      title: "APEX PRESENTATION",
      desc: `A modern, visually engaging website showcasing creative and professional projects with sleek design, smooth animations, and responsive layouts for an immersive user experience.`,
      tech: ["React", "Tailwindcss", "Framer Motion"],
      live: "https://apexpresentation.netlify.app/",
      github: "https://github.com/zaheerali684/Apex-presentation",
      thumbnail: "/images/apex.png",
    },
    {
      title: "Haleema Fitness Club",
      desc: "A personal portfolio built with HTML, CSS, and JavaScript showcasing fitness and health projects.",
      tech: ["HTML", "CSS", "JavaScript"],
      live: "https://haleemafitnessclub.netlify.app/",
      github: "https://github.com/zaheerali684/Gym",
      thumbnail: "/images/gym.png",
    },
  ];

  return (
    <section className="w-11/12 md:w-2/3 mx-auto my-24" id="projects">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight pb-2 flex items-center justify-center gap-2">
        Projects
      </h2>
      <span className="block h-[2px] w-28 bg-indigo-600 rounded-full -mt-1 mb-12 mx-auto"></span>

      <div className="grid sm:grid-cols-2 gap-10">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all border border-transparent hover:border-indigo-600 overflow-hidden flex flex-col h-full"
          >
            {/* Thumbnail */}
            <div className="relative w-full h-64 bg-gray-100">
                <img
                  src={p.thumbnail}
                  alt={p.title}
                  className="w-full h-full object-cover object-top"
                />
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {p.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4 text-sm flex-grow">
                {p.desc}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tech.map((t, j) => (
                  <span
                    key={j}
                    className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-lg text-xs font-medium hover:bg-indigo-600 hover:text-white transition-all cursor-default"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-auto">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all text-sm font-medium shadow-sm hover:shadow-md"
                >
                  <Globe className="w-4 h-4" />
                  View Project
                </a>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-all text-sm font-medium shadow-sm hover:shadow-md"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
