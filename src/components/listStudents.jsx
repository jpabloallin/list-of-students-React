import React, { useState } from 'react'
import Form from './Form'

const listStudent = () => {

  const [list, setList] = useState([])

  return (
    <div>
      <h1>List of students</h1>
      <form>
        <button onClick={onAddStudent}>Show students</button>
        {list.map((student, index) => <div key={index}>
          <h2>{student.name}</h2>
          <h2>{student.lastName}</h2>
        </div>)}
      </form>
    </div>
  )
}

export default ListOfStudents