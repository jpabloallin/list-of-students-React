import React from 'react'

const formStudent = (props) => {
    const {addName, addLastName, addEmail} = props
  
  return (
    <div>
      <h1>Hello from the list of students</h1>
      <form>
        <label>Name</label>
        <input onChange={addName} type="text" name="name" />
        <label>Last name</label>
        <input onChange={addLastName}  type="text" name="lastName" />
        <label>Email</label>
        <input onChange={addEmail}  type="email" name="email" />
        <button onClick={onAddStudent}>Add student</button>
      </form>
    </div>
  )
}

export default FormStudent