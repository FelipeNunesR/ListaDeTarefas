import { useState } from "react";

import "./TodoApp.css";

const TodoApp = () => {
  //lista de tarefas
  const [todos, setTodos] = useState([]);

  //estado de texto da tarefa
  const [inputValue, setInputValue] = useState("");

  //adicionar a tarefa
  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
      };

      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setInputValue("");
    }
  };
  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app-container">
      <h1 className="title">Lista de Tarefas</h1>
      {/* Formulário para adicionar tarefas */}
      <form onSubmit={handleSubmit} className="form-container">
        <input
          className="input-field"
          type="text"
          placeholder="Adicionar nova tarefa..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="add-button">
          Adicionar
        </button>
      </form>
      {/* Lista de tarefas */}
      {todos.length == 0 && <p className="empty">Não há tarefas.</p>}

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            {todo.text}
            <button
              className="delete-button"
              onClick={() => handleDelete(todo.id)}
            >
              Excluir Tarefa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
