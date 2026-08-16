import { z } from "zod";

export const userSchema = z.object({
  // --- PERSONALES ---
  nombres: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  apellidos: z.string().min(2, "Los apellidos deben tener al menos 2 caracteres"),
  tipoDocumento: z.string().min(1, "Debe seleccionar un tipo de documento"),
  numeroDocumento: z.string().min(5, "El número de documento es obligatorio"),
  correo: z.string().email("Debe ser un correo electrónico válido"),

  // --- EMPRESARIALES ---
  correoEmpresarial: z.string().email("Debe ser un correo empresarial válido"),
  telefono: z.string().min(7, "El teléfono debe tener al menos 7 dígitos"),
  fechaInicio: z.string().min(1, "La fecha de inicio es obligatoria"),
  fechaFin: z.string().min(1, "La fecha de fin es obligatoria"),
  direccion: z.string().min(5, "La dirección es obligatoria"),

  // --- SENSIBLES ---
  estado: z.string().min(1, "El estado es obligatorio"),
  tipoUsuario: z.string().min(1, "Debe seleccionar un tipo de usuario"),
  idUsuario: z.string().min(1, "El ID de usuario es obligatorio"),
  contrasena: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});