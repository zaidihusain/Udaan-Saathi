import React, { useEffect, useRef } from "react"; 
import { Button } from "./Button.jsx";
import JoinUsSection from "./JoinUsSection";
import Videowk from "../assets/Videowk.mp4";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import './Chatbot.css';
import { 
  Search, Zap, FileEdit, Briefcase, Clipboard, 
  Code, Paintbrush, BarChart, FileText, HeadphonesIcon, Calculator, HardHat
} from "lucide-react";

export default function Home() {
  const scrollContainerRef = useRef(null);

  const jobTools = [
    { name: "Job Matches", icon: Search },
    { name: "Copilot Extension", icon: Zap },
    { name: "AI Resume Builder", icon: FileEdit },
    { name: "Job Tracker", icon: Briefcase },
    { name: "Interview Prep", icon: Clipboard },
  ];

  const programs = [
    { name: "Development and IT", icon: Code },
    { name: "Design & Creative", icon: Paintbrush },
    { name: "Sales & Marketing", icon: BarChart },
    { name: "Writing & Translation", icon: FileText },
    { name: "Admin & Customer Support", icon: HeadphonesIcon },
    { name: "Finance & Accounting", icon: Calculator },
    { name: "Engineering & Architecture", icon: HardHat },
  ];

  useEffect(() => {
    const scriptSrc = "https://www.chatbase.co/embed.min.js";

    // Check if the script already exists to avoid duplicate loading
    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const script = document.createElement("script");
      script.src = scriptSrc;
      script.defer = true;
      script.setAttribute("chatbotId", "dtEwW7W2VFT7-n_hx9s2W");
      script.setAttribute("domain", "www.chatbase.co");
      document.body.appendChild(script);
    }

    // Configure chatbot settings
    window.embeddedChatbotConfig = {
      chatbotId: "dtEwW7W2VFT7-n_hx9s2W",
      domain: "www.chatbase.co",
      theme: {
        primaryColor: "#6B46C1", // Purple color used in buttons
        backgroundColor: "#1A202C", // Dark background color of the site
        textColor: "#FFFFFF", // White text color
        buttonColor: "#6B46C1", // Button color same as your site's buttons
        buttonHoverColor: "#4C2888" // A slightly darker purple for hover effect
      }
    };

    return () => {
      const script = document.querySelector(`script[src="${scriptSrc}"]`);
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <main className="flex-grow">
        {/* Video Section */}
        <section className="py-20 relative">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={Videowk}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6 text-white">
                Empowering Journeys, Together
              </h1>
              <p className="text-xl mb-8 text-gray-300">
                Forget the old rules. You can have the best people. Right now.
                Right here.
              </p>
              <Link to="/Explore">
              <Button 
              size="lg" 
              className="bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-300">
              Explore
             </Button>
             </Link>
            </div>
          </div>
        </section>

        {/* Job Tools Section */}
        <section className="py-10 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-white">
              Your Job Tools
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {jobTools.map((tool, index) => (
                <Link to={`/${tool.name.replace(/\s+/g, '')}`} key={index}>
                  <Button
                    variant="outline"
                    className="flex items-center space-x-2 px-4 py-2 rounded-full border-2 border-purple-400 hover:border-purple-500 hover:bg-purple-900 transition-colors duration-300"
                  >
                    <tool.icon className="h-5 w-5 text-purple-400" />
                    <span>{tool.name}</span>
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Browse Talent Section */}
        <section
          className="py-20 bg-cover bg-center relative"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1559523182-a284c3fb7cff?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          }}
        >
          <div className="absolute inset-0 bg-gray-900 bg-opacity-90"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              Browse Talent by Category
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {programs.map((program) => (
                <div
                  key={program.name}
                  className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                >
                  <div className="flex items-center mb-4">
                    <program.icon className="h-8 w-8 text-purple-400 mr-3 group-hover:text-purple-300 transition-colors duration-300" />
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                      {program.name}
                    </h3>
                  </div>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                    Find top {program.name.toLowerCase()} professionals for your project.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full text-purple-400 border-purple-400 hover:bg-purple-900 hover:text-white hover:border-purple-500 transition-all duration-300"
                  >
                    Explore {program.name}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="py-10 bg-[#1E1E2F]">
          <JoinUsSection />
          <img src="https://lottie.host/embed/17bd555d-9574-4e4b-9cfe-4c0e01ad5802/QOYrjQr8Lg.json" alt="Img" />
        </section>
      </main>
    </div>
  );
}
