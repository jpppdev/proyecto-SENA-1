import { Outlet } from "react-router-dom";
import authBg from "@/assets/images/bg-3.png";

export default function DashboardLayout() {
    return (
        <div 
            className="flex items-center justify-center min-h-screen w-full p-14"
            style={{
                backgroundImage: `url(${authBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <main className="mx-auto w-full">
                {/* Eliminamos <UserRegisterForm /> de aquí */}
                {/* Outlet se encarga de inyectar la vista que corresponda según la URL */}
                <Outlet />
            </main>
        </div>
    );
}