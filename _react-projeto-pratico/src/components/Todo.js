import React from "react";

export default function Todo({ children: todo , onToggle}) {
  const { todoStyle } = styles;

  const borderColor = todo.done ? 'green' : 'red';

  function handleClick(){
    onToggle(todo)
  }

  return (
    <div style={{...todoStyle, borderLeft:`5px solid ${borderColor}`}} onClick={handleClick}>
      <span>
        {todo.date} | {todo.description}
      </span>
    </div>
  );
}

const styles = {
  todoStyle: {
    padding: "20px",
    border: "1px solid lightgray",
    borderRadius: "4px",
    margin: "10px",
    cursor: 'pointer',
  },
};
