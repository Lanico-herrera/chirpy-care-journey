
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
          <h1 className="text-3xl font-bold text-purple-600 mb-6 text-center tracking-wide">
            Mi Amigo el Hospital
          </h1>
          
          <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-8 shadow-lg mb-8">
            <p className="text-xl mb-8 leading-relaxed text-gray-800 font-medium">
              Había una vez un niño llamado <span className="text-purple-600 font-semibold">Lucas</span> que 
              tenía que visitar el hospital. Al principio, estaba un poco nervioso porque no sabía 
              qué esperar. Pero pronto descubrió que el hospital era un lugar mágico, lleno de 
              personas amables que querían ayudarlo a sentirse mejor.
            </p>

            <p className="text-xl mb-8 leading-relaxed text-gray-800 font-medium">
              En su primer día, conoció a la <span className="text-blue-600 font-semibold">Doctora María</span>, 
              quien tenía una sonrisa brillante y una bata blanca decorada con estrellas de colores. 
              Ella le explicó que el hospital era como un gran equipo de superhéroes, donde cada 
              persona tenía un poder especial para ayudar a los niños a recuperarse.
            </p>

            <p className="text-xl mb-8 leading-relaxed text-gray-800 font-medium">
              También conoció a <span className="text-green-600 font-semibold">Pedro</span>, el enfermero 
              que podía hacer aparecer curitas de colores y siempre tenía historias divertidas para 
              contar. Y a <span className="text-pink-600 font-semibold">Laura</span>, la especialista 
              en juegos, que traía juguetes y actividades para que los días en el hospital fueran 
              más entretenidos.
            </p>

            <p className="text-xl mb-8 leading-relaxed text-gray-800 font-medium">
              Cada día, Lucas descubría algo nuevo y emocionante. Las máquinas del hospital no eran
              tan intimidantes como parecían; de hecho, eran como <span className="text-indigo-600 font-semibold">robots amigables</span> que 
              ayudaban a los doctores a cuidar mejor de los niños. Y las medicinas eran como 
              pequeños ayudantes que trabajaban dentro de su cuerpo para hacerlo más fuerte.
            </p>

            <p className="text-xl leading-relaxed text-gray-800 font-medium">
              Al final de su estancia, Lucas se dio cuenta de que el hospital no era un lugar que
              daba miedo, sino un <span className="text-purple-600 font-semibold">amigo especial</span> que 
              lo había ayudado a sentirse mejor. Ahora sabía que siempre que necesitara ayuda, 
              tendría un equipo completo de superhéroes listos para cuidar de él.
            </p>
          </div>
        </motion.div>
      </div>
      <Navigation />
    </div>
  );
};

export default MiAmigoHospital;
