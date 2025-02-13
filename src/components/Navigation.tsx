
import { Home, BookOpen, Gamepad2, User, Activity, FileText } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { icon: Home, label: "Inicio", path: "/" },
    { icon: BookOpen, label: "Cuentos", path: "/cuentos" },
    { icon: Gamepad2, label: "Jugar", path: "/jugar" },
    { icon: User, label: "Mi Avatar", path: "/avatar" },
    { icon: Activity, label: "Mi Cirugía", path: "/cirugia" },
    { icon: FileText, label: "Info", path: "/informacion" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#8B5CF6] shadow-lg px-4 py-2 sm:px-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-around items-center">
          {navItems.map(({ icon: Icon, label, path }) => (
            <Link
              key={path}
              to={path}
              className={`flex flex-col items-center p-2 rounded-lg transition-all duration-200 ${
                isActive(path)
                  ? "text-white scale-110 font-medium"
                  : "text-white hover:text-white hover:scale-105"
              }`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-xs mt-1">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
