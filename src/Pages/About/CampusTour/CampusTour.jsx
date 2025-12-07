import React, { useEffect } from "react";
import { AiTwotonePhone } from "react-icons/ai";
import {
  PiGraduationCap,
  PiStudent,
  PiBuildings,
  PiBookOpen,
} from "react-icons/pi";
import { MdOutlineScience, MdSportsTennis } from "react-icons/md";
import { BiLibrary } from "react-icons/bi";
import { GiReceiveMoney } from "react-icons/gi";
import tour3 from "../../../assets/image/tour3.avif";
import tour1 from "../../../assets/image/versity2.avif";
import tour2 from "../../../assets/image/varsity1.avif";
import AOS from "aos";
import "aos/dist/aos.css";

const CampusTour = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const programs = [
    { title: "Diploma Programs", icon: <PiGraduationCap /> },
    { title: "Bachelor Programs", icon: <PiBookOpen /> },
    { title: "Master Programs", icon: <PiStudent /> },
    { title: "Research Programs", icon: <MdOutlineScience /> },
  ];

  const campusFeatures = [
    {
      title: "Modern Libraries",
      icon: <BiLibrary />,
      description: "State-of-the-art digital & physical resources",
    },
    {
      title: "Sports Facilities",
      icon: <MdSportsTennis />,
      description: "Olympic-standard sports complex",
    },
    {
      title: "Student Housing",
      icon: <PiBuildings />,
      description: "Comfortable on-campus accommodation",
    },
    {
      title: "Scholarships",
      icon: <GiReceiveMoney />,
      description: "Up to 100% tuition coverage",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container px-4 md:px-6 py-16 md:py-24 relative">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-3 bg-blue-50 rounded-full">
              <PiGraduationCap className="text-[#09adfe] text-2xl" />
            </div>
            <span className="text-[#09adfe] font-semibold uppercase tracking-wider text-sm">
              Campus Experience
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#09adfe] to-blue-600">
              Campus Life
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Step into a vibrant academic community where innovation meets
            tradition
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Gallery */}
          <div className="space-y-6" data-aos="fade-right">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
              <img
                src={tour3}
                alt="Main Campus Building"
                className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold">Main Campus</h3>
                <p className="text-blue-200">
                  Modern Architecture & Green Spaces
                </p>
              </div>
            </div>

            {/* Secondary Images */}
            <div className="grid grid-cols-2 gap-6">
              <div className="relative overflow-hidden rounded-xl shadow-lg group">
                <img
                  src={tour1}
                  alt="Student Life"
                  className="w-full h-[250px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Student Activities</p>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-xl shadow-lg group">
                <img
                  src={tour2}
                  alt="Academic Facilities"
                  className="w-full h-[250px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Learning Spaces</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8" data-aos="fade-left">
            {/* Description */}

            {/* Programs Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <PiBookOpen className="text-[#09adfe] text-xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Academic Programs
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {programs.map((program, index) => (
                  <div
                    key={index}
                    className="group p-4 bg-white rounded-xl border border-gray-200 hover:border-[#09adfe] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-[#09adfe] group-hover:text-white transition-colors duration-300">
                        <div className="text-[#09adfe] group-hover:text-white text-lg">
                          {program.icon}
                        </div>
                      </div>
                      <span className="font-semibold text-gray-800">
                        {program.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact & Features */}
            <div className="space-y-8">
              {/* Scholarship Section */}
              <div className="p-6 bg-gradient-to-r from-[#09adfe] to-blue-500 rounded-2xl text-white">
                <div className="flex items-center gap-3 mb-4">
                  <GiReceiveMoney className="text-2xl" />
                  <h3 className="text-xl font-bold">
                    Scholarship Opportunities
                  </h3>
                </div>
                <p className="mb-4 opacity-90">
                  We offer generous scholarships based on academic excellence,
                  leadership potential, and financial need.
                </p>

                {/* Contact Card */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-full">
                      <AiTwotonePhone className="text-xl" />
                    </div>
                    <div>
                      <p className="text-sm opacity-80">
                        Contact for Scholarship Info
                      </p>
                      <p className="text-lg font-bold">+88 0179-3636735</p>
                    </div>
                    <a
                      href="tel:+8801793636735"
                      className="ml-auto bg-white text-[#09adfe] px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </div>

              {/* Campus Features */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">
                  Campus Features
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {campusFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gray-50 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="text-[#09adfe] text-lg">
                          {feature.icon}
                        </div>
                        <h4 className="font-semibold text-gray-800">
                          {feature.title}
                        </h4>
                      </div>
                      <p className="text-sm text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16" data-aos="fade-up">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-[#09adfe] to-blue-600 text-white font-semibold rounded-xl overflow-hidden">
            <span className="relative z-10">Schedule Your Campus Tour</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-[#09adfe] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <p className="text-gray-600 mt-4">
            Limited spots available • Free guided tours
          </p>
        </div>
      </div>

      {/* Add CSS for background pattern */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              #09adfe10 1px,
              transparent 1px
            ),
            linear-gradient(to bottom, #09adfe10 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </div>
  );
};

export default CampusTour;
