import React, { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiSend,
  FiCheckCircle,
} from "react-icons/fi";
import { AiOutlineWhatsApp, AiOutlineWechat } from "react-icons/ai";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    program: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({
      name: "",
      email: "",
      phone: "",
      country: "",
      program: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: "Our Office",
      details: [
        "123 Education Street",
        "Beijing, China 100000",
        "Tsinghua University Campus",
      ],
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <FiPhone className="w-6 h-6" />,
      title: "Phone Number",
      details: ["+86 10 1234 5678", "+86 138 0013 8000 (24/7)"],
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <FiMail className="w-6 h-6" />,
      title: "Email Address",
      details: ["admissions@globalacademia.cn", "support@globalacademia.cn"],
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: <FiClock className="w-6 h-6" />,
      title: "Working Hours",
      details: [
        "Monday - Friday: 9:00 - 18:00",
        "Saturday: 10:00 - 16:00",
        "Sunday: Emergency Support",
      ],
      color: "bg-amber-100 text-amber-600",
    },
  ];

  const socialMedia = [
    {
      icon: <AiOutlineWhatsApp />,
      label: "WhatsApp",
      color: "bg-green-500",
      link: "#",
    },
    {
      icon: <AiOutlineWechat />,
      label: "WeChat",
      color: "bg-green-400",
      link: "#",
    },
    {
      icon: <FaFacebook />,
      label: "Facebook",
      color: "bg-blue-600",
      link: "#",
    },
    {
      icon: <FaInstagram />,
      label: "Instagram",
      color: "bg-pink-600",
      link: "#",
    },
    { icon: <FaTwitter />, label: "Twitter", color: "bg-sky-500", link: "#" },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      color: "bg-blue-700",
      link: "#",
    },
  ];

  return (
    <div className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In Touch With
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Our Team
            </span>
          </h2>

          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Have questions about studying in China? Our expert advisors are here
            to help you every step of the way. Contact us for personalized
            guidance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-xl ${info.color}`}>
                        {info.icon}
                      </div>
                      <h4 className="text-lg font-semibold">{info.title}</h4>
                    </div>
                    <div className="space-y-2">
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-300">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
              <div className="flex flex-wrap gap-3">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl ${social.color} text-white hover:opacity-90 transition-opacity`}
                  >
                    <span className="text-lg">{social.icon}</span>
                    <span className="font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Map Preview */}
            <div className="mt-12">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h4 className="text-xl font-bold mb-4">Our Location</h4>
                <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <FiMapPin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                    <p className="text-gray-300">Beijing, China</p>
                    <p className="text-sm text-gray-400">
                      Tsinghua University Area
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-2">Send us a Message</h3>
              <p className="text-gray-300 mb-8">
                Fill out the form below and our team will get back to you within
                24 hours.
              </p>

              {submitted && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl">
                  <div className="flex items-center gap-3">
                    <FiCheckCircle className="w-5 h-5 text-green-400" />
                    <p className="text-green-200">
                      Thank you! Your message has been sent successfully.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+86 138 0013 8000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Country *
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select your country</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="India">India</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Nepal">Nepal</option>
                      <option value="Sri Lanka">Sri Lanka</option>
                      <option value="Vietnam">Vietnam</option>
                      <option value="Thailand">Thailand</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Program of Interest *
                  </label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a program</option>
                    <option value="Diploma">Diploma Programs</option>
                    <option value="Bachelor">Bachelor's Programs</option>
                    <option value="Master">Master's Programs</option>
                    <option value="MBBS">MBBS in China</option>
                    <option value="Engineering">Engineering Programs</option>
                    <option value="Business">Business Programs</option>
                    <option value="Scholarship">Scholarship Information</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Tell us about your educational background, interests, and any specific questions..."
                  />
                </div>

                <div className="flex items-center gap-4">
                  <button
                    type="submit"
                    className="flex-1 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <FiSend className="w-5 h-5" />
                    Send Message
                  </button>
                </div>

                <p className="text-sm text-gray-400 text-center">
                  By submitting this form, you agree to our Privacy Policy and
                  consent to being contacted by our team regarding educational
                  opportunities.
                </p>
              </form>
            </div>

            {/* Quick Response Guarantee */}
            <div className="mt-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <FiClock className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">
                    24-Hour Response Guarantee
                  </h4>
                  <p className="text-gray-300 text-sm">
                    We guarantee to respond to all inquiries within 24 hours
                    during business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Emergency Contact</h3>
            <p className="text-gray-300 mb-6">
              For urgent matters outside business hours, contact our 24/7
              emergency support:
            </p>
            <div className="inline-flex items-center gap-6 px-8 py-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="text-center">
                <div className="text-sm text-gray-400 mb-1">
                  Emergency Hotline
                </div>
                <div className="text-xl font-bold text-white">
                  +86 138 0013 8000
                </div>
              </div>
              <div className="h-8 w-px bg-white/20"></div>
              <div className="text-center">
                <div className="text-sm text-gray-400 mb-1">Email</div>
                <div className="text-xl font-bold text-white">
                  emergency@globalacademia.cn
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
