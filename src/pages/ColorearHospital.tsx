
import { useEffect, useRef, useState } from "react";
import { Canvas as FabricCanvas, Image as FabricImage } from "fabric";
import { Navigation } from "@/components/Navigation";
import { ColorPicker } from "@/components/ColorPicker";
import { Button } from "@/components/ui/button";
import { Eraser, Paintbrush, RotateCcw } from "lucide-react";
import { toast } from "sonner";
import { filters } from "fabric";

const ColorearHospital = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [fabricCanvas, setFabricCanvas] = useState<FabricCanvas | null>(null);
  const [activeColor, setActiveColor] = useState("#FFE0E0");
  const [isDrawing, setIsDrawing] = useState(true);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = new FabricCanvas(canvasRef.current, {
      width: 800,
      height: 600,
      isDrawingMode: true,
    });

    setFabricCanvas(canvas);

    // Configurar el pincel después de crear el canvas
    if (canvas.freeDrawingBrush) {
      canvas.freeDrawingBrush.width = 5;
      canvas.freeDrawingBrush.color = activeColor;
    }

    // Cargar la imagen del hospital como fondo (en blanco y negro)
    const img = new Image();
    img.src = "/lovable-uploads/74ffee88-0fc1-4243-89cb-a6ea10a4f523.png";
    img.onload = () => {
      const fabricImage = new FabricImage(img, {
        scaleX: canvas.width! / img.width,
        scaleY: canvas.height! / img.height,
        selectable: false,
        filters: [
          new filters.Grayscale(),
          new filters.Brightness({ brightness: 0.1 }) // Ajustar el brillo para que sea más claro
        ]
      });
      fabricImage.applyFilters();
      canvas.backgroundImage = fabricImage;
      canvas.renderAll();
      toast("¡Listo para colorear!");
    };

    return () => {
      canvas.dispose();
    };
  }, []);

  useEffect(() => {
    if (!fabricCanvas?.freeDrawingBrush) return;
    fabricCanvas.freeDrawingBrush.color = activeColor;
    fabricCanvas.freeDrawingBrush.width = isDrawing ? 5 : 20;
  }, [activeColor, isDrawing, fabricCanvas]);

  const handleClear = () => {
    if (!fabricCanvas) return;
    fabricCanvas.clear();
    // Recargar la imagen de fondo
    const img = new Image();
    img.src = "/lovable-uploads/74ffee88-0fc1-4243-89cb-a6ea10a4f523.png";
    img.onload = () => {
      const fabricImage = new FabricImage(img, {
        scaleX: fabricCanvas.width! / img.width,
        scaleY: fabricCanvas.height! / img.height,
        selectable: false,
        filters: [
          new filters.Grayscale(),
          new filters.Brightness({ brightness: 0.1 })
        ]
      });
      fabricImage.applyFilters();
      fabricCanvas.backgroundImage = fabricImage;
      fabricCanvas.renderAll();
    };
    toast("¡Lienzo limpio!");
  };

  const toggleDrawingMode = () => {
    setIsDrawing(!isDrawing);
    if (fabricCanvas?.freeDrawingBrush) {
      fabricCanvas.freeDrawingBrush.color = !isDrawing ? activeColor : "#FFFFFF";
    }
    toast(isDrawing ? "¡Modo borrador activado!" : "¡Modo pincel activado!");
  };

  return (
    <div className="min-h-screen pb-20 bg-gradient-to-b from-primary-soft/10 to-white">
      <div className="max-w-screen-xl mx-auto px-4 pt-16 sm:pt-20 pb-6 sm:px-6">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
            Colorea el Hospital 🎨
          </h1>
          <p className="text-gray-600">
            ¡Dale vida al hospital con tus colores favoritos!
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-center flex-wrap">
            <ColorPicker color={activeColor} onChange={setActiveColor} />
            <div className="flex gap-2">
              <Button
                variant={isDrawing ? "default" : "outline"}
                size="icon"
                onClick={toggleDrawingMode}
              >
                {isDrawing ? <Paintbrush /> : <Eraser />}
              </Button>
              <Button variant="outline" size="icon" onClick={handleClear}>
                <RotateCcw />
              </Button>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg shadow-lg overflow-hidden bg-white">
            <canvas ref={canvasRef} className="max-w-full" />
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default ColorearHospital;
