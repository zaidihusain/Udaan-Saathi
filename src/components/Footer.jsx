// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-[#e0e0e0] py-12 border-t border-[#2c2c47]"> {/* Update with new background, text, and border colors */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#ffffff]">For Clients</h3> {/* Update heading color */}
            <ul className="space-y-2">
              <li>
                <Link to="/how-to-hire" className="hover:underline text-[#b0b0b0] hover:text-white"> {/* Update link color */}
                  How to Hire
                </Link>
              </li>
              <li>
                <Link to="/talent-marketplace" className="hover:underline text-[#b0b0b0] hover:text-white">
                  Talent Marketplace
                </Link>
              </li>
              <li>
                <Link to="/project-catalog" className="hover:underline text-[#b0b0b0] hover:text-white">
                  Project Catalog
                </Link>
              </li>
              <li>
                <Link to="/enterprise" className="hover:underline text-[#b0b0b0] hover:text-white">
                  Enterprise
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#ffffff]">For Talent</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/how-to-find-work" className="hover:underline text-[#b0b0b0] hover:text-white">
                  How to Find Work
                </Link>
              </li>
              <li>
                <Link to="/direct-contracts" className="hover:underline text-[#b0b0b0] hover:text-white">
                  Direct Contracts
                </Link>
              </li>
              <li>
                <Link to="/find-freelance-jobs" className="hover:underline text-[#b0b0b0] hover:text-white">
                  Find Freelance Jobs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#ffffff]">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help-support" className="hover:underline text-[#b0b0b0] hover:text-white">
                  Help & Support
                </Link>
              </li>
              <li>
                <Link to="/success-stories" className="hover:underline text-[#b0b0b0] hover:text-white">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:underline text-[#b0b0b0] hover:text-white">
                  Udaan Saathi Reviews
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#ffffff]">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about-us" className="hover:underline text-[#b0b0b0] hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/leadership" className="hover:underline text-[#b0b0b0] hover:text-white">
                  Leadership
                </Link>
              </li>
              <li>
                <Link to="/investor-relations" className="hover:underline text-[#b0b0b0] hover:text-white">
                  Investor Relations
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:underline text-[#b0b0b0] hover:text-white">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#2c2c47] text-center"> {/* Update border color */}
          <p className="text-[#b0b0b0]">&copy; 2023 Udaan Saathi Inc. All rights reserved.</p> {/* Update text color */}
        </div>
      </div>
    </footer>
  );
}
