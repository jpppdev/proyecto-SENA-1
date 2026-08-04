// src/app/router.jsx
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { AuthLayout, CreateInventory, CreateOrder, CreateProvider,CreateMenu, Login } from '@/shared';

const router = createBrowserRouter([
  {
    // Ruta por defecto 
    path: '/',
    element: <Navigate to="/crear-inventario" replace />,
  },
  
  // --- MÓDULO: INVENTARIO ---
  {
    path: "/create-inventory", 
    element: <CreateInventory />,
    children: [
      { index: true },
    ],
  },

  // --- MÓDULO: ÓRDENES ---
  {
    path: "/create-order", 
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