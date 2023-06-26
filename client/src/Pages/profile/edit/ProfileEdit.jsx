import React, {  useState } from 'react'
import { AwesomeButton, AwesomeButtonProgress } from "react-awesome-button";
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss';
import './ProfileEdit.scss'
import backIcon from '../../../assets/icons/arrow-left.svg'
function ProfileEdit() {
  const [active,setActive]= useState(0)
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Password:', password);
    setPassword('');
  }

 



  const [password2, setPassword2] = useState('');
  const [showPassword2, setShowPassword2] = useState(false);

  const handlePasswordChange2 = (event) => {
    setPassword(event.target.value);
  };
  
  const handleTogglePassword2 = () => {
    setShowPassword2(!showPassword2);
  };



  
  const [password3, setPassword3] = useState('');
  const [showPassword3, setShowPassword3] = useState(false);

  const handlePasswordChange3 = (event) => {
    setPassword3(event.target.value);
  };
  
  const handleTogglePassword3 = () => {
    setShowPassword3(!showPassword3);
  };

  


  
  

  



  return (
    <>
      <div className="container ">
        <h2 className="setting-title">{active ==2 ?'Profile Settings': 'Update Password'}</h2>
        <img onClick={()=> setActive(2)} src={backIcon} alt="" className={active===1?'icon-back active-form':"icon-back"} />
        <form  className={active===1?"profile-form ":"profile-form active-form"}>
          <input type="text" className="setting-username" placeholder='Username *'/>
          <input type="text" className="setting-desc" placeholder='Description *' maxLength={200}/>
          <input type="email" className='setting-email' placeholder='Email *'/>
          <input type="number" className='setting-phone' placeholder='Phone *'/>
          <input type="text" className='setting-link' placeholder='Link *' />
          <input className="custom-file-input"  type="file" />
        </form>
        <form onSubmit={handleFormSubmit}  className={active ===1?"profile-form active-form":"profile-form"}>
          
          <span><input placeholder='Current Password *' type={showPassword ? 'text' : 'password'}  onChange={handlePasswordChange}/><i
            className={`password-toggle-icon ${
              showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'
            }`}
            onClick={handleTogglePassword}
          /></span>
          <span><input placeholder='New Password *' type={showPassword2 ? 'text' : 'password'}  onChange={handlePasswordChange2}/><i
            className={`password-toggle-icon ${
              showPassword2 ? 'bi bi-eye-slash' : 'bi bi-eye'
            }`}
            onClick={handleTogglePassword2}
          /></span>
          <span><input placeholder='Confrim Password *' type={showPassword3 ? 'text' : 'password'}  onChange={handlePasswordChange3}/><i
            className={`password-toggle-icon ${
              showPassword3 ? 'bi bi-eye-slash' : 'bi bi-eye'
            }`}
            onClick={handleTogglePassword3}
          /></span>
          
          
        </form>
        <div className="btns">
          <AwesomeButton cssModule={AwesomeButtonStyles} type="primary" 
          onPress={()=> setActive(1)} className='password-btn'>
          Paro'lni O'zgartirish
          </AwesomeButton>
          <AwesomeButtonProgress  type="secondary" onPress={async (element, next)=>{
        // await for something then call
        setActive(2)
        next();
        }} >Saqlash</AwesomeButtonProgress>
        </div>
      </div>
      <div>
      
    </div>
    </>
  )
}

export default ProfileEdit