import { useState, useEffect } from "react";
import { Input, Select, Checkbox, Button } from "@/shared";
import { getDocumentTypes } from "@/services/selectService";
import { getInventoryProducts } from "@/services/providerService";

import { providerSchema } from "../schemas/providerSchema";

export default function ProviderForm() {
  const [formData, setFormData] = useState({
    documentType: "",
    documentNumber: "",
    suppliedProducts: [], 
    contactNumber: "",
    companyEmail: "",
    address: "",
    isActive: true, 
    observations: "",
  });

  const [documentOptions, setDocumentOptions] = useState([]);
  const [productOptions, setProductOptions] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    
    getDocumentTypes().then(setDocumentOptions);
    getInventoryProducts().then(setProductOptions);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked, options } = e.target;

    
    if (type === "select-multiple") {
      const selectedValues = Array.from(options)
        .filter((option) => option.selected)
        .map((option) => option.value);
      setFormData((prev) => ({ ...prev, [name]: selectedValues }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
    
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validation = providerSchema.safeParse(formData);

    if (!validation.success) {
      const formattedErrors = {};
      validation.error.issues.forEach((issue) => {
        formattedErrors[issue.path[0]] = issue.message;
      });
      setErrors(formattedErrors);
      return;
    }

    console.log("Datos del proveedor a enviar:", formData);
    alert("Proveedor registrado correctamente");
    setErrors({});
  };

  return (
    <div className="bg-background rounded-2xl shadow-lg p-8">
      <h1 className="text-display font-heading text-primary mb-2">
        Registrar Proveedor
      </h1>
      <p className="text-text-muted mb-8 text-sm">
        Gestión de Proveedores &gt; Crear nuevo proveedor
      </p>
      <h2 className="text-title font-heading mb-8">
        Información del Proveedor
      </h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-8">
        
        {/* 1. Tipo de documento */}
        <Select
          label="1. Tipo de documento *"
          name="documentType"
          value={formData.documentType}
          htmlFor="documentType"
          options={documentOptions}
          onChange={handleChange}
          error={errors.documentType}
        />

        {/* 2. Número de documento */}
        <Input
          label="2. Número de documento *"
          name="documentNumber"
          type="number"
          value={formData.documentNumber}
          placeholder="Ej. 900123456"
          htmlFor="documentNumber"
          onChange={handleChange}
          error={errors.documentNumber}
          maxLength="15"
        />

        {/* 3. Productos que suministra (Selección múltiple nativa) */}
        <div className="flex flex-col gap-2">
          <label htmlFor="suppliedProducts" className="font-medium text-text-main">
            3. Productos que suministra (Opcional - Ctrl/Cmd para seleccionar varios)
          </label>
          <select
            multiple
            id="suppliedProducts"
            name="suppliedProducts"
            value={formData.suppliedProducts}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:ring-2 focus:ring-primary outline-none h-32"
          >
            {productOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* 4. Correo electrónico */}
        <Input
          label="4. Correo electrónico empresa *"
          name="companyEmail"
          type="email"
          value={formData.companyEmail}
          placeholder="proveedor@empresa.com"
          htmlFor="companyEmail"
          onChange={handleChange}
          error={errors.companyEmail}
        />

        {/* 5. Número de contacto */}
        <Input
          label="5. Número de contacto *"
          name="contactNumber"
          type="tel"
          value={formData.contactNumber}
          placeholder="Ej. 3001234567"
          htmlFor="contactNumber"
          onChange={handleChange}
          error={errors.contactNumber}
        />

        {/* 6. Dirección */}
        <Input
          label="6. Dirección (Opcional)"
          name="address"
          type="text"
          value={formData.address}
          placeholder="Ej. Calle 123 # 45-67"
          htmlFor="address"
          onChange={handleChange}
          error={errors.address}
        />

        {/* 7. Estado del proveedor */}
        <div className="flex items-center h-full pt-6">
          <Checkbox
            id="isActive"
            name="isActive"
            label="Proveedor Habilitado (Activo)"
            checked={formData.isActive}
            onChange={handleChange}
          />
        </div>

        {/* 8. Observaciones */}
        <div className="col-span-2 flex flex-col gap-2">
          <label htmlFor="observations" className="font-medium text-text-main">
            8. Observaciones (Notas internas)
          </label>
          <textarea
            id="observations"
            name="observations"
            rows="3"
            value={formData.observations}
            onChange={handleChange}
            placeholder="Añade notas adicionales aquí..."
            className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:ring-2 focus:ring-primary outline-none resize-none"
          />
        </div>

        {/* Botones */}
        <div className="col-span-2 flex justify-end gap-4 mt-6">
          <Button variant="secondary" type="button" onClick={() => console.log("Cancelar")}>
            Cancelar
          </Button>
          <Button type="submit" variant="primary">
            Registrar Proveedor
          </Button>
        </div>
      </form>
    </div>
  );
}