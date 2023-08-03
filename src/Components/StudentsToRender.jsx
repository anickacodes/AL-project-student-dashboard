import studentData from "../data/data.json";

const StudentsToRender = () => {
  const renderAllStudents = studentData.map(
    (eachStudentObj) => {
      return (
        <>
        <div className="Student">
          <img
            src={eachStudentObj.profilePhoto}
            alt={`${eachStudentObj.names.preferredName}`}
          />
          <h4>{eachStudentObj.names.preferredName}</h4>
          <p>{eachStudentObj.username}</p>
          <span>Birthday: {eachStudentObj.dob}</span> <br />
          Resume:{" "}
          {eachStudentObj.certifications.resume ? (
            <h1>On Track</h1>
          ) : (
            <p>Sike</p>
          )}
          <a href="#">Show More...</a>
        </div>
        </>
      );
    }
    //   console.log(studentsToRender)
    //  console.log(studentData[0].names)
  );
  return renderAllStudents;
};
export default StudentsToRender;
