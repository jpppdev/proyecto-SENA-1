import { Outlet } from "react-router-dom";
import authBg from "@/assets/images/bg-3.png";
import MenuForm from "@/features/menu/components/MenuForm";

export default function CreateMenu() {
  return (
    <div
      className="min-h-screen w-full p-8"
      style={{
        backgroundImage: `url(${authBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <main className="max-w-7xl mx-auto">
        <MenuForm />
        <Outlet />
      </main>
    </div>
  );
}