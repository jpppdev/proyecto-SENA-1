// src/app/router.jsx
import { createBrowserRouter, Navigate } from "react-router-dom";   
import { AuthLayout, DashboardLayout, } from "@/shared";
import { UserListPage, UserRegisterForm } from "@/features/users";
import  Login  from "@/features/auth/Login";
import HomePage from "@/features/home/page/HomePage";
import { InventoryCreateForm } from "../features/inventory";

const  router = createBrowserRouter([
    {

        path: "/",
        element: <Navigate to="/dashboard" replace/>
    },


    // --- MÓDULO: AUTENTICACIÓN ---
  // Login
  {
    path: "/login",
    element: <Login />,
   
  },


    {
        path: "/Home",
        element: <AuthLayout/>,
        children:[
            {
                index: true,
            },
        ],
    },
    {
        path: "/dashboard",
        element : <DashboardLayout/>,
        children: [
            {index: true},
            // { path: "/dashboard/auth", element: <h1>Hello2</h1>},
            { path: "userList", element: <UserListPage />},
            { path: "userCreate", element: <UserRegisterForm />},
            { path: "inventoryCreate", element: <InventoryCreateForm />},
            { path: "Home", element: <HomePage />},
        ],
    },
]);

export default router;