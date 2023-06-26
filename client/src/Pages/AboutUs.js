import React from "react";

export default function AboutUs() {
  return (
    <div id="about" className="about pt-5 ">
      <div className="container" data-aos="fade-up">
        <div className="section-title mt-5">
          <h2 className="fs-4 ">Biz Haqimizda bilib oling</h2>
          {/* <h3><span>Biz haqimizda </span></h3> */}
          <p className="text-black">
            2022 yilda Gistologiya fani ma'lumotlarni shakillarnitirish bilan
            boshlandi. Loyihaning ikkinchi bosqichida jamoaviy ishlarga start
            berilishdan avval loyiha to'liq tizimlashtirildi.
          </p>
        </div>
        <div className="row">
          <div
            className="col-lg-6"
            style={{ paddingLeft: "0 !important" }}
            data-aos="fade-right"
            data-aos-delay={100}
          >
            <img
              src={require("../assets/img/Jamoa.png")}
              className="img-fluid"
              alt=""
            />
          </div>
          <div
            className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <h3>Bizning ustunlik tomonlarimiz</h3>
            <ul>
              <li
                className="
       "
              >
                <div className="icon">
                  <img
                    className="icon_images "
                    src="./assets/img/homeIcon/3d-view.png"
                    alt=""
                  />
                </div>
                <div>
                  <h5 className="ms-3 mt-1 text-black">
                    Har bir mavzu uchun alohida yondashgan holda 3D videolar
                    ishlab chiqilgan.
                  </h5>
                </div>
              </li>
              <li>
                <div className="icon">
                  <img
                    className="icon_images "
                    style={{ width: 30 }}
                    src="./assets/img/homeIcon/flash-card.png"
                    alt=""
                  />
                </div>
                <div>
                  <h5 className="ms-3 mt-1  text-black">
                    Ma'lumot;anri o'zlashtirib bo'lgandan so'ng mavzuni
                    mustaxkamlash uchun flesjhkart va testlar berilgan.
                  </h5>
                </div>
              </li>
              <li>
                <div className="icon ">
                  <img
                    className="icon_images "
                    src="./assets/img/homeIcon/coins.png"
                    alt=""
                  />
                </div>
                <div>
                  <h5 className="ms-3 mt-2  text-black">
                    Coinlarni jamg'arib borish tizimi orqail darslarni coinlarga
                    almashtirish mumkin. Bu qancha ko'p bilsa shuncha kam
                    to'lash imkoniyatini yaratadi.
                  </h5>
                </div>
              </li>
              <li>
                <div className="icon">
                  <img
                    className="icon_images "
                    src="./assets/img/homeIcon/virtual-reality.png"
                    alt=""
                  />
                </div>
                <div>
                  <h5 className="ms-3 mt-2  text-black">
                    Saytdagi ma'lumotlarni va videolarni VR tizimi orqali xis
                    qilish imoniyati mavjud.
                  </h5>
                </div>
              </li>
            </ul>
            <p className="text-black">
              Yuqorida sanalganlar bizning asosiy ustunlik tomonlarimiz
              xisoblanadi. Lekin odamlar bizmi faqat buning uchun emas, kuchli
              qadriyatlarimiz, intilishimiz va missiyamiz uchun ham tanlashadi.
              <br />
              <br />
              Jamoa a'zolari o'rtasida kuchli intizom, g'oliblik ishtiyoqi,
              do'stona munosabatlar aks etib turadi. Bir so'z bilan aytganda
              bizning jamoaviy ruh bizlarni bir oila sifatida birlashtirib
              turadi. Buning biz ulardan minnatdormiz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
