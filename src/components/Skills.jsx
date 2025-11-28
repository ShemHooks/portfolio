// frontend
import react from "../assets/stack/react.svg"; //for react and react-native
import next from "../assets/stack/next.svg";
import vue from "../assets/stack/vue.svg";
import tailwind from "../assets/stack/tailwind.svg";
import js from "../assets/stack/js.svg";
import ts from "../assets/stack/ts.svg";
import html from "../assets/stack/html.svg";
import css from "../assets/stack/css.svg";

// backend
import php from "../assets/stack/php.svg";
import laravel from "../assets/stack/laravel.svg";
import node from "../assets/stack/node.svg";
import drizzle from "../assets/stack/drizzle.png";

// databases
import mysql from "../assets/stack/mysql.svg";
import postgre from "../assets/stack/postgre.svg";

// tools
import git from "../assets/stack/git.svg";
import github from "../assets/stack/github.svg";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      color: "text-cyber-purple",
      items: [
        { img: react, label: "React" },
        { img: next, label: "Next.js", invert: true },
        { img: vue, label: "Vue" },
        { img: react, label: "React Native" },
        { img: js, label: "JavaScript" },
        { img: ts, label: "TypeScript" },
        { img: tailwind, label: "TailwindCSS" },
        { img: html, label: "HTML" },
        { img: css, label: "CSS", invert: true },
      ],
    },
    {
      title: "Backend",
      color: "text-cyber-purple",
      items: [
        { img: php, label: "PHP" },
        { img: laravel, label: "Laravel" },
        { img: node, label: "Node.js" },
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
      title: "Tools",
      color: "text-cyber-purple",
      items: [
        { img: git, label: "Git" },
        { img: github, label: "GitHub", invert: true },
      ],
    },
  ];

  return (
    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-16 text-4xl font-bold text-center text-cyber-blue text-glow">
          SKILLS
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <div key={i} className="p-8 glassmorphism rounded-2xl">
              <h3 className={`text-xl font-bold mb-6 ${cat.color} text-center`}>
                {cat.title}
              </h3>

              <div className="space-y-4">
                {cat.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center p-4 space-x-3 rounded-lg skill-item"
                  >
                    <img
                      src={item.img}
                      alt={item.label}
                      className={`w-6 h-6 ${
                        item.invert ? "invert brightness-200" : ""
                      }`}
                    />
                    <span className="text-lg">{item.label}</span>
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
