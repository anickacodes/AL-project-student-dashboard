import studentData from "../data/data.json";
import "./CohortList.css"


const CohortList = () => {
  let eachCohortDate = studentData.map(function (e) {
    // console.log(e.cohort.cohortCode)
    return (
      <div>
        Here:
        {/* {e.cohort.cohortCode === "Winter2026" ? <StudentsToRender cohort={'Winter2026'} /> : <></>} broke my code 🙃 */}
        {/* {e.cohort.cohortCode === "Winter2026" ? <StudentsToRender key={Winter2026} /> : <></>} this loads on the side of studentstorender */}
        {e.cohort.cohortCode === "Winter2026" ? <p id="winter26Date"><strong>Winter2026</strong> </p> : <></>}
        {/* LOADS TO DOM AS TEXT, OFC BUT I WANT TO ADD IT TO STUDENTSTORENDER -  */}
        {e.cohort.cohortCode === "Spring2026" ? <p id="spring26Date"><strong>Spring2026</strong></p> : <></>}
        {e.cohort.cohortCode === "Summer2026" ? <p id="summer26Date"><strong>Summer2026</strong></p> : <></>}
        {e.cohort.cohortCode === "Fall026" ? <p id="fall26Date"><strong>Fall2026</strong></p> : <></>}

        {e.cohort.cohortCode === "Winter2025" ? <p id="winter25Date"><strong>Winter2025</strong></p> : <></>}
        {e.cohort.cohortCode === "Spring2025" ? <p id="spring25Date"><strong>Spring2025</strong></p> : <></>}
        {e.cohort.cohortCode === "Summer2025" ? <p id="summer25Date"><strong>Summer2025</strong></p> : <></>}
        {e.cohort.cohortCode === "Fall2025" ? <p id="fall25Date"><strong>Fall2025</strong></p> : <></>}
 
{/* An extra E/mpty here is returning --- why */}
        
      </div>
    );
  });
  return eachCohortDate;
};

export default CohortList;
