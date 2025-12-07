import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import DetailsCourse from "../components/HomePage/DetailsCourse";

import Services from "../Pages/Services/Services/Services";
import StudyAbroad from "../Pages/StudyAbroad/StudyAbroad/StudyAbroad";
import Scholarship from "../Pages/Scholarship/Scholarship/Scholarship";
import Contact from "../Pages/Contact/Contact/Contact";
import TramsCondition from "../Pages/TramsCondition/TramsCondition";
import AboutSection from "../Pages/About/About/AboutSection";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutSection />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/study",
        element: <StudyAbroad />,
      },
      {
        path: "/scholarship",
        element: <Scholarship />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/tramsCondition",
        element: <TramsCondition />,
      },
      {
        path: "/course/:courseId",
        element: <DetailsCourse />,
        loader: ({ params }) => fetch("/courses.json"),
      },
    ],
  },
]);
