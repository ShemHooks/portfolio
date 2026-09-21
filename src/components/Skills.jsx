// programming languages
import js from "../assets/stack/js.svg";
import ts from "../assets/stack/ts.svg";
import php from "../assets/stack/php.svg";
import python from "../assets/stack/python.svg";
import html from "../assets/stack/html.svg";
import css from "../assets/stack/css.svg";

// frameworks & libraries
import react from "../assets/stack/react.svg";
import next from "../assets/stack/next.svg";
import vue from "../assets/stack/vue.svg";
import laravel from "../assets/stack/laravel.svg";
import node from "../assets/stack/node.svg";
import tailwind from "../assets/stack/tailwind.svg";
import drizzle from "../assets/stack/drizzle.png";

// databases
import mysql from "../assets/stack/mysql.svg";
import postgre from "../assets/stack/postgre.svg";

// tools & platforms
import git from "../assets/stack/git.svg";
import github from "../assets/stack/github.svg";
import expo from "../assets/stack/expo.png";
import docker from "../assets/stack/docker.svg";
import kubernetes from "../assets/stack/kubernetes.svg";
import aws from "../assets/stack/aws.svg";
import linux from "../assets/stack/linux.svg";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      color: "text-cyber-purple",
      items: [
        { img: js, label: "JavaScript" },
        { img: ts, label: "TypeScript" },
        { img: php, label: "PHP" },
        { img: python, label: "Python" },
        { img: html, label: "HTML" },
        { img: css, label: "CSS", invert: true },
      ],
    },

    {
      title: "Frameworks & Libraries",
      color: "text-cyber-purple",
      items: [
        { img: react, label: "React" },
        { img: next, label: "Next.js", invert: true },
        { img: vue, label: "Vue.js" },
        { img: react, label: "React Native" },
        { img: laravel, label: "Laravel" },
        { img: node, label: "Node.js" },
        { img: tailwind, label: "Tailwind CSS" },
        { img: drizzle, label: "Drizzle ORM" },
      ],
    },

    {
      title: "Databases",
      color: "text-cyber-purple",
      items: [
        { img: mysql, label: "MySQL" },
        { img: postgre, label: "PostgreSQL" },
      ],
    },

    {
      title: "Tools & Platforms",
      color: "text-cyber-purple",
      items: [
        { img: git, label: "Git" },
        { img: github, label: "GitHub", invert: true },
        { img: docker, label: "Docker" },
        { img: kubernetes, label: "Kubernetes" },
        { img: aws, label: "AWS" },
        { img: linux, label: "Linux" },
        { img: expo, label: "Expo", invert: true },
      ],
    },
  ];

  return (
    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-16 text-4xl font-bold text-center text-cyber-blue text-glow">
          SKILLS
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((cat, i) => (
            <div key={i} className="p-8 glassmorphism rounded-2xl">
              <h3 className={`text-xl font-bold mb-6 ${cat.color} text-center`}>
                {cat.title}
              </h3>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {cat.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center p-4 space-x-3 rounded-lg skill-item"
                  >
                    <img
                      src={item.img}
                      alt={`${item.label} logo`}
                      className={`object-contain w-7 h-7 ${
                        item.invert ? "invert brightness-200" : ""
                      }`}
                    />

                    <span className="text-base font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
