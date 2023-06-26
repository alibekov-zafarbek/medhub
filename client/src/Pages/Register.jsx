import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Register() {
  function UpdateLoginKey() {
    window.localStorage.setItem("loginKey", "/signin");
  }
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    firstname: "",
    email: "",
    username: "",
    password: "",
  });

  const handlerChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setRegister((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("http://localhost:4000/users/")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    const DataPush = () => {
      fetch("http://localhost:4000/users/create-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname: register.firstname,
          username: register.username,
          email: register.email,
          password: register.password,
        }),
      });
    };

    if (!register.firstname.trim().length) {
      toast.error("Ismingizni Kiriting");
    } else if (!register.username.trim().length) {
      toast.error("Username Kiriting");
    } else if (
      !register.email.trim().length ||
      !register.email.includes("@") ||
      !register.email.includes(".")
    ) {
      toast.error("Email Kiriting");
    } else if (!register.password.trim().length) {
      toast.error("Parol Kiriting");
    }

    if (
      register.password.trim().length &&
      register.email.trim().length &&
      register.firstname.trim().length &&
      register.username.trim().length
    ) {
      data.forEach((element) => {
        if (element.email !== register.email) {
          window.localStorage.setItem("SecretKey", element._id);
        } else if (element.email === register.email) {
          toast.warning("Ushbu Email Band");
        }
      });
    }
    if (window.localStorage.getItem("SecretKey")) {
      navigate("/");
      DataPush();
    }
  };

  return (
    <div className="contact section-bg py-5">
      <ToastContainer />
      <div className="container" data-aos="fade-up">
        <div className="section-title mt-5">
          <h2 className="mb-1">Ro'yxatdan O'tish</h2>
          <div className="row mt-5" data-aos="fade-up" data-aos-delay={100}>
            <div className="col-lg-6 ">
              <img
                style={{ height: 300, marginRight: "40px !important" }}
                src={require("./../assets/img/doctor.png")}
                alt=""
              />
            </div>
            <div className="col-lg-6 h-auto align-self-end">
              <form className="register-form" onChange={handlerChange}>
                <input
                  value={register.firstname}
                  type="text"
                  name="firstname"
                  placeholder="Ful Name *"
                />
                <input
                  value={register.username}
                  type="text"
                  name="username"
                  placeholder="username *"
                />
                <input
                  value={register.email}
                  type="email"
                  name="email"
                  placeholder="Email *"
                />
                <input
                  value={register.password}
                  type="password"
                  name="password"
                  placeholder="Password *"
                />
                <div className="col-12 mt-0 form-group">
                  <p className="w-100 text-start">
                    hisobga kirish{" "}
                    <a href="/login/signin" onClick={UpdateLoginKey}>
                      Kirish
                    </a>
                  </p>
                </div>
                <button onClick={submitHandler} type="submit">
                  Ro'yxatdan O'tish
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
