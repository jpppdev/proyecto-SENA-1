// UserRegisterForm componente para registrar un usuario

import { useState, useEffect } from "react";
import {    Input, 
            Button, 
            // DeleteCounter2,
            Select, 
            Checkbox, 
            // IconButton,
            // Dropdown,
            // DropdownTrigger,
            // DropdownItem,
            // DropdownContent,
            FileInput
    } from "@/shared";
import { getDocumentTypes } from "@/services/selectService";
import { useNavigate} from "react-router-dom";
import {userSchema} from "../schemas/userSchema";
import { UserPlus, Calendar, ArrowLeft, Check } from "lucide-react";








export default function UserRegisterForm (){

        //Estado
        const [isSubmitting, setIsSubmitting] = useState(false);

        //Navegacion
        const navigate = useNavigate();

        //Estado del error
         const [errors, setErrors] = useState({})

        // Estado del formulario 
        const [FormData, setFormData] =  useState({
            userName: "",
            userEmail: "",
            userPhone: "",
            userDocumentTypes: "",
            userDocumentNumber: "",
            userPassword: "",
            userImage: [],

            //Flags booleanos
            isStaff: false,
            isActive: true,
            isSuperUser: false,
        });


        //Estado para los tipos de documento
        const [documentTypes, setDocumentTypes] = useState([]);
    
        // Uso del estado useEffect 
        useEffect(() => {
            getDocumentTypes().then(setDocumentTypes);
        },[])

        //========================================
        //          Handle Generico
        //========================================
        /**
         * Función que se ejecuta cada vez que cambia el valor de un input del formulario
         */
        const handleChange = (e) => {
            // Se obtiene el nombre del campo y su valor
            const { name, value, type, checked } = e.target;

        setFormData((prev) => ({
            // Se copian todos los valores anteriores del estado
            ...prev,

            // Se actualiza unicamente lo que cambio
            [name]: type === "checkbox" ? checked : value,
        }));
    };

 

    //===================== HANDLE SUBMIT =============================
    const handleSubmit = async(e) => {
        //Evita que el formulario recargue la pagina
        e.preventDefault();

        //Validamos los datos del formulario contra el esquema Zod
        //saFeParse NO lanza exceptcion, retorna un objeto controlado
        const result = userSchema.safeParse(FormData);

        //Verificar en consola si el esquema está funcionado correctamente 
        // console.log(result);

        //Si la validacion falla
        if(!result.success){
            //Objeto donde almacenaremos los errores por campo
            const fieldErrors = {};

            // Recorremos cada error generado por Zod
            result.error.issues.forEach((issue) => {
                //issue.path[0] corresponde al nombre del campo
                // issue.message contiene el mensaje de error definido en el schema
                fieldErrors[issue.path[0]] = issue.message;
            });

            // Actualizamos el estado de errores para mostrarlos en el UI 
            setErrors(fieldErrors);

            // Cortamos la ejecución: NO se envia nada al backend

            return;
        }
        // Si la validacion pasa, limpiamos errores previos
        setErrors({});

        //Activamos eestado de envio (util para desahibilitar el boton)
        setIsSubmitting(true);

        try {
            //llamamos al servivio frontend que soncume la API 
            //result.data contiene los datos ya validamos por Zod
            // const responde = await createUser(result.data); linea comentada es un servicio 

            //Log informativo para desarrolllo
            // console("Usuario Creado:", responde); igual

            //Feedback basico al usuario 
            alert("Usuario creado correctamente");

            //Navegamos a la vista anterior
            // navigate (-1) equivale a "volver atras"
            navigate(-1);
        } catch (error){
            //Caoturamos errores de red o errores lanzados por el service
            console.error("Error:" , error.message);

            //Mstramos el mensaje de error al usuario 
            alert(error.message);
        } finally {
            //Pase lo que pase, desactivamos el esrado de envio 
            // setIsSubmitting(false);
        }
    };

    //========================================
    //          Handle NameChange
    //========================================

    // const handleNameChange = (e) => {
    //     const value = e.target.value.trim();

    //     if (value === "") {
    //         console.log("El nombre no puede estar vacio");
    //     }
    // };

 return (
    
    <div className=
          "relative flex w-full max-w-[1200px] min-h-[700px] bg-[var(--color-background)] rounded-[28px] shadow-md overflow-hidden mx-auto border border-[var(--color-border-strong)]">
      
      {/* 3. CAPA DE ÉXITO (OVERLAY) */}
      {isSuccess && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/40 backdrop-blur-md transition-all duration-300">
          
          {/* Círculo amarillo claro con el icono */}
          <div className="w-32 h-32 bg-[#FFEBA4] rounded-full flex items-center justify-center mb-6 shadow-lg relative">
            {/* Icono de usuario */}
            <UserPlus className="w-16 h-16 text-[#FFAE00]" />
            {/* Pequeño badge de "Check" (chulito) encima del usuario */}
            <div className=
                    "absolute bottom-4 right-4 bg-[#FFAE00] rounded-full p-1 border-4 border-[#FFEBA4]">
               <Check className="w-5 h-5 text-white" strokeWidth={3} />
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
      <div className="w-1/4 bg-[var(--color-secondary-500)] flex flex-col items-center justify-between py-12 px-6">
  
        {/* Contenedor del Avatar usando FileInput */}
            <div className="w-32 h-32 bg-[var(--color-background)] rounded-full flex items-center justify-center shadow-sm overflow-hidden border-4 border-white">
                <FileInput 
                value={formData.userImage}
                onChange={(files) => setFormData(prev => ({ ...prev, userImage: files }))}
                multiple={false}
                accept="image/jpeg, image/jpg, image/png, image/webp"
                />
            </div>
  
            <button
             type="button"
            onClick={() => navigate(-1)}
            className="flex flex-col items-center text-[var(--color-text-inverse)] font-[var(--font-weight-heading)] text-[var(--text-subtitle)] hover:opacity-90 transition-opacity"
            >
            <ArrowLeft className="w-10 h-10 mb-2" />
            
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