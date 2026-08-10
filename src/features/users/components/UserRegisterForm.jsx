import { useState } from "react";
import { Input, Select, Button } from "@/shared";
import { userSchema } from "../schemas/userSchema";

export default function UserRegisterForm() {
  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "", 
    tipoDocumento: "", 
    numeroDocumento: "", 
    correo: "",
    correoEmpresarial: "", 
    telefono: "", 
    fechaInicio: "", 
    fechaFin: "", 
    direccion: "",
    estado: "", 
    tipoUsuario: "", 
    idUsuario: "", 
    contrasena: ""
  });

  const [errors, setErrors] = useState({});
  // 1. Nuevo estado para controlar la vista de éxito
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const result = userSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors = {};
      result.error.issues.forEach((issue) => {
        fieldErrors[issue.path[0]] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    console.log("Usuario Creado (Validado):", formData);
    
    // 2. Activamos el modal de éxito en lugar del alert()
    setIsSuccess(true);

    // Opcional: Ocultar el modal y limpiar el formulario después de 3 segundos
    setTimeout(() => {
      setIsSuccess(false);
      // Aquí también podrías usar tu 'navigate("/usuarios")' para volver a la tabla
    }, 3000);
  };

  return (
    // Agregamos 'relative' al contenedor principal para que el overlay se posicione sobre él
    <div className=
          "relative flex w-full max-w-[1200px] min-h-[700px] bg-[var(--color-background)] rounded-[28px] shadow-md overflow-hidden mx-auto border border-[var(--color-border-strong)]">
      
      {/* 3. CAPA DE ÉXITO (OVERLAY) */}
      {isSuccess && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/40 backdrop-blur-md transition-all duration-300">
          
          {/* Círculo amarillo claro con el icono */}
          <div className=
                "w-32 h-32 bg-[#FFEBA4] rounded-full flex items-center justify-center mb-6 shadow-lg relative">
            {/* Icono de usuario */}
            <svg className=
                  "w-16 h-16 text-[#FFAE00]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
            {/* Pequeño badge de "Check" (chulito) encima del usuario */}
            <div className=
                    "absolute bottom-4 right-4 bg-[#FFAE00] rounded-full p-1 border-4 border-[#FFEBA4]">
               <svg className=
                        "w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
               </svg>
            </div>
          </div>

          {/* Texto de éxito idéntico al diseño */}
          <h2 className=
                "text-white text-2xl font-serif italic tracking-wide drop-shadow-md">
                El usuario ha sido creado con éxito
          </h2>
        </div>
      )}

      {/* --- COLUMNA IZQUIERDA (Sidebar Naranja) --- */}
      <div className=
              "w-1/4 bg-[var(--color-secondary-500)] flex flex-col items-center justify-between py-12 px-6">
        <div className= 
              "w-32 h-32 bg-[var(--color-background)] rounded-full flex items-center justify-center shadow-sm">
          <svg className=
                "w-16 h-16 text-[var(--color-secondary-500)]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>
        
        <button 
          type="button" 
          className=
              "flex flex-col items-center text-[var(--color-text-inverse)] font-[var(--font-weight-heading)] text-[var(--text-subtitle)] hover:opacity-90 transition-opacity">
          <svg className=
              "w-10 h-10 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
          </svg>
          Regresar
        </button>
      </div>

      {/* --- ÁREA DEL FORMULARIO --- */}
      <div className=
            "w-3/4 p-10 py-12 bg-[var(--color-background)]">
        <form onSubmit={handleSubmit} className="h-full flex flex-col justify-between">
          
          <div className="grid grid-cols-3 gap-8">
            
            {/* 1: PERSONALES */}
            <div className="space-y-6">
              <h3 className=
                    "text-[var(--text-subtitle)] font-[var(--font-weight-heading)] text-[var(--color-text-muted)] flex items-center gap-3 mb-6 uppercase">
                <span className=
                    "bg-[var(--color-surface-muted)] text-[var(--color-text-primary)] rounded-full w-8 h-8 flex items-center justify-center text-[var(--text-small)] shadow-sm">
                    1
                </span> 
                Personales
              </h3>
              <Input 
                  variant="primary" 
                  size="md" 
                  label="Nombres" 
                  htmlFor="nombres" 
                  name="nombres" 
                  value={formData.nombres} 
                  onChange={handleChange} 
                  error={errors.nombres} 
                  placeholder="Ingresa tu Nombre" />
              <Input 
                variant="primary"
                size="md" 
                label="Apellidos" 
                tmlFor="apellidos" 
                name="apellidos" 
                value={formData.apellidos} 
                onChange={handleChange} 
                error={errors.apellidos} 
                placeholder="Enter your apellidos here" />
              <Select 
                label="Tipo de Documento" 
                htmlFor="tipoDocumento" 
                name="tipoDocumento" 
                value={formData.tipoDocumento} 
                onChange={handleChange} 
                error={errors.tipoDocumento} 
              options={[{ label: "Cédula", value: "cc" }, { label: "Pasaporte", value: "pasaporte" }]} />
              <Input 
                variant="primary" 
                size="md" 
                label="Número de Documento" 
                htmlFor="numeroDocumento" 
                name="numeroDocumento" 
                value={formData.numeroDocumento} 
                onChange={handleChange} 
                error={errors.numeroDocumento} 
                placeholder="Enter your numero de documento" />
              <Input 
                variant="primary" 
                size="md" 
                label="Correo Electrónico" 
                htmlFor="correo" 
                name="correo" 
                type="email" 
                value={formData.correo} 
                onChange={handleChange} 
                error={errors.correo} 
                placeholder="Enter your correo electronico" />
              </div>

            {/* 2: EMPRESARIALES */}
            <div className="space-y-6">
              <h3 className=
                    "text-[var(--text-subtitle)] font-[var(--font-weight-heading)] text-[var(--color-text-muted)] flex items-center gap-3 mb-6 uppercase">
                <span className=
                        "bg-[var(--color-surface-muted)] text-[var(--color-text-primary)] rounded-full w-8 h-8 flex items-center justify-center text-[var(--text-small)] shadow-sm">
                        2
                </span> 
                Empresariales
              </h3>
              <Input 
                  variant="primary" 
                  size="md" 
                  label="Correo Empresarial" 
                  htmlFor="correoEmpresarial" 
                  name="correoEmpresarial" 
                  type="email" 
                  value={formData.correoEmpresarial} 
                  onChange={handleChange} 
                  error={errors.correoEmpresarial} 
                  placeholder="Enter your Full Name here" />
              <Input 
                  variant="primary" 
                  size="md" 
                  label="Número Telefónico" 
                  htmlFor="telefono" 
                  name="telefono" 
                  value={formData.telefono} 
                  onChange={handleChange} 
                  error={errors.telefono} 
                  placeholder="Enter your Full Name here" />
              <Input 
                variant="primary" 
                size="md" 
                label="Fecha Inicio Laboral" 
                htmlFor="fechaInicio" 
                name="fechaInicio" 
                type="date" 
                value={formData.fechaInicio} 
                onChange={handleChange} 
                error={errors.fechaInicio} 
                placeholder="Enter your Full Name here" />
              <Input 
                variant="primary" 
                size="md" 
                label="Fecha Fin Laboral"
                htmlFor="fechaFin" 
                name="fechaFin" 
                type="date" 
                value={formData.fechaFin} 
                onChange={handleChange} 
                error={errors.fechaFin} 
                placeholder="Enter your Full Name here" />
              <Input 
                variant="primary" 
                size="md" 
                label="Dirección" 
                htmlFor="direccion" 
                name="direccion" 
                value={formData.direccion} 
                onChange={handleChange} 
                error={errors.direccion} 
                placeholder="Enter your Full Name here" />
            </div>

            {/* 3: SENSIBLES */}
            <div className="space-y-6">
              <h3 className=
                  "text-[var(--text-subtitle)] font-[var(--font-weight-heading)] text-[var(--color-text-muted)] flex items-center gap-3 mb-6 uppercase">
                <span className=
                  "bg-[var(--color-surface-muted)] text-[var(--color-text-primary)] rounded-full w-8 h-8 flex items-center justify-center text-[var(--text-small)] shadow-sm">3
                </span> 
                Sensibles
              </h3>
              <Input 
                variant="primary" 
                size="md" 
                label="Estado" 
                htmlFor="estado" 
                name="estado" 
                value={formData.estado} 
                onChange={handleChange} 
                rror={errors.estado} 
                placeholder="Enter your Full Name here" />
              <Select 
                label="Tipo de Usuario" 
                htmlFor="tipoUsuario" 
                name="tipoUsuario" 
                value={formData.tipoUsuario} 
                onChange={handleChange} 
                error={errors.tipoUsuario} 
                options={[{ label: "Administrador", value: "admin" }, { label: "Empleado", value: "employee" }]} />
              <Input 
                variant="primary" 
                size="md" 
                label="ID Usuario" 
                htmlFor="idUsuario" 
                name="idUsuario" 
                value={formData.idUsuario} 
                onChange={handleChange} 
                error={errors.idUsuario} 
                placeholder="Enter your Full Name here" />
              <Input 
                variant="primary" 
                size="md" 
                label="Contraseña" 
                htmlFor="contrasena" 
                name="contraseña" 
                type="password" 
                value={formData.contrasena} 
                onChange={handleChange} 
                error={errors.contrasena} 
                placeholder="Ingrese su Contraseña" />
            </div>
            
          </div>

          <div className="flex justify-end mt-8">
            <Button 
            type="submit" 
            variant="primary" 
            size="md" 
            className=
              "w-40 shadow-sm rounded-full bg-[var(--color-secondary-500)] hover:bg-[var(--color-secondary-600)] border-none">
              GUARDAR
            </Button>
          </div>

        </form>
      </div>
    </div>
  );
}