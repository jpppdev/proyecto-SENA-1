// CÓDIGO CORREGIDO:
import { UserRegisterForm } from "@/features/users"; 
import DashboardLayout from "./DashboardLayout"; // Están en la misma carpeta

export default function CreateUser() {
  return (
    <DashboardLayout>
      <div className="p-8">
        <UserRegisterForm />
      </div>
    </DashboardLayout>
  );
}