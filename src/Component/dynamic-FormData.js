import React, { useState } from 'react'

const Dynamicform = () => {

  const [Details, setdetails] = useState([{ uname: "", email: "", mobile: "" }])
  const [error, setError] = useState([{ uname: "", email: "", mobile: "" }])

  const handleChange = (index, event) => {
    let data = [...Details];
    data[index][event.target.name] = event.target.value;
    setdetails(data)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Validate()) {
      console.log(Details)
      setdetails([{
        uname: "",
        email: "",
        mobile: ""

      }])
      setError([{
        uname: "",
        email: "",
        mobile: ""

      }])
      alert("form submited")
    }
  }
  const Validate = () => {
    let formIsValid = true
      Details.map((input, index) => {

        const { uname, email, mobile } = input;
        let err_data = [...error];
        if (uname.length == 0) {
          formIsValid = false
          err_data[index]["uname"] = "Enter the Name"
          setError(err_data)
        }
         else {
          if (!uname.match((/^[a-zA-Z]*$/))) {
            formIsValid = false
            err_data[index]["uname"] = "Name only contains Alphabets"
            setError(err_data)
          }
          else{
          err_data[index]["uname"] = ""
          setError(err_data)
          }
        }
        
        if (email.length == 0) {
          formIsValid = false
          err_data[index]["email"] = "enter the email"
          setError(err_data)
        }
        else {
          err_data[index]["email"] = ""
          setError(err_data)
        }
        if (mobile.length == 0) {
          formIsValid = false
          err_data[index]["mobile"] = "Enter the mobile number"
          setError(err_data)
        }
        else {
          err_data[index]["mobile"] = ""
          setError(err_data)
        }
        if (!mobile.match(/^[0-9]{10}$/)) {
          formIsValid = false
          err_data[index]["mobile"] = "Mobile number must contain 10 digits"
          setError(err_data)
        }
        else {
          err_data[index]["mobie"] = ""
          setError(err_data)
        }
        if (formIsValid == false) {
          return formIsValid
        }
      })
    return formIsValid
  }
  const addFields = (e) => {
    e.preventDefault();
    let newfield = { uname: "", email: "", mobile: "" }
    let newerror = { uname: "", email: "", mobile: "" }
    setdetails([...Details, newfield])
    setError([...error, newerror])
    console.log(newfield)
  }

  const removeFields = (index) => {
    let data = [...Details];
    data.splice(index, 1)
    let err = [...error];
    err.splice(index, 1)
    setdetails(data)
    setError(err)
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        {Details.map((input, index) => {
          // let {uname,email,mobile}=input
          return (
            <div key={index}>
              {/* <h3>person{index}+1</h3> */}
              <label>Name</label>
              <input
                type="text"
                name="uname"
                placeholder='Name'
                value={input.uname || ''}
                onChange={event => handleChange(index, event)}
              />
              <div className='error'>{error[index]["uname"]}</div>
              <label>Email</label>
              <input
                type="email"
                name='email'
                placeholder='Email'
                value={input.email}
                onChange={event => handleChange(index, event)}
              />
              <div className='error'>{error[index]["email"]}</div>
              <label>Mobile</label>
              <input
                type="text"
                name='mobile'
                placeholder='mobile no'
                value={input.mobile}
                onChange={event => handleChange(index, event)}
              />
              <div className='error'>{error[index]["mobile"]}</div>
              {/* <button onClick={removeFields(index)}>Remove</button> */}
              <button className='remove' onClick={() => removeFields(index)}>Remove</button>
            </div>
          )
        })}
        <button className='add' onClick={addFields}>Add More..</button><span>  </span>
        <input type="submit" value="submit" />
      </form>

    </div>
  )
}
export default Dynamicform;