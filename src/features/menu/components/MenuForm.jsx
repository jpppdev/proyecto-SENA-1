import { useState } from "react";
import { UploadCloud } from "lucide-react";
import { Input, Select, Button } from "@/shared"; 

export default function MenuForm() {
  const [formData, setFormData] = useState({
    id: "",
    nombre: "",
    categoria: "",
    precio: "",
    ingredientes: "",
    tiempoPrep: "",
    calorias: "",
    descuento: "",
    estado: "",
    proveedor: "",
    stock: "",
    alergenos: "",
    turno: "",
    notas: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del menú a guardar:", formData);
  };

  return (
   
    <div className="flex items-center justify-center w-full min-h-[85vh] p-4">
      
      {/* TARJETA DEL FORMULARIO */}
    <div className="w-full max-w-[1200px] h-fit p-10 bg-white/30 backdrop-blur-xl border border-white/40 rounded-[32px] shadow-2xl">
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          
          {/* CONTENEDOR GRID PRINCIPAL */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-min">
            
            {/* --- FILA 1 (4 campos) --- */}
            <Input label="1. ID Menú" name="id" value={formData.id} onChange={handleChange} placeholder="Ej. MN-001" />
            <Input label="Nombre del Plato" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Ej. Hamburguesa" />
            <Select label="Categoría" name="categoria" value={formData.categoria} onChange={handleChange} options={[{ label: "Principal", value: "principal" }, { label: "Bebida", value: "bebida" }, { label: "Postre", value: "postre" }]} />
            <Input label="Precio" name="precio" value={formData.precio} onChange={handleChange} placeholder="$ 0.00" type="number" />

            {/* --- FILA 2 y 3: Caja de Imagen (ocupa 2 filas de alto) --- */}
            <div className="md:col-span-1 md:row-span-2 relative flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-500/50 rounded-2xl bg-white/20 hover:bg-white/40 transition-all duration-300 cursor-pointer min-h-[180px]">
              <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept="image/*" />
              <UploadCloud size={48} className="text-gray-700 mb-3" />
              <span className="text-sm font-medium text-gray-800 text-center">
                Subir Imagen del Plato
              </span>
            </div>

            {/* --- FILA 2 (3 campos a la derecha) --- */}
            <Input label="Ingredientes" name="ingredientes" value={formData.ingredientes} onChange={handleChange} placeholder="Ej. Carne, pan..." />
            <Input label="Tiempo (min)" name="tiempoPrep" value={formData.tiempoPrep} onChange={handleChange} placeholder="Ej. 15" type="number" />
            <Input label="Calorías" name="calorias" value={formData.calorias} onChange={handleChange} placeholder="Ej. 450" type="number" />

            {/* --- FILA 3 (3 campos a la derecha) --- */}
            <Input label="Descuento (%)" name="descuento" value={formData.descuento} onChange={handleChange} placeholder="0" type="number" />
            <Select label="Estado" name="estado" value={formData.estado} onChange={handleChange} options={[{ label: "Disponible", value: "disponible" }, { label: "Agotado", value: "agotado" }]} />
            <Input label="Proveedor" name="proveedor" value={formData.proveedor} onChange={handleChange} placeholder="Opcional" />

            {/* --- FILA 4 (4 campos inferiores) --- */}
            <Input label="Stock" name="stock" value={formData.stock} onChange={handleChange} placeholder="Ej. 20" type="number" />
            <Input label="Alergenos" name="alergenos" value={formData.alergenos} onChange={handleChange} placeholder="Ej. Gluten" />
            <Select label="Turno" name="turno" value={formData.turno} onChange={handleChange} options={[{ label: "Desayuno", value: "desayuno" }, { label: "Almuerzo", value: "almuerzo" }, { label: "Todo el día", value: "todo" }]} />
            <Input label="Notas" name="notas" value={formData.notas} onChange={handleChange} placeholder="Instrucciones..." />
          </div>

          {/* BOTÓN DE ACCIÓN */}
          <div className="flex justify-end mt-2">
            <Button type="submit" variant="primary" size="lg" className="w-48 rounded-full shadow-lg bg-blue-600 hover:bg-blue-700 text-white font-bold tracking-wide">
              Guardar Menú
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}