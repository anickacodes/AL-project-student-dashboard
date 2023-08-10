import studentData from "../data/data.json";
import { useState } from "react";
import "./CohortList.css";

const CohortList = () => {
  const [filteredCohorts, setFilteredCohorts] = useState(studentData);
  const [totalStudents, setTotalStudents] = useState(studentData.length)
  const [titlePage, setTitlePage] = useState("")
  const cohort = [];
  filteredCohorts.forEach((eachFellowObj) => {
    const certifications = eachFellowObj.certifications;
    const offTrack = Object.values(certifications).some(
      (value) => value === false
    );
    cohort.push({
      fellowId: eachFellowObj.id,
      status: offTrack ? "Off Track" : "On Track",
    });
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
      setTotalStudents(studentData.length)
    } else {
      const filteredLists = studentData.filter((ec) => {
        return ec.cohort.cohortCode === clickedCohortLabel;
      });
      setFilteredCohorts([...filteredLists]);
      setTotalStudents(filteredLists.length)
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
    setExpandedFellowId(
      expandedFellowId === eachFellowObjId ? null : eachFellowObjId
    );
  };

  const getFellowStatus = (fellowId) => {
    const fellow = cohort.find((f) => f.fellowId === fellowId);
    return fellow ? fellow.status : "Unknown";
  };
  filteredCohorts.sort((a, b) => {
    const startDateA = new Date(a.cohort.cohortStartDate);
    const startDateB = new Date(b.cohort.cohortStartDate);
    return startDateA - startDateB;
  });
  const cohortElements = filteredCohorts.map((eachFellowObj) => (
    <div key={eachFellowObj.id}>
      <img src={eachFellowObj.profilePhoto} />
      <h4>{eachFellowObj.names.preferredName}</h4>
      <p>Username: <span> {eachFellowObj.username}</span> </p>
      <p>Date of Birth: <span> {formatDate(eachFellowObj.dob)} </span> </p>
      <button onClick={() => expandShowMore(eachFellowObj.id)}>
        {expandedFellowId === eachFellowObj.id ? "Show Less" : "Show More..."}
      </button>
      {expandedFellowId === eachFellowObj.id && (
        <div className="expanded">
          <p>Additional Information for {eachFellowObj.names.preferredName}</p>
          <br />
          <div className="expanded-info">
            <section className="codewars-section">
              <h5> Codewars  </h5>
              <p>Current Total: {eachFellowObj.codewars.current.total}</p>
              <p>Last Week: {eachFellowObj.codewars.current.lastWeek}</p>
              <p>Goal: {eachFellowObj.codewars.goal.total}</p>
            </section>

            <section className="certificates-section">
              <h5>Certifications</h5>
              <p>Resume: {eachFellowObj.certifications.resume ? "✅" : "❌"}</p>
              <p>
                LinkedIn: {eachFellowObj.certifications.linkedin ? "✅" : "❌"}
              </p>
              <p>Github: {eachFellowObj.certifications.github ? "✅" : "❌"}</p>
              <p>
                Mock Interview:{" "}
                {eachFellowObj.certifications.mockInterview ? "✅" : "❌"}
              </p>
            </section>

            <section className="scores-section">
              <h5>Scores</h5>
              <p>Assignments: {eachFellowObj.cohort.scores.assignments}</p>
              <p>Projects: {eachFellowObj.cohort.scores.projects}</p>
              <p>Assessments: {eachFellowObj.cohort.scores.assessments}</p>
            </section>
            <h4>Status: {getFellowStatus(eachFellowObj.id)}</h4>
          </div>
        </div>
      )}
    </div>
  ));

  return (
    <>
      

        <div className="cohort-text">
          <h2> Choose a Class by Start Date {allCohorts} </h2>
        </div>

        <div className="cohort-List">
        <h3> Total Students <span>{totalStudents}</span> </h3>
          {cohortElements} 
        </div>
        
 
    </>
  );
};

export default CohortList;
