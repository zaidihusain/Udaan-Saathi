// Header.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { Input } from './Input';
import Logo from '../assets/Logo.jpg';
import { ChevronDown, Search, ArrowRight } from 'lucide-react';

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isJobsDropdownOpen, setIsJobsDropdownOpen] = useState(false);
  const [isTalentDropdownOpen, setIsTalentDropdownOpen] = useState(false);
  const [isTeamDropdownOpen, setIsTeamDropdownOpen] = useState(false);
  const [isEventDropdownOpen, setIsEventDropdownOpen] = useState(false);
  const searchRef = useRef(null);
  const jobsDropdownRef = useRef(null);
  const talentDropdownRef = useRef(null);
  const teamDropdownRef = useRef(null);
  const eventDropdownRef = useRef(null);

  const talentCategories = [
    'Development & IT',
    'Admin & Customer Support',
    'Engineering & Architecture',
    'Design & Creative',
    'Finance & Accounting',
    'Sales & Marketing',
    'HR & Training',
    'Writing & Translation',
    'Legal',
    'Hire freelancers',
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
      if (jobsDropdownRef.current && !jobsDropdownRef.current.contains(event.target)) {
        setIsJobsDropdownOpen(false);
      }
      if (talentDropdownRef.current && !talentDropdownRef.current.contains(event.target)) {
        setIsTalentDropdownOpen(false);
      }
      if (teamDropdownRef.current && !teamDropdownRef.current.contains(event.target)) {
        setIsTeamDropdownOpen(false);
      }
      if (eventDropdownRef.current && !eventDropdownRef.current.contains(event.target)) {
        setIsEventDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-[#1E1E2F] shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img src={Logo} alt="Udaan Saathi" className="h-12 mr-4 rounded-full" />
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-300 hover:text-purple-400">
              Home
            </Link>
            <div className="relative" ref={eventDropdownRef}>
              <button
                className="text-gray-300 hover:text-purple-400 flex items-center"
                onClick={() => setIsEventDropdownOpen(!isEventDropdownOpen)}
              >
                Find Event <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isEventDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-[#292B3A] border border-purple-700 rounded-md shadow-lg z-20">
                  <ul className="py-2">
                    <li>
                      <Link
                        to="/Tech-Events"  className="block px-4 py-2 text-sm text-gray-300 hover:bg-purple-700 hover:text-white rounded-t-md"
                      >Tech Events
                      </Link>
                      </li>
                    <li> 
                      <li>
                      <Link
                        to="/Finance-Seminars"
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-purple-700 hover:text-white rounded-b-md"
                      >
                        Finance Seminars

                      </Link>
                    </li>
                      <Link
                        to="/Healthcare-Expos"  className="block px-4 py-2 text-sm text-gray-300 hover:bg-purple-700 hover:text-white rounded-t-md"
                      >Healthcare Expos

                      </Link>
                      </li>
                    <li>
                      <Link
                        to="/Education-Forums"  className="block px-4 py-2 text-sm text-gray-300 hover:bg-purple-700 hover:text-white rounded-t-md"
                      >Education Forums

                      </Link>
                      </li>
                      <li>
                      <Link
                        to="/Networking-Events"  className="block px-4 py-2 text-sm text-gray-300 hover:bg-purple-700 hover:text-white rounded-t-md"
                      >Networking Events
                      </Link>
                      </li>
                      <li>
                      <Link
                        to="/Online-Sessions"  className="block px-4 py-2 text-sm text-gray-300 hover:bg-purple-700 hover:text-white rounded-t-md"
                      >Online Sessions
                      </Link>
                      </li>
                      <li>
                      <Link
                        to="/Meetups"  className="block px-4 py-2 text-sm text-gray-300 hover:bg-purple-700 hover:text-white rounded-t-md"
                      >Meetups
                      </Link>
                      </li>
                     
                    
                   
                  </ul>
                </div>
              )}
            </div>

           
            {/* Find Team Dropdown */}
            <div className="relative" ref={teamDropdownRef}>
              <button
                className="text-gray-300 hover:text-purple-400 flex items-center"
                onClick={() => setIsTeamDropdownOpen(!isTeamDropdownOpen)}
              >
                Find Team <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isTeamDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-[#292B3A] border border-purple-700 rounded-md shadow-lg z-20">
                  <ul className="py-2">
                    <li>
                      <Link
                        to="/hackathons"
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-purple-700 hover:text-white rounded-t-md"
                      >
                        For Hackathons
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/project-building"
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-purple-700 hover:text-white rounded-b-md"
                      >
                        For Project Building
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Find Talent Dropdown */}
            <div className="relative" ref={talentDropdownRef}>
              <button
                className="text-gray-300 hover:text-purple-400 flex items-center"
                onClick={() => setIsTalentDropdownOpen(!isTalentDropdownOpen)}
              >
                Find Talent <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isTalentDropdownOpen && (
                <div className="absolute left-0 mt-2 w-96 bg-[#292B3A] border border-purple-700 rounded-md shadow-lg z-20">
                  <div className="p-4">
                    <h3 className="font-bold text-xl mb-2 text-white">Talent Marketplace</h3>
                    <p className="text-sm text-gray-400 mb-4">
                      Learn about working with talent or explore your specific hiring needs.
                    </p>
                    <Link
                      to="/hire-talent"
                      className="text-purple-400 hover:underline flex items-center"
                    >
                      Hire on Talent Marketplace <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                  <div className="border-t border-purple-700 p-4">
                    <ul className="grid grid-cols-2 gap-2">
                      {talentCategories.map((category, index) => (
                        <li key={index}>
                          <Link
                            to={`/categories/${category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                            className="text-sm text-gray-400 hover:text-white"
                          >
                            {category}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Find Jobs Dropdown */}
            <div className="relative" ref={jobsDropdownRef}>
              <button
                className="text-gray-300 hover:text-purple-400 flex items-center"
                onClick={() => setIsJobsDropdownOpen(!isJobsDropdownOpen)}
              >
                Find Jobs <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isJobsDropdownOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-[#292B3A] border border-purple-700 rounded-md shadow-lg z-20">
                  <ul className="p-4 space-y-4">
                    <li className="bg-[#383B4B] p-3 rounded-md hover:bg-[#434656]">
                      <Link
                        to="/todays-jobs"
                        className="block text-white text-lg font-bold"
                      >
                        Today's Jobs
                      </Link>
                      <p className="text-sm text-gray-400">
                        Find your dream jobs, work, and rank your career.
                      </p>
                    </li>
                    <li className="bg-[#383B4B] p-3 rounded-md hover:bg-[#434656]">
                      <Link
                        to="/all-jobs"
                        className="block text-white text-lg font-bold"
                      >
                        All Jobs with Your Skill
                      </Link>
                      <p className="text-sm text-gray-400">
                        Explore the kind of jobs available in your field.
                      </p>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative" ref={searchRef}>
            <Input
              type="text"
              placeholder="Search"
              className="w-64 pl-10 bg-[#292B3A] border-purple-700 text-gray-300 placeholder-gray-400"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
          <Link to="/LogIn">
            <Button variant="ghost" className="text-gray-300 hover:text-purple-400">
              Log In
            </Button>
          </Link>
          <Link to="/SignUp">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
