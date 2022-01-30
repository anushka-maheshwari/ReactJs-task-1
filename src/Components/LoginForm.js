import { useState } from "react";
import {useNavigate} from 'react-router-dom';
function LoginForm() {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  let navigate=useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate(formValues);
    if(formValues.username!==''&& formValues.email!==''&& formValues.password!=='' && formValues.password.length>4 && formValues.password.length<10)
    {
      console.log("hello");
      localStorage.setItem('user',JSON.stringify(formValues))
      navigate('/dashboard');
    }
  };
  

  const validate = (values) => {
    if (!values.username) {
      return alert("Username is required!");
    }
    if (!values.email) {
     return alert("Email is required!");
    }
    if (!values.password) {
      return alert("Password is required");
    } 
    if (values.password.length < 4) {
      return alert("Password must be more than 4 characters");
    } 
    if (values.password.length > 10) {
      return alert("Password cannot exceed more than 10 characters");
    }
  };

  return (
    <div>
        <div className="grid container ">
        <h1>Login Form</h1>
        </div>
        <div className="container">
        <form>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input type="text" name="username"  placeholder="Username" value={formValues.username} onChange={handleChange}/>
          </div>
          <div className="field">
            <label>Email</label>
            <input type="email" name="email" placeholder="Email" value={formValues.email} onChange={handleChange}/>
          </div>
          <div className="field">
            <label>Password</label>
            <input type="password" name="password" placeholder="Password" value={formValues.password}onChange={handleChange}/>
          </div>
        </div>
        </form>
        <div className=" grid container ">
        <button  onClick={handleSubmit} className="fluid ui button blue">Login</button>
      </div>
        
    </div>
    </div>
  );
}

export default LoginForm;