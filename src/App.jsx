// App.jsx
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Awards from "./components/Awards";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-screen bg-[#0a0a1f] text-white font-cyber overflow-x-hidden">
      {/* Static background pattern */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(#ffffff 1px, transparent 1px), radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "50px 50px",
            backgroundPosition: "0 0, 25px 25px",
          }}
        />
      </div>

      <main className="relative z-10">
        <Header />
        <div className="mx-auto max-w-6xl my-12 h-[2px] bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-blue shadow-[0_0_10px_rgba(0,212,255,0.5)]" />

        <About />
        <div className="mx-auto max-w-6xl my-12 h-[2px] bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-blue shadow-[0_0_10px_rgba(0,212,255,0.5)]" />

        <Skills />
        <div className="mx-auto max-w-6xl my-12 h-[2px] bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-blue shadow-[0_0_10px_rgba(0,212,255,0.5)]" />

        <Projects />
        <div className="mx-auto max-w-6xl my-12 h-[2px] bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-blue shadow-[0_0_10px_rgba(0,212,255,0.5)]" />

        <Awards />
        <Footer />
      </main>
    </div>
  );
}

export default App;
