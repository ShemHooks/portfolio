import cv from "../assets/cv.pdf";

export default function Footer() {
  const clickedContactMe = () => {
    window.open(
      "https://www.linkedin.com/in/shem-regidor-00a991313/",
      "_blank"
    );
  };

  return (
    <footer className="py-12 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <div className="glassmorphism rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4 text-cyber-blue">
            Ready to Build the Future?
          </h3>
          <p className="text-gray-300 mb-6">
            Let's collaborate on your next revolutionary project
          </p>
          <div className="flex justify-center space-x-6">
            <button
              className="px-6 py-3 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-lg font-medium hover:shadow-lg hover:shadow-cyber-blue/25 transition-all duration-300 cursor-pointer"
              onClick={clickedContactMe}
            >
              Contact Me
            </button>
            <a
              href={cv}
              download="Shem-Regidor-CV.pdf"
              className="px-6 py-3 border border-cyber-blue text-cyber-blue rounded-lg font-medium hover:bg-cyber-blue hover:bg-opacity-10 transition-all duration-300 cursor-pointer inline-block"
            >
              Download CV
            </a>
          </div>
        </div>
        <p className="text-gray-500 text-sm mt-8">Shem Regidor</p>
      </div>
    </footer>
  );
}
