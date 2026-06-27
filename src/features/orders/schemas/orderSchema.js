// src/features/orders/schemas/orderSchema.js
import { z } from "zod";

export const orderSchema = z.object({
  tableNumber: z.string().min(1, { message: "El número de mesa es obligatorio" }),
  waiter: z.string().min(1, { message: "Debes seleccionar un mesero" }),
  dish: z.string().min(1, { message: "Debes seleccionar un platillo" }),
  quantity: z.preprocess((val) => Number(val), z.number().min(1, { message: "La cantidad debe ser al menos 1" })),
  observations: z.string().optional(),
  status: z.string().min(1, { message: "El estado es obligatorio" }),
});