import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Post from './Post';
import Students from './Students';


//CRUD CREATE-POST
//STUDENTS APP...POST,SEE,EDIT,DELETE
//NAME,COURSE,IMAGE, HOBBY
function App() {
  
  const [students, setStudents]=useState([])

  useEffect(function(){
    // fetch()
    fetch("http://localhost:8080/students")
    .then(response=>response.json())
    .then(data=>{
      setStudents(data)
      // console.log(data)
    })
    .catch(error=>console.log(error))
  },[])


  return (
    <div className="App">
      <Students myStudents={students}/>
      <Post/>
    </div>
  );
}

export default App;
