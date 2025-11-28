// pages/Awards.jsx
import awards from "../../data/awards";
import AwardCard from "../components/AwardCard";

export default function Awards() {
  return (
    <section className="px-6 py-20 ">
      <div className="mx-auto max-w-10xl">
        <h2 className="mb-16 text-4xl font-bold text-center text-cyber-blue text-glow">
          AWARDS
        </h2>

        <div className="grid w-full gap-8 md:grid-cols-2 lg:grid-cols-3">
          {awards.map((award, i) => (
            <AwardCard key={i} award={award} />
          ))}
        </div>
      </div>
    </section>
  );
}
