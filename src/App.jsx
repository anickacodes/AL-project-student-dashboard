import "./App.css";
import { useState } from "react";
import studentData from "./data/data.json";
import CohortList from "./Components/CohortList";
import ListOfStudentsToRender from "./Components/ListOfStudentsToRender";


function App() {
  const [totalCount, setTotalCount] = useState(studentData.length);

  const [studentArray, setStudentArray] = useState(studentData);


  return (
    <>
      <div className="dashboard">
        <header>
          <h1>Student Dashboard</h1>
        </header>
      </div>
      <main>
        {/* <StudentDetailsOpened  /> */}

        <CohortList
          studentArray={studentArray}
          setStudentArray={setStudentArray}
        />
        <div className="All-Students-Title">
          <h2>All Students</h2>
          <p>
            Total Students <span> {totalCount} </span>
          </p>
          <br />
          <ListOfStudentsToRender studentArray={studentArray} />
        </div>
        {/* <StudentsToRenderList/> */}
      </main>
    </>
  );
}

export default App;
