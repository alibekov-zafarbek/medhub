import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function CourseTheme() {
  const [themes] = useState([
    {
      id: 1,
      name: "Bosh miya anatomiyasi",
    },
    {
      id: 2,
      name: "Orqa miya tashqi va ichki tuzilishi",
    },
    {
      id: 3,
      name: "Uzunchoq miya",
    },
    {
      id: 4,
      name: "Miya ko'prigi",
    },
    {
      id: 5,
      name: "Miyacha",
    },
    {
      id: 6,
      name: "Rombsimon chuqurcha. IV qorincha",
    },
    {
      id: 7,
      name: "O'rta miya",
    },
    {
      id: 8,
      name: "Talamus",
    },
    {
      id: 9,
      name: "Gipotalamus. III qorincha",
    },
    {
      id: 10,
      name: "Telencephalon",
    },
    {
      id: 11,
      name: "Umumiy sezgi o'tkazuv yo'llari",
    },
    {
      id: 12,
      name: "Xususiy sezgi yo'llari. Piramidal yo'llar",
    },
    {
      id: 13,
      name: "Ekstrapiramidal yo'llar. Assotsiativ yo'llar. Retikular formatsiya. Limbik sistema",
    },
    {
      id: 14,
      name: "Vegetativ nerv sistemasi. Esteziologiya",
    },
    {
      id: 15,
      name: "Orqa miya nervlari",
    },
    {
      id: 16,
      name: "Bo'yin va yelka chigali. Ko'krak nervlari",
    },
    {
      id: 17,
      name: "I, II, III, IV kranial nervlar",
    },
    {
      id: 18,
      name: "Nervus trigeminus",
    },
    {
      id: 19,
      name: "VI, VII, VIII, IX kranial nervlar",
    },
    {
      id: 20,
      name: "X, XI, XII kranial nervlar",
    },
    {
      id: 21,
      name: "Vegetativ nerv sistemasi",
    },
    {
      id: 22,
      name: "Ko'rish a'zosi",
    },
    {
      id: 23,
      name: "Eshitish a'zosi",
    },
  ]);
  const { main, direction, dep } = useParams();
  console.log(main, direction, dep);

  return (
    <div className="contact section-bg pt-5">
      <div className="container" data-aos="fade-up">
        <div className="section-title mt-5">
          <h3>
            <span>Mavzular</span>
          </h3>
          <div className="row mt-5" data-aos="fade-up" data-aos-delay={100}>
            {themes.map((item, index) => (

            <div className="col-lg-6 my-2" key={index}>
              <Link to={String(item.id)} className="text-black text-decoration-none">
                <div className="card courseTheme border-circle">
                  <div className="card-body fs-5 fw-bold py-4 ">
                    <span>{item.name}</span>
                  </div>
                </div>
              </Link>
            </div>
            ))}
           
          </div>
        </div>
      </div>
    </div>
  );
}
