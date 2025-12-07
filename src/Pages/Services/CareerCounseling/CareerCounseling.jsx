import React, { useEffect } from "react";
import {
  PiBriefcase,
  PiTarget,
  PiUserCircle,
  PiChartLineUp,
  PiRocketLaunch,
  PiMedal,
} from "react-icons/pi";
import AOS from "aos";
import "aos/dist/aos.css";

const CareerCounseling = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const services = [
    {
      icon: <PiTarget size={24} />,
      title: "Career Assessment",
      description:
        "Comprehensive assessment to identify your strengths, interests, and career preferences",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <PiChartLineUp size={24} />,
      title: "Industry Analysis",
      description:
        "In-depth analysis of industry trends, job markets, and future opportunities",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <PiUserCircle size={24} />,
      title: "Personal Branding",
      description:
        "Build a strong personal brand with optimized resumes, LinkedIn profiles, and portfolios",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <PiBriefcase size={24} />,
      title: "Job Search Strategy",
      description:
        "Effective job search strategies, networking techniques, and interview preparation",
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: <PiRocketLaunch size={24} />,
      title: "Career Transition",
      description:
        "Guidance for career changes, industry switches, and professional development",
      color: "from-red-500 to-rose-500",
    },
    {
      icon: <PiMedal size={24} />,
      title: "Leadership Coaching",
      description:
        "Executive coaching and leadership development for career advancement",
      color: "from-indigo-500 to-blue-500",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer at Google",
      quote:
        "The career counseling helped me transition from mechanical engineering to software development. Life-changing guidance!",
    },
    {
      name: "Michael Chen",
      role: "Investment Banker at JPMorgan",
      quote:
        "The interview preparation and networking strategies were invaluable. Landed my dream job within 3 months.",
    },
    {
      name: "Priya Sharma",
      role: "Data Scientist at Microsoft",
      quote:
        "Their career assessment helped me discover my true passion. The personalized roadmap made all the difference.",
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-cyan-50/30"></div>
      <div className="absolute top-20 right-0 w-64 h-64 bg-gradient-to-l from-purple-100 to-transparent rounded-full opacity-30 blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full mb-6">
            <PiBriefcase className="text-blue-600" size={20} />
            <span className="text-blue-700 font-medium">Career Counseling</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Shape Your{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Professional Future
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Expert guidance to navigate your career path, make informed
            decisions, and achieve professional success
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <div className="text-white text-2xl">{service.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex items-center text-blue-500 font-medium group-hover:translate-x-2 transition-transform">
                Learn more
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Testimonials */}
          <div data-aos="fade-right">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Success <span className="text-blue-500">Stories</span>
            </h3>
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-blue-500 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div data-aos="fade-left">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-8 md:p-10 text-white">
              <h3 className="text-3xl font-bold mb-6">
                Ready to Transform Your Career?
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3"
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
                  <span>One-on-one career counseling sessions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3"
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
                  <span>Industry expert mentors</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3"
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
                  <span>Personalized career roadmap</span>
                </div>
              </div>

              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button className="w-full py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                  Book Free Career Assessment
                </button>
              </div>

              <p className="text-white/80 text-sm mt-6 text-center">
                Limited spots available. Schedule your session today!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerCounseling;
