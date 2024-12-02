// LoginPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button'; // Import your custom button component if available
import { Mail, Lock, LogIn } from 'lucide-react'; // Replace with correct icon imports if needed

const LogInPage = () => {
  // Animation variants
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const quoteVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const shapeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 0.3,
      scale: 1,
      transition: { duration: 1, repeat: Infinity, repeatType: 'mirror' },
    },
  };

  return (
    <section className="relative flex items-center justify-center min-h-screen bg-[#1a1a2e] overflow-hidden">
      {/* Left Floating Shapes */}
      <motion.div
        className="absolute left-[-50px] top-1/3 bg-[#ff4f5a] h-20 w-20 rounded-full"
        variants={shapeVariants}
        initial="hidden"
        animate="visible"
      />
      <motion.div
        className="absolute left-[-80px] bottom-1/4 bg-[#48cae4] h-14 w-14 rounded-full"
        variants={shapeVariants}
        initial="hidden"
        animate="visible"
      />

      {/* Right Floating Shapes */}
      <motion.div
        className="absolute right-[-60px] top-1/4 bg-[#ffd166] h-16 w-16 rounded-full"
        variants={shapeVariants}
        initial="hidden"
        animate="visible"
      />
      <motion.div
        className="absolute right-[-40px] bottom-1/3 bg-[#06d6a0] h-12 w-12 rounded-full"
        variants={shapeVariants}
        initial="hidden"
        animate="visible"
      />

      {/* Quote Section */}
      <motion.div
        className="absolute left-0 pl-10 max-w-xs text-white hidden md:block"
        variants={quoteVariants}
        initial="hidden"
        animate="visible"
      >
        <h3 className="text-lg font-semibold mb-2">"Success is not final, failure is not fatal: It is the courage to continue that counts."</h3>
        <p className="text-sm">- Aanif Zaidi</p>
        {/* Winston S. Churchill */}
      </motion.div>

      <motion.div
        className="absolute right-0 pr-10 max-w-xs text-white hidden md:block"
        variants={quoteVariants}
        initial="hidden"
        animate="visible"
      >
        <h3 className="text-lg font-semibold mb-2">"Your limitation—it’s only your."</h3>
        <p className="text-sm">- Husain</p>
      </motion.div>
       {/* hy */}

      <motion.div
        className="bg-[#2b2b42] p-8 rounded-lg shadow-lg w-full max-w-md text-center"
        initial="hidden"
        animate="visible"
        variants={formVariants}
      >
        {/* Header */}
        <motion.h2
          className="text-3xl font-bold text-white mb-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Welcome Back
        </motion.h2>
        <motion.p
          className="text-gray-400 mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          Login to your account to continue
        </motion.p>

        {/* Login Form */}
        <form className="space-y-6">
          {/* Email Field */}
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 pr-4 py-3 bg-[#1f1f38] text-white rounded-full focus:ring-2 focus:ring-[#7D3C98] focus:outline-none"
              required
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-4 py-3 bg-[#1f1f38] text-white rounded-full focus:ring-2 focus:ring-[#7D3C98] focus:outline-none"
              required
            />
          </div>

          {/* Forgot Password for testing purpose*/}
          <motion.div
            className="text-right"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <a href="#" className="text-[#48cae4] hover:underline text-sm">
              Forgot Password?
            </a>
          </motion.div>

          {/* Login Button confirmed */}
          <Button
            className="w-full py-3 text-white bg-[#7D3C98] rounded-full hover:bg-[#5a2671] transition duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
            type="submit"
          >
            <LogIn className="mr-2" /> Login
          </Button>
        </form>

        {/* Divider */}
        <motion.div
          className="mt-6 flex items-center justify-center"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 0.5 }}
        >
          <hr className="border-gray-600 w-1/3" />
          <span className="text-gray-500 mx-2">or</span>
          <hr className="border-gray-600 w-1/3" />
        </motion.div>

        {/* Social Login Buttons and correction of issue of email (zaidihusain611@gmai.com)*/}
        <div className="mt-6 flex flex-col space-y-3">
          <Button
            className="w-full py-3 text-white bg-[#4285F4] rounded-full hover:bg-[#357AE8] transition duration-300 shadow-lg hover:shadow-xl"
            type="button"
          >
            Continue with Google
          </Button>
          <Button
            className="w-full py-3 text-white bg-[#2867B2] rounded-full hover:bg-[#1f4e7b] transition duration-300 shadow-lg hover:shadow-xl"
            type="button"
          >
            Continue with LinkedIn
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default LogInPage;
