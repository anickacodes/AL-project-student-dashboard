import studentData from "../data/data.json";
import "./CohortList.css";

// const getCohortDate = (cohortCode) => {
//   switch (cohortCode) {
//     case "Winter2026":
//       return (
//         <p id="winter26Date">
//           <strong>Winter 2026</strong>{" "}
//         </p>
//       );
//     case "Spring2026":
//       return (
//         <p id="spring26Date">
//           <strong>Spring 2026</strong>
//         </p>
//       );
//     case "Summer2026":
//       return (
//         <p id="summer26Date">
//           <strong>Summer 2026</strong>
//         </p>
//       );
//     case "Fall2026":
//       return (
//         <p id="fall26Date">
//           <strong>Fall 2026</strong>
//         </p>
//       );
//     case "Winter2025":
//       return (
//         <p id="winter25Date">
//           <strong>Winter 2025</strong>
//         </p>
//       );
//     case "Spring2025":
//       return (
//         <p id="spring25Date">
//           <strong>Spring 2025</strong>
//         </p>
//       );
//     case "Summer2025":
//       return (
//         <p id="summer25Date">
//           <strong>Summer 2025</strong>
//         </p>
//       );
//     case "Fall2025":
//       return (
//         <p id="fall25Date">
//           <strong>Fall 2025</strong>
//         </p>
//       );
//     default:
//       return <></>;
//   }
// };

// const CohortList = () => {
// //   const [studentArr, setStudentArr] = useState(studentData);

// //   const classTitle = () => {};

//   const renderAllStudentsByCohort = studentData.map((eachStudentObj) => {
//     // console.log(e.cohort.cohortCode)
//     const cohortDate = getCohortDate(eachStudentObj.cohort.cohortCode);

//     // console.log(cohortDate)
// //create an array where titles match  -- *let this be cuz it's easier *

// //POJO - start empty object, accumulate based on "cohortDate" [maps - GO LOOK IT UP ]

//  return (
//       <div className="cohort-date">
//         Here:
//         {cohortDate}
//       </div>
//     );
//   });
//   return renderAllStudentsByCohort;
// };

// export default CohortList;

/**
 * i want to group them "the names of the cohort dates" if their name matches .......
 * i want that---declared name---- to be  a link to a page with students whose cohort date matches
 *
 *
 *         {/* {e.cohort.cohortCode === "Winter2026" ? <StudentsToRender cohort={'Winter2026'} /> : <></>} broke my code 🙃 */
/* {e.cohort.cohortCode === "Winter2026" ? <StudentsToRender key={Winter2026} /> : <></>} this loads on the side of studentstorender */
/* {e.cohort.cohortCode === "Winter2026" ? <p id="winter26Date"><strong>Winter2026</strong> </p> : <></>} */
/* LOADS TO DOM AS TEXT, OFC BUT I WANT TO ADD IT TO STUDENTSTORENDER -  */
/* {e.cohort.cohortCode === "Spring2026" ? <p id="spring26Date"><strong>Spring2026</strong></p> : <></>}
        {e.cohort.cohortCode === "Summer2026" ? <p id="summer26Date"><strong>Summer2026</strong></p> : <></>}
        {e.cohort.cohortCode === "Fall026" ? <p id="fall26Date"><strong>Fall2026</strong></p> : <></>}

        // {e.cohort.cohortCode === "Winter2025" ? <p id="winter25Date"><strong>Winter2025</strong></p> : <></>}
        // {e.cohort.cohortCode === "Spring2025" ? <p id="spring25Date"><strong>Spring2025</strong></p> : <></>}
        // {e.cohort.cohortCode === "Summer2025" ? <p id="summer25Date"><strong>Summer2025</strong></p> : <></>}
        // {e.cohort.cohortCode === "Fall2025" ? <p id="fall25Date"><strong>Fall2025</strong></p> : <></>} */

/* An extra E/mpty here is returning --- why */

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
      console.log(filteredStudents);
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
