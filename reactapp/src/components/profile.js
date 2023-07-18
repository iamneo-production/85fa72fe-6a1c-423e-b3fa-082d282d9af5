import React, { Component } from 'react';
import profile from '../assets/profile.jpg'
class Profile extends Component {
  state = {
    file: '',
    imagePreviewUrl: 'https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true',
    fname: '',
    lname:'',
    gender: '',
    occupation:'',
    count:'',
    age:'',
    active: 'edit'
  }

  photoUpload = e => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file);
  }

  editFName = e => {
    const fname = e.target.value;
    this.setState({
      fname,
    });
  }
  editLName = e => {
    const lname = e.target.value;
    this.setState({
      lname,
    });
  }

  editOccupation= e => {
    const occupation = e.target.value;
    this.setState({
      occupation,
    });
  }
  editGender = e => {
    const gender = e.target.value;
    this.setState({
      gender,
    });
  }

  editCount = e => {
    const count = e.target.value;
    this.setState({
      count,
    });
  }
  editAge = e => {
    const age = e.target.value;
    this.setState({
      age,
    });
  }


  handleSubmit = e => {
    e.preventDefault();
    let activeP = this.state.active === 'edit' ? 'profile' : 'edit';
    this.setState({
      active: activeP,
    })
  }

  render() {
    const { imagePreviewUrl, fname,lname,occupation, gender,count,age, active } = this.state;
    return (
      <div style={{marginTop:'5%'}}>
          <center><h1>Profile Card</h1></center>
        {active === 'edit' ? (
          <div className="cardp" style={{marginLeft:'40%',marginTop:'2%'}}>
            <form onSubmit={this.handleSubmit} style={{width:'50%'}}>
            
              <label htmlFor="photo-upload" className="custom-file-upload fas">
                
                <div className="img-wrap img-upload" style={{marginLeft:'12%'}}>
                  <img htmlFor="photo-upload" src={profile} alt="Profile" />
                </div>
                <input id="photo-upload" type="file" onChange={this.photoUpload} style={{visibility:'hidden'}}/>
              </label>
             
             
              <div style={{display:'flex'}}>
             
              <div>
              <div className="field">
                <label htmlFor="fname">
                  First Name:
                </label>
                <input
                  id="fname"
                  type="text"
                  onChange={this.editFName}
                  maxLength="25"
                  value={fname}
                  placeholder="Alexa"
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="occupation">
                  Occupation
                </label>
                <input
                  id="occupation"
                  type="text"
                  onChange={this.editOccupation}
                  maxLength="35"
                  value={occupation}
                  placeholder="Business"
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="age">
                  Age:
                </label>
                <input
                  id="age"
                  type="number"
                  onChange={this.editAge}
                  max="99"
                  min="1"
                  value={age}
                  placeholder="20"
                  required
                />
              </div>
              </div>



              <div style={{marginLeft:'20px'}}>
              <div className="field">
                <label htmlFor="lname">
                 Last Name:
                </label>
                <input
                  id="lname"
                  type="text"
                  onChange={this.editLName}
                  maxLength="25"
                  value={lname}
                  placeholder="Singh"
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="gender">
                  Gender
                </label>
                <input
                  id="gender"
                  type="text"
                  onChange={this.editGender}
                  maxLength="35"
                  value={gender}
                  placeholder="Female"
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="count">
                  Holding Policy Count
                </label>
                <input
                  id="count"
                  type="number"
                  onChange={this.editCount}
                  min="1"
                  value={count}
                  placeholder="20"
                  required
                />
              </div>
              </div>
              </div>
              <button type="submit" className="edit" style={{marginTop:'15%',marginLeft:'25%'}}>Edit Profile</button>
    
            </form>
          </div>
        ) : (
            <center>
            <div className="cardp">
                
              <form onSubmit={this.handleSubmit}>
                <h1>Profile Card</h1>
                <label className="custom-file-upload fas">
                  <div className="img-wrap">
                    <img htmlFor="photo-upload" src={imagePreviewUrl} alt="Profile" style={{width:'200px',height:'200px'}} />
                  </div>
                </label>
                <br></br><br></br>
            
                <div className="name">First Name : {fname}</div>
                <br></br>
                <div className="status">Last Name : {lname}</div>
                <br></br>
                <div className="status">Age : {age}</div>
                
                <br></br>
                <div className="status">Occupation : {occupation}</div>
                
                <br></br>
                <div className="status">Gender : {gender}</div>
                <br></br>
                <div className="status">Policy count  : {count}</div>
                <center>
                <button type="submit" className="save" style={{marginTop:'50px'}}>Save</button>
                </center>
              </form>
            </div>
            </center>
          )}
      </div>
    );
  }
}

export default Profile;
