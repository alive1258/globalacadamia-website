import React, { useEffect } from "react";
import sholarship4 from "../../../assets/image/scholarship4.avif";
import {
  PiGraduationCap,
  PiStudent,
  PiCertificate,
  PiBriefcase,
  PiGlobeHemisphereEast,
  PiMoney,
  PiHouse,
  PiBookOpenText,
  PiBuildings,
  PiBooks,
} from "react-icons/pi";
import {
  FaSearch,
  FaCalendarAlt,
  FaBullseye,
  FaChartLine,
  FaUserTie,
  FaStar,
} from "react-icons/fa";
import {
  MdSchool,
  MdAttachMoney,
  MdWork,
  MdBusinessCenter,
} from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi2";
import AOS from "aos";
import "aos/dist/aos.css";

const MasterScholarship = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const tips = [
    {
      icon: <FaSearch className="w-5 h-5" />,
      title: "Utilize Online Resources",
      description:
        "Use scholarship search engines like GlobalAcademia to find relevant opportunities and streamline your application process.",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: <FaCalendarAlt className="w-5 h-5" />,
      title: "Start Early Planning",
      description:
        "Begin your search early as many scholarships have specific deadlines. Plan ahead to prepare strong applications.",
      color: "from-emerald-500 to-green-400",
    },
    {
      icon: <FaBullseye className="w-5 h-5" />,
      title: "Align with Your Goals",
      description:
        "Match scholarships with your academic discipline and career path to increase your chances of success.",
      color: "from-purple-500 to-pink-400",
    },
    {
      icon: <PiStudent className="w-5 h-5" />,
      title: "Personal Development",
      description:
        "Our programs offer mentorship and growth opportunities beyond just financial support.",
      color: "from-amber-500 to-orange-400",
    },
    {
      icon: <FaChartLine className="w-5 h-5" />,
      title: "Success Stories",
      description:
        "Join our alumni who have made significant contributions in their fields through our scholarship programs.",
      color: "from-rose-500 to-red-400",
    },
    {
      icon: <PiCertificate className="w-5 h-5" />,
      title: "Transform Aspirations",
      description:
        "Turn your educational dreams into reality with comprehensive support and opportunities.",
      color: "from-indigo-500 to-violet-400",
    },
  ];

  const facilities = [
    {
      icon: <MdSchool className="w-6 h-6" />,
      title: "100% Tuition Free",
      description: "Full tuition coverage for entire program",
      value: "100%",
      color: "from-blue-600 to-cyan-500",
    },
    {
      icon: <PiMoney className="w-6 h-6" />,
      title: "Monthly Stipend",
      description: "Living allowance support",
      value: "¥2,000-3,000",
      color: "from-emerald-600 to-green-500",
    },
    {
      icon: <MdWork className="w-6 h-6" />,
      title: "Job Opportunities",
      description: "Career placement assistance",
      value: "Guaranteed",
      color: "from-purple-600 to-pink-500",
    },
    {
      icon: <PiHouse className="w-6 h-6" />,
      title: "Accommodation",
      description: "Complimentary housing",
      value: "Free",
      color: "from-amber-600 to-orange-500",
    },
    {
      icon: <MdBusinessCenter className="w-6 h-6" />,
      title: "Internship",
      description: "Professional experience",
      value: "Provided",
      color: "from-rose-600 to-red-500",
    },
    {
      icon: <PiGlobeHemisphereEast className="w-6 h-6" />,
      title: "Global Recognition",
      description: "World ranking universities",
      value: "Top Tier",
      color: "from-indigo-600 to-violet-500",
    },
  ];

  const stats = [
    { number: "95%", label: "Success Rate", icon: <FaStar /> },
    { number: "50+", label: "Scholarships", icon: <PiCertificate /> },
    { number: "1000+", label: "Students", icon: <PiStudent /> },
    { number: "30+", label: "Countries", icon: <PiGlobeHemisphereEast /> },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-cyan-50/30"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-cyan-100/20 rounded-full -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-100/10 to-cyan-100/10 rounded-full translate-y-64 -translate-x-64"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg">
              <HiAcademicCap className="w-8 h-8 text-white" />
            </div>
            <span className="text-lg font-semibold text-blue-600">
              Exclusive Scholarships
            </span>
          </div>

          <h1
            data-aos="fade-up"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Master's Degree
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {" "}
              Scholarship Programs
            </span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto"
          >
            Transform your academic journey with fully-funded opportunities at
            world-class universities. Our comprehensive scholarship programs
            cover all aspects of your master's education.
          </p>
        </div>

        {/* Stats Section */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  {stat.number}
                </div>
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content - Tips & Image */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Tips Section */}
          <div>
            <div className="mb-8">
              <h2
                data-aos="fade-right"
                className="text-3xl font-bold text-gray-900 mb-4"
              >
                Finding the Right
                <span className="text-blue-600"> Scholarship</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Discover strategies and insights to secure the perfect
                scholarship for your master's journey.
              </p>
            </div>

            <div className="space-y-4">
              {tips.map((tip, index) => (
                <div
                  key={index}
                  data-aos="fade-right"
                  data-aos-delay={index * 100}
                  className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl border border-gray-100 hover:border-transparent transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`
                      p-3 rounded-lg bg-gradient-to-br ${tip.color}
                      group-hover:scale-110 transition-transform duration-300
                    `}
                    >
                      <div className="text-white">{tip.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {tip.title}
                      </h3>
                      <p className="text-gray-600">{tip.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="sticky top-24">
              <div
                data-aos="fade-left"
                data-aos-delay="300"
                className="relative rounded-3xl overflow-hidden shadow-2xl"
              >
                <img
                  src={sholarship4}
                  className="w-full h-[600px] object-cover"
                  alt="Master's Scholarship Students"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                {/* Floating Card */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500">
                        <PiGraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Why Choose Our Scholarships?
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                        <span className="text-gray-700">
                          Comprehensive financial coverage
                        </span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                        <span className="text-gray-700">
                          Personalized mentorship programs
                        </span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                        <span className="text-gray-700">
                          Global career opportunities
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Facilities Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2
              data-aos="fade-up"
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Comprehensive
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                {" "}
                Scholarship Benefits
              </span>
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Our scholarship programs provide extensive support to ensure your
              academic success without financial burden.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="group relative"
              >
                <div
                  className={`
                  relative h-full bg-white rounded-2xl p-8
                  border border-gray-200 shadow-lg
                  transition-all duration-300
                  hover:shadow-2xl hover:-translate-y-2
                  hover:border-transparent
                  overflow-hidden
                `}
                >
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${facility.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>

                  {/* Content */}
                  <div className="relative">
                    <div className="mb-6">
                      <div
                        className={`
                        inline-flex items-center justify-center
                        w-14 h-14 rounded-2xl
                        bg-gradient-to-br ${facility.color}
                        shadow-lg
                        group-hover:scale-110
                        transition-transform duration-300
                      `}
                      >
                        <div className="text-white">{facility.icon}</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                        {facility.value}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {facility.title}
                      </h3>
                      <p className="text-gray-600">{facility.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div data-aos="fade-up" className="text-center">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-12 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Ready to Apply for Your Scholarship?
                </h3>
                <p className="text-blue-100 text-lg">
                  Get personalized guidance from our scholarship experts and
                  start your journey to a fully-funded master's degree.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className={`
                  px-8 py-4 bg-white text-blue-600
                  font-semibold rounded-xl
                  hover:bg-gray-50 hover:scale-105
                  active:scale-95
                  transition-all duration-300
                  shadow-lg hover:shadow-xl
                  flex items-center justify-center gap-3
                `}
                >
                  <PiBookOpenText className="w-5 h-5" />
                  Apply Now
                </button>
                <button
                  className={`
                  px-8 py-4 bg-transparent border-2 border-white
                  text-white font-semibold rounded-xl
                  hover:bg-white/10 hover:scale-105
                  active:scale-95
                  transition-all duration-300
                  flex items-center justify-center gap-3
                `}
                >
                  <FaUserTie className="w-5 h-5" />
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterScholarship;
