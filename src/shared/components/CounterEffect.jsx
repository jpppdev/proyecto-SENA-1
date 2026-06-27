//Componenet Couneter Effect

/**
 * Objetivo de esta actividad:
 * Entender que useEffect se vuelve a ejecutar cuadno cambia una dependendica
 */

import { useEffect, useState } from "react";

export default function CounterEffect(){

    // Se crea el estado 
    const [count, setCount] = useState(0);
    const [useMessage, setMessage] = useState("");


    // Se crea el efecto 
    useEffect(() => {
        if (count === 0) {
            setMessage("El contador no ha cambiado")
        }else {
            setMessage(` El contador cambio a: ${count}`)
        }
        
    },[count]) //si el contador cambia quiero que se ejecute el efecto
    //dependencias 


    return (
        <div>
            <h2>{count}</h2>
            <p>{useMessage}</p>

            <button onClick={() => setCount(count + 1)} className="border p-6 bg-green-300">Incrementar Efecto</button>

        </div>
    )
}