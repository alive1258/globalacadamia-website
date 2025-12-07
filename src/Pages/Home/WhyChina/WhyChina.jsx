import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  PiGraduationCap,
  PiGlobeHemisphereWest,
  PiCurrencyDollar,
  PiHouse,
  PiCertificate,
  PiStudent,
  PiBriefcase,
  PiMapPin,
  PiShieldCheck,
  PiUsersThree,
  PiChartLineUp,
  PiAirplaneTakeoff,
  PiMedal,
  PiStar,
  PiLightning,
  PiRocketLaunch,
  PiBuildings,
  PiBookOpen,
  PiShield,
  PiTrendUp,
} from "react-icons/pi";
import {
  FaUniversity,
  FaAward,
  FaHandsHelping,
  FaCheckCircle,
  FaGlobeAmericas,
} from "react-icons/fa";
import { MdSecurity, MdSchool, MdWorkspacePremium } from "react-icons/md";

const WhyChina = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="bg-gray-200">
      <div className="mb-20 py-20 px-4 sm:px-6 lg:px-8 container mx-auto">
        {/* Header Section */}
        <div
          data-aos="fade-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500"
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <div className="w-3 h-12 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-full"></div>
            <div className="w-3 h-12 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full"></div>
            <div className="w-3 h-12 bg-gradient-to-b from-blue-400 to-blue-500 rounded-full"></div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Why Study in
            <span className="relative ml-4">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                China?
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full"></div>
            </span>
          </h1>

          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Join thousands of international students who have transformed their
            future through China's world-class education system and generous
            scholarship programs
          </p>

          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full border border-blue-100 shadow-sm">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-pulse"></div>
            <span className="font-semibold text-blue-700">
              <PiStar className="w-5 h-5 text-amber-400 inline mr-2" />
              Global Academia's Exclusive Partnership
            </span>
          </div>
        </div>

        {/* Main Benefits Grid */}
        <div className="space-y-8">
          {/* Scholarship & Financial Benefits */}
          <div data-aos="fade-up" className="grid lg:grid-cols-3 gap-8">
            {/* Main Scholarship Card */}
            <div className="lg:col-span-2">
              <div className="relative group h-full">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/50 to-cyan-50/30 rounded-2xl border border-gray-100 shadow-lg shadow-blue-50"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/30 to-cyan-100/20 rounded-full blur-3xl"></div>

                <div className="relative p-8 h-full rounded-2xl">
                  {/* Card Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                      <PiRocketLaunch className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-cyan-400/10 text-blue-600 text-sm font-medium rounded-full">
                          Exclusive Offer
                        </span>
                        <span className="px-3 py-1 bg-gradient-to-r from-green-500/10 to-emerald-400/10 text-green-600 text-sm font-medium rounded-full">
                          100% Scholarship
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        Premium Scholarship Programs
                      </h2>
                      <p className="text-gray-600 mt-1">
                        Comprehensive financial support for international
                        students
                      </p>
                    </div>
                  </div>

                  {/* Features Grid */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-5">
                      {[
                        {
                          icon: PiCertificate,
                          title: "Full Tuition Waiver",
                          desc: "100% scholarship coverage",
                        },
                        {
                          icon: FaUniversity,
                          title: "Top-Ranked Universities",
                          desc: "QS World Ranking institutions",
                        },
                        {
                          icon: PiHouse,
                          title: "Free Accommodation",
                          desc: "On-campus residence included",
                        },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-4 group/feature"
                        >
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg flex items-center justify-center flex-shrink-0 border border-blue-100 group-hover/feature:shadow-lg group-hover/feature:shadow-blue-100 transition-all duration-300">
                            <item.icon className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900 text-lg">
                              {item.title}
                            </h3>
                            <p className="text-gray-600 text-sm mt-1">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-5">
                      {[
                        {
                          icon: PiCurrencyDollar,
                          title: "Monthly Stipend",
                          desc: "RMB 2,000 - 3,000 living allowance",
                        },
                        {
                          icon: PiMedal,
                          title: "No IELTS Required",
                          desc: "English medium programs available",
                        },
                        {
                          icon: PiTrendUp,
                          title: "Low Processing Fee",
                          desc: "Affordable application cost",
                        },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-4 group/feature"
                        >
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg flex items-center justify-center flex-shrink-0 border border-blue-100 group-hover/feature:shadow-lg group-hover/feature:shadow-blue-100 transition-all duration-300">
                            <item.icon className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900 text-lg">
                              {item.title}
                            </h3>
                            <p className="text-gray-600 text-sm mt-1">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* University Badges */}
                  <div className="mt-10 pt-8 border-t border-gray-100">
                    <p className="text-gray-600 text-sm font-medium mb-4">
                      Partner Universities
                    </p>
                    <div className="flex flex-wrap gap-4">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-100 flex items-center gap-2"
                        >
                          <MdSchool className="w-5 h-5 text-blue-600" />
                          <span className="text-gray-700 font-medium">
                            University {i + 1}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Card */}
            <div>
              <div className="relative group h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/20 rounded-2xl border border-gray-100 shadow-lg shadow-emerald-50"></div>
                <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-emerald-100/30 to-teal-100/20 rounded-full blur-3xl"></div>

                <div className="relative p-8 h-full rounded-2xl">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-400 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
                      <FaHandsHelping className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        Complete Support
                      </h2>
                      <p className="text-gray-600 text-sm">
                        End-to-end guidance
                      </p>
                    </div>
                  </div>

                  <div className="space-y-5">
                    {[
                      {
                        icon: PiStudent,
                        title: "Expert Counseling",
                        desc: "Personalized guidance",
                      },
                      {
                        icon: PiBriefcase,
                        title: "Internship Programs",
                        desc: "Industry experience",
                      },
                      {
                        icon: PiMapPin,
                        title: "Halal Food Arrangement",
                        desc: "Cultural accommodation",
                      },
                      {
                        icon: PiShieldCheck,
                        title: "100% Success Rate",
                        desc: "Proven track record",
                      },
                      {
                        icon: PiAirplaneTakeoff,
                        title: "Fast Processing",
                        desc: "Quick admission",
                      },
                      {
                        icon: PiChartLineUp,
                        title: "Part-time Job Support",
                        desc: "Work opportunities",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 group/support"
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg flex items-center justify-center flex-shrink-0 border border-emerald-100 group-hover/support:shadow-md group-hover/support:shadow-emerald-100 transition-all duration-300">
                          <item.icon className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 text-sm truncate">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 pt-8 border-t border-gray-100">
                    <div className="text-center">
                      <div className="inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">
                        <PiUsersThree className="w-6 h-6 text-emerald-600" />
                        <div>
                          <div className="text-2xl font-bold text-gray-900">
                            5000+
                          </div>
                          <div className="text-sm text-gray-600">
                            Students Successfully Placed
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Campus & Facilities */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="grid lg:grid-cols-3 gap-8"
          >
            <div className="lg:col-span-2">
              <div className="relative group h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50/30 to-pink-50/20 rounded-2xl border border-gray-100 shadow-lg shadow-purple-50"></div>

                <div className="relative p-8 h-full rounded-2xl">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-400 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20">
                      <PiBuildings className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        World-Class Campus Facilities
                      </h2>
                      <p className="text-gray-600 text-sm">
                        Modern infrastructure for holistic development
                      </p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      {[
                        "Modern Accommodation with AC",
                        "High-speed Internet Access",
                        "24/7 Library Access",
                        "Sports Complex & Gym",
                        "Swimming Pool",
                        "Medical Facilities",
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <FaCheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-4">
                      {[
                        "Research Laboratories",
                        "Cultural Centers",
                        "Student Clubs",
                        "Career Counseling",
                        "Language Support",
                        "Security Services",
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <FaCheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10 pt-8 border-t border-gray-100">
                    <div className="grid grid-cols-3 gap-4">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-100 flex items-center justify-center"
                        >
                          <MdWorkspacePremium className="w-8 h-8 text-purple-600 opacity-70" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="relative group h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-white via-amber-50/30 to-orange-50/20 rounded-2xl border border-gray-100 shadow-lg shadow-amber-50"></div>

                <div className="relative p-8 h-full rounded-2xl">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-400 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/20">
                      <FaGlobeAmericas className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        Global Recognition
                      </h2>
                      <p className="text-gray-600 text-sm">
                        Internationally accredited degrees
                      </p>
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div className="p-5 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border border-amber-100">
                      <div className="text-4xl font-bold text-amber-600 mb-2">
                        Top 100
                      </div>
                      <div className="text-gray-700 font-medium">
                        QS Asia University Rankings
                      </div>
                    </div>

                    <div className="p-5 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border border-amber-100">
                      <div className="text-4xl font-bold text-amber-600 mb-2">
                        500+
                      </div>
                      <div className="text-gray-700 font-medium">
                        International Partnerships
                      </div>
                    </div>

                    <div className="p-5 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border border-amber-100">
                      <div className="text-4xl font-bold text-amber-600 mb-2">
                        98%
                      </div>
                      <div className="text-gray-700 font-medium">
                        Employment Rate After Graduation
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visa & Safety Section - Modern Redesign */}
          <div data-aos="fade-up" data-aos-delay="300" className="space-y-8 ">
            {/* Main Header for Section */}
            <div className="text-center mt-28">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-100 mb-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-400 rounded-full animate-pulse"></div>
                  <div
                    className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-full animate-pulse"
                    style={{ animationDelay: "0.3s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-400 rounded-full animate-pulse"
                    style={{ animationDelay: "0.6s" }}
                  ></div>
                </div>
                <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                  VISA & SAFETY ASSURANCE
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Complete Security &
                <span className="relative ml-4">
                  <span className="relative z-10 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                    Seamless Processing
                  </span>
                  <div className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 rounded-full"></div>
                </span>
              </h2>

              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Your safety and visa success are our top priorities. We ensure a
                secure and smooth journey from application to arrival.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Security Features Card */}
              <div className="relative group">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-indigo-50/30 to-blue-50/20 rounded-2xl border border-gray-100 shadow-xl shadow-indigo-50/30"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>

                {/* Main Card Content */}
                <div className="relative p-6 md:p-8 h-full rounded-2xl">
                  {/* Card Header */}
                  <div className="flex items-start gap-4 mb-8">
                    <div className="relative">
                      {/* Glow Effect */}
                      <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-blue-400 rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

                      {/* Icon Container */}
                      <div className="relative w-16 h-16 bg-gradient-to-br from-indigo-500 via-indigo-600 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <MdSecurity className="w-8 h-8 text-white" />

                        {/* Floating Elements */}
                        <div className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-br from-cyan-400 to-blue-300 rounded-full border-2 border-white shadow-sm animate-pulse"></div>
                        <div
                          className="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-br from-blue-400 to-indigo-300 rounded-full border-2 border-white shadow-sm animate-pulse"
                          style={{ animationDelay: "0.5s" }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-full border border-indigo-100 mb-2">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-500 to-blue-400 rounded-full animate-pulse"></div>
                        <span className="text-xs font-medium text-indigo-700">
                          SECURITY FIRST
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        360° Safety
                        <span className="relative ml-3">
                          <span className="relative z-10 bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                            Coverage
                          </span>
                          <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-full"></div>
                        </span>
                      </h2>
                      <p className="text-gray-600 text-sm mt-2">
                        Comprehensive protection throughout your journey
                      </p>
                    </div>
                  </div>

                  {/* Features Grid */}
                  <div className="grid gap-4">
                    {[
                      {
                        icon: PiShield,
                        title: "24/7 Campus Security",
                        value: "Full Protection",
                        description:
                          "Round-the-clock monitoring & emergency response",
                        gradient: "from-indigo-500 to-blue-400",
                        bgColor: "from-indigo-50 to-blue-50",
                      },
                      {
                        icon: FaAward,
                        title: "Visa Success Rate",
                        value: "98%",
                        description: "Industry-leading approval rate",
                        gradient: "from-blue-500 to-indigo-400",
                        bgColor: "from-blue-50 to-indigo-50",
                      },
                      {
                        icon: PiLightning,
                        title: "Fast Visa Processing",
                        value: "30 Days",
                        description: "Expedited application handling",
                        gradient: "from-indigo-500 to-cyan-400",
                        bgColor: "from-indigo-50 to-cyan-50",
                      },
                      {
                        icon: PiBookOpen,
                        title: "Legal Support",
                        value: "Available",
                        description: "Expert immigration assistance",
                        gradient: "from-blue-500 to-purple-400",
                        bgColor: "from-blue-50 to-purple-50",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="group/feature relative overflow-hidden"
                      >
                        {/* Animated Background */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${item.bgColor} opacity-0 group-hover/feature:opacity-100 transition-opacity duration-500 rounded-xl`}
                        ></div>

                        {/* Main Feature Card */}
                        <div className="relative p-4 rounded-xl border border-gray-100 hover:border-transparent hover:shadow-lg hover:shadow-indigo-100/30 transition-all duration-500">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              {/* Icon Container */}
                              <div className="relative">
                                <div
                                  className={`absolute -inset-3 bg-gradient-to-r ${item.gradient} rounded-full blur-md opacity-0 group-hover/feature:opacity-20 transition-opacity duration-500`}
                                ></div>
                                <div className="relative w-12 h-12 bg-gradient-to-br from-white to-gray-50 rounded-lg flex items-center justify-center border border-gray-100 shadow-sm group-hover/feature:shadow-md group-hover/feature:scale-110 transition-all duration-300">
                                  <item.icon
                                    className={`w-6 h-6 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}
                                  />
                                </div>
                              </div>

                              {/* Content */}
                              <div className="flex-1">
                                <h4 className="font-bold text-gray-900 group-hover/feature:text-gray-900 transition-colors duration-300">
                                  {item.title}
                                </h4>
                                <p className="text-gray-600 text-sm mt-0.5 group-hover/feature:text-gray-700 transition-colors duration-300">
                                  {item.description}
                                </p>
                              </div>
                            </div>

                            {/* Value Badge */}
                            <div className="relative">
                              <div
                                className={`absolute -inset-3 bg-gradient-to-r ${item.gradient} rounded-full blur-sm opacity-0 group-hover/feature:opacity-30 transition-opacity duration-500`}
                              ></div>
                              <div
                                className={`relative px-4 py-2 bg-gradient-to-r ${item.bgColor} rounded-lg border border-gray-100 group-hover/feature:border-transparent transition-all duration-300`}
                              >
                                <span
                                  className={`text-lg font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}
                                >
                                  {item.value}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Trust Indicator */}
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-8 bg-gradient-to-b from-indigo-500 to-blue-400 rounded-full"></div>
                        <div>
                          <div className="text-sm text-gray-600">
                            Certified by
                          </div>
                          <div className="font-medium text-gray-900">
                            International Education Standards
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-500">
                          Verified & Secure
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-4 h-4 text-amber-400 fill-current"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Combined Why Choose Us & Testimonial - Span 2 Columns */}
              <div className="lg:col-span-2">
                <div className="relative group h-full">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-gradient-to-b via-blue-50/20 to-cyan-50/10 rounded-2xl border border-gray-100 shadow-xl shadow-blue-50/30"></div>
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-56 h-56 bg-gradient-to-tr from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>

                  {/* Main Content */}
                  <div className="relative p-6 md:p-8 h-full rounded-2xl">
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Why Choose Us - Enhanced */}
                      <div className="relative">
                        {/* Floating Elements */}
                        <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 rounded-full blur-xl"></div>
                        <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-blue-400/10 rounded-full blur-xl"></div>

                        {/* Header */}
                        <div className="relative mb-8">
                          <div className="flex items-center gap-4 mb-6">
                            <div className="relative">
                              {/* Animated Glow */}
                              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

                              {/* Main Icon */}
                              <div className="relative w-16 h-16 bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                <PiStar className="w-8 h-8 text-white" />

                                {/* Animated Particles */}
                                <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-300 rounded-full animate-ping opacity-70"></div>
                                <div
                                  className="absolute -bottom-1 -left-1 w-3 h-3 bg-blue-300 rounded-full animate-ping opacity-70"
                                  style={{ animationDelay: "0.3s" }}
                                ></div>
                              </div>
                            </div>

                            <div>
                              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full border border-blue-100 mb-3">
                                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-pulse"></div>
                                <span className="text-sm font-medium text-blue-700">
                                  WHY GLOBAL ACADEMIA?
                                </span>
                              </div>
                              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                                Our Unmatched
                                <span className="relative ml-3">
                                  <span className="relative z-10 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                                    Advantages
                                  </span>
                                  <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full"></div>
                                </span>
                              </h3>
                              <p className="text-gray-600 text-sm mt-2">
                                Experience excellence with our proven track
                                record
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-2 gap-4">
                          {[
                            {
                              title: "15+ Years",
                              desc: "Industry Experience",
                              icon: "🏆",
                              gradient: "from-blue-500 to-blue-400",
                            },
                            {
                              title: "5000+",
                              desc: "Students Placed",
                              icon: "🎓",
                              gradient: "from-cyan-500 to-cyan-400",
                            },
                            {
                              title: "50+",
                              desc: "Partner Universities",
                              icon: "🏛️",
                              gradient: "from-blue-500 to-indigo-400",
                            },
                            {
                              title: "100%",
                              desc: "Success Rate",
                              icon: "✅",
                              gradient: "from-emerald-500 to-emerald-400",
                            },
                            {
                              title: "24/7",
                              desc: "Student Support",
                              icon: "💬",
                              gradient: "from-cyan-500 to-blue-400",
                            },
                            {
                              title: "Complete",
                              desc: "Post-Arrival Assistance",
                              icon: "✈️",
                              gradient: "from-blue-500 to-cyan-400",
                            },
                          ].map((item, i) => (
                            <div key={i} className="group/feature relative">
                              <div className="relative p-4 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-100 hover:border-transparent hover:shadow-lg hover:shadow-blue-100/30 transition-all duration-300 overflow-hidden">
                                {/* Background Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover/feature:opacity-100 transition-opacity duration-500"></div>

                                {/* Content */}
                                <div className="relative z-10">
                                  <div className="flex items-start gap-3">
                                    <div
                                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center text-2xl`}
                                    >
                                      {item.icon}
                                    </div>
                                    <div>
                                      <div className="text-xl font-bold text-gray-900 group-hover/feature:text-gray-900">
                                        {item.title}
                                      </div>
                                      <div className="text-sm text-gray-600 group-hover/feature:text-gray-700">
                                        {item.desc}
                                      </div>
                                    </div>
                                  </div>

                                  {/* Progress Indicator */}
                                  <div className="mt-4 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                    <div
                                      className={`h-full bg-gradient-to-r ${item.gradient} rounded-full transition-all duration-1000`}
                                      style={{
                                        width:
                                          item.title === "100%"
                                            ? "100%"
                                            : "95%",
                                      }}
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Call to Action */}
                        <div className="mt-8 pt-6 border-t border-gray-100">
                          <button className="w-full group/btn px-6 py-3 bg-gradient-to-r from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 rounded-xl border border-blue-100 hover:border-blue-200 transition-all duration-300">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                                  <svg
                                    className="w-4 h-4 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M13 10V3L4 14h7v7l9-11h-7z"
                                    />
                                  </svg>
                                </div>
                                <div className="text-left">
                                  <div className="font-medium text-gray-900">
                                    Start Your Journey
                                  </div>
                                  <div className="text-xs text-gray-600">
                                    Get personalized guidance
                                  </div>
                                </div>
                              </div>
                              <svg
                                className="w-5 h-5 text-gray-400 group-hover/btn:text-blue-500 group-hover/btn:translate-x-1 transition-all duration-300"
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
                          </button>
                        </div>
                      </div>

                      {/* Testimonial - Enhanced */}
                      <div className="relative">
                        {/* Main Testimonial Card */}
                        <div className="relative h-full">
                          <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-blue-50/30 rounded-2xl border border-gray-100 shadow-xl shadow-blue-100/20 overflow-hidden">
                            {/* Animated Background */}
                            <div className="absolute inset-0">
                              <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-500/5 to-cyan-400/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                              <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tr from-cyan-500/5 to-blue-400/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
                            </div>

                            {/* Content */}
                            <div className="relative h-full p-6 md:p-8">
                              {/* Testimonial Header */}
                              <div className="mb-8">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50/80 to-cyan-50/80 backdrop-blur-sm rounded-full border border-blue-100/50 mb-6">
                                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
                                    <svg
                                      className="w-4 h-4 text-white"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                  </div>
                                  <div>
                                    <div className="text-sm font-medium text-blue-700">
                                      STUDENT VOICE
                                    </div>
                                    <div className="text-xs text-gray-600">
                                      Real experiences, real results
                                    </div>
                                  </div>
                                </div>

                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                  Transformative
                                  <span className="relative ml-3">
                                    <span className="relative z-10 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                                      Success Stories
                                    </span>
                                    <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full"></div>
                                  </span>
                                </h3>
                              </div>

                              {/* Quote */}
                              <div className="relative mb-8">
                                <div className="absolute -top-6 -left-6 text-7xl text-blue-100 font-serif opacity-50">
                                  "
                                </div>
                                <p className="text-gray-700 text-lg leading-relaxed italic relative z-10">
                                  The entire process was seamless from start to
                                  finish. Global Academia's expertise made my
                                  dream of studying at a top Chinese university
                                  a reality.
                                </p>
                                <div className="absolute -bottom-6 -right-6 text-7xl text-cyan-100 font-serif opacity-50">
                                  "
                                </div>
                              </div>

                              {/* Student Profile */}
                              <div className="mb-8">
                                <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-blue-100/50">
                                  <div className="relative">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full overflow-hidden">
                                      <div className="w-full h-full bg-gradient-to-br from-blue-400 to-cyan-300 flex items-center justify-center">
                                        <span className="text-white font-bold text-xl">
                                          AR
                                        </span>
                                      </div>
                                    </div>
                                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-amber-500 to-orange-400 rounded-full border-2 border-white flex items-center justify-center">
                                      <svg
                                        className="w-3 h-3 text-white"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                      >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                      </svg>
                                    </div>
                                  </div>

                                  <div className="flex-1">
                                    <div className="flex items-start justify-between">
                                      <div>
                                        <h4 className="font-bold text-gray-900 text-lg">
                                          Ahmed Rahman
                                        </h4>
                                        <p className="text-gray-600 text-sm">
                                          Computer Science Graduate
                                        </p>
                                      </div>
                                      <div className="hidden sm:block">
                                        <div className="px-3 py-1 bg-gradient-to-r from-emerald-50 to-green-50 rounded-full border border-emerald-100">
                                          <span className="text-xs font-medium text-emerald-700">
                                            Graduated 2023
                                          </span>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="mt-3 flex items-center gap-3">
                                      <div className="flex items-center gap-1">
                                        <svg
                                          className="w-4 h-4 text-amber-400 fill-current"
                                          viewBox="0 0 20 20"
                                        >
                                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <span className="text-sm font-medium text-gray-900">
                                          4.9/5
                                        </span>
                                      </div>

                                      <div className="h-4 w-px bg-gray-200"></div>

                                      <div className="flex items-center gap-2">
                                        <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-cyan-400 rounded flex items-center justify-center">
                                          <svg
                                            className="w-3 h-3 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth="2"
                                              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                            />
                                          </svg>
                                        </div>
                                        <span className="text-sm font-medium text-gray-900">
                                          Tsinghua University
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Success Metrics */}
                              <div className="grid grid-cols-3 gap-4">
                                {[
                                  {
                                    value: "Full",
                                    label: "Scholarship",
                                    icon: "💰",
                                  },
                                  {
                                    value: "30 Days",
                                    label: "Processing",
                                    icon: "⚡",
                                  },
                                  {
                                    value: "98%",
                                    label: "Satisfaction",
                                    icon: "😊",
                                  },
                                ].map((metric, i) => (
                                  <div
                                    key={i}
                                    className="text-center p-3 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-100"
                                  >
                                    <div className="text-2xl mb-1">
                                      {metric.icon}
                                    </div>
                                    <div className="text-lg font-bold text-gray-900">
                                      {metric.value}
                                    </div>
                                    <div className="text-xs text-gray-600">
                                      {metric.label}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Banner */}
        <div data-aos="fade-up" data-aos-delay="400" className="mt-16">
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 rounded-2xl p-8 md:p-12 shadow-xl shadow-blue-500/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  value: "100%",
                  label: "Scholarship Success",
                  icon: PiCertificate,
                },
                {
                  value: "98%",
                  label: "Visa Approval Rate",
                  icon: PiShieldCheck,
                },
                {
                  value: "50+",
                  label: "Partner Universities",
                  icon: FaUniversity,
                },
                { value: "5000+", label: "Happy Students", icon: PiUsersThree },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-xl mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div data-aos="fade-up" data-aos-delay="500" className="mt-16">
          <div className="text-center bg-gradient-to-b from-white via-blue-50/30 to-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-lg">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-400/10 rounded-full mb-6">
              <PiGlobeHemisphereWest className="w-5 h-5 text-blue-600" />
              <span className="text-blue-600 font-medium">
                Limited Seats Available
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Begin Your Educational Journey in China?
            </h3>

            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Join the next batch of international students and secure your
              future with China's premium education system
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1">
                <span className="flex items-center justify-center gap-3">
                  Apply for Scholarship 2025
                  <PiGraduationCap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </span>
              </button>

              <button className="group px-8 py-4 bg-white text-gray-800 font-semibold rounded-xl border-2 border-blue-100 hover:border-blue-200 hover:bg-blue-50 transition-all duration-300 hover:-translate-y-1">
                <span className="flex items-center justify-center gap-3">
                  Book Free Consultation
                  <PiChartLineUp className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </span>
              </button>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-100">
              <p className="text-gray-500 text-sm">
                Next scholarship application deadline: December 31, 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChina;
