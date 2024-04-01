import { useState } from "react"
import EducationalExperience from "./educational-experience"
import GeneralInformation from "./general-information"
import PracticalExperience from "./practical-experience"



function Form() {
  const [submitted, setSubmitted] = useState(false);
  function edit() {
    setSubmitted(false);
  }
  
  function submit() {
    setSubmitted(true);
  }
  return (
    <>
      <h1>CV Application</h1>
      <form>
        <GeneralInformation submitted={submitted} />
        <EducationalExperience submitted={submitted} />
        <PracticalExperience submitted={submitted} />
      </form>
      <button type="button" onClick={edit}>Edit</button>
      <button type="button" onClick={submit}>Submit</button>
    </>
  )
}

export default Form