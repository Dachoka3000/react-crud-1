import Update from "./Update"

function Students({myStudents, updateFunction, deleteFunction }){
    return <div>
        {myStudents.map((student)=>{
            // let id = student.id

            // function handleDelete(){
            //     deleteFunction(id)
            // }

           return <div key={student.id}>
                <img src={student.image} alt="student image"/>
                <h2>Name: {student.name}</h2>
                <h3>Course: {student.course}</h3>
                <p>Hobby: {student.hobby}</p>
                <button onClick={()=>{deleteFunction(student.id)}}>Delete</button>
                <Update updateFunction={updateFunction} student={student}/>
            </div>
        })}
    </div>
}

export default Students