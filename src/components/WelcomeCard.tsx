
import { motion } from "framer-motion";

interface WelcomeCardProps {
  name?: string;
}

export const WelcomeCard = ({ name = "amiguito" }: WelcomeCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-primary-soft to-primary rounded-3xl p-6 shadow-lg mb-6 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 opacity-10 transform rotate-45">
        <img
          src="/placeholder.svg"
          alt="Decorative"
          className="w-full h-full object-cover"
        />
      </div>
      <h2 className="text-2xl font-bold text-white mb-2 relative z-10">
        ¡Hola {name}! 👋
      </h2>
      <p className="text-white/90 relative z-10">
        Estamos aquí para acompañarte en tu aventura en el hospital. ¡Juntos haremos que sea una experiencia increíble!
      </p>
    </motion.div>
  );
};
