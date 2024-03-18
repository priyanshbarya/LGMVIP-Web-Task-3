import React, { useEffect, useState } from "react";
import "../styles/StudentDetails.css";
import StudentCard from "./StudentCard.jsx";

const StudentDetails = () => {
  const [studentDetails, setStudentDetails] = useState([]);
  useEffect(() => {
    const details = localStorage.getItem("studentDetail");
    if (details) {
      setStudentDetails(JSON.parse(details));
    } else {
      setStudentDetails([]);
    }
  }, [studentDetails]);
  return (
    <div className="details-container">
      <p className="details-top-header">Enrolled Students</p>
      <div className="details-cards-container">
        <div className="details-heading">
          <p>Description</p>
          <p>Image</p>
        </div>

        {studentDetails.length ? (
          studentDetails.map((e, idx) => {
            return (
              <StudentCard
                key={idx}
                idx={idx}
                name={e.name}
                email={e.email}
                website={e.website}
                imagelink={e.imagelink}
                gender={e.gender}
                skills={e.skills}
              />
            );
          })
        ) : (
          <div className="no-student">
            <p>*No Student Enrolled</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentDetails;
