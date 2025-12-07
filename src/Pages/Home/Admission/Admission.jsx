import React, { useEffect } from "react";
import {
  AiTwotonePhone,
  AiOutlineCalendar,
  AiOutlineGlobal,
  AiOutlineRocket,
} from "react-icons/ai";
import { FaGraduationCap, FaCheckCircle, FaRegClock } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Admission.css";

const Admission = () => {
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Countdown timer logic (example for March 31, 2024)
  const deadlineDate = new Date(`${currentYear + 1}-03-31`).getTime();
  const now = new Date().getTime();
  const timeLeft = deadlineDate - now;

  const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="studentPic"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-indigo-900/70"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full translate-y-48 -translate-x-48"></div>
      </div>

      <div className="container relative  mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8" data-aos="fade-right" data-aos-delay="200">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full">
              <AiOutlineCalendar className="text-xl" />
              <span className="font-bold">Fall {nextYear} Intake</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Admission{" "}
                <span className="text-cyan-300">
                  {currentYear}-{nextYear}
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-white/90 font-semibold">
                Is <span className="text-yellow-300">Now Open</span>
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  label: "Universities",
                  value: "50+",
                  icon: <FaGraduationCap />,
                },
                { label: "Programs", value: "200+", icon: <AiOutlineGlobal /> },
                {
                  label: "Scholarships",
                  value: "100%",
                  icon: <FaCheckCircle />,
                },
                {
                  label: "Success Rate",
                  value: "95%",
                  icon: <AiOutlineRocket />,
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20"
                >
                  <div className="text-white text-2xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-white/80 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Deadline Timer */}
            <div
              className="bg-gradient-to-r from-blue-600/30 to-cyan-600/30 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <FaRegClock className="text-white text-2xl" />
                  <h3 className="text-white font-bold text-xl">
                    Application Deadline
                  </h3>
                </div>
                <div className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                  Hurry Up!
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">
                    {daysLeft}
                  </div>
                  <div className="text-white/80 text-sm">Days Left</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">
                    {hoursLeft}
                  </div>
                  <div className="text-white/80 text-sm">Hours Left</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">March 31</div>
                  <div className="text-white/80 text-sm">Final Date</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8" data-aos="fade-left" data-aos-delay="300">
            {/* CTA Card */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/30 rounded-3xl p-8 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">
                Free Consultation Session
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-500 p-3 rounded-full mt-1">
                    <FaCheckCircle className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Expert Guidance
                    </h4>
                    <p className="text-white/80 text-sm">
                      Personalized admission strategy from experienced
                      counselors
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-500 p-3 rounded-full mt-1">
                    <FaCheckCircle className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Document Support
                    </h4>
                    <p className="text-white/80 text-sm">
                      Complete assistance with application documents & visa
                      process
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-500 p-3 rounded-full mt-1">
                    <FaCheckCircle className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Scholarship Guarantee
                    </h4>
                    <p className="text-white/80 text-sm">
                      100% scholarship assistance for eligible candidates
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <Link to="/contact">
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 px-8 rounded-xl text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
                    Register Now
                    <BsArrowRight className="text-xl" />
                  </button>
                </Link>

                <div className="text-center text-white/80 text-sm">
                  Limited spots available for free consultation
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-4">
                <div className="bg-white p-4 rounded-full">
                  <AiTwotonePhone className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <div className="text-white/80 text-sm">
                    24/7 Admission Support
                  </div>
                  <div className="text-white text-xl font-bold">
                    +88 0179-3636735
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <button className="bg-white/20 text-white py-3 rounded-lg font-medium hover:bg-white/30 transition-colors">
                  WhatsApp
                </button>
                <button className="bg-white/20 text-white py-3 rounded-lg font-medium hover:bg-white/30 transition-colors">
                  WeChat
                </button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <span className="text-white text-sm">
                  ✓ 10+ Years Experience
                </span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <span className="text-white text-sm">✓ 5000+ Students</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <span className="text-white text-sm">✓ 98% Visa Success</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div
          className="mt-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                A World of Education Awaits You
              </h3>
              <p className="text-white/90">
                Study in China with 100% scholarship from Bangladesh
              </p>
            </div>
            <Link to="/programs">
              <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors flex items-center gap-3 whitespace-nowrap">
                Explore Programs
                <BsArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admission;
