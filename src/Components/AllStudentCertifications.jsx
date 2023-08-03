import studentData from "../data/data.json";

// console.log(studentData)
const AllStudentCertifications = () => {

  const studentCertifications = studentData.map((eachStudentCert) => {
    return( <div>{eachStudentCert.certifications.resume}</div>);
  });

  return studentCertifications;
};

export default AllStudentCertifications;
