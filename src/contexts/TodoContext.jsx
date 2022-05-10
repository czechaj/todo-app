import { createContext, useContext, useEffect, useState } from "react";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const initialTodos = JSON.parse(localStorage.getItem("todos"));
  const [todos, setTodos] = useState(initialTodos || []);
  const [displayedTodos, setDisplayedTodos] = useState(initialTodos || []);
  const values = { todos, setTodos, displayedTodos, setDisplayedTodos };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

const useTodo = () => useContext(TodoContext);

export { useTodo, TodoProvider };
