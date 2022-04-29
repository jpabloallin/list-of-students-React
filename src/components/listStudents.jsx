import React, { useState } from "react";
import FormStudent from "./FormStudent";
import DisplayStudents from "./DisplayStudents";
import { CardHeader , Container } from "reactstrap";

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
        <Container className="m-3">
        <CardHeader tag="h2" className="text-center" color="primary">List of students</CardHeader>
        <FormStudent
            addName={addName}
            addLastName={addLastName}
            addEmail={addEmail}
            onAddStudent={onAddStudent}
        />
        <DisplayStudents list={list} setList={setList} />
        </Container>
        
    </div>
  );
};

export default ListStudent;
