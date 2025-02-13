
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const predefinedColors = [
  "#FFE0E0", // Rosa muy suave
  "#E0FFE0", // Verde muy suave
  "#E0E0FF", // Azul muy suave
  "#FFFFE0", // Amarillo muy suave
  "#FFE0FF", // Morado muy suave
  "#E0FFFF", // Cyan muy suave
  "#FFE5CC", // Naranja muy suave
  "#F5F5F5", // Gris muy suave
];

interface ColorPickerProps {
  color: string;
  onChange: (color: string) => void;
}

export const ColorPicker = ({ color, onChange }: ColorPickerProps) => {
  return (
    <div className="flex items-center gap-2 p-2 bg-white rounded-lg shadow-sm">
      <Input
        type="color"
        value={color}
        onChange={(e) => onChange(e.target.value)}
        className="w-10 h-10 p-1 rounded cursor-pointer"
      />
      <div className="flex gap-1">
        {predefinedColors.map((predefinedColor) => (
          <TooltipProvider key={predefinedColor}>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  className="w-8 h-8 rounded-full border-2 border-white shadow-sm transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary"
                  style={{ backgroundColor: predefinedColor }}
                  onClick={() => onChange(predefinedColor)}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Usar este color</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
};
