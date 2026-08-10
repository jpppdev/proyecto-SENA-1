import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button } from "@/shared";

export default function ForgotPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Se ha enviado un enlace para recuperar su contraseña");

    navigate("/login");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-background">

      <div className="w-[450px] bg-background p-10 rounded-4xl shadow-2xl">

        <h1 className="text-title font-heading text-text-primary text-center">
          Recuperar contraseña
        </h1>

        <p className="text-body text-text-secondary text-center mt-4 mb-8">
          Ingrese su correo electrónico para recuperar su contraseña.
        </p>

        <form onSubmit={handleSubmit}>

          <Input
            htmlFor="email"
            name="email"
            type="email"
            label="Correo electrónico"
            placeholder="Ingrese su correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Button
            className="w-full mt-6"
            variant="primary"
            type="submit"
            size="md"
          >
            Recuperar contraseña
          </Button>

          <div
            className="text-center mt-6 text-medium font-semibold cursor-pointer text-brand"
            onClick={() => navigate("/login")}
          >
            Volver al inicio de sesión
          </div>

        </form>

      </div>

    </section>
  );
}