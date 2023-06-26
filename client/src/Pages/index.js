import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";

export { default as Home } from "./Home";
export { default as AboutUs } from "./AboutUs";
export { default as Login } from "./Login";
export { default as Courses } from "./Courses/Courses";
export { default as CourseCategory } from "./Courses/CourseCategory";
export { default as CourseDepartment } from "./Courses/CourseDepartment";
export { default as CourseAbout } from "./Courses/CourseAbout";
export { default as CourseTheme } from "./Courses/CourseTheme";
export { default as CourseTypes } from "./Courses/CourseTypes";
export { default as QuizApp } from "./Courses/CourseTest";
export { default as CourseVideo } from "./Courses/CourseVideo";
export { default as FlashCards } from "./Courses/FlashCards";
export { default as Atlas } from "./Courses/Atlas";

export let loginKey = window.localStorage.getItem('loginKey')
if(!window.localStorage.getItem('loginKey')){
  loginKey='/signin'
}
function NavigateApp() {
  const location = useLocation();
  
  const navigate = useNavigate();
  useEffect(() => {
    if (!window.localStorage.getItem("SecretKey")) {
      navigate(`/login${loginKey}`);
    }
  }, [location.pathname]);
}
export default NavigateApp;
