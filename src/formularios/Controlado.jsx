import { useState } from "react";

const Controlado = () => {
   
    const [todo, setTodo] = useState({
        title: 'Todo #01',
        description: 'Descripción #01',
        state: 'pendiente'
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(todo.title, todo.description, todo.state)
        
        const data = new FormData(form.current);
        console.log([...data.entries()]);

    };

    return(
        <form onSubmit={handleSubmit}>
            <input 
            type="text" placeholder="Ingresa el titulo" 
            className="form-control mb-2" 
            name="title" 
            value={todo.title}
            onChange={e => setTodo({...todo, title: e.target.value})}
            />

            <textarea 
            placeholder="Ingresa la descripción" 
            className="form-control mb-2"  
            name="description" 
            value={todo.description}
            onChange={e => setTodo({...todo, description: e.target.value})}
            />

            <select 
            className="form-select mb-2" 
            name="state" value={todo.state} onChange={e => setTodo({...todo, state: e.target.value})}>
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>

            <button type="submit" className="btn btn-primary">Procesar</button>
        </form>
        
    );
};
export default Controlado;