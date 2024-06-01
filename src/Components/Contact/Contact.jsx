import React from 'react'
import './Contact.css'
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "459cb990-efa1-40d3-a07d-56d5d131b36e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  }   
  return (
    <div className='contact' name='contact'>
            <h1>Fill Up This Form</h1>
        <form onSubmit={onSubmit}>
          <div className="name">
            <label>First Name</label>
            <input type="text" placeholder='First Name' required/>
            <label>Last Name</label>
            <input type="text" placeholder='Last Name' required/>
          </div>
          <label>Email Address</label>
          <input type="text" placeholder='Email Address' class='inputs' required/>
          <label>Phone Number</label>
          <input type="text" placeholder='Phone Number' class='inputs' required/>
          <button type='submit'>Submit</button>
        </form>
        <span>{result}</span>
    </div>
  )
}

export default Contact