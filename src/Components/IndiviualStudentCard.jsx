import { useState } from "react";
import "./IndividualStudentCard.css";
// import StudentDetailsOpened from "./StudentDetailsOpened";

const IndiviualStudentCard = ({ eachStudentObj }) => {
  const [individualStudentShowMore, setIndividualStudentShowMore] =
    useState(false);
  // console.log("state of show more", individualShowMore)

  // const [seeShowMoreOrShowLess, setShowMoreOrShowLess] = useState(false); //all share a state here

  const [showOneOnOne, setShowOneOnOne] = useState("Show More...");
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
    setIndividualStudentShowMore(!individualStudentShowMore);
  }

  function showingDetails() {
    setShowOneOnOne(!showOneOnOne);
  }

  return (
    <div key={eachStudentObj.id} className="Student-Card">
      <img
        src={eachStudentObj.profilePhoto}
        // COMMENT THIS BACK IN - IT TAKES TIME TO LOAD THE PAGE UNFORTUNATELY
        alt={`${eachStudentObj.names.preferredName}`}
      />
      <h4>{eachStudentObj.names.preferredName}</h4>
      <p>
        <em>{eachStudentObj.username}</em>
      </p>
      <p>
        Birthday: <span>{formatDate(eachStudentObj.dob)}</span>{" "}
      </p>
      <p>
        Cohort Start Date :{" "}
        <strong>{eachStudentObj.cohort.cohortStartDate}</strong>{" "}
      </p>

      {/* <div><StudentDetailsOpened /></div> */}
      <a
        onClick={(syntheticE) => {
          // individualShowMore(!setIndividualShowMore)
          handleShowMoreToggle();
        }}
      >
        {" "}
        {/* {individualStudentShowMore ?  {showOneOnOneSection} :  "Show More ..." } */}
        {individualStudentShowMore ? <h2>idk anymore</h2> : showOneOnOne}
      </a>
    </div>
  );
};

export default IndiviualStudentCard;
