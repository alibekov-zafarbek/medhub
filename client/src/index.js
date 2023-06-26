import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import  Express  from "express";
// import mongoose from "mongoose";
// import flash from 'connect-flash'
// import session from "express-session";
// import dotenv from 'dotenv/config'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// dotenv.config()


// const app = Express()

// app.use(Express.json());

// app.use(Express.urlencoded({extended: true }))
// app.use(session({secret: "WeeB.Dev", resave: false, saveUninitialized: false}))
// app.use(flash())

// const startapp=()=>{
//   try{
//     mongoose.set('strictQuery', false)
//     mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true,},console.log('MongoDB Connect'));
//     app.listen(4100, () => console.log(`server is ${PORT}!`))
//     const PORT = process.env.PORT || 4100

//   }catch(error){
//     console.log(error)
//   }
// }
// startapp()









reportWebVitals();
