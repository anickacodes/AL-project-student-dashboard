// import cohortList from "./CohortList"
// import "./StudentDetails.css"
// "certifications"
// "codewars"
// "cohort.scores"






// const StudentDetailsOpened = () => {


//   return (
//     <section>
//   <a href="#"> <h2>All Students List </h2> </a>
//   <a href="#"> <h2>Winter 2026 </h2> </a>
//   <a href="#"> <h2>Spring 2026 </h2> </a>
//   <a href="#"> <h2>Summer 2026 </h2> </a>
//   <a href="#"> <h2>Spring 2026 </h2> </a>
//   <a href="#"> <h2>Winter 2025 </h2> </a>
//   <a href="#"> <h2>Spring 2025 </h2> </a>
//   <a href="#"> <h2>Summer 2025 </h2> </a>
//   <a href="#"> <h2>Fall 2025 </h2> </a>
//   </section>
//   )
// };

// export default StudentDetailsOpened;

//click all or click to filter 
//if event.target.innertext === "allstudents" - setState(studentData) 

const StudentDetailsOpened = (se) => {


  return (
    <section>
  <a href="#"> <h2 onClick={ (syntheticE)=>{
    StudentDetailsOpened(syntheticE.target.innerText)
  }
}>All Students List </h2> </a>
  <a href="#"> <h2>Winter 2026 </h2> </a>
  <a href="#"> <h2>Spring 2026 </h2> </a>
  <a href="#"> <h2>Summer 2026 </h2> </a>
  <a href="#"> <h2>Spring 2026 </h2> </a>
  <a href="#"> <h2>Winter 2025 </h2> </a>
  <a href="#"> <h2>Spring 2025 </h2> </a>
  <a href="#"> <h2>Summer 2025 </h2> </a>
  <a href="#"> <h2>Fall 2025 </h2> </a>
  </section>
  )
};




//as we click, filter out what matches and map that as a a return 
//useState - rerenders 

export default StudentDetailsOpened