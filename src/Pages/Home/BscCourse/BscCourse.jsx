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
  AiOutlineStar,
  AiOutlineTeam,
  AiOutlineBuild,
  AiOutlineCode,
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
  FaFlask,
  FaBusinessTime,
} from "react-icons/fa";
import { MdComputer, MdEngineering, MdScience } from "react-icons/md";
import CourseCard from "../../../components/HomePage/CourseCard";
import "./BscCourse.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BscCourse = () => {
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
        className="absolute -right-12 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-xl shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
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
        className="absolute -left-12 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-xl shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
        aria-label="Previous"
      >
        <AiOutlineArrowLeft className="text-white text-xl" />
      </button>
    );
  }

  const bscCourses = courses.filter((course) => course.category === "bachelor");

  // Group courses by discipline for filtering
  const disciplines = [
    {
      id: "all",
      name: "All Programs",
      icon: <PiGraduationCap />,
      count: bscCourses.length,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "engineering",
      name: "Engineering",
      icon: <MdEngineering />,
      count: bscCourses.filter((c) => c.field === "engineering").length,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "computer",
      name: "Computer Science",
      icon: <AiOutlineCode />,
      count: bscCourses.filter(
        (c) =>
          c.sub_name?.includes("CS") ||
          c.sub_name?.includes("IT") ||
          c.name?.toLowerCase().includes("computer")
      ).length,
      color: "from-indigo-500 to-purple-500",
    },
    {
      id: "business",
      name: "Business",
      icon: <FaBusinessTime />,
      count: bscCourses.filter(
        (c) =>
          c.field === "business" ||
          c.name
            ?.toLowerCase()
            .includes("bachelor of business administration") ||
          c.name?.toLowerCase().includes("bba")
      ).length,
      color: "from-emerald-500 to-teal-500",
    },
    {
      id: "science",
      name: "Natural Sciences",
      icon: <MdScience />,
      count: bscCourses.filter((c) => c.field === "science").length,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "arts",
      name: "Arts & Humanities",
      icon: <FaChalkboardTeacher />,
      count: bscCourses.filter((c) => c.field === "arts").length,
      color: "from-orange-500 to-red-500",
    },
  ];

  const filteredCourses =
    activeFilter === "all"
      ? bscCourses
      : bscCourses.filter((course) => {
          switch (activeFilter) {
            case "engineering":
              return course.field === "engineering";
            case "computer":
              return (
                course.sub_name?.includes("CS") ||
                course.sub_name?.includes("IT") ||
                course.name?.toLowerCase().includes("computer")
              );
            case "business":
              return (
                course.field === "business" ||
                course.name
                  ?.toLowerCase()
                  .includes("bachelor of business administration") ||
                course.name?.toLowerCase().includes("bba")
              );
            case "science":
              return course.field === "science";
            case "arts":
              return course.field === "arts";
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
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/20 to-white"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>

      <div className="relative container px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-20">
          <div
            data-aos="fade-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-full border border-purple-100 mb-6">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full animate-pulse"></div>
                <div
                  className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-pulse"
                  style={{ animationDelay: "0.3s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full animate-pulse"
                  style={{ animationDelay: "0.6s" }}
                ></div>
              </div>
              <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                BACHELOR'S PROGRAMS
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Undergraduate
              <span className="relative ml-4">
                <span className="relative z-10 bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 bg-clip-text text-transparent">
                  Degree Programs
                </span>
                <div className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-purple-100 via-pink-100 to-rose-100 rounded-full"></div>
              </span>
            </h1>

            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Comprehensive 4-year bachelor's degree programs designed to
              provide in-depth knowledge, critical thinking skills, and
              professional expertise for successful careers and advanced studies
            </p>

            <div className="flex items-center justify-center gap-4">
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"></div>
              <div className="flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-full border border-purple-100 shadow-sm">
                <FaUniversity className="w-6 h-6 text-purple-600 animate-bounce" />
                <span className="font-semibold text-purple-700">
                  Internationally Accredited
                </span>
              </div>
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Program Highlights */}
        <div data-aos="fade-up" data-aos-delay="200" className="mb-12 md:mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <AiOutlineCalendar className="w-8 h-8 text-purple-600" />,
                title: "4-Year Duration",
                description: "Comprehensive education",
                bgColor: "from-purple-50 to-purple-100",
              },
              {
                icon: <PiCertificate className="w-8 h-8 text-pink-600" />,
                title: "Global Recognition",
                description: "Internationally accredited",
                bgColor: "from-pink-50 to-pink-100",
              },
              {
                icon: <AiOutlineTeam className="w-8 h-8 text-rose-600" />,
                title: "Research Focus",
                description: "Thesis opportunities",
                bgColor: "from-rose-50 to-rose-100",
              },
              {
                icon: <FaGraduationCap className="w-8 h-8 text-indigo-600" />,
                title: "Career Advancement",
                description: "Higher study pathways",
                bgColor: "from-indigo-50 to-indigo-100",
              },
            ].map((highlight, i) => (
              <div
                key={i}
                className="group relative p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl hover:shadow-purple-100/30 transition-all duration-500 hover:-translate-y-2"
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
            {disciplines.map((discipline) => (
              <button
                key={discipline.id}
                onClick={() => setActiveFilter(discipline.id)}
                className={`group relative px-5 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 ${
                  activeFilter === discipline.id
                    ? `bg-gradient-to-r ${discipline.color} text-white shadow-lg shadow-purple-500/30`
                    : "bg-white text-gray-700 border border-gray-200 hover:border-purple-200 hover:bg-purple-50"
                }`}
              >
                <div
                  className={`text-lg ${
                    activeFilter === discipline.id
                      ? "text-white"
                      : "text-purple-500 group-hover:text-purple-600"
                  }`}
                >
                  {discipline.icon}
                </div>
                <div className="text-left">
                  <div className="font-semibold">{discipline.name}</div>
                  <div
                    className={`text-xs ${
                      activeFilter === discipline.id
                        ? "text-purple-100"
                        : "text-gray-500 group-hover:text-gray-600"
                    }`}
                  >
                    {discipline.count} Programs
                  </div>
                </div>
                {activeFilter === discipline.id && (
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
                    <div className="relative h-full bg-gradient-to-br from-white via-white to-purple-50/30 rounded-2xl border border-gray-100 shadow-xl shadow-gray-100/50 hover:shadow-2xl hover:shadow-purple-100/30 transition-all duration-500 overflow-hidden group-hover:-translate-y-2">
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
                          <div className="px-3 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-sm font-semibold shadow-lg">
                            {course.sub_name || "B.Sc."}
                          </div>
                        </div>

                        {/* Credit Hours Badge */}
                        <div className="absolute top-4 right-4">
                          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-black/70 backdrop-blur-sm rounded-full text-white text-sm">
                            <AiOutlineStar className="w-3 h-3" />
                            <span>{course.credits || "120"} Credits</span>
                          </div>
                        </div>

                        {/* Degree Type Badge */}
                        <div className="absolute bottom-4 left-4">
                          <div className="px-2 py-1 bg-white/90 backdrop-blur-sm rounded text-xs font-medium text-gray-800">
                            {course.degree_type || "Honors"}
                          </div>
                        </div>
                      </div>

                      {/* Course Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-1">
                          {course.name}
                        </h3>

                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {course.description ||
                            course.sub_detail ||
                            "Comprehensive bachelor's degree program with focus on theoretical knowledge and practical applications."}
                        </p>

                        {/* Quick Info */}
                        <div className="grid grid-cols-2 gap-3 mb-4">
                          <div className="flex items-center gap-2">
                            <AiOutlineBook className="w-4 h-4 text-purple-500" />
                            <span className="text-sm text-gray-700">
                              Full Semester
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <PiStudent className="w-4 h-4 text-pink-500" />
                            <span className="text-sm text-gray-700">
                              Research Based
                            </span>
                          </div>
                        </div>

                        {/* Specializations */}
                        <div className="mb-6">
                          <div className="flex items-center gap-2 mb-2">
                            <AiOutlineCheckCircle className="w-4 h-4 text-emerald-500" />
                            <span className="text-sm font-medium text-gray-900">
                              Specializations:
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {course.specializations
                              ?.slice(0, 3)
                              .map((spec, i) => (
                                <span
                                  key={i}
                                  className="px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded"
                                >
                                  {spec}
                                </span>
                              )) || (
                              <>
                                <span className="px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded">
                                  Major Subject
                                </span>
                                <span className="px-2 py-1 bg-pink-50 text-pink-700 text-xs rounded">
                                  Minor Subject
                                </span>
                                <span className="px-2 py-1 bg-rose-50 text-rose-700 text-xs rounded">
                                  Electives
                                </span>
                              </>
                            )}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                          <button className="flex-1 px-4 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-1">
                            Apply Now
                          </button>
                          <button className="px-4 py-2.5 bg-white text-gray-700 font-semibold rounded-lg border border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-300">
                            Details
                          </button>
                        </div>
                      </div>

                      {/* Hover Effect Line */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Additional Information Section */}
        <div data-aos="fade-up" data-aos-delay="500" className="mt-16">
          <div className="bg-gradient-to-r from-purple-50 via-pink-50 to-rose-50 rounded-2xl p-8 md:p-12 border border-purple-100">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Why Choose Bachelor's Programs */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30">
                    <PiTrendUp className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Advantages of Bachelor's Degrees
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Building foundations for success
                    </p>
                  </div>
                </div>

                <ul className="space-y-4">
                  {[
                    "Comprehensive theoretical and practical knowledge",
                    "Pathway to master's and doctoral studies",
                    "Higher earning potential and career growth",
                    "Development of critical thinking and research skills",
                    "International recognition and accreditation",
                    "Access to professional networks and alumni associations",
                    "Opportunities for internships and industry projects",
                    "Preparation for leadership roles",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <AiOutlineCheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Admission Requirements */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center shadow-lg shadow-pink-500/30">
                    <FaAward className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Admission Requirements
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Eligibility criteria
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      requirement: "High School Diploma",
                      details: "Minimum GPA: 3.0/4.0",
                      icon: "🎓",
                    },
                    {
                      requirement: "English Proficiency",
                      details: "TOEFL 80+ or IELTS 6.0+",
                      icon: "🌍",
                    },
                    {
                      requirement: "Entrance Exam",
                      details: "SAT/ACT or equivalent",
                      icon: "📝",
                    },
                    {
                      requirement: "Recommendation Letters",
                      details: "Minimum 2 letters required",
                      icon: "✉️",
                    },
                    {
                      requirement: "Personal Statement",
                      details: "500-1000 words",
                      icon: "📄",
                    },
                  ].map((req, i) => (
                    <div
                      key={i}
                      className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-2xl">{req.icon}</div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-semibold text-gray-900">
                              {req.requirement}
                            </span>
                          </div>
                          <div className="text-sm text-gray-600">
                            {req.details}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="mt-12 pt-8 border-t border-purple-200">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  {
                    label: "Graduation Rate",
                    value: "92%",
                    color: "text-purple-600",
                  },
                  {
                    label: "Employed After 6 Months",
                    value: "89%",
                    color: "text-pink-600",
                  },
                  {
                    label: "International Students",
                    value: "35%",
                    color: "text-rose-600",
                  },
                  {
                    label: "Research Publications",
                    value: "200+",
                    color: "text-indigo-600",
                  },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div
                      className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-10 pt-8 border-t border-purple-200 text-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 hover:scale-105">
                <span className="flex items-center justify-center gap-3">
                  Download Complete Bachelor's Program Catalog
                  <PiGraduationCap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </span>
              </button>
              <p className="text-gray-500 text-sm mt-4">
                Explore 50+ bachelor's programs across various disciplines
              </p>
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

export default BscCourse;
