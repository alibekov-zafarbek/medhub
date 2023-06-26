import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [toggleNav, setToggleNav] = useState(false)
  return (
    <header id="header" className="d-flex align-items-center fixed-top">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center justify-content-between">
          <img src="./../assets/Galogramma.png" alt="" style={{ width: 50 }} />
          <h1 className="logo">
            <NavLink className="text-decoration-none" to="/">
              Med<span> Hub</span>
            </NavLink>
          </h1>
        </div>
        <nav id="navbar" className={` ${toggleNav ? `navbar-mobile` : ``} navbar `}>
          <ul>
            <li>
              <NavLink
                to="/"
                // className={({ isActive, isPending }) =>
                //   isPending ? "pending" : isActive ? "active" : ""
                // }
                className="nav-link scrollto "
              >
                Bosh Sahifa
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link scrollto" to="/about">
                Biz Haqimizda
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link scrollto" to="/courses">
                Kurslar
              </NavLink>
            </li>
            <li>
              <a className="nav-link scrollto" href="/#team">
                Jamoa
              </a>
            </li>
            <li>
              <a className="nav-link scrollto " href="/#contact">
                Aloqa
              </a>
            </li>
            
            <li>
              <a
                className=" scrollto btn-get-started text-white btnB   border-circle"
                id="btnyellow"
                style={{
                  backgroundColor: "transparent",
                  border: "3px solid #F77801FF",
                  
                  
                }}
                href="true"
              >
                Coin | 53
                <img
                  src={require("../assets/img/homeIcon/coins.png")}
                  style={{
                    width: "1rem",
                    filter:
                      "invert(59%) sepia(62%) saturate(6206%) hue-rotate(12deg) brightness(111%) contrast(99%)",
                  }}
                  alt=""
                />
              </a>
              
            </li>
            <li>
            <Link to='/profile' className="person-list">
              <i class="bi bi-person person-icon"></i>
              </Link>
            </li>
          </ul>
          <i className={`bi ${toggleNav ? `bi-x` : `bi-list` }  mobile-nav-toggle `} onClick={() => setToggleNav(!toggleNav)} />
        </nav>
      </div>
    </header>
  );
}
