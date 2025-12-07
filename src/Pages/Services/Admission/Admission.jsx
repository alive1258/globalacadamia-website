import React, { useEffect } from "react";
import {
  PiGraduationCap,
  PiCheckCircle,
  PiRocketLaunch,
  PiStrategy,
  PiMedal,
  PiCurrencyDollar,
} from "react-icons/pi";
import v1 from "../../../assets/image/varsity1.avif";
import v2 from "../../../assets/image/versity2.avif";
import v3 from "../../../assets/image/varsity3.jpg";
import v4 from "../../../assets/image/varsity4.avif";
import AOS from "aos";
import "aos/dist/aos.css";

const Admission = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const services = [
    {
      icon: <PiCheckCircle />,
      title: "Comprehensive Admission Support",
      description:
        "We guide you through the complex application process to secure your place at top institutions worldwide.",
    },
    {
      icon: <PiStrategy />,
      title: "Personalized Application Strategies",
      description:
        "Craft compelling applications and essays that stand out to admissions committees with our expert guidance.",
    },
    {
      icon: <PiMedal />,
      title: "Tailored Solutions for Your Goals",
      description:
        "Personalized solutions for universities, colleges, and graduate programs matching your unique aspirations.",
    },
    {
      icon: <PiCurrencyDollar />,
      title: "Scholarships & Financial Aid",
      description:
        "We assist in finding scholarships and financial aid opportunities to make your education affordable.",
    },
    {
      icon: <PiRocketLaunch />,
      title: "Making Dreams a Reality",
      description:
        "Turn academic dreams into reality with our streamlined admissions journey and unwavering support.",
    },
  ];

  const programs = [
    "Diploma Programs",
    "Bachelor Programs",
    "Master Programs",
    "PhD Programs",
    "Certificate Courses",
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 -right-20 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-20 -left-20 w-64 h-64 bg-cyan-100 rounded-full opacity-30 blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-blue-50 rounded-xl">
              <PiGraduationCap size={28} className="text-blue-500" />
            </div>
            <span className="text-blue-500 font-semibold text-lg">
              Admission Services
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Expert <span className="text-blue-500">Admissions</span> Advisors
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed">
            Navigating your journey to academic success with personalized
            guidance and comprehensive support
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Gallery Grid */}
          <div
            className="grid grid-cols-2 gap-4 md:gap-6"
            data-aos="fade-right"
          >
            <div className="space-y-4 md:space-y-6">
              <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                <img
                  className="w-full h-64 md:h-72 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  src={v1}
                  alt="University campus"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                <img
                  className="w-full h-64 md:h-72 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  src={v2}
                  alt="Graduation ceremony"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            <div className="space-y-4 md:space-y-6 mt-8 md:mt-12">
              <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                <img
                  className="w-full h-64 md:h-72 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  src={v3}
                  alt="Student life"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                <img
                  className="w-full h-64 md:h-72 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  src={v4}
                  alt="Academic success"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div data-aos="fade-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Your Pathway to <span className="text-blue-500">Success</span>
            </h2>

            <div className="space-y-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group p-5 rounded-xl border border-gray-100 bg-white hover:bg-blue-50 hover:border-blue-100 transition-all duration-300 hover:shadow-lg cursor-pointer"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                      <div className="text-blue-600 text-xl">
                        {service.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Programs Section */}
        <div
          className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12"
          data-aos="fade-up"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Our <span className="text-blue-500">Programs</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer guidance for a wide range of academic programs across top
              institutions worldwide
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {programs.map((program, index) => (
              <div
                key={index}
                className="group flex items-center gap-3 bg-white px-6 py-4 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-gray-100"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="text-blue-500 group-hover:scale-110 transition-transform">
                  <PiGraduationCap size={22} />
                </div>
                <span className="text-gray-800 font-semibold group-hover:text-blue-600 transition-colors">
                  {program}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105">
              Start Your Journey
              <PiRocketLaunch className="group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-gray-500 text-sm mt-4">
              Schedule a free consultation with our admission experts
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admission;
