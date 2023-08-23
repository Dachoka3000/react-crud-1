import { useState } from "react"

function Update({updateFunction, student}){

  const [name, setName]=useState(student.name)
  const [course, setCourse]=useState(student.course)
  const [image, setImage]=useState(student.image)
  const [hobby, setHobby]=useState(student.hobby)


  function changeName(event){
    event.preventDefault()
    setName(event.target.value)
  }
  function changeCourse(event){
    event.preventDefault()
    setCourse(event.target.value)
  }
  function changeImage(event){
    event.preventDefault()
    setImage(event.target.value)
  }
  function changeHobby(event){
    event.preventDefault()
    setHobby(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault()

    let id=student.id
    let newObject={
        name:name,
        course: course,
        image: image,
        hobby:hobby
    }
    updateFunction(id, newObject)
  }

    return <div>
        <h3>The Update Form</h3>
    <form onSubmit={handleSubmit}>
        <input type='text' placeholder='name' onChange={changeName} value={name} required/>
        <input type='text' placeholder='course' onChange={changeCourse} value={course} required/>
        <input type='url' placeholder='image link' onChange={changeImage} value={image} required/>
        <input type='text' placeholder='hobby' onChange={changeHobby} value={hobby} required/>
        <button type='submit'>Submit</button>

    </form>
    </div>
}
export default Update