import { useState } from "react";

export function Form(){
  const [formData,setFormData]=useState({
    username:'',
    email:'',
    password:'',
  });

  const [submitted,setSubmitted]=useState(false);

  const handleChange =(e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value,
    });
  };

  const handleSubmit =(e) => {
    e.preventDefault();

    if(
      formData.username==='' ||
      formData.email==='' ||
      formData.password===''
    ){
      alert('All fields are required!');
      return;
    }

    if(formData.password.length<6){
      alert('Password must be at least 6 characters long!');
      return;
    }

    setSubmitted(true);
  };

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter your name"
        />

        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter password"
        />

        <button type="submit">Submit</button>

        <h2>Hello {formData.username || 'stranger'}!</h2>
        <h2>Your Email ID is {formData.email || 'yet to be entered!'}</h2>
      </form>

      {submitted && (
        <div>
          <h1>Success!</h1>
          <h3>Form Submitted Successfully</h3>
          <p>Name : {formData.username}</p>
          <p>Email : {formData.email}</p>
        </div>
      )}
    </div>
  );
}