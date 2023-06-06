import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function AddTodo(props) {
    const [title, setTitle] = useState("");
    const [desc,setDesc] = useState("");
     const submit = (e)=>{
        e.preventDefault();//page will not reload
        if(!title || !desc){
           alert("Title or Description cannot be blank!")
              }
        else{
        props.addTodo(title,desc);
        setTitle("");
        setDesc("");
      }
    }

  return (
    <div className="container my-3">
        <h3>Add a Todo</h3>
   <Form onSubmit={submit}>
      <Form.Group className="mb-4" controlId='formGridtitle' >
        <Form.Label>Todo Title</Form.Label>
        <Form.Control type="text" value ={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder="Enter Todo Title" />
      </Form.Group>
      <Form.Group className="mb-4" controlId="formGriddesc">
        <Form.Label>Todo Description</Form.Label>
        <Form.Control type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} placeholder="Enter Description" />
      </Form.Group>
      <Button variant="success" type="submit">
        Add
      </Button>    
      </Form>
      </div>
  )
}
