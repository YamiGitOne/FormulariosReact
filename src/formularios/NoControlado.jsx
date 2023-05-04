const NoControlado = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("me diste click");
    };

    return(
        <form onSubmit={(e) => handleSubmit(e)}>
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
                <option value="opcion 1">opcion 1</option>
                <option value="opcion 2">opcion 2</option>
            </select>

            <button type="submit" className="btn btn-primary">Procesar</button>
        </form>
        
    );
};
export default NoControlado;