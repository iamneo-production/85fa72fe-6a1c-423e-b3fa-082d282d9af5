import React from 'react';
import personsupport from '../assets/personsupport.jpg'
import hour from '../assets/hour.png'
const SkypeButton = () => 
{
  const clock = 
  {
    height: '100',
    width: '150px',
    marginLeft: '25%'
  }
  const form =
  {
    height: '50px',
    width: '250px',
    border: '1px solid black',
    borderstyle : 'solid',
  };
  const button ={
    height: '50px',
    width: '250px',
    marginLeft:'20%',
  };
    const handleJoinMeeting = () => {
      window.open('https://meet.google.com/bet-ctbk-uzq');
    };

  return (

    <div style={{display:'flex'}}> 
        <div style={{marginTop:'10%',marginLeft:'5%'}}>
          <img src={personsupport}/>
       </div>
       <div style={{display:'block',marginTop:'15%',marginLeft:'10%'}}>
        <img src={hour} style={clock}/>
        <h1>Join Instant Face to Face Meeting</h1>
          <button onClick={handleJoinMeeting} style={button}>
            Join Meeting
          </button>
        </div>
    </div>

  );
};

export default SkypeButton;