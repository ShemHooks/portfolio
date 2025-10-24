export default function Awards() {
  const awards = [
    [
      "🚨",
      "Inter-School Technovation Startup Competition",
      "3rd Kabankalan ICT Summit 2025",
      "Champion - KCERA Project",
    ],
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-cyber-blue text-glow">
          AWARDS
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map(([icon, title, event, detail], i) => (
            <div key={i} className="glassmorphism rounded-2xl p-8 text-center">
              <div className="holographic rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">{icon}</span>
              </div>
              <h3 className="text-lg font-bold text-cyber-purple mb-2">
                {title}
              </h3>
              <p className="text-sm text-gray-400 mb-2">{event}</p>
              <p className="text-xs text-gray-500">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
