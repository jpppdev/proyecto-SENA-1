import { useState, useEffect } from "react";
import { Input, Select, Checkbox, Button } from "@/shared";
import { Link } from "react-router-dom";
import { menuSchema } from "../schemas/menuSchema";
import { getCategories } from "@/services/menuService";

export default function MenuForm() {
  const [formData, setFormData] = useState({
    dishName: "",
    price: "",
    image: null,
    category: "",
    description: "",
    isActive: true, 
  });

  const [categoryOptions, setCategoryOptions] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    
    getCategories().then(setCategoryOptions);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : type === "checkbox" ? checked : value,
    }));
    
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validation = menuSchema.safeParse(formData);

    if (!validation.success) {
      const formattedErrors = {};
      validation.error.issues.forEach((issue) => {
        formattedErrors[issue.path[0]] = issue.message;
      });
      setErrors(formattedErrors);
      return;
    }

    console.log("Datos del platillo a enviar:", formData);
    alert("Platillo registrado correctamente");
    setErrors({});
  };

  return (
      <div className="bg-background rounded-2xl shadow-lg p-8">
      
      <h1 className="text-display font-heading text-primary mb-2">
        Agregar Platillo
      </h1>
      <p className="text-text-muted mb-8 text-sm">
        Menú &gt; Crear nuevo platillo
      </p>
      <h2 className="text-title font-heading mb-8">
        Información del Platillo
      </h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-8">
        
        {/* 1. Nombre del platillo */}
        <Input
          label="1. Nombre del platillo *"
          name="dishName"
          type="text"
          value={formData.dishName}
          placeholder="Ej. Hamburguesa Doble Carne"
          htmlFor="dishName"
          onChange={handleChange}
          error={errors.dishName}
        />

        {/* 2. Precio */}
        <Input
          label="2. Precio *"
          name="price"
          type="number"
          value={formData.price}
          placeholder="Ej. 25000"
          htmlFor="price"
          onChange={handleChange}
          error={errors.price}
          min="0"
        />

        {/* 3. Imagen del platillo (Estilo arrastrar y soltar) */}
        <div className="col-span-2 md:col-span-1 row-span-2">
          <label className="block mb-2 font-medium text-text-main">
            3. Imagen del platillo (Opcional)
          </label>
          <label className="border-2 border-dashed border-gray-300 rounded-xl h-48 flex flex-col items-center justify-center cursor-pointer text-center hover:bg-gray-50 transition-colors">
           
            <span className="text-primary text-sm mt-1">
              PNG, JPG o WEBP
            </span>
            <input
              type="file"
              name="image"
              onChange={handleChange}
            />
          </label>
          {formData.image && (
            <p className="text-sm text-green-600 mt-2">
              Archivo seleccionado: {formData.image.name}
            </p>
          )}
        </div>

        {/* 4. Categoría (Con enlace para crear nueva) */}
        <div className="flex flex-col">
          <div className="flex justify-between items-end mb-1">
            <label className="font-medium text-text-main">
              4. Categoría *
            </label>
            <Link 
              to="/crear-categoria" 
              className="text-sm text-primary hover:underline"
            >
              + Crear categoría
            </Link>
          </div>
          <Select
            name="category"
            value={formData.category}
            htmlFor="category"
            options={categoryOptions}
            onChange={handleChange}
            error={errors.category}
            label="" /* El label lo manejamos arriba para poder poner el enlace al lado */
          />
        </div>

        {/* 5. Descripción */}
        <div className="flex flex-col">
          <label htmlFor="description" className="font-medium text-text-main mb-2">
            5. Descripción *
          </label>
          <textarea
            id="description"
            name="description"
            rows="3"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe los ingredientes y detalles del platillo..."
            className={`w-full border rounded-lg p-3 bg-white focus:ring-2 focus:ring-primary outline-none resize-none ${errors.description ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.description && <span className="text-red-500 text-sm mt-1">{errors.description}</span>}
        </div>

        {/* 6. Estado */}
        <div className="col-span-2 flex items-center pt-2">
          <Checkbox
            id="isActive"
            name="isActive"
            label="Platillo Habilitado (Activo en el menú)"
            checked={formData.isActive}
            onChange={handleChange}
          />
        </div>

        {/* Botones */}
        <div className="col-span-2 flex justify-end gap-4 mt-6">
          <Button variant="secondary" type="button" onClick={() => console.log("Cancelar")}>
            Cancelar
          </Button>
          <Button type="submit" variant="primary">
            Guardar Platillo
          </Button>
        </div>
      </form>
    </div>
  );
}