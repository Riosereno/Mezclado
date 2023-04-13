import React, { useState } from "react";
import{useDispatch} from 'react-redux';
import { loginService } from '../../services/loginService';
import { logIn, updateToken, updateUserData } from "../../store/slices/user.slice";
const loginForm = () => {
  const dispatch = useDispatch();
  const [toggleType, setToggleType] = useState('password');
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const handleClickType = () => {
    if (toggleType === "password") setToggleType("text");
    else if (toggleType === "text") setToggleType("password");
  };
  
  const handleChange = (e) =>{
  const {name, value}=e.target;

    setLoginFormData({
      ...loginFormData,
      [name]: value,
    });
  };
  const login =async()=>{
const LoginData = await loginService(loginFormData);
const userData = {
  id: LoginData.data.user.id,
  firstName: LoginData.data.user.firstName,
  lastName: LoginData.data.user.lastName,
  email: LoginData.data.user.email,
};
const token = LoginData.token;
dispatch(updateUserData(userData));
dispatch(updateToken(token));
dispatch(logIn());
  };
  const handleSubmit =(e)=>{
    e.preventDefault();
    login();
  };
  return (
    <>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <div>
          <label htmlFor="emailId">Email:</label>
          <input
            type="email"
            id="emailId"
            placeholder="example@miemail.com"
            name="email"
            value={loginFormData.email}
            required
          />
        </div>
        <div>
          <label htmlFor="passwordId">Password:</label>
          <div>
            <input
              type={toggleType}
              id="passwordId"
              name="password"
              value={loginFormData.password}
              required
            />
            <button type="button" onClick={handleClickType}>
              <i className="bx bxs-low-vision"></i>
            </button>
          </div>
        </div>
        <button type="submit" className="bg-blue-500 p-2 rounded-md
        hover:bg-blue200">Log In</button>
      </form>
    </>
  );
};

export default loginForm;
