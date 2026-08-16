// src/app/router.jsx
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { AuthLayout,DashboardLayout, CreateInventory, CreateOrder, CreateProvider,CreateMenu } from '@/shared';
import { UserList, UserRegisterForm ,UserViews } from "@/features/users";
import { MenuList,MenuViews} from "@/features/menu";
const router = createBrowserRouter([
  {
    // Ruta por defecto 
    path: '/',
    element: <Navigate to="/crear-inventario" replace />,
  },
  
  // --- MÓDULO: INVENTARIO ---
  {
    path: "/crear-inventario", 
    element: <CreateInventory />,
    children: [
      { index: true },
    ],
  },
    // --- MÓDULO: USUARIO ---
  {
    path: "/dashboard", 
    element: <DashboardLayout />,
    children: [
      { index: true },
      { path: "userList", element: <UserList />},
          { path: "userCreate", element: <UserRegisterForm />},
          { path: "userView/:id", element: <UserViews /> },
          { path: "userEdit/:id", element: <UserRegisterForm /> }
         
    ],
  },
  

  // --- MÓDULO: ÓRDENES ---
  {
    path: "/crear-orden", 
    element: <CreateOrder />,
    children: [
      { index: true },
    ],
  },

  // --- MÓDULO: PROVEEDORES ---
  {
    path: "/crear-proveedor", 
    element: <CreateProvider />,
    children: [
      { index: true },
    ],
  },

// --- MÓDULO: MENÚ ---
  {
    path: "/agregar-menu", 
    element: <CreateMenu />,
    children: [
      { index: true },
      { path: "menuView/:id", element: <MenuViews /> }, 
      { path: "menuList", element: <MenuList /> }, 
    ],
  },

  // --- MÓDULO: AUTENTICACIÓN ---
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { index: true },
    ],
  }
]);

export default router;