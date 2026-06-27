import { z } from "zod";

export const productSchema = z.object({
  productId: z.string().min(3, "El ID debe tener al menos 3 caracteres"),
  brand: z.string().min(1, "Debe seleccionar una marca"),
  productName: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
  barcode: z.string().min(5, "El código de barras es requerido"),
  accountant: z.string().min(1, "Debe seleccionar un cuentadante"),
  quantity: z.coerce.number().min(1, "La cantidad debe ser al menos 1"),
  totalQuantity: z.coerce.number().optional(),
  minQuantity: z.coerce.number().min(1, "Requerido"),
  unitPrice: z.coerce.number().min(1, "Requerido"),
  totalPrice: z.coerce.number().min(1, "Requerido"),
  status: z.string().min(1, "Requerido"),
  lot: z.coerce.number().min(1, "Requerido"),
  expirationDate: z.string().min(1, "Fecha requerida"),
  description: z.string().min(5, "Añade una descripción más larga"),
  location: z.string().optional(),
  
});