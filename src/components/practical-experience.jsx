import { useState } from "react"
// eslint-disable-next-line react/prop-types
function PracticalExperience({submitted}) {
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [workStartDate, setWorkStartDate] = useState(null);
  const [workEndDate, setWorkEndDate] = useState(null);
  if(submitted) {
    return (
      <>
        <h2>Practical Experience</h2>
        <p>Company Name: {companyName}</p>
        <p>Position Title: {positionTitle}</p>
        <p>Responsibilities: {responsibilities}</p>
        <p>Start Date: {workStartDate}</p>
        <p>End Date: {workEndDate}</p>
      </>
    )
  } else {
    return (
      <>
        <h2>Practical Experience</h2>
        <div>
          <label htmlFor="company_name">Company Name: </label>
          <input type="text" id="company_name" value={companyName} onChange={(e) => {setCompanyName(e.target.value)}}/>
        </div>
        <div>
          <label htmlFor="position_title">Position Title: </label>
          <input type="text" id="position_title" value={positionTitle} onChange={(e) => {setPositionTitle(e.target.value)}}/>
        </div>
        <div>
          <label htmlFor="responsibilities">Responsibilities: </label>
          <input type="text" id="responsibilities" value={responsibilities} onChange={(e) => {setResponsibilities(e.target.value)}}/>
        </div>
        <div>
          <label htmlFor="study_start_date">Start Date: </label>
          <input type="date" id="study_start_date" value={workStartDate} onChange={(e) => {setWorkStartDate(e.target.value)}}/>
        </div>
        <div>
          <label htmlFor="study_end_date">End Date: </label>
          <input type="date" id="study_end_date" value={workEndDate} onChange={(e) => {setWorkEndDate(e.target.value)}}/>
        </div>
      </>
    )
  }

}

export default PracticalExperience