"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    title: "Round 1: Initial Idea Pitch (Preliminary Round)",
    description: [
      "Each team presents their idea in 3 minutes using a maximum of 5 slides presentation.",
      "Judging Criteria: Clarity of the idea, Originality, Innovation, Slide Design and Time Utilization.",
      "Shortlisting: Top 50% of teams move to the next round.",
    ],
  },
  {
    title: "Round 2: Detailed PPT Presentation (Semifinal Round)",
    description: [
      "The team will have to present their second ppt of 10 slides describing their idea in detail in 7 minutes.",
      "Judging Criteria: Cost and time feasibility, Revenue, Sustainability, Impact/Scalability, Presentation Skills.",
      "Shortlisting: Top 25% teams based on scores advance to the final round.",
    ],
  },
  {
    title: "Round 3: Panel Discussion & Questionnaire (Final Round)",
    description: [
      "Each team faces a panel discussion or rapid-fire questionnaire session where judges probe deeper into their idea.",
    ],
  },
  {
    title: "Rewards",
    description: [
      "Top 3 teams will be given cash prize and certificates.",
      "Participation certificates will also be provided for every participant.",
    ],
  },
];

export default function RoadMap() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const pinProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    const updateActiveStep = () => {
      const newActiveStep = Math.min(
        Math.floor(scrollYProgress.get() * steps.length),
        steps.length - 1
      );
      setActiveStep(newActiveStep);
    };

    const unsubscribe = scrollYProgress.onChange(updateActiveStep);
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-purple-700 to-blue-500 py-10 md:py-16 px-4 sm:px-6 lg:px-8"
    >
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-12 text-white">
        Stages of Evaluation
      </h1>
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <svg
            className="w-full h-[700px] md:h-[900px]"
            viewBox="0 0 100 900"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M10,0 Q50,100 10,200 T10,400 T10,600"
              stroke="#e5e7eb"
              strokeWidth="4"
              fill="none"
              className="top-40"
            />
            <motion.path
              d="M10,0 Q50,100 10,200 T10,400 T10,600"
              stroke="#3b82f6"
              strokeWidth="4"
              fill="none"
              style={{ pathLength }}
            />
          </svg>
          <motion.div
            className={`absolute top-0 left-0 w-6 h-6 md:w-8 md:h-8 bg-yellow-400 rounded-full -ml-3 md:-ml-4 -mt-3 md:-mt-4 ${
              activeStep === steps.length - 1 ? "opacity-100" : "opacity-50"
            }`}
            style={{ top: pinProgress + "%" }}
          />
          {steps.map((step, index) => (
            <div
              key={index}
              className={`w-full absolute left-8 md:left-10 transition-opacity duration-300 ${
                index <= activeStep ? "opacity-100" : "opacity-50"
              }`}
              style={{ top: `${(index * 100) / steps.length}%` }}
            >
              <div className="bg-white bg-opacity-20 p-4 md:p-6 rounded-lg shadow-md backdrop-filter backdrop-blur-lg">
                <h2 className="text-lg md:text-2xl font-semibold text-yellow-400 mb-2">
                  {step.title}
                </h2>
                <ul className="list-inside text-base md:text-lg text-gray-200">
                  {step.description.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
