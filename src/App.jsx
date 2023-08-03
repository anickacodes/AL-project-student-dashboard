import { useState } from "react";
import studentData from "./data/data.json"


console.log("start", studentData)

const studentsToRender = studentData.map(
  (eachStudentObj)=>{return(
    <div>
  <img src="{eachStudentObj.profilePhoto} "alt={`${eachStudentObj.names.preferredName}`} />
  <h4>{eachStudentObj.username}</h4>
  </div>)}
  )
//   console.log(studentsToRender)
//  console.log(studentData[0].names)

function App() {
  return (
    <>
    <div>
      <h1>Student Dashboard</h1>
    </div>
    {studentsToRender}
    </>
  );
}

export default App;
