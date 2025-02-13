
import { motion } from "framer-motion";

interface WelcomeCardProps {
  name?: string;
}

export const WelcomeCard = ({ name = "amiguito" }: WelcomeCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-primary-soft rounded-3xl p-6 shadow-lg mb-6"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        ¡Hola {name}! 👋
      </h2>
      <p className="text-gray-600">
        Estamos aquí para acompañarte en tu aventura en el hospital. ¡Juntos haremos que sea una experiencia increíble!
      </p>
    </motion.div>
  );
};
