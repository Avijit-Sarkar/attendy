/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const Footer = () => {
  return (
    <footer class="bg-white py-8 md:py-16">
      <div class="container max-w-screen-xl mx-auto px-4">
        <div class="lg:flex flex-col md:flex-row text-center lg:text-left lg:justify-between">
          <div class="mb-10 lg:mb-0">
            <span className="mb-5 mx-auto lg:mx-0  text-green-400 text-4xl font-semibold">
              Attendy
            </span>

            <p class="font-normal text-gray-400 text-md">
              This is a digital platform designed to
              <br /> streamline and automate the process of tracking
              <br /> and managing attendance records in various institutions
            </p>
          </div>
        </div>

        <hr class="text-gray-300 mt-10" />

        <p class="font-normal text-gray-400 text-md text-center mt-5">
          &copy; 2024 Attendy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
