import { useState } from "react"
/* eslint-disable react/prop-types */

function GeneralInformation({submitted}) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  if(submitted) {
    return (
      <>
        <h2>General Information</h2>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone Number: {number}</p>
      </>
    )
  } else {
    return (
      <>
        <h2>General Information</h2>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" value={name} onChange={(e) => {setName(e.target.value)}}/>
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
        </div>
        <div>
          <label htmlFor="phone">Phone Number: </label>
          <input type="text" id="phone" value={number} onChange={(e) => {setNumber(e.target.value)}}/>
        </div>
      </>
    )
  }
}

export default GeneralInformation