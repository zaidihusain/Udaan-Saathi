import React from "react";
import { motion } from "framer-motion";
import { Users, HandCoins, Handshake, GraduationCap } from "lucide-react";
import { Button } from "./Button"; // Ensure Button is correctly imported based on your project structure

const joinOptions = [
  { title: 'Want to become Mentor', description: 'Click the button to fill the form below', icon: Users },
  { title: 'Want to become Sponsor', description: 'Click the button to fill the form below', icon: HandCoins },
  { title: 'Want to become Volunteer', description: 'Click the button to fill the form below', icon: Handshake },
  { title: 'Want to partner as community/college', description: 'Click the button to fill the form below', icon: GraduationCap },
];

function JoinUsSection() {
  return (
    <section className="py-20 bg-[#1E1E2F]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">Join Us</h2>
        <div className="h-1 w-20 bg-purple-600 mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {joinOptions.map((option, index) => (
            <motion.div
              key={index}
              className="bg-[#292B3A] p-6 rounded-lg shadow-lg border border-purple-700"
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="flex justify-center mb-4">
                <motion.div 
                  className="bg-[#333] p-3 rounded-full"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                >
                  <option.icon className="h-8 w-8 text-purple-400" />
                </motion.div>
              </div>
              <h3 className="text-xl font-bold text-center mb-2 text-white">
                {option.title}
              </h3>
              <p className="text-gray-400 text-center mb-4">
                {option.description}
              </p>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                Join Us
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default JoinUsSection;
