import React, { useEffect, useState } from "react";
import {
  BiSolidQuoteRight,
  BiChevronLeft,
  BiChevronRight,
} from "react-icons/bi";
import { PiGraduationCap, PiStarFill, PiMapPin } from "react-icons/pi";
import { FaFlag, FaUniversity, FaCalendarAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonial = () => {
  const [allStudents, setAllStudents] = useState([]);
  const [profileIndex, setProfileIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Hardcoded student data - replace this with your actual data structure
  const hardcodedStudents = [
    {
      id: 1,
      name1: "Alex Johnson",
      name2: "Sarah Chen",
      name3: "Mohammed Rahman",
      varsity1: "Sichuan University",
      varsity2: "Tsinghua University",
      varsity3: "Peking University",
      des1: "The scholarship program changed my life. The support from the university and the quality of education exceeded all my expectations. China's education system is world-class!",
      des2: "Studying in China was the best decision of my life. The cultural exposure combined with excellent academic facilities prepared me for a global career.",
      des3: "100% scholarship made my dream possible. The professors are highly qualified and the research opportunities are exceptional.",
      image1:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      image2:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      image3:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      name1: "David Wilson",
      name2: "Lisa Wang",
      name3: "Ahmed Hassan",
      varsity1: "Fudan University",
      varsity2: "Zhejiang University",
      varsity3: "Nanjing University",
      des1: "Excellent facilities and international exposure. The scholarship covered everything including accommodation.",
      des2: "The cultural immersion was amazing. I learned Mandarin and experienced authentic Chinese culture.",
      des3: "Research opportunities were top-notch. I published two papers during my master's program.",
      image1:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      image2:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      image3:
        "https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
      name1: "James Miller",
      name2: "Emma Zhang",
      name3: "Omar Ali",
      varsity1: "Shanghai Jiao Tong University",
      varsity2: "Wuhan University",
      varsity3: "Sun Yat-sen University",
      des1: "Career opportunities after graduation were excellent. I got multiple job offers from international companies.",
      des2: "The university's industry connections helped me secure an internship at a Fortune 500 company.",
      des3: "Living cost in China is very reasonable compared to Western countries. The scholarship was more than enough.",
      image1:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      image2:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      image3:
        "https://images.unsplash.com/photo-1507591064344-4c6ce005-128?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
  ];

  useEffect(() => {
    // Use hardcoded data first to ensure display works
    setAllStudents(hardcodedStudents);

    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Autoplay functionality
  useEffect(() => {
    let intervalId;
    if (autoplay && allStudents.length > 0) {
      intervalId = setInterval(() => {
        setProfileIndex((prevIndex) => (prevIndex + 1) % allStudents.length);
      }, 5000);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [autoplay, profileIndex, allStudents]);

  const profile = allStudents[profileIndex] || {};

  const handlePrev = () => {
    setProfileIndex((prev) => (prev === 0 ? allStudents.length - 1 : prev - 1));
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 10000);
  };

  const handleNext = () => {
    setProfileIndex((prev) => (prev + 1) % allStudents.length);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 10000);
  };

  // Function to extract country from name
  const getCountryFromName = (name) => {
    const nameToCountry = {
      Alex: "United States",
      Sarah: "Singapore",
      Mohammed: "Bangladesh",
      David: "United Kingdom",
      Lisa: "China",
      Ahmed: "Egypt",
      James: "Canada",
      Emma: "Malaysia",
      Omar: "Pakistan",
      John: "United Kingdom",
      Jane: "Canada",
      Mike: "Australia",
    };

    const firstName = name?.split(" ")[0];
    return nameToCountry[firstName] || "International Student";
  };

  // Function to get program from university
  const getProgramFromUniversity = (university) => {
    const universityPrograms = {
      "Sichuan University": "Computer Science",
      "Tsinghua University": "Business Administration",
      "Peking University": "Mechanical Engineering",
      "Fudan University": "Economics",
      "Zhejiang University": "Electrical Engineering",
      "Nanjing University": "Civil Engineering",
      "Shanghai Jiao Tong University": "Information Technology",
      "Wuhan University": "Biotechnology",
      "Sun Yat-sen University": "Medicine",
      "Beijing University": "Electrical Engineering",
      "Shanghai University": "Civil Engineering",
    };
    return universityPrograms[university] || "Engineering";
  };

  // Function to generate graduation year
  const getGraduationYear = (studentNum) => {
    const currentYear = new Date().getFullYear();
    const years = ["2023", "2022", "2024"];
    return years[(studentNum - 1) % 3];
  };

  // Function to generate rating
  const getRating = (studentNum) => {
    const ratings = [5, 4, 5];
    return ratings[(studentNum - 1) % 3];
  };

  const StudentCard = (studentNum) => {
    const studentData = {
      1: {
        name: profile?.name1 || "Student One",
        university: profile?.varsity1 || "Chinese University",
        description: profile?.des1 || "Great experience studying in China!",
        image:
          profile?.image1 ||
          "https://via.placeholder.com/80/3b82f6/ffffff?text=Student",
      },
      2: {
        name: profile?.name2 || "Student Two",
        university: profile?.varsity2 || "Chinese University",
        description: profile?.des2 || "Excellent education system!",
        image:
          profile?.image2 ||
          "https://via.placeholder.com/80/3b82f6/ffffff?text=Student",
      },
      3: {
        name: profile?.name3 || "Student Three",
        university: profile?.varsity3 || "Chinese University",
        description: profile?.des3 || "Life-changing opportunity!",
        image:
          profile?.image3 ||
          "https://via.placeholder.com/80/3b82f6/ffffff?text=Student",
      },
    }[studentNum];

    return {
      name: studentData.name,
      university: studentData.university,
      description: studentData.description,
      image: studentData.image,
      country: getCountryFromName(studentData.name),
      program: getProgramFromUniversity(studentData.university),
      year: getGraduationYear(studentNum),
      rating: getRating(studentNum),
    };
  };

  const renderRating = (rating) => {
    return [...Array(5)].map((_, i) => (
      <PiStarFill
        key={i}
        className={`text-lg ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-100 rounded-full opacity-20"></div>

      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div
          className="text-center mb-16"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <div className="inline-flex items-center gap-3 bg-blue-50 text-blue-600 px-6 py-2 rounded-full mb-6">
            <PiGraduationCap className="text-lg" />
            <span className="font-semibold text-sm">SUCCESS STORIES</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-blue-600">Students Say</span>
          </h1>

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-blue-200"></div>
            <BiSolidQuoteRight className="text-3xl text-blue-500" />
            <div className="h-px w-16 bg-blue-200"></div>
          </div>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from international students who achieved their dreams through
            our 100% scholarship programs in China
          </p>
        </div>

        {/* Debug info - shows current profile data */}
        <div className="text-center text-sm text-gray-500 mb-4">
          Showing testimonial set {profileIndex + 1} of {allStudents.length}
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-6 mb-8">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-white border border-gray-200 hover:bg-blue-50 hover:border-blue-200 transition-colors shadow-sm"
            aria-label="Previous testimonial"
          >
            <BiChevronLeft className="text-2xl text-gray-600" />
          </button>

          <div className="flex gap-2">
            {allStudents.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setProfileIndex(index);
                  setAutoplay(false);
                  setTimeout(() => setAutoplay(true), 10000);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === profileIndex
                    ? "bg-blue-600 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-white border border-gray-200 hover:bg-blue-50 hover:border-blue-200 transition-colors shadow-sm"
            aria-label="Next testimonial"
          >
            <BiChevronRight className="text-2xl text-gray-600" />
          </button>
        </div>

        {/* Testimonial Cards - Always show 3 cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[1, 2, 3].map((studentNum) => {
            const student = StudentCard(studentNum);

            return (
              <div
                key={studentNum}
                data-aos="fade-up"
                data-aos-delay={studentNum * 100}
                className="group relative"
              >
                {/* Card */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 min-h-[500px] flex flex-col">
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 text-blue-100 group-hover:text-blue-200 transition-colors">
                    <BiSolidQuoteRight className="text-6xl" />
                  </div>

                  {/* Student Info */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <img
                        src={student.image}
                        alt={student.name}
                        className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://via.placeholder.com/80/3b82f6/ffffff?text=Student";
                        }}
                      />
                      <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white p-1 rounded-full">
                        <FaFlag className="text-xs" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900">
                        {student.name}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <PiMapPin />
                        <span>{student.country}</span>
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {renderRating(student.rating)}
                    <span className="text-gray-500 text-sm ml-2">
                      {student.rating}.0
                    </span>
                  </div>

                  {/* Testimonial Text */}
                  <div className="mb-6 flex-1">
                    <p className="text-gray-700 italic leading-relaxed line-clamp-4">
                      "{student.description}"
                    </p>
                  </div>

                  {/* University & Program Info */}
                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <FaUniversity className="text-blue-600" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">University</div>
                        <div className="font-semibold text-gray-900">
                          {student.university}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-green-50 rounded-lg">
                        <PiGraduationCap className="text-green-600" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Program</div>
                        <div className="font-semibold text-gray-900">
                          {student.program}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-purple-50 rounded-lg">
                        <FaCalendarAlt className="text-purple-600" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">
                          Graduation Year
                        </div>
                        <div className="font-semibold text-gray-900">
                          {student.year}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Scholarship Badge */}
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  100% Scholarship
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div
          className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {allStudents.length * 3}+
              </div>
              <div className="text-gray-700">Successful Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-700">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-700">Scholarship Success</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-700">Partner Universities</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div
          className="mt-16 text-center"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to share your success story?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
              Apply Now
            </button>
            <button className="bg-white text-blue-600 border border-blue-200 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
              Share Your Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
