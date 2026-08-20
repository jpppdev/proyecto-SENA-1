import { z } from "zod";
import { fileSchema } from "@/shared/schemas/fileSchema";

export const inventorySchema = z.object({
    productName: z.string().min(3, "El nombre debe tener mínimo 3 caracteres"),
    barcode: z.string().min(3, "El código de barras es requerido"),
    brand: z.string().min(1, "La marca es obligatoria"),
    accountable: z.string().min(1, "Debe asignar un cuentadante"),
    quantity: z.coerce.number().min(0, "La cantidad no puede ser negativa"),
    minQuantity: z.coerce.number().min(1, "Defina la cantidad mínima para alertas"),
    unitValue: z.coerce.number().min(1, "El valor unitario debe ser mayor a 0"),
    status: z.string().min(1, "El estado es requerido"),
    productImage: fileSchema.pick({ files: true }).shape.files.optional(),
});