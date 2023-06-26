import React from "react";
import { Link } from "react-router-dom";

export default function Courses() {
  return (
    <>
      <div  className="contact pt-5 section-bg">
        <div className="container " data-aos="fade-up">
          <div className="section-title mt-5">
            <h2 className="mb-1">Kurslar</h2>
            <div className="row mt-5" data-aos="fade-up" data-aos-delay={100}>
              <div className="col-md-6 ">
                <Link to="fundamental" className="text-decoration-none">
                  <div className="h-auto">
                    <h3 className="mb-3 text-black ">Fundametal Fanlar</h3>
                  </div>
                  <img
                    className="w-100"
                    style={{ height: "50vh", objectFit: "cover" }}
                    src={require("../../assets/Fundamentla fanlar.png")}
                    alt=""
                  />
                </Link>
              </div>
              <div className="col-md-6 ">
                <Link to="klinik" className="text-decoration-none">
                  <div className="h-auto">
                    <h3 className="mb-3 text-black ">Klinik Fanlar</h3>
                  </div>
                  <img
                    className="w-100"
                    style={{ height: "50vh", objectFit: "cover" }}
                    src={require("../../assets/Klinik fanlar.png")}
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
