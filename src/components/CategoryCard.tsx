
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
    <div
      className={`${color} rounded-2xl p-6 h-full shadow-lg hover:shadow-xl transition-shadow duration-300`}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="bg-white/90 p-4 rounded-full shadow-md">
          <Icon className="w-8 h-8 text-gray-700" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
};
