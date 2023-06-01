

const Controlado = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        setError('')
        
        const data = new FormData(form.current);
        console.log([...data.entries()]);

    };

    return(
        <form onSubmit={handleSubmit}>
            <input 
            type="text" placeholder="Ingresa la receta" 
            className="form-control mb-2" 
            name="titleReceta" 
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
        </form>
        
    );
};
export default Controlado;