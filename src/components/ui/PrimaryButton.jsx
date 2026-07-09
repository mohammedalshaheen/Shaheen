export default function PrimaryButton({ children }) {
  return (
    <button
      className="
      w-full
      rounded-2xl
      bg-cyan-500
      py-4
      text-lg
      font-bold
      text-white
      transition-all
      duration-300
      hover:scale-105
      hover:bg-cyan-400
      active:scale-95
      shadow-lg
      shadow-cyan-500/30
      "
    >
      {children}
    </button>
  );
}