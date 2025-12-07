const ScholarshipSection = () => {
  return (
    <div className="py-20 bg-gradient-to-r from-green-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Scholarship Opportunities</h2>
          <p className="text-gray-600">
            Financial support for deserving students
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { type: "Merit-Based", coverage: "Up to 100%", deadline: "Dec 31" },
            { type: "Need-Based", coverage: "Up to 75%", deadline: "Jan 15" },
            {
              type: "Sports/Talent",
              coverage: "Up to 50%",
              deadline: "Feb 28",
            },
          ].map((scholarship, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-2">{scholarship.type}</h3>
              <div className="text-4xl font-bold text-green-600 mb-4">
                {scholarship.coverage}
              </div>
              <p className="text-gray-600">Coverage: Tuition + Accommodation</p>
              <div className="mt-4 pt-4 border-t">
                <p className="text-gray-500">
                  Deadline: {scholarship.deadline}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScholarshipSection;
