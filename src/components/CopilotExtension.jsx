import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Animation from "../assets/Animation4.mp4";
import Animation1 from "../assets/Animation1.mp4";
import Animation2 from "../assets/Animation2.mp4";
import Animation3 from "../assets/Animation3.mp4";

const CopilotExtension = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1E1E2F] to-[#2A2A3B] text-white p-8">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"  // Increased margin-bottom for spacing
        >
          <h1 className="text-5xl font-bold mb-6">
            Meet your AI copilot for the job search.
          </h1>
          <p className="text-lg text-gray-400">
          Udaan Saathi makes your job search effortless with autofilled applications, enhanced resumes, AI-personalized responses, and real-time application tracking—all integrated into one powerful platform.          
          </p>
        </motion.div>

        {/* Section 1: Optimize Your Resume */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <div className=" p-4 rounded-xl">  {/* Add black background for video */}
              <video
              src={Animation1}
                autoPlay
                loop
                muted
                className="max-w-xs lg:max-w-md rounded-xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Optimize & improve your resume for every job
            </h2>
            <p className="text-lg text-gray-400 mb-8">
            Udaan Saathi scores your resume based on the job description you're applying to and provides insights on how to optimize and tailor your resume, helping you become a stronger candidate.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg shadow-lg inline-flex items-center space-x-2 transition">
              <span>View your resume score</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

        {/* Section 2: Autofill Job Applications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Autofill Job Applications
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Submit applications in just one click, saving you valuable time and effort by autofilling forms.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg shadow-lg inline-flex items-center space-x-2 transition">
              <span>Autofill my applications</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <div className="p-4 rounded-xl">
              <video
              src={Animation2}           
                   autoPlay
                loop
                muted
                className="max-w-xs lg:max-w-md rounded-xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Section 3: Craft Personalized Responses */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <div className="p-4 rounded-xl">
              <video
              autoPlay
              src={Animation3}
                loop
                muted
                className="max-w-xs lg:max-w-md rounded-xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Craft Personalized Responses
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Let AI craft responses personalized for every job you apply to, helping you stand out from the crowd.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg shadow-lg inline-flex items-center space-x-2 transition">
              <span>Create tailored responses</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

        {/* Section 4: Track Your Applications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Track Your Applications
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Automatically track your job applications and status updates, so you never miss an opportunity.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg shadow-lg inline-flex items-center space-x-2 transition">
              <span>Track my applications</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <div className="p-4 rounded-xl">
              <video
                src={Animation}
                autoPlay
                loop
                muted
                className="max-w-xs lg:max-w-md rounded-xl"
              />
            </div>
          </motion.div>
        </div>

      </main>
    </div>
  );
};

export default CopilotExtension;
