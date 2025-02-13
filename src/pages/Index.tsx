
import { Brain, Gamepad2, User, Activity, BookOpen, CalendarCheck } from "lucide-react";
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
      color: "bg-[#9b87f5]", // Solid Purple
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
      color: "bg-[#9b87f5]", // Solid Purple
    },
    {
      icon: Activity,
      title: "Fase de proceso quirúrgico",
      description: "Información actualizada sobre tu proceso",
      to: "/cirugia",
      color: "bg-[#FFDEE2]", // Soft Pink
    },
    {
      icon: CalendarCheck,
      title: "Agenda",
      description: "Revisa tus próximas citas y actividades",
      to: "/agenda",
      color: "bg-[#F2FCE2]", // Soft Green
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
        background: `
          linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%),
          linear-gradient(180deg, rgb(254,100,121) 0%, rgb(251,221,186) 100%),
          linear-gradient(225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%)
        `,
        backgroundBlendMode: 'overlay'
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
              color="bg-[#9b87f5]"
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
