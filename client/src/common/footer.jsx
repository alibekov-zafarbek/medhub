import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-contact flex-column">
                <div className="d-flex">
                  <a href="index.html" className="logo">
                    <img
                      src="../assets/Galogramma.png"
                      style={{ width: 60 }}
                      alt=""
                    />
                  </a>
                  <h3 className="mt-2 " style={{ color: "#0000ffff" }}>
                    Med<span style={{ color: "rgb(209, 107, 11)" }}> Hub</span>
                  </h3>
                </div>
                <p>
                  Andijon, <br />
                  Eski Shahar,
                  <br />
                  Oltinko'l ko'chasi 1-A uy
                  <br />
                  <br />
                  <strong>Telefon:</strong> +998 90 750 37 97
                  <br />
                  <strong>Email:</strong>medhubuz@gmail.com
                  <br />
                </p>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Foydali havolalar</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <Link to="/" className="text-decoration-none">Bosh Sahifa</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <Link to="/abaut" className="text-decoration-none">Biz Haqimisda</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <Link to="/courses" className="text-decoration-none">Kurslar</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Bizning xizmatlar</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <Link to="/" className="text-decoration-none">Ta'lim berish</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <Link to="/" className="text-decoration-none">Medical English</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <Link to="/" className="text-decoration-none">Shifokorlar tayyorlash</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <Link to="/" className="text-decoration-none">"Mock" imtixonlar</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <Link to="/" className="text-decoration-none">Xalqaro tibbiy sertifikatlarga tayyorlash</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Biznig ijtimoiy tarmoqlar</h4>
                <p>Bizni ijtimoiy tarmoqlarda kuzatib boring </p>
                <div className="social-links mt-3">
                  <Link
                    to="https://www.twitter.com/@ARejabboyev"
                    className="twitter rounded-circle"
                  >
                    <i className="bx  bxl-twitter" />
                  </Link>
                  <Link
                    to="https://www.instagram.com/@arabboy_rejabboyev"
                    className="facebook rounded-circle"
                  >
                    <i className="bx bxl-facebook" />
                  </Link>
                  <Link
                    to="https://www.instagram.com/@arabboy_rejabboyev"
                    className="instagram rounded-circle"
                  >
                    <i className="bx bxl-instagram" />
                  </Link>
                  <Link
                    to="https://t.me/A_Rejabboyev"
                    className="telegram rounded-circle"
                  >
                    <i className="bx bxl-telegram" />
                  </Link>
                  <Link
                    to="https://www.instagram.com/@arabboy_rejabboyev"
                    className="linkedin rounded-circle"
                  >
                    <i className="bx bxl-linkedin" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
