import { useState } from "react";
import { useNavigate } from "react-router-dom";

import FileDropZone from "../components/FileDropZone";
import { readPDF } from "../services/pdfService";
import { createBook } from "../engine/bookEngine";
import { useBook } from "../context/BookContext";
import { ROUTES } from "../routes/routes";

export default function UploadBook() {
  const [loading, setLoading] = useState(false);

  const { setCurrentBook } = useBook();
  const navigate = useNavigate();

  async function handleFileSelect(file) {
    setLoading(true);

    try {
      const data = await readPDF(file);

      const book = createBook(data);

      const finalBook = {
        ...book,
        size: (file.size / 1024 / 1024).toFixed(2),
      };

      setCurrentBook(finalBook);

      navigate(ROUTES.BOOK);

    } catch (error) {
      console.error(error);
      alert("حدث خطأ أثناء قراءة ملف PDF");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#070B14] flex items-center justify-center px-6">

      <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">

        <h1 className="text-3xl font-bold text-center text-white">
          رفع كتاب
        </h1>

        <p className="mt-3 text-center text-slate-400">
          ارفع ملف PDF ليبدأ Shaheen بتحليله.
        </p>

        <div className="mt-10">
          <FileDropZone onFileSelect={handleFileSelect} />
        </div>

        {loading && (
          <div className="mt-8 text-center text-cyan-300">
            جارٍ تحليل الكتاب...
          </div>
        )}

      </div>

    </div>
  );
}