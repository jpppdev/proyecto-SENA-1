import { useParams, useNavigate } from "react-router-dom";
import { users } from "../data/users"; // Importamos tu data simulada
import { Button } from "@/shared";

export default function UserViews() {
  // Extraemos el ID de la URL
  const { id } = useParams();
  const navigate = useNavigate();

  // Buscamos el usuario correspondiente en el arreglo
  const user = users.find((u) => u.id === parseInt(id));

  // Si el usuario no existe (ej. escribieron un ID inválido en la URL)
  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Usuario no encontrado</h2>
        <Button variant="primary" onClick={() => navigate("/dashboard/userList")}>
          Volver a la lista
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto bg-white/80 backdrop-blur-md rounded-[28px] shadow-lg p-8 border border-white/40 mt-10">
      <div className="flex items-center gap-4 mb-8 border-b pb-4">
        <div className="w-16 h-16 bg-[var(--color-brand-soft)] rounded-full flex items-center justify-center text-[var(--color-brand)] font-bold text-2xl">
          {user.userName.charAt(0)}
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{user.userName}</h1>
          <p className="text-gray-500">ID de Sistema: {user.id}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-white/50 p-4 rounded-xl border border-gray-100">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Correo Electrónico</p>
          <p className="text-lg text-gray-800">{user.userEmail}</p>
        </div>
        
        <div className="bg-white/50 p-4 rounded-xl border border-gray-100">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Teléfono</p>
          <p className="text-lg text-gray-800">{user.userPhone}</p>
        </div>

        <div className="bg-white/50 p-4 rounded-xl border border-gray-100">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Documento</p>
          <p className="text-lg text-gray-800">{user.userDocumentTypes} - {user.userDocumentNumber}</p>
        </div>

        <div className="bg-white/50 p-4 rounded-xl border border-gray-100">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Estado</p>
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${user.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {user.isActive ? "Activo" : "Inactivo"}
          </span>
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <Button variant="secondary" onClick={() => navigate("/dashboard/userList")}>
          Volver a la tabla
        </Button>
      </div>
    </div>
  );
}