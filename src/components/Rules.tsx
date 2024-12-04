//@ts-ignore
import React from 'react';

const rulesData = [
  {
    title: "Eligibility",
    items: [
      "Open to all students from colleges.",
      "Teams may  consist of 2 or 3 members."
    ]
  },
  {
    title: "Originality",
    items: [
      "Ideas must be original and not plagiarized.",
      "Previously submitted or implemented projects are not allowed."
    ]
  },
  {
    title: "Professionalism",
    items: [
      "Teams must respect time limits and event schedules.",
      "Disruptive behavior will lead to disqualification."
    ]
  },
  {
    title: "Evaluation Criteria",
    items: [
      "Innovation, impact, feasibility, and clarity of presentation.",
      "Final judges' decision is binding and cannot be challenged."
    ]
  },
  {
    title: "Deadlines",
    items: [
      "All required materials (PPTs, videos, etc.) must be submitted by the announced deadlines."
    ]
  },
  {
    title: "Code of Conduct",
    items: [
      "Teams must maintain decorum and respect judges, organizers, and other participants."
    ]
  }
];

const Rules = () => {
  return (
<section className="rules-section text-center mb-16 p-4 md:p-6 backdrop-filter backdrop-blur-lg">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 md:mb-8">Rules and Regulations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {rulesData.map((rule, index) => (
          <div key={index} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-4 shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-3">{rule.title}</h3>
            <ul className="list-disc list-inside text-left text-purple-200">
              {rule.items.map((item, idx) => (
                <li key={idx} className="mb-2">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rules;