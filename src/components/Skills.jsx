export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      color: "text-cyber-purple",
      items: [
        ["⚛️", "React"],
        ["🟢", "Vue"],
        ["📱", "React Native"],
        ["📜", "JavaScript"],
      ],
    },
    {
      title: "Backend",
      color: "text-cyber-purple",
      items: [
        ["🟣", "PHP"],
        ["🔴", "Laravel"],
        ["🟢", "Node.js"],
      ],
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-cyber-blue text-glow">
          SKILLS
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, i) => (
            <div key={i} className="glassmorphism rounded-2xl p-8">
              <h3 className={`text-xl font-bold mb-6 ${cat.color} text-center`}>
                {cat.title}
              </h3>
              <div className="space-y-4">
                {cat.items.map(([icon, text], idx) => (
                  <div
                    key={idx}
                    className="skill-icon rounded-lg p-4 flex items-center space-x-3"
                  >
                    <span className="text-2xl">{icon}</span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
