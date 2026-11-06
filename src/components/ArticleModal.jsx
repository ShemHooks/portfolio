import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

export default function ArticleModal({ article, onClose }) {
  const closeButtonRef = useRef(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!article) return;

    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const dialog = dialogRef.current;
      if (!dialog) return;

      const focusable = Array.from(
        dialog.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );

      if (!focusable.length) {
        event.preventDefault();
        dialog.focus();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      } else if (!dialog.contains(document.activeElement)) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const frame = requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);

      if (previousFocus?.isConnected) {
        previousFocus.focus();
      }
    };
  }, [article, onClose]);

  const renderBlock = (block, index) => {
    switch (block.type) {
      case "heading":
        return <h4 key={index}>{block.text}</h4>;

      case "paragraph":
        return <p key={index}>{block.text}</p>;

      case "quote":
        return (
          <blockquote key={index} className="journal-article-quote">
            {block.text}
          </blockquote>
        );

      case "code":
        return (
          <pre key={index} className="journal-code">
            <code>{block.text}</code>
          </pre>
        );

      case "image":
        return (
          <figure key={index} className="journal-modal-cover">
            <img src={block.src} alt={block.alt || ""} loading="lazy" />
            {block.caption && <figcaption>{block.caption}</figcaption>}
          </figure>
        );

      default:
        return null;
    }
  };

  return createPortal(
    <AnimatePresence>
      {article && (
        <motion.div
          key="article-overlay"
          className="journal-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
        >
          <motion.div
            key={article.id}
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="journal-modal-title"
            tabIndex={-1}
            className="journal-modal"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25 }}
          >
            <div className="journal-modal-topbar">
              <span className="eyebrow">
                THE DEV JOURNAL / {article.number}
              </span>

              <button
                ref={closeButtonRef}
                type="button"
                className="journal-modal-close"
                aria-label="Close article"
                onClick={onClose}
              >
                <FiX />
              </button>
            </div>

            <article className="journal-article journal-modal-body">
              <span className="eyebrow">{article.category}</span>

              <h3 id="journal-modal-title">{article.title}</h3>

              <div className="journal-tags">
                {article.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              {article.cover && (
                <div className="journal-modal-cover">
                  <img
                    src={article.cover}
                    alt={article.coverAlt || article.title}
                  />
                </div>
              )}

              {article.blocks.map(renderBlock)}

              <div className="journal-modal-end">
                <span>END OF ARTICLE — {article.number}</span>

                <button type="button" onClick={onClose}>
                  CLOSE ARTICLE ↑
                </button>
              </div>
            </article>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
