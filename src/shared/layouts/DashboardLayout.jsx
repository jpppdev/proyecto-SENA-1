import { Outlet } from "react-router-dom";
import { Navbar } from "@/shared";

export default function DashboardLayout() {
    return (
        <>
        <div 
        className = "min-h-screen w-full put-20"
        style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
    >
            < Navbar/>

            
            <main className = "mx-auto">
                {/* <UserRegisterForm /> */}
                <Outlet />
            </main>
        </div>
        </>
    );
}