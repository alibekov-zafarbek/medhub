import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  Courses,
  Login,
  AboutUs,
  CourseDepartment,
  CourseTheme,
  CourseCategory,
  CourseTypes,
  QuizApp,
  CourseAbout,
  Atlas
} from "./Pages";
import ErrorPage from "./error-page";
import "./assets/css/styles.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Header from "./common/header";
import Footer from "./common/footer";
import Profile from "./Pages/profile/Profile";
import ProfileEdit from "./Pages/profile/edit/ProfileEdit";
import Register from "./Pages/Register";
import NavigateApp from "./Pages";
function App() {
  
  useEffect(() => {
    
    AOS.init();
  }, []);
 
  return (
    <>
      <Router>
    <NavigateApp/>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
          <Route path="/courses/:main/:direction/:dep/:theme/test" element={<QuizApp />} />
          <Route path="/courses/:main/:direction/:dep/:theme/atlas" element={<Atlas />} />
          <Route path="/courses/:main/:direction/:dep/:theme/about" element={<CourseAbout />} />
          <Route path="/courses/" element={<Courses />} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/courses/:main" element={<CourseCategory />} />
          <Route path="/settings" element={<ProfileEdit/>}/>
          <Route path='/login/signup' element={<Register/>}/>
          <Route
            path="/courses/:main/:direction"
            element={<CourseDepartment />}
          />
          <Route
            path="/courses/:main/:direction/:dep"
            element={<CourseTheme />}
          />
          <Route
            path="/courses/:main/:direction/:dep/:theme"
            element={<CourseTypes />}
          />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login/signin" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
