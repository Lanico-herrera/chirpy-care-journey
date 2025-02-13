
import { Brain, Gamepad2, User, Activity, BookOpen, FileText } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { WelcomeCard } from "@/components/WelcomeCard";
import { CategoryCard } from "@/components/CategoryCard";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Index = () => {
  const categories = [
    {
      icon: BookOpen,
      title: "Cuentos",
      description: "Descubre historias que te ayudarán a sentirte más tranquilo/a",
      to: "/cuentos",
      color: "bg-[#FFE29F]", // Soft Yellow
    },
    {
      icon: Brain,
      title: "Aprender",
      description: "Descubre todo sobre tu cirugía de una manera divertida",
      to: "/aprender",
      color: "bg-[#FFA99F]", // Soft Orange
    },
    {
      icon: Gamepad2,
      title: "Jugar",
      description: "¡Diviértete con juegos especialmente diseñados para ti!",
      to: "/jugar",
      color: "bg-[#FF719A]", // Soft Pink
    },
    {
      icon: User,
      title: "Mi Avatar",
      description: "Crea tu personaje especial para esta aventura",
      to: "/avatar",
      color: "bg-[#9b87f5]", // Solid Purple
    },
    {
      icon: Activity,
      title: "Fase del proceso perioperatorio",
      description: "Información actualizada sobre fase del proceso quirúrgico en el que se encuentra",
      to: "/cirugia",
      color: "bg-[#9b87f5]", // Solid Purple
    },
    {
      icon: FileText,
      title: "Información relevante",
      description: "Documentos y datos importantes sobre tu proceso",
      to: "/informacion",
      color: "bg-[#9b87f5]", // Solid Purple
    },
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
        background: "linear-gradient(225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%)",
      }}
    >
      <div className="max-w-screen-xl mx-auto px-4 pt-16 sm:pt-20 pb-6 sm:px-6 relative">
        <img 
          src="/lovable-uploads/f634e0d9-b343-4d93-87bd-d00af0370c81.png"
          alt="Hospital de Niños Dr. Luis Calvo Mackenna"
          className="absolute top-2 right-4 h-12 sm:h-16 z-50"
        />
        <WelcomeCard />
        
        {/* Categorías en grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
        >
          {categories.map((category, index) => (
            <motion.div 
              key={category.title} 
              variants={itemVariants}
              className="transform hover:scale-105 transition-transform duration-300"
            >
              <Link to={category.to} className="block h-full">
                <CategoryCard {...category} />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <Navigation />
    </div>
  );
};

export default Index;
