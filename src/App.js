// import logo from './logo.svg';
import './App.css';
import './components/MyNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar';
import Todos from './components/Todos';
import  Footer  from './components/Footer';
import AddTodo from './components/AddTodo';
import About from './components/About'
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
function App() {
  let initTodo;
  if(localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  
  let onDelete =(todo)=>{
     setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));

  }
   
  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title,desc)
    let sno;
    if(todos.length === 0){
      sno = 1;
    }
    else{
     sno = Number(todos[todos.length - 1].sno) + 1;
  }
    const myTodo ={
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }
  
  const [todos, setTodos] = useState(initTodo);
  useEffect(()=> {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]) 


  return (
    <div className="App"> 
    <Router>    
        <MyNavbar title ="Todos List App" searchBar= {true} />
       <Routes>
       <Route path="/"  element={
          <>
        <AddTodo addTodo = {addTodo}/> 
        <Todos todos={todos} onDelete = {onDelete}/>       
          </>
          }/>
       {/* <Route exact path='/abo' element={<About/>}/> */}
       <Route exact path='/mylist' element={<Todos todos={todos} onDelete = {onDelete}/>}/>
       </Routes>
        <Footer/>
       </Router>

      </div>
  );
}

export default App;
