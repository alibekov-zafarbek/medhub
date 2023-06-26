/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/alt-text */
import React, {  useState } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import CountUp from "react-countup";
// import {require} from 'browserify'

export default function Home() {
  
  const [Comments] = useState([
    {
      id: 1,
      name: "Madamin Madazimov",
      position: "Andijon Davlat Tibbiyot Instituti Rektori",
      comment:
        "Tibbiyotni vizual tasavvurlarsiz o'rganish qiyin. O'zbek tilida sifatli ma'lumotlar va 3D videolar deyarli yo'q edi. Va nihoyat bu muammoga yechim topildi",
      img: require("../assets/bobo.jpg"),
    },
    {
      id: 2,
      name: "Muhammadyaqub Ahmadjonov",
      position: "Dasturchi",
      comment: "Eng Zamonaviy Va Creativ Contentlar Shu Yerda",
      img: require("../assets/img/team/team-1.jpg"),
    },
    {
      id:3,
      name: "Asadillo Nurmatov",
      position: "Student",
      comment:
        "Bu sayt bilan tansihganimdan xursandman. O'zbek tilida ham tibbiyotni o'rganish uchun sifatli saytlar paydo bo'la boshlagani meni quvontirdi.",
      img: require("../assets/asadilla.jpg"),
    },
  ]);
  const [Team] = useState([
    {
      id: 1,
      name: "Arabboy Rajabboyev",
      position: "Loyiha Asoschisi",
      img: require("../assets/arabboy.jpg"),
    },
    {
      id:2,
      name: "Diyorbel Davronbekov",
      position: "HR Menejer",
      img: require("../assets/diyor.png"),
    },
    {
      id:3,
      name: "Abdulazizova Mohinur",
      position: "Content Menejer",
      img: require("../assets/mohinur.jpg"),
    },
    {
      id: 4,
      name: "Muhammadyusupova Mohlaroy",
      position: "Kopirayter",
      img: require("../assets/Mohlaroy.png"),
    },
  ]);
  return (
    <div className="gradient">
      {/* ======= Hero Section ======= */}
      <section id="hero">
        <div className="container" data-aos="zoom-out" data-aos-delay={100}>
          <h1 style={{ color: "rgb(247, 120, 1)" }}>
            <span>Med </span>Hub{" "}
          </h1>
          <h2
            className="text-black fw-bold text-white"
            style={{ textShadow: "8px 8px 10px rgba(0,0,0,0.79)" }}
          >
            {" "}
            Tibbiyotni vizual hamda o'yin asosida o'rganish imkoniyati
          </h2>
          <div className="d-flex">
            <Link
              to="/login"
              className="btn-get-started scrollto border-circle text-decoration-none"
            >
              Boshlash
            </Link>
            <Link
              to="https://www.youtube.com/embed/eoqFFY9Qvxg"
              className="glightbox bold videoBtn btn-watch-video text-decoration-none"
            >
              <i className="bi bi-play-circle " />
              <span className="fw-bold "> Videolavha</span>
            </Link>
          </div>
        </div>
      </section>
      {/* End Hero */}
      <main id="main">
        <section id="featured-services" className="featured-services">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2 className="fs-3">Sayt Imkoniyatlari</h2>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div
                  className="icon-box w-100"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <div className="icon">
                    <img
                      className="icon_image"
                      src={require("../assets/img/homeIcon/3d-view.png")}
                    />
                  </div>
                  <h4 className="title black">3D videodarslar</h4>
                  <p className="description">
                    Har bir dars uchun maxsus tayyorlangan 3D videodarslar
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div
                  className="icon-box w-100"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <div className="icon">
                    <img
                      className="icon_image"
                      src={require("../assets/img/homeIcon/flash-card.png")}
                    />
                  </div>
                  <h4 className="title black">Fleshkart va testlar</h4>
                  <p className="description">
                    Mavzuni mustahkamlash uchun fleshkart va testlar toʻplami
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div
                  className="icon-box w-100"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <div className="icon">
                    <img
                      className="icon_image"
                      src={require("../assets/img/homeIcon/coins.png")}
                    />
                  </div>
                  <h4 className="title black">Coin tizimi</h4>
                  <p className="description">Koʻproq bilib, kamroq toʻlang</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div
                  className="icon-box w-100"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >
                  <div className="icon">
                    <img
                      className="icon_image"
                      src={require("../assets/img/homeIcon/virtual-reality.png")}
                    />
                  </div>
                  <h4 className="title black">VR</h4>
                  <p className="description">
                    Vertual reallik asosida o'rganish
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Featured Services Section */}
        {/* ======= Clients Section ======= */}
        <section id="clients" className="clients section-bg">
          <div className="container " data-aos="zoom-in">
            <div className="row">
              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img
                  src="../assets/clients/client1.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img
                  src="../assets/clients/client2.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img
                  src="../assets/clients/client3.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img
                  src="../assets/clients/client4.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img
                  src="../assets/clients/client5.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img
                  src="../assets/clients/client6.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        {/* ======= Testimonials Section ======= */}
        <section id="testimonials" className="testimonials">
          <div className="container" data-aos="zoom-in">
            <div
              className="testimonials-slider swiper"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <Swiper
                speed={600}
                loop={false}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                slidesPerView={"auto"}
                modules={[Pagination]}
                pagination={{ clickable: true }}
              >
                {Comments.map((com) => (
                  <SwiperSlide key={com.id}>
                    <div className="testimonial-item">
                      <img src={com.img} className="testimonial-img" alt="" />
                      <h3>{com.name}</h3>
                      <h4>{com.position}</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left" />
                        {com.comment}
                        <i className="bx bxs-quote-alt-right quote-icon-right" />
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* <div className="swiper-pagination" /> */}
            </div>
          </div>
        </section>
        {/* ======= Team Section ======= */}
        <section id="team" className="team section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2 className="fs-3">Bizning Jamoa</h2>
              <p>Bizning Mehnatsevar Jamoa.</p>
            </div>
            <div className="row swiper-wrapper">
              <div className="swiper team-slider">
                <Swiper
                  speed={600}
                  loop={false}
                  autoplay={{ delay: 4000, disableOnInteraction: true }}
                  slidesPerView={"auto"}
                  mousewheel={true}
                  modules={[Pagination]}
                  pagination={{ clickable: true }}
                  breakpoints={{
                    1500: {
                      slidesPerView: 6,
                    },

                    992: {
                      slidesPerView: 4,
                    },

                    768: {
                      slidesPerView: 2,
                    },

                    625: {
                      slidesPerView: 1,
                    },
                  }}
                >
                  {Team.map((item) => (
                    <SwiperSlide className="px-2" key={item.id}>
                      <div className="member swiper-slide">
                        <div className="member-img">
                          <img src={item.img} className="img-fluid" alt="" />
                          <div className="social">
                            <Link className="rounded-circle">
                              <i className="bi bi-twitter" />
                            </Link>
                            <a href="true" className="rounded-circle">
                              <i className="bi bi-facebook" />
                            </a>
                            <a href="true" className="rounded-circle">
                              <i className="bi bi-instagram" />
                            </a>
                            <a href="true" className="rounded-circle">
                              <i className="bi bi-telegram" />
                            </a>
                          </div>
                        </div>
                        <div className="member-info swiper-slide">
                          <h4>{item.name}</h4>
                          <span>{item.position}</span>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                {/* <Pagination className="swiper-pagination"></Pagination> */}
                {/* <div className="swiper-pagination" /> */}
              </div>
            </div>
          </div>
        </section>
        {/* End Team Section */}
        {/* ======= Counts Section ======= */}
        <section id="counts" className="counts">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="count-box">
                  <i className="bi bi-emoji-smile" />
                  <CountUp
                    start={0}
                    end={1231}
                    duration={2}
                    className="purecounter"
                  />
                  <p>Baxtli mijozlar soni</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                <div className="count-box">
                  <i className="bi bi-journal-richtext" />
                  <CountUp
                    start={0}
                    end={231}
                    duration={2}
                    className="purecounter"
                  />
                  <p>Loyihalar soni</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                <div className="count-box">
                  <i className="bi bi-headset" />
                  <CountUp
                    start={0}
                    end={1292}
                    duration={2}
                    className="purecounter"
                  />
                  <p>Qo'llab-quvvatlash soatlari</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                <div className="count-box">
                  <i className="bi bi-people" />
                  <CountUp
                    start={0}
                    end={48}
                    duration={2}
                    className="purecounter"
                  />
                  <p>Mehnatkashlar</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ======= Contact Section ======= */}
        <section id="contact" className="contact section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2 className="fs-5">Biz Bilan Bog'lanish</h2>
              <h3>
                <span />
              </h3>
              <p>
                Taklif, fikr-mulohazalaringizni bildirish uchun quyidagilardan
                birini tanlang
              </p>
            </div>
            <div className="row" data-aos="fade-up" data-aos-delay={100}>
              <div className="col-lg-6">
                <div className="info-box mb-4">
                  <i className="bx bx-map" />
                  <h3 className="text-black">Bizning Manzil</h3>
                  <p className="text-black">
                    Andijon, Eski Shahar, Oltinko'l ko'chasi 1-A uy
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="info-box  mb-4">
                  <i className="bx bxl-telegram" />
                  <h3 className="text-black">Telegram manzil</h3>
                  <p>
                    <a
                      className="text-black text-decoration-none"
                      href="https://t.me/A_Rejabboyev"
                    >
                      Bog'lanish
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="info-box  mb-4">
                  <i className="bx bx-phone-call" />
                  <h3 className="text-black">Telefon raqam</h3>
                  <p>
                    <a
                      className="text-black text-decoration-none"
                      href="tel:+998907503797"
                    >
                      +998 90 750 37 97
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="row" data-aos="fade-up" data-aos-delay={100}>
              <div className="col-lg-6 ">
                <iframe
                  className="mb-4 mb-lg-0"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d755.2148804556808!2d72.3395838!3d40.7871024!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bceb797f3706c7%3A0x55e4027b490914ac!2sISTANBUL%20BAKLAVA!5e0!3m2!1sru!2s!4v1681555907921!5m2!1sru!2s"
                  frameBorder={0}
                  style={{ border: 0, width: "100%", height: "384px" }}
                  allowFullScreen
                />
              </div>
              <div className="col-lg-6">
                <form
                  action="forms/contact.php"
                  method="post"
                  role="form"
                  className="php-email-form"
                >
                  <div className="row">
                    <div className="col-md form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Ismingiz "
                        required
                      />
                    </div>
                    <div className="col-md form-group">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Email Manzilingiz"
                        required
                      />
                    </div>
                  </div>
                  <div className=" form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Mavzu"
                      required
                    />
                  </div>
                  <div className="  form-group">
                    <textarea
                      className="form-control"
                      name="message"
                      rows={5}
                      placeholder="Xabar"
                      required
                      defaultValue={""}
                    />
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message" />
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                  <div className="text-center ">
                    <button className="border-circle" type="submit">
                      Yuborish
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* End Contact Section */}
      </main>
      {/* End #main */}
    </div>
  );
}
