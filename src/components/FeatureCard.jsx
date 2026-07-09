import Card from "./ui/Card";
import { ChevronLeft } from "lucide-react";

export default function FeatureCard({
  icon,
  title,
  description,
  color = "blue",
  onClick,
}) {

  const colors = {
    blue: "from-cyan-400 to-blue-600",
    purple: "from-violet-500 to-fuchsia-600",
    green: "from-emerald-400 to-green-600",
    orange: "from-orange-400 to-amber-500",
  };

  return (
    <Card
      onClick={onClick}
      className="p-5 cursor-pointer"
    >
      <div className="flex items-center gap-4">

        <div
          className={`
            h-16
            w-16
            rounded-2xl
            bg-gradient-to-br
            ${colors[color]}
            flex
            items-center
            justify-center
            text-white
            shadow-lg
          `}
        >
          {icon}
        </div>

        <div className="flex-1 text-right">

          <h3 className="text-xl font-bold text-white">
            {title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            {description}
          </p>

        </div>

        <ChevronLeft
          className="text-cyan-400"
          size={24}
        />

      </div>
    </Card>
  );
}