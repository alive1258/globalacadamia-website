import React, { useState } from "react";
import {
  AiOutlinePhone,
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiOutlineCalendar,
  AiOutlineCheckCircle,
  AiOutlineStar,
  AiOutlineRocket,
  AiOutlineGift,
  AiOutlineTeam,
  AiOutlineTrophy,
  AiOutlineClockCircle,
  AiOutlineDollarCircle,
} from "react-icons/ai";
import {
  FiArrowRight,
  FiAward,
  FiPercent,
  FiDollarSign,
  FiUsers,
  FiBookOpen,
} from "react-icons/fi";
import {
  FaGraduationCap,
  FaUniversity,
  FaHandsHelping,
  FaRegPaperPlane,
} from "react-icons/fa";
import { MdSchool, MdOutlineVerified } from "react-icons/md";
import "./AScholaship.css";

const AScholarship = () => {
  const currentYear = new Date().getFullYear();
  const [showEligibilityForm, setShowEligibilityForm] = useState(false);
  const deadlineDate = new Date(`${currentYear}-12-31`);

  const calculateCountdown = () => {
    const now = new Date();
    const diff = deadlineDate - now;

    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [countdown, setCountdown] = useState(calculateCountdown());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(calculateCountdown());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scholarshipHighlights = [
    {
      icon: <FiAward className="w-6 h-6" />,
      title: "1000+ Scholarships Awarded",
      description: "Successfully placed students",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: <AiOutlineDollarCircle className="w-6 h-6" />,
      title: "$5M+ Total Funding",
      description: "Financial support provided",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      icon: <MdOutlineVerified className="w-6 h-6" />,
      title: "98% Success Rate",
      description: "Admission & visa approval",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600",
    },
    {
      icon: <FaUniversity className="w-6 h-6" />,
      title: "50+ Partner Universities",
      description: "Top institutions in China",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
  ];

  const scholarshipCategories = [
    {
      type: "Full Scholarship",
      coverage: "100% Coverage",
      benefits: [
        "Full tuition fee",
        "Accommodation",
        "Monthly stipend",
        "Health insurance",
      ],
      color: "border-l-4 border-blue-500",
      bgColor: "bg-white",
    },
    {
      type: "Partial Scholarship",
      coverage: "50-75% Coverage",
      benefits: [
        "Tuition fee support",
        "Accommodation assistance",
        "Insurance coverage",
      ],
      color: "border-l-4 border-green-500",
      bgColor: "bg-white",
    },
    {
      type: "Merit Scholarship",
      coverage: "30-100% Coverage",
      benefits: [
        "Academic excellence",
        "Research potential",
        "Leadership qualities",
      ],
      color: "border-l-4 border-purple-500",
      bgColor: "bg-white",
    },
    {
      type: "Talent Scholarship",
      coverage: "40-60% Coverage",
      benefits: ["Sports achievements", "Arts & culture", "Special talents"],
      color: "border-l-4 border-amber-500",
      bgColor: "bg-white",
    },
  ];

  const eligibilityCriteria = [
    "High school diploma or equivalent",
    "Minimum GPA: 3.0/4.0",
    "English proficiency (TOEFL/IELTS)",
    "Strong academic record",
    "Recommendation letters",
    "Personal statement",
  ];

  return (
    <div className="relative py-16 md:py-24 bg-gray-50 overflow-hidden">
      {/* Modern Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-100 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-100 rounded-full opacity-10 blur-3xl"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-white rounded-full shadow-sm border border-gray-200 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <div
                className="w-2 h-2 bg-green-500 rounded-full animate-pulse"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
            <span className="text-sm font-semibold text-gray-700">
              SCHOLARSHIP PROGRAMS {currentYear}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Future With
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900">
              Generous Scholarships
            </span>
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Access fully-funded educational opportunities in China's premier
            universities. We bridge the gap between talent and opportunity.
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
              <div className="text-center sm:text-left">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <AiOutlineClockCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Application Deadline
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Priority consideration ends
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  December 31, {currentYear}
                </div>
                <div className="text-sm text-gray-500">
                  Final date for applications
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-3">
              {[
                { value: countdown.days, label: "Days" },
                { value: countdown.hours, label: "Hours" },
                { value: countdown.minutes, label: "Minutes" },
                { value: countdown.seconds, label: "Seconds" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 font-mono">
                      {item.value.toString().padStart(2, "0")}
                    </div>
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {item.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scholarship Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {scholarshipHighlights.map((highlight, index) => (
            <div key={index} className="group">
              <div className="relative bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all duration-300 h-full">
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-lg ${highlight.bgColor} ${highlight.iconColor}`}
                  >
                    {highlight.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {highlight.title.split(" ")[0]}
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      {highlight.title.split(" ").slice(1).join(" ")}
                    </div>
                    <p className="text-gray-500 text-sm">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Scholarship Categories */}
          <div className="lg:col-span-2">
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <AiOutlineTrophy className="w-7 h-7 text-gray-700" />
                Scholarship Categories
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                {scholarshipCategories.map((category, index) => (
                  <div
                    key={index}
                    className={`${category.bgColor} rounded-xl shadow-sm border border-gray-200 p-6 ${category.color} hover:shadow-md transition-shadow duration-300`}
                  >
                    <div className="mb-4">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {category.type}
                      </h4>
                      <div className="text-lg font-semibold text-gray-700 mb-4">
                        {category.coverage}
                      </div>
                    </div>

                    <div className="space-y-3">
                      {category.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <AiOutlineCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <button className="text-sm font-medium text-gray-700 hover:text-gray-900 flex items-center gap-2 group">
                        Learn more about this scholarship
                        <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Eligibility Criteria */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <MdSchool className="w-7 h-7 text-gray-700" />
                Basic Eligibility Criteria
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                {eligibilityCriteria.map((criteria, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="w-6 h-6 bg-white border border-gray-300 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">{criteria}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Contact & Quick Apply */}
          <div className="space-y-6 ">
            {/* Contact Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 mt-14">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Get Started Today
              </h3>

              <div className="space-y-5">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <AiOutlinePhone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">
                      Call Admission Team
                    </div>
                    <div className="text-gray-600">+88 0179-3636735</div>
                    <div className="text-xs text-gray-500">
                      Available 9AM-8PM
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <AiOutlineMail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">
                      Email Inquiry
                    </div>
                    <div className="text-gray-600">
                      scholarship@globalacademia.cn
                    </div>
                    <div className="text-xs text-gray-500">
                      Reply within 24h
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Apply Card */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-lg p-8 text-white">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 rounded-full mb-4">
                  <AiOutlineGift className="w-4 h-4" />
                  <span className="text-sm font-medium">Special Offer</span>
                </div>

                <h3 className="text-2xl font-bold mb-3">
                  Free Eligibility Check
                </h3>
              </div>

              <button
                onClick={() => setShowEligibilityForm(true)}
                className="w-full py-3.5 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center gap-3 mb-4"
              >
                <span>Check Eligibility</span>
                <FiArrowRight className="w-5 h-5" />
              </button>

              <button className="w-full py-3 bg-transparent text-white font-medium rounded-xl border-2 border-white/30 hover:bg-white/10 transition-colors">
                Download Scholarship Guide
              </button>

              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="flex items-center gap-3">
                  <FiUsers className="w-5 h-5 text-gray-300" />
                  <div>
                    <div className="text-sm text-gray-300">
                      <span className="font-bold text-white">500+</span>{" "}
                      scholarships awarded this year
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <AiOutlineRocket className="w-5 h-5 text-gray-700" />
                Key Benefits
              </h4>

              <div className="space-y-3">
                {[
                  "World-class Chinese universities",
                  "Full financial support available",
                  "End-to-end application assistance",
                  "Career placement support",
                  "Global alumni network",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                    <span className="text-gray-600 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Application Process */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Simple Application Process
          </h3>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Submit Application",
                description: "Complete online form with basic details",
                icon: <FaRegPaperPlane className="w-6 h-6" />,
              },
              {
                step: "02",
                title: "Document Review",
                description: "Our experts verify your documents",
                icon: <FiBookOpen className="w-6 h-6" />,
              },
              {
                step: "03",
                title: "University Match",
                description: "Find best-fit universities and programs",
                icon: <FaUniversity className="w-6 h-6" />,
              },
              {
                step: "04",
                title: "Get Admission",
                description: "Receive offer letter and scholarship",
                icon: <FaGraduationCap className="w-6 h-6" />,
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-gray-700">{step.icon}</div>
                  </div>

                  <div className="mb-2">
                    <div className="text-sm font-semibold text-gray-500 mb-1">
                      Step {step.step}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">
                      {step.title}
                    </h4>
                  </div>

                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>

                {index < 3 && (
                  <div className="hidden md:block absolute top-8 right-[-2rem] w-16 border-t-2 border-dashed border-gray-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Future?
            </h3>
            <p className="text-gray-600">
              Don't let financial constraints limit your educational
              aspirations. Apply now for a scholarship that matches your
              potential.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3.5 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors shadow-lg">
              Start Application Now
            </button>
            <button className="px-8 py-3.5 bg-white text-gray-900 font-semibold rounded-xl border-2 border-gray-900 hover:bg-gray-50 transition-colors">
              Schedule Consultation
            </button>
          </div>

          <p className="text-gray-500 text-sm mt-6">
            Applications reviewed on a rolling basis. Early applicants receive
            priority consideration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AScholarship;
