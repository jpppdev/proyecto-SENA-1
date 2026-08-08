import { Outlet } from "react-router-dom";
import authBg from "@/assets/images/Img-Titulo.png";
// import { UserRegisterForm } from "@/features/users";
import { Navbar } from "@/shared";

export default function DashboardLayout() {
    return (
        <>
        <div 
        className = "min-h-screen w-full put-20"
        style={{
            backgroundImage: `url(${authBg})`, // <--- Esta manera es en la que colocamos imagenes
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