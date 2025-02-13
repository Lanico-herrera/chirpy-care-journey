
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface GameCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  to: string;
  color: string;
  age: string;
}

export const GameCard = ({
  title,
  description,
  icon: Icon,
  to,
  color,
  age,
}: GameCardProps) => {
  return (
    <Link
      to={to}
      className={`block p-4 rounded-2xl ${color} transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden`}
    >
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
      <div className="flex items-start space-x-4 relative z-10">
        <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-sm">
          <Icon className="w-6 h-6 text-gray-700" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-700 mt-1">{description}</p>
          <span className="inline-block mt-2 text-xs font-medium text-gray-500 bg-white/50 px-2 py-1 rounded-full">
            {age}
          </span>
        </div>
      </div>
    </Link>
  );
};
