import studentData from "../data/data.json";
import { useState } from "react";
// console.log(studentData)

//make the useStates so that it's true/false

const AllStudentCertifications = () => {
 

  const studentCertifications = studentData.filter((eachStudentCert) => {
    // const [allOnTrack, setAllOnTrack] = useState(false);
   
    if (
      eachStudentCert.certifications.resume === true &&
      eachStudentCert.certifications.linkedin === true &&
      eachStudentCert.certifications.mockInterview === true &&
      eachStudentCert.certifications.github === true &&
      // eachStudentCert.certifications === true &&
      eachStudentCert.codewars.current.total > 600
    ) {
      
      return eachStudentCert;
      
    }
    

        
  }
  
  )
 
  console.log(studentCertifications.length)
  return (
    <>
      
      {/* make this match each person back to the username  */}

      <h2>
      {/* {studentCertifications} */}
        I want to return each students certifications in the Show More tag ---
        not all certifications in each student
      </h2>
      {/* <a
    onClick={(syntheticE) => {
        // individualShowMore(!setIndividualShowMore)
      handleShowMoreToggle();
    }}
  >
    {" "}
    {individualStudentShowMore ?  "Show Less ..." :  "Show More ..." }
  </a> */}
    </>
  );
  }
  
    

export default AllStudentCertifications;


/* Resume:{" "}
{eachStudentCert.certifications.resume ? (
  <h5>On Track: ✅</h5>
) : (
  <h5>Off Track: ❌</h5>
)}
   onTrack({eachStudentCert.certifications.resume})
LinkedIn:{" "}
{eachStudentCert.certifications.linkedin ? (
  <h5>On Track: ✅ </h5>
) : (
  <h5>Off Track: ❌</h5>
)}
Mock Interview:{" "}
{eachStudentCert.certifications.mockInterview ? (
  <h5>On track: ✅</h5>
) : (
  <h5>Off Track: ❌</h5>
)} */
  /* <a
  onClick={(syntheticE) => {
      // individualShowMore(!setIndividualShowMore)
    handleShowMoreToggle();
  }}
>
  {" "}
  {individualStudentShowMore ?  "Show Less ..." :  "Show More ..." }
</a> */