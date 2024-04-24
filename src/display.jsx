import PropTypes from "prop-types";
import "./App.css";

function Display({ general, education, experience }) {
  return (
    <div className="resume">
      <header>
        <h1>{general.fullName}</h1>
        <ul className="personal-section">
          <li>
            <span className="material-symbols-outlined">
              mail
            </span>
            {general.email}
          </li>
          <li>
            <span className="material-symbols-outlined">
              call
            </span>
            {general.phoneNumber}
          </li>
          <li>
            <span className="material-symbols-outlined">
              location_on
            </span>
            {general.address}
          </li>
        </ul>
      </header>

      <h2 className="section-head">Education</h2>
      <div className="education-section">
        <h3>{education.school}</h3>
        <h2>{education.degree}</h2>
        <h3>{education.college}</h3>
      </div>

      <h2 className="section-head">Experience</h2>
      <div className="experience-section">
        <div className="date-location">
          <h4>{experience.startDate} - {experience.endDate}</h4>
          <h4>{experience.location}</h4>
        </div>
        <div className="job-desc">
          <h2>{experience.company}</h2>
          <h3>{experience.position}</h3>
          <h3>{experience.description}</h3>
        </div>
      </div>
    </div>
  )
}

Display.propTypes = {
  general: PropTypes.object.isRequired,
  education: PropTypes.object.isRequired,
  experience: PropTypes.object.isRequired,
};

export default Display;