// Compoente para enter el hook useState
import { useState } from "react";

export default function DeleteCounter(){
    
    //creamos el estado
    const [count, setCount] = useState(0);

    return(
        <div>
            <p>Contador: {count}</p>
            <button onClick={() => setCount(count + 1)} className="border p-6 rounded-md"> Incrementar</button>
        </div>
    )
}