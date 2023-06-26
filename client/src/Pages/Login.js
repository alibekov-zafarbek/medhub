/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react'
import { Link } from 'react-router-dom'
import {loginKey} from './index';
export default function Login() {
  function UpdateLoginKey(){
    window.localStorage.setItem('loginKey','/signup')
  }
console.log(loginKey);
return (
  <div className="contact section-bg py-5">
<div className="container" data-aos="fade-up">
  <div className="section-title mt-5">
    <h2 className="mb-1">Kirish</h2>
    <div className="row mt-5" data-aos="fade-up" data-aos-delay={100}>
      <div className="col-lg-6 ">
        <img
          style={{ height: 300, marginRight: "40px !important" }}
          src={require("./../assets/img/doctor.png")}
          alt=""
        />
      </div>
      <div className="col-lg-6 h-auto align-self-end">
       <form className='register-form mb-5'>
        <input type="text" placeholder='Username *'/>
        <input type="password" placeholder='Password *'/>
        <div className="col-12 mt-0 form-group">
            <p className="w-100 text-start">
              akkauntingiz yo'qmi ?{" "}
              <a href="/login/signup" onClick={UpdateLoginKey}>Royhatdan o'tish</a>
            </p>
          </div>
        <button>Kirish</button>
       </form>
      </div>
    </div>
  </div>
</div>
</div>

)
}
