
import IndiviualStudentCard from "./IndiviualStudentCard";

const ListOfStudentsToRender = ({ studentArray }) => {


  const renderAllStudents = studentArray.map((eachStudentObj) => (

    <div className="Student-Card">
      <IndiviualStudentCard eachStudentObj={eachStudentObj} />
    </div>

  ));
  return renderAllStudents;
};
export default ListOfStudentsToRender;
