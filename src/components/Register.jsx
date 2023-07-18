import React from 'react'
import { useState } from 'react';

function Register() {
    const [formdata, setFormdata] = useState({
        email: '',
        password: '',
      });
      const handleSubmit = async() => {
        const response = await fetch('https', {
          method: 'POST',
          headers: {
            
          },
          body: JSON.stringify(formdata)
    
        })
      }
  return (
    <div>
      <h1>Register</h1>
      <div>
        <label htmlFor="">Email: </label>
        <input type="text" value={formdata?.email} onChange={(e) => (setFormdata({
          ...formdata,
          email: e.target.value
        }))}/>
        <br />
        <br />
        <label htmlFor="">password: </label>
        <input type="text" placeholder='password'  value={formdata?.password} onChange={(e) => (setFormdata({
          ...formdata,
          password: e.target.value
        }))}/>
        
        <button onClick={() => handleSubmit()}>Submit</button>
        <a href="/login">Login</a>
      </div>
    </div>
  )
}

export default Register