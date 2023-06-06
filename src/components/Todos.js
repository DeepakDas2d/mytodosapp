import React from 'react';
import  TodoItem from './TodoItem'

export default function Todos(props) {
  return (
    <div className='container my-3 justify-content-center min-vh-100'>
      <h3>Todos Lists</h3>
      <div className='col'>
      {props.todos.length===0?
      <div className="alert alert-info" role="alert">Currently No Todos left</div>:
      props.todos.map((todo)=>{
        return <TodoItem todo ={todo} key ={todo.sno} onDelete={props.onDelete}/>
      })}
      </div>
    </div>
  )
}
