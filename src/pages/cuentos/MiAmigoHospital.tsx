
import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const MiAmigoHospital = () => {
  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="max-w-screen-xl mx-auto px-4 pt-8 sm:px-6">
        <Link 
          to="/cuentos"
          className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver a Cuentos
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose max-w-none"
        >
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Mi Amigo el Hospital</h1>
          
          <div className="bg-purple-50 rounded-xl p-6 mb-8">
            <p className="text-lg mb-4">
              Había una vez un niño llamado Lucas que tenía que visitar el hospital. Al principio,
              estaba un poco nervioso porque no sabía qué esperar. Pero pronto descubrió que el
              hospital era un lugar mágico, lleno de personas amables que querían ayudarlo a sentirse mejor.
            </p>

            <p className="text-lg mb-4">
              En su primer día, conoció a la Doctora María, quien tenía una sonrisa brillante y una
              bata blanca decorada con estrellas de colores. Ella le explicó que el hospital era como
              un gran equipo de superhéroes, donde cada persona tenía un poder especial para ayudar
              a los niños a recuperarse.
            </p>

            <p className="text-lg mb-4">
              También conoció a Pedro, el enfermero que podía hacer aparecer curitas de colores
              y siempre tenía historias divertidas para contar. Y a Laura, la especialista en juegos,
              que traía juguetes y actividades para que los días en el hospital fueran más entretenidos.
            </p>

            <p className="text-lg mb-4">
              Cada día, Lucas descubría algo nuevo y emocionante. Las máquinas del hospital no eran
              tan intimidantes como parecían; de hecho, eran como robots amigables que ayudaban a
              los doctores a cuidar mejor de los niños. Y las medicinas eran como pequeños ayudantes
              que trabajaban dentro de su cuerpo para hacerlo más fuerte.
            </p>

            <p className="text-lg">
              Al final de su estancia, Lucas se dio cuenta de que el hospital no era un lugar que
              daba miedo, sino un amigo que lo había ayudado a sentirse mejor. Ahora sabía que
              siempre que necesitara ayuda, tendría un equipo completo de superhéroes listos
              para cuidar de él.
            </p>
          </div>
        </motion.div>
      </div>
      <Navigation />
    </div>
  );
};

export default MiAmigoHospital;
