import { z } from "zod";

export const menuSchema = z.object({
  dishName: z.string().min(1, { message: "El nombre es obligatorio" }),
  price: z.preprocess((val) => Number(val), z.number().positive({ message: "El precio debe ser un número positivo" })),

  image: z.any().optional(), 
  category: z.string().min(1, { message: "Selecciona una categoría" }),
  description: z.string().min(1, { message: "La descripción es obligatoria" }),
  isActive: z.boolean(),
});