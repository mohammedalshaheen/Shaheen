export default function Logo() {
  return (
    <div className="flex flex-col items-center">

      <div
        className="
        w-28
        h-28
        rounded-full
        bg-gradient-to-br
        from-cyan-400
        to-blue-700
        flex
        items-center
        justify-center
        shadow-2xl
        shadow-cyan-500/40
        "
      >

        <span className="text-5xl">
          🦅
        </span>

      </div>

      <h1 className="mt-6 text-6xl font-black text-white">
        Shaheen
      </h1>

      <p className="mt-2 text-slate-400">
        افهم... ثم انطلق
      </p>

    </div>
  );
}