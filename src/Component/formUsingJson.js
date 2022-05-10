import React, { useState } from 'react';
import fieldInputs from './fieldInputs.json'
const D_form = () => {
    const [formdata, setFormData] = useState(fieldInputs)
    const handleChange = ((event, i) => {
        let data = { ...formdata }
        data.field[i]["value"] = event.target.value
        setFormData({ ...formdata, data })
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(Validate())
        if (Validate()) {
            clearvalues()
            alert("Form Submitted")
        }
    }
    const Validate = () => {
        let formIsValid = true;
        let val = { ...formdata }
        formdata.field.map((input, index) => {

            if (input.name == "uname") {
                if (input.value.length === 0) {
                    formIsValid = false
                    val.field[index].error = "Enter the Name"

                }
                else {
                    if (!input.value.match((/^[a-zA-Z]*$/))) {
                        formIsValid = false
                        val.field[index].error = "Name only contains Alphabets"

                    }
                    else {
                        val.field[index].error = ""

                    }
                }
                setFormData({ ...formdata, val })
            }
            if (input.name === "email") {
                if (input.value.length == 0) {
                    formIsValid = false
                    val.field[index].error = "enter the email"

                }
                else {
                    val.field[index].error = ""

                }
                setFormData({ ...formdata, val })
            }
            if (input.name === "mobile") {
                if (input.value.length == 0) {
                    formIsValid = false
                    val.field[index].error = "Enter the mobile number"

                }
                else {
                    val.field[index].error = ""


                    if (!input.value.match(/^[0-9]{10}$/)) {
                        formIsValid = false
                        val.field[index].error = "Mobile number must contain 10 digits"

                    }
                    else {
                        val.field[index].error = ""

                    }
                }
                setFormData({ ...formdata, val })
            }
            if (formIsValid == false) {
                return formIsValid
            }
           
        })
        return formIsValid
    }
    const clearvalues=()=>
    {
        let temp = {...formdata}
        for(let i=0;i<formdata.field.length;i++)
        {
            temp.field[i].value=""
            temp.field[i].error=""
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            {
                formdata.field.map((inputfield, index) => {
                    return (

                        <div key={index}>
                            <label>{inputfield.label}</label>
                            <input type={inputfield.type}
                                name={inputfield.name}
                                value={inputfield.value}
                                placeholder={inputfield.placeholder}
                                onChange={(e) => handleChange(e, index)} />
                            <div className='error'>{inputfield.error}</div>
                        </div>
                    )
                })}
            <input type="submit" value="submit" />
        </form>
    )

}
export default D_form;