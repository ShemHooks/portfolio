export default function Modal({ isOpen, onClose, title, message }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-sm p-6 bg-gray-900 border-2 rounded-2xl border-cyber-blue">
        <h3 className="mb-4 text-lg font-bold text-cyber-blue">{title}</h3>
        <p className="mb-6 text-gray-300">{message}</p>
        <button
          onClick={onClose}
          className="w-full py-2 font-medium rounded-lg bg-gradient-to-r from-cyber-blue to-cyber-purple hover:shadow-lg hover:shadow-cyber-blue/25"
        >
          Close
        </button>
      </div>
    </div>
  );
}
