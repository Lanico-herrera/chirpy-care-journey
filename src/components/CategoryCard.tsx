
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  to: string;
  color: string;
}

export const CategoryCard = ({
  title,
  description,
  icon: Icon,
  to,
  color,
}: CategoryCardProps) => {
  return (
    <Link
      to={to}
      className={`block p-4 rounded-2xl ${color} transition-all duration-300 hover:scale-105 animate-bounce-slight`}
    >
      <div className="flex items-start space-x-4">
        <div className="bg-white p-3 rounded-xl shadow-sm">
          <Icon className="w-6 h-6 text-gray-700" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        </div>
      </div>
    </Link>
  );
};
