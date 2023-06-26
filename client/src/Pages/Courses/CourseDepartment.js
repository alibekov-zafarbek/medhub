import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function CourseDepartment() {
  const [themes] = useState([
    {
      name: "Nevrologiya",
      slug: "nevrologiya",
      dep:"anatomiya",
      lock: false
    },
    {
      name: "Osteologiya",
      slug: "osteologiya",
      dep:"anatomiya",
      lock: false
    },
    {
      name: "Miologiya",
      slug: "miologiya",
      dep:"anatomiya",
      lock: false
    },
    {
      name: "Splanxologiya",
      slug: "splanxologiya",
      dep:"anatomiya",
      lock: false

    },
    {
      name: "Artrologiya",
      slug: "artrologiya",
      dep:"anatomiya",
      lock: false

    },
    {
      name: "Angiologiya",
      slug: "angiologiya",
      dep:"anatomiya",
      lock: false

    },
    {
      name: "Uglevodlar",
      slug: "uglevodlar",
      dep:"biokimyo",
      lock: false

    },
    {
      name: "Lipidlar",
      slug: "lipidlar",
      dep:"biokimyo",
      lock: false

    },
    {
      name: "Aminokislotalar",
      slug: "aminokislotalar",
      dep:"biokimyo",
      lock: false

    },
    {
      name: "Vitaminlar",
      slug: "vitaminlar",
      dep:"biokimyo",
      lock: false

    },
    {
      name: "Minerallar va elektrolitlar",
      slug: "minerallar-va-elektrolitlar",
      dep:"biokimyo",
      lock: false
    },
    {
      name: "Nuklein kislotalar",
      slug: "nuklein-kislotalar",
      dep:"biokimyo",
      lock: false

    },
    {
      name: "Farmakokinetika",
      slug: "farmakokinetika",
      dep:"farmakologiya",
      lock: false

    },
    {
      name: "Farmakodinamika",
      slug: "farmakodinamika",
      dep:"farmakologiya",
      lock: false

    },
  ]);

  const { direction  } = useParams();
  const filteredThemes = themes.filter(item => item.dep === direction)
  return (
    <div className="contact pt-5 section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title mt-5">
          <h3 className="text-uppercase">
            <span>Kerakli bo'limni tanlang</span>{" "}
          </h3>
          <div className="row mt-5" data-aos="fade-up" data-aos-delay={100}>
            <div className="col-lg-6 ">
              {/* <iframe class="w-100 pt-3 " style="height: 55vh;" width="560" height="400" src="https://www.youtube.com/embed/eoqFFY9Qvxg?controls=0"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe> */}
              <img
                className="w-100 "
                style={{ height: "300px" }}
                src={require(`../../assets/img/fanlar/${direction}.png`)}
                alt=""
              />
            </div>
            <div className="col-lg-6 h-auto align-self-end">
              {filteredThemes.map((theme, index) => (
              <Link key={index}
                to={`${theme.slug}`}
                className="text-black text-decoration-none"
              >
                <div className="card courseTheme  my-3 border-circle">
                  <div className="card-body fw-bold ">{theme.name}</div>
                </div>
              </Link>

              ))}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
