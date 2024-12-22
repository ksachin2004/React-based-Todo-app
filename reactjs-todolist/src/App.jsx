import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  const handleAddTodos = (newTodo) => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
    }
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleEditTodo = (index) => {
    const todoToEdit = todos[index];
    setTodoValue(todoToEdit);
    handleDeleteTodo(index); 
  };

  return (
    <main>
      <TodoInput
        handleAddTodos={handleAddTodos}
        todoValue={todoValue}
        setTodoValue={setTodoValue}
      />
      <TodoList
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
      />
    </main>
  );
}

export default App;
