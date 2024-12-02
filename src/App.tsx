import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { ArrowRight, Lightbulb, IndianRupee, Users } from 'lucide-react';
import Rules from "./components/rules";
import TeaRoadmap from "./components/roadmap";
import Marquee from "@/components/ui/marquee";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-blue-500 text-white">
      <Navbar />
      <main className="container mx-auto  md:py-20">
        <section className="text-center mb-10 md:mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-down">
            Idea Challenge Competition
          </h1>
          <p className="text-xl md:text-3xl mb-8 animate-fade-in-up">
            Pitch Your Ideas, Compete, and Win Big!
          </p>
          <button className="bg-yellow-400 text-purple-900 font-bold py-3 px-6 md:py-4 md:px-8 rounded-full text-xl md:text-2xl hover:bg-yellow-300 transition duration-300 ease-in-out transform hover:scale-105 animate-pulse">
            Register Now
          </button>
        </section>

        <section className="mb-10 -mx-4">
          {typeof window !== 'undefined' && window.innerWidth > 768 ? (
            <Marquee pauseOnHover>
              <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                <FeatureCard
                  icon={<Lightbulb className="w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-6 text-yellow-400" />}
                  title="Innovative Ideas"
                  description="Showcase your groundbreaking concepts and solutions."
                />
                <FeatureCard
                  icon={<Users className="w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-6 text-yellow-400" />}
                  title="Team Collaboration"
                  description="Form a team of 2 to 3 members to collaborate and compete."
                />
                <FeatureCard
                  icon={<IndianRupee className="w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-6 text-yellow-400" />}
                  title="Exciting Prizes"
                  description="Win Cash prizes for your innovative solutions."
                />
              </div>
            </Marquee>
          ) : (
            <div className="grid gap-6 md:grid-cols-3 md:gap-8">
              <FeatureCard
                icon={<Lightbulb className="w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-6 text-yellow-400" />}
                title="Innovative Ideas"
                description="Showcase your groundbreaking concepts and solutions."
              />
              <FeatureCard
                icon={<Users className="w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-6 text-yellow-400" />}
                title="Team Collaboration"
                description="Form a team of 2 to 3 members to collaborate and compete."
              />
              <FeatureCard
                icon={<IndianRupee className="w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-6 text-yellow-400" />}
                title="Exciting Prizes"
                description="Win Cash prizes for your innovative solutions."
              />
            </div>
          )}
        </section>

        <section className="text-center mb-20 md:mb-32">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Event Details</h2>
          <p className="text-xl md:text-2xl mb-8 md:mb-10">
            Join us for an exciting day of innovation and creativity!
          </p>
          <div className="bg-transparent text-2xl md:text-4xl bg-opacity-20 p-6 md:p-8 rounded-lg backdrop-filter backdrop-blur-lg inline-block border border-white">
            <p className="mb-4">
              <strong>Date:</strong> August 15, 2024
            </p>
            <p className="mb-4">
              <strong>Time:</strong> 9:00 AM - 6:00 PM
            </p>
            <p className="mb-4">
              <strong>Venue:</strong> Tech Innovation Center
            </p>
          </div>
        </section>

        <Rules />
        <section className="relative">
          <TeaRoadmap />
        </section>
      </main>
      <div className="text-center py-10 md:py-20 bg-gradient-to-r from-purple-700 to-blue-600">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Innovate?</h2>
        <a
          href="#"
          className="inline-flex items-center bg-yellow-400 text-purple-900 font-bold py-3 px-6 md:py-4 md:px-8 rounded-full text-xl md:text-2xl hover:bg-yellow-300 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Apply Now
          <ArrowRight className="ml-3 w-6 h-6 md:w-8 md:h-8" />
        </a>
      </div>
      <Footer />
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: JSX.Element; title: string; description: string }) {
  return (
    <div className="bg-white bg-opacity-20 p-6 md:p-8 rounded-3xl backdrop-filter backdrop-blur-lg">
      {icon}
      <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
      <p className="text-lg md:text-xl">{description}</p>
    </div>
  );
}

export default App;
