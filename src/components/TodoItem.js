import React from "react";
import Card from "react-bootstrap/Card";

export default function Todo({ todo, onDelete }) {
 return(

        <Card style={{ width: "18rem" }} className="mb-3" border="dark">
        <Card.Header>{todo.sno}</Card.Header>
        <Card.Body>
        <Card.Title>
         {todo.title}
        </Card.Title>
        <Card.Text>{todo.desc}</Card.Text>
        <button className="btn btn-danger btn-sm btn-start" onClick={() => {onDelete(todo);}}>Delete</button>
        </Card.Body>
      </Card>
    
    )
}
