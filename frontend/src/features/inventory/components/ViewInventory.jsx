// src/inventory/pagesInventoryViewPage.js

import { Link, useParams } from "react-router-dom";
import { Button } from "@/shared";
import { inventory } from "../data/inventory";

export default function InventoryViewPage() {
  const { id } = useParams();

  const product = inventory.find(
    (product) => product.id === Number(id)
  );

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div className="min-h-screen bg-[url('/src/assets/images/fondo.png')] bg-cover bg-center flex items-center justify-center">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-[length:var(--text-main)] font-semibold mb-6 text-[color:var(--color-text-primary)]">
          Visualizar Inventario
        </h1>

        <div className="bg-white rounded-2xl shadow-md p-8">

          <h2 className="text-xl font-semibold mb-6">
            Información del producto
          </h2>

          <div className="grid grid-cols-2 gap-6">

            <div>
              <p className="text-gray-500">Nombre</p>
              <p>{product.productName}</p>
            </div>

            <div>
              <p className="text-gray-500">Categoría</p>
              <p>{product.productCategory}</p>
            </div>

            <div>
              <p className="text-gray-500">Precio</p>
              <p>${product.productPrice}</p>
            </div>

            <div>
              <p className="text-gray-500">Cantidad</p>
              <p>{product.productQuantity}</p>
            </div>

            <div>
              <p className="text-gray-500">Estado</p>
              <p>{product.productIsActive ? "Activo" : "Inactivo"}</p>
            </div>

            <div>
              <p className="text-gray-500">ID del producto</p>
              <p>{product.productId}</p>
            </div>

          </div>

          <div className="mt-8">
            <Link to="/dashboard/inventoryList">
              <Button>Volver</Button>
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
}