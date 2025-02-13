
import { Brain, Gamepad2, User, Activity, BookOpen } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { WelcomeCard } from "@/components/WelcomeCard";
import { CategoryCard } from "@/components/CategoryCard";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Index = () => {
  const categories = [
    {
      icon: Brain,
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
      title: "Fase de proceso quirúrgico",
      description: "Información actualizada sobre tu proceso",
      to: "/cirugia",
      color: "bg-[#FFDEE2]", // Soft Pink
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
        backgroundImage: "url('/lovable-uploads/1229d2da-daa9-4ffc-ab3d-5a39f6d5a7dc.png')",
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
          <Link to="/cuentos" className="block">
            <CategoryCard
              icon={BookOpen}
              title="Cuentos"
              description="Descubre historias que te ayudarán a sentirte más tranquilo/a"
              to="/cuentos"
              color="bg-[#E5DEFF]"
            />
          </Link>
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
