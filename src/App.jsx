import { useState } from "react";
import info from "./defaultData";
import Display from "./display";
import PropTypes from "prop-types"
import "./App.css";

function Form({ handleSubmit, handleChange }) {
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="general-info-form">
          <h1 className="form-head">Personal</h1>

          <label htmlFor="fullName">Full Name</label>
          <input type="text" name="fullName" id="fullName" onChange={handleChange} placeholder="Anurag Uranw" />

          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" onChange={handleChange} placeholder="it'sfake@gmail.com" />

          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="text" name="phoneNumber" id="phoneNumber" onChange={handleChange} placeholder="+91 420 420 420" />

          <label htmlFor="address">Address</label>
          <input type="text" name="address" id="address" onChange={handleChange} placeholder="Chhattisgarh, India" />
        </div>

        <div className="education-info-form">
          <h1 className="form-head">Education</h1>

          <label htmlFor="school">School</label>
          <input type="text" name="school" id="school" onChange={handleChange} placeholder="White Room English Medium School, CE, AniTopia" />

          <label htmlFor="degree">Degree</label>
          <input type="text" name="degree" id="degree" onChange={handleChange} placeholder="B.Tech CSE" />

          <label htmlFor="college">College</label>
          <input type="text" name="college" id="college" onChange={handleChange} placeholder="Not your college, Yo City" />
        </div>

        <div className="experience-info-form">
          <h1 className="form-head">Experience</h1>

          <label htmlFor="company">Company</label>
          <input type="text" name="company" id="company" onChange={handleChange} placeholder="Umbrella Inc." />

          <label htmlFor="position">Position</label>
          <input type="text" name="position" id="position" onChange={handleChange} placeholder="UX & UI Designer" />

          <label htmlFor="location">Location</label>
          <input type="text" name="location" id="location" onChange={handleChange} placeholder="New York City, US" />

          <label htmlFor="description">Description</label>
          <input type="text" name="description" id="description" onChange={handleChange} placeholder="Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android" />

          <label htmlFor="startDate">Start Date</label>
          <input type="text" name="startDate" id="startDate" onChange={handleChange} placeholder="12/12/2012" />

          <label htmlFor="endDate">End Date</label>
          <input type="text" name="endDate" id="endDate" onChange={handleChange} placeholder="Present" />
        </div>

        <button type="reset">Clear</button>
        <button type="submit" id="submit-btn">Submit</button>

      </form>
    </>
  )
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

function App() {
  const [general, setGeneral] = useState(info.personalInfo);
  const [submitedGeneral, setSubmitedGeneral] = useState(general);

  const [education, setEducation] = useState(info.section.education);
  const [submitedEducation, setSubmitedEducation] = useState(education);

  const [experience, setExperience] = useState(info.section.experience);
  const [submitedExperience, setSubmitedExperience] = useState(experience);

  function handleChange(e) {
    const newGeneralData = { ...general, [e.target.name]: e.target.value };
    const newEducationData = { ...education, [e.target.name]: e.target.value };
    const newExperienceData = { ...experience, [e.target.name]: e.target.value };

    setGeneral(newGeneralData);
    setEducation(newEducationData);
    setExperience(newExperienceData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newSubmitedGeneral = { ...general };
    const newSubmitedEducation = { ...education };
    const newSubmitedExperience = { ...experience };

    setSubmitedGeneral(newSubmitedGeneral);
    setSubmitedEducation(newSubmitedEducation);
    setSubmitedExperience(newSubmitedExperience);
  }

  return (
    <>
      <div className="main-container">
        <div className="form-section">
          <Form handleChange={handleChange} handleSubmit={handleSubmit} />
        </div>
        <div className="resume-section">
          <Display general={submitedGeneral} education={submitedEducation} experience={submitedExperience} />
        </div>
      </div>
    </>
  );
}

export default App