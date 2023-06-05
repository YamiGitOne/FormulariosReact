import { useState } from "react";

const Controlado = () => {
   
    const [todo, setTodo] = useState({
        title: 'Todo #01',
        description: 'Descripción #01',
        state: 'pendiente',
        priority: true
    });

    const {title, description, state, priority} =todo

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, description, state, priority)   
    };

    const handleChange = e => {

        const {name, type, checked, value} = e.target

        setTodo({
            ...todo,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    return(
        <form onSubmit={handleSubmit}>
            <input 
            type="text" placeholder="Ingresa el titulo" 
            className="form-control mb-2" 
            name="title" 
            value={title}
            onChange={handleChange}
            />

            <textarea 
            placeholder="Ingresa la descripción" 
            className="form-control mb-2"  
            name="description" 
            value={description}
            onChange={handleChange}
            />
            <div className="form-check">
                <input type="checkbox" 
                name="priority" 
                className="form-check-input mb-2" 
                id="inputCheck"
                checked={priority} 
                onChange={handleChange}
                />
                <label htmlFor="inputCheck">Dar prioridad</label>
            </div>
            
            <select 
            className="form-select mb-2" 
            name="state" value={state} onChange={handleChange}>
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>

            <button type="submit" className="btn btn-primary">Procesar</button>
        </form>
        
    );
};
export default Controlado;