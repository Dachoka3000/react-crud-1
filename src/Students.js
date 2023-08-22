function Students({myStudents}){
    return <div>
        {myStudents.map((student)=>{
           return <div key={student.id}>
                <img src={student.image} alt="student image"/>
                <h2>Name: {student.name}</h2>
                <h3>Course: {student.course}</h3>
                <p>Hobby: {student.hobby}</p>
            </div>
        })}
    </div>
}

export default Students