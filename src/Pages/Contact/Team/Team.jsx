import React, { useEffect } from "react";
import {
  AiOutlineTeam,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillMail,
} from "react-icons/ai";
import {
  FaFacebook,
  FaGraduationCap,
  FaQuoteLeft,
  FaGlobeAmericas,
  FaHandshake,
  FaChartLine,
  FaUsers,
} from "react-icons/fa";
import { GiForwardField } from "react-icons/gi";
import sayem from "../../../assets/image/sayemPic.jpg";
import zamirul from "../../../assets/image/zamirul2.jpg";
import manPic1 from "../../../assets/image/man1.webp";
import AOS from "aos";
import "aos/dist/aos.css";

const Team = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Zamirul Kabir",
      title: "Founder & CEO",
      role: "Strategic Vision & Leadership",
      image: zamirul,
      description:
        "Visionary leader with 15+ years in international education. Drives our mission to provide accessible, world-class education globally.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "ceo@globalacademia.com",
      },
      stats: "5000+ Students Guided",
      color: "from-blue-500 to-cyan-500",
      icon: <FaGlobeAmericas className="text-white" />,
    },
    {
      id: 2,
      name: "夏海云",
      title: "创始人 & 国际协调员",
      role: "International Partnerships",
      image: sayem,
      description:
        "Expert in fostering global academic partnerships. Speaks 4 languages and has established collaborations with 50+ universities worldwide.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "coordinator@globalacademia.com",
      },
      stats: "50+ Partner Universities",
      color: "from-purple-500 to-pink-500",
      icon: <FaHandshake className="text-white" />,
    },
    {
      id: 3,
      name: "Michael Chen",
      title: "Academic Director",
      role: "Curriculum Development",
      image: manPic1,
      description:
        "PhD in Education with expertise in international curriculum design. Oversees academic quality and student success programs.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "academic@globalacademia.com",
      },
      stats: "98% Student Success Rate",
      color: "from-green-500 to-emerald-500",
      icon: <FaGraduationCap className="text-white" />,
    },
    {
      id: 4,
      name: "Sarah Johnson",
      title: "Admissions Director",
      role: "Student Recruitment",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
      description:
        "Specializes in international student admissions with 10+ years experience. Expert in visa processes and scholarship guidance.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "admissions@globalacademia.com",
      },
      stats: "2000+ Successful Admissions",
      color: "from-amber-500 to-orange-500",
      icon: <FaChartLine className="text-white" />,
    },
    {
      id: 5,
      name: "David Miller",
      title: "Career Counselor",
      role: "Career Development",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w-400",
      description:
        "Career guidance expert with corporate HR background. Helps students secure internships and job placements globally.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "career@globalacademia.com",
      },
      stats: "1000+ Job Placements",
      color: "from-red-500 to-rose-500",
      icon: <FaUsers className="text-white" />,
    },
    {
      id: 6,
      name: "Priya Sharma",
      title: "Marketing Director",
      role: "Brand Strategy",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400",
      description:
        "Digital marketing specialist with focus on international education. Creates compelling narratives about student success stories.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "marketing@globalacademia.com",
      },
      stats: "300% Growth in 3 Years",
      color: "from-indigo-500 to-blue-500",
      icon: <FaChartLine className="text-white" />,
    },
  ];

  const teamStats = [
    { value: "15+", label: "Years Experience", icon: "🏆" },
    { value: "50+", label: "Countries Covered", icon: "🌍" },
    { value: "5000+", label: "Students Served", icon: "🎓" },
    { value: "98%", label: "Success Rate", icon: "⭐" },
  ];

  return (
    <div className="relative overflow-hidden bg-gray-200">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full opacity-10 blur-3xl -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200 rounded-full opacity-10 blur-3xl translate-x-48 translate-y-48"></div>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 relative ">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
            <AiOutlineTeam className="text-blue-600" size={20} />
            <span className="text-blue-700 font-semibold">Expert Team</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
              Academic Leadership
            </span>
          </h1>

          <p className="text-xl text-gray-600">
            A dedicated team of education experts committed to transforming
            student lives through international education
          </p>
        </div>

        {/* Team Stats */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          data-aos="fade-up"
        >
          {teamStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow text-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Member Image & Badge */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

                {/* Role Badge */}
                <div className="absolute top-4 left-4">
                  <div className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-800">
                    {member.role}
                  </div>
                </div>

                {/* Stats Badge */}
                <div className="absolute bottom-4 right-4">
                  <div className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-blue-600">
                    {member.stats}
                  </div>
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-blue-500 font-semibold">
                      {member.title}
                    </p>
                  </div>
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${member.color}`}
                  >
                    {member.icon}
                  </div>
                </div>

                <p className="text-gray-600 mb-6 line-clamp-3">
                  {member.description}
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <a
                    href={member.social.linkedin}
                    className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    title="LinkedIn"
                  >
                    <AiFillLinkedin size={20} />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="p-2 text-gray-600 hover:text-blue-400 hover:bg-blue-50 rounded-lg transition-colors"
                    title="Twitter"
                  >
                    <AiFillTwitterCircle size={20} />
                  </a>
                  <a
                    href={member.social.facebook}
                    className="p-2 text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                    title="Facebook"
                  >
                    <FaFacebook size={18} />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="p-2 text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors ml-auto"
                    title="Email"
                  >
                    <AiFillMail size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Philosophy */}
        <div
          className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-8 md:p-12 text-white mb-20 relative overflow-hidden"
          data-aos="fade-up"
        >
          {/* Background Pattern */}
          <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>

          <div className="relative ">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                  <GiForwardField className="text-white text-4xl" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <FaQuoteLeft className="text-white/50" />
                  <h2 className="text-2xl md:text-3xl font-bold">
                    Our Team Philosophy
                  </h2>
                </div>
                <p className="text-lg text-blue-100 mb-6">
                  We believe that every student deserves access to world-class
                  education. Our team combines decades of experience in
                  international education with a passionate commitment to
                  student success. We work tirelessly to break down barriers and
                  create opportunities for students from all backgrounds to
                  achieve their academic dreams.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[zamirul, sayem, manPic1].map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt="Team member"
                        className="w-10 h-10 rounded-full border-2 border-white"
                      />
                    ))}
                  </div>
                  <span className="text-blue-100">
                    Join our team of experts today!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Want to Join Our Team?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            We're always looking for passionate education professionals to join
            our mission of transforming lives through international education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-4 px-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-3">
              <AiOutlineTeam />
              View Open Positions
              <span className="ml-2 group-hover:translate-x-2 transition-transform">
                →
              </span>
            </button>
            <button className="group border-2 border-blue-500 text-blue-500 font-bold py-4 px-8 rounded-xl hover:bg-blue-50 transition-all duration-300 inline-flex items-center gap-3">
              <AiFillMail />
              Contact HR Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
