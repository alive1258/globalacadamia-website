import React, { useEffect } from "react";
import { BiSolidQuoteRight, BiSupport, BiCheckShield } from "react-icons/bi";
import { BsStopwatch, BsArrowRight } from "react-icons/bs";
import { IoMdCloseCircle, IoMdRibbon, IoMdTrendingUp } from "react-icons/io";
import { PiGraduationCap, PiStudent, PiGlobe } from "react-icons/pi";
import {
  FaChalkboardTeacher,
  FaHandshake,
  FaRegLightbulb,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const ChooseUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const features = [
    {
      icon: <BsStopwatch className="w-12 h-12" />,
      title: "24/7 Service for All Time",
      description:
        "Round-the-clock support ensuring your academic journey is smooth and uninterrupted. Access comprehensive services anytime, from institution selection to admission and beyond.",
      color: "from-blue-500 to-cyan-400",
      gradient: "bg-gradient-to-br from-blue-600/10 to-cyan-500/10",
      delay: "100",
    },
    {
      icon: <IoMdCloseCircle className="w-12 h-12" />,
      title: "Complete Transparency",
      description:
        "No hidden fees or surprises. We believe in honest pricing and clear communication throughout your educational journey.",
      color: "from-emerald-500 to-green-400",
      gradient: "bg-gradient-to-br from-emerald-600/10 to-green-500/10",
      delay: "200",
    },
    {
      icon: <FaChalkboardTeacher className="w-12 h-12" />,
      title: "Achieve Your Dreams",
      description:
        "Confidence-building support and guidance to help you reach your educational goals and unlock your full potential.",
      color: "from-purple-500 to-pink-400",
      gradient: "bg-gradient-to-br from-purple-600/10 to-pink-500/10",
      delay: "300",
    },
    {
      icon: <PiStudent className="w-12 h-12" />,
      title: "Personalized Guidance",
      description:
        "Tailored support for each student's unique journey, ensuring individual needs are met with care and expertise.",
      color: "from-amber-500 to-orange-400",
      gradient: "bg-gradient-to-br from-amber-600/10 to-orange-500/10",
      delay: "100",
    },
    {
      icon: <BiCheckShield className="w-12 h-12" />,
      title: "Trusted Partnership",
      description:
        "Established relationships with top institutions worldwide, providing reliable pathways to quality education.",
      color: "from-red-500 to-rose-400",
      gradient: "bg-gradient-to-br from-red-600/10 to-rose-500/10",
      delay: "200",
    },
    {
      icon: <PiGlobe className="w-12 h-12" />,
      title: "Global Network",
      description:
        "Access to international opportunities and connections across multiple countries and educational systems.",
      color: "from-indigo-500 to-violet-400",
      gradient: "bg-gradient-to-br from-indigo-600/10 to-violet-500/10",
      delay: "300",
    },
  ];

  const stats = [
    { value: "99%", label: "Success Rate" },
    { value: "24/7", label: "Support" },
    { value: "50+", label: "Countries" },
    { value: "10K+", label: "Students" },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full -translate-y-32 translate-x-32 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100 rounded-full translate-y-48 -translate-x-48 opacity-30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div
              className={`p-3 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg`}
            >
              <PiGraduationCap className="w-8 h-8 text-white" />
            </div>
            <span className="text-lg font-semibold text-blue-600">
              Why Choose Global Academia?
            </span>
          </div>

          <h2
            data-aos="fade-up"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Your Trusted Partner in
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {" "}
              Global Education
            </span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-lg text-gray-600 leading-relaxed"
          >
            We transform educational aspirations into reality with comprehensive
            support, transparent processes, and personalized guidance every step
            of the way.
          </p>
        </div>

        {/* Stats Section */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-20"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium mt-2">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={feature.delay}
              className="group relative"
            >
              {/* Card */}
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
                  className={`absolute inset-0 ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                {/* Icon Container */}
                <div className="relative mb-6">
                  <div
                    className={`
                    inline-flex items-center justify-center 
                    w-16 h-16 rounded-2xl 
                    bg-gradient-to-br ${feature.color}
                    shadow-lg
                    group-hover:scale-110 
                    transition-transform duration-300
                  `}
                  >
                    <div className="text-white">{feature.icon}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center text-blue-600 font-medium group/link">
                    <span className="group-hover/link:translate-x-2 transition-transform duration-300">
                      Learn more
                    </span>
                    <BsArrowRight className="ml-2 group-hover/link:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>

                {/* Corner Decoration */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${feature.color} opacity-5 rounded-tr-2xl`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div data-aos="fade-up" className="mt-20 text-center">
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Ready to Start Your Journey?
                </h3>
                <p className="text-blue-100">
                  Get personalized guidance from our expert counselors today.
                </p>
              </div>
              <button
                className={`
                px-8 py-4 bg-white text-blue-600 
                font-semibold rounded-xl
                hover:bg-gray-50 hover:scale-105
                active:scale-95
                transition-all duration-300
                shadow-lg hover:shadow-xl
                whitespace-nowrap
              `}
              >
                Book Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
