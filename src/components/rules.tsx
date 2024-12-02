//@ts-ignore
import React from 'react';

const rulesData = [
  {
    title: "Eligibility",
    items: [
      "Open to all students from colleges.",
      "Teams can consist of 2-3 members. (50rs per person)"
    ]
  },
  {
    title: "Presentation",
    items: [
      "Each team must prepare a PowerPoint presentation (max 10 slides).",
      "Time limit: 5-7 minutes per presentation in later rounds.",
      "Visual aids, mockups, or prototypes are allowed."
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
  // {
  //   title: "Attendance",
  //   items: [
  //     "All team members must be present during their scheduled time."
  //   ]
  // },
  {
    title: "Code of Conduct",
    items: [
      "Teams must maintain decorum and respect judges, organizers, and other participants."
    ]
  }
];

const Rules = () => {
  return (
    <section className="rules-section text-center mb-16 p-6  backdrop-filter backdrop-blur-lg">
      <h2 className="text-4xl font-extrabold text-white mb-4">Rules and Regulations</h2>
      <ol className="list-decimal list-inside text-left mx-auto max-w-2xl">
        {rulesData.map((rule, index) => (
          <li key={index} className="mb-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-4 shadow-lg">
            <strong className="text-xl text-yellow-400">{rule.title}:</strong>
            <ol className="list-disc list-inside ml-6">
              {rule.items.map((item, idx) => (
                <li key={idx} className="text-purple-200">{item}</li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Rules;