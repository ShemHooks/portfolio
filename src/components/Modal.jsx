import { AnimatePresence, motion } from "framer-motion";

export default function Modal({ isOpen, onClose, title, message }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-6 bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-md p-7 bg-gray-950 border rounded-2xl border-cyan-400/70 shadow-[0_0_50px_rgba(0,212,255,.18)]"
            initial={{ opacity: 0, scale: 0.72, borderRadius: 48 }}
            animate={{ opacity: 1, scale: 1, borderRadius: 16 }}
            exit={{ opacity: 0, scale: 0.78, borderRadius: 48 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="mb-4 text-xl font-bold text-cyan-400">{title}</h3>
            <p className="mb-6 leading-relaxed text-gray-300">{message}</p>
            <button onClick={onClose} className="w-full py-2.5 font-medium rounded-lg bg-gradient-to-r from-cyan-400 to-violet-500 hover:shadow-lg hover:shadow-cyan-400/25">
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
