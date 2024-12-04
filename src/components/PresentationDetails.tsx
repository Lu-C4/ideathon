//@ts-ignore
import React from "react";

const rulesData = [
  {
    title: "Round 1",
    items: [
      "Each team must prepare a PowerPoint presentation (max 5 slides) describing their idea in brief.",
      "Time limit: 2-3 minutes per presentation.",
      "Visual aids, mockups, or prototypes are allowed.",
    ],
  },
  {
    title: "Round 2",
    items: [
      "Each team must prepare a PowerPoint presentation (max 10 slides) describing their idea in detail.",
      "Time limit: 7 minutes per presentation.",
      "Visual aids, mockups, or prototypes are allowed.",
    ],
  },
];

const Rules = () => {
  return (
    <section className="rules-section text-center mb-16 p-4 md:p-6 backdrop-filter backdrop-blur-lg">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 md:mb-8">
        Presentations: Your Gateway to Winning!
      </h2>
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {rulesData.map((rule, index) => (
          <div
            key={index}
            className=" bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-4 shadow-lg"
          >
            <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-3">
              {rule.title}
            </h3>
            <ul className="list-disc list-inside text-left text-purple-200">
              {rule.items.map((item, idx) => (
                <li key={idx} className="mb-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rules;
