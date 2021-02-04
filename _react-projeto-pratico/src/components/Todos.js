import React from 'react'
import Todo from './Todo'

export default function Todos({children: todos, onToggle}) {
    return <div>{todos.map(todo => {
        return <Todo key={todo.id} onToggle={onToggle}>{todo}</Todo>
    })}</div>
}
