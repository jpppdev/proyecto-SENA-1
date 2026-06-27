import { useState } from "react";

export default function InventoryForm() {
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

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Producto guardado correctamente");
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      {/* Título */}
      <h1 className="text-4xl font-bold mb-2">
        Crear Inventario
      </h1>

      <p className="text-gray-500 mb-8">
        Inventario &gt; Crear nuevo producto
      </p>

      <h2 className="text-2xl font-semibold mb-8">
        Información del producto
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-4 gap-8"
      >
        {/* 1 */}
        <div>
          <label className="block mb-2 font-medium">
            1. ID (código único) *
          </label>

          <input
            type="text"
            name="productId"
            placeholder="Ej. PRD-000001"
            value={formData.productId}
            onChange={handleChange}
            className="w-full h-12 border rounded-lg px-4"
          />
        </div>

        {/* 2 */}
        <div>
          <label className="block mb-2 font-medium">
            2. Selección marca *
          </label>

          <select
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            className="w-full h-12 border rounded-lg px-4"
          >
            <option value="">
              Seleccionar marca
            </option>

            <option>Head & Shoulders</option>
            <option>Pantene</option>
            <option>Dove</option>
          </select>
        </div>

        {/* 3 */}
        <div>
          <label className="block mb-2 font-medium">
            3. Nombre del producto *
          </label>

          <input
            type="text"
            name="productName"
            placeholder="Ej. Shampoo Anticaspa 400ml"
            value={formData.productName}
            onChange={handleChange}
            className="w-full h-12 border rounded-lg px-4"
          />
        </div>

        {/* 4 */}
        <div>
          <label className="block mb-2 font-medium">
            4. Código de barras *
          </label>

          <input
            type="text"
            name="barcode"
            placeholder="Ej. 7501234567990"
            value={formData.barcode}
            onChange={handleChange}
            className="w-full h-12 border rounded-lg px-4"
          />
        </div>

        {/* 5 Imagen */}
        <div className="row-span-2">
          <label className="block mb-2 font-medium">
            5. Imagen *
          </label>

          <label className="border-2 border-dashed rounded-xl h-60 flex flex-col items-center justify-center cursor-pointer text-center">
            <span className="text-4xl mb-2">☁️</span>

            <span className="font-medium">
              Arrastra una imagen aquí
            </span>

            <span className="text-orange-500 text-sm">
              PNG, JPG o SVG
            </span>

            <input
              type="file"
              name="image"
              hidden
              onChange={handleChange}
            />
          </label>
        </div>

        {/* 6 */}
        <div>
          <label className="block mb-2 font-medium">
            6. Cuentadante *
          </label>

          <select
            name="accountant"
            value={formData.accountant}
            onChange={handleChange}
            className="w-full h-12 border rounded-lg px-4"
          >
            <option>
              Seleccionar usuario
            </option>

            <option>Juan</option>
            <option>Pedro</option>
          </select>
        </div>

        {/* 7 */}
        <div>
          <label className="block mb-2 font-medium">
            7. Cantidad *
          </label>

          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full h-12 border rounded-lg px-4"
          />
        </div>

        {/* 8 */}
        <div>
          <label className="block mb-2 font-medium">
            8. Cantidad total
          </label>

          <input
            type="number"
            name="totalQuantity"
            value={formData.totalQuantity}
            onChange={handleChange}
            className="w-full h-12 border rounded-lg px-4"
          />
        </div>

        {/* 9 */}
        <div>
          <label className="block mb-2 font-medium">
            9. Cantidad mínima *
          </label>

          <input
            type="number"
            name="minQuantity"
            value={formData.minQuantity}
            onChange={handleChange}
            className="w-full h-12 border rounded-lg px-4"
          />
        </div>

        {/* 10 */}
        <div>
          <label className="block mb-2 font-medium">
            10. Valor unitario *
          </label>

          <input
            type="number"
            name="unitPrice"
            value={formData.unitPrice}
            onChange={handleChange}
            className="w-full h-12 border rounded-lg px-4"
          />
        </div>

        {/* 11 */}
        <div>
          <label className="block mb-2 font-medium">
            11. Valor total *
          </label>

          <input
            type="number"
            name="totalPrice"
            value={formData.totalPrice}
            onChange={handleChange}
            className="w-full h-12 border rounded-lg px-4"
          />
        </div>

        {/* 12 */}
        <div>
          <label className="block mb-2 font-medium">
            12. Estado *
          </label>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full h-12 border rounded-lg px-4"
          >
            <option>Disponible</option>
            <option>Agotado</option>
            <option>Vencido</option>
          </select>
        </div>

        {/* 13 */}
        <div>
          <label className="block mb-2 font-medium">
            13. Lote *
          </label>

          <input
            type="number"
            name="lot"
            value={formData.lot}
            onChange={handleChange}
            className="w-full h-12 border rounded-lg px-4"
          />
        </div>

        {/* 14 */}
        <div>
          <label className="block mb-2 font-medium">
            14. Fecha de vencimiento *
          </label>

          <input
            type="date"
            name="expirationDate"
            value={formData.expirationDate}
            onChange={handleChange}
            className="w-full h-12 border rounded-lg px-4"
          />
        </div>

        {/* 15 */}
        <div className="col-span-2">
          <label className="block mb-2 font-medium">
            15. Descripción *
          </label>

          <textarea
            rows="4"
            name="description"
            placeholder="Describe el producto..."
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded-lg p-4"
          />
        </div>

        {/* 16 */}
        <div>
          <label className="block mb-2 font-medium">
            16. Ubicación
          </label>

          <input
            type="text"
            name="location"
            placeholder="Ej. Bodega 1 - Estante A"
            value={formData.location}
            onChange={handleChange}
            className="w-full h-12 border rounded-lg px-4"
          />
        </div>

        {/* Botones */}
        <div className="col-span-4 flex justify-end gap-4 mt-6">
          <button
            type="button"
            className="border px-8 py-3 rounded-lg"
          >
            Cancelar
          </button>

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}