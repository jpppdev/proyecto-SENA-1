import { Outlet } from "react-router-dom";
import authBg from "@/assets/images/bg-3.png";
import ProviderForm from "@/features/providers/components/ProviderForm";

export default function CreateProvider() {
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
        <ProviderForm />
        <Outlet />
      </main>
    </div>
  );
}