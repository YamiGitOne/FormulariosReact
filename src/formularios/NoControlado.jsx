import { useRef, useState } from "react";

const NoControlado = () => {
    const form = useRef(null);
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('')
        
        const data = new FormData(form.current);
        console.log([...data.entries()]);

        //enviar datos
        const { titleReceta, descripcionReceta, state } = Object.fromEntries([...data.entries()]);
  
        //validar datos
        if (!titleReceta.trim() || !description.trim() || !state.trim()) return setError("Debes rellenar todos los campos");
    };

    return(
        <form onSubmit={handleSubmit} ref={form}>
            <input 
            type="text" placeholder="Ingresa la receta" 
            className="form-control mb-2" 
            name="titleReceta" 
            defaultValue="titleReceta1"
            />

            <textarea 
            placeholder="Ingresa la descripción" 
            className="form-control mb-2"  
            name="descripcionReceta" 
            />

            <select 
            className="form-select mb-2" 
            name="state">
                <option value="opcion 1">opción 1</option>
                <option value="opcion 2">opción 2</option>
            </select>

            <button type="submit" className="btn btn-primary">Procesar</button>
             {error !== '' && error }
        </form>
        
    );
};
export default NoControlado;