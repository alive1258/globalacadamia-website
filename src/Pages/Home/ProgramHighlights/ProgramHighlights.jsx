import React from "react";

const ProgramHighlights = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Program Highlights</h2>
          <p className="text-gray-600">Comprehensive educational pathways</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Diploma Programs",
              desc: "4-year engineering and technical programs",
              features: [
                "Hands-on training",
                "Industry certification",
                "Direct employment",
              ],
            },
            {
              title: "Bachelor's Degrees",
              desc: "4-year comprehensive degree programs",
              features: [
                "Global recognition",
                "Research opportunities",
                "Higher studies pathway",
              ],
            },
            {
              title: "Master's Programs",
              desc: "Advanced 1-2 year specializations",
              features: [
                "Research focus",
                "Industry collaboration",
                "Leadership development",
              ],
            },
          ].map((program, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
              <p className="text-gray-600 mb-6">{program.desc}</p>
              <ul className="space-y-2">
                {program.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramHighlights;
