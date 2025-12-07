import React from "react";

const StudentLife = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Student Life in China</h2>
          <p className="text-gray-600">
            Experience rich cultural and academic life
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              icon: "🏛️",
              title: "Modern Campus",
              desc: "State-of-the-art facilities",
            },
            {
              icon: "🌏",
              title: "Cultural Exchange",
              desc: "International community",
            },
            {
              icon: "🎯",
              title: "Clubs & Activities",
              desc: "100+ student organizations",
            },
            {
              icon: "🏥",
              title: "Health & Safety",
              desc: "Comprehensive support",
            },
          ].map((item, i) => (
            <div key={i} className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentLife;
