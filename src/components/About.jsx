import icon from "../assets/icon.png";

export default function About() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-16 text-4xl font-bold text-center text-cyber-blue text-glow">
          ABOUT
        </h2>
        <div className="p-8 glassmorphism rounded-2xl md:p-12">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-6 text-2xl font-bold text-cyber-purple">
                Innovation Through Code
              </h3>
              <p className="mb-6 leading-relaxed text-gray-300">
                With hands-on experience in full-stack development, I specialize
                in building web and mobile applications that turn ideas into
                impactful digital solutions. I strive to write code that not
                only solves today’s challenges but anticipates tomorrow’s
                opportunities.
              </p>
              <p className="leading-relaxed text-gray-300">
                I believe in writing code that not only solves today's problems
                but anticipates tomorrow's challenges.
              </p>
            </div>
            <div className="p-8 text-center holographic rounded-xl">
              <div className="mb-4 text-6xl">
                <div className="flex justify-center ">
                  <img src={icon} alt="" className="w-40 h-40" />
                </div>
              </div>
              <h4 className="mb-2 text-xl font-bold text-cyber-blue">
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
