import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button } from "@/shared";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    alert("Cuenta creada correctamente");

    navigate("/login");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-background">

      <div className="w-[450px] bg-background p-10 rounded-4xl shadow-2xl">

        <h1 className="text-title font-heading text-text-primary text-center">
          Crear cuenta
        </h1>

        <p className="text-body text-text-secondary text-center mt-4 mb-8">
          Complete los datos para registrarse.
        </p>

        <form onSubmit={handleRegister}>

          <Input
            htmlFor="name"
            name="name"
            type="text"
            label="Nombre"
            placeholder="Ingrese su nombre"
            value={formData.name}
            onChange={handleChange}
          />

          <div className="mt-5">
            <Input
              htmlFor="email"
              name="email"
              type="email"
              label="Correo electrónico"
              placeholder="Ingrese su correo"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mt-5">
            <Input
              htmlFor="password"
              name="password"
              type="password"
              label="Contraseña"
              placeholder="Ingrese su contraseña"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <Button
            className="w-full mt-6"
            variant="primary"
            type="submit"
            size="md"
          >
            Registrarse
          </Button>

          <div
            className="text-center mt-6 text-medium font-semibold cursor-pointer text-brand"
            onClick={() => navigate("/login")}
          >
            ¿Ya tiene una cuenta? Iniciar sesión
          </div>

        </form>

      </div>

    </section>
  );
}