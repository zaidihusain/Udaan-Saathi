import React from 'react';
import { motion } from 'framer-motion';
import { FaUserTie, FaBuilding, FaGraduationCap } from 'react-icons/fa';

export default function SignUp() {
  return (
    <div className="min-h-screen bg-[#1E1E2F] text-white">
      <main className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-5xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Sign Up
        </motion.h1>
        <motion.h2 
          className="text-2xl text-center mb-12 text-gray-400"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Join as
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Mentor', icon: FaUserTie, count: 85451 },
            { title: 'Organization', icon: FaBuilding, count: 2231 },
            { title: 'Candidate', icon: FaGraduationCap, count: 95224 },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-[#292B3A] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer border border-purple-700"
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6 flex flex-col items-center">
                <motion.div 
                  className="text-6xl mb-4 text-purple-400"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                >
                  <item.icon />
                </motion.div>
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 mb-4">{item.count.toLocaleString()} members</p>
                <button className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
                  Join as {item.title}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
