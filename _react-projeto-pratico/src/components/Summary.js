import React from "react";

export default function Summary({ children: todos }) {
  const doneTodos = todos.filter((todo) => todo.done).length;
  const allTodos = todos.length;
  const udoneTodos = allTodos - doneTodos;

  return (
    <div style={stylers}>
      Total de Tarefas: <strong>{allTodos}</strong> | Tarefas cumpridas:
      <strong style={{ color: "green" }}>{doneTodos}</strong> | Tarefas
      não-cumpridas: <strong style={{ color: "red" }}>{udoneTodos}</strong>
    </div>
  );
}


const stylers = {
  textAlign: 'center',
  margin: "20px 0",
  fontSize: '18px',
}
