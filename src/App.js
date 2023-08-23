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
    getStudents()
    
  },[])

  function getStudents(){
    fetch("http://localhost:8080/students")
    .then(response=>response.json())
    .then(data=>{
      setStudents(data)
      // console.log(data)
    })
    .catch(error=>console.log(error))
  }

  function updateStudent(id, object){
      fetch(`http://localhost:8080/students/${id}`,{
        method:"PUT",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(object)
      })
      .then(response=>response.json())
      .then(data=>console.log(data))
      .catch(error=>console.log(error))
  }

  function deleteStudent(id){
    fetch(`http://localhost:8080/students/${id}`,{
      method:"DELETE",

    })
    .then(response=>console.log(response.status))
    .then(()=>{
      alert("student was deleted")
      getStudents()
    })
    .catch(error=>console.log(error))
  }

  return (
    <div className="App">
      <Students myStudents={students} updateFunction={updateStudent} deleteFunction={deleteStudent}/>
      <Post/>
    </div>
  );
}

export default App;
