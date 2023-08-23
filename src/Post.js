import { useState } from "react"

function Post({getStudents}){
  const [name, setName]=useState("")
  const [course, setCourse]=useState("")
  const [image, setImage]=useState("")
  const [hobby, setHobby]=useState("")

  function changeName(event){
    event.preventDefault()
    setName(event.target.value)
  }
  function changeImage(event){
    event.preventDefault()
    setImage(event.target.value)
  }
  function changeHobby(event){
    event.preventDefault()
    setHobby(event.target.value)
  }

  function postStudent(event){
    event.preventDefault()

    let student = {
      name: name,
      course: course,
      image: image,
      hobby:hobby
    }

    fetch("http://localhost:8080/students",{
      method:"POST",
      headers:{"Content-type":"application/json"},
      body:JSON.stringify(student)
    })
    .then(response=> response.json())
    .then(data=>{
      console.log(data)
      getStudents()
    })
    .catch(error=>console.log(error))

    event.target.reset()
  }
    return <div>
      <h1>The Post Form</h1>
    <form onSubmit={postStudent}>
        <input type='text' placeholder='name' onChange={changeName}/>
        <input type='text' placeholder='course' onChange={(event)=>{
          event.preventDefault()
          setCourse(event.target.value)
          }}/>
        <input type='url' placeholder='image link'onChange={changeImage}/>
        <input type='text' placeholder='hobby' onChange={changeHobby}/>
        <button type='submit'>Submit</button>

      </form>
    </div>
}

export default Post