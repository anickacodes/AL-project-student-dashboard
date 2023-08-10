import "./App.css";
import { useState } from "react";
import studentData from "./data/data.json";
import CohortList from "./Components/CohortList";


function App() {
  


  return (
    <>
      <div className="dashboard">
        <header>
          <h1>Student Dashboard</h1>
        </header>
      </div>
      <main>
       
        <CohortList />
      </main>
    </>
  );
}

export default App;
