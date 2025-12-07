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
  FaBusinessTime,
  FaResearchgate,
  FaUserGraduate,
} from "react-icons/fa";
import { MdEngineering, MdScience, MdSchool } from "react-icons/md";
import CourseCard from "../../../components/HomePage/CourseCard";
import "./MscCourse.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MscCourse = () => {
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
        className="absolute -right-12 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-xl shadow-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
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
        className="absolute -left-12 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-xl shadow-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
        aria-label="Previous"
      >
        <AiOutlineArrowLeft className="text-white text-xl" />
      </button>
    );
  }

  const mscCourses = courses.filter((course) => course.category === "master");

  // Group courses by specialization for filtering
  const specializations = [
    {
      id: "all",
      name: "All Programs",
      icon: <PiGraduationCap />,
      count: mscCourses.length,
      color: "from-emerald-500 to-teal-500",
    },
    {
      id: "engineering",
      name: "Engineering",
      icon: <MdEngineering />,
      count: mscCourses.filter((c) => c.field === "engineering").length,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "computer",
      name: "Computer Science",
      icon: <AiOutlineCode />,
      count: mscCourses.filter(
        (c) =>
          c.sub_name?.includes("CS") ||
          c.sub_name?.includes("IT") ||
          c.name?.toLowerCase().includes("computer")
      ).length,
      color: "from-indigo-500 to-purple-500",
    },
    {
      id: "business",
      name: "Business & MBA",
      icon: <FaBusinessTime />,
      count: mscCourses.filter(
        (c) =>
          c.field === "business" ||
          c.name?.toLowerCase().includes("mba") ||
          c.name?.toLowerCase().includes("master of business")
      ).length,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "research",
      name: "Research",
      icon: <FaResearchgate />,
      count: mscCourses.filter((c) => c.program_type === "research").length,
      color: "from-orange-500 to-red-500",
    },
    {
      id: "professional",
      name: "Professional",
      icon: <FaUserGraduate />,
      count: mscCourses.filter((c) => c.program_type === "professional").length,
      color: "from-amber-500 to-yellow-500",
    },
  ];

  const filteredCourses =
    activeFilter === "all"
      ? mscCourses
      : mscCourses.filter((course) => {
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
                course.name?.toLowerCase().includes("mba") ||
                course.name?.toLowerCase().includes("master of business")
              );
            case "research":
              return course.program_type === "research";
            case "professional":
              return course.program_type === "professional";
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
      <div className="absolute inset-0 bg-gradient-to-b from-white via-emerald-50/20 to-white"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>

      <div className="relative container px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-20">
          <div
            data-aos="fade-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-full border border-emerald-100 mb-6">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full animate-pulse"></div>
                <div
                  className="w-2 h-2 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full animate-pulse"
                  style={{ animationDelay: "0.3s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full animate-pulse"
                  style={{ animationDelay: "0.6s" }}
                ></div>
              </div>
              <span className="text-sm font-semibold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                MASTER'S PROGRAMS
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Postgraduate
              <span className="relative ml-4">
                <span className="relative z-10 bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                  Degree Programs
                </span>
                <div className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-emerald-100 via-teal-100 to-cyan-100 rounded-full"></div>
              </span>
            </h1>

            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Advanced 1-2 year master's degree programs designed to provide
              specialized expertise, research skills, and leadership
              capabilities for career advancement and academic excellence
            </p>

            <div className="flex items-center justify-center gap-4">
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent rounded-full"></div>
              <div className="flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-full border border-emerald-100 shadow-sm">
                <MdSchool className="w-6 h-6 text-emerald-600 animate-bounce" />
                <span className="font-semibold text-emerald-700">
                  Research-Intensive
                </span>
              </div>
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Program Highlights */}
        <div data-aos="fade-up" data-aos-delay="200" className="mb-12 md:mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: (
                  <AiOutlineCalendar className="w-8 h-8 text-emerald-600" />
                ),
                title: "1-2 Years",
                description: "Advanced specialization",
                bgColor: "from-emerald-50 to-emerald-100",
              },
              {
                icon: <PiCertificate className="w-8 h-8 text-teal-600" />,
                title: "Global Standards",
                description: "International accreditation",
                bgColor: "from-teal-50 to-teal-100",
              },
              {
                icon: <FaResearchgate className="w-8 h-8 text-cyan-600" />,
                title: "Research Focus",
                description: "Thesis/dissertation",
                bgColor: "from-cyan-50 to-cyan-100",
              },
              {
                icon: <FaGraduationCap className="w-8 h-8 text-lime-600" />,
                title: "Career Leadership",
                description: "Executive positions",
                bgColor: "from-lime-50 to-lime-100",
              },
            ].map((highlight, i) => (
              <div
                key={i}
                className="group relative p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl hover:shadow-emerald-100/30 transition-all duration-500 hover:-translate-y-2"
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
            {specializations.map((specialization) => (
              <button
                key={specialization.id}
                onClick={() => setActiveFilter(specialization.id)}
                className={`group relative px-5 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 ${
                  activeFilter === specialization.id
                    ? `bg-gradient-to-r ${specialization.color} text-white shadow-lg shadow-emerald-500/30`
                    : "bg-white text-gray-700 border border-gray-200 hover:border-emerald-200 hover:bg-emerald-50"
                }`}
              >
                <div
                  className={`text-lg ${
                    activeFilter === specialization.id
                      ? "text-white"
                      : "text-emerald-500 group-hover:text-emerald-600"
                  }`}
                >
                  {specialization.icon}
                </div>
                <div className="text-left">
                  <div className="font-semibold">{specialization.name}</div>
                  <div
                    className={`text-xs ${
                      activeFilter === specialization.id
                        ? "text-emerald-100"
                        : "text-gray-500 group-hover:text-gray-600"
                    }`}
                  >
                    {specialization.count} Programs
                  </div>
                </div>
                {activeFilter === specialization.id && (
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
                    <div className="relative h-full bg-gradient-to-br from-white via-white to-emerald-50/30 rounded-2xl border border-gray-100 shadow-xl shadow-gray-100/50 hover:shadow-2xl hover:shadow-emerald-100/30 transition-all duration-500 overflow-hidden group-hover:-translate-y-2">
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
                          <div className="px-3 py-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-white text-sm font-semibold shadow-lg">
                            {course.sub_name || "M.Sc."}
                          </div>
                        </div>

                        {/* Program Type Badge */}
                        <div className="absolute top-4 right-4">
                          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-black/70 backdrop-blur-sm rounded-full text-white text-sm">
                            <AiOutlineStar className="w-3 h-3" />
                            <span>{course.program_type || "Research"}</span>
                          </div>
                        </div>

                        {/* Degree Level Badge */}
                        <div className="absolute bottom-4 left-4">
                          <div className="px-2 py-1 bg-white/90 backdrop-blur-sm rounded text-xs font-medium text-gray-800">
                            {course.degree_level || "Postgraduate"}
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
                            "Advanced master's program focusing on specialized knowledge and research excellence."}
                        </p>

                        {/* Quick Info */}
                        <div className="grid grid-cols-2 gap-3 mb-4">
                          <div className="flex items-center gap-2">
                            <AiOutlineBook className="w-4 h-4 text-emerald-500" />
                            <span className="text-sm text-gray-700">
                              {course.duration || "1-2 Years"}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <PiStudent className="w-4 h-4 text-teal-500" />
                            <span className="text-sm text-gray-700">
                              Specialized
                            </span>
                          </div>
                        </div>

                        {/* Focus Areas */}
                        <div className="mb-6">
                          <div className="flex items-center gap-2 mb-2">
                            <AiOutlineCheckCircle className="w-4 h-4 text-emerald-500" />
                            <span className="text-sm font-medium text-gray-900">
                              Focus Areas:
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {course.specializations
                              ?.slice(0, 3)
                              .map((spec, i) => (
                                <span
                                  key={i}
                                  className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs rounded"
                                >
                                  {spec}
                                </span>
                              )) || (
                              <>
                                <span className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs rounded">
                                  Advanced Research
                                </span>
                                <span className="px-2 py-1 bg-teal-50 text-teal-700 text-xs rounded">
                                  Specialization
                                </span>
                                <span className="px-2 py-1 bg-cyan-50 text-cyan-700 text-xs rounded">
                                  Leadership
                                </span>
                              </>
                            )}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                          <button className="flex-1 px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-1">
                            Apply Now
                          </button>
                          <button className="px-4 py-2.5 bg-white text-gray-700 font-semibold rounded-lg border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-300">
                            Details
                          </button>
                        </div>
                      </div>

                      {/* Hover Effect Line */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Additional Information Section */}
        <div data-aos="fade-up" data-aos-delay="500" className="mt-16">
          <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 rounded-2xl p-8 md:p-12 border border-emerald-100">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Why Choose Master's Programs */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                    <PiTrendUp className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Advantages of Master's Degrees
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Elevating your expertise
                    </p>
                  </div>
                </div>

                <ul className="space-y-4">
                  {[
                    "Advanced specialization in chosen field",
                    "Pathway to PhD and academic careers",
                    "Higher earning potential and leadership roles",
                    "Development of advanced research methodologies",
                    "Global network of professionals and alumni",
                    "Industry-relevant cutting-edge knowledge",
                    "Enhanced problem-solving and analytical skills",
                    "Recognition as an expert in your field",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-teal-500/30">
                    <FaAward className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Admission Requirements
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Postgraduate eligibility
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      requirement: "Bachelor's Degree",
                      details: "Minimum GPA: 3.0/4.0",
                      icon: "🎓",
                    },
                    {
                      requirement: "English Proficiency",
                      details: "TOEFL 90+ or IELTS 6.5+",
                      icon: "🌍",
                    },
                    {
                      requirement: "GRE/GMAT",
                      details: "May be required",
                      icon: "📊",
                    },
                    {
                      requirement: "Research Proposal",
                      details: "For research programs",
                      icon: "📑",
                    },
                    {
                      requirement: "Work Experience",
                      details: "2+ years preferred",
                      icon: "💼",
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
            <div className="mt-12 pt-8 border-t border-emerald-200">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  {
                    label: "Research Funding",
                    value: "$5M+",
                    color: "text-emerald-600",
                  },
                  {
                    label: "Faculty Publications",
                    value: "500+",
                    color: "text-teal-600",
                  },
                  {
                    label: "International Faculty",
                    value: "45%",
                    color: "text-cyan-600",
                  },
                  {
                    label: "Industry Partnerships",
                    value: "100+",
                    color: "text-lime-600",
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
            <div className="mt-10 pt-8 border-t border-emerald-200 text-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-500 hover:scale-105">
                <span className="flex items-center justify-center gap-3">
                  Download Complete Master's Program Catalog
                  <PiGraduationCap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </span>
              </button>
              <p className="text-gray-500 text-sm mt-4">
                Explore 30+ specialized master's programs with flexible study
                options
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

export default MscCourse;
