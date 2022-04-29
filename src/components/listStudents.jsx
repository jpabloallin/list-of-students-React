import React, { useState } from "react";
import FormStudent from "./Form";

const ListStudent = () => {
  const onAddStudent = (event) => {
    event.preventDefault();
    if (name && lastName && email) {
      const student = {
        name,
        lastName,
        email,
      };
      setList([...list, student]);
    }
  };

  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const addName = (event) => {
    setName(event.target.value);
  };
  const addLastName = (event) => {
    setLastName(event.target.value);
  };

  const addEmail = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div>
      <h1>List of students</h1>
      <FormStudent
      addName = {addName}
      addLastName = {addLastName}
      addEmail = {addEmail}
      onAddStudent = {onAddStudent}
      />
        <button onClick={onAddStudent}>Add student</button>
    </div>
  );
};

export default ListStudent;
