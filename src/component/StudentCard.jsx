import React, { useEffect, useState } from "react";
import "../styles/StudentCard.css";
const StudentCard = (props) => {
  const [classes, setClasses] = useState("card-container");

  useEffect(() => {
    if (props.idx % 2 === 0) {
      setClasses("card-container-conditonal");
    }
  }, [classes, props.idx]);

  return (
    <div className={classes}>
      <div className="student-fields">
        <p>{props.name}</p>
        <p>{props.gender}</p>
        <p>{props.email}</p>
        <p>{props.website}</p>
        {props.skills.map((e, idx) => {
          return <p>{e}</p>;
        })}
      </div>
      <div className="student-image">
        <img src={props.imagelink} alt="" />
      </div>
    </div>
  );
};

export default StudentCard;
