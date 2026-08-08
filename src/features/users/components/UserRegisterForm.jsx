import { useState, useEffect } from "react";
import { Input, Select, Button } from "@/shared";
import { productSchema } from "../schemas/userSchema";
import { getBrands, getAccountants, getStatuses } from "@/services/inventoryService";

export default function UserRegisterForm() {
  const [formData, setFormData] = useState({
    productId: "",
    brand: "",
    productName: "",
    barcode: "",
    image: null,
    accountant: "",
    quantity: 1,
    totalQuantity: 0,
    minQuantity: 0,
    unitPrice: "",
    totalPrice: "",
    status: "Disponible",
    lot: 1,
    expirationDate: "",
    description: "",
    location: "",
  });

 
  const [brandOptions, setBrandOptions] = useState([]);
  const [accountantOptions, setAccountantOptions] = useState([]);
  const [statusOptions, setStatusOptions] = useState([]);

 
  const [errors, setErrors] = useState({});

  useEffect(() => {
    getBrands().then(setBrandOptions);
    getAccountants().then(setAccountantOptions);
    getStatuses().then(setStatusOptions);
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
    const validation = productSchema.safeParse(formData);

    if (!validation.success) {
      const formattedErrors = {};
      validation.error.issues.forEach((issue) => {
        formattedErrors[issue.path[0]] = issue.message;
      });
      setErrors(formattedErrors);
      return;
    }

    console.log("Datos válidos para enviar:", formData);
    alert("Producto guardado correctamente");
    setErrors({});
  };

  return (
    <div className="bg-background rounded-2xl shadow-lg p-8">


      <h1 className="text-display font-heading text-primary mb-2">
        Crear Inventario
      </h1>
      <p className="text-text-muted mb-8 text-sm">
        Inventario &gt; Crear nuevo producto
      </p>
      <h2 className="text-title font-heading mb-8">
        Información del producto
      </h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-4 gap-8">
        {/* 1 */}
        <Input
          label="1. ID (código único) *"
          name="productId"
          type="text"
          value={formData.productId}
          placeholder="Ej. PRD-000001"
          htmlFor="productId"
          onChange={handleChange}
          error={errors.productId}
        />

        {/* 2. Select Dinámico */}
        <Select
          label="2. Selección marca *"
          name="brand"
          value={formData.brand}
          htmlFor="brand"
          options={brandOptions} 
          onChange={handleChange}
          error={errors.brand}
        />

        {/* 3 */}
        <Input
          label="3. Nombre del producto *"
          name="productName"
          type="text"
          value={formData.productName}
          placeholder="Ej. Caldo de Pescado"
          htmlFor="productName"
          onChange={handleChange}
          error={errors.productName}
        />

        {/* 4 */}
        <Input
          label="4. Código de barras *"
          name="barcode"
          type="text"
          value={formData.barcode}
          placeholder="Ej. 7501234567990"
          htmlFor="barcode"
          onChange={handleChange}
          error={errors.barcode}
        />

        {/* 6. Select Dinámico */}
        <Select
          label="6. Cuentadante *"
          name="accountant"
          value={formData.accountant}
          htmlFor="accountant"
          options={accountantOptions}
          onChange={handleChange}
          error={errors.accountant}
        />

        {/* 7 */}
        <Input
          label="7. Cantidad *"
          name="quantity"
          type="number"
          value={formData.quantity}
          htmlFor="quantity"
          onChange={handleChange}
          error={errors.quantity}
        />

        {/* 8 */}
        <Input
          label="8. Cantidad total"
          name="totalQuantity"
          type="number"
          value={formData.totalQuantity}
          htmlFor="totalQuantity"
          onChange={handleChange}
          error={errors.totalQuantity}
        />

        {/* 9 */}
        <Input
          label="9. Cantidad mínima *"
          name="minQuantity"
          type="number"
          value={formData.minQuantity}
          htmlFor="minQuantity"
          onChange={handleChange}
          error={errors.minQuantity}
        />

        {/* 10 */}
        <Input
          label="10. Valor unitario *"
          name="unitPrice"
          type="number"
          value={formData.unitPrice}
          htmlFor="unitPrice"
          onChange={handleChange}
          error={errors.unitPrice}
        />

        {/* 11 */}
        <Input
          label="11. Valor total *"
          name="totalPrice"
          type="number"
          value={formData.totalPrice}
          htmlFor="totalPrice"
          onChange={handleChange}
          error={errors.totalPrice}
        />

        {/* 12. Select Dinámico */}
        <Select
          label="12. Estado *"
          name="status"
          value={formData.status}
          htmlFor="status"
          options={statusOptions}
          onChange={handleChange}
          error={errors.status}
        />

        {/* 13 */}
        <Input
          label="13. Lote *"
          name="lot"
          type="number"
          value={formData.lot}
          htmlFor="lot"
          onChange={handleChange}
          error={errors.lot}
        />

        {/* 14 */}
        <Input
          label="14. Fecha de vencimiento *"
          name="expirationDate"
          type="date"
          value={formData.expirationDate}
          htmlFor="expirationDate"
          onChange={handleChange}
          error={errors.expirationDate}
        />

        {/* 16 */}
        <Input
          label="16. Ubicación"
          name="location"
          type="text"
          value={formData.location}
          placeholder="Ej. Bodega 1 - Estante A"
          htmlFor="location"
          onChange={handleChange}
          error={errors.location}
        />

        {/* Botones */}
        <div className="col-span-4 flex justify-end gap-4 mt-6">
          <Button variant="secondary" onClick={() => console.log("Cancelar")}>
            Cancelar
          </Button>
          <Button type="submit" variant="primary">
            Guardar
          </Button>
        </div>
      </form>
    </div>
  );
}