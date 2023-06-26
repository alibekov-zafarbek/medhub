import React from "react";
import { Link, useParams } from "react-router-dom";

export default function CourseTypes() {
  const { main, direction, dep, theme} = useParams()
  console.log( main, direction, dep, theme);
  return (
    <div id="login" className="contact section-bg py-5">
      <div className="container py-5" data-aos="fade-up">
        <a href="true" className="section-title mt-5 text-decoration-none">
          <h3>O'zlashtirish uchun ma'lumotlar</h3>
        </a>
        <div className="row mt-5" data-aos="fade-up" data-aos-delay={100}>
          <div className="col-lg-6 my-2">
            <Link
              to="about"
              className="text-white courseType text-decoration-none fw-bold"
            >
              <div
                className="card border-circle"
                style={{ backgroundColor: "#0000FFFF" }}
              >
                <div className="card-body py-4  ">Asosiy ma’lumotlar</div>
              </div>
            </Link>
          </div>
          <div className="col-lg-6  my-2">
            <a
              href="courseflash.html"
              className="text-white text-decoration-none courseType fw-bold"
            >
              <div
                className="card border-circle "
                style={{ backgroundColor: "#0000FFFF" }}
              >
                <div
                  href=""
                  className="card-body py-4"
                  style={{
                    display: "flex !important",
                    alignItems: "center !important",
                  }}
                >
                  Flashcardlar
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-6 my-2 ">
            <a
              href="courseVideo.html"
              className="text-white text-decoration-none courseType fw-bold"
            >
              <div
                className="card border-circle"
                style={{ backgroundColor: "#0000FFFF" }}
              >
                <div
                  href=""
                  className="card-body py-4"
                  style={{ cursor: "ponter" }}
                >
                  Videodarslar
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-6 my-2 ">
            <Link to="test" className="text-white text-decoration-none courseType fw-bold">
              <div
                className="card border-circle"
                style={{ backgroundColor: "#0000FFFF" }}
              >
                <div  className="card-body py-4  ">
                  Test va topshiriqlar
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-6 my-2 ">
            <Link to="atlas" className="text-white text-decoration-none courseType fw-bold">
              <div
                className="card border-circle"
                style={{ backgroundColor: "#0000FFFF" }}
              >
                <div  className="card-body py-4  ">
                  3d Atlas
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
