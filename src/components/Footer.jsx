export default function Footer() {
  const cv = require("../assets/cv.pdf");

  const clickedContactMe = () => {
    window.location.href =
      "https://www.linkedin.com/in/shem-regidor-00a991313/";
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = cv;
    link.download = "Shem-Regidor-CV.pdf"; // the filename users will see
    link.click();
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
              className="px-6 py-3 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-lg font-medium hover:shadow-lg hover:shadow-cyber-blue/25 transition-all duration-300"
              onClick={clickedContactMe}
            >
              Contact Me
            </button>
            <button
              className="px-6 py-3 border border-cyber-blue text-cyber-blue rounded-lg font-medium hover:bg-cyber-blue hover:bg-opacity-10 transition-all duration-300"
              onClick={downloadCV}
            >
              Download CV
            </button>
          </div>
        </div>
        <p className="text-gray-500 text-sm mt-8">Shem Regidor</p>
      </div>
    </footer>
  );
}
