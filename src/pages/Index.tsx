
import { BookOpen, Gamepad2, User, Activity } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { WelcomeCard } from "@/components/WelcomeCard";
import { CategoryCard } from "@/components/CategoryCard";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Index = () => {
  const categories = [
    {
      icon: BookOpen,
      title: "Aprender",
      description: "Descubre todo sobre tu cirugía de una manera divertida",
      to: "/aprender",
      color: "bg-[#F2FCE2]", // Soft Green
    },
    {
      icon: Gamepad2,
      title: "Jugar",
      description: "¡Diviértete con juegos especialmente diseñados para ti!",
      to: "/jugar",
      color: "bg-[#FEF7CD]", // Soft Yellow
    },
    {
      icon: User,
      title: "Mi Avatar",
      description: "Crea tu personaje especial para esta aventura",
      to: "/avatar",
      color: "bg-[#E5DEFF]", // Soft Purple
    },
    {
      icon: Activity,
      title: "Mi Cirugía",
      description: "Información actualizada sobre tu proceso",
      to: "/cirugia",
      color: "bg-[#FFDEE2]", // Soft Pink
    },
  ];

  const stories = [
    {
      id: 1,
      title: "Mi Amigo el Hospital",
      description: "Descubre el hospital de una manera divertida y amigable",
      to: "/aprender/mi-amigo-hospital"
    },
    {
      id: 2,
      title: "La Aventura de Sara en Pabellón",
      description: "Acompaña a Sara en su visita al pabellón quirúrgico",
      to: "/aprender/sara-pabellon"
    },
    {
      id: 3,
      title: "El Doctor Oso y sus Amigos",
      description: "Una historia sobre la amistad y el cuidado en el hospital",
      to: "/aprender/doctor-oso"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div 
      className="min-h-screen pb-20"
      style={{
        backgroundImage: "url('/lovable-uploads/3f14952a-dd74-4956-b0d0-1c599c0459fd.png')",
        backgroundSize: "contain",
        backgroundPosition: "bottom",
        backgroundRepeat: "repeat-x",
        backgroundColor: "white"
      }}
    >
      <div className="max-w-screen-xl mx-auto px-4 pt-16 sm:pt-20 pb-6 sm:px-6 relative">
        <img 
          src="/lovable-uploads/f634e0d9-b343-4d93-87bd-d00af0370c81.png"
          alt="Hospital de Niños Dr. Luis Calvo Mackenna"
          className="absolute top-2 right-4 h-12 sm:h-16 z-50"
        />
        <WelcomeCard />

        {/* Módulo de Cuentos */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <div className="bg-[#E5DEFF] rounded-2xl p-6 mb-4">
            <h2 className="text-xl font-bold text-gray-800 mb-3">Cuentos</h2>
            <p className="text-gray-700 mb-4">Descubre historias que te ayudarán a sentirte más tranquilo/a</p>
            <div className="grid gap-3">
              {stories.map((story) => (
                <motion.div key={story.id} variants={itemVariants}>
                  <Link
                    to={story.to}
                    className="block bg-white/80 backdrop-blur-sm rounded-xl p-4 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <div className="bg-white p-2 rounded-lg">
                        <BookOpen className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{story.title}</h3>
                        <p className="text-sm text-gray-600">{story.description}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Categorías */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-4"
        >
          {categories.map((category, index) => (
            <motion.div key={category.title} variants={itemVariants}>
              <CategoryCard {...category} />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <Navigation />
    </div>
  );
};

export default Index;
