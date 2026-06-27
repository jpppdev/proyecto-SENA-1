// Componente Select 

export default function Select({
    label,
    error,
    htmlFor,
    name,
    onChange,
    value,
    options = [],
}){
    return (
        <div>
            {/* Label solo se muestra si es Truth un uno lógico */}

            {label &&( //significa una comparación binaria si label existe entonces se rendering el label, si no no se rendering nada
            <label 
                htmlFor={htmlFor}
                className="
                    block
                    mb-1
                    text-primary
                        "
            >
                {label}
            </label>
        )}

            {/* Select */}
            <select
                name={name}
                onChange={onChange}
                value={value}
                id={htmlFor}
                className="
                
                    w-full
                    h-8
                    rounded-md
                    border
                    px-4

                    hover:border
                    border-border-strong
                    hover:border-focus-border
                    "
                >
                <option value="">Seleccione una opción</option> 

                {options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                ))}

                </select>
                {/* Error */}
                {error && <p className="text-caption text-red-800 place-self-start mt-1">{error}</p>}
        </div>
         //este es el contenido del selector , primera opción dice que seleccione una opción

         //aca abajo cuando oprimo sale el menu de opciones en este caso salen 4, el map es el mapeo el mapear que cogimos un arreglo recorra el arreglo y recorra el json lo que tiene, cada se le coloco opt pero cada uno se llama option con eso vamos a la key que lo necesita react pra ir a contextualizar donde tiene que buscar el value es lo que diga y el label que lo tenemos en el json que lo va a decir. 
    )
}