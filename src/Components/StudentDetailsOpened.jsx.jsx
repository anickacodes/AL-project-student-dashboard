// import cohortList from "./CohortList"
// import "./StudentDetails.css"
// "certifications"
// "codewars"
// "cohort.scores"
import studentData from "../data/data.json";

const StudentDetailsOpened = studentData.filter((eachStudentCert) => {
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
});

console.log(StudentDetailsOpened);

export default StudentDetailsOpened;
