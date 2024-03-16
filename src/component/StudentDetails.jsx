import React from "react";
import "../styles/StudentDetails.css";
import obj from "../data.js";
import StudentCard from "./StudentCard.jsx";

const StudentDetails = () => {
  return (
    <div className="details-container">
      <p className="details-top-header">Enrolled Students</p>
      <div className="details-cards-container">
        <div className="details-heading">
          <p>Description</p>
          <p>Image</p>
        </div>
        {/* <div className="student-description">
        <p>No Student Enrolled</p>
        </div> */}

        {
          obj.map((e,idx)=>{
            return <StudentCard idx={idx} name={e.name} email={e.email} website={e.website} imagelink={e.imagelink} gender={e.gender} skills={e.skills}/>
          })
        }
      </div>
    </div>
  );
};

export default StudentDetails;
