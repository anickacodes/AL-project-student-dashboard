import { useState } from "react";
import AllStudentCertifications from "./AllStudentCertifications";
// import StudentDetailsOpened from "./StudentDetailsOpened.jsx";

const IndiviualStudentCard = ({ eachStudentObj }) => {
  const [individualStudentShowMore, setIndividualStudentShowMore] = useState(false);
  // console.log("state of show more", individualShowMore)

  const [seeShowMoreOrShowLess, setShowMoreOrShowLess] =
    useState(false); //all share a state here

  const [showOneOnOne, setShowOneOnOne] = useState("Show More...")  
// console.log(showOneOnOne)








  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-us", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  function handleShowMoreToggle() {
    setIndividualStudentShowMore(!individualStudentShowMore)
  }
// function showOneOnOneSection() {
// if (seeShowMoreOrShowLess === false){
//   // return (<StudentDetailsOpened />)
// }
// return {showOneOnOne}
// }

  return (
   
      <div key={eachStudentObj.id} className="">
        <img
          // src={eachStudentObj.profilePhoto} 
          // COMMENT THIS BACK IN - IT TAKES TIME TO LOAD THE PAGE UNFORTUNATELY
          alt={`${eachStudentObj.names.preferredName}`}
        />
        <h4>{eachStudentObj.names.preferredName}</h4>
        <p>
          <em>{eachStudentObj.username}</em>
        </p>
        <span>Birthday: {formatDate(eachStudentObj.dob)}</span> <br />
        <div><strong>Cohort Start Date : {eachStudentObj.cohort.cohortStartDate}</strong> </div>
        {/* <section>
          Resume:{" "}
          {eachStudentObj.certifications.resume ? (
            <h5>On Track: ✅</h5>
          ) : (
            <h5>Off Track: ❌</h5>
          )}
          LinkedIn:{" "}
          {eachStudentObj.certifications.linkedin ? (
            <h5>On Track: ✅ </h5>
          ) : (
            <h5>Off Track: ❌</h5>
          )}
          Mock Interview:{" "}
          {eachStudentObj.certifications.mockInterview ? (
            <h5>On track: ✅</h5>
          ) : (
            <h5>Off Track: ❌</h5>
          )}
          <a
            onClick={(syntheticE) => {
                // individualShowMore(!setIndividualShowMore)
              handleShowMoreToggle();
            }}
          >
            {" "}
            {individualStudentShowMore ?  "Show Less ..." :  "Show More ..." }
          </a>
        </section> */}
    
        <AllStudentCertifications />
        <a
        onClick={(syntheticE) => {
            // individualShowMore(!setIndividualShowMore)
          handleShowMoreToggle();
        }}
      >
        {" "}
        {/* {individualStudentShowMore ?  {showOneOnOneSection} :  "Show More ..." } */}
        {individualStudentShowMore ?  
       <h2>yolo</h2>
         :
           "Show More ..." }
      </a>
      </div>
    
  );
};

export default IndiviualStudentCard;
