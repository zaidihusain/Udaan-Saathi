import Video1 from "../assets/Video1.mp4";
import Video3 from "../assets/Video3.mp4";
import Video4 from "../assets/Video4.mp4";
import Video5 from "../assets/Video5.mp4";

export default function Explore() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 p-4 bg-gray-900">
      <div className="relative rounded-lg bg-[#1E1E2F] p-6 text-white hover:bg-purple-700 hover:scale-105 transition-transform duration-300 overflow-hidden shadow-lg h-80 flex flex-col justify-between">
        <video
          src={Video1}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10">
          <h3 className="text-lg font-bold text-white">Resume Building</h3>
          <p className="text-gray-300 text-lg mb-4">
            Craft a professional resume that stands out. Our intuitive tools and
            expert templates help you highlight your skills, experience, and
            achievements.
          </p>
          <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded transition-colors duration-300">
            Start Building Your Resume
          </button>
        </div>
      </div>

      <div className="relative rounded-lg bg-[#1E1E2F] p-6 text-white hover:bg-purple-700 hover:scale-105 transition-transform duration-300 overflow-hidden shadow-lg h-80 flex flex-col justify-between">
        <video
          src={Video3}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10">
          <h3 className="text-lg font-bold text-white">Job Opportunities</h3>
          <p className="text-gray-300 text-lg mb-4">
            Discover the best job opportunities that match your skills and
            career goals. Connect with top employers and take the next step in
            your professional journey.
          </p>
          <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded transition-colors duration-300">
            Explore Job Listings
          </button>
        </div>
      </div>

      <div className="relative rounded-lg bg-[#1E1E2F] p-6 text-white hover:bg-purple-700 hover:scale-105 transition-transform duration-300 overflow-hidden shadow-lg h-80 flex flex-col justify-between">
        <video
          src={Video4}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10">
          <h3 className="text-lg font-bold text-white">Fellowship</h3>
          <p className="text-gray-300 text-lg mb-4">
            Join a fellowship program where you can collaborate on exciting
            projects, gain valuable experience, and earn rewards for your
            contributions.
          </p>
          <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded transition-colors duration-300">
            Join the Fellowship
          </button>
        </div>
      </div>

      <div className="relative rounded-lg bg-[#1E1E2F] p-6 text-white hover:bg-purple-700 hover:scale-105 transition-transform duration-300 overflow-hidden shadow-lg h-80 flex flex-col justify-between">
        <video
          src={Video5}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10">
          <h3 className="text-lg font-bold text-white">Roadmap</h3>
          <p className="text-gray-300 text-lg mb-4">
            Gain a clear, structured pathway to reach your career goals. Our
            roadmap tool guides you step-by-step to maximize your potential.
          </p>
          <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded transition-colors duration-300">
            Explore Your Roadmap
          </button>
        </div>
      </div>
    </div>
  );
}
