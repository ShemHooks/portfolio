import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
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
  const [showAll, setShowAll] = useState(false);
  const [modal, setModal] = useState({
    isOpen: false,
    title: "",
    message: "",
  });

  const openModal = (title, message) => {
    setModal({ isOpen: true, title, message });
  };

  const projects = [
    {
      img: kcera,
      title: "KCERA",
      featured: true,
      mobile: true,
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
      featured: true,
      desc: "A digital document management and tracking system developed for the city government to streamline document processing, monitoring, and administrative workflows.",
      tags: ["Vue.js", "Laravel", "MySQL"],
      timeline: "July 2025 - October 2025",
      action: () =>
        window.open(
          "https://lgukabdms.online/",
          "_blank",
          "noopener,noreferrer",
        ),
    },
    {
      img: lcrs,
      title: "Kabankalan City Local Civil Registrar System",
      featured: true,
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
      action: () =>
        window.open(
          "https://speakup-iota.vercel.app/",
          "_blank",
          "noopener,noreferrer",
        ),
    },
    {
      img: kab,
      title: "Kabankalan City Website",
      desc: "A personal redesign concept for the Kabankalan City website, created as a passion project to explore a modern approach to presenting the city's digital presence.",
      tags: ["React"],
      timeline: "August 28, 2026",
      githublink: "https://github.com/ShemHooks/welcome-to-Kabankalan",
      action: () =>
        window.open(
          "https://welcome-to-kabankalan.vercel.app/",
          "_blank",
          "noopener,noreferrer",
        ),
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
          "This system was developed during my internship at the ICT Division of the Negros Occidental Provincial Government. The project and its source code were formally turned over to our OJT supervisor for continued development and internal use.",
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

  const featuredProjects = projects.filter((project) => project.featured);

  const visibleProjects = showAll ? projects : featuredProjects;

  return (
    <section
      id="work"
      className="min-h-screen bg-black px-6 py-24 text-[#f2f0eb]"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="pb-10 border-b mb-14 border-white/15">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-2 h-2 bg-white rounded-full" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/50">
              01 / Portfolio
            </span>
          </div>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h2 className="text-5xl font-bold uppercase tracking-[-0.055em] sm:text-6xl lg:text-8xl">
                {showAll ? "ALL PROJECTS." : "FEATURED WORK."}
              </h2>

              <p className="max-w-xl mt-5 text-base leading-relaxed text-white/50">
                A selection of applications, digital platforms, and solutions
                I've designed and developed.
              </p>
            </div>

            <span className="font-mono text-xs tracking-widest text-white/40">
              {String(visibleProjects.length).padStart(2, "0")}
              {" / "}
              {String(projects.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Project grid */}
        <motion.div layout className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((proj, i) => (
              <motion.article
                layout
                key={proj.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{
                  duration: 0.35,
                  delay: Math.min(i * 0.04, 0.2),
                }}
                className="group flex flex-col overflow-hidden border border-white/15 bg-[#0b0b0b] transition-colors duration-300 hover:border-white/40"
              >
                {/* Image */}
                <div className="relative flex h-64 items-center justify-center overflow-hidden border-b border-white/10 bg-[#111] p-4">
                  <span className="absolute z-10 px-3 py-2 font-mono text-xs text-white left-5 top-5 bg-black/80">
                    {String(i + 1).padStart(2, "0")}
                    {" / "}
                    {String(projects.length).padStart(2, "0")}
                  </span>

                  <img
                    src={proj.img}
                    alt={`${proj.title} project preview`}
                    loading="lazy"
                    className={`h-full object-contain transition-transform duration-500 group-hover:scale-[1.03] ${
                      proj.mobile ? "w-auto max-w-full" : "w-full"
                    }`}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/40">
                      {proj.timeline}
                    </span>

                    {proj.note && (
                      <span className="border border-white/20 px-2 py-1 text-[10px] uppercase text-white/60">
                        {proj.note}
                      </span>
                    )}
                  </div>

                  <h3 className="mb-4 text-2xl font-semibold tracking-tight text-white">
                    {proj.title}
                  </h3>

                  <p className="mb-6 text-sm leading-7 text-white/55">
                    {proj.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-7">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-white/15 px-3 py-1.5 font-mono text-[10px] text-white/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-5 mt-auto border-t border-white/15">
                    <button
                      type="button"
                      onClick={proj.action}
                      className="flex items-center gap-3 text-xs font-semibold tracking-widest text-white uppercase transition-colors hover:text-white/60"
                    >
                      View Project
                      <span aria-hidden="true">↗</span>
                    </button>

                    {proj.githublink && (
                      <a
                        href={proj.githublink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${proj.title} source code`}
                        className="flex items-center gap-2 text-xs transition-colors text-white/50 hover:text-white"
                      >
                        <FaGithub size={18} />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View all / Show less */}
        <div className="flex flex-col items-center gap-5 pt-12 border-t mt-14 border-white/15">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            aria-expanded={showAll}
            className="group flex w-full max-w-sm items-center justify-between gap-12 border border-[#f2f0eb] bg-[#f2f0eb] px-7 py-5 text-xs font-bold uppercase tracking-[0.15em] text-black transition-all duration-300 hover:bg-transparent hover:text-white"
          >
            <span>{showAll ? "SHOW LESS" : "VIEW ALL PROJECTS"}</span>

            <span
              className="text-xl transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            >
              {showAll ? "↑" : "↗"}
            </span>
          </button>

          <p className="font-mono text-xs tracking-widest text-white/40">
            DISPLAYING {visibleProjects.length} OF {projects.length} PROJECTS
          </p>
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
