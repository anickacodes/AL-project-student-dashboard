import { useState } from "react";
import studentData from "./data/data.json"
import "./App.css"
import StudentsToRender from "./Components/StudentsToRender";

// import AllStudentCertifications from "./Components/AllStudentCertifications";

//console.log("start", studentData)

// const studentsToRender = studentData.map(
//   (eachStudentObj)=>{return(
//     <div className="Student">
//   <img src={eachStudentObj.profilePhoto} alt={`${eachStudentObj.names.preferredName}`} />
//   <h4>{eachStudentObj.names.preferredName}</h4>
//   <p>{eachStudentObj.username}</p>
//   <span>Birthday: {eachStudentObj.dob}</span> <br /> 
//   Resume: {eachStudentObj.certifications.resume ? <h1>On Track</h1>: <p>Sike</p>}
//   <a href="">Show More...</a>
//   </div>)}
//   //   console.log(studentsToRender)
// //  console.log(studentData[0].names)
//   )




function App() {
  return (
    <>
    
    <div>
      <h1>Student Dashboard</h1>
    </div>
    {/* <AllStudentCertifications /> */}
    <div>
      <h2>All Students</h2>
      <p>Total Students "ADD USESTATE FOR dynamic COUNT"</p> <br />
    </div>
    <StudentsToRender />
    </>
  );
}

export default App;
