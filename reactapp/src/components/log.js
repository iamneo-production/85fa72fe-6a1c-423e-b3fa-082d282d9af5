import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { setEmail,setPass,setName } from './loginAction';
import '../css/login.css'
import icon from '../assets/icon.png'
function Log(
{
  email,
  pass,
  name,
  setEmail,
  setName,
  setPass,
  
}) 
{
  const check = (e) => 
  {
    e.preventDefault();
    if (pass === 'akshaya') 
    {
      setCheckPass(true);
    }
  };
  const navigate=useNavigate();
  const[checkpass,setCheckPass]=useState(false);
  const input = {
    height:'40px',
    width:'200px',
    
  }
  const data = name;
  return (
    <>
    <div className='container4'>
    <div className="logmain">
      <div className="login">
        <form onSubmit={check}>
          <label htmlFor="chk" aria-hidden="true">
            Login
          </label>
          <img src={icon} style={{width:'150px',height:'150px'}}/>
          <input style={input}
            type="text"
            name="name"
            value={name}
            placeholder="Username"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input style={input}
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input style={input}
            type="password"
            name="pass"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="Password"
            required
          />
          <br></br>
          <br>
          </br>
          <button className="logbut">Login</button>
          {checkpass && alert('successful login '+name)}

          {checkpass && navigate('/nav')}
          <Link to="/signup" style={{ textDecoration: 'none' }}>
            <h5>Don't have an account? Register</h5>
          </Link>
        </form>
      </div>
    </div>
    </div>
            
       
  </>
  );
}

const mapStateToProps = (state) => {
  return {
    email: state.login.email,
    pass: state.login.pass,
    name:state.login.name,
    
  };
};

const mapDispatchToProps = {
  setEmail,
  setPass,
  setName,
  
};

export default connect(mapStateToProps, mapDispatchToProps)(Log);