import { useState } from "react"
// eslint-disable-next-line react/prop-types
function EducationalExperience({submitted}) {
  const [schoolName, setSchoolName] = useState("");
  const [major, setMajor] = useState("");
  const [studyStartDate, setStudyStartDate] = useState(null);
  const [studyEndDate, setStudyEndDate] = useState(null);
  if(submitted) {
    return (
      <>
        <h2>Educational Experience</h2>
        <p>School Name: {schoolName}</p>
        <p>Major: {major}</p>
        <p>Start Date: {studyStartDate}</p>
        <p>End Date: {studyEndDate}</p>
      </>
    )
  } else {
    return (
      <>
        <h2>Educational Experience</h2>
        <div>
          <label htmlFor="school_name">School Name: </label>
          <input type="text" id="school_name" value={schoolName} onChange={(e) => {setSchoolName(e.target.value)}} />
        </div>
        <div>
          <label htmlFor="major">Major: </label>
          <input type="text" id="emajormail" value={major} onChange={(e) => {setMajor(e.target.value)}}/>
        </div>
        <div>
          <label htmlFor="study_start_date">Start Date: </label>
          <input type="date" id="study_start_date" value={studyStartDate} onChange={(e) => {setStudyStartDate(e.target.value)}}/>
        </div>
        <div>
          <label htmlFor="study_end_date">End Date: </label>
          <input type="date" id="study_end_date" value={studyEndDate} onChange={(e) => {setStudyEndDate(e.target.value)}}/>
        </div>
      </>
    )
  }
}

export default EducationalExperience