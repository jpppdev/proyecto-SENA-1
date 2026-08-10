import { useState } from "react";
import { Input, Button } from "@/shared";
import { useNavigate } from "react-router-dom";
import { Pencil, Trash2 } from "lucide-react";

export default function ProductList() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const products = [
    {
      id: "PRD-000001",
      name: "Caldo de Pescado",
      brand: "Marca 1",
      quantity: 20,
      price: 15000,
      status: "Disponible",
    },
    {
      id: "PRD-000002",
      name: "Arroz Blanco",
      brand: "Marca 2",
      quantity: 35,
      price: 8000,
      status: "Disponible",
    },
    {
      id: "PRD-000003",
      name: "Salmón",
      brand: "Marca 3",
      quantity: 5,
      price: 50000,
      status: "Agotándose",
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-display ml-40 font-heading text-brand">
            Productos
          </h1>

          <p className="ml-40 text-body mt-2 text-text-secondary">
            Inventario &gt; Productos
          </p>
        </div>

        <Button
          className="p-4 mr-40"
          variant="primary"
          size="lg"
          onClick={() => navigate("/create-inventory")}
        >
          Crear producto
        </Button>
      </div>

      <div className="mb-8 ml-40 max-w-md">
        <Input
          label="Buscar producto"
          name="search"
          type="text"
          value={search}
          placeholder="Ej. Salmón"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="mx-40">
        <div className="grid grid-cols-7 bg-brand text-text-inverse">
          <div className="p-4 text-left text-medium">
            ID
          </div>

          <div className="p-4 text-left text-medium">
            Producto
          </div>

          <div className="p-4 text-left text-medium">
            Marca
          </div>

          <div className="p-4 text-left text-medium">
            Cantidad
          </div>

          <div className="p-4 text-left text-medium">
            Precio
          </div>

          <div className="p-4 text-left text-medium">
            Estado
          </div>

          <div className="p-4 text-center text-medium">
            Acciones
          </div>
        </div>

        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="grid grid-cols-7 border-b border-border hover:bg-brand-soft transition"
          >
            <div className="p-4 text-body">
              {product.id}
            </div>

            <div className="p-4 text-body font-semibold">
              {product.name}
            </div>

            <div className="p-4 text-body">
              {product.brand}
            </div>

            <div className="p-4 text-body">
              {product.quantity}
            </div>

            <div className="p-4 text-body">
              ${product.price.toLocaleString("es-CO")}
            </div>

            <div className="p-4 text-body">
              <span className="px-3 py-1 rounded-full text-medium bg-brand-soft text-brand">
                {product.status}
              </span>
            </div>

            <div className="p-4 flex justify-center gap-2">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => alert("Producto editado correctamente")}
              >
                <Pencil />
              </Button>

              <Button
                variant="secondary"
                size="sm"
                onClick={() => alert("Producto eliminado correctamente")}
              >
                <Trash2 />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}