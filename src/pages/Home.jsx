import AppHeader from "../components/AppHeader";
import Button from "../components/ui/Button";
import FeatureCard from "../components/FeatureCard";
import ShaheenLogo from "../components/ShaheenLogo";

import {
  BookOpen,
  Brain,
  ClipboardCheck,
  FileText,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate();

  return (
    <>
      <AppHeader />

      <div className="relative min-h-screen overflow-hidden bg-[#070B14]">

        {/* Background Glow */}
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-700/20 blur-3xl" />

        <div className="relative z-10 flex min-h-screen flex-col items-center px-8 pt-28 pb-16">

          {/* Logo */}
          <ShaheenLogo />

          {/* Title */}
          <h1 className="mt-4 text-center text-5xl md:text-6xl font-black tracking-[0.25em] text-white">
            SHAHEEN
          </h1>

          {/* Slogan */}
          <p className="mt-5 text-center text-xl font-semibold text-cyan-300">
            افهم... ثم انطلق
          </p>

          {/* Description */}
          <p className="mt-7 max-w-lg text-center text-[17px] leading-8 text-slate-400">
            مساعدك الدراسي الذكي لفهم الكتب الجامعية،
            وإنشاء الاختبارات،
            والتلخيص،
            والشرح بالذكاء الاصطناعي.
          </p>

          {/* Features */}
          <div className="mt-16 w-full max-w-md space-y-5">

            <FeatureCard
              color="blue"
              icon={<BookOpen size={30} />}
              title="رفع كتاب"
              description="ابدأ برفع ملف PDF وتحويله إلى تجربة تعليمية ذكية."
            />

            <FeatureCard
              color="purple"
              icon={<Brain size={30} />}
              title="اسأل الذكاء الاصطناعي"
              description="اطرح أي سؤال وسيجيب اعتمادًا على محتوى الكتاب."
            />

            <FeatureCard
              color="green"
              icon={<ClipboardCheck size={30} />}
              title="إنشاء اختبار"
              description="أنشئ اختبارات تلقائية مع تصحيح فوري."
            />

            <FeatureCard
              color="orange"
              icon={<FileText size={30} />}
              title="تلخيص الكتاب"
              description="تلخيص ذكي ومنظم لكل فصل من الكتاب."
            />

          </div>

          {/* Button */}
          <div className="mt-10 w-full max-w-md">
            <Button onClick={() => navigate("/upload")}>
              ابدأ الآن
            </Button>
          </div>

        </div>

      </div>
    </>
  );
}