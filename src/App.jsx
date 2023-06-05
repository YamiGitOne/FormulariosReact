import {useState} from "react";
import Formulario from "./formularios/Formulario";
import Todos from "./formularios/Todos"

const inicialStateTodos = [
  {
    id:1,
    title: 'Todo #01',
    description: 'Descripción #01',
    state: true,
    priority: true
  },
  {
    id:2,
    title: 'Todo #02',
    description: 'Descripción #02',
    state: false,
    priority: false
  },
  {
    id:3,
    title: 'Todo #03',
    description: 'Descripción #03',
    state: false,
    priority: true
  },
]

const App = () => {

  const [todos, setTodos] = useState(inicialStateTodos)

  const addTodo = todo => {
    setTodos ([...todos, todo])
  };

  return (
    <div className="container mb-2">
      <h1 className="center my-5" >Formularios</h1>
      <Formulario addTodo={addTodo} />
      <Todos todos={todos}/>
  </div>
  );
};
export default App;