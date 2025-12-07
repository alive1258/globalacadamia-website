import React from "react";
import {
  FiUsers,
  FiGlobe,
  FiAward,
  FiBriefcase,
  FiBookOpen,
  FiHome,
} from "react-icons/fi";
import { MdSchool, MdWorkspacesOutline } from "react-icons/md";

const UniversityStats = () => {
  const stats = [
    {
      icon: <MdSchool className="w-8 h-8" />,
      value: "50+",
      label: "Partner Universities",
      description: "Top-ranked Chinese universities",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      value: "10,000+",
      label: "Students Placed",
      description: "Successful placements worldwide",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <FiGlobe className="w-8 h-8" />,
      value: "45+",
      label: "Countries",
      description: "International student diversity",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: <FiAward className="w-8 h-8" />,
      value: "98%",
      label: "Success Rate",
      description: "Visa & admission success",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: <FiBriefcase className="w-8 h-8" />,
      value: "500+",
      label: "Industry Partners",
      description: "For internships & placements",
      color: "from-red-500 to-rose-500",
    },
    {
      icon: <FiBookOpen className="w-8 h-8" />,
      value: "200+",
      label: "Programs",
      description: "Across all disciplines",
      color: "from-indigo-500 to-blue-500",
    },
  ];

  const achievements = [
    {
      title: "Top Education Partner",
      description: "Awarded by Chinese Ministry of Education",
      year: "2024",
    },
    {
      title: "Excellence in International Education",
      description: "Recognized for student support services",
      year: "2023",
    },
    {
      title: "Best Student Placement Agency",
      description: "Awarded by Study in China Association",
      year: "2023",
    },
    {
      title: "Quality Assurance Certified",
      description: "ISO 9001:2015 Certified Operations",
      year: "2022",
    },
  ];

  return (
    <div className="relative py-20 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Global Academia?
            </span>
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            With years of experience and thousands of success stories, we are
            your trusted partner for studying in China. Here's what makes us
            different.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:shadow-blue-100/30 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>

              <div className="relative ">
                <div
                  className={`mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}
                >
                  <div className="text-white">{stat.icon}</div>
                </div>

                <div className="mb-4">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">
                    {stat.label}
                  </div>
                  <p className="text-gray-600 text-sm">{stat.description}</p>
                </div>

                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <span className="text-blue-600">→</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements & Recognition */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 border border-blue-100">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Awards & Recognition
              </h3>

              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="relative pl-10">
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>

                    <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-semibold text-gray-900">
                          {achievement.title}
                        </h4>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                          {achievement.year}
                        </span>
                      </div>
                      <p className="text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Our Commitment
              </h3>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                      <FiHome className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      Comprehensive Support
                    </h4>
                  </div>
                  <p className="text-gray-600">
                    From application to graduation, we provide end-to-end
                    support including visa assistance, accommodation, airport
                    pickup, and 24/7 emergency support.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                      <MdWorkspacesOutline className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      Career Development
                    </h4>
                  </div>
                  <p className="text-gray-600">
                    We don't just help you get admitted; we prepare you for
                    success with career counseling, internship placements, and
                    job opportunities in China and globally.
                  </p>
                </div>
              </div>

              {/* Accreditation Badges */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Accredited & Certified
                </h4>
                <div className="flex flex-wrap gap-4">
                  {[
                    { name: "MOE Certified", color: "bg-red-100 text-red-800" },
                    {
                      name: "ISO 9001:2015",
                      color: "bg-blue-100 text-blue-800",
                    },
                    {
                      name: "CSC Partner",
                      color: "bg-green-100 text-green-800",
                    },
                    {
                      name: "A+ Rating",
                      color: "bg-purple-100 text-purple-800",
                    },
                  ].map((badge, index) => (
                    <span
                      key={index}
                      className={`px-4 py-2 rounded-lg ${badge.color} font-medium text-sm`}
                    >
                      {badge.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 pt-8 border-t border-blue-200">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Start Your Journey?
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Join thousands of successful students who have transformed their
                lives through quality education in China with Global Academia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300">
                  Book Free Consultation
                </button>
                <button className="px-8 py-3.5 bg-white text-blue-600 font-semibold rounded-xl border-2 border-blue-600 hover:bg-blue-50 transition-colors">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityStats;
