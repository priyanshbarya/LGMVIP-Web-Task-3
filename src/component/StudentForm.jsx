import React, { useState } from "react";
import "../styles/StudentForm.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StudentForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [imagelink, setImagelink] = useState("");
  const [gender, setGender] = useState("");
  const [skills, setSkills] = useState({
    Java: false,
    HTML: false,
    CSS: false,
  });

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleCheckbox = (e) => {
    const { name, checked } = e.target;
    setSkills({ ...skills, [name]: checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const gettingSkills = Object.entries(skills)
      .filter(([key, value]) => value === true)
      .map(([key, value]) => key);

    if (!name || !email || !website || !imagelink || !gender) {
      toast.error("Fill all required Fields", {
        theme: "dark",
      });
      return;
    }

    const studentDetails = {
      name: name,
      email: email,
      website: website,
      imagelink: imagelink,
      gender: gender,
      skills: gettingSkills,
    };
    const prevDetails = JSON.parse(localStorage.getItem("studentDetail")) || [];
    prevDetails.push(studentDetails);
    localStorage.setItem("studentDetail", JSON.stringify(prevDetails));

    toast.success("Student Enrolled", {
      theme: "dark",
    });
    setName("");
    setEmail("");
    setImagelink("");
    setWebsite("");
    setGender("");
    const clearedSkills = {};
    for (const key in skills) {
      clearedSkills[key] = false;
    }
    setSkills(clearedSkills);
  };

  const handleClear = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setImagelink("");
    setWebsite("");
    setGender("");
    const clearedSkills = {};
    for (const key in skills) {
      clearedSkills[key] = false;
    }
    setSkills(clearedSkills);
  };

  return (
    <>
      <ToastContainer />
      <div className="form-container">
        <form action="">
          <div className="input-mg input-name">
            <label className="label-bold" htmlFor="">
              Name:
            </label>
            <input
              value={name}
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="input-mg input-email">
            <label className="label-bold" htmlFor="">
              Email:
            </label>
            <input
              value={email}
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="input-mg input-website">
            <label className="label-bold" htmlFor="">
              Website:
            </label>
            <input
              value={website}
              type="text"
              onChange={(e) => {
                setWebsite(e.target.value);
              }}
            />
          </div>
          <div className="input-mg input-link">
            <label className="label-bold" htmlFor="">
              Image Link:
            </label>
            <input
              value={imagelink}
              type="text"
              onChange={(e) => {
                setImagelink(e.target.value);
              }}
            />
          </div>
          <div className="input-gender">
            <label className="label-bold" htmlFor="">
              Gender:
            </label>
            <input
              type="radio"
              value="Male"
              checked={gender === "Male"}
              onChange={handleGenderChange}
            />
            <label htmlFor="">Male</label>
            <input
              type="radio"
              value="Female"
              checked={gender === "Female"}
              onChange={handleGenderChange}
            />
            <label htmlFor="">Female</label>
          </div>
          <div className="input-skills">
            <label className="label-bold" htmlFor="">
              Skills:
            </label>
            <input
              type="checkbox"
              name="Java"
              value="Java"
              checked={skills.Java}
              onChange={handleCheckbox}
            />
            <label>Java</label>
            <input
              type="checkbox"
              name="HTML"
              checked={skills.HTML}
              onChange={handleCheckbox}
            />
            <label>HTML</label>
            <input
              type="checkbox"
              name="CSS"
              checked={skills.CSS}
              onChange={handleCheckbox}
            />
            <label>CSS</label>
          </div>
          <div className="action-btn">
            <button className="enroll-btn" type="submit" onClick={handleSubmit}>
              Enroll Student
            </button>
            <button className="clear-btn" onClick={handleClear}>
              Clear
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default StudentForm;
