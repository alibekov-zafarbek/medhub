/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function CourseCategory() {
  const [mains] = useState([
    {
      name: "Anatomiya",
      slug: "anatomiya",
      content:
        "Inson tanasi tuzilishlari xaqida 3D atlaslar va videodarslar asosida o'rganish uchun bu bo'limga kiring content",
    },
    {
      name: "Fiziologiya",
      slug: "fiziologiya",
      content:
        "Organizmning normal xolatda ishlashi uchun kerak bo'ladigan jarayonlar haqida bilib olish uchun bu bo'limga kiring",
    },
    {
      name: "Gistologiya",
      slug: "gistologiya",
      content:
        "Hujayra va to'qimalarning mikroskopik tuzlishi va ularda kechadigan jarayonlarni o'rganish uchun tanlang",
    },
    {
      name: "Biokimyo",
      slug: "biokimyo",
      content:
        "Organizmadagi biologik-kimyoviy jarayonlar va reaksiyalarni bilib olish uchun bu bo'limni tanlang",
    },
    {
      name: "Mikrobiologiya",
      slug: "mikrobiologiya",
      content:
        "Mikroorganizmlar va viruslarning odam organizmi fizologik va patologik ta'sirini o'rganish uchun bu bo'limga kiring",
    },
    {
      name: "Farmakologiya",
      slug: "farmakologiya",
      content:
        "Dori vositalarini organizmga ta'siri va retseptorlar haqida o'rganish uchun bu bo'limga kiring",
    },
    {
      name: "Patologiya",
      slug: "patologiya",
      content:
        "Organizmda kechadigan patologik jarayonlar va kasalliklar haqida ma'lumot olish uchun bu bo'limga kiring",
    },
  ]);

  const { main } = useParams();
  console.log(main);
  return (
    <div className="services pt-5">
      <div className="container" data-aos="fade-up">
        <div className="section-title mt-5">
          {/* <h2 class="mb-1 fs-2" >Kurslar</h2> */}
          <h3>
            <span className="text-uppercase">{main} Fanlar</span>
          </h3>
        </div>
        <div className="row">
          {mains.map((item, index) => (

          <div key={index}
            className=" mb-4 col-lg-4 col-md-6 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay={100}
          >
            <Link to={`${item.slug}`} className="text-decoration-none">
              <div className="card w-100 border-circle">
                <img
                  className="card-img-top "
                  style={{ borderRadius: "35px 35px 0px 0px" }}
                  src={require(`../../assets/img/fanlar/${item.slug}.png`)}
                  alt={`${item.name} image`}
                />
                <div
                  className="card-body ps-4 pt-3  pb-2 position-relative"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <h5
                    className="card-title position-absolute text-black"
                    style={{ top: "-1rem" }}
                  >
                    {item.name}
                  </h5>
                  <p className="card-text text-black">
                    {item.content}
                  </p>
                </div>
              </div>
            </Link>
          </div>
          ))}
          
        </div>
      </div>
    </div>
  );
}
