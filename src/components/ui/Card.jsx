export default function Card({
  children,
  className = "",
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className={`
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl

        shadow-[0_10px_40px_rgba(0,0,0,.25)]

        transition-all
        duration-300

        hover:-translate-y-2
        hover:border-cyan-400/40
        hover:shadow-[0_0_35px_rgba(24,213,255,.20)]

        ${className}
      `}
    >
      {children}
    </div>
  );
}