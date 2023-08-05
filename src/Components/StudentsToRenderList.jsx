// <StudentsToRender studentObjToRender={eachStudentObj}/>

import studentData from "../data/data.json";
import { useState } from "react";
import IndiviualStudentCard from "./IndiviualStudentCard";



const StudentsToRenderList = () => {

  const [areDetailsShowing, setAreDetailsShowing] = useState(false);

  // console.log("state of toggle", areDetailsShowing);


  //   const date = new Date(dateString);
  //   return date.toLocaleDateString("en-us", {
  //     month: "long",
  //     day: "numeric",
  //     year: "numeric",
  //   });
  // };

  const renderAllStudents = studentData.map(
    (eachStudentObj) => {
 

      return (
       <div className="">
        <IndiviualStudentCard eachStudentObj={eachStudentObj}/>
          
          {/* seeShowMoreOrShowLess ? "Show More...": "Show Less..." */}
          </div>
      );
    }

  );
  return renderAllStudents;
};
export default StudentsToRenderList;
