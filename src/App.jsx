import { useState } from "react";
import studentData from "./data/data.json";
import "./App.css";

import CohortList from "./Components/CohortList";
import ListOfStudentsToRender from "./Components/ListOfStudentsToRender";

// import AllStudentCertifications from "./Components/AllStudentCertifications";


function App() {
  const [totalCount, setTotalCount] = useState(studentData.length);
  // console.log("um", totalCount);
const [studentArray, setStudentArray] = useState(studentData)
// console.log("um", studentArray);


  return (
    <>
    <div className="dashboard">
    <header><h1>Student Dashboard</h1></header> 
  </div>
    <main>
     
      {/* <StudentDetailsOpened  /> */}
      {/* <AllStudentCertifications /> */}
    
      <CohortList studentArray={studentArray} setStudentArray={setStudentArray} />
      <div className="All-Students-Title">
        <h2>All Students</h2>
        <p>
          Total Students <span> {totalCount} </span>
        </p>
        <br />
        <ListOfStudentsToRender />
      </div>
      {/* <StudentsToRenderList/> */}
    </main>
    </>
  );
}

export default App;
