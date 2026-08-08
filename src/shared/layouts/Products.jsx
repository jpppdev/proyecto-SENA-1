import { useState } from "react";
import { Input, Button } from "@/shared";
import { useNavigate } from "react-router-dom";
import { Pencil, Trash2} from "lucide-react"

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
    <div className="bg-background rounded-2xl p-8">

      {/* ENCABEZADO */}
      <div className="flex items-center justify-between mb-8">

        <div>
          <h1 className="text-display ml-40 font-heading text-primary-700">
            Productos
          </h1>

          <p className="ml-40 text-sm mt-2">
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

      {/* BUSCADOR */}
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

      {/* TABLA */}
      <div className="overflow-x-auto">

        <table className="w-full border-collapse">

          <thead>
            <tr className="bg-primary-700 text-white">

              <th className="p-4 text-left">
                ID
              </th>

              <th className="p-4 text-left">
                Producto
              </th>

              <th className="p-4 text-left">
                Marca
              </th>

              <th className="p-4 text-left">
                Cantidad
              </th>

              <th className="p-4 text-left">
                Precio
              </th>

              <th className="p-4 text-left">
                Estado
              </th>

              <th className="p-4 text-center">
                Acciones
              </th>

            </tr>
          </thead>

          <tbody>

            {filteredProducts.map((product) => (

              <tr
                key={product.id}
                className="border-b border-border hover:bg-primary-50 transition"
              >

                <td className="p-4">
                  {product.id}
                </td>

                <td className="p-4 font-semibold">
                  {product.name}
                </td>

                <td className="p-4">
                  {product.brand}
                </td>

                <td className="p-4">
                  {product.quantity}
                </td>

                <td className="p-4">
                  ${product.price.toLocaleString("es-CO")}
                </td>

                <td className="p-4">
                  <span className="px-3 py-1 rounded-full text-body bg-primary-100 text-primary-800">
                    {product.status}
                  </span>
                </td>

                <td className="p-4">

                  <div className="flex justify-center gap-2">

                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() =>
                        console.log("Editar:", product.id)
                      }
                    >
                      <Pencil/>
                    </Button>

                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() =>
                        console.log("Eliminar:", product.id)
                      }
                    >
                      <Trash2/>
                    </Button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}