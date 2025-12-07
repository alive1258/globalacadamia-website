import React, { useEffect, useState } from "react";
import {
  PiGraduationCap,
  PiStudentDuotone,
  PiUsersThree,
  PiBuildings,
  PiCertificate,
  PiShieldCheck,
  PiRocketLaunch,
  PiTrendUp,
  PiInfinity,
} from "react-icons/pi";
import {
  FaUniversity,
  FaFileInvoiceDollar,
  FaHandsHelping,
  FaGlobeAmericas,
  FaChartLine,
} from "react-icons/fa";
import { BiBookBookmark } from "react-icons/bi";
import { Link } from "react-router-dom";

const Welcome = () => {
  const [counts, setCounts] = useState({
    students: 0,
    universities: 0,
    scholarship: 0,
    visa: 0,
  });

  useEffect(() => {
    // Animate counting
    const animateCount = (target, key, duration = 2000) => {
      const start = 0;
      const increment = target / (duration / 16);
      let current = start;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounts((prev) => ({ ...prev, [key]: Math.floor(current) }));
      }, 16);
    };

    animateCount(3000, "students");
    animateCount(50, "universities", 1500);
    animateCount(100, "scholarship", 1000);
    animateCount(98, "visa", 1800);
  }, []);

  const topFunction = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const statsData = [
    {
      id: 1,
      icon: PiUsersThree,
      count: `${counts.students}+`,
      label: "Successful Students",
      description: "Dreams transformed globally",
      link: "/about",
      gradient: "from-blue-500 via-blue-600 to-cyan-500",
      bgGradient: "from-blue-50 via-white to-cyan-50",
    },
    {
      id: 2,
      icon: PiBuildings,
      count: `${counts.universities}+`,
      label: "Partner Universities",
      description: "QS World Ranking institutions",
      link: "/study",
      gradient: "from-emerald-500 via-emerald-600 to-teal-500",
      bgGradient: "from-emerald-50 via-white to-teal-50",
    },
    {
      id: 3,
      icon: PiCertificate,
      count: `${counts.scholarship}%`,
      label: "Scholarship Success",
      description: "Full financial coverage",
      link: "/scholarship",
      gradient: "from-amber-500 via-amber-600 to-orange-500",
      bgGradient: "from-amber-50 via-white to-orange-50",
    },
    {
      id: 4,
      icon: PiShieldCheck,
      count: `${counts.visa}%`,
      label: "Visa Success Rate",
      description: "Smooth immigration journey",
      link: "/services",
      gradient: "from-purple-500 via-purple-600 to-pink-500",
      bgGradient: "from-purple-50 via-white to-pink-50",
    },
  ];

  return (
    <div className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/20 to-white"></div>
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-gray-100 shadow-sm mb-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-pulse"></div>
              <div
                className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full animate-pulse"
                style={{ animationDelay: "0.3s" }}
              ></div>
              <div
                className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full animate-pulse"
                style={{ animationDelay: "0.6s" }}
              ></div>
            </div>
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              GLOBAL ACADEMIA EXCELLENCE
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
            <span className="block text-gray-900 mb-4">Your Gateway to</span>
            <span className="relative">
              <span className="relative bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                Global Education
              </span>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 rounded-full blur-sm"></div>
            </span>
          </h1>

          <p className="text-gray-600 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto">
            Empowering students worldwide with access to premium education
            through comprehensive guidance and exclusive scholarship
            opportunities
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {statsData.map((stat) => (
            <div key={stat.id} className="relative group" onClick={topFunction}>
              {/* Card */}
              <Link
                to={stat.link}
                className="relative block h-full p-6 md:p-8  bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-xl shadow-gray-100/30 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 overflow-hidden"
              >
                {/* Background Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl p-[1px]">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-500 rounded-2xl`}
                  ></div>
                </div>

                {/* Icon */}
                <div className="relative mb-8">
                  <div
                    className={`absolute -inset-4 bg-gradient-to-r ${stat.gradient} rounded-full opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`}
                  ></div>
                  <div
                    className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500`}
                  >
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <div className="flex items-baseline gap-2 mb-3">
                    <div className="text-4xl md:text-5xl font-bold text-gray-900 group-hover:scale-105 transition-transform duration-300">
                      {stat.count}
                    </div>
                    {stat.id === 1 && (
                      <FaChartLine className="w-6 h-6 text-blue-500 opacity-70" />
                    )}
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    {stat.label}
                  </h3>

                  <p className="text-gray-600 mb-6">{stat.description}</p>

                  {/* Progress Indicator */}
                  <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${stat.gradient} rounded-full transition-all duration-1000`}
                      style={{
                        width:
                          stat.id === 1
                            ? "100%"
                            : stat.id === 2
                            ? "95%"
                            : stat.id === 3
                            ? "100%"
                            : "98%",
                      }}
                    ></div>
                  </div>
                </div>

                {/* Hover Arrow */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-10 h-10 bg-gradient-to-r from-gray-100 to-white rounded-full flex items-center justify-center shadow-md">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 md:mt-24">
          <div className="text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-6 px-8 py-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-lg">
              <div className="flex items-center gap-3">
                <PiInfinity className="w-6 h-6 text-blue-500" />
                <div>
                  <div className="text-lg font-bold text-gray-900">
                    End-to-End Support
                  </div>
                  <div className="text-sm text-gray-600">
                    From application to arrival
                  </div>
                </div>
              </div>

              <div className="w-px h-8 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

              <div className="flex items-center gap-3">
                <FaHandsHelping className="w-6 h-6 text-emerald-500" />
                <div>
                  <div className="text-lg font-bold text-gray-900">
                    Personalized Counseling
                  </div>
                  <div className="text-sm text-gray-600">
                    Tailored to your goals
                  </div>
                </div>
              </div>

              <div className="w-px h-8 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

              <div className="flex items-center gap-3">
                <FaGlobeAmericas className="w-6 h-6 text-purple-500" />
                <div>
                  <div className="text-lg font-bold text-gray-900">
                    Global Network
                  </div>
                  <div className="text-sm text-gray-600">
                    50+ countries covered
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-20px) translateX(10px);
          }
          66% {
            transform: translateY(10px) translateX(-10px);
          }
        }
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Welcome;
