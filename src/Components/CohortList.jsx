import studentData from "../data/data.json";
import "./CohortList.css";


const CohortList = ({ setStudentArray }) => {
  const classCodeSelection = (se) => {
    console.log( se)
    if (se === "All Students") {
      setStudentArray(studentData);
    } else {
      const filteredStudents = studentData.filter((eachStudent) => {
        if (
          se.replace(" ", "") === eachStudent.cohort.cohortCode
        ) {
          
          return eachStudent;
        }
      });
      console.log(...filteredStudents);
      // setStudentArray(...filteredStudents);
      setStudentArray(filteredStudents);
    }
   
  };

  return (
    <section id="class-list">
      <a href="#">
        {" "}
        <h2
          onClick={(syntheticE) => {
            classCodeSelection(syntheticE.target.innerText);
          }}
        >
          All Students List{" "}
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
        <h2 onClick={(syntheticE) => {
            classCodeSelection(syntheticE.target.innerText);
          }}>Summer 2026 </h2>{" "}
      </a>
      <a href="#">
        {" "}
        <h2 onClick={(syntheticE) => {
            classCodeSelection(syntheticE.target.innerText);
          }}>Spring 2026 </h2>{" "}
      </a>
      <a href="#">
        {" "}
        <h2 onClick={(syntheticE) => {
            classCodeSelection(syntheticE.target.innerText);
          }}>Winter 2025 </h2>{" "}
      </a>
      <a href="#">
        {" "}
        <h2 onClick={(syntheticE) => {
            classCodeSelection(syntheticE.target.innerText);
          }}>Spring 2025 </h2>{" "}
      </a>
      <a href="#">
        {" "}
        <h2 onClick={(syntheticE) => {
            classCodeSelection(syntheticE.target.innerText);
          }}>Summer 2025 </h2>{" "}
      </a>
      <a href="#">
        {" "}
        <h2 onClick={(syntheticE) => {
            classCodeSelection(syntheticE.target.innerText);
          }}>Fall 2025 </h2>{" "}
      </a>
    </section>
  );
};

//as we click, filter out what matches and map that as a a return
//useState - rerenders

export default CohortList;
