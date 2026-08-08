import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Input, Select, Button } from "@/shared";
import { orderSchema } from "../schemas/orderSchema";
import { getWaiters, getDishes, getOrderStatuses } from "@/services/orderService";

export default function OrderForm() {
  const [formData, setFormData] = useState({
    tableNumber: "",
    waiter: "",
    dish: "",
    quantity: 1,
    observations: "",
    status: "Activo",
  });

 
  const [waiterOptions, setWaiterOptions] = useState([]);
  const [dishOptions, setDishOptions] = useState([]);
  const [statusOptions, setStatusOptions] = useState([]);

  const [errors, setErrors] = useState({});

  useEffect(() => {
    
    getWaiters().then(setWaiterOptions);
    getDishes().then(setDishOptions);
    getOrderStatuses().then(setStatusOptions);
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
    
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación con Zod
    const validation = orderSchema.safeParse(formData);

    if (!validation.success) {
      const formattedErrors = {};
      validation.error.issues.forEach((issue) => {
        formattedErrors[issue.path[0]] = issue.message;
      });
      setErrors(formattedErrors);
      return;
    }

    console.log("Datos válidos para enviar:", formData);
    alert("Orden creada correctamente");
    setErrors({});
  };

  return (

    

    <div className="bg-background rounded-2xl shadow-lg p-8">
      
      <h1 className="text-display font-heading text-primary mb-2">
        Crear Orden
      </h1>
      <p className="text-text-muted mb-8 text-sm">
        Órdenes &gt; Nueva orden de mesa
      </p>
      <h2 className="text-title font-heading mb-8">
        Información del pedido
      </h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-4 gap-8">
        {/* 1. Número de mesa */}
        <Input
          label="1. Número de mesa *"
          name="tableNumber"
          type="number"
          value={formData.tableNumber}
          placeholder="Ej. 12"
          htmlFor="tableNumber"
          onChange={handleChange}
          error={errors.tableNumber}
        />

        {/* 2. Mesero responsable */}
        <Select
          label="2. Mesero responsable *"
          name="waiter"
          value={formData.waiter}
          htmlFor="waiter"
          options={waiterOptions} 
          onChange={handleChange}
          error={errors.waiter}
        />

        {/* 3. Lista de platillos */}
        <Select
          label="3. Platillo seleccionado *"
          name="dish"
          value={formData.dish}
          htmlFor="dish"
          options={dishOptions} 
          onChange={handleChange}
          error={errors.dish}
        />

        {/* 4. Cantidad */}
        <Input
          label="4. Cantidad *"
          name="quantity"
          type="number"
          value={formData.quantity}
          htmlFor="quantity"
          onChange={handleChange}
          error={errors.quantity}
        />

        {/* 5. Observaciones especiales (Ocupa 2 columnas para más espacio) */}
        <div className="col-span-2">
          <Input
            label="5. Observaciones especiales (Opcional)"
            name="observations"
            type="text"
            value={formData.observations}
            placeholder="Ej. Sin cebolla, extra salsa..."
            htmlFor="observations"
            onChange={handleChange}
            error={errors.observations}
          />
        </div>

        {/* 6. Estado */}
        <Select
          label="6. Estado de la orden *"
          name="status"
          value={formData.status}
          htmlFor="status"
          options={statusOptions}
          onChange={handleChange}
          error={errors.status}
        />

        {/* Botones */}
        <div className="col-span-4 flex justify-end gap-4 mt-6">
          <Button variant="secondary" type="button" onClick={() => console.log("Cancelar")}>
            Cancelar
          </Button>
          <Button type="submit" variant="primary">
            Guardar Orden
          </Button>

           <main className="mx-auto">

                    
                    {/* < UserRegisterForm /> */}
                    < Outlet />
                </main>

        </div>
      </form>
    </div>
  );
}