// InterviewPrep.jsx
import React from 'react';
import { motion } from 'framer-motion';
// import { Button } from "./Button";


const InterviewPrep = () => {
  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const buttonVariants = {
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-[#1a1a2e] p-8">
      {/* Left Section */}
      <motion.div
        className="md:w-1/2 space-y-6 text-white"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Master Your <span className="text-[#ff4f5a]">Interview Prep</span>
        </h1>
        <p className="text-lg text-gray-300">
          Dive into curated resources, tips, and mock interviews tailored to help you ace your next job interview.
        </p>
        <motion.button
          className=" bg-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-purple-700 transition duration-300"
          variants={buttonVariants}
          whileHover="hover"
        >
          Get Started
        </motion.button>
        
      </motion.div>

     

      {/* Right Section - Image */}
      <motion.div
        className="md:w-1/2 mt-10 md:mt-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="https://images.pexels.com/photos/4344878/pexels-photo-4344878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Replace with your actual image path
          alt="Interview Prep"
          className="rounded-lg shadow-md"
        />
      </motion.div>
    </section>
  );
};

export default InterviewPrep;
