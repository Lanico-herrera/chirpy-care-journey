
import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const DoctorOso = () => {
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
            El Doctor Oso y sus Amigos
          </h1>
          
          <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-8 shadow-lg mb-8">
            <p className="text-xl mb-8 leading-relaxed text-gray-800 font-medium">
              En el <span className="text-green-600 font-semibold">Bosque Sanador</span> vivía el 
              <span className="text-blue-600 font-semibold"> Doctor Oso</span>, un médico muy especial 
              que siempre llevaba un estetoscopio brillante y una sonrisa aún más brillante. Junto a 
              él trabajaban sus amigos: la <span className="text-pink-600 font-semibold">Enfermera Coneja</span>, 
              que saltaba ágilmente de cama en cama llevando medicinas, y el 
              <span className="text-indigo-600 font-semibold"> Técnico Búho</span>, que sabía todo sobre 
              las máquinas del hospital.
            </p>

            <p className="text-xl mb-8 leading-relaxed text-gray-800 font-medium">
              Un día, llegó al hospital del bosque un pequeño zorro llamado 
              <span className="text-purple-600 font-semibold"> Timo</span>, que tenía miedo porque 
              necesitaba una operación. El Doctor Oso reunió a todos sus amigos para ayudar a Timo 
              a sentirse mejor. La Enfermera Coneja le trajo su jugo favorito de zanahorias, mientras 
              el Técnico Búho le mostraba cómo funcionaban las máquinas haciendo sonidos divertidos.
            </p>

            <p className="text-xl mb-8 leading-relaxed text-gray-800 font-medium">
              El Doctor Oso le explicó a Timo que en el hospital todos trabajaban en equipo, como una 
              <span className="text-green-600 font-semibold"> gran familia</span>. Cada animal tenía una 
              tarea especial: las ardillas mantenían todo limpio y ordenado, los mapaches preparaban 
              comidas deliciosas, y las luciérnagas iluminaban suavemente las habitaciones por la noche.
            </p>

            <p className="text-xl mb-8 leading-relaxed text-gray-800 font-medium">
              Durante su estancia, Timo aprendió que estar en el hospital podía ser una 
              <span className="text-pink-600 font-semibold"> aventura emocionante</span>. Hizo nuevos 
              amigos entre los otros pacientes y descubrió que ser valiente no significa no tener miedo, 
              sino enfrentar las cosas aunque tengamos miedo.
            </p>

            <p className="text-xl leading-relaxed text-gray-800 font-medium">
              Cuando llegó el momento de irse a casa, Timo se dio cuenta de que el hospital del bosque 
              era un <span className="text-purple-600 font-semibold">lugar especial</span>, lleno de amigos 
              que se preocupaban por él. El Doctor Oso y su equipo le habían enseñado que con amor, 
              trabajo en equipo y una sonrisa, cualquier desafío se puede superar.
            </p>
          </div>
        </motion.div>
      </div>
      <Navigation />
    </div>
  );
};

export default DoctorOso;
