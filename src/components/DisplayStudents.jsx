import React from "react";

const DisplayStudents = (props) => {
  const { list, setList } = props;

  const deleteStudent = (event, index) => {
    event.preventDefault();
    let studentList = list.filter((_value, ind) => ind !== index);
    setList(studentList);
  };

  return (
    <div>
      <table id="table" className="table">
        <thead>
          <tr key="theader">
            <th>Name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {list.map((student, index) => (
            <tr id={`tr-${index}`} key={index}>
              <td>{student.name}</td>
              <td>{student.lastName}</td>
              <td>{student.email}</td>
              <td>
                <button
                  className="delete-button"
                  onClick={(e) => {
                    deleteStudent(e, index);
                  }}
                  type="button"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayStudents;
