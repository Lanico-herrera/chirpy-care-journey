
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
          <h1 className="text-3xl font-bold text-purple-600 mb-6 text-center tracking-wide">
            La Aventura de Sara en Pabellón
          </h1>
          
          <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-8 shadow-lg mb-8">
            <p className="text-xl mb-8 leading-relaxed text-gray-800 font-medium">
              <span className="text-purple-600 font-semibold">Sara</span> tenía una misión especial: 
              iba a visitar un lugar llamado pabellón quirúrgico. Su osito de peluche favorito, 
              <span className="text-pink-600 font-semibold"> Pompón</span>, la acompañaba en esta nueva 
              aventura. La noche anterior, sus padres le habían explicado que los doctores la ayudarían 
              a sentirse mejor.
            </p>

            <p className="text-xl mb-8 leading-relaxed text-gray-800 font-medium">
              Al llegar al hospital, conoció al <span className="text-blue-600 font-semibold">Doctor Juan</span>, 
              quien llevaba un gorro azul con dibujos de arcoíris. Le mostró a Sara que él también tenía 
              un osito de peluche en su oficina, y le explicó que juntos formarían un equipo especial 
              para su operación.
            </p>

            <p className="text-xl mb-8 leading-relaxed text-gray-800 font-medium">
              La <span className="text-green-600 font-semibold">Enfermera Ana</span> le dio un gorro igual 
              al del doctor, pero más pequeño, y le explicó que era su 
              <span className="text-indigo-600 font-semibold"> "gorro mágico de valentía"</span>. Sara se 
              sintió como una verdadera heroína. Incluso Pompón recibió un pequeño gorro para acompañarla.
            </p>

            <p className="text-xl mb-8 leading-relaxed text-gray-800 font-medium">
              En el pabellón, Sara descubrió que había <span className="text-purple-600 font-semibold">luces mágicas</span> 
              y el Doctor Juan le contó que cada una tenía un poder especial. La luz verde era para dar energía, 
              la azul para la calma, y la amarilla para los buenos sueños. También había una máquina que 
              hacía sonidos suaves, como una canción de cuna.
            </p>

            <p className="text-xl leading-relaxed text-gray-800 font-medium">
              Cuando despertó, Sara se sentía como una <span className="text-pink-600 font-semibold">campeona</span>. 
              Había completado su misión con éxito, y todo el equipo del hospital la felicitó por su valentía. 
              Ahora sabía que el pabellón no era un lugar que daba miedo, sino un sitio mágico donde las 
              personas trabajaban juntas para ayudar a los niños a sanar.
            </p>
          </div>
        </motion.div>
      </div>
      <Navigation />
    </div>
  );
};

export default SaraPabellon;
