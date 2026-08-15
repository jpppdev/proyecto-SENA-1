// src/feautures/

import StatusSwitch from "@/shared/components/StatusSwitch";

import UserRowActions from "@/features/users/components/UserRowActions";

export const UserColumns = [


  // Columna ID
  {
    accessorKey: "id", 
    header: "Id",    
  },


  // Columna Nombre
  {
    accessorKey: "userName", 
    header: "Nombre",   
  },


  // Columna Email
  {
    accessorKey: "userEmail",
    header: "Email",
  },


  // Columna Telefono
  {
    accessorKey: "userPhone",
    header: "Telefono",
  },


  // Columna Estado (activo / inactivo)
  {
    accessorKey: "is_active",
    header: "Estado",

    cell: ({ row }) => {


     
      const user = row.original;


     
      const handleChange = (value) => {


        
        console.log("Actualizar estado usuario:", user.user_id, value);


      };


      return (
        
        <StatusSwitch
          checked={user.is_active} 
          onChange={handleChange}  
        />
      );
    },
  },


  // Columna de acciones (editar / eliminar)
  {
    id: "actions", 

    cell: ({ row }) => <UserRowActions user={row.original} />,
  },
];
