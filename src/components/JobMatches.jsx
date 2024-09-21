import React from 'react'
import { motion } from 'framer-motion';


const JobMatches = () => {
    const categories = [
        { name: 'SDE-1', icon: '💻' },
        { name: 'Data Science', icon: '📊' },
        { name: 'Graphic Design', icon: '🎨' },
        { name: 'Marketing', icon: '📢' },
        { name: 'Finance', icon: '₹' },
      ];
      
    
    
      const roles = [
        {
          title: 'Data Analyst',
          openings: '370+ Openings',
          logos: ['https://link-to-logo1.png', 'https://link-to-logo2.png', 'https://link-to-logo3.png'],
        },
        {
          title: 'Frontend',
          openings: '250+ Openings',
          logos: ['https://link-to-logo1.png', 'https://link-to-logo2.png', 'https://link-to-logo3.png'],
        },
        {
          title: 'Full-Stack Roles',
          openings: '300+ Openings',
          logos: ['https://link-to-logo1.png', 'https://link-to-logo2.png', 'https://link-to-logo3.png'],
        },
        {
          title: 'Product Management',
          openings: '246+ Openings',
          logos: ['https://link-to-logo1.png', 'https://link-to-logo2.png', 'https://link-to-logo3.png'],
        },
      ];
    
  return (
    <>
    <div className="min-h-screen bg-[#1E1E2F] p-8 text-white">
    {/* Main Wrapper */}
    <div className="container mx-auto">

      {/* Heading with Animation */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-6"
      >
        <h1 className="text-5xl font-bold">
          We're here for every step of your search.
        </h1>
      </motion.div>

      {/* Subheading with Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-center mb-12"
      >
        <p className="text-lg text-gray-400">
          Tell us about your career history and goals. We'll help you craft a standout profile and help you land your dream job.
        </p>
      </motion.div>

      {/* Main Content Section */}
      <div className="pl-12 pb-20 flex flex-col md:flex-row items-center justify-between">
        {/* Left Section - Text and Buttons */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-1/2"
        >
          <div className="flex items-center mb-4">
            <span className="inline-block p-2 rounded-full bg-purple-600 hover:bg-purple-700 transition">
              <svg
                className="w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15.9 14.32l4.24 4.24a1 1 0 01-1.42 1.42l-4.24-4.24a7.5 7.5 0 111.42-1.42zM10.5 16a5.5 5.5 0 100-11 5.5 5.5 0 000 11z"
                />
              </svg>
            </span>
            <h2 className="ml-4 text-xl font-bold">Job Matches</h2>
          </div>

          <h1 className="text-5xl font-bold mb-6">
            Get matched to relevant jobs, personalized to you
          </h1>

          <p className="text-gray-400 mb-8">
            Forget endlessly scrolling on job boards. Tell us your preferences & dealbreakers, and we’ll match you with jobs that fit.
          </p>

          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition">
            Get Matched Now
          </button>
        </motion.div>

        {/* Right Section - Image */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 mt-8 md:mt-0"
        >
          <img
            src="https://d8it4huxumps7.cloudfront.net/uploads/images/66a3829b1d2da_jobs_internships.png?d=996x803"
            alt="Woman with job icons"
            className="w-full h-auto"
          />
        </motion.div>
      </div>
      
    </div>
  </div>


  {/* Jobs Category Section */}
  <div className="h-auto bg-[#1E1E2F] p-8">
        <div className="container mx-auto text-white">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-8" /* Reduced margin-bottom */
          >
            <h1 className="text-5xl font-bold">Jobs Category</h1>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="flex justify-center gap-4 flex-wrap"
          >
            {categories.map((category, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-52 h-16 bg-[#3A3A4D] rounded-full shadow-md transition hover:bg-purple-600"
              >
                <span className="text-3xl text-white mr-2">{category.icon}</span>
                <span className="text-lg text-gray-200">{category.name}</span>
              </motion.div>
            ))}

            {/* Explore All Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center w-52 h-16 bg-transparent border-2 border-purple-600 text-purple-400 rounded-full shadow-md transition hover:bg-purple-600 hover:text-white"
            >
              Explore all <span className="ml-2">→</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      
      <div className="h-auto  bg-[#1E1E2F] p-8 pt-24"> {/* Removed extra padding-top */}
        <div className="container mx-auto text-white">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold">Find The Right Role For You</h1>
            <p className="text-gray-400 mt-2">
              Apply to roles matching your skills from 500+ trending options.
            </p>
          </motion.div>

          {/* Role Cards */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {roles.map((role, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#2B2B3B] rounded-xl p-6 shadow-lg transition hover:shadow-xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-white">{role.title}</h2>
                  <a href="#" className="text-purple-400 hover:text-purple-600">
                    →
                  </a>
                </div>
                <p className="text-gray-400 mb-6">{role.openings}</p>
                <div className="flex space-x-3">
                  {role.logos.map((logo, idx) => (
                    <img
                      key={idx}
                      src={logo}
                      alt={`${role.title} logo`}
                      className="w-12 h-12 rounded-full bg-white p-2"
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>



          {/* Navigation Arrows */}
          <div className="flex justify-between mt-8">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-transparent border border-gray-600 rounded-full p-2 cursor-pointer"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-transparent border border-gray-600 rounded-full p-2 cursor-pointer"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
  </>
  )
}

export default JobMatches;