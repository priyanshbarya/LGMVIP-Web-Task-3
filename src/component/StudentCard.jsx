import React, { useEffect, useState } from "react";
import "../styles/StudentCard.css";
import { Link } from "react-router-dom";
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
        <p className="student-name">{props.name}</p>
        <p className="student-gender">{props.gender}</p>
        <p className="student-email">{props.email}</p>
        <Link
          to={"https://" + props.website}
          className="student-website"
          value={props.website}
        >
          {props.website}
        </Link>
        {props.skills.length ? (
          props.skills.map((e, idx) => {
            return idx !== props.skills.length - 1 ? (
              <p className="student-skills">{e + ", "}</p>
            ) : (
              <p className="student-skills">{e}</p>
            );
          })
        ) : (
          <></>
        )}
      </div>
      <div className="student-image">
        <img src={props.imagelink} alt="" />
      </div>
    </div>
  );
};

export default StudentCard;
