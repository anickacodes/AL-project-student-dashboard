import { useState } from "react";
import studentData from "../data/data.json";
import "./CohortList.css";

const CohortList = ({ studentArray, setStudentArray }) => {
  const [filteredStudents, setFilteredStudents] = useState(studentData)
  const classCodeSelection = (cohortCode) => {
    
    //when i click this , return filtered in new div
    
    if (cohortCode === "All Students") {
     setFilteredStudents(filteredStudents)
     console.log("otherfilter",setFilteredStudents);
    } else {
      const filteredStudents = studentArray.filter((eachStudent) => {
        if (cohortCode.replace(" ", "") === eachStudent.cohort.cohortCode) {
          return eachStudent;
        }
      });
      console.log("filter", ...filteredStudents);
      // setStudentArray(...filteredStudents);
      setFilteredStudents(filteredStudents);
    }
  };

  const cohortCodes = [
    "All Students",
    "Winter 2026",
    "Spring 2026",
    "Summer 2026",
    "Fall 2026",
    "Winter 2025",
    "Spring 2025",
    "Summer 2025",
    "Fall 2025",
  ];
  return (
    <section id="class-list">
      <a href="#">
        {" "}
        <h2
          onClick={(syntheticE) => {
            classCodeSelection(syntheticE.target.innerText);
          }}
        >
          All Students List 
        </h2>{" "}
      </a>
      <a href="#">
        {" "}
        <h2
          onClick={(syntheticE) => {
            classCodeSelection(syntheticE.target.innerText);
          }}
        >
          Winter 2026{" "}
        </h2>{" "}
      </a>
      <a href="#">
        {" "}
        <h2
          onClick={(syntheticE) => {
            classCodeSelection(syntheticE.target.innerText);
          }}
        >
          Spring 2026{" "}
        </h2>{" "}
      </a>
      <a href="#">
        {" "}
        <h2
          onClick={(syntheticE) => {
            classCodeSelection(syntheticE.target.innerText);
          }}
        >
          Summer 2026{" "}
        </h2>{" "}
      </a>
      <a href="#">
        {" "}
        <h2
          onClick={(syntheticE) => {
            classCodeSelection(syntheticE.target.innerText);
          }}
        >
          Spring 2026{" "}
        </h2>{" "}
      </a>
      <a href="#">
        {" "}
        <h2
          onClick={(syntheticE) => {
            classCodeSelection(syntheticE.target.innerText);
          }}
        >
          Winter 2025{" "}
        </h2>{" "}
      </a>
      <a href="#">
        {" "}
        <h2
          onClick={(syntheticE) => {
            classCodeSelection(syntheticE.target.innerText);
          }}
        >
          Spring 2025{" "}
        </h2>{" "}
      </a>
      <a href="#">
        {" "}
        <h2
          onClick={(syntheticE) => {
            classCodeSelection(syntheticE.target.innerText);
          }}
        >
          Summer 2025{" "}
        </h2>{" "}
      </a>
      <a href="#">
        {" "}
        <h2
          onClick={(syntheticE) => {
            classCodeSelection(syntheticE.target.innerText);
          }}
        >
          Fall 2025{" "}
        </h2>{" "}
      </a>
    </section>
    
  );
};

//as we click, filter out what matches and map that as a a return
//useState - rerenders

export default CohortList;
