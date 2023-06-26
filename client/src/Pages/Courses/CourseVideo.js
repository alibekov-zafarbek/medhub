import React from 'react'

export default function CourseVideo() {
  return (
    <div className="contact section-bg">
  <div className="container" data-aos="fade-up">
    <div className="section-title mt-5">
      <h3>Video darslar</h3>
    </div>
    <div className="row mt-5" data-aos="fade-up" data-aos-delay={100}>
      <div className="col-lg-6 my-2">
        <div className="card" style={{ width: "100%" }}>
          <iframe
            width="auto"
            height={300}
            src="https://www.youtube.com/embed/nTPBMKFjd48?mute=1&autoplay=1"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; autostop; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen=""
          />
          <div className="card-body ">
            <h4 className="card-text w-100 ">
              Bosh miya anatomiyasi. Pushtalar. Gyuruslar. Sulcuslar. Hujayraviy
              qavatlar arxitektoniyasi
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
