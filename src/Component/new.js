import React,{useState} from 'react';

const  DynamicForm=() => {

    const [formValue, setformValue] = useState({
        uname:"",
        email: "",
        mobilenumber: ""
      });
      const [error, setError] = useState({
        uname:"",
        email: "",
        mobilenumber: ""
      });
    
    const Data={
      
    "Field":[
    {
        "text":"text",
        "name":"uname",
        "required":true,
        "placeholder":"Enter Your name"

        },
    {
        "text":"email",
        "name":"email",
        "required":true,
        "placeholder":"Enter Your email"
    

    },
    {
        "text":"text",
        "name":"mobilenumber",
        "required":true,
        "placeholder":"Enter Your Phn No"
    
    }
]
}
  
  const handleChange = (event) => {
      let temp= {...formValue};
      temp[event.target.name]= event.target.value;
    setformValue(temp);
  };
  const SubmitForm =() =>
  {
    alert("Submitted Successfully")
 
}

 return(
 <div className='Form-page'>
     <form onSubmit={SubmitForm}>
    {
      Data.Field.map((post,index) => {
        return(
          <div key={index}>
        <label>{post.name}</label>
        <input type={post.type} required={post.required} value={formValue[post.name]} onChange={(e)=>handleChange(e)}/>
        </div>
        
        )
      })
    }
  <button >Submit</button>
  </form>
</div> 
  )} 

export default DynamicForm;