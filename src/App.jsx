import { useState } from "react";
import studentData from "./data/data.json";
import "./App.css";

import StudentsToRenderList from "./Components/ListOfStudentsToRender";
import CohortList from "./Components/CohortList";

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

//i actually want this to be in show more ---refactor
// const CohortList = studentData.map(function (e) {
//   return (
//     <div>
//      Here: 
//       {/* {e.cohort.cohortCode === "Winter2026" ? <StudentsToRender cohort={'Winter2026'} /> : <></>} broke my code 🙃 */}
//       {/* {e.cohort.cohortCode === "Winter2026" ? <StudentsToRender key={Winter2026} /> : <></>} this loads on the side of studentstorender */}

//       {e.cohort.cohortCode === "Winter2026" ? <h1>Winter2026</h1> : <></>} 
//       {/* LOADS TO DOM AS TEXT, OFC BUT I WANT TO ADD IT TO STUDENTSTORENDER -  */}

//     </div>
//   );
// });



function App() {
  return (
  
    <main>
      <div className="dashboard">
        <h1>Student Dashboard</h1>
      </div>
      {/* <AllStudentCertifications /> */}
      <CohortList studentData={{studentData}}/>
      <div className="All-Students-Title">
        <h2>All Students</h2>
        <p>Total Students "ADD USESTATE FOR dynamic COUNT"</p> <br />
      </div>
      <StudentsToRenderList 
    //  eachStudentObj={eachStudentObj}
      // studentObjToRender={studentObjToRender}
      />
      </main>
   
  );
}

export default App;
