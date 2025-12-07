// import React, { useEffect, useState } from 'react'
// import Slider from 'react-slick'
// import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
// import { PiGraduationCap } from 'react-icons/pi'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
// import CourseCard from '../../../components/HomePage/CourseCard'
// import './DiplomaCourse.css'
// import AOS from 'aos'
// import 'aos/dist/aos.css'

// const DiplomaCourse = () => {
//   // render()
//   const settings = {
//     // dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     initialSlide: 0,
//     nextArrow: <AiOutlineArrowRight className="text-black text-[30px]" />,
//     prevArrow: <AiOutlineArrowLeft className="text-black text-[30px]" />,
//     responsive: [
//       {
//         breakpoint: 1600,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//         },
//       },

//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           infinite: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   }
//   const [courses, setCourses] = useState([])

//   const allCourses = courses.filter(course => course.category === 'diploma')

//   useEffect(() => {
//     fetch('courses.json')
//       .then(res => res.json())
//       .then(data => setCourses(data))
//     AOS.init()
//   }, [])
//   return (
//     <div className="trandingSlider container px-6 pt-28 pb-10">
//       <div
//         data-aos="fade-down"
//         data-aos-easing="linear"
//         data-aos-duration="1500"
//         className="mb-14"
//       >
//         <h1 className="text-3xl text-center font-bold">Diploma Programs</h1>
//         <div className="flex pt-2 items-center justify-center gap-2">
//           <PiGraduationCap size={25} className="text-[#09adfe]" />
//           <h1 className="text-xl font-bold text-[#09adfe]"> Our Courses</h1>
//         </div>
//       </div>
//       <Slider {...settings}>
//         {allCourses.map(allCourse => (
//           <CourseCard key={allCourse.id} allCourse={allCourse}></CourseCard>
//         ))}
//       </Slider>
//     </div>
//   )
// }

// export default DiplomaCourse

import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineCalendar,
  AiOutlineBook,
  AiOutlineClockCircle,
  AiOutlineCheckCircle,
  AiOutlineGlobal,
  AiOutlineRocket,
} from "react-icons/ai";
import {
  PiGraduationCap,
  PiBuildings,
  PiCertificate,
  PiStudent,
  PiTrendUp,
  PiLightning,
} from "react-icons/pi";
import {
  FaUniversity,
  FaHandsHelping,
  FaChalkboardTeacher,
  FaAward,
  FaGraduationCap,
} from "react-icons/fa";
import CourseCard from "../../../components/HomePage/CourseCard";
import "./DiplomaCourse.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DiplomaCourse = () => {
  const [courses, setCourses] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute -right-12 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
        aria-label="Next"
      >
        <AiOutlineArrowRight className="text-white text-xl" />
      </button>
    );
  }

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute -left-12 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
        aria-label="Previous"
      >
        <AiOutlineArrowLeft className="text-white text-xl" />
      </button>
    );
  }

  const allCourses = courses.filter((course) => course.category === "diploma");

  // Group courses by engineering field for filtering
  const engineeringFields = [
    {
      id: "all",
      name: "All Programs",
      icon: <PiGraduationCap />,
      count: allCourses.length,
    },
    {
      id: "computer",
      name: "Computer Science",
      icon: <AiOutlineGlobal />,
      count: allCourses.filter(
        (c) => c.sub_name === "CSE" || c.sub_name === "SE"
      ).length,
    },
    {
      id: "electrical",
      name: "Electrical",
      icon: <PiLightning />,
      count: allCourses.filter(
        (c) => c.sub_name === "EEE" || c.sub_name === "EEA"
      ).length,
    },
    {
      id: "civil",
      name: "Civil",
      icon: <PiBuildings />,
      count: allCourses.filter((c) => c.sub_name === "CE").length,
    },
    {
      id: "mechanical",
      name: "Mechanical",
      icon: <AiOutlineRocket />,
      count: allCourses.filter(
        (c) => c.sub_name === "ME" || c.sub_name === "IME"
      ).length,
    },
    {
      id: "other",
      name: "Other Fields",
      icon: <FaChalkboardTeacher />,
      count: allCourses.filter(
        (c) =>
          !["CSE", "SE", "EEE", "EEA", "CE", "ME", "IME"].includes(c.sub_name)
      ).length,
    },
  ];

  const filteredCourses =
    activeFilter === "all"
      ? allCourses
      : allCourses.filter((course) => {
          switch (activeFilter) {
            case "computer":
              return ["CSE", "SE"].includes(course.sub_name);
            case "electrical":
              return ["EEE", "EEA"].includes(course.sub_name);
            case "civil":
              return course.sub_name === "CE";
            case "mechanical":
              return ["ME", "IME"].includes(course.sub_name);
            case "other":
              return !["CSE", "SE", "EEE", "EEA", "CE", "ME", "IME"].includes(
                course.sub_name
              );
            default:
              return true;
          }
        });

  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));

    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/20 to-white"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="relative container px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-20">
          <div
            data-aos="fade-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full border border-blue-100 mb-6">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-pulse"></div>
                <div
                  className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"
                  style={{ animationDelay: "0.3s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-pulse"
                  style={{ animationDelay: "0.6s" }}
                ></div>
              </div>
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                DIPLOMA PROGRAMS
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Engineering
              <span className="relative ml-4">
                <span className="relative z-10 bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                  Diploma Courses
                </span>
                <div className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-blue-100 via-cyan-100 to-emerald-100 rounded-full"></div>
              </span>
            </h1>

            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Comprehensive 4-year diploma programs designed to provide hands-on
              engineering education with industry-relevant skills and practical
              experience
            </p>

            <div className="flex items-center justify-center gap-4">
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
              <div className="flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full border border-blue-100 shadow-sm">
                <PiGraduationCap className="w-6 h-6 text-blue-600 animate-bounce" />
                <span className="font-semibold text-blue-700">
                  Global Academia Certified
                </span>
              </div>
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Program Highlights */}
        <div data-aos="fade-up" data-aos-delay="200" className="mb-12 md:mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <AiOutlineCalendar className="w-8 h-8 text-blue-600" />,
                title: "4-Year Duration",
                description: "Comprehensive program",
                bgColor: "from-blue-50 to-blue-100",
              },
              {
                icon: <PiCertificate className="w-8 h-8 text-emerald-600" />,
                title: "Industry Certified",
                description: "Globally recognized",
                bgColor: "from-emerald-50 to-emerald-100",
              },
              {
                icon: <FaHandsHelping className="w-8 h-8 text-cyan-600" />,
                title: "Practical Training",
                description: "Hands-on experience",
                bgColor: "from-cyan-50 to-cyan-100",
              },
              {
                icon: <FaGraduationCap className="w-8 h-8 text-purple-600" />,
                title: "Career Support",
                description: "Job placement assistance",
                bgColor: "from-purple-50 to-purple-100",
              },
            ].map((highlight, i) => (
              <div
                key={i}
                className="group relative p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl hover:shadow-blue-100/30 transition-all duration-500 hover:-translate-y-2"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${highlight.bgColor} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500`}
                ></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Tabs */}
        <div data-aos="fade-up" data-aos-delay="300" className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {engineeringFields.map((field) => (
              <button
                key={field.id}
                onClick={() => setActiveFilter(field.id)}
                className={`group relative px-5 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 ${
                  activeFilter === field.id
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-blue-200 hover:bg-blue-50"
                }`}
              >
                <div
                  className={`text-lg ${
                    activeFilter === field.id
                      ? "text-white"
                      : "text-blue-500 group-hover:text-blue-600"
                  }`}
                >
                  {field.icon}
                </div>
                <div className="text-left">
                  <div className="font-semibold">{field.name}</div>
                  <div
                    className={`text-xs ${
                      activeFilter === field.id
                        ? "text-blue-100"
                        : "text-gray-500 group-hover:text-gray-600"
                    }`}
                  >
                    {field.count} Programs
                  </div>
                </div>
                {activeFilter === field.id && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-white rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Course Slider */}
        <div data-aos="fade-up" data-aos-delay="400" className="relative">
          <div className="relative px-8 sm:px-12">
            <Slider ref={sliderRef} {...settings}>
              {filteredCourses.map((course, index) => (
                <div key={course.id} className="px-3">
                  <div className="relative group h-full">
                    {/* Enhanced Course Card */}
                    <div className="relative h-full bg-gradient-to-br from-white via-white to-blue-50/30 rounded-2xl border border-gray-100 shadow-xl shadow-gray-100/50 hover:shadow-2xl hover:shadow-blue-100/30 transition-all duration-500 overflow-hidden group-hover:-translate-y-2">
                      {/* Course Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={course.image}
                          alt={course.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                        {/* Course Badge */}
                        <div className="absolute top-4 left-4">
                          <div className="px-3 py-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white text-sm font-semibold shadow-lg">
                            {course.sub_name}
                          </div>
                        </div>

                        {/* Duration Badge */}
                        <div className="absolute top-4 right-4">
                          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-black/70 backdrop-blur-sm rounded-full text-white text-sm">
                            <AiOutlineClockCircle className="w-3 h-3" />
                            <span>4 Years</span>
                          </div>
                        </div>
                      </div>

                      {/* Course Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-1">
                          {course.name}
                        </h3>

                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {course.sub_detail}
                        </p>

                        {/* Quick Info */}
                        <div className="grid grid-cols-2 gap-3 mb-4">
                          <div className="flex items-center gap-2">
                            <AiOutlineBook className="w-4 h-4 text-blue-500" />
                            <span className="text-sm text-gray-700">
                              Full-time
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <PiStudent className="w-4 h-4 text-cyan-500" />
                            <span className="text-sm text-gray-700">
                              Hands-on
                            </span>
                          </div>
                        </div>

                        {/* Requirements */}
                        <div className="mb-6">
                          <div className="flex items-center gap-2 mb-2">
                            <AiOutlineCheckCircle className="w-4 h-4 text-emerald-500" />
                            <span className="text-sm font-medium text-gray-900">
                              Requirements:
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">
                              SSC Certificate
                            </span>
                            <span className="px-2 py-1 bg-cyan-50 text-cyan-700 text-xs rounded">
                              Passport
                            </span>
                            <span className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs rounded">
                              Police Clearance
                            </span>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                          <button className="flex-1 px-4 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1">
                            Apply Now
                          </button>
                          <button className="px-4 py-2.5 bg-white text-gray-700 font-semibold rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300">
                            Details
                          </button>
                        </div>
                      </div>

                      {/* Hover Effect Line */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Additional Information Section */}
        <div data-aos="fade-up" data-aos-delay="500" className="mt-16">
          <div className="bg-gradient-to-r from-blue-50 via-cyan-50 to-emerald-50 rounded-2xl p-8 md:p-12 border border-blue-100">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Why Choose Diploma Programs */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                    <PiTrendUp className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Why Choose Diploma Programs?
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Fast-track your engineering career
                    </p>
                  </div>
                </div>

                <ul className="space-y-4">
                  {[
                    "Industry-focused curriculum with practical training",
                    "Direct pathway to engineering careers",
                    "Lower tuition fees compared to degree programs",
                    "Early entry into the workforce",
                    "Strong foundation for further studies",
                    "Industry partnerships for internships",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <AiOutlineCheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Scholarship Information */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                    <FaAward className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Scholarship Opportunities
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Financial support available
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      type: "Merit-Based",
                      coverage: "Up to 50%",
                      deadline: "Dec 31, 2024",
                    },
                    {
                      type: "Need-Based",
                      coverage: "Up to 75%",
                      deadline: "Jan 15, 2025",
                    },
                    {
                      type: "Special Talent",
                      coverage: "Up to 100%",
                      deadline: "Feb 28, 2025",
                    },
                  ].map((scholarship, i) => (
                    <div
                      key={i}
                      className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-900">
                          {scholarship.type}
                        </span>
                        <span className="font-bold text-emerald-600">
                          {scholarship.coverage}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Deadline:</span>
                        <span className="text-sm font-medium text-gray-700">
                          {scholarship.deadline}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-10 pt-8 border-t border-blue-200 text-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 hover:scale-105">
                <span className="flex items-center justify-center gap-3">
                  Download Complete Course Catalog
                  <PiGraduationCap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-1 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
        }
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default DiplomaCourse;
