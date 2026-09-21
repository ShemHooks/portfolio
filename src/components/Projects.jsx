import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

import Modal from "../components/Modal";

import kcera from "../assets/projects/kcera.jpg";
import iskolarhub from "../assets/projects/iskolarhub.png";
import dts from "../assets/projects/dts.png";
import su from "../assets/projects/su.png";
import kab from "../assets/projects/kab.png";
import ictd from "../assets/projects/ictd.png";
import lcrs from "../assets/projects/lcrs.png";
import oss from "../assets/projects/oss.png";

export default function Projects() {
  const [modal, setModal] = useState({
    isOpen: false,
    title: "",
    message: "",
  });

  const openModal = (title, message) => {
    setModal({
      isOpen: true,
      title,
      message,
    });
  };

  const projects = [
    {
      img: kcera,
      title: "KCERA",
      desc: "A city-wide emergency response platform designed for real-time incident reporting, location tracking, request validation, and coordinated emergency response.",
      tags: ["React Native", "React", "Laravel", "Node.js", "MySQL"],
      timeline: "February 2025 - November 2025",
      githublink: "https://github.com/ShemHooks/KCERA",
      action: () =>
        openModal(
          "KCERA",
          "KCERA has not yet been deployed and is currently awaiting approval from the city administration for potential implementation.",
        ),
    },

    {
      img: dts,
      title: "Document Management System",
      desc: "A digital document management and tracking system developed for the city government to streamline document processing, monitoring, and administrative workflows.",
      tags: ["Vue.js", "Laravel", "MySQL"],
      timeline: "July 2025 - October 2025",
      action: () => window.open("https://lgukabdms.online/", "_blank"),
    },

    {
      img: iskolarhub,
      title: "IskolarHub",
      desc: "A scholarship discovery platform designed to help students find relevant scholarship opportunities and simplify the application process.",
      tags: ["Next.js", "Drizzle ORM", "PostgreSQL"],
      timeline: "November 2025 - Present",
      githublink: "https://github.com/ShemHooks/IskolarHub",
      note: "Under Development",
      action: () =>
        openModal(
          "IskolarHub",
          "IskolarHub is currently under active development. Additional features and improvements are being implemented before its initial release.",
        ),
    },

    {
      img: su,
      title: "SpeakUp",
      desc: "A citizen engagement platform that enables residents to anonymously submit concerns, complaints, and suggestions to their local government unit.",
      tags: ["Next.js", "Drizzle ORM", "PostgreSQL"],
      timeline: "January 12, 2026 - January 28, 2026",
      githublink: "https://github.com/ShemHooks/speakup",
      action: () => window.open("https://speakup-iota.vercel.app/", "_blank"),
    },

    {
      img: kab,
      title: "Kabankalan City Website",
      desc: "A personal redesign concept for the Kabankalan City website, created as a passion project to explore a modern and engaging approach to presenting the city's identity, information, and digital presence.",
      tags: ["React"],
      timeline: "August 28, 2026",
      githublink: "https://github.com/ShemHooks/welcome-to-Kabankalan",
      action: () =>
        window.open("https://welcome-to-kabankalan.vercel.app/", "_blank"),
    },

    {
      img: ictd,
      title: "ICTD Job Requesting System",
      desc: "A job request and ticketing system developed for ICT service operations, featuring request tracking, technician assignment, workflow management, dashboards, and user administration.",
      tags: ["Next.js", "Laravel", "MySQL"],
      timeline: "April 1, 2026 - May 15, 2026",
      githublink: "https://github.com/ShemHooks/jrts-fe",
      action: () =>
        openModal(
          "ICTD Job Requesting System",
          "This system was developed during my internship at the ICT Division of the Negros Occidental Provincial Government. At the conclusion of our internship, the project and its source code were formally turned over to our OJT supervisor for continued development and internal use.",
        ),
    },

    {
      img: lcrs,
      title: "Kabankalan City Local Civil Registrar System",
      desc: "A records and workflow management system developed to streamline civil registration processes, improve record handling, and support the day-to-day operations of the Local Civil Registrar's Office.",
      tags: ["Next.js", "Node.js", "MySQL"],
      timeline: "July 1, 2026 - September 20, 2026",
      githublink: "https://github.com/ShemHooks/lcrs-fe",
      action: () =>
        openModal(
          "Kabankalan City Local Civil Registrar System",
          "This system was developed for the Kabankalan City Local Civil Registrar's Office and is deployed within the office's local server environment for internal use.",
        ),
    },

    {
      img: oss,
      title: "Negros Occidental One-Stop Shop",
      desc: "A provincial government service platform developed to help centralize and streamline document processing and related public service transactions.",
      tags: ["Next.js", "Laravel", "MySQL"],
      timeline: "April 1, 2026 - May 15, 2026",
      githublink: "https://github.com/Johnie18/oss.fe",
      action: () =>
        openModal(
          "Negros Occidental One-Stop Shop",
          "This project was developed as part of our internship with the Negros Occidental Provincial Government. The completed system was turned over to the office, and its current deployment status is managed internally by the provincial ICT team.",
        ),
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
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 45, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -8, scale: 1.015 }}
              className="flex flex-col overflow-hidden glassmorphism rounded-2xl project-card"
            >
              {/* Project Image */}
              <img
                src={proj.img}
                alt={`${proj.title} project`}
                className="object-cover w-full h-48 rounded-t-2xl"
              />

              {/* Project Content */}
              <div className="flex flex-col flex-1 p-6">
                {proj.note && (
                  <p className="mb-2 text-sm font-semibold text-red-500">
                    {proj.note}
                  </p>
                )}

                <h3 className="mb-2 text-xl font-bold text-cyber-blue">
                  {proj.title}
                </h3>

                <p className="mb-3 text-sm italic text-gray-400">
                  {proj.timeline}
                </p>

                <p className="mb-4 leading-relaxed text-gray-300">
                  {proj.desc}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {proj.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs border rounded-full bg-cyber-blue bg-opacity-20 text-cyber-blue border-cyber-blue border-opacity-30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-auto space-y-3">
                  {proj.githublink && (
                    <a
                      href={proj.githublink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-2 text-gray-300 transition-colors duration-300 hover:text-cyber-blue"
                    >
                      <FaGithub className="text-xl" />
                      View Source Code
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={proj.action}
                    className="w-full py-3 font-medium transition-all duration-300 rounded-lg bg-gradient-to-r from-cyber-blue to-cyber-purple hover:shadow-lg hover:shadow-cyber-blue/25"
                  >
                    View Project
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={modal.isOpen}
        onClose={() =>
          setModal((prev) => ({
            ...prev,
            isOpen: false,
          }))
        }
        title={modal.title}
        message={modal.message}
      />
    </section>
  );
}
