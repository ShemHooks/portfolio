import { Link } from "react-router-dom";
import cv from "../assets/cv.pdf";

export default function Footer() {
  const clickedContactMe = () => {
    window.open(
      "https://www.linkedin.com/in/shem-regidor-00a991313/",
      "_blank",
    );
  };

  return (
    <footer className="px-6 py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <div className="p-8 glassmorphism rounded-2xl">
          <h3 className="mb-4 text-2xl font-bold text-cyber-blue">
            Ready to Build the Future?
          </h3>
          <p className="mb-6 text-gray-300">
            Let's collaborate on your next revolutionary project
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              className="px-6 py-3 font-medium transition-all duration-300 rounded-lg cursor-pointer bg-gradient-to-r from-cyber-blue to-cyber-purple hover:shadow-lg hover:shadow-cyber-blue/25"
              onClick={clickedContactMe}
            >
              Contact Me
            </button>

            <a
              href={cv}
              download="Shem-Regidor-CV.pdf"
              className="inline-block px-6 py-3 font-medium transition-all duration-300 border rounded-lg cursor-pointer border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:bg-opacity-10"
            >
              Download CV
            </a>

            <Link
              to="/resume"
              className="inline-block px-6 py-3 font-medium text-white transition-all duration-300 border border-gray-600 rounded-lg cursor-pointer hover:border-cyber-purple hover:text-cyber-purple"
            >
              Show CV
            </Link>
          </div>
        </div>
        <p className="mt-8 text-sm text-gray-500">Shem Mayo Regidor</p>
      </div>
    </footer>
  );
}
