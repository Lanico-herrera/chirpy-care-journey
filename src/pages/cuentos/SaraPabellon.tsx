
import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const SaraPabellon = () => {
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
          <h1 className="text-2xl font-bold text-gray-800 mb-4">La Aventura de Sara en Pabellón</h1>
          
          <div className="bg-purple-50 rounded-xl p-6 mb-8">
            <p className="text-lg mb-4">
              Sara tenía una misión especial: iba a visitar un lugar llamado pabellón quirúrgico.
              Su osito de peluche favorito, Pompón, la acompañaba en esta nueva aventura. La
              noche anterior, sus padres le habían explicado que los doctores la ayudarían a
              sentirse mejor.
            </p>

            <p className="text-lg mb-4">
              Al llegar al hospital, conoció al Doctor Juan, quien llevaba un gorro azul con
              dibujos de arcoíris. Le mostró a Sara que él también tenía un osito de peluche
              en su oficina, y le explicó que juntos formarían un equipo especial para su
              operación.
            </p>

            <p className="text-lg mb-4">
              La enfermera Ana le dio un gorro igual al del doctor, pero más pequeño, y le
              explicó que era su "gorro mágico de valentía". Sara se sintió como una verdadera
              heroína. Incluso Pompón recibió un pequeño gorro para acompañarla.
            </p>

            <p className="text-lg mb-4">
              En el pabellón, Sara descubrió que había luces de colores y el Doctor Juan le
              contó que cada una tenía un poder especial. La luz verde era para dar energía,
              la azul para la calma, y la amarilla para los buenos sueños. También había una
              máquina que hacía sonidos suaves, como una canción de cuna.
            </p>

            <p className="text-lg">
              Cuando despertó, Sara se sentía como una campeona. Había completado su misión
              con éxito, y todo el equipo del hospital la felicitó por su valentía. Ahora
              sabía que el pabellón no era un lugar que daba miedo, sino un sitio mágico
              donde las personas trabajaban juntas para ayudar a los niños a sanar.
            </p>
          </div>
        </motion.div>
      </div>
      <Navigation />
    </div>
  );
};

export default SaraPabellon;
