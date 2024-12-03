import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ArrowRight, Lightbulb, IndianRupee, Users } from "lucide-react";
import Rules from "./components/Rules";
import RoadMap from "./components/RoadMap";
import RoadMapMobile from "./components/RoadMapMobile";
import Marquee from "@/components/ui/marquee";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-blue-500 text-white">
      <Navbar />
      { !isMobile ? (<section className="flex py-10 justify-center space-x-8 mb-10">
  <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center shadow-lg shrink-0">
    <img src="/brce.webp" alt="Logo 1" className="w-full h-full object-contain rounded-full" />
  </div>
  <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center shadow-lg shrink-0">
    <img src="/IEE.png" alt="Logo 2" className="w-full h-full object-contain rounded-full" />
  </div>
  <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center shadow-lg shrink-0">
    <img src="/iiclogo-1.webp" alt="Logo 3" className="w-full h-full object-contain rounded-full" />
  </div>
  <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center shadow-lg shrink-0">
    <img src="/MoE-Logo.png" alt="Logo 4" className="w-full h-full object-contain rounded-full" />
  </div>
</section>): 
<section className="flex py-10 justify-between items-center space-x-4 overflow-x-auto">
  
  <div className="w-[20%] max-w-[180px] aspect-square bg-white bg-opacity-20 rounded-full flex items-center justify-center shadow-lg shrink-0">
    <img src="/IEE.png" alt="Logo 2" className="w-[90%] h-[90%] object-contain rounded-full" />
  </div>
  <div className="w-[20%] max-w-[180px] aspect-square bg-white bg-opacity-20 rounded-full flex items-center justify-center shadow-lg shrink-0">
    <img src="/iiclogo-1.webp" alt="Logo 3" className="w-[90%] h-[90%] object-contain rounded-full" />
  </div>
  <div className="w-[20%] max-w-[180px] aspect-square bg-white bg-opacity-20 rounded-full flex items-center justify-center shadow-lg shrink-0">
    <img src="/MoE-Logo.png" alt="Logo 4" className="w-[90%] h-[90%] object-contain rounded-full" />
  </div>
</section>

}
      <main className="container mx-auto px-4 py-10 md:py-20">
        <section className="text-center mb-10 md:mb-20">
          <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 animate-fade-in-down">
            Idea Challenge Competition
          </h1>
          <p className="text-lg md:text-3xl mb-6 md:mb-8 animate-fade-in-up">
            Pitch Your Ideas, Compete, and Win Big!
          </p>
          <button className="bg-yellow-400 text-purple-900 font-bold py-2 px-4 md:py-4 md:px-8 rounded-full text-lg md:text-2xl hover:bg-yellow-300 transition duration-300 ease-in-out transform hover:scale-105 animate-pulse">
            Register Now
          </button>
        </section>

        <section className="mb-10 -mx-4">
          {!isMobile ? (
            <Marquee pauseOnHover>
              <div className="flex space-x-4 md:space-x-8">
                <FeatureCard
                  icon={
                    <Lightbulb className="w-10 h-10 md:w-16 md:h-16 mb-3 md:mb-6 text-yellow-400" />
                  }
                  title="Innovative Ideas"
                  description="Showcase your groundbreaking concepts and solutions."
                />
                <FeatureCard
                  icon={
                    <Users className="w-10 h-10 md:w-16 md:h-16 mb-3 md:mb-6 text-yellow-400" />
                  }
                  title="Team Collaboration"
                  description="Form a team of 2 to 3 members to collaborate and compete."
                />
                <FeatureCard
                  icon={
                    <IndianRupee className="w-10 h-10 md:w-16 md:h-16 mb-3 md:mb-6 text-yellow-400" />
                  }
                  title="Exciting Prizes"
                  description="Win Cash prizes for your innovative solutions."
                />
              </div>
            </Marquee>
          ) : (
            <div className="grid gap-6 w-[80%] mx-auto justify-center">
              <FeatureCard
                icon={
                  <Lightbulb className="w-10 h-10 md:w-16 md:h-16 mb-3 md:mb-6 text-yellow-400" />
                }
                title="Innovative Ideas"
                description="Showcase your groundbreaking concepts and solutions."
              />
              <FeatureCard
                icon={
                  <Users className="w-10 h-10 md:w-16 md:h-16 mb-3 md:mb-6 text-yellow-400" />
                }
                title="Team Collaboration"
                description="Form a team of 2 to 3 members to collaborate and compete."
              />
              <FeatureCard
                icon={
                  <IndianRupee className="w-10 h-10 md:w-16 md:h-16 mb-3 md:mb-6 text-yellow-400" />
                }
                title="Exciting Prizes"
                description="Win Cash prizes for your innovative solutions."
              />
            </div>
          )}
        </section>

        <section className="text-center mb-16 md:mb-32">
          <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6">
            Event Details
          </h2>
          <p className="text-lg md:text-2xl mb-6 md:mb-10">
            Join us for an exciting day of innovation and creativity!
          </p>
          <div className="bg-transparent text-xl md:text-4xl bg-opacity-20 p-4 md:p-8 rounded-lg backdrop-filter backdrop-blur-lg inline-block border border-white">
            <p className="mb-3 md:mb-4">
              <strong>Date:</strong> December 6th, 2024
            </p>
            <p className="mb-3 md:mb-4">
              <strong>Time:</strong> 9:00 AM - 6:00 PM
            </p>
            <p className="mb-3 md:mb-4">
              <strong>Venue:</strong> Brindavan College Of Engineering
            </p>
          </div>
        </section>

        <Rules />
        <section className="relative">
          {
            isMobile ? <RoadMapMobile /> : <RoadMap /> 
          }
        </section>
      </main>
      <div className="text-center py-10 md:py-20 bg-gradient-to-r from-purple-700 to-blue-600">
        <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6">
          Ready to Innovate?
        </h2>
        <a
          href="#"
          className="inline-flex items-center bg-yellow-400 text-purple-900 font-bold py-2 px-4 md:py-4 md:px-8 rounded-full text-lg md:text-2xl hover:bg-yellow-300 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Apply Now
          <ArrowRight className="ml-2 md:ml-3 w-5 h-5 md:w-8 md:h-8" />
        </a>
      </div>
      <Footer />
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: JSX.Element;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white bg-opacity-20 p-4 md:p-8 rounded-3xl backdrop-filter backdrop-blur-lg">
      {icon}
      <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-4">{title}</h2>
      <p className="text-base md:text-xl">{description}</p>
    </div>
  );
}

export default App;
