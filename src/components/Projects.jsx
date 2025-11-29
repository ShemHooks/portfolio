import { useState } from "react";
import kcera from "../assets/projects/kcera.jpg";
import iskolarhub from "../assets/projects/iskolarhub.png";
import dts from "../assets/projects/dts.png";
import Modal from "../components/Modal";

export default function Projects() {
  const [modal, setModal] = useState({ isOpen: false, title: "", message: "" });

  const projects = [
    {
      img: kcera,
      title: "KCERA",
      desc: "Kabankalan City Emergency Response Application for real-time reporting and response tracking.",
      tags: ["React Native", "React", "Laravel", "Node", "MySQL"],
      timeline: "Feb 2025 - Nov 2025",
      layout: "horizontal",
      action: () =>
        setModal({
          isOpen: true,
          title: "KCERA",
          message:
            "KCERA has not yet been deployed as it is currently undergoing approval with the city administration.",
        }),
    },
    {
      img: dts,
      title: "Document Tracking System",
      desc: "Digital document management system for the city hall to improve workflow efficiency.",
      tags: ["Vue.js", "Laravel", "MySQL"],
      timeline: "July 2025 - October 2025",
      action: () =>
        setModal({
          isOpen: true,
          title: "Document Management System",
          message:
            "The Document Management System is not yet available to the public. Access is restricted to authorized users from the Kabankalan City Hall to ensure system security and integrity.",
        }),
    },
    {
      img: iskolarhub,
      title: "IskolarHub",
      desc: "A platform that helps students search and apply for scholarships effectively.",
      tags: ["Next", "DrizzleORM", "PostgreSQL"],
      timeline: "Nov 2025 - Present",
      note: "Under development",
      action: () =>
        window.open("https://iskolar-hub-k874.vercel.app/", "_blank"),
    },
  ];

  return (
    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-16 text-4xl font-bold text-center text-cyber-blue text-glow">
          PROJECTS
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, i) => (
            <div
              key={i}
              className={`overflow-hidden transition-all duration-300 glassmorphism rounded-2xl project-card ${
                proj.layout === "horizontal" ? "md:flex" : ""
              }`}
            >
              <img
                src={proj.img}
                alt={proj.title}
                className={`object-cover rounded-t-2xl ${
                  proj.layout === "horizontal"
                    ? "md:w-1/2 md:rounded-l-2xl md:rounded-tr-none"
                    : "w-full h-48"
                }`}
              />

              <div
                className={`p-6 ${
                  proj.layout === "horizontal" ? "md:w-1/2" : ""
                }`}
              >
                {proj.note && (
                  <p className="mb-2 font-semibold text-red-500">{proj.note}</p>
                )}

                <h3 className="mb-2 text-xl font-bold text-cyber-blue">
                  {proj.title}
                </h3>
                <p className="mb-2 text-sm italic text-gray-400">
                  {proj.timeline}
                </p>
                <p className="mb-4 leading-relaxed text-gray-300">
                  {proj.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs border rounded-full bg-cyber-blue bg-opacity-20 text-cyber-blue border-cyber-blue border-opacity-30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={proj.action}
                  className="w-full py-3 font-medium transition-all duration-300 rounded-lg bg-gradient-to-r from-cyber-blue to-cyber-purple hover:shadow-lg hover:shadow-cyber-blue/25"
                >
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={modal.isOpen}
        onClose={() => setModal({ ...modal, isOpen: false })}
        title={modal.title}
        message={modal.message}
      />
    </section>
  );
}
