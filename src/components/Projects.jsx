export default function Projects() {
  const projects = [
    {
      icon: "🚨",
      title: "KCERA",
      desc: "Kabankalan City Emergency Response Application for real-time reporting and response tracking.",
      tags: ["React Native", "Laravel", "MySQL"],
    },
    {
      icon: "🏛️",
      title: "Kabankalan City Document Management System",
      desc: "Digital document tracking and management system for the city hall to improve workflow efficiency.",
      tags: ["Vue.js", "Laravel", "MySQL"],
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-cyber-blue text-glow">
          PROJECTS
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, i) => (
            <div
              key={i}
              className="glassmorphism rounded-2xl p-8 project-card transition-all duration-300"
            >
              <div className="holographic rounded-lg p-6 mb-6 text-center">
                <div className="text-4xl mb-2">{proj.icon}</div>
                <h3 className="text-xl font-bold text-cyber-blue">
                  {proj.title}
                </h3>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">{proj.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-cyber-blue bg-opacity-20 rounded-full text-xs text-cyber-blue border border-cyber-blue border-opacity-30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button className="w-full py-3 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-lg font-medium hover:shadow-lg hover:shadow-cyber-blue/25 transition-all duration-300 hidden">
                View Project
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
