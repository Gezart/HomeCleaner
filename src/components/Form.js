import React from 'react'
import { useState } from 'react'


const Form = () => {
  const url = `http://3.74.252.24/wp-json/contact-form-7/v1/contact-forms/578/feedback`
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  // const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("")





  const sendEmail = async (e) => {

    e.preventDefault();

    const formData = new FormData();

    formData.append("your-first-name", firstName);
    formData.append("your-last-name", lastName);
    formData.append("your-email", email);
    formData.append("your-mesagge", message);

    try {
      let response = await fetch(url, {
        method: "POST",
        headers: {
          "Authorization": "Basic YWRtaW46QWRtaW4xMjM="
        },
        body: formData
      })

      let jsonResponse = await response.json()

      // console.log(jsonResponse)
    } catch (error) {
      // console.log(error)
    }






  }


  return (
    <div className="form">
      <form>
        <div className="name">
          <div className="form-data">
            <label htmlFor="your-first-name">First Name</label>
            <input type="text" id="your-first-name" name="your-first-name" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
          </div>

          <div className="form-data">
            <label htmlFor="your-last-name">Last Name</label>
            <input type="text" id="your-last-name" name="your-last-name" onChange={(e) => setLastName(e.target.value)} value={lastName} />
          </div>
        </div>
        <div className="form-data">
          <label htmlFor="your-email">Email</label>
          <input type="text" id="your-email" name="your-email" onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>

        <div className="form-data">
          <label htmlFor="your-message">Message</label>
          <textarea type="textarea" id="your-message" name="your-message" onChange={(e) => setMessage(e.target.value)} value={message} />

        </div>
        <button onClick={sendEmail}>
          <span>Submit</span>
          <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.75 0.75L6 6L0.75 11.25" stroke="white" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </form>
    </div>
  )
}

export default Form



