import { Upload } from "lucide-react";
import { useRef } from "react";

export default function FileDropZone({ onFileSelect }) {

  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    onFileSelect(file);
  };

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept=".pdf"
        hidden
        onChange={handleChange}
      />

      <div
        onClick={handleClick}
        className="
          group
          w-full
          rounded-3xl
          border-2
          border-dashed
          border-cyan-400/30

          bg-white/5
          backdrop-blur-xl

          h-80

          flex
          flex-col
          items-center
          justify-center

          cursor-pointer

          transition-all
          duration-300

          hover:border-cyan-300
          hover:bg-cyan-500/10
        "
      >
        <div
          className="
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-full

            bg-cyan-500/10

            text-cyan-300

            transition-all
            duration-300

            group-hover:scale-110
            group-hover:bg-cyan-500/20
          "
        >
          <Upload size={40} />
        </div>

        <h2 className="mt-8 text-2xl font-bold text-white">
          اختر ملف PDF
        </h2>

        <p className="mt-3 text-slate-400">
          أو اضغط هنا لاختيار الملف
        </p>

        <p className="mt-2 text-sm text-slate-500">
          PDF فقط — حتى 100MB
        </p>
      </div>
    </>
  );
}