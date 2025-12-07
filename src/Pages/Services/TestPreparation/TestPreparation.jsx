import React, { useEffect } from "react";
import {
  PiChalkboardTeacher,
  PiBooks,
  PiClock,
  PiCertificate,
  PiChartLineUp,
  PiUsers,
} from "react-icons/pi";
import AOS from "aos";
import "aos/dist/aos.css";

const TestPreparation = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const tests = [
    {
      name: "IELTS",
      description: "International English Language Testing System",
      icon: <PiBooks className="text-red-500" />,
      color: "bg-red-50 border-red-100",
    },
    {
      name: "TOEFL",
      description: "Test of English as a Foreign Language",
      icon: <PiCertificate className="text-blue-500" />,
      color: "bg-blue-50 border-blue-100",
    },
    {
      name: "SAT",
      description: "Scholastic Assessment Test",
      icon: <PiChartLineUp className="text-green-500" />,
      color: "bg-green-50 border-green-100",
    },
    {
      name: "GRE",
      description: "Graduate Record Examinations",
      icon: <PiChalkboardTeacher className="text-purple-500" />,
      color: "bg-purple-50 border-purple-100",
    },
    {
      name: "GMAT",
      description: "Graduate Management Admission Test",
      icon: <PiUsers className="text-amber-500" />,
      color: "bg-amber-50 border-amber-100",
    },
    {
      name: "PTE",
      description: "Pearson Test of English",
      icon: <PiClock className="text-cyan-500" />,
      color: "bg-cyan-50 border-cyan-100",
    },
  ];

  const features = [
    "Expert native-speaking instructors",
    "Personalized study plans",
    "Mock tests with detailed feedback",
    "Flexible scheduling options",
    "Score improvement guarantee",
    "Online and in-person classes",
  ];

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-transparent rounded-full -translate-x-32 -translate-y-32 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-green-100 to-transparent rounded-full translate-x-48 translate-y-48 opacity-30"></div>

      <div className="container mx-auto px-4 md:px-6 relative ">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
            <PiChalkboardTeacher className="text-blue-500" size={20} />
            <span className="text-blue-600 font-medium">Test Preparation</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ace Your <span className="text-blue-500">Standardized Tests</span>
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive test preparation courses designed to help you achieve
            your target scores
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Test Cards */}
          <div>
            <h3
              className="text-2xl font-bold text-gray-900 mb-8"
              data-aos="fade-right"
            >
              We Prepare For{" "}
              <span className="text-blue-500">All Major Tests</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-4" data-aos="fade-up">
              {tests.map((test, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl border-2 ${test.color} hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group`}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-lg shadow-sm group-hover:scale-110 transition-transform">
                      <div className="text-2xl">{test.icon}</div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-1">
                        {test.name}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {test.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div data-aos="fade-left">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Why Choose Our <span className="text-blue-500">Test Prep?</span>
              </h3>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4"
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mt-10 pt-8 border-t border-gray-100">
                <div
                  className="text-center"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">
                    98%
                  </div>
                  <p className="text-gray-600">Success Rate</p>
                </div>
                <div
                  className="text-center"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2">
                    1000+
                  </div>
                  <p className="text-gray-600">Students Trained</p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10">
                <button className="w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  Book Free Demo Class
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestPreparation;
