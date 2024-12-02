// import { useEffect, useId, useRef, useState } from "react";
// import { motion } from "framer-motion";
'use client'
"use client";


import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const steps = [
  { title: 'Round 1: Initial Idea Pitch (Preliminary Round)', description: 'Each team presents their idea in 3 minutes using a single-slide poster or a brief verbal pitch. Judging Criteria: Clarity of the idea (30%), Relevance to the theme (30%), Originality (40%). Shortlisting: Top 50% of teams move to the next round.' },
  { title: 'Round 2: Detailed PPT Presentation (Semifinal Round)', description: '5-7 minute PPT presentation followed by 2-3 minutes of Q&A with judges. Judging Criteria: Innovation & Creativity (25%), Feasibility/Practicality (25%), Impact/Scalability (25%), Presentation Skills (25%). Shortlisting: Top [X] teams based on scores advance to the final round.' },
  { title: 'Round 3: Panel Discussion & Questionnaire (Final Round)', description: 'Each team faces a panel discussion or rapid-fire questionnaire session where judges probe deeper into their idea.' }
]

export default function TeaRoadmap() {
  const [activeStep, setActiveStep] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef })
  
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])
  const pinProgress = useTransform(scrollYProgress, [0, 1], [0, 100])

  useEffect(() => {
    const updateActiveStep = () => {
      const newActiveStep = Math.min(
        Math.floor(scrollYProgress.get() * steps.length),
        steps.length - 1
      )
      setActiveStep(newActiveStep)
    }

    const unsubscribe = scrollYProgress.onChange(updateActiveStep)
    return () => unsubscribe()
  }, [scrollYProgress])

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-purple-700 to-blue-500 py-12 px-0 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-white left-1/2">Event flow</h1>
      <div className="max-w-3xl ">
        <div className="relative">
          <svg
            className="w-full  h-[800px]"
            viewBox="0 0 100 800"
            preserveAspectRatio="none"
          >
            <  motion.path
              d="M10,0 Q50,100 10,200 T10,400 T10,600"
              stroke="#e5e7eb"
              strokeWidth="4"
              fill="none"
             className={"top-40"}/>
            <motion.path
              d="M10,0 Q50,100 10,200 T10,400 T10,600"
              stroke="#3b82f6"
              strokeWidth="4"
              fill="none"
              style={{ pathLength }}
            />
          </svg>
          <motion.div
            className={`absolute top-0 left-0 w-6 h-6 bg-yellow-400 rounded-full -ml-3 -mt-3 ${
              activeStep === steps.length - 1 ? 'opacity-100' : 'opacity-50'
            }`}
            style={{ top: pinProgress + '%' }}
          />
          {steps.map((step, index) => (
            <div
              key={index}
              className={`absolute left-8 transition-opacity duration-300 ${
                index <= activeStep ? 'opacity-100' : 'opacity-50'
              }`}
              style={{ top: `${(index * 100) / steps.length}%` }}
            >
              <div className="bg-white w-1/2 bg-opacity-20 p-4 rounded-lg shadow-md backdrop-filter backdrop-blur-lg">
                <h2 className="text-lg font-semibold text-yellow-400">{step.title}</h2>
                <p className="text-sm text-gray-200">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

