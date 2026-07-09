export default function Button({
  children,
  onClick,
  variant = "primary",
  disabled = false,
  fullWidth = true,
}) {
  const variants = {
    primary:
      "bg-cyan-500 hover:bg-cyan-400 text-black shadow-lg shadow-cyan-500/30",

    secondary:
      "bg-slate-800 hover:bg-slate-700 text-white border border-slate-600",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${variants[variant]}
        ${fullWidth ? "w-full" : ""}

        rounded-2xl
        py-4
        px-6

        text-lg
        font-bold

        transition-all
        duration-300

        active:scale-95

        disabled:opacity-50
        disabled:cursor-not-allowed
      `}
    >
      {children}
    </button>
  );
}