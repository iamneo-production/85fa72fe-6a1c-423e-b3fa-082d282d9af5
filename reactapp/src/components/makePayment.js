
import React, { useState } from 'react';
import { Input } from './Input';
import { Button } from './Button';
import { StyleText } from './styleText';
import atm from '../assets/atm.png'
import paypal from '../assets/paypal.png'
const MakePayment = () =>
{
  const stylelabel =
  {
      fontWeight:'bold',
  }
   return(
    <div style={{marginTop:'15%',marginLeft:'30%'}}>
          <div className="header" >
            <StyleText className="title" text="Last step!" />
            <StyleText className="subtitle" text="Enter your payment info below."  />
          </div>

          <div className="payment-mode" style={{display:'flex',marginTop:'10%'}}>
            <Button leftIcon={atm} textComponent =
                      {
                        <StyleText className="btn-text" text="Cedit Card" />
                      }
                      
            />
            
        <div>
            <Button leftIcon={paypal} textComponent={<StyleText className="btn-text" text="Pay Pal" />}className="paypal"/>
           
        </div>
         </div>
<form>
         <div className="card-number">
          <p style={{color: '#064b8d',fontWeight:'bold'}}>Card Number</p>
              <input  style={stylelabel} type="text" placeholder="123 4567 8912 3456" width="400px"  pattern="[0-9]{8}" required title='It must contain 8 numbers'/>

<div style={{display:'flex',marginTop:'20px'}}>
    <div className="expiry" >
      <input  label="Expiration Date" type="number" placeholder="Month"  min="1" max="12" required/>
    </div>

      <div style={{marginLeft:'15px'}}>
        <input label="" type="number" placeholder="Date"  min="1" max="31" required/>
      </div>

      <div style={{marginLeft:'15px'}}>
        <input label="CVV" type="number" placeholder="CVV"  min="100" max="999"required/>
      </div>
   
      </div>
      <div style={{marginTop:'10px'}}>
      <center>
        <button type='submit'>Make Payment</button>
        </center>

        
        </div>
    </div>
    </form>
   

  


    </div>
   );
} 
export default MakePayment