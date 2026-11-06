import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

import { posts } from "../data/posts";
import ArticleModal from "./ArticleModal";

const Reveal = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.12 }}
    transition={{
      duration: 0.7,
      delay,
      ease: [0.2, 0.8, 0.2, 1],
    }}
  >
    {children}
  </motion.div>
);

export default function DeveloperJournal() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <>
      <section className="journal section" id="journal">
        <div className="section-heading">
          <span className="eyebrow">06 / DEV JOURNAL</span>

          <span className="rule" />

          <span className="small-count">ENGINEERING NOTES</span>
        </div>

        <Reveal>
          <h2 className="section-title">
            NOTES FROM
            <br />
            <span>THE BUILD.</span>
          </h2>

          <p className="journal-intro">
            Lessons, experiments, and decisions behind the software I build.
          </p>
        </Reveal>

        <div className="journal-list">
          {posts.map((post, index) => (
            <Reveal key={post.id} delay={0.05}>
              <article className="journal-feature">
                <div className="journal-cover">
                  <img
                    src={post.cover}
                    alt={post.coverAlt || post.title}
                    loading="lazy"
                  />
                </div>

                <div className="journal-feature-content">
                  <span className="eyebrow">{post.category}</span>

                  <h3>{post.title}</h3>

                  <p>{post.excerpt}</p>

                  <div className="journal-tags">
                    {post.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <button
                    type="button"
                    className="journal-read"
                    aria-haspopup="dialog"
                    onClick={() => setSelectedArticle(post)}
                  >
                    READ FULL ARTICLE
                    <FiArrowUpRight aria-hidden="true" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </>
  );
}
