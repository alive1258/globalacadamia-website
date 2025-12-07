import React, { useEffect, useState } from "react";
import {
  AiFillYoutube,
  AiOutlinePhone,
  AiOutlineGlobal,
  AiOutlineClockCircle,
  AiOutlineMessage,
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiOutlineWechat,
} from "react-icons/ai";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaHeadset,
  FaUniversity,
  FaRegPaperPlane,
} from "react-icons/fa";
import {
  MdOutlineContactPhone,
  MdOutlineEmail,
  MdOutlineLocationOn,
  MdOutlineSupportAgent,
} from "react-icons/md";
import {
  PiGlobe,
  PiBuildings,
  PiChatsTeardrop,
  PiUsersThree,
} from "react-icons/pi";
import { TbWorld } from "react-icons/tb";
import AOS from "aos";
import "aos/dist/aos.css";
import contact from "../../../assets/image/contact1.avif";
import "./InfoContact.css";

const InfoContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        country: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <MdOutlineLocationOn className="w-6 h-6" />,
      title: "Bangladesh Office",
      details: [
        "Ma Sufiya Mohol, 1st Floor",
        "Plastic Factory Road, Notun Vangabrai",
        "Sirajgnaj, Bangladesh",
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: <AiOutlinePhone className="w-6 h-6" />,
      title: "Phone Support",
      details: [
        "+88 0179-3636735",
        "+88 0179-3636735 (WhatsApp)",
        "24/7 Emergency: +88 0179-3636735",
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
    },
    {
      icon: <AiOutlineMail className="w-6 h-6" />,
      title: "Email & Digital",
      details: [
        "info@globalacademia.com",
        "admissions@globalacademia.com",
        "support@globalacademia.com",
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
    },
  ];

  const socialMedia = [
    {
      icon: <FaFacebookF />,
      label: "Facebook",
      link: "https://www.facebook.com/gobalAcademia",
      color: "bg-[#1877F2] hover:bg-[#166FE5]",
      followers: "10K+",
    },
    {
      icon: <FaInstagram />,
      label: "Instagram",
      link: "#",
      color:
        "bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] hover:opacity-90",
      followers: "8K+",
    },
    {
      icon: <AiFillYoutube />,
      label: "YouTube",
      link: "#",
      color: "bg-[#FF0000] hover:bg-[#CC0000]",
      subscribers: "5K+",
    },
    {
      icon: <FaLinkedinIn />,
      label: "LinkedIn",
      link: "#",
      color: "bg-[#0A66C2] hover:bg-[#004182]",
      followers: "3K+",
    },
    {
      icon: <AiOutlineWhatsApp />,
      label: "WhatsApp",
      link: "#",
      color: "bg-[#25D366] hover:bg-[#1DA851]",
      status: "Online",
    },
    {
      icon: <AiOutlineWechat />,
      label: "WeChat",
      link: "#",
      color: "bg-[#07C160] hover:bg-[#06AD56]",
      status: "Active",
    },
  ];

  const supportHours = [
    { day: "Monday - Friday", time: "9:00 AM - 8:00 PM" },
    { day: "Saturday", time: "10:00 AM - 6:00 PM" },
    { day: "Sunday", time: "Emergency Support Only" },
  ];

  return (
    <div className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-blue-50/20 to-white"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-20"></div>

      <div className="relative container px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-75"></div>
              <div className="relative p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full">
                <PiChatsTeardrop className="w-7 h-7 text-white" />
              </div>
            </div>
            <span className="text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              GET IN TOUCH
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Connect With
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
              Global Academia
            </span>
          </h1>

          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Your journey to world-class education starts here. Reach out to our
            expert team for personalized guidance on studying in China.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <FaRegPaperPlane className="w-6 h-6 text-blue-600" />
                Send us a Message
              </h2>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    </div>
                    <div>
                      <div className="font-semibold text-green-800">
                        Message Sent Successfully!
                      </div>
                      <div className="text-green-600 text-sm">
                        We'll get back to you within 24 hours.
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="+88 0179-3636735"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Country *
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select your country</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="India">India</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Nepal">Nepal</option>
                      <option value="Sri Lanka">Sri Lanka</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your educational goals, preferred program, and any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <PiGlobe className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
            {/* Image Card */}
            <div
              className="relative group"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={contact}
                  className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="Global Academia Contact"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                {/* Image Overlay Content */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <FaUniversity className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg">
                        Global Academia
                      </div>
                      <div className="text-white/90 text-sm">
                        Your Gateway to Chinese Education
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-gray-800 text-sm font-medium rounded-full">
                      Expert Guidance
                    </span>
                    <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-gray-800 text-sm font-medium rounded-full">
                      Quick Response
                    </span>
                    <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-gray-800 text-sm font-medium rounded-full">
                      Free Consultation
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="bg-gradient-to-r mt-4 from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <PiUsersThree className="w-6 h-6 text-blue-600" />
                Connect With Our Community
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} text-white rounded-xl p-4 flex flex-col items-center justify-center hover:scale-105 transition-all duration-300 group`}
                  >
                    <div className="text-2xl mb-2">{social.icon}</div>
                    <div className="text-sm font-medium">{social.label}</div>
                    {social.followers && (
                      <div className="text-xs opacity-0 group-hover:opacity-100 transition-opacity mt-1">
                        {social.followers}
                      </div>
                    )}
                    {social.status && (
                      <div className="text-xs opacity-0 group-hover:opacity-100 transition-opacity mt-1">
                        {social.status}
                      </div>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Info & Image */}
          <div className="space-y-8">
            {/* Contact Information Cards */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="group"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl ${info.bgColor}`}>
                        <div
                          className={`text-white bg-gradient-to-br ${info.color} p-2 rounded-lg`}
                        >
                          {info.icon}
                        </div>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-3">
                          {info.title}
                        </h3>
                        <div className="space-y-2">
                          {info.details.map((detail, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-2 text-gray-600"
                            >
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Support Hours */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <AiOutlineClockCircle className="w-6 h-6 text-blue-600" />
                Support Hours
              </h3>

              <div className="space-y-4">
                {supportHours.map((hour, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-4 bg-gray-50 rounded-xl"
                  >
                    <div className="font-medium text-gray-900">{hour.day}</div>
                    <div className="font-semibold text-blue-600">
                      {hour.time}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  <FaHeadset className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-900">
                      24/7 Emergency Support
                    </div>
                    <div className="text-sm text-gray-600">
                      Available for urgent student matters
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoContact;
