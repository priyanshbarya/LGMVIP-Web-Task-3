import React from 'react';
import StudentForm from "../component/StudentForm.jsx"
import StudentDetails from "../component/StudentDetails.jsx"
import '../styles/Home.css';
import Footer from '../component/Footer.jsx';

const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-header'>
        <p>Student Enrollment Form</p>
      </div>
      <div className='home-filler'>
        <StudentForm/>
        <div className='home-partition'>
        </div>
        <StudentDetails/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home