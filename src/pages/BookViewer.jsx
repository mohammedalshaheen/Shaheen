import { useBook } from "../context/BookContext";
import { Navigate } from "react-router-dom";
import { ROUTES } from "../routes/routes";

export default function BookViewer() {
  const { currentBook } = useBook();

  if (!currentBook) {
    return <Navigate to={ROUTES.UPLOAD} replace />;
  }

  const firstPage = currentBook.pages[0];

  return (
    <div className="min-h-screen bg-[#070B14] px-6 py-8">

      <div className="mx-auto max-w-5xl">

        {/* معلومات الكتاب */}
        <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-6 backdrop-blur-xl">

          <h1 className="text-3xl font-bold text-white">
            {currentBook.title}
          </h1>

          <p className="mt-2 text-slate-400">
            {currentBook.author}
          </p>

          <div className="mt-6 flex flex-wrap gap-4">

            <div className="rounded-xl bg-cyan-500/10 px-4 py-2 text-cyan-300">
              📄 {currentBook.pagesCount} صفحة
            </div>

            <div className="rounded-xl bg-cyan-500/10 px-4 py-2 text-cyan-300">
              💾 {currentBook.size} MB
            </div>

          </div>

        </div>

        {/* الصفحة */}
        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8">

          <h2 className="mb-6 text-xl font-bold text-white">
            الصفحة الأولى
          </h2>

          <div className="max-h-[500px] overflow-y-auto whitespace-pre-wrap leading-8 text-slate-300">
            {firstPage?.text || "لا يوجد نص داخل الصفحة."}
          </div>

        </div>

        {/* الأزرار */}
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">

          <button className="rounded-2xl bg-cyan-500 py-3 font-semibold text-white transition hover:bg-cyan-400">
            🤖 اسأل الذكاء الاصطناعي
          </button>

          <button className="rounded-2xl bg-violet-600 py-3 font-semibold text-white transition hover:bg-violet-500">
            📝 إنشاء اختبار
          </button>

          <button className="rounded-2xl bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-500">
            📚 تلخيص
          </button>

          <button className="rounded-2xl bg-orange-500 py-3 font-semibold text-white transition hover:bg-orange-400">
            💡 شرح الصفحة
          </button>

        </div>

      </div>

    </div>
  );
}