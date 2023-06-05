import {useEffect, useState} from "react";
import Formulario from "./formularios/Formulario";
import Todos from "./formularios/Todos"

const inicialStateTodos = JSON.parse(localStorage.getItem('todos')) || [];

const App = () => {

      const [todos, setTodos] = useState(inicialStateTodos)

      //almacenamiento local
      useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
      },[todos]);

      //agregar
      const addTodo = todo => {
        setTodos ([...todos, todo])
      };

      //eliminar
      const deleteTodo = (id) => {
        const newArray = todos.filter((todo) => todo.id !==id)
        setTodos(newArray);
      };

      //actualizar
      const updateTodo = (id) =>{
        const newArray = todos.map((todo) => {
          if (todo.id === id){
            todo.state = !todo.state;
          }
          return todo;
        });
        setTodos(newArray)
      };

      //Ordenar por prioridad
      const orderTodo = arrayTodos => {
        return arrayTodos.sort((a,b) => {
          if (a.priority) return -1
          if (!a.priority) return 1
        })
      }

      return (
        <div className="container mb-2">
          <h1 className="center my-5" >Formularios</h1>
          <Formulario addTodo={addTodo} />
          <Todos todos={orderTodo(todos)} deleteTodo={deleteTodo} updateTodo={updateTodo} />
      </div>
      );
};
export default App;