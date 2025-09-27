import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white  shadow-2xl py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-700 text-sm">
          &copy; 2025 DompetKu. All rights reserved.
        </p>

        <div className="flex gap-4">
          <a href="#" className="text-blue-600 hover:underline text-sm">
            Privacy Policy
          </a>
          <a href="#" className="text-blue-600 hover:underline text-sm">
            Terms of Service
          </a>
          <a href="#" className="text-blue-600 hover:underline text-sm">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
