export default function Header() {
  return (
    <header className="flex items-center justify-center min-h-screen px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="rounded-3xl p-12 bg-[rgba(15,23,42,0.3)] backdrop-blur-sm border border-white/10 shadow-[0_0_20px_rgba(0,212,255,0.3)]">
          <h1 className="text-6xl md:text-8xl font-black mb-6 text-white bg-clip-text bg-gradient-to-r from-cyber-blue to-cyber-purple drop-shadow-[0_0_10px_rgba(0,212,255,0.8)]">
            Shem Regidor
          </h1>
          <p className="mb-8 text-2xl font-medium md:text-3xl text-cyber-blue">
            Software Developer
          </p>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed text-gray-300">
            Crafting innovative web and mobile solutions with clean, efficient,
            and user-focused designs
          </p>
        </div>
      </div>
    </header>
  );
}
