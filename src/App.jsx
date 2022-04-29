import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ListOfStudents from './components/ListOfStudents'
import FormStudent from './components/Form';
import ListStudent from './components/ListStudents'

function App() {

  // const [number, setNumber] = useState(0)

  // const addToNumber = ()=>{
  //   setNumber(number + 1)
  // }

  // const substractToNumber = ()=>{
  //   setNumber(number - 1)
  // }

  return (
    <div>
      {/* <h1>My first application</h1>
      <h1>{number}</h1>
      <button onClick={addToNumber}>+</button>
      <button onClick={substractToNumber}>-</button> */}
      {/* //<ListOfStudents /> */}
      <ListStudent/>
    </div>
  )
}

export default App
