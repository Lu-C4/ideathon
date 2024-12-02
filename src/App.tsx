import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { ArrowRight, Lightbulb, IndianRupee, Users } from 'lucide-react';
// import EventFlow from "./components/eventFlow";

import Rules from "./components/rules";
import TeaRoadmap from "./components/roadmap";
import Marquee from "@/components/ui/marquee";



function App() {
  return (
    // bg-gradient-to-r from-purple-700 to-blue-600 rounded-lg
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-blue-500 text-white">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-4xl font-bold mb-4 animate-fade-in-down">
          Idea Challenge Competition
          </h1>
          <p className=" texts md:text-2xl mb-8 animate-fade-in-up">
            
            Pitch Your Ideas, Compete, and Win Big!
          </p>
          <button className="bg-yellow-400 text-purple-900 font-bold py-3 px-6 rounded-full text-lg hover:bg-yellow-300 transition duration-300 ease-in-out transform hover:scale-105 animate-pulse">
            Register Now
          </button>
        </section>

        <section className="mb-1 -m-4 ">
          <Marquee pauseOnHover>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-20 p-6 rounded-3xl backdrop-filter backdrop-blur-lg">
                <Lightbulb className="w-12 h-12 mb-4 text-yellow-400" />
                <h2 className="text-2xl font-bold mb-2">Innovative Ideas</h2>
                <p>Showcase your groundbreaking concepts and solutions.</p>
              </div>
              
              <div className="bg-white bg-opacity-20 p-6 rounded-3xl backdrop-filter backdrop-blur-lg">
                <Users className="w-12 h-12 mb-4 text-yellow-400" />
                <h2 className="text-2xl font-bold mb-2">Team Collaboration</h2>
                <p>Form a team of 2 to 3 members to collaborate and compete.</p>
              </div>
              
              <div className="bg-white bg-opacity-20 p-6 rounded-3xl backdrop-filter backdrop-blur-lg">
                <IndianRupee className="w-12 h-12 mb-4 text-yellow-400" />
                <h2 className="text-2xl font-bold mb-2">Exciting Prizes</h2>
                <p>Win Cash prizes for your innovative solutions.</p>
              </div>
            </div>
          </Marquee>
        </section>

        <section className="text-center mb-16 h-screen flex flex-col gap-52">
          <div>
            <h2 className="text-4xl font-bold mb-4">Event Details</h2>

            <p className="text-xl mb-4">
              Join us for an exciting day of innovation and creativity!
            </p>
            
            <div className="bg-transparent mt-28  text-3xl   bg-opacity-20 p-6 rounded-lg backdrop-filter backdrop-blur-lg inline-block border border-white">
              <p className="mb-2">
                <strong>Date:</strong> August 15, 2024
              </p>
              <p className="mb-2">
                <strong>Time:</strong> 9:00 AM - 6:00 PM
              </p>
              <p className="mb-2">
                <strong>Venue:</strong> Tech Innovation Center
              </p>
            </div>
          </div>
          
        </section>

        <Rules />
        <section className="relative">
          <TeaRoadmap />
        </section>
        {/* <EventFlow /> */}
      </main>
      <div className="text-center py-16 bg-gradient-to-r from-purple-700 to-blue-600">
            <h2 className="text-4xl font-bold mb-4">Ready to Innovate?</h2>
            <a
              href="#"
              className="inline-flex items-center bg-yellow-400 text-purple-900 font-bold py-3 px-6 rounded-full text-lg hover:bg-yellow-300 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Apply Now
              <ArrowRight className="ml-2" />
            </a>
          </div>
      <Footer />
    </div>
  );
}

export default App;

