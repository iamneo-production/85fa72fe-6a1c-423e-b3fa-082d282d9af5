import React from 'react';

import { useRef } from 'react';
import { Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
const Move = () =>
{
    const slideshowRef = useRef(null);

  const handleSlideChange = () => {
    if (slideshowRef.current) {
      slideshowRef.current.goNext();  
    }
  };
  const sidebarStyle = {
    backgroundColor: 'grey',
    padding: '20px',
    width: '200px',
    position: 'fixed',
    top: '50px',
    left: 0,
    bottom: 0,
  };

  const sidebarLinkStyle = {
    display: 'block',
    margin: '25px ',
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
  };

  const hoverStyle = {
    backgroundColor: 'blue',
    color: 'black',
  };
  const small =
  { 
    width: '20px',
    height: '20px',
    marginRight: '10px',
  };
  const mainContentStyle = {
    marginLeft: '220px',
    padding: '20px',
  };

  const slideshowContainerStyle = {
    marginTop: '70px',
    marginLeft: '220px',
    marginRight: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  };

  const slideImages = [
    'https://res.cloudinary.com/duj7wgdt8/image/upload/v1689050870/gppnraeyghm1gfn5gjvk.jpg',
    'https://res.cloudinary.com/duj7wgdt8/image/upload/v1689051267/laaih9qtlpje4qzatgsi.jpg',
    'https://res.cloudinary.com/duj7wgdt8/image/upload/v1689051504/jk6vuxdnnaqgusuiiycy.jpg',
    'https://res.cloudinary.com/duj7wgdt8/image/upload/v1689051718/niuveaewbkqjsub2kn7u.png',
  ];

  const slideProperties = {
    duration: 3000, 
    height: '100px',
    transitionDuration: 300, // Transition duration between slides in milliseconds
    infinite: true, // Whether to loop the slideshow continuously
    indicators: true, // Whether to show slide indicators at the bottom
    arrows: true, // Whether to show previous/next arrows
    autoplay: true, // Whether to automatically transition to the next slide
    pauseOnHover: true, // Whether to pause the slideshow on hover
    canSwipe: true, // Whether to allow swiping on touch-enabled devices
  };

  const slideContainerStyle = {
    marginRight: '300px',
    borderRadius: '15px',
    borderstyle : 'solid',
    height: '1000px', // Adjust the height as needed
    width: '800px', // Adjust the width as needed
   // Center the slideshow horizontally
  };

  const slideImageStyle = {
    height: '100%', // Make the images fill the slide container vertically
    width: '100%', // Make the images fill the slide container horizontally
    objectFit: 'cover', // Scale and crop the images to fit the container
  };
  const navStyle = {
    backgroundColor: 'white',
    color: '#774f9a',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };
  
  const icon ={
      height: '100px',
      width: '100px',
  };

  const linkStyle = {
    color: '#774f9a',
    textDecoration: 'none',
    margin: '0 30px',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  };



  const logoStyle = {
    width: '70px',
    height: '50px',
    marginBottom : '0px',
  };
  const profileStyle = {
    width: '35px',
    height: '30px',
    paddingTop : '10px',
    boxSizing: 'content-box',
  };
    return(
        <div>
            <div style={slideshowContainerStyle}>
        <br></br>
        <br></br>
        
        <div style={slideContainerStyle}>
          <Slide {...slideProperties} ref={slideshowRef}>
            {slideImages.map((image, index) => (
              <div key={index} className="each-slide">
                <img src={image} alt={`Slide ${index + 1}`} style={slideImageStyle} />
              </div>
            ))}
          </Slide>
        </div>
      </div>
        </div>
    );
}
export default Move