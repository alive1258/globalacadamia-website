import React, { useEffect } from "react";
import {
  PiGraduationCap,
  PiCurrencyDollar,
  PiHouse,
  PiBriefcase,
  PiBuildings,
  PiChartLineUp,
  PiStudent,
  PiCertificate,
  PiCheckCircle,
  PiUsers,
  PiTrendUp,
} from "react-icons/pi";
import {
  FaAward,
  FaUniversity,
  FaHandsHelping,
  FaMedal,
  FaRegCalendarCheck,
  FaRegClock,
} from "react-icons/fa";
import {
  MdOutlineSchool,
  MdOutlineAttachMoney,
  MdOutlineWork,
  MdOutlineAccountBalance,
  MdOutlineStar,
} from "react-icons/md";
import sholarship3 from "../../../assets/image/scholarship3.avif";
import AOS from "aos";
import "aos/dist/aos.css";

const DiplomaScholarship = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const scholarshipBenefits = [
    {
      icon: <PiCurrencyDollar className="w-6 h-6" />,
      title: "100% Tuition Free",
      description: "Complete coverage of all tuition fees",
      color: "from-green-500 to-emerald-500",
      amount: "Full Coverage",
    },
    {
      icon: <PiHouse className="w-6 h-6" />,
      title: "Accommodation",
      description: "Free on-campus accommodation",
      color: "from-blue-500 to-cyan-500",
      amount: "Complimentary",
    },
    {
      icon: <MdOutlineAttachMoney className="w-6 h-6" />,
      title: "Monthly Stipend",
      description: "Living allowance for expenses",
      color: "from-purple-500 to-pink-500",
      amount: "RMB 600-700",
    },
    {
      icon: <PiBriefcase className="w-6 h-6" />,
      title: "Job Opportunities",
      description: "Part-time work during studies",
      color: "from-amber-500 to-orange-500",
      amount: "Guaranteed",
    },
  ];

  const additionalBenefits = [
    {
      icon: <MdOutlineWork className="w-5 h-5" />,
      title: "Internship Facilities",
      description: "Industry partnerships for practical experience",
    },
    {
      icon: <PiBuildings className="w-5 h-5" />,
      title: "Top Universities",
      description: "Study at China's premier institutions",
    },
    {
      icon: <PiChartLineUp className="w-5 h-5" />,
      title: "Career Support",
      description: "Placement assistance after graduation",
    },
    {
      icon: <FaHandsHelping className="w-5 h-5" />,
      title: "Full Support",
      description: "End-to-end guidance throughout your journey",
    },
  ];

  const eligibilityCriteria = [
    "High school graduate with minimum 60% marks",
    "Age between 18-25 years",
    "Good academic record",
    "English proficiency (basic level)",
    "Medical fitness certificate",
    "Valid passport",
  ];

  const scholarshipStats = [
    { value: "100%", label: "Success Rate", icon: <FaAward /> },
    { value: "500+", label: "Students Awarded", icon: <PiUsers /> },
    { value: "98%", label: "Placement Rate", icon: <PiTrendUp /> },
    { value: "50+", label: "Partner Colleges", icon: <MdOutlineSchool /> },
  ];

  return (
    <div className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-emerald-50/20 to-white"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-20"></div>

      <div className="relative container px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full blur opacity-75"></div>
              <div className="relative p-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full">
                <FaAward className="w-7 h-7 text-white" />
              </div>
            </div>
            <span className="text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              DIPLOMA SCHOLARSHIPS
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Fully-Funded
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-500 to-purple-600">
              Diploma Education
            </span>
          </h1>

          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Transform your future with 100% scholarship opportunities for
            diploma programs in China's top technical and engineering
            institutions.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {scholarshipStats.map((stat, index) => (
            <div
              key={index}
              className="group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-green-200 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
                    <div className="text-green-600">{stat.icon}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Content & Benefits */}
          <div className="space-y-8">
            {/* Scholarship Overview */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <PiGraduationCap className="w-7 h-7 text-green-600" />
                Why Choose Our Diploma Scholarships?
              </h2>

              <div className="space-y-6">
                {[
                  {
                    icon: <PiCertificate className="w-5 h-5" />,
                    title: "Complete Financial Freedom",
                    content:
                      "Experience education without financial burdens with our 100% scholarship coverage including tuition, accommodation, and living expenses.",
                  },
                  {
                    icon: <FaUniversity className="w-5 h-5" />,
                    title: "Top-Tier Technical Education",
                    content:
                      "Study at China's premier technical colleges with state-of-the-art facilities and industry-relevant curriculum.",
                  },
                  {
                    icon: <MdOutlineAccountBalance className="w-5 h-5" />,
                    title: "Practical Skill Development",
                    content:
                      "Focus on hands-on training and industry exposure that prepares you for immediate employment after graduation.",
                  },
                  {
                    icon: <PiStudent className="w-5 h-5" />,
                    title: "Global Career Pathways",
                    content:
                      "Access international job opportunities with our strong industry partnerships and global recognition of Chinese diplomas.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 group"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <div className="text-green-600">{item.icon}</div>
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Benefits */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <FaMedal className="w-6 h-6 text-green-600" />
                Additional Benefits
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                {additionalBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100"
                  >
                    <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                      <div className="text-green-600">{benefit.icon}</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">
                        {benefit.title}
                      </div>
                      <div className="text-sm text-gray-600">
                        {benefit.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Image & Scholarship Details */}
          <div className="space-y-8">
            {/* Image Card */}
            <div className="relative group" data-aos="fade-left">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={sholarship3}
                  className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="Diploma Scholarship"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                {/* Image Overlay Content */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <PiGraduationCap className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg">
                        100% Scholarship
                      </div>
                      <div className="text-white/90 text-sm">
                        For Diploma Programs
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scholarship Benefits Grid */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <MdOutlineStar className="w-6 h-6 text-green-600" />
                Scholarship Coverage
              </h3>

              <div className="grid grid-cols-2 gap-6">
                {scholarshipBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="group"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="relative p-5 rounded-xl border border-gray-200 hover:border-green-200 hover:shadow-lg transition-all duration-300">
                      <div
                        className={`mb-4 w-12 h-12 rounded-lg bg-gradient-to-br ${benefit.color} flex items-center justify-center`}
                      >
                        {benefit.icon}
                      </div>

                      <div className="mb-2">
                        <h4 className="text-lg font-bold text-gray-900">
                          {benefit.title}
                        </h4>
                        <div className="text-2xl font-bold text-gray-900 mt-2">
                          {benefit.amount}
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 to-blue-600/90"></div>

          <div className="relative  p-12 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6">
                <FaRegCalendarCheck className="w-4 h-4 text-white" />
                <span className="text-white font-medium">2024 Intake Open</span>
              </div>

              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Apply for 100% Scholarship?
              </h3>

              <p className="text-white/90 text-lg mb-8">
                Don't miss this opportunity to get fully-funded diploma
                education in China. Our experts will guide you through the
                entire application process.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3.5 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-colors shadow-lg">
                  Apply for Scholarship
                </button>
                <button className="px-8 py-3.5 bg-transparent text-white font-semibold rounded-xl border-2 border-white hover:bg-white/10 transition-colors">
                  Download Brochure
                </button>
              </div>

              <div className="mt-8 flex items-center justify-center gap-8 text-white/90">
                <div className="flex items-center gap-2">
                  <PiGraduationCap className="w-5 h-5" />
                  <span>Technical Programs</span>
                </div>
                <div className="h-6 w-px bg-white/30"></div>
                <div className="flex items-center gap-2">
                  <PiCurrencyDollar className="w-5 h-5" />
                  <span>Full Financial Aid</span>
                </div>
                <div className="h-6 w-px bg-white/30"></div>
                <div className="flex items-center gap-2">
                  <PiBriefcase className="w-5 h-5" />
                  <span>Job Placement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiplomaScholarship;
