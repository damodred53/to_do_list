import React from 'react';
import './App.css';
import {useState} from 'react';

function App() {

  const [toDoName , setToDoName] = useState('');
  const [toDoList , setToDoList] = useState([]);
  const [toDoIndex , setToDoIndex] = useState(1);

  
  
  const addToDoList = (e) => {
    let toDoItemList = toDoList;
    toDoItemList.push({'name': toDoName, 'key' : toDoIndex});
    setToDoList(toDoItemList);
    setToDoName('');
    setToDoIndex(toDoIndex + 1)
    document.querySelector(".myInput").value = "";
  }

  const removeToDoItem = (key) => {
    let ToDoItemList = toDoList.filter(todo => todo.key !== key )
    setToDoList(ToDoItemList)
  }

  return (
    <div className='wrapper'>
      <h1 className='titleToDoList'>Voici votre liste des choses à faire !!</h1>
      <div className="app">
        <div className='inputAndButtonList'>
          <input className="myInput"  type="text" onChange= {(e) => setToDoName(e.target.value)}/>
          <button className='myButton'  onClick={addToDoList}>Cliquer ici</button>
        </div>
      <ul className='listTask'>
      {toDoList && toDoList.length === 0 ? <p className='nothingToDo'>Il n'y a rien au programme pour le moment</p> : ""}
        {toDoList && toDoList.length > 0 && toDoList.map( todo => {
          return (
          <div className='todoList' key={todo.key}>
            <li >{todo.name === '' ? <p>Projet non défini</p> : todo.name}</li>
            <li ><button onClick={() => removeToDoItem(todo.key)}>X</button></li>   
          </div> 
        ) }  ) } 
        
      </ul>
        
      </div>
    </div>
  );
}

export default App;
