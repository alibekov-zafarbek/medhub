import React from "react";
import "./Prifile.css";
import edit from "../../assets/icons/pensil.svg"
import exit from "../../assets/icons/exit.svg"
import emailIcon from '../../assets/icons/email.svg'
import phoneIcon from '../../assets/icons/telephone.svg'
import linkIcon from '../../assets/icons/link.svg'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Link } from "react-router-dom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['.', '.', '.', '.' ,'.', '.', '.'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [1,2,4,6,9,3,2],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [1,2,4,6,9,3,2],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

function Profile() {
  return (
    <div className="userProfile">
      <div className="userBanner">
        <div className="container">
          <div className="userPerson">
            <img src="" alt="" />
          </div>
        </div>
        <div className="container">
          <div className="userTexts">
            <h2 className="userName">Adminstrator</h2>
            <p className="userDesc">
              * Admin
            </p>
          </div>
        </div>
      </div>
      <div className="main">
        <ul className="listSkill">
          <li className="itemSkill">
            <span>Coin</span>
            <p>53</p>
          </li>
          <li className="itemSkill">
            <span>Ko'rilgan</span>
            <p>6</p>
          </li>
          <li className="itemSkill">
            <span>Jami</span>
            <p>925</p>
          </li>
        </ul>
      </div>


    <div className="container">
      <div className="abautMe">
        <h2 className="abaut_title">Men Haqimda</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, temporibus quaerat? Quidem, aut praesentium rerum soluta eaque, at inventore corrupti molestias quaerat deserunt minus nesciuntw etil  </p>
      <Link ><img className="icons-ink" src={emailIcon} alt="" />admin@admin.com</Link><br />
      <Link ><img className="icons-ink" src={phoneIcon} alt="" /> +998905433465</Link><br />
      <Link ><img className="icons-ink" src={linkIcon} alt="" /> https://med-hub.com</Link><br />
        <button className="edit"><Link className="td-none" to='/settings'>Tahrirlash</Link><img src={edit} className="btn_edit" alt="" /></button>
        <button className="exit">Chiqish <img src={exit} className="btn_edit" alt="" /></button>
      </div>
    </div>
    <div className="container">
      <Bar className="line_chart" options={options} data={data} />
    </div>


    </div>
  );
}

export default Profile;
