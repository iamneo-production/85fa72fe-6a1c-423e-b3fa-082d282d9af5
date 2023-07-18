import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/signup.css'
import icon from '../assets/icon.png'
const Signup = () => 
{
  const styles = 
  {
    form: 
    {
      display: 'flex',
      flexDirection: 'column',
      width: '350px',
      height :'650px',
      padding: '20px',
      borderRadius: '4px',
      backgroundColor:'white',
      borderRadius:'25px'
    },
    error: 
    {
      color: 'red',
      marginBottom: '10px',
      fontSize: '14px',
      textAlign: 'center',
      fontStyle: 'italic',
      fontWeight: 'bold',
      backgroundColor: '#FBE3E4',
      padding: '8px',
      borderRadius: '4px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    },
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => 
  {
    e.preventDefault();

    if (password === confirmPassword) 
    {
      setError('');
      const data = 
      {
        username,
        email,
        password,
      };

      fetch('http://localhost:8080/api/insurance/signup',
      {
        method: 'POST',
        headers: 
        {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
      ).then(response => 
        {
          if (response.ok) 
          {
            setEmail('');
            setPassword('');
            setError('');
            setConfirmPassword('');
            setUsername('');
            alert('Signup successful!');
          } 
          else 
          {
            setError('Failed to signup. Please try again.');
          }
        }
      ).catch(error => 
        {
          setError('An error occurred. Please try again later.');
        }
      );
    } 
    else 
    {
      setError("Passwords don't match");
    }
  };

  return (
    <div style={styles.container} className='signmain'>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={styles.title}>Signup</h2>
        <img src={icon} style={{width:'150px',height:'150px'}}/>        
        {error && <div style={styles.error}>{error}</div>} 
        <div>
          <input
            style={{height:'45px',width:'250px'}} 
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        
        <div>
          <input
            style={{height:'45px',width:'250px'}} 
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <br></br>

        <div>
          <input
            style={{height:'45px',width:'250px',border:'1px solid #ccc'}} 
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <br></br>

        <div>
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{height:'45px',width:'250px' ,border:'1px solid #ccc'}} 
            required
          />
        </div>

        <br></br>
        
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button style={styles.button} type="submit">Sign Up</button>
        </div>
        
        
        
        <p><Link to="/"> Already have an account? Login</Link></p>


      </form>
    </div>
  );
};

export default Signup;