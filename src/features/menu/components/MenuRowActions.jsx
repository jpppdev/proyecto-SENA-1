import { Eye, Pencil, Trash } from "lucide-react"; 
import { useNavigate } from "react-router-dom";

export default function MenuRowActions({ menu }) {
  const navigate = useNavigate();

  return (
    <div className="flex gap-2">
      <button 
        onClick={() => navigate(`/dashboard/menuView/${menu.id}`)} 
        className="p-1 rounded hover:bg-gray-100 text-blue-600"
        title="Visualizar"
      >
        <Eye size={16} /> 
      </button>
      
      <button 
        onClick={() => navigate(`/dashboard/menuEdit/${menu.id}`)} 
        className="p-1 rounded hover:bg-gray-100 text-orange-500"
        title="Editar"
      >
        <Pencil size={16} /> 
      </button>

      <button 
        onClick={() => console.log("Eliminar menú", menu.id)} 
        className="p-1 rounded hover:bg-gray-100 text-red-600"
        title="Eliminar"
      >
        <Trash size={16} /> 
      </button>
    </div>
  );
}