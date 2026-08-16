import { Pencil, Eye, Trash } from "lucide-react"; 
import { useNavigate } from "react-router-dom"; // Importamos el hook para navegar

export default function UserRowActions({ user }) {
  const navigate = useNavigate();

  // 1. ESTA ES LA FUNCIÓN DEL LÁPIZ
  const handleEdit = () => {
    // Viaja a la ruta de edición pasando el ID de esta fila
    navigate(`/dashboard/userEdit/${user.id}`);
  };

  // 2. Función del Ojo (Visualizar)
  const handleView = () => {
    navigate(`/dashboard/userView/${user.id}`);
  };

  // 3. Función de Eliminar (Por ahora solo imprime en consola)
  const handleDelete = () => {
    console.log("Eliminar usuario", user.id);
  };

  return (
    <div className="flex gap-2">
      {/* Botón Visualizar (Ojo) */}
      <button onClick={handleView} className="p-1 rounded hover:bg-gray-100 text-blue-600">
        <Eye size={16} /> 
      </button>
      
      {/* Botón Editar (Lápiz) ---> AQUÍ CONECTAMOS LA FUNCIÓN */}
      <button onClick={handleEdit} className="p-1 rounded hover:bg-gray-100 text-orange-500">
        <Pencil size={16} /> 
      </button>

      {/* Botón Eliminar (Cambié el icono a Trash para que tenga sentido) */}
      <button onClick={handleDelete} className="p-1 rounded hover:bg-gray-100 text-red-600">
        <Trash size={16} /> 
      </button>
    </div>
  );
}