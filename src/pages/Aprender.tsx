
import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";

const Aprender = () => {
  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="max-w-screen-xl mx-auto px-4 pt-16 sm:pt-20 pb-6 sm:px-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Aprender</h1>
          <p className="text-gray-600">Descubre todo sobre tu cirugía de una manera divertida</p>
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default Aprender;
