import { z } from "zod";

export const providerSchema = z.object({
  documentType: z.string().min(1, { message: "Selecciona el tipo de documento" }),
  documentNumber: z.string().min(1, { message: "El documento es obligatorio" }).max(15, { message: "Máximo 15 caracteres" }),
  suppliedProducts: z.array(z.string()).optional(),
  contactNumber: z.string().min(1, { message: "El número de contacto es obligatorio" }),
  companyEmail: z.string().email({ message: "Correo inválido" }),
  address: z.string().optional(),
  isActive: z.boolean(),
  observations: z.string().optional(),
});