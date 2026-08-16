import { useNavigate } from "react-router-dom";
import { DataTable, Button } from "@/shared";
import { MenuColumns } from "../table/MenuColumns";


const mockMenus = [
  { id: "MN-001", nombre: "Hamburguesa Clásica", categoria: "Principal", precio: 15000, estado: "disponible" },
  { id: "MN-002", nombre: "Jugo Natural de Mango", categoria: "Bebida", precio: 5000, estado: "disponible" },
  { id: "MN-003", nombre: "Cheesecake de Fresa", categoria: "Postre", precio: 8000, estado: "agotado" },
];

export default function MenuList() {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-[1200px] mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Gestión de Menú</h1>
          <p className="text-gray-500">Administra los platos y productos de la cafetería</p>
        </div>
        <Button 
          variant="primary" 
          onClick={() => navigate("/agregar-menu")}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 shadow-md"
        >
          + Agregar Plato
        </Button>
      </div>

      {/* Reutilizamos el DataTable que arreglamos anteriormente */}
      <div className="bg-white/80 backdrop-blur-md rounded-[28px] shadow-lg p-6 border border-white/40">
        <DataTable columns={MenuColumns} data={mockMenus} />
      </div>
    </div>
  );
}