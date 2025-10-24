export default function About() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-cyber-blue text-glow">
          ABOUT
        </h2>
        <div className="glassmorphism rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-cyber-purple">
                Innovation Through Code
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                With hands-on experience in full-stack development, I specialize
                in building web and mobile applications that turn ideas into
                impactful digital solutions. I strive to write code that not
                only solves today’s challenges but anticipates tomorrow’s
                opportunities.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I believe in writing code that not only solves today's problems
                but anticipates tomorrow's challenges.
              </p>
            </div>
            <div className="holographic rounded-xl p-8 text-center">
              <div className="text-6xl mb-4">🚀</div>
              <h4 className="text-xl font-bold text-cyber-blue mb-2">
                Mission
              </h4>
              <p className="text-gray-300">
                Empowering the future, one line of code at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
