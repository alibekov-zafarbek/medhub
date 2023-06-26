import {
  useGLTF,
  ContactShadows,
  OrbitControls,
  Preload,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";

import { Html, useProgress } from "@react-three/drei";
import { HexColorPicker } from "react-colorful";
import { proxy, useSnapshot } from "valtio";
import { Brain } from "../../common/Brain";
// import { Brain } from "../../common/Brain2";
import { Model } from "../../common/Human_brain";
// import GLTFLoader from "three-gltf-loader";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { useState } from "react";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load"></span>
      <p
        style={{
          fontSize: 14,
          color: "#f1f1f1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

function Scene() {
  const gltf = useLoader(GLTFLoader, "/brain/Startup.glb");
  return <primitive object={gltf.scene} />;
}

export default function CourseAbout() {
  // const [color1, setColor] = useState([110, -13, -33])
  const target = useRef();
  return (
    <div className="contact section-bg position-relative h-100 pt-5">
      <div className="container-fluid px-4" data-aos="fade-up">
        <div className="section-title mt-3">
          <h3>Bosh miya anatomiyasi</h3>
          {/* <input type="number" value={color1[0]} onChange={e => setColor([ e.target.value, color1[1], color1[2]])}/>
          <input type="number" value={color1[1]} onChange={e => setColor([color1[0] ,e.target.value, color1[2]])}/>
          <input type="number" value={color1[2]} onChange={e => setColor([color1[0], color1[1] ,e.target.value])}/> */}
        </div>
        {/* <Wrapper /> */}

        <div className="row mt-5 h-100" data-aos="fade-up" data-aos-delay={100}>
          <div className="col-lg-12 ">
            <div className="card example-1 ">
              <div className="card-body">
                <b>Bosh miya</b>
                <p>
                  Bosh miya uni o‘ragan pardalari bilan birga kallaning miya
                  qismi ichida joylashgan. Uning ustki yon yuzasi kalla
                  gumbazini hosil qiladi. Pastki yuzasi kallaning ichki
                  asosidagi chuqurchalarga mos murakkab relyefga ega. Bosh
                  miyaning og‘irligi katta odamlarda 1100 dan 2000 g gacha,
                  o‘rtacha: erkaklarda 1394, ayollarida 1245 g. Bosh miya uch
                  yirik qismdan: bosh miya yarim pallasi, miyacha va bosh miya
                  so‘g‘onidan iborat.{" "}
                </p>
                <br />
                <b>Bosh miya yarim pallasi</b>
                <p>
                  Har bir bosh miyaning yarim pallasi quyidagi qismlardan
                  iborat:
                </p>
                <ol>
                  <li>Plashch (pallium)</li>
                  <li>Hidlov miyasi (rhinencephalon)</li>
                  <li>Yon qorincha (ventriculus lateralis)</li>
                  <li>Bazal o‘zaklar</li>
                </ol>
                <p>
                  Bosh miya yarim pallasining yuzasi har xil chuqurlikdagi va
                  uzunlikdagi egatlar yordamida juda ko‘p bosh miya pushtalariga
                  bo‘linadi. Bosh miyaning pushtasi (gyrus cerebri) ikkita egat
                  o‘rasida joylashgan miyaning ko‘tarilib chiqqan qismiga
                  aytiladi.{" "}
                </p>
                <br />
                <p>
                  Bosh miya yarim pallasining oldinga va orqaga chiqqan qismlari
                  qutblar deb ataladi.Uchta qutub tafovut qilinadi: peshona
                  qutbi (polus frontalis), ensa qutbi (polus occipitalis) va
                  chakka qutbi (polus temporalis) tafovut qilinadi.
                </p>
                <br />
                <p>
                  Har bir bosh miya yarim pallasi chuqur egatlar yordamida
                  beshta: peshona, tepa, ensa, chakka bo‘laklari va orolchaga
                  bo‘linadi.
                </p>
                <br />
                <p>
                  Bosh miya yarim pallasining ustki lateral yuzasida frontal
                  sathda joylashgan markaziy yoki Roland egati (sulcus
                  centralis) peshona bo‘lagini tepa bo‘lagidan ajratib turadi.
                  Bu egat yarim pallaning medial yuzasining yuqori qismidan
                  boshlanib, yon egatgacha boradi.
                </p>
                <br />
                <p>
                  Tepa bo‘lak ensa bo’lakdan medial yuzada joylashgan tepa ensa
                  egatidan (sulcus parietooccipitales) boshlanib, pastga tomon
                  yo‘nalgan shartli chiziq yordamida ajraladi.
                </p>
                <br />
                <p>
                  Chakka bo’lakni boshqa bo‘laklardan lateral egat (sulcus
                  lateralis) ajratib turadi.{" "}
                </p>
                <br />
                <p>
                  Miya yarim pallasining peshona bo‘lagi (lobus frontalis) old
                  tomonda peshona qutbini (polus anterior) hosil qiladi .
                  Peshona bo‘lagida markaziy egatga parallel holda markaz oldi
                  egati (sulcus precentralis) yotadi. Bu egat ko‘pincha
                  o‘rtasida ikkita alohida qismga bo’linadi. Markaz oldi
                  egatidan oldinga qarab ustki va pastki peshona egatlari
                  (sulcus frontalis superior et inferior) yo‘naladi. Bu egatlar
                  peshona bo’lagining ustki lateral yuzasini pushtalarga
                  ajratadi. Markaziy va markaz oldi egatlari o‘rtasida markaz
                  oldi pushtasi (gyrus precentralis) joylashadi. Ustki peshona
                  egatidan yuqorida ustki peshona pushtasi (gyrus frontalis
                  superior) yotadi. Ustki va pastki peshona egatlari o‘rtasida
                  o‘rta peshona pushtasi (gyrus frontalis medius), pastki
                  peshona egatidan pastda pastki peshona pushtasi (gyrus
                  frontalis inrerior) joylashgan. Pastki peshona pushtasini
                  lateral egatdan kiruvchi ko‘tariluvchi shox (ramus ascendens)
                  va oldingi shox (ramus anterior) uchta mayda pushtaga
                  ajratadi. Markaz oldi pushtasining pastki qismi bilan
                  ko‘tariluvchi shox o‘rtasida joylashgan orolchani ustidan
                  yopib turuvchi qobiq qismi (pars opercularis), ko‘tariluvchi
                  va oldingi shoxlar o‘rtasidagi uchburchakli qismi (pars
                  triangularis), oldingi shoxdan pastdagisi ko‘z kosasi usti
                  qismi (pars orbitalis) tafovut qilinadi.
                </p>
                <br />
                <p>
                  Tepa bolagida (lobus parietalis) markaziy egatga parallel
                  joylashgan markaz orqasidagi egat (sulcus postcentralis)
                  bolib, ular o‘rtasida markaz orqasidagi pushta (gyrus
                  postcentralis) yotadi. Bu pushta yarimsharlaming medial
                  yuzasiga davom etadi va peshona bolagining markaz oldi
                  pushtasiga qo‘shilib, markaz atrofidagi bolakchani (lobulus
                  paracentralis) hosil qiladi.Markaz orqa egatidan orqaga
                  yo‘naluvchi tepa bolagining ichidagi egat (sulcus
                  intraparitalis) tepa bolagini ustki va pastki tepa
                  bolakchalariga (lobulus parietales superior et inferior)
                  bo’ladi. Pastki tepa bo‘lakchasi ikki pushtaga: lateral
                  egatning uchini o‘ragan qirg‘oq usti pushtasi (gyrus
                  supramarginalis) va ustki chakka egati uchini o‘ragan
                  burchakli pushtasiga (gyrus angularis) bo‘linadi.
                  <br />
                </p>
                <p>
                  {" "}
                  Ensa bo‘lagi (lobus occipitalis) nisbatan kichik bo‘lib, orqa
                  tomonda ensa qutbi (polus occipitalis) bo‘lib tugaydi. Ensa
                  bolagining egat va pushtalari juda o‘zgaruvchan bo‘ladi.Tepa
                  bo‘lagining ichidagi egatining davomi bo’lgan ko‘ndalang ensa
                  egati (sulcus occipitalis transversus) boshqalarga nisbatan
                  yaxshi bilinadi.
                </p>
                <br />
                <p>
                  Chakka bo’lagi (lobus temporalis) ning oldingi qismi chakka
                  qutbini (polus temporalis) hosil qiladi. Chakka bo’lagining
                  ustki lateral yuzasida lateral egatga parallel joylashgan
                  ustki va pastki chakka egatlari (sulcus temporalis superior et
                  sulcus temporalis inferior) joylashgan. Lateral egat bilan
                  ustki chakka egati o‘rtasida ustki chakka pushtasi (gyrus
                  temporalis superior) yotadi. O‘rta chakka pushtasi (gyrus
                  temporalis medius) ustki va pastki chakka egatlari o‘rtasida
                  joylashsa, pastki chakka pushtasi (gyrus temporalis inferior)
                  yuqoridan pastki chakka egati bilan chegaralanadi.
                </p>
                <br />
                <p>
                  Orolcha bo‘lagi (lobus insularis) yon egatning tubida
                  joylashgan bo‘lib, uni ko‘rish uchun peshona, tepa va chakka
                  bo’laklarining yopqich (operculum) qismini olib tashlash kerak
                  bo’ladi. Orolcha boshqa bo‘laklardan chuqur orolchaning
                  halqasimon egati(sulcus circul aris insulae) vositasida
                  ajralib turadi. Orolchaning markaziy egati (sulcus centralis
                  insulae) uni ikki bo’lakka ajratadi. Orqa bo‘lagida
                  orolchaning uzun pushtasi (gyrus longus insulae), oldingi
                  bo’lagida esa orolchaning kalta pushtalari (gyri breves
                  insulae) joylashgan. Orolchaning oldingi pastki qismida
                  egatlar bo’lmay uncha katta bo’lmagan orolcha ostonasi (limen
                  insulae) bo’ladi.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6  sticky_container">
            <div className="w-100 sticked h-100 ">
             
            </div>
            {/* <div className="w-100 sticked h-100 ">
              <div className="card-body ">
                <video
                  src="./assets/video/video_1.mp4"
                  width="100%"
                  height="100%"
                  autoPlay=""
                  muted=""
                  loop=""
                  type="video/mp4"
                ></video>
              </div>
              <div className="card-body ">
                <video
                  src="./assets/video/video_2.mp4"
                  width="100%"
                  height="100%"
                  autoPlay=""
                  muted=""
                  loop=""
                  type="video/mp4"
                ></video>
              </div>
              <div className="card-body ">
                <video
                  src="./assets/video/video_3.mp4"
                  width="100%"
                  height="100%"
                  autoPlay=""
                  muted=""
                  loop=""
                  type="video/mp4"
                ></video>
              </div>
              <div className="card-body ">
                <video
                  src="./assets/video/video_4.mp4"
                  width="100%"
                  height="100%"
                  autoPlay=""
                  muted=""
                  loop=""
                  type="video/mp4"
                ></video>
              </div>
              <div className="card-body ">
                <video
                  src="./assets/video/video_5.mp4"
                  width="100%"
                  height="100%"
                  autoPlay=""
                  muted=""
                  loop=""
                  type="video/mp4"
                ></video>
              </div>
              <div className="card-body ">
                <video
                  src="./assets/video/video_6.mp4"
                  width="100%"
                  height="100%"
                  autoPlay=""
                  muted=""
                  loop=""
                  type="video/mp4"
                ></video>
              </div>
              <div className="card-body ">
                <video
                  src="./assets/video/video_7.mp4"
                  width="100%"
                  height="100%"
                  autoPlay=""
                  muted=""
                  loop=""
                  type="video/mp4"
                ></video>
              </div>
              <div className="card-body ">
                <video
                  src="./assets/video/video_8.mp4"
                  width="100%"
                  height="100%"
                  autoPlay=""
                  muted=""
                  loop=""
                  type="video/mp4"
                ></video>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
