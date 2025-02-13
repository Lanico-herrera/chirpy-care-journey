
import { BookOpen, Gamepad2, User, Activity } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { WelcomeCard } from "@/components/WelcomeCard";
import { CategoryCard } from "@/components/CategoryCard";
import { motion } from "framer-motion";

const Index = () => {
  const categories = [
    {
      icon: BookOpen,
      title: "Aprender",
      description: "Descubre todo sobre tu cirugía de una manera divertida",
      to: "/aprender",
      color: "bg-gradient-to-br from-secondary to-secondary-dark",
    },
    {
      icon: Gamepad2,
      title: "Jugar",
      description: "¡Diviértete con juegos especialmente diseñados para ti!",
      to: "/jugar",
      color: "bg-gradient-to-br from-primary to-primary-dark",
    },
    {
      icon: User,
      title: "Mi Avatar",
      description: "Crea tu personaje especial para esta aventura",
      to: "/avatar",
      color: "bg-gradient-to-br from-accent to-accent-dark",
    },
    {
      icon: Activity,
      title: "Mi Cirugía",
      description: "Información actualizada sobre tu proceso",
      to: "/cirugia",
      color: "bg-gradient-to-br from-highlight to-highlight-dark",
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
    <div className="min-h-screen bg-gradient-to-b from-primary via-accent to-highlight pb-20">
      <div className="max-w-screen-xl mx-auto px-4 py-6 sm:px-6">
        <WelcomeCard />
        
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
