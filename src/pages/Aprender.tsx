
import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const stories = [
  {
    id: 1,
    title: "Mi Amigo el Hospital",
    description: "Descubre el hospital de una manera divertida y amigable",
    image: "/lovable-uploads/f634e0d9-b343-4d93-87bd-d00af0370c81.png",
    to: "/aprender/mi-amigo-hospital"
  },
  {
    id: 2,
    title: "La Aventura de Sara en Pabellón",
    description: "Acompaña a Sara en su visita al pabellón quirúrgico",
    image: "/lovable-uploads/f634e0d9-b343-4d93-87bd-d00af0370c81.png",
    to: "/aprender/sara-pabellon"
  },
  {
    id: 3,
    title: "El Doctor Oso y sus Amigos",
    description: "Una historia sobre la amistad y el cuidado en el hospital",
    image: "/lovable-uploads/f634e0d9-b343-4d93-87bd-d00af0370c81.png",
    to: "/aprender/doctor-oso"
  }
];

const Aprender = () => {
  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="max-w-screen-xl mx-auto px-4 pt-16 sm:pt-20 pb-6 sm:px-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Cuentos Infantiles</h1>
          <p className="text-gray-600">Descubre historias que te ayudarán a sentirte más tranquilo</p>
        </div>

        <div className="grid gap-6">
          {stories.map((story) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to={story.to}
                className="block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#F2FCE2] p-3 rounded-xl">
                      <BookOpen className="w-6 h-6 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">{story.title}</h3>
                      <p className="text-sm text-gray-600">{story.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default Aprender;
