import { useState } from "react";
import { Input, Button } from "@/shared";
import restaurante from "../../assets/images/Img-Restaurante.jpeg";
import logo from "../../assets/images/Img-Login.jpeg";
import title from "../../assets/images/Img-Titulo.png"
import { z } from "zod";

const loginSchema = z.object({
  email: z
    .string()
    .min(1, "El correo es obligatorio"),

  password: z
    .string()
    .min(1, "La contraseña es obligatoria"),
});

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

     const result = loginSchema.safeParse(formData);

  if (!result.success) {
    setErrors(result.error.flatten().fieldErrors);
    return;
  }

  setErrors({});

    console.log(formData);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">

  {/* Fondo */}
  <div
    className="absolute inset-0 bg-cover bg-center blur-md scale-110"
    style={{ backgroundImage: `url(${restaurante})` }}
  ></div>

  {/* Contenido */}
  <div className="relative z-10 w-[900px] h-[520px] bg-white rounded-4xl shadow-2xl flex">

        {/* Imagen */}
        <div className="w-1/2">
          <img
            src={logo}
            alt="Restaurante"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Formulario */}
        <form
          onSubmit={handleLogin}
          className="w-1/2 flex flex-col justify-center px-12"
        >
          <img
            src={title}
            alt="Title"
            className="w-32 mx-auto mb-6"
          />

          <h1 className="text-main font-heading text-center mb-6">
            Bienvenido
          </h1>

          <Input
            htmlFor="email"
            name="email"
            type="email"
            label="Correo electrónico"
            placeholder="Ingresa tu correo"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />

        <div className="mt-5">
          <Input
            htmlFor="password"
            name="password"
            type="password"
            label="Contraseña"
            placeholder="Ingresa tu contraseña"
            value={formData.password}
            onChange={handleChange} 
            error={errors.password}          
        />

        </div>

          <Button
            className="mt-6"
            variant="primary"
            type="submit"
            size="md"
          >
            Iniciar Sesión
          </Button>

          <p className="text-center mt-6 text-medium">
            ¿Aún no tienes una cuenta?{" "}
            <span className="font-semibold cursor-pointer text-medium">
              Regístrate
            </span>
          </p>

          <div
            type="button"
            className="text-center mt-6 mb-6 font-semibold text-medium cursor-pointer"
          >
            <p>¿Olvidaste tu contraseña?</p>
            
          </div>
        </form>

      </div>
    </div>
  );
}

export default Login;
