'use client'

import { useEffect, useRef } from 'react'
import { motion, useAnimation, Variants } from 'framer-motion'

const events = [
  { title: 'Round 1: Initial Idea Pitch (Preliminary Round)', description: 'Each team presents their idea in 3 minutes using a single-slide poster or a brief verbal pitch. Judging Criteria: Clarity of the idea (30%), Relevance to the theme (30%), Originality (40%). Shortlisting: Top 50% of teams move to the next round.' },
  { title: 'Round 2: Detailed PPT Presentation (Semifinal Round)', description: '5-7 minute PPT presentation followed by 2-3 minutes of Q&A with judges. Judging Criteria: Innovation & Creativity (25%), Feasibility/Practicality (25%), Impact/Scalability (25%), Presentation Skills (25%). Shortlisting: Top [X] teams based on scores advance to the final round.' },
  { title: 'Round 3: Panel Discussion & Questionnaire (Final Round)', description: 'Each team faces a panel discussion or rapid-fire questionnaire session where judges probe deeper into their idea.' }
]

const cardVariants: Variants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
}

function EventCard({ event, index }: { event: { title: string; description: string }, index: number }) {
  const controls = useAnimation()
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("onscreen")
        }
      },
      {
        threshold: 0.1
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [controls])

  return (
    <motion.div
      ref={ref}
      initial="offscreen"
      animate={controls}
      variants={cardVariants}
      className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-lg"
    >
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-400 text-purple-900 text-xl font-bold">
            {index + 1}
          </div>
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-medium text-white">{event.title}</h3>
          <p className="mt-2 text-base text-purple-200">{event.description}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function EventFlow() {
  return (
    <div className="py-16 bg-gradient-to-r from-purple-700 to-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white text-center mb-12">Event Flow</h2>
        <div className="space-y-8">
          {events.map((event, index) => (
            <EventCard key={index} event={event} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
