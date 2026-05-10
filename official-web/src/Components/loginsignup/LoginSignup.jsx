import React from 'react' ;
import './LoginSignup.css';
import user_icon from '../../assets/person.png';
import email_icon from '../../assets/email.png';
import password_icon from '../../assets/password.png';
import logoLight from "../../assets/logo.png";
import logoDark from "../../assets/logo-dark.png";
const LoginSignup = ({ theme }) => {
    const [action, setAction] = React.useState("Login");
  return (
    <div className="login-page"> 
    <div className='container'>
        <div className="logo-container">
      <img
  src={theme === "dark" ? logoDark : logoLight}
  alt="FreshMitra Logo"
  className="logo"
/>
    </div>
        <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
    </div>
    <div className='inputs'>
        {action === "Login" ? <div></div>:<div className='input'>
            <img src={user_icon} alt=""/>
            <input type="text" placeholder="Name"></input>
        </div>}
        
        <div className='input'>
            <img src={email_icon} alt=""/>
            <input type="email" placeholder="Email"></input>
        </div>
        <div className='input'>
            <img src={password_icon} alt=""/>
            <input type="password" placeholder="Password"></input>
        </div>
    </div>
    {action === "Sign Up" ?<div></div>:<div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
    <div className="submit-container">
        <div className={action === "Login" ? "submit gray" : "submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={()=>{setAction("Login")}}>Login</div>
    </div>
</div>
</div>
  );
}
export default LoginSignup;

