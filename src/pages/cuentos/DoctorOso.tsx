
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
          <h1 className="text-2xl font-bold text-gray-800 mb-4">El Doctor Oso y sus Amigos</h1>
          
          <div className="bg-purple-50 rounded-xl p-6 mb-8">
            <p className="text-lg mb-4">
              En el Bosque Sanador vivía el Doctor Oso, un médico muy especial que siempre
              llevaba un estetoscopio brillante y una sonrisa aún más brillante. Junto a él
              trabajaban sus amigos: la Enfermera Coneja, que saltaba ágilmente de cama en
              cama llevando medicinas, y el Técnico Búho, que sabía todo sobre las máquinas
              del hospital.
            </p>

            <p className="text-lg mb-4">
              Un día, llegó al hospital del bosque un pequeño zorro llamado Timo, que tenía
              miedo porque necesitaba una operación. El Doctor Oso reunió a todos sus amigos
              para ayudar a Timo a sentirse mejor. La Enfermera Coneja le trajo su jugo
              favorito de zanahorias, mientras el Técnico Búho le mostraba cómo funcionaban
              las máquinas haciendo sonidos divertidos.
            </p>

            <p className="text-lg mb-4">
              El Doctor Oso le explicó a Timo que en el hospital todos trabajaban en equipo,
              como una gran familia. Cada animal tenía una tarea especial: las ardillas
              mantenían todo limpio y ordenado, los mapaches preparaban comidas deliciosas,
              y las luciérnagas iluminaban suavemente las habitaciones por la noche.
            </p>

            <p className="text-lg mb-4">
              Durante su estancia, Timo aprendió que estar en el hospital podía ser una
              aventura emocionante. Hizo nuevos amigos entre los otros pacientes y descubrió
              que ser valiente no significa no tener miedo, sino enfrentar las cosas aunque
              tengamos miedo.
            </p>

            <p className="text-lg">
              Cuando llegó el momento de irse a casa, Timo se dio cuenta de que el hospital
              del bosque era un lugar especial, lleno de amigos que se preocupaban por él.
              El Doctor Oso y su equipo le habían enseñado que con amor, trabajo en equipo
              y una sonrisa, cualquier desafío se puede superar.
            </p>
          </div>
        </motion.div>
      </div>
      <Navigation />
    </div>
  );
};

export default DoctorOso;
