
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import { Palette, Puzzle, Search } from "lucide-react";
import { GameCard } from "@/components/GameCard";

const Jugar = () => {
  const games = [
    {
      title: "Colorea el Hospital",
      description: "¡Dibuja y colorea diferentes elementos del hospital!",
      icon: Palette,
      to: "/jugar/colorear",
      color: "bg-[#FEF7CD]", // Soft Yellow
      age: "0-6 años",
    },
    {
      title: "Rompecabezas del Quirófano",
      description: "Arma rompecabezas divertidos del hospital",
      icon: Puzzle,
      to: "/jugar/rompecabezas",
      color: "bg-[#E5DEFF]", // Soft Purple
      age: "0-6 años",
    },
    {
      title: "Encuentra el Equipamiento",
      description: "¡Busca los objetos escondidos en el quirófano!",
      icon: Search,
      to: "/jugar/buscar",
      color: "bg-[#F2FCE2]", // Soft Green
      age: "0-6 años",
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
    <div className="min-h-screen pb-20 bg-gradient-to-b from-primary-soft/10 to-white">
      <div className="max-w-screen-xl mx-auto px-4 pt-16 sm:pt-20 pb-6 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
            ¡Hora de Jugar! 🎮
          </h1>
          <p className="text-gray-600">
            Explora estos divertidos juegos especialmente diseñados para ti
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-4"
        >
          {games.map((game) => (
            <motion.div key={game.title} variants={itemVariants}>
              <GameCard {...game} />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <Navigation />
    </div>
  );
};

export default Jugar;
