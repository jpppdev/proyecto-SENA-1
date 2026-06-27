import { Outlet } from "react-router-dom";
import authBg from "@/assets/images/bg-3.png";
import OrderForm from "@/features/orders/components/OrderForm";

export default function CreateOrder() {
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
        {/* Aquí llamamos al nuevo formulario de órdenes */}
        <OrderForm />
        <Outlet />
      </main>
    </div>
  );
}