import MenuRowActions from "../components/MenuRowActions";

export const MenuColumns = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "nombre",
    header: "Plato / Producto",
  },
  {
    accessorKey: "categoria",
    header: "Categoría",
  },
  {
    accessorKey: "precio",
    header: "Precio",
    // Formateamos el número para que se vea como moneda
    cell: ({ row }) => `$${row.original.precio.toLocaleString()}`,
  },
  {
    accessorKey: "estado",
    header: "Estado",
    cell: ({ row }) => (
      <span className={`px-2 py-1 rounded-full text-xs font-bold ${row.original.estado === 'disponible' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
        {row.original.estado.toUpperCase()}
      </span>
    )
  },
  {
    id: "actions",
    header: "Acciones",
    cell: ({ row }) => <MenuRowActions menu={row.original} />,
  }
];