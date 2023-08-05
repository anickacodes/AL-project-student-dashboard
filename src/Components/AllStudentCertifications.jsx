import studentData from "../data/data.json";

// console.log(studentData)
const AllStudentCertifications = () => {

  const studentCertifications = studentData.map((eachStudentCert) => {
    return(   <section>
      Resume:{" "}
      {eachStudentCert.certifications.resume ? (
        <h5>On Track: ✅</h5>
      ) : (
        <h5>Off Track: ❌</h5>
      )}
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
      )}
      {/* <a
        onClick={(syntheticE) => {
            // individualShowMore(!setIndividualShowMore)
          handleShowMoreToggle();
        }}
      >
        {" "}
        {individualStudentShowMore ?  "Show Less ..." :  "Show More ..." }
      </a> */}
    </section>
    )
  });

  return (
    <h2>I want to return each students certifications in the Show More tag --- not all certifications in each student</h2>
  );
};

export default AllStudentCertifications;
