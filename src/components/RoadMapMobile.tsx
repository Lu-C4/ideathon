'use client'

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

interface RoadmapItem {
  title: string;
  description: string;
}

const roadmapItems: RoadmapItem[] = [
  {
    title: "Round 1: Initial Idea Pitch (Preliminary Round)",
    description:
      "Each team presents their idea in 3 minutes using a single-slide poster or a brief verbal pitch. Judging Criteria: Clarity of the idea (30%), Relevance to the theme (30%), Originality (40%). Shortlisting: Top 50% of teams move to the next round.",
  },
  {
    title: "Round 2: Detailed PPT Presentation (Semifinal Round)",
    description:
      "5-7 minute PPT presentation followed by 2-3 minutes of Q&A with judges. Judging Criteria: Innovation & Creativity (25%), Feasibility/Practicality (25%), Impact/Scalability (25%), Presentation Skills (25%). Shortlisting: Top [X] teams based on scores advance to the final round.",
  },
  {
    title: "Round 3: Panel Discussion & Questionnaire (Final Round)",
    description:
      "Each team faces a panel discussion or rapid-fire questionnaire session where judges probe deeper into their idea.",
  },
];

export default function RoadMapMobile() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-4xl mx-auto px-4 py-16"
    >
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-24 md:mb-12 text-white">
            Event flow
        </h1>
      <div className="absolute left-4 top-36 bottom-0 w-0.5 bg-gray-200">
        <motion.div
          className="absolute top-0 left-0 w-full bg-blue-500"
          style={{ scaleY: scrollYProgress, originY: 0 }}
        />
      </div>
      <div className="space-y-24">
        {roadmapItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative pl-12"
          >
            <div className="absolute left-0 top-0 -translate-x-1/2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
              {index + 1}
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-purple-400">{item.title}</h3>
              <p className="text-gray-600 text-sm md:text-xl">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
