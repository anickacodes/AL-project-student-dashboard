// <StudentsToRender studentObjToRender={eachStudentObj}/>

import studentData from "../data/data.json";
import { useState } from "react";
import IndiviualStudentCard from "./IndiviualStudentCard";



const ListOfStudentsToRender = () => {

  const [areDetailsShowing, setAreDetailsShowing] = useState(false);
//shouldnt this be the 1-1 section ...
  // console.log("state of toggle", areDetailsShowing);

  const renderAllStudents = studentData.map(
    (eachStudentObj) => 
    
      (
       <div className="Student-Card">
     
        <IndiviualStudentCard eachStudentObj={eachStudentObj} />
          </div>
      )


  )
  return renderAllStudents;
};
export default ListOfStudentsToRender;
