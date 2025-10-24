export default function Header() {
  return (
    <header className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="text-center max-w-4xl mx-auto">
        <div className="rounded-3xl p-12 bg-[rgba(15,23,42,0.3)] backdrop-blur-sm border border-white/10 shadow-[0_0_20px_rgba(0,212,255,0.3)]">
          <h1 className="text-6xl md:text-8xl font-black mb-6 text-white bg-clip-text bg-gradient-to-r from-cyber-blue to-cyber-purple drop-shadow-[0_0_10px_rgba(0,212,255,0.8)]">
            Shem Regidor
          </h1>
          <p className="text-2xl md:text-3xl text-cyber-blue mb-8 font-medium">
            Web Developer
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Crafting innovative web and mobile solutions with clean, efficient,
            and user-focused designs
          </p>
        </div>
      </div>
    </header>
  );
}
