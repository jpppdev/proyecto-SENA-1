import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/shared";
import { Clock, Flame, Info, Utensils, AlertTriangle, Box } from "lucide-react";


const mockMenus = [
  {
    id: "MN-001",
    nombre: "Hamburguesa Clásica",
    categoria: "Principal",
    precio: 15000,
    ingredientes: "Carne de res, pan brioche, lechuga, tomate, queso",
    tiempoPrep: "15 min",
    calorias: "450 kcal",
    descuento: 0,
    estado: "disponible",
    proveedor: "Carnes San Juan",
    stock: 20,
    alergenos: "Gluten, Lácteos",
    turno: "Almuerzo",
    notas: "Sin cebolla por defecto",
  }
];

export default function MenuView() {
  const { id } = useParams();
  const navigate = useNavigate();

 
  const menu = mockMenus.find((m) => m.id === id) || mockMenus[0];

  return (
    <div className="flex items-center justify-center w-full min-h-[85vh] p-4">
      <div className="w-full max-w-4xl p-10 bg-white/30 backdrop-blur-xl border border-white/40 rounded-[32px] shadow-2xl">
        
        {/* ENCABEZADO */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10 border-b border-gray-400/30 pb-8">
          {/* Espacio reservado para la imagen del plato */}
          <div className="w-40 h-40 bg-white/40 rounded-3xl border-2 border-white/50 flex items-center justify-center shadow-inner">
            <Utensils size={64} className="text-gray-500/70" />
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <h1 className="text-4xl font-bold text-gray-800">{menu.nombre}</h1>
              <span className={`px-4 py-1 text-sm font-bold rounded-full shadow-sm ${menu.estado === 'disponible' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {menu.estado.toUpperCase()}
              </span>
            </div>
            <p className="text-xl text-gray-600 font-medium mb-1">{menu.categoria} • ID: {menu.id}</p>
            <p className="text-3xl font-black text-blue-600 mt-3">${menu.precio.toLocaleString()}</p>
          </div>
        </div>

        {/* GRID DE DETALLES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          
          <div className="bg-white/40 p-5 rounded-2xl flex items-start gap-4 shadow-sm border border-white/50">
            <div className="p-3 bg-orange-100 rounded-xl text-orange-600">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-bold uppercase">Tiempo de Prep.</p>
              <p className="text-lg font-semibold text-gray-800">{menu.tiempoPrep}</p>
            </div>
          </div>

          <div className="bg-white/40 p-5 rounded-2xl flex items-start gap-4 shadow-sm border border-white/50">
            <div className="p-3 bg-red-100 rounded-xl text-red-600">
              <Flame size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-bold uppercase">Calorías</p>
              <p className="text-lg font-semibold text-gray-800">{menu.calorias}</p>
            </div>
          </div>

          <div className="bg-white/40 p-5 rounded-2xl flex items-start gap-4 shadow-sm border border-white/50">
            <div className="p-3 bg-yellow-100 rounded-xl text-yellow-600">
              <AlertTriangle size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-bold uppercase">Alergenos</p>
              <p className="text-lg font-semibold text-gray-800">{menu.alergenos}</p>
            </div>
          </div>

          <div className="bg-white/40 p-5 rounded-2xl flex items-start gap-4 shadow-sm border border-white/50 lg:col-span-2">
            <div className="p-3 bg-green-100 rounded-xl text-green-600">
              <Utensils size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-bold uppercase">Ingredientes</p>
              <p className="text-lg font-semibold text-gray-800">{menu.ingredientes}</p>
            </div>
          </div>

          <div className="bg-white/40 p-5 rounded-2xl flex items-start gap-4 shadow-sm border border-white/50">
            <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
              <Box size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-bold uppercase">Stock / Turno</p>
              <p className="text-lg font-semibold text-gray-800">{menu.stock} unid. • {menu.turno}</p>
            </div>
          </div>

        </div>

        {/* BOTONES */}
        <div className="flex justify-end border-t border-gray-400/30 pt-6">
          <Button onClick={() => navigate("/menuList")} variant="secondary" size="lg" className="rounded-full px-8 shadow-sm">
            Volver a la lista
          </Button>
        </div>
      </div>
    </div>
  );
}