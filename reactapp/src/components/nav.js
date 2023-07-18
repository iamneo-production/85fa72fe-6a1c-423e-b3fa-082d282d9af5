import React from 'react';
import Start from './start';
import 'react-slideshow-image/dist/styles.css';
import Top from './top';
import Footer from './footer';
import Insurance from './insurance';
import Move from './slide';
import Log from '../components/log';
const Nav = (props) => 
{

  


  return (
    <div>
     
    <Top/>
    <Start/>
    <Insurance/>
    <Move/>
    
    <Footer/>
    </div>
  );
};

export default Nav;