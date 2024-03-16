import React, { useState } from "react";
import "../styles/StudentForm.css";
const StudentForm = () => {
  const [name,setName]=useState("")
  const [email,setemail]=useState("")
  const [website,setWebsite]=useState("")
  const [imagelink,setImagelink]=useState("")
  const [gender,setGender]=useState("")
  const [skills,setSkills]=useState([]);

  return (
    <div className="form-container">
      <form action="">
        <div className="input-mg input-name">
          <label className="label-bold" htmlFor="">
            Name:
          </label>
          <input value={name} type="text" />
        </div>
        <div className="input-mg input-email">
          <label className="label-bold" htmlFor="">
            Email:
          </label>
          <input value={email} type="email" />
        </div>
        <div className="input-mg input-website">
          <label className="label-bold" htmlFor="">
            Website:
          </label>
          <input value={website} type="text" />
        </div>
        <div className="input-mg input-link">
          <label className="label-bold" htmlFor="">
            Image Link:
          </label>
          <input value={imagelink} type="text" />
        </div>
        <div className="input-gender">
          <label className="label-bold" htmlFor="">
            Gender:
          </label>
          <label htmlFor="">
            <input type="radio" />
            Male
          </label>
          <label htmlFor="">
            <input type="radio" />
            Female
          </label>
        </div>
        <div className="input-skills">
          <label className="label-bold" htmlFor="">
            Skills:
          </label>
          <label>
            <input type="checkbox" value="Java" />
            Java
          </label>
          <label>
            <input type="checkbox" value="HTML" />
            HTML
          </label>
          <label>
            <input type="checkbox" value="CSS" />
            CSS
          </label>
        </div>
        <div className="action-btn">
          <button className="enroll-btn">Enroll Student</button>
          <button className="clear-btn">Clear</button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;