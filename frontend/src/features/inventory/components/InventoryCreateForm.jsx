import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { inventorySchema } from "../schemas/InventorySchema";
// Importamos estrictamente tus componentes compartidos
import { Input, Button, Select, FileInput } from "@/shared";
import { ImagePlus, ArrowLeft, Check, PackagePlus } from "lucide-react";

export default function InventoryCreateForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    productName: "",
    barcode: "",
    brand: "",
    accountable: "",
    quantity: "",
    minQuantity: "",
    unitValue: "",
    status: "disponible",
    productImage: [],
    lotNumber: 1, // Manejado automáticamente
  });

  // Mocks para los selects (reemplazar con datos reales de tu API luego)
  const [brands] = useState([
    { label: "Café Quindío", value: "quindio" },
    { label: "Alquería", value: "alqueria" }
  ]);
  const [users] = useState([
    { label: "Juan Pérez (Admin)", value: "juan_p" },
    { label: "María López", value: "maria_l" }
  ]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = inventorySchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors = {};
      result.error.issues.forEach((issue) => {
        fieldErrors[issue.path[0]] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      // Simulación de envío a API
      setIsSuccess(true);
      setTimeout(() => navigate(-1), 2500);
    } catch (error) {
      console.error("Error:", error.message);
      alert(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative flex w-full max-w-[1200px] min-h-[700px] mx-auto mt-12 bg-white/30 rounded-[2.5rem] shadow-md overflow-hidden border border-[var(--color-border-strong)] p-8 md:p-12">
      
      {/* --- CAPA DE ÉXITO (OVERLAY) --- */}
      {isSuccess && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/40 backdrop-blur-md transition-all duration-300">
          <div className="w-32 h-32 bg-[var(--color-secondary-200)] rounded-[2rem] rotate-3 flex items-center justify-center mb-6 shadow-xl relative">
            <PackagePlus className="w-14 h-14 text-[var(--color-secondary-500)] -rotate-3" />
            <div className="absolute -bottom-2 -right-2 bg-[var(--color-secondary-500)] rounded-full p-2 border-4 border-[var(--color-secondary-200)] -rotate-3">
              <Check className="w-6 h-6 text-white" strokeWidth={3} />
            </div>
          </div>
          <h2 className="text-white text-2xl font-serif italic tracking-wide drop-shadow-md">
            ¡Producto Guardado!
          </h2>
        </div>
      )}

      {/* --- CONTENEDOR INTERNO --- */}
      <div className="w-full relative">
        
        {/* HEADER */}
        <div className="flex items-center gap-6 mb-10">
          
          <div className="relative">
            <div className={`h-24 w-24 rounded-[1.75rem] rotate-3 bg-[var(--color-secondary-500)] flex items-center justify-center text-white shadow-lg overflow-hidden [&_.border-dashed]:!border-transparent [&_.text-blue-500]:!hidden ${formData.productImage?.length > 0 ? "[&>div>div:last-child]:!hidden" : ""}`}>
              
              {(!formData.productImage || formData.productImage.length === 0) && (
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 -rotate-3">
                  <ImagePlus className="h-8 w-8 text-white/80" />
                  <span className="text-[10px] font-bold mt-1 text-white/80">Subir Foto</span>
                </div>
              )}
              
              <div className="absolute inset-0 z-0 flex items-center justify-center -rotate-3 scale-[1.35]">
                <FileInput
                  value={formData.productImage}
                  onChange={(files) => setFormData((prev) => ({ ...prev, productImage: files }))}
                  multiple={false}
                  accept="image/jpeg, image/jpg, image/png, image/webp"
                />
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-extrabold text-[var(--color-text-primary)] mb-1">
              Nuevo Producto
            </h1>
            <p className="text-sm font-medium text-[var(--color-text-muted)]">
              Registra los datos para el inventario
            </p>
          </div>
          
          <div className="flex-1" />
          
          <button 
            type="button" 
            onClick={() => navigate(-1)}
            className="hidden sm:flex items-center gap-2 rounded-2xl border-2 border-[var(--color-text-primary)] text-[var(--color-text-primary)] px-5 py-2.5 text-sm font-bold hover:bg-[var(--color-text-primary)] hover:text-[var(--color-background)] transition-all"
          >
            <ArrowLeft className="h-4 w-4" />
            Regresar
          </button>
        </div>

        {/* DIVISOR ONDULADO */}
        <svg viewBox="0 0 400 12" preserveAspectRatio="none" className="w-full h-3 text-[var(--color-secondary-200)] mb-10">
          <path d="M0 6 Q 10 0, 20 6 T 40 6 T 60 6 T 80 6 T 100 6 T 120 6 T 140 6 T 160 6 T 180 6 T 200 6 T 220 6 T 240 6 T 260 6 T 280 6 T 300 6 T 320 6 T 340 6 T 360 6 T 380 6 T 400 6" fill="none" stroke="currentColor" strokeWidth="3" />
        </svg>

        {/* FORMULARIO Y COLUMNAS */}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-8">
            
            {/* Columna 1: BÁSICOS */}
            <div className="space-y-4 [&>div]:!w-full">
              <h3 className="flex items-center gap-3 text-[var(--color-text-primary)] font-extrabold mb-6 text-lg tracking-wider">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/40 backdrop-blur-md border border-white/60 text-[var(--color-text-primary)] text-base shadow-sm">1</span>
                BÁSICOS
              </h3>
              <Input variant="primary" size="md" label="Nombre del producto" htmlFor="productName" name="productName" value={formData.productName} onChange={handleChange} error={errors.productName} placeholder="Ej: Café en grano" />
              <Input variant="primary" size="md" label="Código de barras" htmlFor="barcode" name="barcode" value={formData.barcode} onChange={handleChange} error={errors.barcode} placeholder="Ingrese el código" />
              <Select label="Marca" htmlFor="brand" name="brand" value={formData.brand} onChange={handleChange} error={errors.brand} options={brands} />
            </div>

            {/* Columna 2: STOCK */}
            <div className="space-y-4 [&>div]:!w-full">
              <h3 className="flex items-center gap-3 text-[var(--color-text-primary)] font-extrabold mb-6 text-lg tracking-wider">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/40 backdrop-blur-md border border-white/60 text-[var(--color-text-primary)] text-base shadow-sm">2</span>
                STOCK
              </h3>
              <Input variant="primary" size="md" label="Cantidad ingresada" htmlFor="quantity" name="quantity" type="number" value={formData.quantity} onChange={handleChange} error={errors.quantity} placeholder="0" />
              <Input variant="primary" size="md" label="Alerta mínima" htmlFor="minQuantity" name="minQuantity" type="number" value={formData.minQuantity} onChange={handleChange} error={errors.minQuantity} placeholder="0" />
              <Input variant="primary" size="md" label="Valor unitario" htmlFor="unitValue" name="unitValue" type="number" value={formData.unitValue} onChange={handleChange} error={errors.unitValue} placeholder="$ 0.00" />
            </div>

            {/* Columna 3: ESTADO */}
            <div className="space-y-4 [&>div]:!w-full">
              <h3 className="flex items-center gap-3 text-[var(--color-text-primary)] font-extrabold mb-6 text-lg tracking-wider">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/40 backdrop-blur-md border border-white/60 text-[var(--color-text-primary)] text-base shadow-sm">3</span>
                ESTADO
              </h3>
              <Select label="Cuentadante asignado" htmlFor="accountable" name="accountable" value={formData.accountable} onChange={handleChange} error={errors.accountable} options={users} />
              <Select label="Estado del producto" htmlFor="status" name="status" value={formData.status} onChange={handleChange} error={errors.status} options={[
                { label: "Disponible", value: "disponible" },
                { label: "Agotado", value: "agotado" },
                { label: "Vencido", value: "vencido" },
                { label: "Avería", value: "averia" }
              ]} />
            </div>

          </div>

          {/* FOOTER */}
          <div className="flex justify-end mt-12 border-t-2 border-[var(--color-border-strong)] pt-8">
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="rounded-full bg-[var(--color-text-primary)] !text-[var(--color-background)] px-10 py-3.5 text-sm font-bold shadow-lg hover:opacity-80 active:scale-95 transition-all !border-none disabled:opacity-50 disabled:active:scale-100"
            >
              {isSubmitting ? "GUARDANDO..." : "GUARDAR PRODUCTO"}
            </Button>
          </div>
        </form>

      </div>
    </div>
  );
}