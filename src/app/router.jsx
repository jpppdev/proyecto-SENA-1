// src/app/router.jsx
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { AuthLayout, CreateInventory, CreateOrder, CreateProvider,CreateMenu, Login } from '@/shared';
import DashboardLayout from "@/shared/layouts/DashboardLayout";

const router = createBrowserRouter([
  {
    // Ruta por defecto 
    path: '/',
    element: <Navigate to="/create-inventory" replace />,
  },
  
  {
    element: <DashboardLayout/>,
    children: [
  
  // --- MÓDULO: INVENTARIO ---
  {
    path: "/create-inventory", 
    element: <CreateInventory />,
    
      
    
  },

  // --- MÓDULO: ÓRDENES ---
  {
    path: "/create-order", 
    element: <CreateOrder />,
    
      
    
  },

  // --- MÓDULO: PROVEEDORES ---
  {
    path: "/create-provider", 
    element: <CreateProvider />,
     
      
    
  },

// --- MÓDULO: MENÚ ---
  {
    path: "/add-menu", 
    element: <CreateMenu />,
  }
    ],
  },


  // --- MÓDULO: AUTENTICACIÓN ---
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { index: true },
    ],
  },



  // Login
  {
    path: "/login",
    element: <Login />,
    children: [
      { index: true },
    ],
  }
]);

export default router;