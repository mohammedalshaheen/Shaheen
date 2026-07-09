export default function MainLayout({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#070B14]">

      {/* Glow Top */}
      <div className="absolute left-1/2 top-[-180px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />

      {/* Glow Left */}
      <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

      {/* Glow Right */}
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

      {/* Content */}
      <main className="relative z-10 min-h-screen px-6 py-8">
        {children}
      </main>

    </div>
  );
}