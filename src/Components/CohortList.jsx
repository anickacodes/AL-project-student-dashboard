import studentData from "../data/data.json";
import { useState } from "react";
import "./CohortList.css";

const CohortList = () => {
  const [filteredCohorts, setFilteredCohorts] = useState(studentData);

  const cohort = filteredCohorts.map((eachFellowObj) => {
    eachFellowObj.certifications === true;
  });

  const renderCohorts = [
    "All Students",
    ...new Set(
      filteredCohorts.map((eachCohort) => eachCohort.cohort.cohortCode)
    ),
  ];

  const allCohorts = renderCohorts.map((cohortText) => (
    <section
      key={cohortText}
      onClick={(se) => handleCohortSelector(cohortText)}
    >
      {" "}
      {cohortText}{" "}
    </section>
  ));

  function handleCohortSelector(clickedCohortLabel) {
    if (clickedCohortLabel === "All Students") {
      setFilteredCohorts(studentData); // Show all students when "All Students" is clicked
    } else {
      const filteredLists = studentData.filter((ec) => {
        return ec.cohort.cohortCode === clickedCohortLabel;
      });
      setFilteredCohorts([...filteredLists]);
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-us", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };
  const [expandedFellowId, setExpandedFellowId] = useState(null);

  const expandShowMore = (eachFellowObjId) => {
   
      setExpandedFellowId(expandedFellowId === eachFellowObjId ? null : eachFellowObjId )
 
    }
  

  const cohortElements = filteredCohorts.map((eachFellowObj) => (
    <div key={eachFellowObj.id}>
      <h4>{eachFellowObj.names.preferredName}</h4>
      <p>Username: {eachFellowObj.username}</p>
      <p>Date of Birth: {formatDate(eachFellowObj.dob)}</p>
      <button onClick={() => expandShowMore(eachFellowObj.id)}>
        {expandedFellowId === eachFellowObj.id ? "Show Less" : "Show More..."}</button>
        {expandedFellowId === eachFellowObj.id && (
        <div className="expanded-info">
            <p>Additional Information for {eachFellowObj.names.preferredName}</p>
         {/* Codewars Section */}
        <h5>Codewars</h5>
        <p>Total: {eachFellowObj.codewars.current.total}</p>
        <p>Last Week: {eachFellowObj.codewars.current.lastWeek}</p>

        {/* Certifications Section */}
        <h5>Certifications</h5>
        <p>Resume: {eachFellowObj.certifications.resume ? "Yes" : "No"}</p>
        <p>LinkedIn: {eachFellowObj.certifications.linkedin ? "Yes" : "No"}</p>
        {/* Add more certification checks here... */}

        {/* Scores Section */}
        <h5>Scores</h5>
        <p>Assignments: {eachFellowObj.cohort.scores.assignments}</p>
        <p>Projects: {eachFellowObj.cohort.scores.projects}</p>
        <p>Assessments: {eachFellowObj.cohort.scores.assessments}</p>
         
        </div>
         )}
    </div>
  ));

  return (
    <>
      <div className="cohort-text">
        <h2> Choose a Class by Start Date {allCohorts} </h2>
      </div> 
      <h3 className="cohort-List"> {cohortElements} </h3>
    </>
  );
};

export default CohortList;
