
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import Jugar from "./pages/Jugar";
import Aprender from "./pages/Aprender";
import Cuentos from "./pages/Cuentos";
import ColorearHospital from "./pages/ColorearHospital";
import NotFound from "./pages/NotFound";
import MiAmigoHospital from "./pages/cuentos/MiAmigoHospital";
import SaraPabellon from "./pages/cuentos/SaraPabellon";
import DoctorOso from "./pages/cuentos/DoctorOso";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/jugar" element={<Jugar />} />
            <Route path="/aprender" element={<Aprender />} />
            <Route path="/cuentos" element={<Cuentos />} />
            <Route path="/jugar/colorear" element={<ColorearHospital />} />
            <Route path="/aprender/mi-amigo-hospital" element={<MiAmigoHospital />} />
            <Route path="/aprender/sara-pabellon" element={<SaraPabellon />} />
            <Route path="/aprender/doctor-oso" element={<DoctorOso />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
